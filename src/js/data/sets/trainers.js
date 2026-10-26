// trainers.js — load AFTER gen9.js (which defines SETDEX_SV) and BEFORE the calc's
// shared_controls script builds the set dropdowns.
//
// Set name format:  "Lvl <level> <Trainer name>"
// Same shape as normal Showdown sets, plus an optional "slot" (0-5) to keep party order.
// Replace this example block with your real data (or generate it from your ROM's files).
var TRAINER_SETS_SV = {
  "Serperior": {
    "Lvl 90 Pkmn Trainer Bianca17": {
      "slot": 0, "level": 90, "ability": "Contrary", "item": "Life Orb", "nature": "Modest",
      "ivs": {"hp":30,"at":30,"df":30,"sa":30,"sd":30,"sp":30},
      "evs": {},
      "moves": ["Leaf Storm", "Leech Seed", "Glare", "Draco Meteor"]
    }
  },
  "Meowth": {
    "Lvl 88 Pkmn Trainer Bianca17": {
      "slot": 1, "level": 88, "ability": "Technician", "item": "", "nature": "Hardy",
      "moves": ["Nasty Plot", "Hypnosis", "Swift", "Fake Out"]
    }
  }
};

// Optional: base experience yield per species (lowercase id, no spaces/punctuation).
// Leave empty and the EXP lines are simply hidden. Fill from your game's data.
var BASE_EXP_YIELD = {
  // "serperior": 238,
};

// Optional: player's level for the scaled-EXP formula (Gen 5+/Gen 7+ style).
var TRAINER_EXP_CONFIG = { playerLevel: 80, trainerMultiplier: 1.5 };

// Merge into the main set dex so the dropdown picks them up.
(function () {
  if (typeof SETDEX_SV === "undefined") { console.error("trainers.js must load after gen9.js"); return; }
  Object.keys(TRAINER_SETS_SV).forEach(function (species) {
    SETDEX_SV[species] = SETDEX_SV[species] || {};
    Object.keys(TRAINER_SETS_SV[species]).forEach(function (setName) {
      SETDEX_SV[species][setName] = TRAINER_SETS_SV[species][setName];
    });
  });
})();
