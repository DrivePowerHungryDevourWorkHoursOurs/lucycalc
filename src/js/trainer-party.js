// trainer-party.js — shows the selected trainer's whole team under Pokémon 2.
// Load AFTER jQuery, gen9.js, trainers.js and the calc's own scripts.
$(function () {
  var TRAINER_RE = /^Lvl (\d+) (.+)$/;
  var $p2 = $("#p2");
  var $selector = $("#p2 .set-selector");
  if (!$p2.length || !$selector.length) { console.warn("trainer-party: #p2 / .set-selector not found"); return; }

  var $panel = $('<div id="trainer-party" class="trainer-party" hidden></div>');
  $p2.append($panel);

  function toID(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ""); }

  // trainer name -> [{species, setName, set, slot}]
  var index = {};
  Object.keys(SETDEX_SV).forEach(function (species) {
    Object.keys(SETDEX_SV[species]).forEach(function (setName) {
      var m = TRAINER_RE.exec(setName);
      if (!m) return;
      var trainer = m[2];
      (index[trainer] = index[trainer] || []).push({
        species: species, setName: setName, set: SETDEX_SV[species][setName],
        slot: SETDEX_SV[species][setName].slot
      });
    });
  });
  Object.keys(index).forEach(function (t) {
    index[t].forEach(function (e, i) { e._order = i; });
    index[t].sort(function (a, b) {
      var sa = a.slot == null ? 99 : a.slot, sb = b.slot == null ? 99 : b.slot;
      return sa - sb || a._order - b._order;
    });
  });

  function expGain(entry) {
    var table = (typeof BASE_EXP_YIELD !== "undefined") ? BASE_EXP_YIELD : {};
    var b = table[toID(entry.species)];
    if (!b) return null;
    var cfg = (typeof TRAINER_EXP_CONFIG !== "undefined") ? TRAINER_EXP_CONFIG : { playerLevel: 100, trainerMultiplier: 1.5 };
    var L = entry.set.level || +TRAINER_RE.exec(entry.setName)[1];
    var Lp = cfg.playerLevel;
    return Math.floor((cfg.trainerMultiplier * b * L) / 5 * Math.pow((2 * L + 10) / (L + Lp + 10), 2.5) + 1);
  }

  function parseSelected() {
    var full = $selector.val() || "";
    var i = full.indexOf(" (");
    if (i < 0) return null;
    return { species: full.substring(0, i), setName: full.substring(i + 2, full.length - 1) };
  }

  function loadIntoP2(entry) {
    var full = entry.species + " (" + entry.setName + ")";
    if ($selector.data("select2")) $selector.select2("val", full);
    else $selector.val(full);
    $selector.trigger("change");
  }

  function render() {
    var sel = parseSelected();
    var m = sel && TRAINER_RE.exec(sel.setName);
    if (!m || !index[m[2]]) { $panel.attr("hidden", true).empty(); return; }

    var party = index[m[2]], total = 0, anyExp = false;
    $panel.empty().removeAttr("hidden");

    var $row = $('<div class="tp-row"></div>').appendTo($panel);
    party.forEach(function (e) {
      var exp = expGain(e);
      if (exp != null) { total += exp; anyExp = true; }
      var $card = $('<div class="tp-card"></div>')
        .toggleClass("tp-active", e.species === sel.species && e.setName === sel.setName)
        .attr("title", e.species + " — " + e.setName);
      $('<img class="tp-icon" alt="">')
        .attr("src", "https://play.pokemonshowdown.com/sprites/gen5/" + toID(e.species) + ".png")
        .on("error", function () { $(this).hide(); })
        .appendTo($card);
      $('<div class="tp-name"></div>').text(e.species).appendTo($card);
      $('<div class="tp-moves"></div>').html((e.set.moves || []).map(function (mv) {
        return $("<div>").text(mv).html();
      }).join("<br>")).appendTo($card);
      if (exp != null) $('<div class="tp-exp"></div>').text("+" + exp + " EXP").appendTo($card);
      $card.on("click", function () { loadIntoP2(e); });
      $row.append($card);
    });
    if (anyExp) $('<div class="tp-total"></div>').text("Total: " + total + " EXP").appendTo($panel);
  }

  $selector.on("change", render);
  render();
});
