export const quests = {

  MODERATE: {

    intro: [
      { id: "M1", title: "No Mercy Spawn", description: "Survive your first day without dying.", next: ["M2"] },
      { id: "M2", title: "Bare Build", description: "Craft basic wooden tools.", next: ["M3"] },
      { id: "M3", title: "Cold Night", description: "Survive your first night outdoors.", next: ["M4"] },
      { id: "M4", title: "Hunter’s Meal", description: "Kill and cook food.", next: ["M5"] },
      { id: "M5", title: "Stone Age", description: "Craft full stone tool set.", next: ["PATH_SELECT"] }
    ],

    paths: {

      BUILDER: [
        { id: "B1", title: "Shelter King", description: "Build a secure base.", next:["B2"] },
        { id: "B2", title: "Water Engineer", description: "Build a water source near base.", next:["B3"] },
        { id: "B3", title: "Food Empire", description: "Create a farm.", next:["B4"] },
        { id: "B4", title: "Storage Master", description: "Build organized storage.", next:["B5"] },
        { id: "B5", title: "Defense System", description: "Light your base area to block spawns.", next:["B6"] },
        { id: "B6", title: "Village Ally", description: "Trade with villagers.", next:["B7"] },
        { id: "B7", title: "Luxury Living", description: "Decorate your base.", next:["B8"] },
        { id: "B8", title: "Mega Build", description: "Build a massive structure.", next:["B9"] },
        { id: "B9", title: "Underground Hall", description: "Create a hidden room.", next:["B10"] },
        { id: "B10", title: "Security Upgrade", description: "Add traps or barriers.", next:["FINAL"] }
      ],

      EXPLORER: [
        { id: "E1", title: "Wanderer", description: "Discover 3 biomes.", next:["E2"] },
        { id: "E2", title: "Ruins", description: "Loot a structure.", next:["E3"] },
        { id: "E3", title: "Shipwreck", description: "Find underwater loot.", next:["E4"] },
        { id: "E4", title: "Frozen Lands", description: "Survive snow biome night.", next:["E5"] },
        { id: "E5", title: "Cursed Chest", description: "Open a dangerous dungeon chest.", next:["E6"] },
        { id: "E6", title: "Nether Scout", description: "Build a Nether portal.", next:["E7"] },
        { id: "E7", title: "Stronghold Hunter", description: "Find the End portal.", next:["E8"] },
        { id: "E8", title: "Sky Thief", description: "Get Elytra.", next:["E9"] },
        { id: "E9", title: "Sky Temple", description: "Discover a floating structure.", next:["E10"] },
        { id: "E10", title: "Void Survivor", description: "Fall from high place and live.", next:["FINAL"] }
      ],

      WARRIOR: [
        { id: "W1", title: "Night Armorer", description: "Craft armor after sunset.", next:["W2"] },
        { id: "W2", title: "Ambush", description: "Survive mob attack night.", next:["W3"] },
        { id: "W3", title: "Fire World", description: "Enter the Nether.", next:["W4"] },
        { id: "W4", title: "Blaze Trial", description: "Kill Blazes.", next:["W5"] },
        { id: "W5", title: "Potion Panic", description: "Brew potions under pressure.", next:["W6"] },
        { id: "W6", title: "Dragon Prep", description: "Fully enchant gear.", next:["W7"] },
        { id: "W7", title: "Dragon Slayer", description: "Defeat Ender Dragon.", next:["W8"] },
        { id: "W8", title: "Dragon Reborn", description: "Respawn and defeat Dragon again.", next:["W9"] },
        { id: "W9", title: "Godslayer", description: "Solo Dragon kill.", next:["FINAL"] }
      ]
    },

    endings: {
      BUILDER: "Master Architect",
      EXPLORER: "World Breaker",
      WARRIOR: "Slayer of Realms"
    }
  },

  HARDCORE: {

    intro: [
      { id: "H1", title: "Cursed Start", description: "Survive overnight.", next:["H2"] },
      { id: "H2", title: "Starvation Trial", description: "Survive one day on minimal food.", next:["H3"] },
      { id: "H3", title: "Weak Body", description: "Survive with leather armor.", next:["PATH_SELECT"] }
    ],

    paths: {

      OUTLAW: [
        { id: "O1", title: "Exile", description: "Live without villagers for a week.", next:["O2"] },
        { id: "O2", title: "Loot Only", description: "Obtain gear without trading.", next:["O3"] },
        { id: "O3", title: "Bastion Raid", description: "Loot Bastion.", next:["O4"] },
        { id: "O4", title: "Witch Hunter", description: "Kill 3 witches.", next:["O5"] },
        { id: "O5", title: "Sleepless", description: "Survive 3 nights without sleeping.", next:["O6"] },
        { id: "O6", title: "WANTED", description: "Trigger raid.", next:["FINAL"] }
      ],

      ENGINEER: [
        { id: "EN1", title: "Primitive Tech", description: "Build auto farm.", next:["EN2"] },
        { id: "EN2", title: "Breakdown", description: "Repair broken build.", next:["EN3"] },
        { id: "EN3", title: "Iron Empire", description: "Build iron farm.", next:["EN4"] },
        { id: "EN4", title: "Mega Reactor", description: "Create power system.", next:["EN5"] },
        { id: "EN5", title: "AI Brain", description: "Build complex machine.", next:["FINAL"] }
      ],

      HUNTER: [
        { id: "HU1", title: "Marked", description: "Fight mobs daily.", next:["HU2"] },
        { id: "HU2", title: "First Blood", description: "Kill boss mob.", next:["HU3"] },
        { id: "HU3", title: "Dragon God", description: "Defeat Ender Dragon.", next:["HU4"] },
        { id: "HU4", title: "Warden Run", description: "Enter Ancient City and escape.", next:["HU5"] },
        { id: "HU5", title: "Immortal Trial", description: "Survive 3 boss encounters.", next:["FINAL"] }
      ]
    },

    endings: {
      OUTLAW: "World Criminal",
      ENGINEER: "Machine God",
      HUNTER: "Death Incarnate"
    }
  },

  SECRETS: {

    global: [
      { id: "S1", title: "Echoes in Stone", description: "Stand in deep cave at night.", next:["S2"] },
      { id: "S2", title: "Blood Moon", description: "Survive red moon night.", next:["S3"] },
      { id: "S3", title: "Strange Name", description: "Name a mob '???'.", next:["S4"] },
      { id: "S4", title: "Grave Robber", description: "Dig suspicious gravel.", next:["S5"] },
      { id: "S5", title: "Cursed Relic", description: "Equip mysterious item.", next:["SECRET_ENDING"] }
    ],

    moderate_only: [
      { id:"SM1", title:"Mirror World", description:"Enter strange portal.", next:["SECRET_ENDING"] }
    ],

    hardcore_only: [
      { id:"SH1", title:"Death Mark", description:"Use Totem.", next:["SH2"] },
      { id:"SH2", title:"Hell Breath", description:"Survive lava biome.", next:["SH3"] },
      { id:"SH3", title:"Nameless King", description:"Defeat secret boss mob.", next:["SECRET_ENDING"] }
    ],

    ending: {
      SECRET_ENDING: "The Forgotten One"
    }
  }

}
