// trainer-party.js — for BOTH Pokémon boxes (#p1 and #p2):
//   * a sprite of the selected species in the top-right corner of the box
//   * the selected trainer's whole team under the box (click a member to load it)
// Load AFTER jQuery, gen9.js, trainers.js and the calc's own scripts.
$(function () {
  var TRAINER_RE = /^Lvl (\d+) (.+)$/;

  function toID(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ""); }

  // Item sprites: local folder first (ALLCAPS, no spaces/hyphens: "Focus Sash" -> FOCUSSASH.png),
  // then PokeAPI/sprites. Z-Crystals use the "<name>-z--bag" icons on PokeAPI.
  // Tried in order: relative to the page, then the repo's raw files (works wherever the page is hosted).
  var LOCAL_ITEM_BASES = [
    "src/img/Items/",
    "https://raw.githubusercontent.com/DrivePowerHungryDevourWorkHoursOurs/lucycalc/main/src/img/Items/"
  ];
  var ITEM_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";
  function itemUrls(item) {
    var clean = item.replace(/['’.]/g, "");
    var local = clean.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    var slug = clean.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    var urls = LOCAL_ITEM_BASES.map(function (b) { return b + local + ".png"; });
    if (/ium[ -]z$/i.test(clean)) {
      urls.push(ITEM_BASE + slug + "--bag.png", ITEM_BASE + slug + "-bag.png");
    }
    urls.push(ITEM_BASE + slug + ".png");
    return urls;
  }

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

  // ---- Box: every imported set named "Box" ----
  var BOX_NAME = "Box";
  var BOX_SIDE_KEY = "tp-box-side";
  var boxSide = "p1"; // left by default
  try { if (localStorage.getItem(BOX_SIDE_KEY) === "p2") boxSide = "p2"; } catch (e) {}
  var boxRefreshers = [];

  function readBox() {
    var out = [], seen = {};
    function scan(dex) {
      if (!dex) return;
      Object.keys(dex).forEach(function (species) {
        var s = dex[species] && dex[species][BOX_NAME];
        if (s && !seen[species]) { seen[species] = true; out.push({ species: species, setName: BOX_NAME, set: s }); }
      });
    }
    try { if (typeof SETDEX_CUSTOM !== "undefined") scan(SETDEX_CUSTOM); } catch (e) {}
    try { scan(JSON.parse(localStorage.customsets || "{}")); } catch (e) {}
    return out;
  }

  // Right-click a box card twice (within 3s) to remove it
  var armedSpecies = null, armTimer = null;
  function paintArmed() {
    $(".box-party .tp-card").each(function () {
      var on = $(this).data("species") === armedSpecies && armedSpecies !== null;
      this.style.setProperty("border-color", on ? "#e5484d" : "", "important");
      this.style.setProperty("background", on ? "rgba(229, 72, 77, 0.18)" : "", "important");
    });
  }
  function disarm() { armedSpecies = null; clearTimeout(armTimer); paintArmed(); }
  function removeFromBox(species) {
    function strip(dex) {
      if (!dex || !dex[species] || !(BOX_NAME in dex[species])) return;
      delete dex[species][BOX_NAME];
      if (!Object.keys(dex[species]).length) delete dex[species];
    }
    try { if (typeof SETDEX_CUSTOM !== "undefined") strip(SETDEX_CUSTOM); } catch (e) {}
    try { if (typeof SETDEX_SV !== "undefined") strip(SETDEX_SV); } catch (e) {}
    try {
      var saved = JSON.parse(localStorage.customsets || "{}");
      strip(saved);
      localStorage.customsets = JSON.stringify(saved);
    } catch (e) {}
  }

  // Side toggle, placed right next to the "Box (n)" heading
  function makeBoxToggle() {
    var $sel = $('<select class="tp-box-side"><option value="p1">Left side</option><option value="p2">Right side</option></select>')
      .val(boxSide)
      .css({ marginLeft: "10px", fontSize: "11px" })
      .on("change", function () {
        boxSide = this.value === "p2" ? "p2" : "p1";
        try { localStorage.setItem(BOX_SIDE_KEY, boxSide); } catch (e) {}
        boxRefreshers.forEach(function (f) { f(); });
      });
    return $sel;
  }

  // jQuery .css() can't set !important, which is needed to beat the stylesheet's own !important rules
  function imp($el, props) {
    $el.each(function () {
      var el = this;
      Object.keys(props).forEach(function (k) { el.style.setProperty(k, props[k], "important"); });
    });
    return $el;
  }

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
    var name = String(species);
    var plain = toID(name);
    var ids = [];
    var h = name.indexOf("-");
    // Showdown only hyphenates the first split: "Necrozma-Dusk-Mane" -> "necrozma-duskmane",
    // "Mr. Mime-Galar" -> "mrmime-galar". Names like "Ho-Oh" / "Porygon-Z" have no hyphen
    // in the file name, so the plain id is the fallback.
    if (h > 0) ids.push(toID(name.substring(0, h)) + "-" + toID(name.substring(h + 1)));
    ids.push(plain);
    var urls = [];
    ["gen5", "dex"].forEach(function (set) {
      ids.forEach(function (id) {
        urls.push("https://play.pokemonshowdown.com/sprites/" + set + "/" + id + ".png");
      });
    });
    return urls;
  }
  // Party cards use the small sprites from github.com/May8th1995/sprites (flat folder,
  // files named exactly like the species, e.g. "Geodude-Alola.png"), then fall back to Showdown.
  var MINISPRITE_BASE = "https://raw.githubusercontent.com/May8th1995/sprites/master/";
  function partySpriteUrls(species) {
    return [MINISPRITE_BASE + encodeURIComponent(species) + ".png"].concat(spriteUrls(species));
  }
  function loadSprite($img, urls) {
    var i = 0;
    $img.off("error").css("visibility", "visible");
    $img.on("error", function () {
      i++;
      if (i < urls.length) $img.attr("src", urls[i]);
      else $img.css("visibility", "hidden");
    });
    $img.attr("src", urls[0]);
  }

  // Shrink a name's font until its longest unbreakable chunk fits inside the card.
  function fitName($el) {
    var el = $el[0];
    var size = parseFloat($el.css("font-size"));
    while (el.scrollWidth > el.clientWidth && size > 6) {
      size -= 0.5;
      $el.css("font-size", size + "px");
    }
  }

  // ---- one side (#p1 or #p2) ----
  function setupSide(sideId) {
    var $box = $("#" + sideId);
    var $selector = $("#" + sideId + " input.set-selector").first();
    if (!$box.length || !$selector.length) { console.warn("trainer-party: #" + sideId + " not found"); return; }

    var $sprite = $('<img class="tp-sprite" alt="">').css("visibility", "hidden").appendTo($box);
    var $item = $('<img class="tp-item" alt="">').css({
      position: "absolute", top: "128px", right: "38px", width: "48px", height: "48px",
      objectFit: "contain", imageRendering: "pixelated", pointerEvents: "none", visibility: "hidden"
    }).appendTo($box);
    var $panel = $('<div class="trainer-party" hidden></div>').appendTo($box);
    // Appended after the trainer panel, so it automatically sits below the trainer team
    var $boxPanel = $('<div class="trainer-party box-party" hidden></div>').appendTo($box);

    var lastItem = null;
    function updateItem() {
      var item = ($box.find("select.item").first().val() || "").trim();
      if (item === lastItem) return;
      lastItem = item;
      if (!item || /^\(?none\)?$/i.test(item)) { $item.css("visibility", "hidden"); return; }
      var urls = itemUrls(item);
      loadSprite($item, urls);
      // debug: shows in the browser console which source actually loaded
      $item.off("load.tp").on("load.tp", function () {
        console.log("trainer-party item:", item, "->", $item.attr("src"), "(source #" + (urls.indexOf($item.attr("src")) + 1) + " of " + urls.length + ")");
      });
    }

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

    // The Forme dropdown changes the actual species without changing the set label,
    // so prefer it when it is showing.
    function currentSpecies(sel) {
      var $forme = $box.find("select.forme").first();
      var f = $forme.val();
      // The calc shows/hides this row with jQuery show()/hide() and leaves the "hide" class on it,
      // so check whether it is actually displayed rather than looking at the class.
      if ($forme.length && f && $forme.closest("div").css("display") !== "none") return f;
      return sel ? sel.species : null;
    }

    var lastSpecies = null;
    function updateSprite(sel) {
      var sp = currentSpecies(sel);
      if (!sp) { lastSpecies = null; $sprite.css("visibility", "hidden"); return; }
      if (sp !== lastSpecies) { lastSpecies = sp; loadSprite($sprite, spriteUrls(sp)); }
    }

    function buildCard(e, exp, active, showItem) {
      var $card = $('<div class="tp-card"></div>')
        .toggleClass("tp-active", active)
        .attr("title", e.species + " (" + e.setName + ")" + ((e.set.moves || []).length ? "\n" + e.set.moves.join(", ") : ""));
      loadSprite($('<img class="tp-icon" alt="">').appendTo($card), partySpriteUrls(e.species));
      $('<div class="tp-name"></div>').text(e.species)
        .css({ wordBreak: "normal", overflowWrap: "normal" })
        .appendTo($card);
      if (showItem && e.set.item) {
        loadSprite($('<img class="tp-card-item" alt="">').css({
          display: "block", margin: "2px auto 0", width: "22px", height: "22px",
          objectFit: "contain", imageRendering: "pixelated", pointerEvents: "none"
        }).appendTo($card), itemUrls(e.set.item));
      }
      if (exp != null) $('<div class="tp-exp"></div>').text("+" + exp + " EXP").appendTo($card);
      $card.on("click", function () { loadIntoSide(e); });
      return $card;
    }

    function renderBox() {
      if (boxSide !== sideId) { $boxPanel.attr("hidden", true).empty(); return; }
      var sel = parseSelected();
      var entries = readBox();
      $boxPanel.empty().removeAttr("hidden");
      var $title = $('<div class="tp-box-title"></div>').appendTo($boxPanel);
      imp($title, { display: "flex", "align-items": "center", "justify-content": "space-between", gap: "8px" });
      imp($('<span></span>').text("Box (" + entries.length + ")").appendTo($title), { "white-space": "nowrap" });
      makeBoxToggle().css("marginLeft", "0").appendTo($title);
      if (!entries.length) {
        $('<div class="tp-box-empty"></div>').text('Import sets with the name "Box" to add them here.').appendTo($boxPanel);
        return;
      }
      var $scroll = $('<div class="tp-box-scroll"></div>').appendTo($boxPanel);
      var $grid = $('<div class="tp-box-grid"></div>').appendTo($scroll);
      imp($grid, {
        display: "grid",
        "grid-template-columns": "repeat(6, minmax(0, 1fr))",
        gap: "4px",
        width: "100%",
        "box-sizing": "border-box"
      });
      entries.forEach(function (e) {
        var active = !!sel && sel.species === e.species && sel.setName === BOX_NAME;
        var $c = buildCard(e, null, active, false);
        imp($c, { flex: "none", width: "auto", "max-width": "none", "min-width": "0" });
        $c.data("species", e.species)
          .attr("title", $c.attr("title") + "\nRight-click twice to remove from box")
          .on("contextmenu", function (ev) {
            ev.preventDefault();
            if (armedSpecies === e.species) {
              disarm();
              removeFromBox(e.species);
              boxRefreshers.forEach(function (f) { f(); });
            } else {
              armedSpecies = e.species;
              paintArmed();
              clearTimeout(armTimer);
              armTimer = setTimeout(disarm, 3000);
            }
          });
        $grid.append($c);
      });
      paintArmed();
      $boxPanel.find(".tp-name").each(function () { fitName($(this)); });
    }

    function render() {
      var sel = parseSelected();
      updateSprite(sel);

      // team panel (trainer sets only)
      var m = sel && TRAINER_RE.exec(sel.setName);
      if (!m || !index[m[2]]) { $panel.attr("hidden", true).empty(); return; }

      var party = index[m[2]], total = 0, anyExp = false;
      $panel.empty().removeAttr("hidden");
      var $row = $('<div class="tp-row"></div>').appendTo($panel);
      party.forEach(function (e) {
        var exp = expGain(e);
        if (exp != null) { total += exp; anyExp = true; }
        var $card = buildCard(e, exp, e.species === sel.species && e.setName === sel.setName, true);
        var $name = $card.find(".tp-name");
        $row.append($card);
        fitName($name); // needs to be in the DOM to measure
      });
      if (anyExp) $('<div class="tp-total"></div>').text("Total: " + total + " EXP").appendTo($panel);
    }

    var lastKey = null, lastBoxKey = null;
    function check() {
      var sel = parseSelected();
      var key = ($selector.val() || "") + "|" + (currentSpecies(sel) || "");
      if (key !== lastKey) { lastKey = key; render(); }
      var bKey = boxSide + "|" + ($selector.val() || "") + "|" +
        (boxSide === sideId ? JSON.stringify(readBox()) : "");
      if (bKey !== lastBoxKey) { lastBoxKey = bKey; renderBox(); }
      updateItem();
    }
    boxRefreshers.push(function () { lastBoxKey = null; check(); });
    $selector.on("change", check);
    $box.on("change", "select.forme", check);
    $box.on("change", "select.item", check);
    setInterval(check, 300); // fallback if the dropdown doesn't fire change events
    check();
  }

  setupSide("p1");
  setupSide("p2");
  console.log("trainer-party: ready,", Object.keys(index).length, "trainer(s) indexed");
});
