// item-bag.js — a "bag" button next to every Item dropdown (#p1 and #p2).
// Clicking it opens a popup of item icons grouped into sections (Type Boost Damage, Held Item,
// Berries, Plates, Damage Reducing Berries, ...). Click an icon to set that Pokémon's item;
// the first (crossed-out) tile clears it.
//
// Load AFTER jQuery and the calc's own scripts (shared_controls.js, trainer-party.js).
// It reads the calc's global `items` list, so it follows the selected generation automatically.
// All CSS is injected from here, so nothing needs adding to main.css.
$(function () {
  // ---- icons ----------------------------------------------------------------------------
  var LOCAL_BASES = [
    "src/img/Items/",
    "https://raw.githubusercontent.com/DrivePowerHungryDevourWorkHoursOurs/lucycalc/main/src/img/Items/"
  ];
  var POKEAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";
  // The second name is a fallback in case the file is spelled BERRYPOUCH.png
  var BAG_ICON_FILES = ["BERRYPOUUCH.png", "BERRYPOUCH.png"];

  function itemUrls(item) {
    var clean = item.replace(/['’.]/g, "");
    var local = clean.replace(/[^A-Za-z0-9]/g, "").toUpperCase();   // "Focus Sash" -> FOCUSSASH.png
    var slug = clean.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    var urls = LOCAL_BASES.map(function (b) { return b + local + ".png"; });
    if (/ium[ -]z$/i.test(clean)) urls.push(POKEAPI + slug + "--bag.png", POKEAPI + slug + "-bag.png");
    urls.push(POKEAPI + slug + ".png");
    return urls;
  }
  function bagUrls() {
    var urls = [];
    BAG_ICON_FILES.forEach(function (f) { LOCAL_BASES.forEach(function (b) { urls.push(b + f); }); });
    return urls;
  }

  // Try each URL in turn; call onFail() if none loads.
  function loadImg($img, urls, onOk, onFail) {
    var i = 0;
    $img.off("error.ib load.ib");
    $img.on("load.ib", function () { if (onOk) onOk($img.attr("src")); });
    $img.on("error.ib", function () {
      i++;
      if (i < urls.length) $img.attr("src", urls[i]);
      else if (onFail) onFail();
    });
    $img.attr("src", urls[0]);
  }

  // ---- sections ---------------------------------------------------------------------------
  var TYPE_BOOST = [
    "Black Belt", "Black Glasses", "Charcoal", "Dragon Fang", "Fairy Feather", "Hard Stone",
    "Magnet", "Metal Coat", "Miracle Seed", "Mystic Water", "Never-Melt Ice", "Poison Barb",
    "Sharp Beak", "Silk Scarf", "Silver Powder", "Soft Sand", "Spell Tag", "Twisted Spoon",
    "Odd Incense", "Rock Incense", "Rose Incense", "Sea Incense", "Wave Incense", "Pink Bow", "Polkadot Bow"
  ];
  var RESIST_BERRIES = [
    "Occa Berry", "Passho Berry", "Wacan Berry", "Rindo Berry", "Yache Berry", "Chople Berry",
    "Kebia Berry", "Shuca Berry", "Coba Berry", "Payapa Berry", "Tanga Berry", "Charti Berry",
    "Kasib Berry", "Haban Berry", "Colbur Berry", "Babiri Berry", "Roseli Berry", "Chilan Berry"
  ];
  // [title, test(name)] — the first matching section wins, so order matters.
  var SECTIONS = [
    ["Type Boost Damage", function (n) { return TYPE_BOOST.indexOf(n) >= 0; }],
    ["Damage Reducing Berries", function (n) { return RESIST_BERRIES.indexOf(n) >= 0; }],
    ["Plates", function (n) { return / Plate$/.test(n); }],
    ["Berries", function (n) { return /Berry$/.test(n); }],
    ["Mega Stones", function (n) { return /ite( [XY])?$/.test(n) && n !== "Eviolite"; }],
    ["Z-Crystals", function (n) { return /ium Z$/.test(n); }],
    ["Held Item", function () { return true; }]
  ];
  // Display order (matches the RnB layout, with the extras at the end)
  var SECTION_ORDER = ["Type Boost Damage", "Held Item", "Berries", "Plates",
    "Damage Reducing Berries", "Mega Stones", "Z-Crystals"];

  function buildSections() {
    var list = (typeof items !== "undefined" && items) ? items.slice() : [];
    var buckets = {};
    list.forEach(function (name) {
      if (!name || /^\(?none\)?$/i.test(name)) return;
      for (var i = 0; i < SECTIONS.length; i++) {
        if (SECTIONS[i][1](name)) { (buckets[SECTIONS[i][0]] = buckets[SECTIONS[i][0]] || []).push(name); return; }
      }
    });
    if (buckets["Type Boost Damage"]) {
      buckets["Type Boost Damage"].sort(function (a, b) { return TYPE_BOOST.indexOf(a) - TYPE_BOOST.indexOf(b); });
    }
    if (buckets["Damage Reducing Berries"]) {
      buckets["Damage Reducing Berries"].sort(function (a, b) { return RESIST_BERRIES.indexOf(a) - RESIST_BERRIES.indexOf(b); });
    }
    return SECTION_ORDER.filter(function (t) { return buckets[t] && buckets[t].length; })
      .map(function (t) { return { title: t, names: buckets[t] }; });
  }

  // ---- styles -------------------------------------------------------------------------------
  $("<style>").text([
    ".ib-btn{display:inline-block;vertical-align:middle;margin-left:6px;width:40px;height:40px;padding:0;",
    "  background:#333;border:2px solid #555;border-radius:4px;cursor:pointer;box-shadow:none;line-height:0}",
    ".ib-btn:hover{background:#444;border-color:#999}",
    ".ib-btn img{width:30px;height:30px;object-fit:contain;image-rendering:pixelated}",
    ".ib-btn.ib-noimg:after{content:'Bag';font:bold 10px Verdana,sans-serif;color:#ddd;line-height:1}",
    ".ib-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;display:none}",
    ".ib-panel{position:fixed;top:5vh;left:50%;transform:translateX(-50%);width:min(640px,94vw);max-height:88vh;",
    "  overflow-y:auto;background:#2a2a2a;color:#eee;border:1px solid #666;border-radius:4px;",
    "  box-shadow:0 6px 24px rgba(0,0,0,.6);padding:10px 14px 14px;z-index:10001;font-family:Verdana,Helvetica,sans-serif}",
    ".ib-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}",
    ".ib-head h3{margin:0;font-size:18px;color:#eee;text-shadow:none}",
    ".ib-search{flex:1;margin:0 12px;padding:3px 6px;background:#1e1e1e;color:#eee;border:1px solid #555;border-radius:3px;font-size:12px}",
    ".ib-close{width:26px;height:26px;line-height:22px;padding:0;background:#d01010;color:#fff;border:2px solid #600;",
    "  border-radius:3px;font:bold 16px Verdana,sans-serif;cursor:pointer;box-shadow:none;text-shadow:none}",
    ".ib-close:hover{background:#f22}",
    ".ib-section{border-top:1px solid #555;margin-top:8px;padding-top:6px;text-align:center}",
    ".ib-section h4{margin:2px 0 6px;font-size:13px;color:#eee;text-shadow:none}",
    ".ib-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:3px}",
    ".ib-tile{width:34px;height:34px;padding:1px;background:transparent;border:1px solid transparent;border-radius:3px;",
    "  cursor:pointer;box-shadow:none;line-height:0;color:#ddd;font:8px/9px Verdana,sans-serif;overflow:hidden;text-shadow:none}",
    ".ib-tile:hover{background:#444;border-color:#999}",
    ".ib-tile.ib-sel{background:#3a4a6a;border-color:#8ab4ff}",
    ".ib-tile img{width:30px;height:30px;object-fit:contain;image-rendering:pixelated}",
    ".ib-tile.ib-hide{display:none}",
    ".ib-none{position:relative}",
    ".ib-none:before{content:'';position:absolute;left:7px;top:7px;width:16px;height:16px;border:2px solid #7a3a3a;border-radius:50%}",
    ".ib-none:after{content:'';position:absolute;left:6px;top:15px;width:22px;height:2px;background:#7a3a3a;transform:rotate(-45deg)}"
  ].join("\n")).appendTo("head");

  // ---- popup (one shared instance) -----------------------------------------------------
  var resolved = {};   // item name -> working icon URL, or false if none loaded
  var $target = null;  // the select.item the popup is currently editing

  var $overlay = $('<div class="ib-overlay"></div>').appendTo("body");
  var $panel = $('<div class="ib-panel" role="dialog" aria-label="Items"></div>').appendTo($overlay);
  var $head = $('<div class="ib-head"><h3>Items</h3></div>').appendTo($panel);
  var $search = $('<input type="text" class="ib-search" placeholder="Search…">').appendTo($head);
  var $close = $('<button type="button" class="ib-close" title="Close">×</button>').appendTo($head);
  var $body = $('<div class="ib-body"></div>').appendTo($panel);

  function closeBag() { $overlay.hide(); $target = null; }
  $close.on("click", closeBag);
  $overlay.on("mousedown", function (e) { if (e.target === $overlay[0]) closeBag(); });
  $(document).on("keydown", function (e) { if (e.key === "Escape" && $overlay.is(":visible")) closeBag(); });

  function pick(name) {
    if (!$target) return;
    $target.val(name);
    if ($target.val() !== name) $target.val("");   // not in this gen's list -> (none)
    $target.change();                              // lets the calc (and trainer-party.js) react
    closeBag();
  }

  function makeTile(name) {
    var $t = $('<button type="button" class="ib-tile"></button>').attr("title", name).attr("data-name", name);
    var $img = $('<img alt="">').attr("draggable", "false");
    function showText() { $t.empty().text(name); }
    if (resolved[name] === false) { showText(); }
    else {
      $t.append($img);
      if (resolved[name]) $img.attr("src", resolved[name]);
      else loadImg($img, itemUrls(name), function (src) { resolved[name] = src; },
        function () { resolved[name] = false; showText(); });
    }
    $t.on("click", function () { pick(name); });
    return $t;
  }

  function render() {
    $body.empty();
    var current = $target ? ($target.val() || "") : "";

    // First section starts with the "no item" tile
    var sections = buildSections();
    sections.forEach(function (sec, idx) {
      var $sec = $('<div class="ib-section"></div>').appendTo($body);
      $('<h4></h4>').text(sec.title).appendTo($sec);
      var $grid = $('<div class="ib-grid"></div>').appendTo($sec);
      if (idx === 0) {
        $('<button type="button" class="ib-tile ib-none" title="(none)"></button>')
          .toggleClass("ib-sel", current === "")
          .on("click", function () { pick(""); })
          .appendTo($grid);
      }
      sec.names.forEach(function (name) {
        makeTile(name).toggleClass("ib-sel", name === current).appendTo($grid);
      });
    });
    $search.val("");
  }

  $search.on("input", function () {
    var q = $.trim($search.val()).toLowerCase();
    $body.find(".ib-tile[data-name]").each(function () {
      $(this).toggleClass("ib-hide", q !== "" && $(this).attr("data-name").toLowerCase().indexOf(q) < 0);
    });
    $body.find(".ib-section").each(function () {
      $(this).toggle($(this).find(".ib-tile[data-name]:not(.ib-hide)").length > 0 || q === "");
    });
  });

  function openBag($select) {
    if ($select.prop("disabled")) return;   // e.g. forced Mask/plate items
    $target = $select;
    render();
    $overlay.show();
    $panel.scrollTop(0);
    $search.focus();
  }

  // ---- bag buttons --------------------------------------------------------------------------
  $("select.item").each(function () {
    var $sel = $(this);
    if ($sel.next(".ib-btn").length) return;
    var $btn = $('<button type="button" class="ib-btn" title="Open bag"></button>');
    var $img = $('<img alt="Bag">').attr("draggable", "false").appendTo($btn);
    loadImg($img, bagUrls(), null, function () { $img.remove(); $btn.addClass("ib-noimg"); });
    $btn.on("click", function (e) { e.preventDefault(); openBag($sel); });
    $sel.after($btn);
  });
});
