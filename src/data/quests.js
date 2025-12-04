export const quests = {

  // =========================
  // 🌿 MODERATE MODE
  // =========================
  moderate: [

    // ---- STARTER QUESTS (1–10) ----
    { id: "1", title: "First Shelter", description: "Build a small dirt or wood house before nighttime.", next: ["2"] },
    { id: "2", title: "Stone Age", description: "Craft a full stone tool set.", next: ["3"] },
    { id: "3", title: "Food Find", description: "Cook and eat 3 foods.", next: ["4"] },
    { id: "4", title: "Iron Miner", description: "Find and smelt iron.", next: ["5"] },
    { id: "5", title: "Armor Up", description: "Craft at least one iron armor piece.", next: ["6"] },
    { id: "6", title: "Light the Way", description: "Craft torches or lanterns.", next: ["7"] },
    { id: "7", title: "Home Upgrade", description: "Expand your house with more space.", next: ["8"] },
    { id: "8", title: "Plant Life", description: "Start a crop farm.", next: ["9"] },
    { id: "9", title: "Chest Life", description: "Build storage space.", next: ["10"] },
    { id: "10", title: "Choose Your Path", description: "Pick Builder, Explorer, or Warrior.", next: ["11", "21", "31"] },

    // ---- BUILDER PATH (11–20) ----
    { id: "11", title: "Permanent Base", description: "Build a proper base from stone or wood.", next: ["12"] },
    { id: "12", title: "Animal Farm", description: "Fence cows, sheep, or pigs.", next: ["13"] },
    { id: "13", title: "Village Friend", description: "Trade with villagers.", next: ["14"] },
    { id: "14", title: "Enchanting", description: "Build enchantment table.", next: ["15"] },
    { id: "15", title: "Mega Project", description: "Build something large.", next: ["16"] },
    { id: "16", title: "Decoration Day", description: "Decorate your base.", next: ["17"] },
    { id: "17", title: "Lights Out", description: "Light area safely.", next: ["18"] },
    { id: "18", title: "Underground Room", description: "Build secret basement.", next: ["19"] },
    { id: "19", title: "Defense Build", description: "Add fences or walls.", next: ["20"] },
    { id: "20", title: "Builder Master", description: "Finish Builder path.", next: [] },

    // ---- EXPLORER PATH (21–30) ----
    { id: "21", title: "New Biomes", description: "Find new area.", next: ["22"] },
    { id: "22", title: "Village Scout", description: "Discover village.", next: ["23"] },
    { id: "23", title: "Ocean Loot", description: "Find shipwreck loot.", next: ["24"] },
    { id: "24", title: "Mountain Climb", description: "Reach mountain top.", next: ["25"] },
    { id: "25", title: "Dungeon Trip", description: "Loot dungeon.", next: ["26"] },
    { id: "26", title: "Ruin Explorer", description: "Explore a ruin.", next: ["27"] },
    { id: "27", title: "Nether Visit", description: "Enter Nether and return.", next: ["28"] },
    { id: "28", title: "Stronghold Finder", description: "Find the End Portal.", next: ["29"] },
    { id: "29", title: "End Battle", description: "Fight the Dragon.", next: ["30"] },
    { id: "30", title: "Explorer Master", description: "Finish Explorer path.", next: [] },

    // ---- WARRIOR PATH (31–40) ----
    { id: "31", title: "Mob Hunter", description: "Kill 10 hostile mobs.", next: ["32"] },
    { id: "32", title: "Cave Fighter", description: "Fight underground.", next: ["33"] },
    { id: "33", title: "Enchant Weapon", description: "Enchant a sword.", next: ["34"] },
    { id: "34", title: "Potion Craft", description: "Brew potions.", next: ["35"] },
    { id: "35", title: "Nether Combat", description: "Kill Nether mobs.", next: ["36"] },
    { id: "36", title: "Blaze Killer", description: "Kill Blaze.", next: ["37"] },
    { id: "37", title: "Wither Prep", description: "Collect skulls.", next: ["38"] },
    { id: "38", title: "Wither Slayer", description: "Kill Wither.", next: ["39"] },
    { id: "39", title: "Dragon Slayer", description: "Defeat Dragon again.", next: ["40"] },
    { id: "40", title: "Warrior Master", description: "Finish Warrior path.", next: [] },
  ],


  // =========================
  // 🔥 HARDCORE MODE
  // =========================
  hardcore: [

    // ---- STARTER HELL (1–10) ----
    { id: "1", title: "Night Zero", description: "Survive first night outside.", next: ["2"] },
    { id: "2", title: "Stone Sprint", description: "Craft tools fast.", next: ["3"] },
    { id: "3", title: "No Handouts", description: "No villages yet.", next: ["4"] },
    { id: "4", title: "Iron Rush", description: "Craft iron gear.", next: ["5"] },
    { id: "5", title: "Weapon First", description: "Craft main weapon.", next: ["6"] },
    { id: "6", title: "Armor ASAP", description: "Wear armor.", next: ["7"] },
    { id: "7", title: "Torch Limit", description: "Use minimal light.", next: ["8"] },
    { id: "8", title: "Cold Trial", description: "Survive snow biome night.", next: ["9"] },
    { id: "9", title: "No Sleep", description: "Survive without sleeping.", next: ["10"] },
    { id: "10", title: "Pick Your Fate", description: "Choose Outlaw, Engineer, or Hunter.", next: ["41","51","61"] },

    // ---- OUTLAW PATH (41–50) ----
    { id: "41", title: "Village Enemy", description: "No trading.", next: ["42"] },
    { id: "42", title: "Loot Only", description: "Use loot for gear.", next: ["43"] },
    { id: "43", title: "Bastion Raid", description: "Loot Bastion.", next: ["44"] },
    { id: "44", title: "Witch Hunt", description: "Kill witches.", next: ["45"] },
    { id: "45", title: "Never Sleep", description: "3 nights awake.", next: ["46"] },
    { id: "46", title: "Trigger Raid", description: "Start a raid.", next: ["47"] },
    { id: "47", title: "Bartering Only", description: "Nether trades only.", next: ["48"] },
    { id: "48", title: "Always Hunted", description: "Survive hostile world.", next: ["49"] },
    { id: "49", title: "Criminal King", description: "Rule outlaw life.", next: ["50"] },
    { id: "50", title: "Outlaw Legend", description: "Finish path.", next: [] },

    // ---- ENGINEER PATH (51–60) ----
    { id: "51", title: "Redstone Blood", description: "Build contraption.", next: ["52"] },
    { id: "52", title: "Auto Crops", description: "Automate food.", next: ["53"] },
    { id: "53", title: "Mob Machine", description: "Build grinder.", next: ["54"] },
    { id: "54", title: "Beacon Power", description: "Activate beacon.", next: ["55"] },
    { id: "55", title: "Sorting System", description: "Auto storage.", next: ["56"] },
    { id: "56", title: "Iron Engine", description: "Iron farm.", next: ["57"] },
    { id: "57", title: "Mega Base", description: "Huge base.", next: ["58"] },
    { id: "58", title: "Hidden Doors", description: "Secret rooms.", next: ["59"] },
    { id: "59", title: "Automation God", description: "Working system.", next: ["60"] },
    { id: "60", title: "Engineer Legend", description: "Finish path.", next: [] },

    // ---- HUNTER PATH (61–70) ----
    { id: "61", title: "Marked", description: "Kill mobs daily.", next: ["62"] },
    { id: "62", title: "Mini-Boss", description: "Kill strong mob.", next: ["63"] },
    { id: "63", title: "Nether Hunt", description: "Kill Nether elites.", next: ["64"] },
    { id: "64", title: "Wither Bones", description: "Collect skulls.", next: ["65"] },
    { id: "65", title: "Wither Kill", description: "Slay Wither.", next: ["66"] },
    { id: "66", title: "Max Gear", description: "Full enchant gear.", next: ["67"] },
    { id: "67", title: "Dragon Kill", description: "Kill Dragon.", next: ["68"] },
    { id: "68", title: "Warden Run", description: "Escape Ancient City.", next: ["69"] },
    { id: "69", title: "Boss Rush", description: "Multiple bosses.", next: ["70"] },
    { id: "70", title: "Hunter God", description: "Finish path.", next: [] },
  ]
};
