
// trainer-party.js — for BOTH Pokémon boxes (#p1 and #p2):
// Compact single-row team display, without moves.
// Load AFTER jQuery, gen9.js, trainers.js and the calculator scripts.

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

  // Sprite URLs: try regional form IDs and base IDs.
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

    // Inline panel styles prevent external CSS from forcing wrapping.
    $panel.css({
      "box-sizing": "border-box",
      "display": "block",
      "width": "100%",
      "max-width": "100%",
      "min-width": "0",
      "overflow-x": "auto",
      "overflow-y": "hidden"
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

      // Selected species sprite.
      if (sel && sel.species !== lastSpecies) {
        lastSpecies = sel.species;
        loadSprite($sprite, sel.species);
      }

      if (!sel) {
        lastSpecies = null;
        $sprite.css("visibility", "hidden");
      }

      // Only display teams belonging to trainer sets.
      var m = sel && TRAINER_RE.exec(sel.setName);

      if (!m || !index[m[2]]) {
        $panel.attr("hidden", true).empty();
        return;
      }

      var party = index[m[2]];
      var total = 0;
      var anyExp = false;

      $panel.empty().removeAttr("hidden");

      // Force every Pokémon into the same horizontal row.
      var $row = $('<div class="tp-row"></div>').css({
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "justify-content": "flex-start",
        "align-items": "stretch",
        "gap": "2px",
        "width": "max-content",
        "min-width": "0",
        "margin": "0",
        "padding": "0"
      }).appendTo($panel);

      party.forEach(function (e) {
        var exp = expGain(e);

        if (exp !== null) {
          total += exp;
          anyExp = true;
        }

        // Fixed-width card: prevents flex items from wrapping.
        var $card = $('<div class="tp-card"></div>').css({
          "display": "block",
          "flex": "0 0 63px",
          "width": "63px",
          "min-width": "63px",
          "max-width": "63px",
          "box-sizing": "border-box",
          "margin": "0",
          "padding": "3px 1px",
          "text-align": "center",
          "overflow-wrap": "anywhere",
          "cursor": "pointer",
          "font-size": "10px",
          "line-height": "1.15",
          "border": "1px solid transparent",
          "border-radius": "5px"
        })
          .toggleClass(
            "tp-active",
            e.species === sel.species &&
            e.setName === sel.setName
          )
          .attr("title", e.species + " — " + e.setName);

        // Pokémon sprite.
        var $icon = $('<img class="tp-icon" alt="">').css({
          "display": "block",
          "width": "36px",
          "height": "30px",
          "object-fit": "contain",
          "image-rendering": "pixelated",
          "margin": "0 auto 3px"
        }).appendTo($card);

        loadSprite($icon, e.species);

        // Pokémon name only. Moves are intentionally omitted.
        $('<div class="tp-name"></div>')
          .text(e.species)
          .css({
            "font-weight": "bold",
            "font-size": "10px",
            "line-height": "1.1",
            "overflow-wrap": "anywhere"
          })
          .appendTo($card);

        // EXP remains available if configured.
        if (exp !== null) {
          $('<div class="tp-exp"></div>')
            .text("+" + exp + " EXP")
            .css({
              "font-size": "9px",
              "margin-top": "3px"
            })
            .appendTo($card);
        }

        // Click a team member to load its set.
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
