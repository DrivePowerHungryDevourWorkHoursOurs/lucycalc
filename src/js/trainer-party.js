
// trainer-party.js — 3 Pokémon per row, 2 rows.
// Load AFTER jQuery, gen9.js, trainers.js and calculator scripts.

$(function () {
  var TRAINER_RE = /^Lvl (\d+) (.+)$/;

  function toID(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  // Build trainer index.
  var index = {};

  Object.keys(SETDEX_SV).forEach(function (species) {
    Object.keys(SETDEX_SV[species]).forEach(function (setName) {
      var m = TRAINER_RE.exec(setName);
      if (!m) return;

      var set = SETDEX_SV[species][setName];

      (index[m[2]] = index[m[2]] || []).push({
        species: species,
        setName: setName,
        set: set,
        slot: set.slot
      });
    });
  });

  Object.keys(index).forEach(function (trainer) {
    index[trainer].forEach(function (e, i) {
      e._order = i;
    });

    index[trainer].sort(function (a, b) {
      var sa = a.slot == null ? 99 : a.slot;
      var sb = b.slot == null ? 99 : b.slot;
      return sa - sb || a._order - b._order;
    });
  });

  // EXP calculation.
  function expGain(entry) {
    var table = typeof BASE_EXP_YIELD !== "undefined"
      ? BASE_EXP_YIELD
      : {};

    var b = table[toID(entry.species)];
    if (!b) return null;

    var cfg = typeof TRAINER_EXP_CONFIG !== "undefined"
      ? TRAINER_EXP_CONFIG
      : { playerLevel: 100, trainerMultiplier: 1.5 };

    var match = TRAINER_RE.exec(entry.setName);
    var L = entry.set.level || (match ? +match[1] : 100);

    return Math.floor(
      (cfg.trainerMultiplier * b * L) / 5 *
      Math.pow((2 * L + 10) / (L + cfg.playerLevel + 10), 2.5) + 1
    );
  }

  // Sprite URLs.
  function spriteUrls(species) {
    var hyphen = String(species)
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "");

    var plain = toID(species);
    var ids = hyphen === plain ? [plain] : [hyphen, plain];
    var urls = [];

    ["gen5", "dex"].forEach(function (set) {
      ids.forEach(function (id) {
        urls.push(
          "https://play.pokemonshowdown.com/sprites/" +
          set + "/" + id + ".png"
        );
      });
    });

    return urls;
  }

  function loadSprite($img, species) {
    var urls = spriteUrls(species);
    var i = 0;

    $img.off("error").css("visibility", "visible");

    $img.on("error", function () {
      i++;

      if (i < urls.length) {
        $img.attr("src", urls[i]);
      } else {
        $img.css("visibility", "hidden");
      }
    });

    $img.attr("src", urls[0]);
  }

  // Set up one Pokémon side.
  function setupSide(sideId) {
    var $box = $("#" + sideId);
    var $selector = $("#" + sideId + " input.set-selector").first();

    if (!$box.length || !$selector.length) {
      console.warn("trainer-party: #" + sideId + " not found");
      return;
    }

    var $sprite = $('<img class="tp-sprite" alt="">')
      .css("visibility", "hidden")
      .appendTo($box);

    var $panel = $('<div class="trainer-party" hidden></div>')
      .appendTo($box);

    // Panel sizing.
    $panel.css({
      "box-sizing": "border-box",
      "display": "block",
      "width": "100%",
      "max-width": "100%",
      "min-width": "0",
      "overflow-x": "hidden",
      "overflow-y": "hidden",
      "padding": "6px"
    });

    function parseSelected() {
      var full = $selector.val() || "";
      var i = full.indexOf(" (");

      if (i < 0) return null;

      return {
        species: full.substring(0, i),
        setName: full.substring(i + 2, full.length - 1)
      };
    }

    function loadIntoSide(entry) {
      var full = entry.species + " (" + entry.setName + ")";
      var hasSelect2 = !!$selector.data("select2");

      if (hasSelect2) {
        $selector.select2("data", {
          id: full,
          text: full
        });
      }

      $selector.val(full);

      $selector.data("select2-change-triggered", true);
      $selector.trigger("change");
      $selector.data("select2-change-triggered", false);

      if (hasSelect2) {
        setTimeout(function () {
          $selector.select2("container")
            .find(".select2-chosen")
            .text(full);
        }, 0);
      }
    }

    var lastSpecies = null;

    function render() {
      var sel = parseSelected();

      // Selected Pokémon sprite.
      if (sel && sel.species !== lastSpecies) {
        lastSpecies = sel.species;
        loadSprite($sprite, sel.species);
      }

      if (!sel) {
        lastSpecies = null;
        $sprite.css("visibility", "hidden");
      }

      // Show teams belonging to trainer sets.
      var m = sel && TRAINER_RE.exec(sel.setName);

      if (!m || !index[m[2]]) {
        $panel.attr("hidden", true).empty();
        return;
      }

      var party = index[m[2]];
      var total = 0;
      var anyExp = false;

      $panel.empty().removeAttr("hidden");

      // Three cards per row.
      var $row = $('<div class="tp-row"></div>').css({
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        "justify-content": "flex-start",
        "align-items": "stretch",
        "gap": "4px",
        "width": "100%",
        "min-width": "0",
        "box-sizing": "border-box",
        "margin": "0",
        "padding": "0"
      }).appendTo($panel);

      party.forEach(function (e) {
        var exp = expGain(e);

        if (exp !== null) {
          total += exp;
          anyExp = true;
        }

        // Each card takes one third of the available row width.
        var $card = $('<div class="tp-card"></div>').css({
          "display": "block",
          "flex": "0 0 calc((100% - 8px) / 3)",
          "width": "calc((100% - 8px) / 3)",
          "min-width": "0",
          "max-width": "calc((100% - 8px) / 3)",
          "box-sizing": "border-box",
          "margin": "0",
          "padding": "8px 4px",
          "text-align": "center",
          "overflow-wrap": "anywhere",
          "cursor": "pointer",
          "font-size": "12px",
          "line-height": "1.2",
          "border": "1px solid transparent",
          "border-radius": "6px"
        })
          .toggleClass(
            "tp-active",
            e.species === sel.species &&
            e.setName === sel.setName
          )
          .attr("title", e.species + " — " + e.setName);

        // Larger sprites.
        var $icon = $('<img class="tp-icon" alt="">').css({
          "display": "block",
          "width": "64px",
          "height": "54px",
          "object-fit": "contain",
          "image-rendering": "pixelated",
          "margin": "0 auto 5px"
        }).appendTo($card);

        loadSprite($icon, e.species);

        // Pokémon name; moves are removed.
        $('<div class="tp-name"></div>')
          .text(e.species)
          .css({
            "font-weight": "bold",
            "font-size": "12px",
            "line-height": "1.2",
            "overflow-wrap": "anywhere"
          })
          .appendTo($card);

        // EXP display, if configured.
        if (exp !== null) {
          $('<div class="tp-exp"></div>')
            .text("+" + exp + " EXP")
            .css({
              "font-size": "10px",
              "margin-top": "4px"
            })
            .appendTo($card);
        }

        // Click a Pokémon to load its set.
        $card.on("click", function () {
          loadIntoSide(e);
        });

        $row.append($card);
      });

      if (anyExp) {
        $('<div class="tp-total"></div>')
          .text("Total: " + total + " EXP")
          .css({
            "text-align": "right",
            "font-weight": "bold",
            "margin-top": "4px",
            "font-size": "10px"
          })
          .appendTo($panel);
      }
    }

    var lastValue = null;

    function check() {
      var v = $selector.val();

      if (v !== lastValue) {
        lastValue = v;
        render();
      }
    }

    $selector.on("change", check);
    setInterval(check, 300);
    check();
  }

  setupSide("p1");
  setupSide("p2");

  console.log(
    "trainer-party: ready,",
    Object.keys(index).length,
    "trainer(s) indexed"
  );
});
