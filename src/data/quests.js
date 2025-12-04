export const quests = {

  // =====================
  // 🌿 MODERATE MODE
  // =====================

  moderate: [

    // --- STARTER QUESTS (1–10) ---
    { id: "M1", title: "First Shelter", description: "Build a small shelter before night.", next: ["M2"] },
    { id: "M2", title: "Stone Tools", description: "Craft a stone tool set.", next: ["M3"] },
    { id: "M3", title: "Food Secure", description: "Cook and eat at least 3 foods.", next: ["M4"] },
    { id: "M4", title: "Iron Age", description: "Mine or smelt iron.", next: ["M5"] },
    { id: "M5", title: "Iron Armor", description: "Craft at least one armor piece.", next: ["M6"] },
    { id: "M6", title: "Lighting Up", description: "Craft torches or lanterns.", next: ["M7"] },
    { id: "M7", title: "Starter Base", description: "Expand shelter into a home.", next: ["M8"] },
    { id: "M8", title: "The Farmer", description: "Plant 3 crops.", next: ["M9"] },
    { id: "M9", title: "Exploration Ready", description: "Craft a bed and chest.", next: ["M10"] },
    { id: "M10", title: "Choose Your Destiny", description: "Choose Builder, Explorer, or Warrior path.", next: ["B1", "E1", "W1"] },

    // -----------------
    // 🏡 BUILDER PATH (11–23)
    // -----------------
    { id: "B1", title: "Permanent Base", description: "Build a real house.", next:["B2"] },
    { id: "B2", title: "Farm Life", description: "Make a farm area.", next:["B3"] },
    { id: "B3", title: "Animal Keeper", description: "Fence animals.", next:["B4"] },
    { id: "B4", title: "Storage Room", description: "Create storage.", next:["B5"] },
    { id: "B5", title: "Decorations", description: "Decorate your base.", next:["B6"] },
    { id: "B6", title: "Lighting Plans", description: "Light area to stop mobs.", next:["B7"] },
    { id: "B7", title: "Village Trade", description: "Trade with villagers.", next:["B8"] },
    { id: "B8", title: "Enchant Room", description: "Build enchanting setup.", next:["B9"] },
    { id: "B9", title: "Expansion", description: "Add another floor.", next:["B10"] },
    { id: "B10", title: "Mega Structure", description: "Build large creation.", next:["B11"] },
    { id: "B11", title: "Underground Room", description: "Secret base room.", next:["B12"] },
    { id: "B12", title: "Defense Build", description: "Walls or fences.", next:["B13"] },
    { id: "B13", title: "Builder Master", description: "Complete builder path.", next: [] },

    // -----------------
    // 🌎 EXPLORER PATH (24–36)
    // -----------------
    { id: "E1", title: "Wanderer", description: "Discover new biome.", next:["E2"] },
    { id: "E2", title: "Village Scout", description: "Find a village.", next:["E3"] },
    { id: "E3", title: "Ocean Loot", description: "Loot wreck.", next:["E4"] },
    { id: "E4", title: "Mountain Trial", description: "Climb peak.", next:["E5"] },
    { id: "E5", title: "Dungeon Dive", description: "Loot dungeon.", next:["E6"] },
    { id: "E6", title: "Lost Temple", description: "Explore ruins.", next:["E7"] },
    { id: "E7", title: "Nether Scout", description: "Enter Nether and escape.", next:["E8"] },
    { id: "E8", title: "End Hunt", description: "Find stronghold.", next:["E9"] },
    { id: "E9", title: "Dragon Fight", description: "Defeat Dragon.", next:["E10"] },
    { id: "E10", title: "End City", description: "Loot End City.", next:["E11"] },
    { id: "E11", title: "Elytra Master", description: "Fly with Elytra.", next:["E12"] },
    { id: "E12", title: "Treasure Hunter", description: "Find rare loot.", next:["E13"] },
    { id: "E13", title: "Explorer Master", description: "Complete explorer path.", next: [] },

    // -----------------
    // ⚔️ WARRIOR PATH (37–49)
    // -----------------
    { id: "W1", title: "Mob Slayer", description: "Kill hostile mobs.", next:["W2"] },
    { id: "W2", title: "Cave Combat", description: "Fight underground.", next:["W3"] },
    { id: "W3", title: "Enchant Gear", description: "Enchant gear.", next:["W4"] },
    { id: "W4", title: "Potion Brewing", description: "Make potions.", next:["W5"] },
    { id: "W5", title: "Nether Combat", description: "Kill Nether mobs.", next:["W6"] },
    { id: "W6", title: "Blaze Quest", description: "Kill Blaze.", next:["W7"] },
    { id: "W7", title: "Wither Prep", description: "Collect skulls.", next:["W8"] },
    { id: "W8", title: "Wither Fight", description: "Kill Wither.", next:["W9"] },
    { id: "W9", title: "Dragon Slayer", description: "Kill Dragon.", next:["W10"] },
    { id: "W10", title: "Warrior Master", description: "Complete warrior path.", next: [] },
  ],

  // =====================
  // 🔥 HARDCORE MODE
  // =====================

  hardcore: [

    // --- STARTER QUESTS (1–10) ---
    { id: "H1", title: "Survive Night One", description: "No shelter. No mercy.", next:["H2"] },
    { id: "H2", title: "Stone Rush", description: "Make stone tools fast.", next:["H3"] },
    { id: "H3", title: "Hunger Games", description: "Eat only hunted food.", next:["H4"] },
    { id: "H4", title: "Iron or Die", description: "Craft iron gear.", next:["H5"] },
    { id: "H5", title: "Weapon First", description: "Craft strong weapon.", next:["H6"] },
    { id: "H6", title: "Armor Night", description: "Wear armor before sunrise.", next:["H7"] },
    { id: "H7", title: "Torch Scarcity", description: "Survive with limited lighting.", next:["H8"] },
    { id: "H8", title: "Cold Death", description: "Survive snow night.", next:["H9"] },
    { id: "H9", title: "Choose or Die", description: "Pick Outlaw, Engineer, or Hunter.", next:["O1", "EN1", "HU1"] },
    { id: "H10", title: "Trial by Fire", description: "Enter Nether early.", next:["O1", "EN1", "HU1"] },

    // -----------------
    // 🧨 OUTLAW PATH (11–23)
    // -----------------
    { id: "O1", title: "No Villagers", description: "No trading allowed.", next:["O2"] },
    { id: "O2", title: "Raid Theft", description: "Steal from enemies.", next:["O3"] },
    { id: "O3", title: "Bastion Break", description: "Loot Bastion.", next:["O4"] },
    { id: "O4", title: "Witch Blood", description: "Kill witches.", next:["O5"] },
    { id: "O5", title: "Night Terror", description: "No sleeping.", next:["O6"] },
    { id: "O6", title: "No Mercy", description: "Trigger raid.", next:["O7"] },
    { id: "O7", title: "Dark Trader", description: "Barter only.", next:["O8"] },
    { id: "O8", title: "Hunter Hated", description: "Village enemies.", next:["O9"] },
    { id: "O9", title: "Criminal King", description: "Play outlaw long-term.", next:["O10"] },
    { id: "O10", title: "Outlaw Legend", description: "Finish path.", next: [] },

    // -----------------
    // ⚙️ ENGINEER PATH (24–36)
    // -----------------
    { id: "EN1", title: "Redstone Start", description: "Build contraption.", next:["EN2"] },
    { id: "EN2", title: "Auto Farm", description: "Automate crops.", next:["EN3"] },
    { id: "EN3", title: "Mob Grinder", description: "Build grinder.", next:["EN4"] },
    { id: "EN4", title: "Power Core", description: "Beacon setup.", next:["EN5"] },
    { id: "EN5", title: "Sorting System", description: "Auto storage.", next:["EN6"] },
    { id: "EN6", title: "Iron Farm", description: "Auto iron.", next:["EN7"] },
    { id: "EN7", title: "Mega Base", description: "Large base.", next:["EN8"] },
    { id: "EN8", title: "Hidden Doors", description: "Secret entrances.", next:["EN9"] },
    { id: "EN9", title: "Redstone Master", description: "Working systems.", next:["EN10"] },
    { id: "EN10", title: "Engineer Legend", description: "Finish engineer path.", next: [] },

    // -----------------
    // ☠️ HUNTER PATH (37–49)
    // -----------------
    { id: "HU1", title: "Marked", description: "Fight mobs daily.", next:["HU2"] },
    { id: "HU2", title: "Blood Trial", description: "Kill mini-boss.", next:["HU3"] },
    { id: "HU3", title: "Nether Hunt", description: "Kill elites.", next:["HU4"] },
    { id: "HU4", title: "Wither Bones", description: "Collect skulls.", next:["HU5"] },
    { id: "HU5", title: "Wither Fight", description: "Slay Wither.", next:["HU6"] },
    { id: "HU6", title: "Dragon Prep", description: "Max gear.", next:["HU7"] },
    { id: "HU7", title: "End Battle", description: "Kill Dragon.", next:["HU8"] },
    { id: "HU8", title: "Warden Escape", description: "Survive Ancient City.", next:["HU9"] },
    { id: "HU9", title: "Boss Rush", description: "Multiple bosses.", next:["HU10"] },
    { id: "HU10", title: "Hunter God", description: "Finish hunter.", next: [] },
  ]
};
