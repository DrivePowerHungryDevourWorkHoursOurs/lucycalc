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
  "Talonflame": {
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
  "Garchomp-Mega": {
    "Lvl 57 Gym Leader Prince Ryan (Doubles)": {
      "slot": 5, "level": 57, "ability": "Rough Skin", "item": "Garchompite", "nature": "Naive",
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
  "Scovillain-Mega": {
    "Lvl 66 Gym Leader Fissy (Doubles)": {
      "slot": 5, "level": 66, "ability": "Chlorophyll", "item": "Scovillainite", "nature": "Naive",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:204,df:0,sa:252,sd:0,sp:52},
      "moves": ["Solar Beam", "Fire Blast", "Temper Flare", "Stomping Tantrum"]
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
  "Absol-Mega-Z": {
    "Lvl 75 Gym Leader Zeek (Doubles)": {
      "slot": 5, "level": 75, "ability": "Tough Claws", "item": "Absolite Z", "nature": "Jolly",
      "ivs": {"hp":31,"at":31,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:252,df:0,sa:0,sd:4,sp:252},
      "moves": ["Knock Off", "Sucker Punch", "Shadow Claw", "Close Combat"]
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
  "Annihilape": {
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
  "Gengar-Mega": {
    "Lvl 83 Gym Leader Captain B (Doubles)": {
      "slot": 5, "level": 83, "ability": "Shadow Tag", "item": "Gengarite", "nature": "Timid",
      "ivs": {"hp":31,"at":0,"df":31,"sa":31,"sd":31,"sp":31},
      "evs": {hp:0,at:0,df:0,sa:252,sd:4,sp:252},
      "moves": ["Shadow Ball", "Sludge Bomb", "Energy Ball", "Focus Blast"]
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
