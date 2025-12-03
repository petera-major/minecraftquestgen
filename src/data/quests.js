export const quests = {
  moderate: [
    { id: "1", title: "First Shelter", description: "Build a temporary shelter before nightfall.", next: ["2"] },
    { id: "2", title: "Stone Age", description: "Craft full stone tools.", next: ["3"] },
    { id: "3", title: "Hunter Gatherer", description: "Kill an animal and cook food.", next: ["4"] },
    { id: "4", title: "Warmth & Light", description: "Craft torches or lanterns.", next: ["5"] },
  
    { id: "5", title: "Woodworker", description: "Craft a crafting table and wooden storage.", next: ["6"] },
    { id: "6", title: "Dig Deep", description: "Mine iron.", next: ["7"] },
    { id: "7", title: "Iron Age", description: "Craft iron tools.", next: ["8"] },
    { id: "8", title: "Leather Worker", description: "Craft armor from leather or hide.", next: ["9"] },
  
    { id: "9", title: "Homestead", description: "Build a permanent base.", next: ["10"] },
    { id: "10", title: "Water Source", description: "Create a water well or stream near base.", next: ["11"] },
    { id: "11", title: "Farmer’s Life", description: "Plant wheat or crops.", next: ["12"] },
    { id: "12", title: "Prepare for Winter", description: "Store at least 2 stacks of food.", next: ["13"] },
  
    { id: "13", title: "Explorer", description: "Discover a new biome.", next: ["14"] },
    { id: "14", title: "Village Scout", description: "Locate a village.", next: ["15"] },
    { id: "15", title: "Trader", description: "Complete a trade.", next: ["16"] },
  
    { id: "16", title: "Animal Tamer", description: "Tame an animal.", next: ["17"] },
    { id: "17", title: "Breeder", description: "Breed two animals.", next: ["18"] },
  
    { id: "18", title: "Cave Dweller", description: "Explore a deep cave.", next: ["19"] },
    { id: "19", title: "Rare Ores", description: "Mine diamonds or special ores.", next: ["20"] },
    { id: "20", title: "Enchanting", description: "Build an enchantment table.", next: ["21"] },
  
    { id: "21", title: "Nether Gateway", description: "Build a Nether portal.", next: ["22"] },
    { id: "22", title: "Survive the Nether", description: "Explore safely.", next: ["23"] },
    { id: "23", title: "Fortress Hunter", description: "Find a Nether Fortress.", next: ["24"] },
    { id: "24", title: "Potion Brewer", description: "Create potions.", next: ["25"] },
  
    { id: "25", title: "Eyes of Truth", description: "Craft Eyes of Ender.", next: ["26"] },
    { id: "26", title: "Stronghold", description: "Find the End portal.", next: ["27"] },
    { id: "27", title: "Dragon Slayer", description: "Defeat Ender Dragon.", next: ["28"] },
  
    { id: "28", title: "Sky Warrior", description: "Find Elytra.", next: ["29"] },
    { id: "29", title: "Wings Master", description: "Fly using Elytra.", next: ["30"] },
    { id: "30", title: "Dragon Egg", description: "Collect Dragon Egg.", next: ["31"] },
  
    { id: "31", title: "Return Home", description: "Display dragon trophy.", next: ["32"] },
    { id: "32", title: "Base Expansion", description: "Add an advanced room.", next: ["33"] },
    { id: "33", title: "Decoration", description: "Beautify base.", next: ["34"] },
  
    { id: "34", title: "Fishing Life", description: "Catch rare fish.", next: ["35"] },
    { id: "35", title: "Explorer II", description: "Visit another biome.", next: ["36"] },
    { id: "36", title: "Map Maker", description: "Craft map room.", next: ["37"] },
  
    { id: "37", title: "Elite Gear", description: "Fully enchanted armor.", next: ["38"] },
    { id: "38", title: "Animal Kingdom", description: "Build pens for animals.", next: ["39"] },
    { id: "39", title: "Lighting The World", description: "Light your base area.", next: ["40"] },
    { id: "40", title: "Moderate Champion", description: "All quests complete.", next: [] },
  ]
  ,
  
  hardcore: [
    { id: "1", title: "Cold Start", description: "Survive first night with no shelter.", next: ["2"] },
    { id: "2", title: "Hand Tools", description: "Craft with no crafting table first.", next: ["3"] },
    { id: "3", title: "Primitive Weapons", description: "Craft real weapons.", next: ["4"] },
    { id: "4", title: "Weak Armor", description: "Survive in leather or hide.", next: ["5"] },
  
    { id: "5", title: "Deep Miner", description: "Mine iron at night.", next: ["6"] },
    { id: "6", title: "Iron Defense", description: "Craft iron armor.", next: ["7"] },
    { id: "7", title: "Hunger Games", description: "Never starve for a day.", next: ["8"] },
    { id: "8", title: "Blood Moon", description: "Survive extreme event.", next: ["9"] },
  
    { id: "9", title: "Nomad", description: "Build temporary camp.", next: ["10"] },
    { id: "10", title: "Village Savior", description: "Protect village.", next: ["11"] },
    { id: "11", title: "Beast Tamer", description: "Tame predator.", next: ["12"] },
  
    { id: "12", title: "Cursed Cave", description: "Loot deadly cave.", next: ["13"] },
    { id: "13", title: "Advanced Gear", description: "Craft rare items.", next: ["14"] },
    { id: "14", title: "Enchant Master", description: "High-tier enchantments.", next: ["15"] },
  
    { id: "15", title: "Fire World", description: "Enter Nether.", next: ["16"] },
    { id: "16", title: "Blaze Hunter", description: "Collect blaze rods.", next: ["17"] },
    { id: "17", title: "Potion Master", description: "Make advanced potions.", next: ["18"] },
  
    { id: "18", title: "Bastion Breaker", description: "Defeat Piglin fortress.", next: ["19"] },
    { id: "19", title: "Wither Curse", description: "Summon Wither.", next: ["20"] },
    { id: "20", title: "Wither Slayer", description: "Defeat Wither.", next: ["21"] },
  
    { id: "21", title: "Beacon Power", description: "Activate beacon.", next: ["22"] },
    { id: "22", title: "Ancient City", description: "Find Warden city.", next: ["23"] },
    { id: "23", title: "Warden Hunter", description: "Defeat or escape Warden.", next: ["24"] },
  
    { id: "24", title: "Elite Builder", description: "Build mega base.", next: ["25"] },
    { id: "25", title: "Redstone Brain", description: "Create automation.", next: ["26"] },
  
    { id: "26", title: "Dragon War", description: "Fight Ender Dragon.", next: ["27"] },
    { id: "27", title: "Sky Breaker", description: "Get Elytra.", next: ["28"] },
  
    { id: "28", title: "End City Raider", description: "Loot End City.", next: ["29"] },
    { id: "29", title: "Hardcore Flight", description: "Master Elytra.", next: ["30"] },
  
    { id: "30", title: "Collector", description: "Obtain rare armor.", next: ["31"] },
    { id: "31", title: "Legendary Blade", description: "Craft ultimate weapon.", next: ["32"] },
    { id: "32", title: "Final Home", description: "Build elite headquarters.", next: ["33"] },
  
    { id: "33", title: "War Preparation", description: "Prepare final gear.", next: ["34"] },
    { id: "34", title: "Monster Hunter", description: "Kill dangerous mobs.", next: ["35"] },
    { id: "35", title: "Extreme Survival", description: "Survive winter event.", next: ["36"] },
  
    { id: "36", title: "Master Alchemist", description: "Max potions.", next: ["37"] },
    { id: "37", title: "Engineer King", description: "Complex machine.", next: ["38"] },
    { id: "38", title: "World Dominator", description: "Remove major threats.", next: ["39"] },
    { id: "39", title: "Hardcore God", description: "100+ days alive.", next: ["40"] },
  
    { id: "40", title: "Legend of Realism", description: "All Hardcore Quests Completed.", next: [] },
  ],
  };
  