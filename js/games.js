const GAMES_OTHER = [
  { "id":5,  "title" :"Minecraft Classic",           "rating":4.9, "plays" :210000, "category":"Sandbox",       "thumb":"images/MinecraftClassic.png",             "iframe":"https://classic.minecraft.net/" },
  { "id":6,  "title" :"Slither.io",                  "rating":4.4, "plays" :160000, "category":"Multiplayer",   "thumb":"images/Slitherio.png",                    "iframe":"https://slither.io/" }, 
  { "id":12, "title" :"Cookie Clicker",              "rating":4.6, "plays" :88000,  "category":"Idle",          "thumb":"images/CookieClicker.png",                "iframe":"https://orteil.dashnet.org/cookieclicker/" }
];
const GAMES = [
 
];

// Assuming GAMES_BATTLEROYALE_1 and GAMES_BATTLEROYALE_2 are defined as arrays of game objects

const maxLen = Math.max(
    GAMES_1.length,
    GAMES_2.length,
    GAMES_3.length,
    GAMES_4.length,
    GAMES_5.length,
    GAMES_OTHER.length
    );

    for (let i = 0; i < maxLen; i++) {
        if (i < GAMES_1.length) GAMES.push(GAMES_1[i]);
        if (i < GAMES_2.length) GAMES.push(GAMES_2[i]);
        if (i < GAMES_3.length) GAMES.push(GAMES_3[i]);
        if (i < GAMES_4.length) GAMES.push(GAMES_4[i]);
        if (i < GAMES_5.length) GAMES.push(GAMES_5[i]);
        if (i < GAMES_OTHER.length) GAMES.push(GAMES_OTHER[i]);
    }
const GAMES_PER_PAGE = 16;
const TOTAL_PAGES = Math.ceil(GAMES.length / GAMES_PER_PAGE);