// trainers.js — load AFTER gen9.js (which defines SETDEX_SV) and BEFORE the calc's
// shared_controls script builds the set dropdowns.
//
// Set name format:  "Lvl <level> <Trainer name>"
// Same shape as normal Showdown sets, plus an optional "slot" (0-5) to keep party order.
// Replace this example block with your real data (or generate it from your ROM's files).
var TRAINER_SETS_SV = {
  "Eevee": {
    "Lvl 5 Rival Jake (Lab)": {
      "slot": 0, "level": 5, "ability": "Adaptability", "item": " ", "nature": "Hardy",
      "ivs": {"hp":0,"at":0,"df":0,"sa":0,"sd":0,"sp":0},
      "evs": {hp:0,at:0,df:0,sa:0,sd:0,sp:0},
      "moves": ["Tackle"]
    }
  },
  "Poochyena": {
    "Lvl 10 Eclipse Member Linda": {
      "slot": 0, "level": 10, "ability": "Intimidate", "item": "Oran Berry", "nature": "Adamant",
      "ivs": {"hp":17,"at":17,"df":17,"sa":17,"sd":17,"sp":17},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Tackle", "Bite", "Howl", "Rock Smash"]
    }
  },
  "Pancham": {
    "Lvl 10 Eclipse Member Linda": {
      "slot": 1, "level": 10, "ability": "Scrappy", "item": "Expert Belt", "nature": "Adamant",
      "ivs": {"hp":17,"at":17,"df":17,"sa":17,"sd":17,"sp":17},
      "evs": {"hp":0,"at":228,"df":0,"sa":0,"sd":252,"sp":28},
      "moves": ["Knock Off", "Arm Thrust", "Work Up", "Cut"]
    }
  },
  "Zigzagoon-Galar": {
    "Lvl 12 Eclipse Member Linda": {
      "slot": 2, "level": 12, "ability": "Quick Feet", "item": "Dread Plate", "nature": "Lonely",
      "ivs": {"hp":17,"at":17,"df":17,"sa":17,"sd":17,"sp":17},
      "evs": {"hp":0,"at":252,"df":0,"sa":4,"sd":0,"sp":252},
      "moves": ["Knock Off", "Headbutt", "Work Up", "Grass Knot"]
    }
  },
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
    "Skiddo": {
    "Lvl 16 Jake (Route 5)": {
      "slot": 0, "level": 16, "ability": "Sap Sipper", "item": "Miracle Seed", "nature": "Careful",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":8,"df":0,"sa":0,"sd":252,"sp":0},
      "moves": ["Razor Leaf", "Leech Seed", "Milk Drink", "Rollout"]
    }
  },
  "Eevee#2": {
    "Lvl 17 Jake (Route 5)": {
      "slot": 1, "level": 17, "ability": "Adaptability", "item": "Berry Juice", "nature": "Lonely",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":236,"df":0,"sa":12,"sd":252,"sp":4},
      "moves": ["Quick Attack", "Swift", "Work Up", "Bite"]
    }
  },
  "Fletchinder": {
    "Lvl 17 Jake (Route 5)": {
      "slot": 2, "level": 17, "ability": "Gale Wings", "item": "Charcoal", "nature": "Hasty",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":4,"sd":0,"sp":252},
      "moves": ["Quick Attack", "Ember", "Peck", "Agility"]
    }
  },
   "Honedge": {
    "Lvl 17 Eclipse Admin Harry": {
      "slot": 0, "level": 17, "ability": "No Guard", "item": "Life Orb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":248,"df":20,"sa":0,"sd":240,"sp":0},
      "moves": ["Swords Dance", "Fury Cutter", "Shadow Sneak", "Iron Head"]
    }
  },
  "Vullaby": {
    "Lvl 18 Eclipse Admin Harry": {
      "slot": 1, "level": 18, "ability": "Pressure", "item": "Berry Juice", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":244,"df":12,"sa":0,"sd":252,"sp":0},
      "moves": ["Knock Off", "Pluck", "Mean Look", "U-turn"]
    }
  },
  "Sizzlipede": {
    "Lvl 19 Eclipse Admin Harry": {
      "slot": 2, "level": 19, "ability": "Flash Fire", "item": "Heavy-Duty Boots", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":248,"df":28,"sa":0,"sd":232,"sp":0},
      "moves": ["Rollout", "Flame Wheel", "Leech Life", "Knock Off"]
    }
  },
  "Lunatone": {
    "Lvl 20 Eclipse Admin Harry": {
      "slot": 3, "level": 20, "ability": "Levitate", "item": "Leftovers", "nature": "Mild",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Charge Beam", "Rock Polish", "Ancient Power", "Confusion"]
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
      "Fletchinder#2": {
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
    "Sneasel": {
    "Lvl 28 Eclipse Admin Gabe": {
      "slot": 0, "level": 28, "ability": "Inner Focus", "item": "Life Orb", "nature": "Hasty",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":4,"sd":0,"sp":252},
      "moves": ["Icy Wind", "Metal Claw", "Feint Attack", "Hone Claws"]
    }
  },
  "Arbok": {
    "Lvl 28 Eclipse Admin Gabe": {
      "slot": 1, "level": 28, "ability": "Guts", "item": "Flame Orb", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Crunch", "Poison Jab", "Ice Fang", "Fire Fang"]
    }
  },
  "Wugtrio": {
    "Lvl 29 Eclipse Admin Gabe": {
      "slot": 2, "level": 29, "ability": "Technician", "item": "Expert Belt", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Triple Dive", "Bulldoze", "Rock Tomb", "Aqua Jet"]
    }
  },
  "Solrock": {
    "Lvl 30 Eclipse Admin Gabe": {
      "slot": 3, "level": 30, "ability": "Levitate", "item": "Leftovers", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":4,"at":252,"df":0,"sa":0,"sd":0,"sp":252},
      "moves": ["Zen Headbutt", "Rock Slide", "Rock Polish", "Acrobatics"]
    }
  },
  "Pelipper": {
    "Lvl 35 Gym Leader Quentin": {
      "slot": 0, "level": 35, "ability": "Drizzle", "item": "Damp Rock", "nature": "Bold",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:248,at:0,df:252,sa:8,sd:0,sp:0},
      "moves": ["Scald", "Air Cutter", "U-turn", "Roost"]
    }
  },
  "Tentacruel": {
    "Lvl 35 Gym Leader Quentin": {
      "slot": 1, "level": 35, "ability": "Rain Dish", "item": "Black Sludge", "nature": "Bold",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:248,at:0,df:244,sa:0,sd:0,sp:16},
      "moves": ["Scald", "Rapid Spin", "Knock Off", "Toxic Spikes"]
    }
  },
  "Bibarel": {
    "Lvl 36 Gym Leader Quentin": {
      "slot": 2, "level": 36, "ability": "Unaware", "item": "Life Orb", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:8,sp:244},
      "moves": ["Swords Dance", "Liquidation", "Aqua Jet", "Frustration"]
    }
  },
  "Ludicolo": {
    "Lvl 36 Gym Leader Quentin": {
      "slot": 3, "level": 36, "ability": "Swift Swim", "item": "Coba Berry", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:0,sa:244,sd:16,sp:244},
      "moves": ["Giga Drain", "Ice Beam", "Scald", "Rain Dance"]
    }
  },
  "Swampert": {
    "Lvl 37 Gym Leader Quentin": {
      "slot": 4, "level": 37, "ability": "Swift Swim", "item": "Rindo Berry", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Waterfall", "Earthquake", "Ice Punch", "Rock Slide"]
    }
  },
    "Vaporeon": {
    "Lvl 36 Jake & Tess B2B (Route 9)": {
      "slot": 0, "level": 36, "ability": "Water Absorb", "item": "Leftovers", "nature": "Modest",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":0,"df":0,"sa":252,"sd":8,"sp":0},
      "moves": ["Scald", "Flip Turn", "Aurora Beam", "Heal Bell"]
    }
  },
  "Lucario": {
    "Lvl 36 Jake & Tess B2B (Route 9)": {
      "slot": 1, "level": 36, "ability": "Iron Fist", "item": "Expert Belt", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Brick Break", "Bullet Punch", "Bone Rush", "Swords Dance"]
    }
  },
  "Talonflame": {
    "Lvl 36 Jake & Tess B2B (Route 9)": {
      "slot": 2, "level": 36, "ability": "Gale Wings", "item": "Heavy-Duty Boots", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Roost", "Flare Blitz", "Aerial Ace", "Quick Attack"]
    }
  },
  "Gogoat": {
    "Lvl 36 Jake & Tess B2B (Route 9)": {
      "slot": 3, "level": 36, "ability": "Sap Sipper", "item": "Life Orb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":240,"at":248,"df":0,"sa":0,"sd":20,"sp":0},
      "moves": ["Bulk Up", "Seed Bomb", "Aerial Ace", "Earthquake"]
    }
  },
  "Gabite": {
    "Lvl 33 Jake & Tess B2B (Route 9)": {
      "slot": 4, "level": 33, "ability": "Rough Skin", "item": "Expert Belt", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Dragon Claw", "Rock Tomb", "Stomping Tantrum"]
    }
  },
  "Shelgon": {
    "Lvl 33 Jake & Tess B2B (Route 9)": {
      "slot": 5, "level": 33, "ability": "Rock Head", "item": "Life Orb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":4,"at":252,"df":0,"sa":0,"sd":0,"sp":252},
      "moves": ["Dragon Claw", "Dragon Dance", "Brick Break", "Fire Fang"]
    }
  },
  "Axew": {
    "Lvl 33 Jake & Tess B2B (Route 9)": {
      "slot": 6, "level": 33, "ability": "Mold Breaker", "item": "Choice Scarf", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Claw", "Iron Head", "Crunch", "Aqua Tail"]
    }
  },
  "Archeops": {
    "Lvl 45 Gym Leader Stephen": {
      "slot": 0, "level": 45, "ability": "Adrenaline", "item": "Power Herb", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:0,sa:252,sd:0,sp:252},
      "moves": ["Meteor Beam", "Air Slash", "Focus Blast", "Earth Power"]
    }
  },
  "Gliscor": {
    "Lvl 46 Gym Leader Stephen": {
      "slot": 1, "level": 46, "ability": "Poison Heal", "item": "Toxic Orb", "nature": "Careful",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:248,df:0,sa:0,sd:8,sp:248},
      "moves": ["Earthquake", "Facade", "Thunder Fang", "Knock Off"]
    }
  },
  "Talonflame#2": {
    "Lvl 47 Gym Leader Stephen": {
      "slot": 2, "level": 47, "ability": "Gale Wings", "item": "Charti Berry", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:4,at:252,df:0,sa:0,sd:0,sp:252},
      "moves": ["Flare Blitz", "Brave Bird", "Steel Wing", "Roost"]
    }
  },
  "Noctowl": {
    "Lvl 48 Gym Leader Stephen": {
      "slot": 3, "level": 48, "ability": "Magic Guard", "item": "Weakness Policy", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:48,at:0,df:0,sa:252,sd:0,sp:208},
      "moves": ["Esper Wing", "Stored Power", "Air Slash", "Heat Wave"]
    }
  },
  "Hawlucha": {
    "Lvl 49 Gym Leader Stephen": {
      "slot": 4, "level": 49, "ability": "Unburden", "item": "White Herb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:4,at:252,df:0,sa:0,sd:0,sp:252},
      "moves": ["Close Combat", "Acrobatics", "Thunder Punch", "Swords Dance"]
    }
  },
  "Swellow": {
    "Lvl 50 Gym Leader Stephen": {
      "slot": 5, "level": 50, "ability": "Scrappy", "item": "Throat Spray", "nature": "Timid",
      "ivs": {"hp":31,"at":1,"df":30,"sa":30,"sd":30,"sp":30},
      "evs": {hp:4,at:0,df:0,sa:252,sd:0,sp:252},
      "moves": ["Boomburst", "Hurricane", "Heat Wave", "Hidden Power Fighting"]
    }
  },
    "Venusaur": {
    "Lvl 50 Professor Cypress (Anthian Park)": {
      "slot": 0, "level": 50, "ability": "Overgrow", "item": "Black Sludge", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Leaf Storm", "Sludge Bomb", "Sleep Powder", "Synthesis"]
    }
  },
  "Feraligatr": {
    "Lvl 50 Professor Cypress (Anthian Park)": {
      "slot": 1, "level": 50, "ability": "Sheer Force", "item": "Life Orb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Liquidation", "Ice Punch", "Crunch"]
    }
  },
  "Typhlosion": {
    "Lvl 50 Professor Cypress (Anthian Park)": {
      "slot": 2, "level": 50, "ability": "Blaze", "item": "Choice Scarf", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Flamethrower", "Energy Ball", "Earth Power", "Discharge"]
    }
  },
  "Meganium": {
    "Lvl 50 Professor Cypress (Anthian Park)": {
      "slot": 3, "level": 50, "ability": "Triage", "item": "Leftovers", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
      "moves": ["Synthesis", "Giga Drain", "Draining Kiss", "Psychic"]
    }
  },
  "Blastoise": {
    "Lvl 50 Professor Cypress (Anthian Park)": {
      "slot": 4, "level": 50, "ability": "Bulletproof", "item": "White Herb", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Shell Smash", "Scald", "Aura Sphere", "Ice Beam"]
    }
  },
  "Charizard": {
    "Lvl 50 Professor Cypress (Anthian Park)": {
      "slot": 5, "level": 50, "ability": "Blaze", "item": "Heavy-Duty Boots", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Aerial Ace", "Flare Blitz", "Earthquake"]
    }
  },
  "Electrode": {
    "Lvl 40 Admin Tyler": {
      "slot": 0, "level": 40, "ability": "Static", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Explosion"]
    },
    "Lvl 40 Admin Tyler [2]": {
      "slot": 1, "level": 40, "ability": "Static", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Explosion"]
    },
    "Lvl 40 Admin Tyler [3]": {
      "slot": 2, "level": 40, "ability": "Static", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Explosion"]
    }
  },
  "Annihilape": {
    "Lvl 40 Admin Tyler": {
      "slot": 3, "level": 40, "ability": "Defiant", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":4,"sa":0,"sd":0,"sp":252},
      "moves": ["Final Gambit"]
    }
  },
  "Hatterene": {
    "Lvl 40 Admin Tyler": {
      "slot": 4, "level": 40, "ability": "Magic Bounce", "item": "Focus Sash", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
      "moves": ["Misty Explosion"]
    }
  },
  "Blacephalon": {
    "Lvl 40 Admin Tyler": {
      "slot": 5, "level": 40, "ability": "Beast Boost", "item": "Focus Sash", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Mind Blown"]
    }
  }, 
  "Hippowdon": {
    "Lvl 55 Gym Leader Prince Ryan (Doubles)": {
      "slot": 0, "level": 55, "ability": "Sand Stream", "item": "Eject Pack", "nature": "Sassy",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
      "evs": {hp:248,at:8,df:0,sa:0,sd:252,sp:0},
      "moves": ["High Horsepower", "Superpower", "Rock Slide", "Slack Off"]
    }
  },
  "Excadrill": {
    "Lvl 55 Gym Leader Prince Ryan (Doubles)": {
      "slot": 1, "level": 55, "ability": "Sand Rush", "item": "Life Orb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["High Horsepower", "Iron Head", "Aerial Ace", "Rock Slide"]
    }
  },
  "Gastrodon": {
    "Lvl 56 Gym Leader Prince Ryan (Doubles)": {
      "slot": 2, "level": 56, "ability": "Storm Drain", "item": "Rindo Berry", "nature": "Calm",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:252,at:0,df:0,sa:4,sd:252,sp:0},
      "moves": ["Muddy Water", "Ice Beam", "Recover", "Yawn"]
    }
  },
  "Rhydon": {
    "Lvl 56 Gym Leader Prince Ryan (Doubles)": {
      "slot": 3, "level": 56, "ability": "Sap Sipper", "item": "Eviolite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:248,at:252,df:0,sa:0,sd:8,sp:0},
      "moves": ["High Horsepower", "Rock Slide", "Supercell Slam", "Ice Punch"]
    }
  },
  "Mamoswine": {
    "Lvl 57 Gym Leader Prince Ryan (Doubles)": {
      "slot": 4, "level": 57, "ability": "Thick Fat", "item": "Assault Vest", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["High Horsepower", "Icicle Crash", "Ice Shard", "Rock Slide"]
    }
  },
    "Garchomp": {
    "Lvl 57 Gym Leader Prince Ryan (Doubles)": {
      "slot": 5, "level": 57, "ability": "Rough Skin", "item": "Garchompite", "nature": "Naive",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:4,df:0,sa:252,sd:0,sp:252},
      "moves": ["Draco Meteor", "Stomping Tantrum", "Dragon Rush", "Fire Blast"]
    }
  },
  "Garchomp-Mega": {
    "Lvl 57 Gym Leader Prince Ryan (Doubles)": {
      "slot": 6, "level": 57, "ability": "Rough Skin", "item": "Garchompite", "nature": "Naive",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:4,df:0,sa:252,sd:0,sp:252},
      "moves": ["Draco Meteor", "Stomping Tantrum", "Dragon Rush", "Fire Blast"]
    }
  },
  "Whimsicott": {
    "Lvl 66 Gym Leader Fissy (Doubles)": {
      "slot": 0, "level": 66, "ability": "Prankster", "item": "Mental Herb", "nature": "Bold",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:252,at:0,df:252,sa:4,sd:0,sp:0},
      "moves": ["Dazzling Gleam", "Stun Spore", "Tailwind", "Sunny Day"]
    }
  },
  "Sceptile": {
    "Lvl 66 Gym Leader Fissy (Doubles)": {
      "slot": 1, "level": 66, "ability": "Technician", "item": "Loaded Dice", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:0,sp:252},
      "moves": ["Bullet Seed", "Rock Tomb", "Double Kick", "Scale Shot"]
    }
  },
  "Lilligant-Hisui": {
    "Lvl 66 Gym Leader Fissy (Doubles)": {
      "slot": 2, "level": 66, "ability": "Chlorophyll", "item": "Focus Sash", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Solar Blade", "Axe Kick", "Triple Axel", "Healing Wish"]
    }
  },
  "Jumpluff": {
    "Lvl 66 Gym Leader Fissy (Doubles)": {
      "slot": 3, "level": 66, "ability": "Unburden", "item": "Sawsbuck Coffee", "nature": "Careful",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:44,at:0,df:252,sa:0,sd:212,sp:0},
      "moves": ["Acrobatics", "Tailwind", "Sleep Powder", "Sunny Day"]
    }
  },
  "Torterra": {
    "Lvl 66 Gym Leader Fissy (Doubles)": {
      "slot": 4, "level": 66, "ability": "Thick Fat", "item": "Yache Berry", "nature": "Impish",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:124,at:112,df:164,sa:0,sd:0,sp:108},
      "moves": ["Wood Hammer", "High Horsepower", "Body Press", "Rock Slide"]
    }
  },
    "Scovillain": {
    "Lvl 66 Gym Leader Fissy (Doubles)": {
      "slot": 5, "level": 66, "ability": "Chlorophyll", "item": "Scovillainite", "nature": "Naive",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:204,df:0,sa:252,sd:0,sp:52},
      "moves": ["Solar Beam", "Fire Blast", "Temper Flare", "Stomping Tantrum"]
    }
  },
  "Scovillain-Mega": {
    "Lvl 66 Gym Leader Fissy (Doubles)": {
      "slot": 6, "level": 66, "ability": "Chlorophyll", "item": "Scovillainite", "nature": "Naive",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:204,df:0,sa:252,sd:0,sp:52},
      "moves": ["Solar Beam", "Fire Blast", "Temper Flare", "Stomping Tantrum"]
    }
  },
   "Garchomp#2": {
    "Lvl 60 Jake (Route 14)": {
      "slot": 0, "level": 60, "ability": "Rough Skin", "item": "Rocky Helmet", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Stealth Rock", "Earthquake", "Toxic", "Dragon Tail"]
    }
  },
  "Gogoat#2": {
    "Lvl 61 Jake (Route 14)": {
      "slot": 1, "level": 61, "ability": "Sap Sipper", "item": "Life Orb", "nature": "Careful",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":4,"df":0,"sa":0,"sd":252,"sp":0},
      "moves": ["Bulk Up", "Horn Leech", "Milk Drink", "Earthquake"]
    }
  },
  "Talonflame#3": {
    "Lvl 62 Jake (Route 14)": {
      "slot": 2, "level": 62, "ability": "Gale Wings", "item": "Heavy-Duty Boots", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Roost", "Flare Blitz", "Brave Bird", "Steel Wing"]
    }
  },
  "Hatterene#2": {
    "Lvl 63 Jake (Route 14)": {
      "slot": 3, "level": 63, "ability": "Magic Bounce", "item": "Leftovers", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":4,"sa":252,"sd":0,"sp":0},
      "moves": ["Calm Mind", "Psyshock", "Draining Kiss", "Mystical Fire"]
    }
  },
  "Lucario#2": {
    "Lvl 64 Jake (Route 14)": {
      "slot": 4, "level": 64, "ability": "Iron Fist", "item": "Expert Belt", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Close Combat", "Bullet Punch", "Meteor Mash", "Swords Dance"]
    }
  },
  "Vaporeon#2": {
    "Lvl 65 Jake (Route 14)": {
      "slot": 5, "level": 65, "ability": "Water Absorb", "item": "Leftovers", "nature": "Modest",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":0,"df":0,"sa":252,"sd":8,"sp":0},
      "moves": ["Scald", "Flip Turn", "Aurora Beam", "Heal Bell"]
    }
  },  
  "Incineroar": {
    "Lvl 74 Gym Leader Zeek (Doubles)": {
      "slot": 0, "level": 74, "ability": "Intimidate", "item": "Eject Button", "nature": "Careful",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:240,at:0,df:36,sa:0,sd:232,sp:0},
      "moves": ["Flare Blitz", "Throat Chop", "Knock Off", "Fake Out"]
    }
  },
  "Meowscarada": {
    "Lvl 74 Gym Leader Zeek (Doubles)": {
      "slot": 1, "level": 74, "ability": "Protean", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:4,at:252,df:0,sa:0,sd:0,sp:252},
      "moves": ["Flower Trick", "Knock Off", "Play Rough", "Triple Axel"]
    }
  },
  "Samurott-Hisui": {
    "Lvl 74 Gym Leader Zeek (Doubles)": {
      "slot": 2, "level": 74, "ability": "Sharpness", "item": "Assault Vest", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Razor Shell", "Aqua Jet", "Ceaseless Edge", "Cut"]
    }
  },
  "Tyranitar": {
    "Lvl 74 Gym Leader Zeek (Doubles)": {
      "slot": 3, "level": 74, "ability": "Intimidate", "item": "Chople Berry", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:252,at:248,df:0,sa:0,sd:8,sp:0},
      "moves": ["Rock Slide", "Knock Off", "Fire Punch", "Ice Punch"]
    }
  },
  "Drapion": {
    "Lvl 75 Gym Leader Zeek (Doubles)": {
      "slot": 4, "level": 75, "ability": "Tough Claws", "item": "Choice Scarf", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:6,sp:252},
      "moves": ["Poison Jab", "Crunch", "Brick Break", "Aqua Tail"]
    }
  },
    "Absol": {
    "Lvl 75 Gym Leader Zeek (Doubles)": {
      "slot": 5, "level": 75, "ability": "Super Luck", "item": "Absolite Z", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Knock Off", "Sucker Punch", "Shadow Claw", "Close Combat"]
    }
  },
  "Absol-Mega-Z": {
    "Lvl 75 Gym Leader Zeek (Doubles)": {
      "slot": 6, "level": 75, "ability": "Tough Claws", "item": "Absolite Z", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Knock Off", "Sucker Punch", "Shadow Claw", "Close Combat"]
    }
  },
    "Druddigon": {
    "Lvl 70 Tess (Frostveil)": {
      "slot": 0, "level": 70, "ability": "Rough Skin", "item": "Rocky Helmet", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":248,"df":0,"sa":0,"sd":8,"sp":0},
      "moves": ["Stealth Rock", "Glare", "Dragon Tail", "Earthquake"]
    }
  },
  "Haxorus": {
    "Lvl 70 Tess (Frostveil)": {
      "slot": 1, "level": 70, "ability": "Mold Breaker", "item": "Lum Berry", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Outrage", "Earthquake", "Poison Jab"]
    }
  },
  "Hydreigon": {
    "Lvl 70 Tess (Frostveil)": {
      "slot": 2, "level": 70, "ability": "Levitate", "item": "Choice Specs", "nature": "Timid",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Draco Meteor", "Dark Pulse", "Fire Blast", "U-turn"]
    }
  },
  "Flygon": {
    "Lvl 70 Tess (Frostveil)": {
      "slot": 3, "level": 70, "ability": "Sheer Force", "item": "Life Orb", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Quiver Dance", "Earth Power", "Dragon Pulse", "Bug Buzz"]
    }
  },
  "Garchomp#3": {
    "Lvl 70 Tess (Frostveil)": {
      "slot": 4, "level": 70, "ability": "Sand Veil", "item": "Leftovers", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Fire Fang", "Scale Shot", "Earthquake"]
    }
  },
  "Salamence": {
    "Lvl 70 Tess (Frostveil)": {
      "slot": 5, "level": 70, "ability": "Intimidate", "item": "Salamencite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Facade", "Roost", "Earthquake"]
    }
  },
    "Salamence-Mega": {
    "Lvl 70 Tess (Frostveil)": {
      "slot": 6, "level": 70, "ability": "Aerilate", "item": "Salamencite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Facade", "Roost", "Earthquake"]
    }
  },
    "Terrakion": {
    "Lvl 76 Boss Deven (Optional, Tinbell Tower)": {
      "slot": 0, "level": 76, "ability": "Justified", "item": "Choice Band", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":4,"sa":0,"sd":0,"sp":252},
      "moves": ["Close Combat", "Stone Edge", "Earthquake", "Iron Head"]
    }
  },
  "Sneasler": {
    "Lvl 76 Boss Deven (Optional, Tinbell Tower)": {
      "slot": 1, "level": 76, "ability": "Unburden", "item": "White Herb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":8,"sp":248},
      "moves": ["Swords Dance", "Close Combat", "Dire Claw", "Acrobatics"]
    }
  },
  "Blaziken": {
    "Lvl 77 Boss Deven (Optional, Tinbell Tower)": {
      "slot": 2, "level": 77, "ability": "Speed Boost", "item": "Fightinium Z", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":164,"at":252,"df":0,"sa":0,"sd":0,"sp":92},
      "moves": ["Swords Dance", "Protect", "Flare Blitz", "High Jump Kick"]
    }
  },
  "Keldeo": {
    "Lvl 78 Boss Deven (Optional, Tinbell Tower)": {
      "slot": 3, "level": 78, "ability": "Justified", "item": "Leftovers", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Calm Mind", "Scald", "Focus Blast", "Substitute"]
    }
  },
  "Urshifu": {
    "Lvl 79 Boss Deven (Optional, Tinbell Tower)": {
      "slot": 4, "level": 79, "ability": "Unseen Fist", "item": "Choice Scarf", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Wicked Blow", "Close Combat", "U-turn", "Poison Jab"]
    }
  },
    "Lucario#4": {
    "Lvl 80 Boss Deven (Optional, Tinbell Tower)": {
      "slot": 5, "level": 80, "ability": "Iron Fist", "item": "Lucarionite", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Nasty Plot", "Vacuum Wave", "Aura Sphere", "Flash Cannon"]
    }
  },
  "Lucario-Mega": {
    "Lvl 80 Boss Deven (Optional, Tinbell Tower)": {
      "slot": 6, "level": 80, "ability": "Adaptability", "item": "Lucarionite", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Nasty Plot", "Vacuum Wave", "Aura Sphere", "Flash Cannon"]
    }
  },
    "Garchomp#4": {
    "Lvl 75 Jake (Eclipse Base)": {
      "slot": 0, "level": 75, "ability": "Rough Skin", "item": "Rocky Helmet", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Stealth Rock", "Earthquake", "Toxic", "Dragon Tail"]
    }
  },
  "Gogoat#3": {
    "Lvl 76 Jake (Eclipse Base)": {
      "slot": 1, "level": 76, "ability": "Sap Sipper", "item": "Life Orb", "nature": "Careful",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":4,"df":0,"sa":0,"sd":252,"sp":0},
      "moves": ["Bulk Up", "Horn Leech", "Milk Drink", "Earthquake"]
    }
  },
  "Talonflame#4": {
    "Lvl 77 Jake (Eclipse Base)": {
      "slot": 2, "level": 77, "ability": "Gale Wings", "item": "Heavy-Duty Boots", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Roost", "Flare Blitz", "Brave Bird", "U-turn"]
    }
  },
  "Hatterene#3": {
    "Lvl 78 Jake (Eclipse Base)": {
      "slot": 3, "level": 78, "ability": "Magic Bounce", "item": "Leftovers", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":4,"sa":252,"sd":0,"sp":0},
      "moves": ["Calm Mind", "Psyshock", "Draining Kiss", "Mystical Fire"]
    }
  },
  "Vaporeon#3": {
    "Lvl 79 Jake (Eclipse Base)": {
      "slot": 4, "level": 79, "ability": "Water Absorb", "item": "Leftovers", "nature": "Modest",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
      "moves": ["Scald", "Flip Turn", "Aurora Beam", "Heal Bell"]
    }
  },
  "Lucario#3": {
    "Lvl 80 Jake (Eclipse Base)": {
      "slot": 5, "level": 80, "ability": "Iron Fist", "item": "Lucarionite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Close Combat", "Bullet Punch", "Meteor Mash", "Swords Dance"]
    }
  },
  "Lucario-Mega#2": {
    "Lvl 80 Jake (Eclipse Base)": {
      "slot": 6, "level": 80, "ability": "Adaptability", "item": "Lucarionite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Close Combat", "Bullet Punch", "Meteor Mash", "Swords Dance"]
    }
  },
    "Feraligatr#2": {
    "Lvl 79 Professor Cypress (Demon's Tomb)": {
      "slot": 0, "level": 79, "ability": "Sheer Force", "item": "Life Orb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Liquidation", "Ice Punch", "Crunch"]
    }
  },
  "Venusaur#2": {
    "Lvl 79 Professor Cypress (Demon's Tomb)": {
      "slot": 1, "level": 79, "ability": "Overgrow", "item": "Black Sludge", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Leaf Storm", "Sludge Bomb", "Sleep Powder", "Synthesis"]
    }
  },
  "Typhlosion#2": {
    "Lvl 79 Professor Cypress (Demon's Tomb)": {
      "slot": 2, "level": 79, "ability": "Blaze", "item": "Choice Scarf", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Eruption", "Energy Ball", "Earth Power", "Discharge"]
    }
  },
  "Blastoise#2": {
    "Lvl 79 Professor Cypress (Demon's Tomb)": {
      "slot": 3, "level": 79, "ability": "Bulletproof", "item": "White Herb", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Shell Smash", "Scald", "Aura Sphere", "Ice Beam"]
    }
  },
  "Meganium#2": {
    "Lvl 79 Professor Cypress (Demon's Tomb)": {
      "slot": 4, "level": 79, "ability": "Triage", "item": "Leftovers", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
      "moves": ["Synthesis", "Giga Drain", "Draining Kiss", "Psychic"]
    }
  },
  "Charizard#2": {
    "Lvl 80 Professor Cypress (Demon's Tomb)": {
      "slot": 5, "level": 80, "ability": "Blaze", "item": "Charizardite X", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Dragon Claw", "Flare Blitz", "Earthquake"]
    }
  },
    "Charizard-Mega-X": {
    "Lvl 80 Professor Cypress (Demon's Tomb)": {
      "slot": 6, "level": 80, "ability": "Tough Claws", "item": "Charizardite X", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Dragon Claw", "Flare Blitz", "Earthquake"]
    }
  },
  "Mismagius": {
    "Lvl 83 Gym Leader Captain B (Doubles)": {
      "slot": 0, "level": 83, "ability": "Dazzling", "item": "Life Orb", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:0,sa:252,sd:4,sp:252},
      "moves": ["Dazzling Gleam", "Shadow Ball", "Nasty Plot", "Mystical Fire"]
    }
  },
  "Typhlosion-Hisui": {
    "Lvl 83 Gym Leader Captain B (Doubles)": {
      "slot": 1, "level": 83, "ability": "Blaze", "item": "Expert Belt", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:0,sa:252,sd:6,sp:252},
      "moves": ["Eruption", "Earth Power", "Shadow Ball", "Energy Ball"]
    }
  },
  "Annihilape#2": {
    "Lvl 83 Gym Leader Captain B (Doubles)": {
      "slot": 2, "level": 83, "ability": "Defiant", "item": "Leftovers", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:248,df:0,sa:0,sd:8,sp:252},
      "moves": ["Stone Edge", "Shadow Claw", "Close Combat", "Bulk Up"]
    }
  },
  "Mimikyu": {
    "Lvl 83 Gym Leader Captain B (Doubles)": {
      "slot": 3, "level": 83, "ability": "Disguise", "item": "Ghostium Z", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Play Rough", "Shadow Claw", "Shadow Sneak", "Drain Punch"]
    }
  },
  "Houndstone": {
    "Lvl 83 Gym Leader Captain B (Doubles)": {
      "slot": 4, "level": 83, "ability": "Fluffy", "item": "Assault Vest", "nature": "Brave",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
      "evs": {hp:252,at:252,df:0,sa:0,sd:4,sp:0},
      "moves": ["Last Respects", "Body Press", "Crunch", "Play Rough"]
    }
  },
    "Gengar": {
    "Lvl 83 Gym Leader Captain B (Doubles)": {
      "slot": 5, "level": 83, "ability": "Shadow Tag", "item": "Levitate", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:0,sa:252,sd:4,sp:252},
      "moves": ["Shadow Ball", "Sludge Bomb", "Energy Ball", "Focus Blast"]
    }
  },
  "Gengar-Mega": {
    "Lvl 83 Gym Leader Captain B (Doubles)": {
      "slot": 6, "level": 83, "ability": "Shadow Tag", "item": "Gengarite", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:0,sa:252,sd:4,sp:252},
      "moves": ["Shadow Ball", "Sludge Bomb", "Energy Ball", "Focus Blast"]
    }
  },
    "Tapu Koko": {
    "Lvl 85 Gym Leader Chad Rematch (Optional)": {
      "slot": 0, "level": 85, "ability": "Electric Surge", "item": "Light Clay", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Light Screen", "Reflect", "U-turn", "Wild Charge"]
    }
  },
  "Rotom-Wash": {
    "Lvl 86 Gym Leader Chad Rematch (Optional)": {
      "slot": 1, "level": 86, "ability": "Levitate", "item": "Leftovers", "nature": "Bold",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":4,"sa":0,"sd":252,"sp":0},
      "moves": ["Volt Switch", "Thunder Wave", "Hydro Pump", "Defog"]
    }
  },
  "Zapdos": {
    "Lvl 87 Gym Leader Chad Rematch (Optional)": {
      "slot": 2, "level": 87, "ability": "Static", "item": "Rocky Helmet", "nature": "Bold",
      "ivs": {"hp":31,"at":31,"df":30,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":184,"sa":0,"sd":0,"sp":72},
      "moves": ["Discharge", "Heat Wave", "Hidden Power [Ice]", "Roost"]
    }
  },
  "Electivire": {
    "Lvl 88 Gym Leader Chad Rematch (Optional)": {
      "slot": 3, "level": 88, "ability": "Iron Fist", "item": "Life Orb", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Thunder Punch", "Ice Punch", "Close Combat"]
    }
  },
  "Luxray": {
    "Lvl 89 Gym Leader Chad Rematch (Optional)": {
      "slot": 4, "level": 89, "ability": "Rock Head", "item": "Choice Scarf", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Wild Charge", "Head Smash", "Flare Blitz", "Crunch"]
    }
  },
  "Manectric": {
    "Lvl 90 Gym Leader Chad Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Motor Drive", "item": "Manectite", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":30,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Volt Switch", "Flamethrower", "Thunderbolt", "Hidden Power [Ice]"]
    }
  },
    "Manectric-Mega": {
    "Lvl 90 Gym Leader Chad Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Intimidate", "item": "Manectite", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":30,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Volt Switch", "Flamethrower", "Thunderbolt", "Hidden Power [Ice]"]
    }
  },
    "Torkoal#2": {
    "Lvl 85 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 0, "level": 85, "ability": "Drought", "item": "Heat Rock", "nature": "Modest",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":0,"df":0,"sa":252,"sd":8,"sp":0},
      "moves": ["Stealth Rock", "Rapid Spin", "Lava Plume", "Solar Beam"]
    }
  },
  "Incineroar#2": {
    "Lvl 86 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 1, "level": 86, "ability": "Intimidate", "item": "Weakness Policy", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Bulk Up", "Flame Charge", "Power Trip", "Drain Punch"]
    }
  },
  "Cinderace": {
    "Lvl 87 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 2, "level": 87, "ability": "Libero", "item": "Heavy-Duty Boots", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Pyro Ball", "Sucker Punch", "Low Kick", "Gunk Shot"]
    }
  },
  "Volcarona": {
    "Lvl 88 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 3, "level": 88, "ability": "Flame Body", "item": "Heavy-Duty Boots", "nature": "Mild",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Quiver Dance", "Bug Buzz", "Fiery Dance", "Giga Drain"]
    }
  },
  "Typhlosion#2": {
    "Lvl 89 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 4, "level": 89, "ability": "Blaze", "item": "Choice Scarf", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Eruption", "Earth Power", "Energy Ball", "Flash Cannon"]
    }
  },
  "Charizard#3": {
    "Lvl 90 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Blaze", "item": "Charizardite Y", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Flamethrower", "Focus Blast", "Solar Beam", "Roost"]
    }
  },
    "Charizard-Mega-Y": {
    "Lvl 90 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Drought", "item": "Charizardite Y", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Flamethrower", "Focus Blast", "Solar Beam", "Roost"]
    }
  },
    "Pelipper#2": {
    "Lvl 85 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 0, "level": 85, "ability": "Drizzle", "item": "Damp Rock", "nature": "Bold",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":0,"df":252,"sa":8,"sd":0,"sp":0},
      "moves": ["Scald", "Hurricane", "U-turn", "Roost"]
    }
  },
  "Tentacruel#2": {
    "Lvl 86 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 1, "level": 86, "ability": "Rain Dish", "item": "Black Sludge", "nature": "Bold",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":0,"df":244,"sa":0,"sd":0,"sp":16},
      "moves": ["Scald", "Rapid Spin", "Haze", "Toxic Spikes"]
    }
  },
  "Barraskewda": {
    "Lvl 87 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 2, "level": 87, "ability": "Swift Swim", "item": "Choice Band", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Liquidation", "Close Combat", "Flip Turn", "Psychic Fangs"]
    }
  },
  "Ludicolo#2": {
    "Lvl 88 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 3, "level": 88, "ability": "Swift Swim", "item": "Life Orb", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":244,"sd":16,"sp":244},
      "moves": ["Giga Drain", "Ice Beam", "Hydro Pump", "Rain Dance"]
    }
  },
  "Poliwrath": {
    "Lvl 89 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 4, "level": 89, "ability": "Swift Swim", "item": "White Herb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Close Combat", "Wave Crash", "Sucker Punch", "Ice Punch"]
    }
  },
  "Swampert#2": {
    "Lvl 90 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Swift Swim", "item": "Swampertite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Waterfall", "Earthquake", "Ice Punch", "Superpower"]
    }
  },
    "Swampert-Mega": {
    "Lvl 90 Gym Leader Sebastian Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Swift Swim", "item": "Swampertite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Waterfall", "Earthquake", "Ice Punch", "Superpower"]
    }
  },
};

// Optional: base experience yield per species (lowercase id, no spaces/punctuation).
// Leave empty and the EXP lines are simply hidden. Fill from your game's data.
var BASE_EXP_YIELD = {
  // "serperior": 238,
};

// Optional: player's level for the scaled-EXP formula (Gen 5+/Gen 7+ style).
var TRAINER_EXP_CONFIG = { playerLevel: 80, trainerMultiplier: 1.5 };

// Merge into the main set dex so the dropdown picks them up.
// Keys like "Electrike#2" are treated as "Electrike" (the #N just keeps JS keys unique).
(function () {
  if (typeof SETDEX_SV === "undefined") { console.error("trainers.js must load after gen9.js"); return; }
  Object.keys(TRAINER_SETS_SV).forEach(function (key) {
    var species = key.replace(/\s*#\d+$/, "");
    SETDEX_SV[species] = SETDEX_SV[species] || {};
    Object.keys(TRAINER_SETS_SV[key]).forEach(function (setName) {
      SETDEX_SV[species][setName] = TRAINER_SETS_SV[key][setName];
    });
  });
})();