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
  "Carkol": {
    "Lvl 22 Gym Leader Sebastian": {
      "slot": 0, "level": 22, "ability": "Steam Engine", "item": "Eviolite", "nature": "Mild",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":184,"at":0,"df":0,"sa":112,"sd":136,"sp":76},
      "moves": ["Ancient Power", "Heat Wave", "Dig", "Stealth Rock"]
    }
  },
  "Houndour": {
    "Lvl 23 Gym Leader Sebastian": {
      "slot": 1, "level": 23, "ability": "Intimidate", "item": "Scope Lens", "nature": "Mild",
      "ivs": {"hp":31,"at":0,"df":31,"sa":30,"sd":31,"sp":31},
      "evs": {"hp":12,"at":0,"df":4,"sa":248,"sd":0,"sp":244},
      "moves": ["Dark Pulse", "Overheat", "Sludge Bomb", "Hidden Power Grass"]
    }
  },
  "Sunflora": {
    "Lvl 24 Gym Leader Sebastian": {
      "slot": 2, "level": 24, "ability": "Seed Sower", "item": "Eject Button", "nature": "Mild",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":20,"df":0,"sa":236,"sd":0,"sp":4},
      "moves": ["Mega Drain", "Grassy Glide", "Overheat", "Snarl"]
    }
  },
  "Torracat": {
    "Lvl 25 Gym Leader Sebastian": {
      "slot": 3, "level": 25, "ability": "Guts", "item": "Toxic Orb", "nature": "Impish",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Fire Fang", "Double Kick", "Fake Out", "Parting Shot"]
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
    "Lvl 40 Eclipse Admin Tyler": {
      "slot": 0, "level": 40, "ability": "Static", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Explosion"]
    },
    "Lvl 40 Eclipse Admin Tyler [2]": {
      "slot": 1, "level": 40, "ability": "Static", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Explosion"]
    },
    "Lvl 40 Eclipse Admin Tyler [3]": {
      "slot": 2, "level": 40, "ability": "Static", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Explosion"]
    }
  },
  "Annihilape": {
    "Lvl 40 Eclipse Admin Tyler": {
      "slot": 3, "level": 40, "ability": "Defiant", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":4,"sa":0,"sd":0,"sp":252},
      "moves": ["Final Gambit"]
    }
  },
  "Hatterene": {
    "Lvl 40 Eclipse Admin Tyler": {
      "slot": 4, "level": 40, "ability": "Magic Bounce", "item": "Focus Sash", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
      "moves": ["Misty Explosion"]
    }
  },
  "Blacephalon": {
    "Lvl 40 Eclipse Admin Tyler": {
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
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":30},
      "evs": {"hp":252,"at":0,"df":184,"sa":0,"sd":0,"sp":72},
      "moves": ["Discharge", "Heat Wave", "Hidden Power Ice", "Roost"]
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
      "moves": ["Volt Switch", "Flamethrower", "Thunderbolt", "Hidden Power Ice"]
    }
  },
    "Manectric-Mega": {
    "Lvl 90 Gym Leader Chad Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Intimidate", "item": "Manectite", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":30,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Volt Switch", "Flamethrower", "Thunderbolt", "Hidden Power Ice"]
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
  "Typhlosion#3": {
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
    "Lvl 85 Gym Leader Quentin Rematch (Optional)": {
      "slot": 0, "level": 85, "ability": "Drizzle", "item": "Damp Rock", "nature": "Bold",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":0,"df":252,"sa":8,"sd":0,"sp":0},
      "moves": ["Scald", "Hurricane", "U-turn", "Roost"]
    }
  },
  "Tentacruel#2": {
    "Lvl 86 Gym Leader Quentin Rematch (Optional)": {
      "slot": 1, "level": 86, "ability": "Rain Dish", "item": "Black Sludge", "nature": "Bold",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":0,"df":244,"sa":0,"sd":0,"sp":16},
      "moves": ["Scald", "Rapid Spin", "Haze", "Toxic Spikes"]
    }
  },
  "Barraskewda": {
    "Lvl 87 Gym Leader Quentin Rematch (Optional)": {
      "slot": 2, "level": 87, "ability": "Swift Swim", "item": "Choice Band", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Liquidation", "Close Combat", "Flip Turn", "Psychic Fangs"]
    }
  },
  "Ludicolo#2": {
    "Lvl 88 Gym Leader Quentin Rematch (Optional)": {
      "slot": 3, "level": 88, "ability": "Swift Swim", "item": "Life Orb", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":244,"sd":16,"sp":244},
      "moves": ["Giga Drain", "Ice Beam", "Hydro Pump", "Rain Dance"]
    }
  },
  "Poliwrath": {
    "Lvl 89 Gym Leader Quentin Rematch (Optional)": {
      "slot": 4, "level": 89, "ability": "Swift Swim", "item": "White Herb", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Close Combat", "Wave Crash", "Sucker Punch", "Ice Punch"]
    }
  },
  "Swampert#2": {
    "Lvl 90 Gym Leader Quentin Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Swift Swim", "item": "Swampertite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Waterfall", "Earthquake", "Ice Punch", "Superpower"]
    }
  },
    "Swampert-Mega": {
    "Lvl 90 Gym Leader Quentin Rematch (Optional)": {
      "slot": 5, "level": 90, "ability": "Swift Swim", "item": "Swampertite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Waterfall", "Earthquake", "Ice Punch", "Superpower"]
    }
  },
  "Magcargo": {
    "Lvl 100 Azuriter (VR Singles)": {
      "slot": 0, "level": 100, "ability": "Weak Armor", "item": "Focus Sash", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":0,"df":4,"sa":0,"sd":0,"sp":252},
      "moves": ["Stealth Rock", "Memento", "Overheat", "Scorching Sands"]
    }
  },
  "Vivillon": {
    "Lvl 100 Azuriter (VR Singles)": {
      "slot": 1, "level": 100, "ability": "Tinted Lens", "item": "Heavy-Duty Boots", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Quiver Dance", "Sleep Powder", "Bug Buzz", "Heat Wave"]
    }
  },
  "Octillery": {
    "Lvl 100 Azuriter (VR Singles)": {
      "slot": 2, "level": 100, "ability": "Sniper", "item": "Quick Claw", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Water Spout", "Fire Blast", "Ice Beam", "Energy Ball"]
    }
  },
  "Porygon-Z": {
    "Lvl 100 Azuriter (VR Singles)": {
      "slot": 3, "level": 100, "ability": "Adaptability", "item": "Normalium Z", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Thunderbolt", "Ice Beam", "Conversion", "Recover"]
    }
  },
  "Dhelmise": {
    "Lvl 100 Azuriter (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Steelworker", "item": "Sitrus Berry", "nature": "Impish",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":8,"df":252,"sa":0,"sd":0,"sp":0},
      "moves": ["Poltergeist", "Synthesis", "Toxic", "Anchor Shot"]
    }
  },
    "Gallade": {
    "Lvl 100 Azuriter (VR Singles)": {
      "slot": 5, "level": 100, "ability": "Inner Focus", "item": "Galladite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Close Combat", "Psycho Cut", "Knock Off"]
    }
  },
  "Gallade-Mega": {
    "Lvl 100 Azuriter (VR Singles)": {
      "slot": 6, "level": 100, "ability": "Inner Focus", "item": "Galladite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Close Combat", "Psycho Cut", "Knock Off"]
    }
  },
    "Iron Treads": {
    "Lvl 100 Articunofan (VR Singles)": {
      "slot": 0, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Earthquake", "Wild Charge", "Ice Spinner", "Stealth Rock"]
    }
  },
  "Samurott-Hisui#2": {
    "Lvl 100 Articunofan (VR Singles)": {
      "slot": 1, "level": 100, "ability": "Sharpness", "item": "Assault Vest", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":208,"at":164,"df":0,"sa":0,"sd":84,"sp":52},
      "moves": ["Razor Shell", "Ceaseless Edge", "Sucker Punch", "Aerial Ace"]
    }
  },
  "Articuno": {
    "Lvl 100 Articunofan (VR Singles)": {
      "slot": 2, "level": 100, "ability": "Mountaineer", "item": "Focus Sash", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Ice Beam", "Freeze-Dry", "Earth Power", "Calm Mind"]
    }
  },
  "Decidueye": {
    "Lvl 100 Articunofan (VR Singles)": {
      "slot": 3, "level": 100, "ability": "Long Reach", "item": "Ghostium Z", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Trailblaze", "Spirit Shackle", "Triple Arrows", "Swords Dance"]
    }
  },
    "Diancie": {
    "Lvl 100 Articunofan (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Clear Body", "item": "Diancite", "nature": "Hasty",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":4,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Diamond Storm", "Moonblast", "Earth Power", "Mystical Fire"]
    }
  },
  "Diancie-Mega": {
    "Lvl 100 Articunofan (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Clear Body", "item": "Diancite", "nature": "Hasty",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":4,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Diamond Storm", "Moonblast", "Earth Power", "Mystical Fire"]
    }
  },
  "Zygarde": {
    "Lvl 100 Articunofan (VR Singles)": {
      "slot": 5, "level": 100, "ability": "Power Construct", "item": "Yache Berry", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":28,"sp":228},
      "moves": ["Outrage", "Thousand Arrows", "Dragon Dance", "Substitute"]
    }
  },
    "Kabutops": {
    "Lvl 100 Elmo (VR Singles)": {
      "slot": 0, "level": 100, "ability": "Anger Shell", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Stone Axe", "Wave Crash", "Taunt", "Rapid Spin"]
    }
  },
  "Landorus-Therian": {
    "Lvl 100 Elmo (VR Singles)": {
      "slot": 1, "level": 100, "ability": "Intimidate", "item": "Rockium Z", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Rock Polish", "Earthquake", "Rock Climb"]
    }
  },
  "Pheromosa": {
    "Lvl 100 Elmo (VR Singles)": {
      "slot": 2, "level": 100, "ability": "Beast Boost", "item": "Focus Sash", "nature": "Naive",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":4,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Close Combat", "Bug Buzz", "Drill Run", "Ice Beam"]
    }
  },
  "Roaring Moon": {
    "Lvl 100 Elmo (VR Singles)": {
      "slot": 3, "level": 100, "ability": "Protosynthesis", "item": "Booster Energy", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Knock Off", "Acrobatics", "Iron Head"]
    }
  },
    "Skarmory": {
    "Lvl 100 Elmo (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Weak Armor", "item": "Skarmorite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Brave Bird", "Iron Head", "Drill Run"]
    }
  },
  "Skarmory-Mega": {
    "Lvl 100 Elmo (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Tough Claws", "item": "Skarmorite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Brave Bird", "Iron Head", "Drill Run"]
    }
  },
  "Spectrier": {
    "Lvl 100 Elmo (VR Singles)": {
      "slot": 5, "level": 100, "ability": "Grim Neigh", "item": "Life Orb", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Nasty Plot", "Shadow Ball", "Hidden Power Fighting", "Will-O-Wisp"]
    }
  },
   "Landorus-Therian#2": {
    "Lvl 100 Nacho (VR Singles)": {
      "slot": 0, "level": 100, "ability": "Intimidate", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Stealth Rock", "Taunt", "Earthquake", "Explosion"]
    }
  },
    "Salamence#2": {
    "Lvl 100 Nacho (VR Singles)": {
      "slot": 1, "level": 100, "ability": "Intimidate", "item": "Salamencite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Return", "Roost", "Earthquake"]
    }
  },
  "Salamence-Mega#2": {
    "Lvl 100 Nacho (VR Singles)": {
      "slot": 2, "level": 100, "ability": "Aerilate", "item": "Salamencite", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Dragon Dance", "Return", "Roost", "Earthquake"]
    }
  },
  "Shaymin-Sky": {
    "Lvl 100 Nacho (VR Singles)": {
      "slot": 3, "level": 100, "ability": "Serene Grace", "item": "Focus Sash", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Seed Flare", "Air Slash", "Earth Power", "Hidden Power Ice"]
    }
  },
  "Yveltal": {
    "Lvl 100 Nacho (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Dark Aura", "item": "Life Orb", "nature": "Hasty",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":4,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Oblivion Wing", "Dark Pulse", "Sucker Punch", "Focus Blast"]
    }
  },
  "Archeops#2": {
    "Lvl 100 Nacho (VR Singles)": {
      "slot": 5, "level": 100, "ability": "Adrenaline", "item": "Flying Gem", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Acrobatics", "Head Smash", "Endeavor", "Earthquake"]
    }
  },
  "Tornadus-Therian": {
    "Lvl 100 Nacho (VR Singles)": {
      "slot": 6, "level": 100, "ability": "Regenerator", "item": "Flyinium Z", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Nasty Plot", "Hurricane", "Focus Blast", "Heat Wave"]
    }
  },
    "Araquanid": {
    "Lvl 100 Gimmick (VR Singles)": {
      "slot": 0, "level": 100, "ability": "Water Bubble", "item": "Focus Sash", "nature": "Relaxed",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":248,"at":8,"df":252,"sa":0,"sd":0,"sp":0},
      "moves": ["Liquidation", "Sticky Web", "Magic Coat", "Toxic"]
    }
  },
  "Cinderace#2": {
    "Lvl 100 Gimmick (VR Singles)": {
      "slot": 1, "level": 100, "ability": "Blaze", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Court Change", "Gunk Shot", "Pyro Ball", "Mega Kick"]
    }
  },
  "Kingambit": {
    "Lvl 100 Gimmick (VR Singles)": {
      "slot": 2, "level": 100, "ability": "Defiant", "item": "Black Glasses", "nature": "Brave",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
      "evs": {"hp":252,"at":252,"df":0,"sa":0,"sd":4,"sp":0},
      "moves": ["Iron Head", "Knock Off", "Sucker Punch", "Swords Dance"]
    }
  },
  "Gothitelle": {
    "Lvl 100 Gimmick (VR Singles)": {
      "slot": 3, "level": 100, "ability": "Competitive", "item": "Mental Herb", "nature": "Quiet",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":0},
      "evs": {"hp":248,"at":0,"df":0,"sa":252,"sd":8,"sp":0},
      "moves": ["Trick Room", "Focus Blast", "Psychic", "Shadow Ball"]
    }
  },
  "Empoleon": {
    "Lvl 100 Gimmick (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Competitive", "item": "Assault Vest", "nature": "Quiet",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":0},
      "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
      "moves": ["Hydro Pump", "Flash Cannon", "Grass Knot", "Ice Beam"]
    }
  },
  "Serperior": {
    "Lvl 100 Gimmick (VR Singles)": {
      "slot": 5, "level": 100, "ability": "Contrary", "item": "Normalium Z", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Leaf Storm", "Dragon Pulse", "Hyper Beam", "Hidden Power Ground"]
    }
  },
   "Deoxys-Attack": {
    "Lvl 100 Nico (VR Singles)": {
      "slot": 0, "level": 100, "ability": "Pressure", "item": "Focus Sash", "nature": "Hasty",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":4,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Stealth Rock", "Superpower", "Psycho Boost", "Knock Off"]
    }
  },
  "Raging Bolt": {
    "Lvl 100 Nico (VR Singles)": {
      "slot": 1, "level": 100, "ability": "Protosynthesis", "item": "Booster Energy", "nature": "Modest",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Calm Mind", "Dragon Hammer", "Thunderbolt", "Thunderclap"]
    }
  },
  "Landorus-Therian#3": {
    "Lvl 100 Nico (VR Singles)": {
      "slot": 2, "level": 100, "ability": "Intimidate", "item": "Flyinium Z", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Swords Dance", "Earthquake", "Fly", "Stone Edge"]
    }
  },
  "Marshadow": {
    "Lvl 100 Nico (VR Singles)": {
      "slot": 3, "level": 100, "ability": "Technician", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":4,"at":252,"df":0,"sa":0,"sd":0,"sp":252},
      "moves": ["Rock Tomb", "Close Combat", "Spectral Thief", "Shadow Sneak"]
    }
  },
  "Flutter Mane": {
    "Lvl 100 Nico (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Protosynthesis", "item": "Booster Energy", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
      "moves": ["Moonblast", "Shadow Ball", "Mystical Fire", "Calm Mind"]
    }
  },
  "Kingambit#2": {
    "Lvl 100 Nico (VR Singles)": {
      "slot": 5, "level": 100, "ability": "Supreme Overlord", "item": "Chople Berry", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":252,"at":252,"df":0,"sa":0,"sd":4,"sp":0},
      "moves": ["Swords Dance", "Kowtow Cleave", "Sucker Punch", "Iron Head"]
    }
  },
    "Excadrill#2": {
    "Lvl 100 Doodle (VR Singles)": {
      "slot": 0, "level": 100, "ability": "Mold Breaker", "item": "Focus Sash", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Stealth Rock", "Rapid Spin", "Earthquake", "Poison Jab"]
    }
  },
  "Archaludon": {
    "Lvl 100 Doodle (VR Singles)": {
      "slot": 1, "level": 100, "ability": "Stamina", "item": "Assault Vest", "nature": "Modest",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":188,"at":0,"df":0,"sa":252,"sd":0,"sp":68},
      "moves": ["Draco Meteor", "Electro Shot", "Flash Cannon", "Body Press"]
    }
  },
  "Pelipper#3": {
    "Lvl 100 Doodle (VR Singles)": {
      "slot": 2, "level": 100, "ability": "Drizzle", "item": "Damp Rock", "nature": "Relaxed",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
      "evs": {"hp":248,"at":0,"df":252,"sa":0,"sd":8,"sp":0},
      "moves": ["Scald", "Hurricane", "U-turn", "Roost"]
    }
  },
  "Zapdos#2": {
    "Lvl 100 Doodle (VR Singles)": {
      "slot": 3, "level": 100, "ability": "Static", "item": "Heavy-Duty Boots", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
      "moves": ["Hurricane", "Thunder", "Weather Ball", "Roost"]
    }
  },
    "Swampert#3": {
    "Lvl 100 Doodle (VR Singles)": {
      "slot": 4, "level": 100, "ability": "Swift Swim", "item": "Swampertite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Flip Turn", "Mega Kick", "Liquidation", "Earthquake"]
    }
  },
  "Swampert-Mega#2": {
    "Lvl 100 Doodle (VR Singles)": {
      "slot": 5, "level": 100, "ability": "Swift Swim", "item": "Swampertite", "nature": "Adamant",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
      "moves": ["Flip Turn", "Mega Kick", "Liquidation", "Earthquake"]
    }
  },
  "Greninja": {
    "Lvl 100 Doodle (VR Singles)": {
      "slot": 6, "level": 100, "ability": "Battle Bond", "item": "Waterium Z", "nature": "Timid",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Hydro Pump", "Dark Pulse", "Ice Beam", "Water Shuriken"]
    }
  },
  "Greninja-Ash": {
    "Lvl 100 Doodle (VR Singles)": {
      "slot": 7, "level": 100, "ability": "Battle Bond", "item": "Waterium Z", "nature": "Timid",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
      "moves": ["Hydro Pump", "Dark Pulse", "Ice Beam", "Water Shuriken"]
    }
  },
