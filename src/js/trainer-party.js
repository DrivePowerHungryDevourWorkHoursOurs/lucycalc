
// trainer-party.js
// Three Pokémon per row, larger sprites, no extra sprite element.
// Load after jQuery, gen9.js, trainers.js and calculator scripts.

$(function () {
  var TRAINER_RE = /^Lvl (\d+) (.+)$/;

  function toID(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  if (typeof SETDEX_SV === "undefined") {
    console.warn("trainer-party: SETDEX_SV was not found.");
    return;
  }

  // Build trainer index.
  var index = {};

  Object.keys(SETDEX_SV).forEach(function (species) {
    Object.keys(SETDEX_SV[species]).forEach(function (setName) {
      var match = TRAINER_RE.exec(setName);
      if (!match) return;

      var set = SETDEX_SV[species][setName];
      var trainer = match[2];

      (index[trainer] = index[trainer] || []).push({
        species: species,
        setName: setName,
        set: set,
        slot: set.slot
      });
    });
  });

  Object.keys(index).forEach(function (trainer) {
    index[trainer].forEach(function (entry, i) {
      entry._order = i;
    });

    index[trainer].sort(function (a, b) {
      var aSlot = a.slot == null ? 99 : a.slot;
      var bSlot = b.slot == null ? 99 : b.slot;
      return aSlot - bSlot || a._order - b._order;
    });
  });

  // Calculate EXP.
  function expGain(entry) {
    var table = typeof BASE_EXP_YIELD !== "undefined"
      ? BASE_EXP_YIELD
      : {};

    var base = table[toID(entry.species)];
    if (!base) return null;

    var config = typeof TRAINER_EXP_CONFIG !== "undefined"
      ? TRAINER_EXP_CONFIG
      : { playerLevel: 100, trainerMultiplier: 1.5 };

    var match = TRAINER_RE.exec(entry.setName);
    var level = entry.set.level || (match ? Number(match[1]) : 100);

    return Math.floor(
      (config.trainerMultiplier * base * level) / 5 *
      Math.pow(
        (2 * level + 10) /
        (level + config.playerLevel + 10),
        2.5
      ) + 1
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

    ["gen5", "dex"].forEach(function (spriteSet) {
      ids.forEach(function (id) {
        urls.push(
          "https://play.pokemonshowdown.com/sprites/" +
          spriteSet + "/" + id + ".png"
        );
      });
    });

    return urls;
  }

  function loadSprite($img, species) {
    var urls = spriteUrls(species);
    var position = 0;

    $img.off("error").css("visibility", "visible");

    $img.on("error", function () {
      position++;

      if (position < urls.length) {
        $img.attr("src", urls[position]);
      } else {
        $img.css("visibility", "hidden");
      }
    });

    $img.attr("src", urls[0]);
  }

  function setupSide(sideId) {
    var $box = $("#" + sideId);
    var $selector = $("#" + sideId + " input.set-selector").first();

    if (!$box.length || !$selector.length) {
      console.warn("trainer-party: could not find side", sideId);
      return;
    }

    // Remove any old extra sprite created by this script.
    $box.children(".tp-sprite").remove();

    // Create only the party panel. No extra sprite placeholder.
    var $panel = $('<div class="trainer-party" hidden></div>')
      .appendTo($box);

    function parseSelected() {
      var full = $selector.val() || "";
      var splitAt = full.indexOf(" (");

      if (splitAt < 0) return null;

      return {
        species: full.substring(0, splitAt),
        setName: full.substring(splitAt + 2, full.length - 1)
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

    function render() {
      var selected = parseSelected();
      var match = selected && TRAINER_RE.exec(selected.setName);

      if (!match || !index[match[2]]) {
        $panel.attr("hidden", true).empty();
        return;
      }

      var party = index[match[2]];
      var total = 0;
      var anyExp = false;

      $panel.empty().removeAttr("hidden");

      var $row = $('<div class="tp-row"></div>').appendTo($panel);

      party.forEach(function (entry) {
        var exp = expGain(entry);

        if (exp !== null) {
          total += exp;
          anyExp = true;
        }

        var $card = $('<div class="tp-card"></div>')
          .toggleClass(
            "tp-active",
            entry.species === selected.species &&
            entry.setName === selected.setName
          )
          .attr("title", entry.species + " — " + entry.setName);

        // Large sprite; size is controlled by trainer-party.css.
        var $icon = $('<img class="tp-icon" alt="">')
          .appendTo($card);

        loadSprite($icon, entry.species);

        // Name only — no move list.
        $('<div class="tp-name"></div>')
          .text(entry.species)
          .appendTo($card);

        if (exp !== null) {
          $('<div class="tp-exp"></div>')
            .text("+" + exp + " EXP")
            .appendTo($card);
        }

        $card.on("click", function () {
          loadIntoSide(entry);
        });

        $row.append($card);
      });

      if (anyExp) {
        $('<div class="tp-total"></div>')
          .text("Total: " + total + " EXP")
          .appendTo($panel);
      }
    }

    var lastValue = null;

    function check() {
      var value = $selector.val();

      if (value !== lastValue) {
        lastValue = value;
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
