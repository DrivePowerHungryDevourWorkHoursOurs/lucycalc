// trainers.js — load AFTER gen9.js (which defines SETDEX_SV) and BEFORE the calc's
// shared_controls script builds the set dropdowns.
//
// Set name format:  "Lvl <level> <Trainer name>"
// Same shape as normal Showdown sets, plus an optional "slot" (0-5) to keep party order.
// Replace this example block with your real data (or generate it from your ROM's files).
var TRAINER_SETS_SV = {
  "Geodude-Alola": {
    "Lvl 14 Gym Leader Chad": {
      "slot": 0, "level": 14, "ability": "Galvanize", "item": "Focus Sash", "nature": "Adamant",
      "ivs": {"hp":17,"at":17,"df":17,"sa":17,"sd":17,"sp":17},
      "evs": {hp:252,at:252,df:0,sa:0,sd:4,sp:0},
      "moves": ["Rock Blast", "Fire Punch", "Stealth Rock", "Headbutt"]
    }
  },
  "Magnemite": {
    "Lvl 16 Gym Leader Chad": {
      "slot": 1, "level": 16, "ability": "Levitate", "item": "Choice Scarf", "nature": "Timid",
      "ivs": {"hp":17,"at":0,"df":17,"sa":18,"sd":17,"sp":18},
      "evs": {hp:0,at:0,df:0,sa:248,sd:12,sp:248},
      "moves": ["Shock Wave", "Charge Beam", "Swift", "Hidden Power Fire"]
    }
  },
    "Chinchou": {
    "Lvl 16 Gym Leader Chad": {
      "slot": 2, "level": 16, "ability": "Volt Absorb", "item": "Sitrus Berry", "nature": "Modest",
      "ivs": {"hp":17,"at":0,"df":17,"sa":17,"sd":17,"sp":17},
      "evs": {hp:252,at:0,df:0,sa:252,sd:4,sp:0},
      "moves": ["Icy Wind", "Charge Beam", "Brine", "Volt Switch"]
    }
  },
     "Pikachu": {
    "Lvl 16 Gym Leader Chad": {
      "slot": 3, "level": 16, "ability": "Lightning Rod", "item": "Magnet", "nature": "Hasty",
      "ivs": {"hp":17,"at":17,"df":17,"sa":17,"sd":17,"sp":17},
      "evs": {hp:0,at:236,df:0,sa:28,sd:0,sp:232},
      "moves": ["Charge Beam", "Zippy Zap", "Grass Knot", "Fake Out"] 
    }
  },
     "Torkoal": {
    "Lvl 22 Gym Leader Sebastian": {
      "slot": 0, "level": 22, "ability": "Drought", "item": "Heat Rock", "nature": "Bold",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:244,at:248,df:0,sa:16,sd:0,sp:0},
      "moves": ["Stealth Rock", "Rapid Spin", "Lava Plume ", "Body Press"] 
    }
  },
      "Fletchinder": {
    "Lvl 23 Gym Leader Sebastian": {
      "slot": 1, "level": 23, "ability": "Gale Wings", "item": "Heavy-Duty Boots", "nature": "Modest",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:248,at:0,df:0,sa:252,sd:8,sp:0},
      "moves": ["Will-o-Wisp", "Roost", "Wing Attack", "Overheat"] 
    }
  },
      "Numel": {
    "Lvl 24 Gym Leader Sebastian": {
      "slot": 2, "level": 24, "ability": "Solar Power", "item": "Eviolite", "nature": "Modest",
      "ivs": {"hp":31,"at":1,"df":30,"sa":30,"sd":31,"sp":31},
      "evs": {hp:252,at:0,df:0,sa:252,sd:4,sp:0},
      "moves": ["Overheat", "Mud Bomb", "Lava Plume", "Hidden Power Grass"] 
    }
  },
      "Quilava": {
    "Lvl 25 Gym Leader Sebastian": {
      "slot": 3, "level": 25, "ability": "Blaze", "item": "Charcoal", "nature": "Timid",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:0,sa:252,sd:4,sp:252},
      "moves": ["Overheat", "Energy Ball", "Extrasensory", "Incinerate"] 
    }
  },
      "Deoxys-Speed": {
    "Lvl 100 Champion": {
      "slot": 0, "level": 100, "ability": "Pressure", "item": "Focus Sash", "nature": "Timid ",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:248,at:0,df:164,sa:0,sd:0,sp:96},
      "moves": ["Stealth Rock", "Spikes", "Taunt", "Magic Coat"] 
    }
  },
     "Miraidon": {
    "Lvl 100 Champion": {
      "slot": 1, "level": 100, "ability": "Hadron Engine", "item": "Heavy-Duty Boots", "nature": "Timid",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:4,sa:252,sd:0,sp:252},
      "moves": ["Electro Drift", "Draco Meteor", "Overheat", "Taunt"],
    }
  },   
       "Zacian-Crowned": {
    "Lvl 100 Champion": {
      "slot": 2, "level": 100, "ability": "Intrepid Sword", "item": "Rusted Sword", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:4,at:252,df:0,sa:0,sd:0,sp:252},
      "moves": ["Swords Dance", "Behemoth Blade", "Close Combat", "Play Rough"],
    }
  },
     "Arceus": {
    "Lvl 100 Champion": {
      "slot": 3, "level": 100, "ability": "Multitype", "item": "Leftovers", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:252,at:252,df:0,sa:0,sd:4,sp:0},
      "moves": ["Swords Dance", "Extreme Speed", "Shadow Claw", "Recover"],
    }
  },           
      "Necrozma-Dusk-Mane": {
    "Lvl 100 Champion": {
      "slot": 4, "level": 100, "ability": "Prism Armor", "item": "Ultranecrozium Z", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Dragon Dance", "Outrage", "Photon Geyser", "Earthquake"],
    }
  },      
      "Rayquaza-Mega": {
    "Lvl 100 Champion": {
      "slot": 6, "level": 100, "ability": "Delta Stream", "item": "Zygardite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Dragon Dance", "Extreme Speed", "Dragon Ascent", "Earthquake"],
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