"Ribombee": {
  "Lvl 100 RuudDude (VR Singles)": {
    "slot": 0, "level": 100, "ability": "Shield Dust", "item": "Focus Sash", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Bug Buzz", "Moonblast", "Sticky Web", "Stun Spore"]
  }
},
"Nidoking": {
  "Lvl 100 RuudDude (VR Singles)": {
    "slot": 1, "level": 100, "ability": "Sheer Force", "item": "Life Orb", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Sludge Wave", "Earth Power", "Ice Beam", "Thunderbolt"]
  }
},
"Gyarados": {
  "Lvl 100 RuudDude (VR Singles)": {
    "slot": 2, "level": 100, "ability": "Moxie", "item": "Wacan Berry", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":8,"sa":0,"sd":0,"sp":248},
    "moves": ["Waterfall", "Ice Fang", "Power Whip", "Dragon Dance"]
  }
},
"Serperior#2": {
  "Lvl 100 RuudDude (VR Singles)": {
    "slot": 3, "level": 100, "ability": "Contrary", "item": "Leftovers", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":48,"at":0,"df":0,"sa":212,"sd":0,"sp":248},
    "moves": ["Leaf Storm", "Dragon Pulse", "Hidden Power Fire", "Substitute"]
  }
},
"Hoopa-Unbound": {
  "Lvl 100 RuudDude (VR Singles)": {
    "slot": 4, "level": 100, "ability": "Frisk", "item": "Assault Vest", "nature": "Hasty",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":12,"sd":0,"sp":244},
    "moves": ["Psychic Noise", "Hyperspace Fury", "Drain Punch", "Thunderbolt"]
  }
},
"Lucario#5": {
  "Lvl 100 RuudDude (VR Singles)": {
    "slot": 5, "level": 100, "ability": "Justified", "item": "Lucarionite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Close Combat", "Iron Tail", "Stone Edge", "Swords Dance"]
  }
},
"Lucario-Mega#3": {
  "Lvl 100 RuudDude (VR Singles)": {
    "slot": 5, "level": 100, "ability": "Adaptability", "item": "Lucarionite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Close Combat", "Iron Tail", "Stone Edge", "Swords Dance"]
  }
},
"Banette": {
  "Lvl 100 SR (VR Singles)": {
    "slot": 0, "level": 100, "ability": "Insomnia", "item": "Banettite", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Encore", "Destiny Bond", "Poltergeist", "Shadow Sneak"]
  }
},
"Banette-Mega": {
  "Lvl 100 SR (VR Singles)": {
    "slot": 1, "level": 100, "ability": "Prankster", "item": "Banettite", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Encore", "Destiny Bond", "Poltergeist", "Shadow Sneak"]
  }
},
"Cinderace#3": {
  "Lvl 100 SR (VR Singles)": {
    "slot": 2, "level": 100, "ability": "Libero", "item": "Heavy-Duty Boots", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Court Change", "Pyro Ball", "High Jump Kick", "U-turn"]
  }
},
"Kyurem-Black": {
  "Lvl 100 SR (VR Singles)": {
    "slot": 3, "level": 100, "ability": "Teravolt", "item": "Loaded Dice", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Dragon Dance", "Icicle Spear", "Scale Shot", "Roost"]
  }
},
"Magearna-Original": {
  "Lvl 100 SR (VR Singles)": {
    "slot": 4, "level": 100, "ability": "Soul-Heart", "item": "Weakness Policy", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
    "moves": ["Shift Gear", "Calm Mind", "Draining Kiss", "Stored Power"]
  }
},
"Arceus-Ground": {
  "Lvl 100 SR (VR Singles)": {
    "slot": 5, "level": 100, "ability": "Multitype", "item": "Earth Plate", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Dragon Dance", "Earthquake", "Rock Climb", "Recover"]
  }
},
"Terapagos": {
  "Lvl 100 SR (VR Singles)": {
    "slot": 6, "level": 100, "ability": "Tera Shift", "item": "Normalium Z", "nature": "Modest",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Rapid Spin", "Tera Starstorm", "Calm Mind", "Flamethrower"]
  }
},
"Kyogre-Primal": {
  "Lvl 100 Jahim (VR Doubles)": {
    "slot": 0, "level": 100, "ability": "Primordial Sea", "item": "Blue Orb", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
    "moves": ["Origin Pulse", "Thunder", "Ice Beam", "Hydro Pump"]
  }
},
"Urshifu-Rapid-Strike": {
  "Lvl 100 Jahim (VR Doubles)": {
    "slot": 1, "level": 100, "ability": "Unseen Fist", "item": "Choice Scarf", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Surging Strikes", "Close Combat", "Zen Headbutt", "U-turn"]
  }
},
"Chien-Pao": {
  "Lvl 100 Jahim (VR Doubles)": {
    "slot": 2, "level": 100, "ability": "Sword of Ruin", "item": "Focus Sash", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Icicle Crash", "Crunch", "Sacred Sword", "Sucker Punch"]
  }
},
"Salamence#3": {
  "Lvl 100 Jahim (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Intimidate", "item": "Salamencite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Double-Edge", "Dragon Claw", "Temper Flare", "Tailwind"]
  }
},
"Salamence-Mega#3": {
  "Lvl 100 Jahim (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Aerilate", "item": "Salamencite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Double-Edge", "Dragon Claw", "Temper Flare", "Tailwind"]
  }
},
"Rillaboom": {
  "Lvl 100 Jahim (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Grassy Surge", "item": "Assault Vest", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":200,"df":0,"sa":0,"sd":0,"sp":56},
    "moves": ["Fake Out", "Grassy Glide", "Wood Hammer", "High Horsepower"]
  }
},
"Zacian-Crowned": {
  "Lvl 100 Jahim (VR Doubles)": {
    "slot": 5, "level": 100, "ability": "Intrepid Sword", "item": "Rusted Sword", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Behemoth Blade", "Play Rough", "Close Combat", "Wild Charge"]
  }
},
"Groudon-Primal": {
  "Lvl 100 Obama Prism (VR Doubles)": {
    "slot": 0, "level": 100, "ability": "Desolate Land", "item": "Red Orb", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":4,"at":252,"df":0,"sa":0,"sd":0,"sp":252},
    "moves": ["Precipice Blades", "Heat Crash", "High Horsepower", "Stone Edge"]
  }
},
"Flutter Mane#2": {
  "Lvl 100 Obama Prism (VR Doubles)": {
    "slot": 1, "level": 100, "ability": "Protosynthesis", "item": "Booster Energy", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Moonblast", "Icy Wind", "Shadow Ball", "Taunt"]
  }
},
"Urshifu#2": {
  "Lvl 100 Obama Prism (VR Doubles)": {
    "slot": 2, "level": 100, "ability": "Unseen Fist", "item": "Focus Sash", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":4,"at":252,"df":0,"sa":0,"sd":0,"sp":252},
    "moves": ["Wicked Blow", "Close Combat", "U-turn", "Sucker Punch"]
  }
},
"Zapdos#3": {
  "Lvl 100 Obama Prism (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Static", "item": "Sitrus Berry", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Volt Switch", "Tailwind", "Hurricane", "Thunder Wave"]
  }
},
"Delphox": {
  "Lvl 100 Obama Prism (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Magician", "item": "Delphoxite", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Heat Wave", "Fire Blast", "Psychic", "Focus Blast"]
  }
},
"Delphox-Mega": {
  "Lvl 100 Obama Prism (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Levitate", "item": "Delphoxite", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Heat Wave", "Fire Blast", "Psychic", "Focus Blast"]
  }
},
"Eternatus": {
  "Lvl 100 Obama Prism (VR Doubles)": {
    "slot": 5, "level": 100, "ability": "Pressure", "item": "Dragonium Z", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Dynamax Cannon", "Fire Blast", "Sludge Bomb", "Draco Meteor"]
  }
},
"Salamence#4": {
  "Lvl 100 Eco (VR Doubles)": {
    "slot": 0, "level": 100, "ability": "Intimidate", "item": "Salamencite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":76,"at":176,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Double-Edge", "Dragon Claw", "Temper Flare", "Tailwind"]
  }
},
"Salamence-Mega#4": {
  "Lvl 100 Eco (VR Doubles)": {
    "slot": 1, "level": 100, "ability": "Aerilate", "item": "Salamencite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":76,"at":176,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Double-Edge", "Dragon Claw", "Temper Flare", "Tailwind"]
  }
},
"Flutter Mane#3": {
  "Lvl 100 Eco (VR Doubles)": {
    "slot": 2, "level": 100, "ability": "Protosynthesis", "item": "Booster Energy", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Shadow Ball", "Moonblast", "Mystical Fire", "Icy Wind"]
  }
},
"Dondozo": {
  "Lvl 100 Eco (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Unaware", "item": "Assault Vest", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":48,"at":220,"df":44,"sa":0,"sd":60,"sp":136},
    "moves": ["Wave Crash", "Order Up", "Earthquake", "Heavy Slam"]
  }
},
"Tatsugiri-Stretchy": {
  "Lvl 100 Eco (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Commander", "item": "Focus Sash", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Hydro Pump", "Dragon Pulse", "Icy Wind", "Taunt"]
  }
},
"Rhydon#2": {
  "Lvl 100 Eco (VR Doubles)": {
    "slot": 5, "level": 100, "ability": "Sap Sipper", "item": "Eviolite", "nature": "Brave",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
    "evs": {"hp":172,"at":252,"df":0,"sa":0,"sd":84,"sp":0},
    "moves": ["Rock Slide", "High Horsepower", "Heavy Slam", "Brick Break"]
  }
},
"Sneasler#2": {
  "Lvl 100 Eco (VR Doubles)": {
    "slot": 6, "level": 100, "ability": "Unburden", "item": "Focus Sash", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Dire Claw", "Close Combat", "Fake Out", "Rock Slide"]
  }
},
"Miraidon": {
  "Lvl 100 MikuSnow (VR Doubles)": {
    "slot": 0, "level": 100, "ability": "Hadron Engine", "item": "Eject Pack", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":76,"at":0,"df":0,"sa":180,"sd":0,"sp":252},
    "moves": ["Electro Drift", "Volt Switch", "Draco Meteor", "Dragon Cheer"]
  }
},
"Ogerpon-Wellspring": {
  "Lvl 100 MikuSnow (VR Doubles)": {
    "slot": 1, "level": 100, "ability": "Water Absorb", "item": "Wellspring Mask", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":188,"at":124,"df":0,"sa":0,"sd":0,"sp":196},
    "moves": ["Ivy Cudgel", "Wood Hammer", "Follow Me", "Encore"]
  }
},
"Metagross": {
  "Lvl 100 MikuSnow (VR Doubles)": {
    "slot": 2, "level": 100, "ability": "Clear Body", "item": "Metagrossite", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":188,"df":84,"sa":0,"sd":0,"sp":236},
    "moves": ["Heavy Slam", "Bullet Punch", "Psychic Fangs", "Body Press"]
  }
},
"Metagross-Mega": {
  "Lvl 100 MikuSnow (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Tough Claws", "item": "Metagrossite", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":188,"df":84,"sa":0,"sd":0,"sp":236},
    "moves": ["Heavy Slam", "Bullet Punch", "Psychic Fangs", "Body Press"]
  }
},
"Landorus": {
  "Lvl 100 MikuSnow (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Sheer Force", "item": "Life Orb", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Sandsear Storm", "Earth Power", "Sludge Bomb", "Stealth Rock"]
  }
},
"Chi-Yu": {
  "Lvl 100 MikuSnow (VR Doubles)": {
    "slot": 5, "level": 100, "ability": "Beads of Ruin", "item": "Darkinium Z", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
    "moves": ["Overheat", "Heat Wave", "Dark Pulse", "Psychic"]
  }
},
"Calyrex-Shadow": {
  "Lvl 100 MikuSnow (VR Doubles)": {
    "slot": 6, "level": 100, "ability": "As One (Spectrier)", "item": "Choice Specs", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
    "moves": ["Astral Barrage", "Psyshock", "Pollen Puff", "Trick"]
  }
},
"Dragapult": {
  "Lvl 100 Osha (VR Doubles)": {
    "slot": 0, "level": 100, "ability": "Clear Body", "item": "Focus Sash", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Surf", "Draco Meteor", "Dragon Cheer", "Shadow Ball"]
  }
},
"Volcanion": {
  "Lvl 100 Osha (VR Doubles)": {
    "slot": 1, "level": 100, "ability": "Steam Engine", "item": "Absorb Bulb", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":184,"at":0,"df":0,"sa":252,"sd":4,"sp":68},
    "moves": ["Heat Wave", "Steam Eruption", "Energy Ball", "Earth Power"]
  }
},
"Garchomp#5": {
  "Lvl 100 Osha (VR Doubles)": {
    "slot": 2, "level": 100, "ability": "Rough Skin", "item": "Garchompite Z", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Surf", "Draco Meteor", "Power Gem", "Earth Power"]
  }
},
"Garchomp-Mega-Z": {
  "Lvl 100 Osha (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Levitate", "item": "Garchompite Z", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Surf", "Draco Meteor", "Power Gem", "Earth Power"]
  }
},
"Tapu Bulu": {
  "Lvl 100 Osha (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Grassy Surge", "item": "Assault Vest", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":248,"at":252,"df":0,"sa":0,"sd":8,"sp":0},
    "moves": ["Horn Leech", "Play Rough", "Rock Slide", "High Horsepower"]
  }
},
"Sneasler#3": {
  "Lvl 100 Osha (VR Doubles)": {
    "slot": 5, "level": 100, "ability": "Unburden", "item": "Grassy Seed", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Close Combat", "Dire Claw", "Fake Out", "Coaching"]
  }
},
"Samurott-Hisui#3": {
  "Lvl 100 Osha (VR Doubles)": {
    "slot": 6, "level": 100, "ability": "Sharpness", "item": "Life Orb", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Ceaseless Edge", "Razor Shell", "Sacred Sword", "Sucker Punch"]
  }
},
"Ting-Lu": {
  "Lvl 100 Percy (VR Singles)": {
    "slot": 0, "level": 100, "ability": "Vessel of Ruin", "item": "Red Card", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":20,"at":252,"df":0,"sa":0,"sd":0,"sp":236},
    "moves": ["Earthquake", "Ruination", "Spikes", "Taunt"]
  }
},
"Torkoal": {
  "Lvl 100 Percy (VR Singles)": {
    "slot": 1, "level": 100, "ability": "Drought", "item": "Eject Pack", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":248,"at":0,"df":0,"sa":252,"sd":8,"sp":0},
    "moves": ["Overheat", "Solar Beam", "Earth Power", "Stealth Rock"]
  }
},
"Celesteela": {
  "Lvl 100 Percy (VR Singles)": {
    "slot": 2, "level": 100, "ability": "Beast Boost", "item": "Power Herb", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Air Slash", "Meteor Beam", "Fire Blast", "Autotomize"]
  }
},
"Raging Bolt#2": {
  "Lvl 100 Percy (VR Singles)": {
    "slot": 3, "level": 100, "ability": "Protosynthesis", "item": "Dragonium Z", "nature": "Modest",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Thunderclap", "Thunderbolt", "Draco Meteor", "Solar Beam"]
  }
},
"Flutter Mane#4": {
  "Lvl 100 Percy (VR Singles)": {
    "slot": 4, "level": 100, "ability": "Protosynthesis", "item": "Life Orb", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Shadow Ball", "Moonblast", "Mystical Fire", "Pain Split"]
  }
},
"Heatran": {
  "Lvl 100 Percy (VR Singles)": {
    "slot": 5, "level": 100, "ability": "Flash Fire", "item": "Quick Claw", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Eruption", "Magma Storm", "Solar Beam", "Earth Power"]
  }
},
"Torkoal#3": {
  "Lvl 100 might dragon (VR Singles)": {
    "slot": 0, "level": 100, "ability": "Drought", "item": "Heat Rock", "nature": "Bold",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":248,"at":0,"df":252,"sa":0,"sd":8,"sp":0},
    "moves": ["Lava Plume", "Body Press", "Stealth Rock", "Rapid Spin"]
  }
},
"Venusaur#3": {
  "Lvl 100 might dragon (VR Singles)": {
    "slot": 1, "level": 100, "ability": "Chlorophyll", "item": "Life Orb", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Growth", "Giga Drain", "Weather Ball", "Sludge Bomb"]
  }
},
"Great Tusk": {
  "Lvl 100 might dragon (VR Singles)": {
    "slot": 2, "level": 100, "ability": "Protosynthesis", "item": "Leftovers", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":4,"df":0,"sa":0,"sd":0,"sp":252},
    "moves": ["Headlong Rush", "Ice Spinner", "Rapid Spin", "Bulk Up"]
  }
},
"Victini": {
  "Lvl 100 might dragon (VR Singles)": {
    "slot": 3, "level": 100, "ability": "Victory Star", "item": "Choice Band", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["V-create", "U-turn", "Bolt Strike", "Brick Break"]
  }
},
"Raging Bolt#3": {
  "Lvl 100 might dragon (VR Singles)": {
    "slot": 4, "level": 100, "ability": "Protosynthesis", "item": "Dragonium Z", "nature": "Modest",
    "ivs": {"hp":31,"at":20,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Volt Switch", "Weather Ball", "Draco Meteor", "Thunderclap"]
  }
},
"Hatterene#4": {
  "Lvl 100 might dragon (VR Singles)": {
    "slot": 5, "level": 100, "ability": "Magic Bounce", "item": "Eject Button", "nature": "Bold",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":204,"sa":0,"sd":0,"sp":52},
    "moves": ["Nuzzle", "Psychic Noise", "Pain Split", "Healing Wish"]
  }
},
"Altaria": {
  "Lvl 100 kidd0 (VR Singles)": {
    "slot": 0, "level": 100, "ability": "Natural Cure", "item": "Altarianite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":40,"at":252,"df":0,"sa":0,"sd":0,"sp":216},
    "moves": ["Frustration", "Dragon Dance", "Earthquake", "Sing"]
  }
},
"Altaria-Mega": {
  "Lvl 100 kidd0 (VR Singles)": {
    "slot": 1, "level": 100, "ability": "Pixilate", "item": "Altarianite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":40,"at":252,"df":0,"sa":0,"sd":0,"sp":216},
    "moves": ["Frustration", "Dragon Dance", "Earthquake", "Sing"]
  }
},
"Glimmora": {
  "Lvl 100 kidd0 (VR Singles)": {
    "slot": 2, "level": 100, "ability": "Toxic Debris", "item": "Power Herb", "nature": "Timid",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Meteor Beam", "Sludge Bomb", "Earth Power", "Mortal Spin"]
  }
},
"Iron Crown": {
  "Lvl 100 kidd0 (VR Singles)": {
    "slot": 3, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Timid",
    "ivs": {"hp":31,"at":20,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":84,"at":0,"df":0,"sa":172,"sd":0,"sp":252},
    "moves": ["Calm Mind", "Stored Power", "Iron Defense", "Focus Blast"]
  }
},
"Emboar": {
  "Lvl 100 kidd0 (VR Singles)": {
    "slot": 4, "level": 100, "ability": "Moxie", "item": "Leftovers", "nature": "Impish",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":236,"at":68,"df":204,"sa":0,"sd":0,"sp":0},
    "moves": ["Bulk Up", "Flame Charge", "Close Combat", "Thunder Punch"]
  }
},
"Landorus-Therian#4": {
  "Lvl 100 kidd0 (VR Singles)": {
    "slot": 5, "level": 100, "ability": "Intimidate", "item": "Rocky Helmet", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":248,"at":0,"df":8,"sa":0,"sd":0,"sp":252},
    "moves": ["Stealth Rock", "U-turn", "Earthquake", "Taunt"]
  }
},
"Meowscarada#2": {
  "Lvl 100 kidd0 (VR Singles)": {
    "slot": 6, "level": 100, "ability": "Protean", "item": "Choice Band", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Flower Trick", "Knock Off", "U-turn", "Triple Axel"]
  }
},
"Dragapult#2": {
  "Lvl 100 AgencyIsOwn (VR Singles)": {
    "slot": 0, "level": 100, "ability": "Cursed Body", "item": "Light Clay", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":4,"df":0,"sa":0,"sd":0,"sp":252},
    "moves": ["Dragon Darts", "Curse", "Light Screen", "Reflect"]
  }
},
"Gliscor#2": {
  "Lvl 100 AgencyIsOwn (VR Singles)": {
    "slot": 1, "level": 100, "ability": "Poison Heal", "item": "Toxic Orb", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Earthquake", "Facade", "Stone Edge", "Swords Dance"]
  }
},
"Iron Valiant": {
  "Lvl 100 AgencyIsOwn (VR Singles)": {
    "slot": 2, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Spirit Break", "Close Combat", "Knock Off", "Swords Dance"]
  }
},
"Kyurem": {
  "Lvl 100 AgencyIsOwn (VR Singles)": {
    "slot": 3, "level": 100, "ability": "Pressure", "item": "Loaded Dice", "nature": "Naive",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":200,"df":0,"sa":56,"sd":0,"sp":252},
    "moves": ["Freeze-Dry", "Icicle Spear", "Earth Power", "Dragon Dance"]
  }
},
"Cresselia": {
  "Lvl 100 AgencyIsOwn (VR Singles)": {
    "slot": 4, "level": 100, "ability": "Levitate", "item": "Kee Berry", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":80,"sa":176,"sd":0,"sp":0},
    "moves": ["Stored Power", "Moonblast", "Lunar Blessing", "Calm Mind"]
  }
},
"Darkrai": {
  "Lvl 100 AgencyIsOwn (VR Singles)": {
    "slot": 5, "level": 100, "ability": "Bad Dreams", "item": "Darkranite", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Dark Pulse", "Focus Blast", "Sludge Bomb", "Calm Mind"]
  }
},
"Darkrai-Mega": {
  "Lvl 100 AgencyIsOwn (VR Singles)": {
    "slot": 6, "level": 100, "ability": "Bad Dreams", "item": "Darkranite", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Dark Pulse", "Focus Blast", "Sludge Bomb", "Calm Mind"]
  }
},
"Zapdos-Galar": {
  "Lvl 100 NVL (VR Doubles)": {
    "slot": 0, "level": 100, "ability": "Defiant", "item": "Covert Cloak", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Thunderous Kick", "Brave Bird", "Coaching", "Tailwind"]
  }
},
"Iron Treads#2": {
  "Lvl 100 NVL (VR Doubles)": {
    "slot": 1, "level": 100, "ability": "Quark Drive", "item": "Assault Vest", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Earthquake", "High Horsepower", "Hard Press", "Rock Slide"]
  }
},
"Milotic": {
  "Lvl 100 NVL (VR Doubles)": {
    "slot": 2, "level": 100, "ability": "Competitive", "item": "Sawsbuck Coffee", "nature": "Bold",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":252,"sa":0,"sd":4,"sp":0},
    "moves": ["Muddy Water", "Moonblast", "Recover", "Dragon Cheer"]
  }
},
"Iron Leaves": {
  "Lvl 100 NVL (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":96,"at":160,"df":0,"sa":0,"sd":0,"sp":252},
    "moves": ["Leaf Blade", "Psyblade", "Ally Switch", "Coaching"]
  }
},
"Charizard#4": {
  "Lvl 100 NVL (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Blaze", "item": "Charizardite X", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":104,"at":252,"df":0,"sa":0,"sd":0,"sp":152},
    "moves": ["Flare Blitz", "Dragon Claw", "Rock Slide", "Tailwind"]
  }
},
"Charizard-Mega-X#2": {
  "Lvl 100 NVL (VR Doubles)": {
    "slot": 5, "level": 100, "ability": "Tough Claws", "item": "Charizardite X", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":104,"at":252,"df":0,"sa":0,"sd":0,"sp":152},
    "moves": ["Flare Blitz", "Dragon Claw", "Rock Slide", "Tailwind"]
  }
},
"Calyrex-Shadow#2": {
  "Lvl 100 NVL (VR Doubles)": {
    "slot": 6, "level": 100, "ability": "As One (Spectrier)", "item": "Ghost Gem", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Astral Barrage", "Psychic", "Future Sight", "Ally Switch"]
  }
},
"Reshiram": {
  "Lvl 100 Res (VR Doubles)": {
    "slot": 0, "level": 100, "ability": "Turboblaze", "item": "Choice Scarf", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Fusion Flare", "Draco Meteor", "Dragon Pulse", "Earth Power"]
  }
},
"Kyurem-Black#2": {
  "Lvl 100 Res (VR Doubles)": {
    "slot": 1, "level": 100, "ability": "Teravolt", "item": "Icium Z", "nature": "Naive",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":4,"sd":0,"sp":252},
    "moves": ["Draco Meteor", "Dragon Claw", "Freeze Shock", "Fusion Bolt"]
  }
},
"Iron Jugulis": {
  "Lvl 100 Res (VR Doubles)": {
    "slot": 2, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Dark Pulse", "Hurricane", "Tailwind", "Dragon Cheer"]
  }
},
"Chandelure": {
  "Lvl 100 Res (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Flame Body", "item": "Chandelurite", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Shadow Ball", "Overheat", "Heat Wave", "Energy Ball"]
  }
},
"Chandelure-Mega": {
  "Lvl 100 Res (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Shadow Tag", "item": "Chandelurite", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Shadow Ball", "Overheat", "Heat Wave", "Energy Ball"]
  }
},
"Slowking-Galar": {
  "Lvl 100 Res (VR Doubles)": {
    "slot": 5, "level": 100, "ability": "Curious Medicine", "item": "Quick Claw", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
    "moves": ["Psychic Noise", "Acid Spray", "Ice Beam", "Thunder Wave"]
  }
},
"Mamoswine#2": {
  "Lvl 100 Res (VR Doubles)": {
    "slot": 6, "level": 100, "ability": "Intimidate", "item": "Assault Vest", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":252,"df":0,"sa":0,"sd":4,"sp":0},
    "moves": ["Icicle Crash", "Ice Shard", "Headlong Rush", "Knock Off"]
  }
},
"Iron Hands": {
  "Lvl 100 Mr Tah (VR Doubles)": {
    "slot": 0, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Brave",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
    "evs": {"hp":248,"at":252,"df":0,"sa":0,"sd":8,"sp":0},
    "moves": ["Drain Punch", "Wild Charge", "Ice Punch", "Fake Out"]
  }
},
"Bronzong": {
  "Lvl 100 Mr Tah (VR Doubles)": {
    "slot": 1, "level": 100, "ability": "Drizzle", "item": "Damp Rock", "nature": "Relaxed",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
    "evs": {"hp":252,"at":0,"df":252,"sa":0,"sd":4,"sp":0},
    "moves": ["Gyro Ball", "Weather Ball", "Trick Room", "Ally Switch"]
  }
},
"Vikavolt": {
  "Lvl 100 Mr Tah (VR Doubles)": {
    "slot": 2, "level": 100, "ability": "Lightning Rod", "item": "Iron Ball", "nature": "Quiet",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
    "moves": ["Bug Buzz", "Thunder", "Air Slash", "Energy Ball"]
  }
},
"Wailord": {
  "Lvl 100 Mr Tah (VR Doubles)": {
    "slot": 3, "level": 100, "ability": "Berserk", "item": "Sitrus Berry", "nature": "Quiet",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":0},
    "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
    "moves": ["Water Spout", "Weather Ball", "Ice Beam", "Soak"]
  }
},
"Porygon2": {
  "Lvl 100 Mr Tah (VR Doubles)": {
    "slot": 4, "level": 100, "ability": "Download", "item": "Eviolite", "nature": "Bold",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":188,"sa":0,"sd":68,"sp":0},
    "moves": ["Tri Attack", "Thunder", "Trick Room", "Recover"]
  }
},
"Golisopod": {
  "Lvl 100 Mr Tah (VR Doubles)": {
    "slot": 5, "level": 100, "ability": "Emergency Exit", "item": "Golisopite", "nature": "Brave",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
    "evs": {"hp":252,"at":252,"df":0,"sa":0,"sd":4,"sp":0},
    "moves": ["Iron Head", "Leech Life", "Liquidation", "Drill Run"]
  }
},
"Golisopod-Mega": {
  "Lvl 100 Mr Tah (VR Doubles)": {
    "slot": 6, "level": 100, "ability": "Tough Claws", "item": "Golisopite", "nature": "Brave",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":0},
    "evs": {"hp":252,"at":252,"df":0,"sa":0,"sd":4,"sp":0},
    "moves": ["Iron Head", "Leech Life", "Liquidation", "Drill Run"]
  }
},
"Archaludon#2": {
  "Lvl 100 Tess (VR Singles)": {
    "slot": 0, "level": 100, "ability": "Sturdy", "item": "Power Herb", "nature": "Modest",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Stealth Rock"]
  }
},
"Salamence#5": {
  "Lvl 100 Tess (VR Singles)": {
    "slot": 1, "level": 100, "ability": "Moxie", "item": "Focus Sash", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Aerial Ace", "Earthquake", "Temper Flare", "Dragon Dance"]
  }
},
"Gouging Fire": {
  "Lvl 100 Tess (VR Singles)": {
    "slot": 2, "level": 100, "ability": "Protosynthesis", "item": "Dragonium Z", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Flare Blitz", "Outrage", "Bulldoze", "Dragon Dance"]
  }
},
"Dragapult#3": {
  "Lvl 100 Tess (VR Singles)": {
    "slot": 3, "level": 100, "ability": "Clear Body", "item": "Life Orb", "nature": "Hasty",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":128,"df":0,"sa":128,"sd":0,"sp":252},
    "moves": ["Dragon Darts", "Shadow Ball", "Fire Blast", "Steel Wing"]
  }
},
"Garchomp#6": {
  "Lvl 100 Tess (VR Singles)": {
    "slot": 4, "level": 100, "ability": "Rough Skin", "item": "Garchompite Z", "nature": "Timid",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
    "moves": ["Dragon Pulse", "Fire Blast", "Earth Power", "Nasty Plot"]
  }
},
"Garchomp-Mega-Z#2": {
  "Lvl 100 Tess (VR Singles)": {
    "slot": 5, "level": 100, "ability": "Levitate", "item": "Garchompite Z", "nature": "Timid",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
    "moves": ["Dragon Pulse", "Fire Blast", "Earth Power", "Nasty Plot"]
  }
},
"Miraidon#2": {
  "Lvl 100 Tess (VR Singles)": {
    "slot": 6, "level": 100, "ability": "Hadron Engine", "item": "White Herb", "nature": "Timid",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Electro Drift", "Volt Switch", "Draco Meteor", "Overheat"]
  }
},
"Avalugg-Hisui": {
  "Lvl 100 Sleepy (Ice E4 Singles)": {
    "slot": 0, "level": 100, "ability": "Sturdy", "item": "Custap Berry", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":248,"at":252,"df":0,"sa":0,"sd":8,"sp":0},
    "moves": ["Mountain Gale", "Headlong Rush", "Rapid Spin", "Stealth Rock"]
  }
},
"Chien-Pao#2": {
  "Lvl 100 Sleepy (Ice E4 Singles)": {
    "slot": 1, "level": 100, "ability": "Sword of Ruin", "item": "Focus Sash", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Crunch", "Icicle Crash", "Ice Shard", "Sacred Sword"]
  }
},
"Iron Bundle": {
  "Lvl 100 Sleepy (Ice E4 Singles)": {
    "slot": 2, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Timid",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Ice Beam", "Freeze-Dry", "Hydro Pump", "Taunt"]
  }
},
"Articuno#2": {
  "Lvl 100 Sleepy (Ice E4 Singles)": {
    "slot": 3, "level": 100, "ability": "Mountaineer", "item": "Occa Berry", "nature": "Timid",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Ice Beam", "Freeze-Dry", "Earth Power", "Calm Mind"]
  }
},
"Baxcalibur": {
  "Lvl 100 Sleepy (Ice E4 Singles)": {
    "slot": 4, "level": 100, "ability": "Thermal Exchange", "item": "Baxcalibrite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Glaive Rush", "Icicle Crash", "Earthquake", "Dragon Dance"]
  }
},
"Baxcalibur-Mega": {
  "Lvl 100 Sleepy (Ice E4 Singles)": {
    "slot": 5, "level": 100, "ability": "Thermal Exchange", "item": "Baxcalibrite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Glaive Rush", "Icicle Crash", "Earthquake", "Dragon Dance"]
  }
},
"Calyrex-Ice": {
  "Lvl 100 Sleepy (Ice E4 Singles)": {
    "slot": 6, "level": 100, "ability": "As One (Glastrier)", "item": "Icium Z", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":248,"at":252,"df":0,"sa":0,"sd":8,"sp":0},
    "moves": ["Glacial Lance", "Close Combat", "High Horsepower", "Swords Dance"]
  }
},
"Togekiss": {
  "Lvl 100 Infrared (Fairy E4 Doubles)": {
    "slot": 0, "level": 100, "ability": "Serene Grace", "item": "Psychic Seed", "nature": "Bold",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":252,"sa":4,"sd":0,"sp":0},
    "moves": ["Air Slash", "Fire Blast", "Tailwind", "Follow Me"]
  }
},
"Tapu Lele": {
  "Lvl 100 Infrared (Fairy E4 Doubles)": {
    "slot": 1, "level": 100, "ability": "Psychic Surge", "item": "Focus Sash", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Psychic", "Moonblast", "Nature's Madness", "Focus Blast"]
  }
},
"Iron Valiant#2": {
  "Lvl 100 Infrared (Fairy E4 Doubles)": {
    "slot": 2, "level": 100, "ability": "Quark Drive", "item": "Life Orb", "nature": "Naive",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":4,"sd":0,"sp":252},
    "moves": ["Spirit Break", "Close Combat", "Knock Off", "Expanding Force"]
  }
},
"Milotic#2": {
  "Lvl 100 Infrared (Fairy E4 Doubles)": {
    "slot": 3, "level": 100, "ability": "Competitive", "item": "Fairium Z", "nature": "Bold",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":252,"sa":4,"sd":0,"sp":0},
    "moves": ["Scald", "Moonblast", "Icy Wind", "Recover"]
  }
},
"Diancie#2": {
  "Lvl 100 Infrared (Fairy E4 Doubles)": {
    "slot": 4, "level": 100, "ability": "Clear Body", "item": "Diancite", "nature": "Hasty",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":4,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Diamond Storm", "Moonblast", "Earth Power", "Mystical Fire"]
  }
},
"Diancie-Mega#2": {
  "Lvl 100 Infrared (Fairy E4 Doubles)": {
    "slot": 5, "level": 100, "ability": "Clear Body", "item": "Diancite", "nature": "Hasty",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":4,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Diamond Storm", "Moonblast", "Earth Power", "Mystical Fire"]
  }
},
"Zacian-Crowned#2": {
  "Lvl 100 Infrared (Fairy E4 Doubles)": {
    "slot": 6, "level": 100, "ability": "Intrepid Sword", "item": "Rusted Sword", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Behemoth Blade", "Play Rough", "Sacred Sword", "Crunch"]
  }
},
"Great Tusk#2": {
  "Lvl 100 Glow (Fighting E4 Singles)": {
    "slot": 0, "level": 100, "ability": "Protosynthesis", "item": "Focus Sash", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Headlong Rush", "Close Combat", "Ice Spinner", "Stealth Rock"]
  }
},
"Iron Hands#2": {
  "Lvl 100 Glow (Fighting E4 Singles)": {
    "slot": 1, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Careful",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":248,"at":8,"df":0,"sa":0,"sd":252,"sp":0},
    "moves": ["Close Combat", "Thunder Punch", "Ice Punch", "Heavy Slam"]
  }
},
"Marshadow#2": {
  "Lvl 100 Glow (Fighting E4 Singles)": {
    "slot": 2, "level": 100, "ability": "Technician", "item": "Life Orb", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Poltergeist", "Shadow Sneak", "Close Combat", "Bulk Up"]
  }
},
"Okidogi": {
  "Lvl 100 Glow (Fighting E4 Singles)": {
    "slot": 3, "level": 100, "ability": "Toxic Chain", "item": "Assault Vest", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":240,"at":252,"df":0,"sa":0,"sd":0,"sp":16},
    "moves": ["Gunk Shot", "Close Combat", "Knock Off", "Ice Punch"]
  }
},
"Barbaracle": {
  "Lvl 100 Glow (Fighting E4 Singles)": {
    "slot": 4, "level": 100, "ability": "Striker", "item": "Barbaracite", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Stone Edge", "Mega Kick", "Knock Off", "Shell Smash"]
  }
},
"Barbaracle-Mega": {
  "Lvl 100 Glow (Fighting E4 Singles)": {
    "slot": 5, "level": 100, "ability": "Striker", "item": "Barbaracite", "nature": "Adamant",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Stone Edge", "Mega Kick", "Knock Off", "Shell Smash"]
  }
},
"Koraidon": {
  "Lvl 100 Glow (Fighting E4 Singles)": {
    "slot": 6, "level": 100, "ability": "Orichalcum Pulse", "item": "Fightinium Z", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Close Combat", "Flare Blitz", "Iron Head", "Swords Dance"]
  }
},
"Skarmory#2": {
  "Lvl 100 Desire (Steel E4 Doubles)": {
    "slot": 0, "level": 100, "ability": "Infiltrator", "item": "Skarmorite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Iron Head", "Brave Bird", "Drill Run", "Tailwind"]
  }
},
"Skarmory-Mega#2": {
  "Lvl 100 Desire (Steel E4 Doubles)": {
    "slot": 1, "level": 100, "ability": "Tough Claws", "item": "Skarmorite", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Iron Head", "Brave Bird", "Drill Run", "Tailwind"]
  }
},
"Heatran#2": {
  "Lvl 100 Desire (Steel E4 Doubles)": {
    "slot": 2, "level": 100, "ability": "Flash Fire", "item": "Focus Sash", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
    "moves": ["Magma Storm", "Earth Power", "Flash Cannon", "Power Gem"]
  }
},
"Gholdengo": {
  "Lvl 100 Desire (Steel E4 Doubles)": {
    "slot": 3, "level": 100, "ability": "Good as Gold", "item": "Steelium Z", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":4,"sa":252,"sd":0,"sp":252},
    "moves": ["Make It Rain", "Shadow Ball", "Focus Blast", "Power Gem"]
  }
},
"Genesect-Douse": {
  "Lvl 100 Desire (Steel E4 Doubles)": {
    "slot": 4, "level": 100, "ability": "Download", "item": "Douse Drive", "nature": "Hasty",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Techno Blast", "Iron Head", "Ice Beam", "Flare Blitz"]
  }
},
"Goodra-Hisui": {
  "Lvl 100 Desire (Steel E4 Doubles)": {
    "slot": 5, "level": 100, "ability": "Gooey", "item": "Assault Vest", "nature": "Modest",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":4,"sa":252,"sd":0,"sp":0},
    "moves": ["Dragon Pulse", "Flash Cannon", "Ice Beam", "Thunderbolt"]
  }
},
"Zamazenta-Crowned": {
  "Lvl 100 Desire (Steel E4 Doubles)": {
    "slot": 6, "level": 100, "ability": "Dauntless Shield", "item": "Rusted Shield", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Body Press", "Wild Charge", "Behemoth Bash", "Stone Edge"]
  }
},
"Kabutops#2": {
  "Lvl 100 Champion Brad (Singles)": {
    "slot": 0, "level": 100, "ability": "Anger Shell", "item": "Focus Sash", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":0,"sa":0,"sd":4,"sp":252},
    "moves": ["Stone Axe", "Wave Crash", "Rapid Spin", "Taunt"]
  }
},
"Shaymin-Sky#2": {
  "Lvl 100 Champion Brad (Singles)": {
    "slot": 1, "level": 100, "ability": "Serene Grace", "item": "Life Orb", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Seed Flare", "Air Slash", "Earth Power", "Dazzling Gleam"]
  }
},
"Floette-Eternal": {
  "Lvl 100 Champion Brad (Singles)": {
    "slot": 2, "level": 100, "ability": "Flower Veil", "item": "Floettite", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Light of Ruin", "Psychic", "Hidden Power Ground", "Endeavor"]
  }
},
"Floette-Mega": {
  "Lvl 100 Champion Brad (Singles)": {
    "slot": 3, "level": 100, "ability": "Flower Veil", "item": "Floettite", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":4,"at":0,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Light of Ruin", "Psychic", "Hidden Power Ground", "Endeavor"]
  }
},
"Roaring Moon#2": {
  "Lvl 100 Champion Brad (Singles)": {
    "slot": 4, "level": 100, "ability": "Protosynthesis", "item": "Dragonium Z", "nature": "Jolly",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":252,"df":4,"sa":0,"sd":0,"sp":252},
    "moves": ["Outrage", "Knock Off", "Iron Head", "Dragon Dance"]
  }
},
"Calyrex-Shadow#3": {
  "Lvl 100 Champion Brad (Singles)": {
    "slot": 5, "level": 100, "ability": "As One (Spectrier)", "item": "Colbur Berry", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":0,"sa":252,"sd":4,"sp":252},
    "moves": ["Astral Barrage", "Psychic", "Pollen Puff", "Nasty Plot"]
  }
},
"Groudon-Primal#2": {
  "Lvl 100 Champion Brad (Singles)": {
    "slot": 6, "level": 100, "ability": "Desolate Land", "item": "Red Orb", "nature": "Naive",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":8,"df":0,"sa":248,"sd":0,"sp":252},
    "moves": ["Precipice Blades", "Fire Blast", "Solar Beam", "Ancient Power"]
  }
},
"Deoxys-Speed": {
  "Lvl 100 Champion Lando (Singles)": {
    "slot": 0, "level": 100, "ability": "Pressure", "item": "Light Clay", "nature": "Timid",
    "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":248,"at":0,"df":0,"sa":8,"sd":0,"sp":252},
    "moves": ["Psycho Boost", "Light Screen", "Reflect", "Taunt"]
  }
},
"Ursaluna-Bloodmoon": {
  "Lvl 100 Champion Lando (Singles)": {
    "slot": 1, "level": 100, "ability": "Mind's Eye", "item": "Normalium Z", "nature": "Modest",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":252,"at":0,"df":0,"sa":252,"sd":4,"sp":0},
    "moves": ["Blood Moon", "Earth Power", "Moonlight", "Calm Mind"]
  }
},
"Iron Crown#2": {
  "Lvl 100 Champion Lando (Singles)": {
    "slot": 2, "level": 100, "ability": "Quark Drive", "item": "Booster Energy", "nature": "Timid",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":84,"at":0,"df":0,"sa":172,"sd":0,"sp":252},
    "moves": ["Tachyon Cutter", "Psychic", "Focus Blast", "Calm Mind"]
  }
},
"Darkrai#2": {
  "Lvl 100 Champion Lando (Singles)": {
    "slot": 3, "level": 100, "ability": "Bad Dreams", "item": "Darkranite", "nature": "Modest",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":196,"at":0,"df":0,"sa":252,"sd":0,"sp":60},
    "moves": ["Dark Pulse", "Thunder", "Ice Beam", "Nasty Plot"]
  }
},
"Darkrai-Mega#2": {
  "Lvl 100 Champion Lando (Singles)": {
    "slot": 4, "level": 100, "ability": "Bad Dreams", "item": "Darkranite", "nature": "Modest",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":196,"at":0,"df":0,"sa":252,"sd":0,"sp":60},
    "moves": ["Dark Pulse", "Thunder", "Ice Beam", "Nasty Plot"]
  }
},
"Kyogre-Primal#2": {
  "Lvl 100 Champion Lando (Singles)": {
    "slot": 5, "level": 100, "ability": "Primordial Sea", "item": "Blue Orb", "nature": "Hasty",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":4,"df":0,"sa":252,"sd":0,"sp":252},
    "moves": ["Origin Pulse", "Liquidation", "Thunder", "Blizzard"]
  }
},
"Xerneas": {
  "Lvl 100 Champion Lando (Singles)": {
    "slot": 6, "level": 100, "ability": "Fairy Aura", "item": "Power Herb", "nature": "Modest",
    "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
    "evs": {"hp":0,"at":0,"df":88,"sa":252,"sd":0,"sp":168},
    "moves": ["Moonblast", "Focus Blast", "Thunder", "Geomancy"]
  }
},
};


// Optional: base experience yield per species (lowercase id, no spaces/punctuation).
// Leave empty and the EXP lines are simply hidden. Fill from your game's data.
var BASE_EXP_YIELD = {
  // "serperior": 238,
};
// guy who will never add exp :rofl:
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