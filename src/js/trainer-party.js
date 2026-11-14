// trainer-party.js — for BOTH Pokémon boxes (#p1 and #p2):
//   * a sprite of the selected species in the top-right corner of the box
//   * the selected trainer's whole team under the box (click a member to load it), titled "Trainer Party"
//   * a "Player Party" section above the Box; drag Box Pok\u00e9mon between the two (or to re-order)
// Load AFTER jQuery, gen9.js, trainers.js and the calc's own scripts.
$(function () {
  // An optional trailing " [2]", " [3]"... is ignored for grouping, so the same Pok\u00e9mon can be on one team twice
  var TRAINER_RE = /^Lvl (\d+) (.+?)(?: \[\d+\])?$/;

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

  // Trainer order = the order trainers first appear in trainers.js (TRAINER_SETS_SV),
  // with any trainers from other sources appended after.
  var trainerOrder = (function () {
    var out = [], seen = {};
    function add(dex) {
      if (!dex) return;
      Object.keys(dex).forEach(function (sp) {
        Object.keys(dex[sp]).forEach(function (sn) {
          var m = TRAINER_RE.exec(sn);
          if (m && index[m[2]] && !seen[m[2]]) { seen[m[2]] = true; out.push(m[2]); }
        });
      });
    }
    try { if (typeof TRAINER_SETS_SV !== "undefined") add(TRAINER_SETS_SV); } catch (e) {}
    Object.keys(index).forEach(function (t) { if (!seen[t]) { seen[t] = true; out.push(t); } });
    return out;
  })();

  // ---- Box: every imported set named "Box" ----
  var BOX_NAME = "Box";
  // Last set loaded on each side (a trainer set or a "Box" set) is remembered across refreshes
  var LAST_KEY_PREFIX = "tp-last-trainer-";
  var sideDefaultLoaders = []; // each side registers a function that puts it back on its default set
  function resetSavedTrainers() {
    ["p1", "p2"].forEach(function (id) {
      try { localStorage.removeItem(LAST_KEY_PREFIX + id); } catch (e) {}
    });
  }
  var BOX_SIDE_KEY = "tp-box-side";
  var boxSide = "p1"; // left by default
  try { if (localStorage.getItem(BOX_SIDE_KEY) === "p2") boxSide = "p2"; } catch (e) {}
  var boxRefreshers = [];

  // ---- Player Party / Box layout ----
  // Party membership and Box order are kept in localStorage. The sets themselves stay "Box" sets,
  // so editing, exporting and removing work the same for both sections.
  var PARTY_KEY = "tp-player-party";
  var ORDER_KEY = "tp-box-order";
  function loadList(key) {
    try { var a = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(a) ? a : []; } catch (e) { return []; }
  }
  function saveList(key, list) {
    try { localStorage.setItem(key, JSON.stringify(list)); } catch (e) {}
  }
  // -> { party: [entries, in party order], box: [the rest, in saved order] }
  function splitBox() {
    var entries = readBox(), by = Object.create(null);
    entries.forEach(function (e) { by[e.species] = e; });
    var inParty = Object.create(null), party = [];
    loadList(PARTY_KEY).forEach(function (sp) {
      if (by[sp] && !inParty[sp]) { inParty[sp] = true; party.push(by[sp]); }
    });
    var rank = Object.create(null);
    loadList(ORDER_KEY).forEach(function (sp, i) { if (!(sp in rank)) rank[sp] = i; });
    var box = entries.filter(function (e) { return !inParty[e.species]; });
    box.forEach(function (e, i) { e._o = i; });
    box.sort(function (a, b) {
      var ra = (a.species in rank) ? rank[a.species] : 1e6;
      var rb = (b.species in rank) ? rank[b.species] : 1e6;
      return ra - rb || a._o - b._o;
    });
    return { party: party, box: box };
  }
  // Move one Pokémon into the party (toParty) or the Box, placed before `beforeSpecies` (or at the end).
  function moveBoxEntry(species, toParty, beforeSpecies) {
    if (beforeSpecies === species) return;
    var layout = splitBox();
    var party = layout.party.map(function (e) { return e.species; }).filter(function (s) { return s !== species; });
    var box = layout.box.map(function (e) { return e.species; }).filter(function (s) { return s !== species; });
    var list = toParty ? party : box;
    var i = beforeSpecies ? list.indexOf(beforeSpecies) : -1;
    if (i < 0) list.push(species); else list.splice(i, 0, species);
    saveList(PARTY_KEY, party);
    saveList(ORDER_KEY, box);
    boxRefreshers.forEach(function (f) { f(); });
  }

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
    allDexes().forEach(strip);
    saveList(PARTY_KEY, loadList(PARTY_KEY).filter(function (s) { return s !== species; }));
    saveList(ORDER_KEY, loadList(ORDER_KEY).filter(function (s) { return s !== species; }));
    try {
      var saved = JSON.parse(localStorage.customsets || "{}");
      strip(saved);
      localStorage.customsets = JSON.stringify(saved);
    } catch (e) {}
  }

  // moveset_import.js copies every imported set into all of these, so edits/removals must hit all of them
  function allDexes() {
    var d = [];
    try { if (typeof SETDEX_CHAMPIONS !== "undefined") d.push(SETDEX_CHAMPIONS); } catch (e) {}
    try { if (typeof SETDEX_RBY !== "undefined") d.push(SETDEX_RBY); } catch (e) {}
    try { if (typeof SETDEX_GSC !== "undefined") d.push(SETDEX_GSC); } catch (e) {}
    try { if (typeof SETDEX_ADV !== "undefined") d.push(SETDEX_ADV); } catch (e) {}
    try { if (typeof SETDEX_DPP !== "undefined") d.push(SETDEX_DPP); } catch (e) {}
    try { if (typeof SETDEX_BW !== "undefined") d.push(SETDEX_BW); } catch (e) {}
    try { if (typeof SETDEX_XY !== "undefined") d.push(SETDEX_XY); } catch (e) {}
    try { if (typeof SETDEX_SM !== "undefined") d.push(SETDEX_SM); } catch (e) {}
    try { if (typeof SETDEX_SS !== "undefined") d.push(SETDEX_SS); } catch (e) {}
    try { if (typeof SETDEX_SV !== "undefined") d.push(SETDEX_SV); } catch (e) {}
    return d;
  }

  // Write an edited set back into every place the calc / this script keeps "Box" sets
  function saveBoxSet(species, set) {
    function put(dex) {
      if (dex && dex[species] && (BOX_NAME in dex[species])) dex[species][BOX_NAME] = set;
    }
    allDexes().forEach(put);
    try {
      var saved = JSON.parse(localStorage.customsets || "{}");
      if (saved[species] && (BOX_NAME in saved[species])) {
        saved[species][BOX_NAME] = set;
        localStorage.customsets = JSON.stringify(saved);
      }
    } catch (e) {}
  }

  // A Box Pokémon changed form (e.g. Charizard -> Charizard-Mega-X): move its "Box" set to the new
  // species, keeping its place in the Player Party / Box order. Replaces an existing Box set of the new form.
  function renameBoxEntry(oldSp, newSp, set) {
    function strip(dex) {
      if (!dex || !dex[oldSp] || !(BOX_NAME in dex[oldSp])) return;
      delete dex[oldSp][BOX_NAME];
      if (!Object.keys(dex[oldSp]).length) delete dex[oldSp];
    }
    allDexes().forEach(strip);
    var customsets = {};
    try { customsets = JSON.parse(localStorage.customsets || "{}"); } catch (e) {}
    strip(customsets);
    customsets[newSp] = customsets[newSp] || {};
    customsets[newSp][BOX_NAME] = set;
    if (typeof updateDex === "function") {
      updateDex(customsets); // fills every SETDEX_* and saves localStorage.customsets
    } else {
      allDexes().forEach(function (dex) {
        dex[newSp] = dex[newSp] || {};
        dex[newSp][BOX_NAME] = set;
      });
      try { localStorage.customsets = JSON.stringify(customsets); } catch (e) {}
    }
    [PARTY_KEY, ORDER_KEY].forEach(function (key) {
      var seen = {};
      saveList(key, loadList(key).map(function (sp) { return sp === oldSp ? newSp : sp; })
        .filter(function (sp) { if (seen[sp]) return false; seen[sp] = true; return true; }));
    });
  }

  // ---- Export Box -> pokepast.es ----
  var STAT_LABEL = { hp: "HP", at: "Atk", df: "Def", sa: "SpA", sd: "SpD", sp: "Spe" };
  var STAT_ORDER = ["hp", "at", "df", "sa", "sd", "sp"];
  function setToShowdown(e) {
    var s = e.set, l = [];
    var head = e.species;
    if (s.gender === "M" || s.gender === "F") head += " (" + s.gender + ")";
    if (s.item) head += " @ " + s.item;
    l.push(head);
    if (s.ability) l.push("Ability: " + s.ability);
    if (s.level && +s.level !== 100) l.push("Level: " + s.level);
    if (s.teraType) l.push("Tera Type: " + s.teraType);
    var evs = [], ivs = [];
    STAT_ORDER.forEach(function (st) {
      var ev = parseInt(s.evs && s.evs[st], 10);
      if (ev > 0) evs.push(ev + " " + STAT_LABEL[st]);
      var iv = parseInt(s.ivs && s.ivs[st], 10);
      if (!isNaN(iv) && iv !== 31) ivs.push(iv + " " + STAT_LABEL[st]);
    });
    if (evs.length) l.push("EVs: " + evs.join(" / "));
    if (s.nature) l.push(s.nature + " Nature");
    if (ivs.length) l.push("IVs: " + ivs.join(" / "));
    (s.moves || []).forEach(function (m) { if (m) l.push("- " + m); });
    return l.join("\n");
  }
  function exportBoxToPokepaste() {
    var entries = readBox();
    if (!entries.length) { alert("The box is empty."); return; }
    var text = entries.map(setToShowdown).join("\n\n");
    var $f = $('<form method="POST" action="https://pokepast.es/create" target="_blank"></form>').css("display", "none");
    [["title", "Box"], ["author", ""], ["notes", ""]].forEach(function (p) {
      $('<input type="hidden">').attr("name", p[0]).val(p[1]).appendTo($f);
    });
    $('<textarea name="paste"></textarea>').val(text).appendTo($f);
    $f.appendTo("body");
    $f[0].submit();
    $f.remove();
  }
  // "Export Box" button sits next to the Export button on the box's side
  function placeExportBox() {
    var $btn = $("#exportBox");
    if (!$btn.length) {
      $btn = $('<button type="button" id="exportBox" title="Open every Box Pok\u00e9mon as a PokePaste">Export Box</button>')
        .on("click", exportBoxToPokepaste);
    }
    var $ref = $(boxSide === "p2" ? "#exportR" : "#exportL");
    if (!$ref.length) return;
    if (boxSide === "p2") $btn.insertBefore($ref); else $btn.insertAfter($ref);
  }

  // Side toggle, placed right next to the "Box (n)" heading
  function makeBoxToggle() {
    var $sel = $('<select class="tp-box-side"><option value="p1">Left side</option><option value="p2">Right side</option></select>')
      .val(boxSide)
      .css({ marginLeft: "10px", fontSize: "11px" })
      .on("change", function () {
        boxSide = this.value === "p2" ? "p2" : "p1";
        try { localStorage.setItem(BOX_SIDE_KEY, boxSide); } catch (e) {}
        placeExportBox();
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
  function showdownUrls(species) {
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

  // ---- PokeAPI sprites (github.com/PokeAPI/sprites) ----
  // Files there are named by Pokédex / form number, not by name, so a name -> number table is
  // fetched from pokeapi.co once (and cached in localStorage). Folders can be changed here:
  var PA_ROOT = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  var PA_FRONT = [PA_ROOT + "versions/generation-v/black-white/"];                // gen 5 front sprites
  var PA_BOX_PARTY = [PA_ROOT + "versions/generation-viii/icons/"];               // Box & Party icons
  var PA_CHAMPIONS = [PA_ROOT + "versions/generation-ix/champions/",              // Champions (community models)
                      PA_ROOT + "versions/generation-ix/champions/icons/"];
  var PA_IDS_KEY = "tp-pokeapi-ids-v1";
  var paIds = {}, paReady = false, paRetry = [];
  function paFinish(map) {
    paIds = map;
    paReady = true;
    try { if (Object.keys(map).length > 1000) localStorage.setItem(PA_IDS_KEY, JSON.stringify(map)); } catch (e) {}
    var q = paRetry; paRetry = [];
    q.forEach(function (f) { f(); }); // sprites that failed before the table arrived try again
  }
  (function loadPokeapiIds() {
    try {
      var cached = JSON.parse(localStorage.getItem(PA_IDS_KEY) || "null");
      if (cached && Object.keys(cached).length > 1000) { paIds = cached; paReady = true; return; }
    } catch (e) {}
    var species = null, forms = null, pending = 2;
    function idOf(url) { var m = /\/(\d+)\/?$/.exec(url); return m ? +m[1] : null; }
    function collect(data, into) {
      ((data && data.results) || []).forEach(function (r) { var id = idOf(r.url); if (id) into[r.name] = id; });
      return into;
    }
    function done() {
      if (--pending) return;
      var map = {};
      Object.keys(species || {}).forEach(function (k) { map[k] = species[k]; }); // base species
      Object.keys(forms || {}).forEach(function (k) { map[k] = forms[k]; });     // forms win (charizard-mega-x ...)
      paFinish(map);
    }
    $.getJSON("https://pokeapi.co/api/v2/pokemon-species?limit=3000").done(function (d) { species = collect(d, {}); }).always(done);
    $.getJSON("https://pokeapi.co/api/v2/pokemon?limit=3000").done(function (d) { forms = collect(d, {}); }).always(done);
  })();
  function pokeapiId(species) {
    var name = String(species);
    var slug = name.toLowerCase().replace(/[.'’:]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    var cands = [slug, toID(name),
      slug.replace(/-f(-|$)/, "-female$1"), slug.replace(/-m(-|$)/, "-male$1")]; // Meowstic-F-Mega -> meowstic-female-mega
    for (var i = 0; i < cands.length; i++) if (paIds[cands[i]]) return paIds[cands[i]];
    return null;
  }
  // Newer Mega forms the Showdown sprite folders don't have: these try PokeAPI first.
  var PA_FIRST = {};
  ["clefable", "victreebel", "starmie", "dragonite", "meganium", "feraligatr", "skarmory", "chimecho",
   "froslass", "emboar", "excadrill", "chandelure", "golurk", "chesnaught", "delphox", "greninja",
   "floette", "floetteeternal", "meowstic", "meowsticf", "meowsticm", "drampa", "hawlucha",
   "crabominable", "golisopod", "baxcalibur", "scovillain", "glimmora"].forEach(function (b) {
    PA_FIRST[b + "mega"] = true;
  });
  ["absol", "garchomp", "lucario"].forEach(function (b) { PA_FIRST[b + "megaz"] = true; });
  function paFirst(species) { var id = toID(species); return !!PA_FIRST[id] || /megaz$/.test(id); }
  function pokeapiUrls(species, bases) {
    var id = pokeapiId(species);
    return id ? bases.map(function (b) { return b + id + ".png"; }) : [];
  }

  // Large sprite: Showdown first, then PokeAPI gen 5 front. Names ending in "megaz" skip Showdown.
  function spriteUrls(species) {
    var pa = pokeapiUrls(species, PA_FRONT);
    if (/megaz$/.test(toID(species))) return pa;
    return paFirst(species) ? pa.concat(showdownUrls(species)) : showdownUrls(species).concat(pa);
  }
  // Party cards use the small sprites from github.com/May8th1995/sprites (flat folder,
  // files named exactly like the species, e.g. "Geodude-Alola.png"), then PokeAPI Box & Party icons,
  // then PokeAPI Champions icons, then Showdown.
  var MINISPRITE_BASE = "https://raw.githubusercontent.com/May8th1995/sprites/master/";
  function partySpriteUrls(species) {
    var may = [MINISPRITE_BASE + encodeURIComponent(species) + ".png"];
    var pa = pokeapiUrls(species, PA_BOX_PARTY.concat(PA_CHAMPIONS));
    return (paFirst(species) ? pa.concat(may) : may.concat(pa)).concat(showdownUrls(species));
  }
  // `urls` is an array, or a function returning one (re-evaluated if the PokeAPI table loads late)
  var spriteSeq = 0;
  function loadSprite($img, urls) {
    var getUrls = typeof urls === "function" ? urls : function () { return urls; };
    var list = getUrls(), i = 0, token = ++spriteSeq;
    $img.data("tp-token", token).off("error").css("visibility", "visible");
    function fail() {
      $img.css("visibility", "hidden");
      if (!paReady && typeof urls === "function") {
        paRetry.push(function () { if ($img.data("tp-token") === token) loadSprite($img, urls); });
      }
    }
    $img.on("error", function () {
      i++;
      if (i < list.length) $img.attr("src", list[i]);
      else fail();
    });
    if (!list.length) { fail(); return; }
    $img.attr("src", list[0]);
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

    // Remember the last trainer set or "Box" set loaded on this side, so a refresh brings it back
    var LAST_KEY = LAST_KEY_PREFIX + sideId;
    function saveLastSet(sel) {
      if (!sel || !(TRAINER_RE.test(sel.setName) || sel.setName === BOX_NAME)) return;
      try { localStorage.setItem(LAST_KEY, sel.species + " (" + sel.setName + ")"); } catch (e) {}
    }

    var $sprite = $('<img class="tp-sprite" alt="">').css("visibility", "hidden").appendTo($box);
    var $item = $('<img class="tp-item" alt="">').css({
      position: "absolute", top: "128px", right: "38px", width: "48px", height: "48px",
      objectFit: "contain", imageRendering: "pixelated", pointerEvents: "none", visibility: "hidden"
    }).appendTo($box);
    // "Add to Box": saves whatever is currently in this side's fields as that species' "Box" set
    var $addBtn = $('<button type="button" class="tp-add-box" title="Save the current set to your Box">Save to Box</button>')
      .appendTo($box);
    var addBtnTimer = null;
    $addBtn.on("click", function () {
      var species = currentSpecies(parseSelected());
      if (!species) return;
      var set = readEdits({});
      set.isCustomSet = true;
      var existed = readBox().some(function (e) { return e.species === species; });
      var customsets = {};
      try { customsets = JSON.parse(localStorage.customsets || "{}"); } catch (e) {}
      customsets[species] = customsets[species] || {};
      customsets[species][BOX_NAME] = set;
      if (typeof updateDex === "function") {
        updateDex(customsets); // the calc's own import code: fills every SETDEX_* and saves localStorage.customsets
      } else {
        allDexes().forEach(function (dex) {
          dex[species] = dex[species] || {};
          dex[species][BOX_NAME] = set;
        });
        try { localStorage.customsets = JSON.stringify(customsets); } catch (e) {}
      }
      $("#p1 #importedSetsOptions, #p2 #importedSetsOptions").css("display", "inline");
      boxRefreshers.forEach(function (f) { f(); });
      clearTimeout(addBtnTimer);
      $addBtn.text(existed ? "Updated!" : "Added!");
      addBtnTimer = setTimeout(function () { $addBtn.text("Save to Box"); }, 1200);
    });
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

    // Put this side back on the calc's default set for it (getFirstValidSetOption / DEFAULT_SET_IDS
    // in shared_controls.js, so per-side defaults are respected)
    function loadDefaultSet() {
      var opt = (typeof getFirstValidSetOption === "function") ? getFirstValidSetOption(sideId) : null;
      var id = opt && opt.id;
      var i = id ? id.indexOf(" (") : -1;
      if (i > 0) loadIntoSide({ species: id.substring(0, i), setName: id.substring(i + 2, id.length - 1) });
    }

    sideDefaultLoaders.push(loadDefaultSet);

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
      if (sp !== lastSpecies) { lastSpecies = sp; loadSprite($sprite, function () { return spriteUrls(sp); }); }
    }

    function buildCard(e, exp, active, showItem) {
      var $card = $('<div class="tp-card"></div>')
        .toggleClass("tp-active", active)
        .attr("title", e.species + " (" + e.setName + ")" + ((e.set.moves || []).length ? "\n" + e.set.moves.join(", ") : ""));
      loadSprite($('<img class="tp-icon" alt="">').appendTo($card), function () { return partySpriteUrls(e.species); });
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

    // Section heading used by Player Party, Box and Trainer Party
    function addTitle($parent, text) {
      var $t = $('<div class="tp-box-title"></div>').appendTo($parent);
      imp($t, { display: "flex", "flex-wrap": "nowrap", "align-items": "center", "justify-content": "space-between", gap: "8px", "min-width": "0" });
      imp($('<span></span>').text(text).appendTo($t), { width: "auto", "white-space": "nowrap" });
      return $t;
    }

    // ---- drag and drop between Player Party and Box (and re-ordering inside each) ----
    var dragSpecies = null;
    function clearDropMarks() {
      $boxPanel.find(".tp-card").each(function () { this.style.removeProperty("box-shadow"); });
      $boxPanel.find(".tp-drop").each(function () { this.style.removeProperty("outline"); });
    }
    // Where would a drop land? Over a card: before it (left half) or after it (right half).
    // Over empty space in a section: at the end of that section.
    function dropSlot(ev, zoneEl) {
      var $card = $(ev.target).closest(".tp-card", zoneEl);
      if (!$card.length) return { before: null, $mark: null };
      if ($card.data("species") === dragSpecies) return { self: true };
      var r = $card[0].getBoundingClientRect();
      var after = ev.originalEvent.clientX > r.left + r.width / 2;
      return {
        $mark: $card,
        after: after,
        before: after ? ($card.next(".tp-card").data("species") || null) : $card.data("species")
      };
    }
    $boxPanel.on("dragover", ".tp-drop", function (ev) {
      if (!dragSpecies) return;
      ev.preventDefault();
      ev.originalEvent.dataTransfer.dropEffect = "move";
      clearDropMarks();
      var slot = dropSlot(ev, this);
      if (slot.$mark) {
        slot.$mark[0].style.setProperty("box-shadow", (slot.after ? "inset -3px 0 0 " : "inset 3px 0 0 ") + "#4da3ff", "important");
      } else {
        this.style.setProperty("outline", "2px dashed #4da3ff", "important");
      }
    });
    $boxPanel.on("dragleave", ".tp-drop", function (ev) {
      var to = ev.originalEvent.relatedTarget;
      if (!to || !this.contains(to)) clearDropMarks();
    });
    $boxPanel.on("drop", ".tp-drop", function (ev) {
      if (!dragSpecies) return;
      ev.preventDefault();
      var sp = dragSpecies, slot = dropSlot(ev, this), toParty = $(this).data("zone") === "party";
      dragSpecies = null;
      clearDropMarks();
      if (!slot.self) moveBoxEntry(sp, toParty, slot.before);
    });

    function makeGrid($parent) {
      var $g = $('<div class="tp-box-grid"></div>').appendTo($parent);
      imp($g, {
        display: "grid",
        "grid-template-columns": "repeat(6, minmax(0, 1fr))",
        gap: "4px",
        width: "100%",
        "box-sizing": "border-box"
      });
      return $g;
    }

    // Cards in Player Party and Box are the same thing: draggable, right-click twice to remove
    function decorateBoxCard($c, e) {
      imp($c, { flex: "none", width: "auto", "max-width": "none", "min-width": "0", cursor: "grab" });
      $c.find("img").attr("draggable", "false"); // so the card is dragged, not the sprite image
      $c.data("species", e.species)
        .attr("draggable", "true")
        .attr("title", $c.attr("title") + "\nDrag to move between Player Party and Box\nRight-click twice to remove from box")
        .on("dragstart", function (ev) {
          dragSpecies = e.species;
          var dt = ev.originalEvent.dataTransfer;
          dt.effectAllowed = "move";
          try { dt.setData("text/plain", e.species); } catch (x) {}
          var el = this;
          setTimeout(function () { el.style.setProperty("opacity", "0.4", "important"); }, 0);
        })
        .on("dragend", function () {
          dragSpecies = null;
          clearDropMarks();
          this.style.removeProperty("opacity");
        })
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
    }

    function fillGrid($grid, list, emptyMsg) {
      if (!list.length) {
        var $m = $('<div class="tp-box-empty"></div>').text(emptyMsg).appendTo($grid);
        imp($m, { "grid-column": "1 / -1" });
        return;
      }
      var sel = parseSelected();
      list.forEach(function (e) {
        var active = !!sel && sel.species === e.species && sel.setName === BOX_NAME;
        var $c = buildCard(e, null, active, false);
        decorateBoxCard($c, e);
        $grid.append($c);
      });
    }

    function renderBox() {
      if (boxSide !== sideId) { $boxPanel.attr("hidden", true).empty(); return; }
      var layout = splitBox();
      var total = layout.party.length + layout.box.length;
      $boxPanel.empty().removeAttr("hidden");

      // Player Party: sits above the Box, empty until Pokémon are moved into it
      addTitle($boxPanel, "Player Party");
      var $pz = $('<div class="tp-drop tp-party-zone"></div>').data("zone", "party").appendTo($boxPanel);
      imp($pz, { "min-height": "44px", padding: "3px", border: "1px dashed #777", "border-radius": "4px",
        "box-sizing": "border-box", "margin-bottom": "8px" });
      fillGrid(makeGrid($pz), layout.party, "Drag Pok\u00e9mon here from the Box.");

      // Box
      var $title = addTitle($boxPanel, "Box (" + layout.box.length + ")");
      var $right = $('<span class="tp-box-actions"></span>').appendTo($title);
      imp($right, { display: "flex", "align-items": "center", gap: "6px" });
      $('<button type="button" class="tp-box-clear" title="Clear all Box sets"></button>').text("\uD83D\uDECF\uFE0F")
        .on("click", function () {
          var all = readBox();
          var msg = all.length
            ? "Are you SURE you want to clear the box?\n\nThis permanently deletes all " + all.length +
              " set(s) labelled \"Box\", including any in the Player Party. This cannot be undone." +
              "\n\nThe current trainer will also be reset, and both sides will go back to their default sets."
            : "The box is already empty.\n\nReset the saved trainer, and put both sides back to their default sets?";
          if (!confirm(msg)) return;
          disarm();
          all.forEach(function (e) { removeFromBox(e.species); });
          sideDefaultLoaders.forEach(function (f) { f(); }); // both sides (box and trainer) back to their default sets
          resetSavedTrainers();  // after the load, since loading a set re-saves it
          boxRefreshers.forEach(function (f) { f(); });
        }).appendTo($right);
      makeBoxToggle().css("marginLeft", "0").appendTo($right);
      imp($right, { width: "auto", flex: "0 0 auto", "min-width": "0", "white-space": "nowrap" });
      imp($right.find("button"), { width: "auto", "min-width": "0", margin: "0", flex: "none", float: "none", position: "static" });
      imp($right.find("select"), { width: "92px", "min-width": "0", "max-width": "92px", margin: "0", flex: "none", float: "none", position: "static" });

      var $scroll = $('<div class="tp-box-scroll tp-drop"></div>').data("zone", "box").appendTo($boxPanel);
      fillGrid(makeGrid($scroll), layout.box, total
        ? "Drag Pok\u00e9mon here to move them back to the Box."
        : 'Import sets with the name "Box" to add them here.');

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
      addTitle($panel, "Trainer Party");
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

      // Previous / Next trainer, in trainers.js order
      var pos = trainerOrder.indexOf(m[2]);
      var $nav = $('<div class="tp-nav"></div>').appendTo($panel);
      imp($nav, { display: "flex", "align-items": "center", "justify-content": "space-between", gap: "6px",
        "margin-top": "6px", "padding-top": "6px", "border-top": "1px solid #777" });
      function navBtn(label, target) {
        var $b = $('<button type="button" class="tp-nav-btn"></button>').text(label);
        if (target < 0 || target >= trainerOrder.length) {
          $b.prop("disabled", true).css("opacity", 0.4);
        } else {
          $b.on("click", function () { loadIntoSide(index[trainerOrder[target]][0]); });
        }
        return $b;
      }
      $nav.append(navBtn("Previous Trainer", pos - 1));
      imp($('<span class="tp-nav-pos"></span>').text((pos + 1) + " / " + trainerOrder.length).appendTo($nav), { width: "auto", "font-size": "11px", opacity: "0.7" });
      $nav.append(navBtn("Next Trainer", pos + 1));
    }

    // ---- auto-save edits made to a loaded Box set ----
    var STATS = ["hp", "at", "df", "sa", "sd", "sp"];
    function readEdits(old) {
      var set = $.extend(true, {}, old);
      var lv = parseInt($box.find("input.level").first().val(), 10);
      if (lv) set.level = lv;
      var ab = $box.find("select.ability").first().val();
      if (ab) set.ability = ab;
      var nat = $box.find("select.nature").first().val();
      if (nat) set.nature = nat;
      var item = ($box.find("select.item").first().val() || "").trim();
      if (!item || /^\(?none\)?$/i.test(item)) delete set.item; else set.item = item;
      var tera = $box.find("select.teraType").first().val();
      if (tera) set.teraType = tera;
      var evs = {}, ivs = {}, gotStats = false;
      STATS.forEach(function (st) {
        var e = parseInt($box.find("." + st + " input.evs").first().val(), 10);
        var i = parseInt($box.find("." + st + " input.ivs").first().val(), 10);
        if (!isNaN(e)) { evs[st] = e; gotStats = true; }
        if (!isNaN(i)) ivs[st] = i;
      });
      if (gotStats) { set.evs = evs; set.ivs = ivs; }
      var moves = [];
      $box.find(".move-selector").each(function () {
        var m = ($(this).val() || "").trim();
        if (m && !/^\(no move\)$/i.test(m)) moves.push(m);
      });
      if (moves.length) set.moves = moves;
      return set;
    }
    var syncBase = null, syncSel = null, formePending = null, syncStable = 0, syncLastFp = null;
    function resetSync() { syncBase = null; syncSel = null; formePending = null; syncStable = 0; syncLastFp = null; }
    function syncBoxSet(fromTimer) {
      var sel = parseSelected();
      if (!sel || sel.setName !== BOX_NAME) { resetSync(); return; }
      var selVal = $selector.val();
      // A different set was selected: start a new "settling" phase
      if (selVal !== syncSel) { resetSync(); syncSel = selVal; return; }
      var stored = null;
      readBox().forEach(function (e) { if (e.species === sel.species) stored = e.set; });
      if (!stored) { syncBase = null; syncStable = 0; syncLastFp = null; return; }
      var updated = readEdits(stored);
      var fp = JSON.stringify(updated);

      // Settling: the calc fills the fields in several steps (and fires change events while doing it),
      // so reading them too early mixes the previous Pokemon's moves/EVs/etc. into this one's saved set.
      // Only treat the fields as loaded once they have stopped changing across two timer ticks;
      // event-driven calls never count towards this.
      if (syncBase === null) {
        if (!fromTimer) return;
        if (fp === syncLastFp) { if (++syncStable >= 2) syncBase = fp; }
        else { syncLastFp = fp; syncStable = 0; }
        return;
      }

      // The Forme dropdown was changed: the Box Pokémon becomes that form
      var cur = currentSpecies(sel);
      if (cur && cur !== sel.species) {
        if (formePending !== cur) { formePending = cur; return; } // wait one tick so the calc finishes updating ability etc.
        formePending = null;
        renameBoxEntry(sel.species, cur, updated);
        loadIntoSide({ species: cur, setName: BOX_NAME });
        boxRefreshers.forEach(function (f) { f(); });
        console.log("trainer-party: Box Pokemon changed form", sel.species, "->", cur);
        return;
      }
      formePending = null;

      if (fp !== syncBase) {
        syncBase = fp;
        saveBoxSet(sel.species, updated);
        console.log("trainer-party: saved Box set for", sel.species, updated);
      }
    }

    var lastKey = null, lastBoxKey = null;
    function check(fromTimer) {
      fromTimer = fromTimer === true; // event handlers pass an event object, which must not count
      var sel = parseSelected();
      var key = ($selector.val() || "") + "|" + (currentSpecies(sel) || "");
      if (key !== lastKey) { lastKey = key; saveLastSet(sel); render(); }
      var bKey = boxSide + "|" + ($selector.val() || "") + "|" +
        (boxSide === sideId ? JSON.stringify(readBox()) : "");
      if (bKey !== lastBoxKey) { lastBoxKey = bKey; renderBox(); }
      updateItem();
      syncBoxSet(fromTimer);
    }
    boxRefreshers.push(function () { lastBoxKey = null; check(); });
    $selector.on("change", check);
    $box.on("change", "select.forme", check);
    $box.on("change", "select.item", check);
    setInterval(function () { check(true); }, 300); // fallback if the dropdown doesn't fire change events; also drives the settle phase in syncBoxSet

    // Restore this side's last trainer/Box set (before the first check(), so a default set can't overwrite it)
    var savedTrainer = null;
    try { savedTrainer = localStorage.getItem(LAST_KEY); } catch (e) {}
    if (savedTrainer) {
      var si = savedTrainer.indexOf(" (");
      var sp = savedTrainer.substring(0, si), sn = savedTrainer.substring(si + 2, savedTrainer.length - 1);
      var okTrainer = TRAINER_RE.test(sn) && SETDEX_SV[sp] && SETDEX_SV[sp][sn];
      var okBox = sn === BOX_NAME && readBox().some(function (e) { return e.species === sp; });
      if (si > 0 && (okTrainer || okBox)) loadIntoSide({ species: sp, setName: sn });
    }
    check();
  }

  setupSide("p1");
  setupSide("p2");
  placeExportBox();
  console.log("trainer-party: ready,", Object.keys(index).length, "trainer(s) indexed");
});
