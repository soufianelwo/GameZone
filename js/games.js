const GAMES = [
  { id:1, title:"Mahjong",                    rating:4.3, plays:25700,  category:"Puzzle",        thumb:"images/Mahjong.png",                      iframe:"https://www.mahjong-game.com/" },
  { id:2,  title:"Pac-Man",                     rating:4.7, plays:72100,  category:"Arcade",        thumb:"images/PacMan.png",                       iframe:"https://freepacman.org/" },
  { id:3, title:"Geometry Dash",               rating:4.5, plays:77000,  category:"Arcade",        thumb:"images/GeometryDash.png",                 iframe:"https://geometrydash.io/" },
  { id:4, title:"Zombs Royale",               rating:4.5, plays:92000,  category:"Battle Royale", thumb:"images/ZombsRoyale.png",                  iframe:"https://zombsroyale.io/" },
  { id:5, title:"Minecraft Classic",           rating:4.9, plays:210000, category:"Sandbox",       thumb:"images/MinecraftClassic.png",             iframe:"https://classic.minecraft.net/" },
  { id:6, title:"Slither.io",                 rating:4.4, plays:160000, category:"Multiplayer",   thumb:"images/Slitherio.png",                    iframe:"https://slither.io/" }, 
  { id:7, title:"Minesweeper",                 rating:4.1, plays:22000,  category:"Puzzle",        thumb:"images/Minesweeper.png",                  iframe:"https://minesweeper.online/" },
  { id:8, title:"Little Alchemy 2",           rating:4.8, plays:58000,  category:"Puzzle",        thumb:"images/LittleAlchemy2.png",               iframe:"https://littlealchemy2.com/" },   { id:2,  title:"Flappy Bird",                 rating:4.5, plays:55230,  category:"Arcade",        thumb:"images/FlappyBird.png",                   iframe:"https://nebez.github.io/floppybird/" },
  { id:9,  title:"Sudoku",                      rating:4.4, plays:28400,  category:"Puzzle",        thumb:"images/Sudoku.png",                       iframe:"https://sudoku.com/" }, 
  { id:10,  title:"Tetris",                      rating:4.9, plays:48200,  category:"Puzzle",        thumb:"images/Tetris.png",                       iframe:"https://chvin.github.io/react-tetris/" },
  { id:11, title:"Tank Trouble",               rating:4.3, plays:34000,  category:"Action",        thumb:"images/TankTrouble.png",                  iframe:"https://tanktrouble.com/" },
  { id:12, title:"Cookie Clicker",              rating:4.6, plays:88000,  category:"Idle",          thumb:"images/CookieClicker.png",                iframe:"https://orteil.dashnet.org/cookieclicker/" }
];

// Assuming GAMES_BATTLEROYALE_1 and GAMES_BATTLEROYALE_2 are defined as arrays of game objects

    const maxLen = Math.max(
        GAMES_ARCADE_1.length,
        GAMES_ARCADE_2.length,
        GAMES_BATTLEROYALE_1.length,
        GAMES_BATTLEROYALE_2.length,
        GAMES_PUZZLE_1.length,
        GAMES_PUZZLE_2.length,
        GAMES_SANDBOX_1.length,
        GAMES_SANDBOX_2.length
    );

    for (let i = 0; i < maxLen; i++) {
        if (i < GAMES_ARCADE_1.length) GAMES.push(GAMES_ARCADE_1[i]);
        if (i < GAMES_BATTLEROYALE_1.length) GAMES.push(GAMES_BATTLEROYALE_1[i]);
        if (i < GAMES_PUZZLE_1.length) GAMES.push(GAMES_PUZZLE_1[i]);
        if (i < GAMES_SANDBOX_1.length) GAMES.push(GAMES_SANDBOX_1[i]);

        if (i < GAMES_ARCADE_2.length) GAMES.push(GAMES_ARCADE_2[i]);
        if (i < GAMES_BATTLEROYALE_2.length) GAMES.push(GAMES_BATTLEROYALE_2[i]);
        if (i < GAMES_PUZZLE_2.length) GAMES.push(GAMES_PUZZLE_2[i]);
        if (i < GAMES_SANDBOX_2.length) GAMES.push(GAMES_SANDBOX_2[i]);
    }
const GAMES_PER_PAGE = 16;
const TOTAL_PAGES = Math.ceil(GAMES.length / GAMES_PER_PAGE);