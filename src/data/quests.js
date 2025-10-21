export const quests = {
    moderate: [
      { id: "1", title: "Build a Shelter", description: "Create a small house with a door, roof, and windows.", next: ["2"] },
      { id: "2", title: "Gather Resources", description: "Mine 10 iron and collect 20 logs.", next: ["3", "4"] },
  
      { id: "3", title: "Build a Farm", description: "Plant wheat, potatoes, and carrots.", next: ["5"] },
      { id: "5", title: "Tame a Pet", description: "Tame a wolf, cat, or horse to accompany you.", next: ["7"] },
      { id: "7", title: "Visit a Village", description: "Find a village and trade with a villager.", next: ["9"] },
      { id: "9", title: "Expand Your Base", description: "Add two extra rooms or a storage area to your house.", next: ["11"] },
      { id: "11", title: "Decorate with Style", description: "Use banners, flower pots, and paintings to beautify your home.", next: ["13"] },
      { id: "13", title: "Build a Fishing Dock", description: "Create a dock and catch at least three different fish.", next: ["15"] },
      { id: "15", title: "Create an Animal Pen", description: "Breed and contain cows, sheep, or pigs.", next: ["17"] },
      { id: "17", title: "Build an Enchanting Room", description: "Craft an enchanting table and bookshelves.", next: ["19"] },
      { id: "19", title: "Become a Master Builder", description: "Add lighting, fences, and creative touches around your base.", next: [] },
  
      { id: "4", title: "Explore a Cave", description: "Find diamonds or lapis lazuli underground.", next: ["6"] },
      { id: "6", title: "Enter the Nether", description: "Build a portal and step into the Nether!", next: ["8"] },
      { id: "8", title: "Find a Fortress", description: "Locate a Nether Fortress and defeat a Blaze.", next: ["10"] },
      { id: "10", title: "Craft Potions", description: "Brew healing or fire resistance potions.", next: ["12"] },
      { id: "12", title: "Locate the Stronghold", description: "Use Eyes of Ender to find the End Portal.", next: ["14"] },
      { id: "14", title: "Defeat the Ender Dragon", description: "Destroy the End crystals and defeat the Dragon.", next: ["16"] },
      { id: "16", title: "Return Home", description: "Collect the Dragon Egg and place it as a trophy.", next: ["18"] },
      { id: "18", title: "Explore the End City", description: "Find an Elytra in an End City and fly home!", next: ["20"] },
      { id: "20", title: "The Peaceful Master", description: "Complete your world with harmony — all quests done!", next: [] },
    ],
  
    hardcore: [
      { id: "1", title: "Survive the First Night", description: "No shelter, no problem — last until sunrise.", next: ["2"] },
      { id: "2", title: "Craft Iron Armor", description: "Mine enough iron to craft a full armor set.", next: ["3", "4"] },
  
      { id: "3", title: "Build a Redstone Farm", description: "Automate one crop using Redstone.", next: ["5"] },
      { id: "5", title: "Create a Hidden Door", description: "Use pistons and levers to make a secret passage.", next: ["7"] },
      { id: "7", title: "Build a Mob Grinder", description: "Construct a farm that collects mob drops.", next: ["9"] },
      { id: "9", title: "Craft Beacon Power", description: "Defeat the Wither and activate a beacon.", next: ["11"] },
      { id: "11", title: "Fully Automate Resources", description: "Automate at least 3 different materials (iron, wool, food).", next: ["13"] },
      { id: "13", title: "Construct a Mega Base", description: "Build a large Redstone-powered base.", next: ["15"] },
      { id: "15", title: "Master Redstone Logic", description: "Design a working elevator or trap system.", next: ["17"] },
      { id: "17", title: "Engineer’s Triumph", description: "Finish a complex contraption successfully.", next: [] },
  
      { id: "4", title: "Defeat the Ender Dragon", description: "Prepare potions and enchanted gear, then conquer the End.", next: ["6"] },
      { id: "6", title: "Enter the Nether", description: "Find Blaze rods and Nether Wart for brewing.", next: ["8"] },
      { id: "8", title: "Raid a Bastion", description: "Defeat Piglins and collect gold blocks.", next: ["10"] },
      { id: "10", title: "Fight the Wither", description: "Summon and slay the Wither Boss.", next: ["12"] },
      { id: "12", title: "Defeat the Warden", description: "Find an Ancient City and survive the Warden’s fury.", next: ["14"] },
      { id: "14", title: "Complete a Raid", description: "Trigger and survive a full Pillager Raid.", next: ["16"] },
      { id: "16", title: "Obtain Elytra", description: "Raid an End City and bring back an Elytra.", next: ["18"] },
      { id: "18", title: "Hardcore Collector", description: "Gather every unique armor piece in survival.", next: ["20"] },
      { id: "20", title: "The Ultimate Survivor", description: "Survive 100 in-game days without dying once.", next: [] },
    ],
  };
  