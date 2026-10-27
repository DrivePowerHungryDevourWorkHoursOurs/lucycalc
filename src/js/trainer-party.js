// trainer-party.js — for BOTH Pokémon boxes (#p1 and #p2):
//   * a sprite of the selected species in the top-right corner of the box
//   * the selected trainer's whole team under the box (click a member to load it)
// Load AFTER jQuery, gen9.js, trainers.js and the calc's own scripts.
$(function () {
  var TRAINER_RE = /^Lvl (\d+) (.+)$/;

  function toID(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ""); }

  // ---- trainer index: trainer name -> [{species, setName, set, slot}] ----
  var index = {};
  Object.keys(SETDEX_SV).forEach(function (species) {
    Object.keys(SETDEX_SV[species]).forEach(function (setName) {
      var m = TRAINER_RE.exec(setName);
      if (!m) return;
      var set = SETDEX_SV[species][setName];
      (index[m[2]] = index[m[2]] || []).push({ species: species, setName: setName, set: set, slot: set.slot });
    });
  });
  Object.keys(index).forEach(function (t) {
    index[t].forEach(function (e, i) { e._order = i; });
    index[t].sort(function (a, b) {
      var sa = a.slot == null ? 99 : a.slot, sb = b.slot == null ? 99 : b.slot;
      return sa - sb || a._order - b._order;
    });
  });

  // ---- EXP (hidden unless BASE_EXP_YIELD has data) ----
  function expGain(entry) {
    var table = (typeof BASE_EXP_YIELD !== "undefined") ? BASE_EXP_YIELD : {};
    var b = table[toID(entry.species)];
    if (!b) return null;
    var cfg = (typeof TRAINER_EXP_CONFIG !== "undefined") ? TRAINER_EXP_CONFIG : { playerLevel: 100, trainerMultiplier: 1.5 };
    var L = entry.set.level || +TRAINER_RE.exec(entry.setName)[1];
    return Math.floor((cfg.trainerMultiplier * b * L) / 5 * Math.pow((2 * L + 10) / (L + cfg.playerLevel + 10), 2.5) + 1);
  }

  // ---- sprites ----
  // Regional forms are hyphenated ("geodude-alola"), base species are not ("hooh"), so try both,
  // in the pixel set first and the dex set (covers newer forms) second.
  function spriteUrls(species) {
    var hyphen = String(species).toLowerCase().replace(/[^a-z0-9-]/g, "");
    var plain = toID(species);
    var ids = hyphen === plain ? [plain] : [hyphen, plain];
    var urls = [];
    ["gen5", "dex"].forEach(function (set) {
      ids.forEach(function (id) {
        urls.push("https://play.pokemonshowdown.com/sprites/" + set + "/" + id + ".png");
      });
    });
    return urls;
  }
  function loadSprite($img, species) {
    var urls = spriteUrls(species), i = 0;
    $img.off("error").css("visibility", "visible");
    $img.on("error", function () {
      i++;
      if (i < urls.length) $img.attr("src", urls[i]);
      else $img.css("visibility", "hidden");
    });
    $img.attr("src", urls[0]);
  }

  // ---- one side (#p1 or #p2) ----
  function setupSide(sideId) {
    var $box = $("#" + sideId);
    var $selector = $("#" + sideId + " input.set-selector").first();
    if (!$box.length || !$selector.length) { console.warn("trainer-party: #" + sideId + " not found"); return; }

    var $sprite = $('<img class="tp-sprite" alt="">').css("visibility", "hidden").appendTo($box);
    var $panel = $('<div class="trainer-party" hidden></div>').appendTo($box);

    function parseSelected() {
      var full = $selector.val() || "";
      var i = full.indexOf(" (");
      if (i < 0) return null;
      return { species: full.substring(0, i), setName: full.substring(i + 2, full.length - 1) };
    }

    function loadIntoSide(entry) {
      var full = entry.species + " (" + entry.setName + ")";
      var hasSelect2 = !!$selector.data("select2");
      if (hasSelect2) $selector.select2("data", { id: full, text: full });
      $selector.val(full);
      // Select2 re-runs the calc's default-selection function on every change event, which
      // resets the label to the default set. Its own flag tells it to skip that.
      $selector.data("select2-change-triggered", true);
      $selector.trigger("change");
      $selector.data("select2-change-triggered", false);
      if (hasSelect2) {
        setTimeout(function () {
          $selector.select2("container").find(".select2-chosen").text(full);
        }, 0);
      }
    }

    var lastSpecies = null;
    function render() {
      var sel = parseSelected();

      // sprite (any set, trainer or not)
      if (sel && sel.species !== lastSpecies) { lastSpecies = sel.species; loadSprite($sprite, sel.species); }
      if (!sel) { lastSpecies = null; $sprite.css("visibility", "hidden"); }

      // team panel (trainer sets only)
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
        loadSprite($('<img class="tp-icon" alt="">').appendTo($card), e.species);
        $('<div class="tp-name"></div>').text(e.species).appendTo($card);
        $('<div class="tp-moves"></div>').html((e.set.moves || []).map(function (mv) {
          return $("<div>").text(mv).html();
        }).join("<br>")).appendTo($card);
        if (exp != null) $('<div class="tp-exp"></div>').text("+" + exp + " EXP").appendTo($card);
        $card.on("click", function () { loadIntoSide(e); });
        $row.append($card);
      });
      if (anyExp) $('<div class="tp-total"></div>').text("Total: " + total + " EXP").appendTo($panel);
    }

    var lastValue = null;
    function check() {
      var v = $selector.val();
      if (v !== lastValue) { lastValue = v; render(); }
    }
    $selector.on("change", check);
    setInterval(check, 300); // fallback if the dropdown doesn't fire change events
    check();
  }

  setupSide("p1");
  setupSide("p2");
  console.log("trainer-party: ready,", Object.keys(index).length, "trainer(s) indexed");
});