const GAMES = [
  {
    id: 1,
    title: "2048",
    rating: 4.8,
    plays: 66962,
    category: "Puzzle",
    thumb: "https://img.itch.zone/aW1nLzEwMTk4MjUucG5n/315x250%23c/lQ%2BOzX.png",
    iframe: "https://gabrielecirulli.github.io/2048/"
  },
  {
    id: 2,
    title: "Flappy Bird Clone",
    rating: 4.5,
    plays: 55230,
    category: "Arcade",
    thumb: "https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_bird_nes.jpg",
    iframe: "https://nebez.github.io/floppybird/"
  },
  {
    id: 3,
    title: "Tetris",
    rating: 4.9,
    plays: 48200,
    category: "Puzzle",
    thumb: "https://upload.wikimedia.org/wikipedia/en/c/cf/Tetris_NES_cover_art.jpg",
    iframe: "https://chvin.github.io/react-tetris/"
  },
  {
    id: 4,
    title: "Snake Game",
    rating: 4.3,
    plays: 39500,
    category: "Arcade",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Snake_can_be_completed.png/300px-Snake_can_be_completed.png",
    iframe: "https://playsnake.org/"
  },
  {
    id: 5,
    title: "Pac-Man",
    rating: 4.7,
    plays: 72100,
    category: "Arcade",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/PacMan.png/300px-PacMan.png",
    iframe: "https://freepacman.org/"
  },
  {
    id: 6,
    title: "Chess",
    rating: 4.6,
    plays: 33000,
    category: "Strategy",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/300px-ChessSet.jpg",
    iframe: "https://lichess.org/embed/game/mpJcy1f8?theme=auto&bg=auto"
  },
  {
    id: 7,
    title: "Sudoku",
    rating: 4.4,
    plays: 28400,
    category: "Puzzle",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/300px-Sudoku-by-L2G-20050714.svg.png",
    iframe: "https://sudoku.com/embed/"
  },
  {
    id: 8,
    title: "Dino Runner",
    rating: 4.2,
    plays: 91000,
    category: "Arcade",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/T-rex_by_Alistair_Melville.png/300px-T-rex_by_Alistair_Melville.png",
    iframe: "https://chromedino.com/"
  },
  {
    id: 9,
    title: "Minesweeper",
    rating: 4.1,
    plays: 22000,
    category: "Puzzle",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Minesweeper_XP.png/300px-Minesweeper_XP.png",
    iframe: "https://minesweeper.online/"
  },
  {
    id: 10,
    title: "Pong",
    rating: 4.0,
    plays: 18700,
    category: "Sports",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Pong.png/300px-Pong.png",
    iframe: "https://ponggame.org/"
  },
  {
    id: 11,
    title: "Breakout",
    rating: 4.3,
    plays: 16300,
    category: "Arcade",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Breakout-2600.jpg/300px-Breakout-2600.jpg",
    iframe: "https://elgoog.im/breakout/"
  },
  {
    id: 12,
    title: "Space Invaders",
    rating: 4.5,
    plays: 31200,
    category: "Shooter",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Space_invaders_logo.svg/300px-Space_invaders_logo.svg.png",
    iframe: "https://freeinvaders.org/"
  },
  {
    id: 13,
    title: "Wordle",
    rating: 4.8,
    plays: 120000,
    category: "Word",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/300px-Wordle_196_example.svg.png",
    iframe: "https://www.nytimes.com/games/wordle/index.html"
  },
  {
    id: 14,
    title: "Cookie Clicker",
    rating: 4.6,
    plays: 88000,
    category: "Idle",
    thumb: "https://orteil.dashnet.org/cookieclicker/img/favicon.ico",
    iframe: "https://orteil.dashnet.org/cookieclicker/"
  },
  {
    id: 15,
    title: "Hearthstone Arena Sim",
    rating: 4.2,
    plays: 14500,
    category: "Card",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Hearthstone_screenshot.jpg/300px-Hearthstone_screenshot.jpg",
    iframe: "https://www.gameslist.com/games/solitaire/"
  },
  {
    id: 16,
    title: "Solitaire",
    rating: 4.4,
    plays: 43000,
    category: "Card",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Solitaire_Klondike.jpg/300px-Solitaire_Klondike.jpg",
    iframe: "https://www.solitr.com/klondike-solitaire/"
  },
  {
    id: 17,
    title: "Mahjong",
    rating: 4.3,
    plays: 25700,
    category: "Puzzle",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Mahjong_-_台北.JPG/300px-Mahjong_-_台北.JPG",
    iframe: "https://www.mahjong-game.com/"
  },
  {
    id: 18,
    title: "Asteroids",
    rating: 4.1,
    plays: 19400,
    category: "Shooter",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Asteroi1.png/300px-Asteroi1.png",
    iframe: "https://www.echalk.co.uk/amusements/Games/asteroidsClassic/ateroids.html"
  },
  {
    id: 19,
    title: "Tower Defense",
    rating: 4.5,
    plays: 37800,
    category: "Strategy",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/BTD5_box_art.jpg/300px-BTD5_box_art.jpg",
    iframe: "https://btd5.netlify.app/"
  },
  {
    id: 20,
    title: "Fruit Ninja",
    rating: 4.4,
    plays: 52000,
    category: "Arcade",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/FruitNinjaLogo.png/300px-FruitNinjaLogo.png",
    iframe: "https://www.agame.com/game/fruit-ninja"
  },
  {
    id: 21,
    title: "Cut the Rope",
    rating: 4.6,
    plays: 44300,
    category: "Puzzle",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Cut_the_rope_icon.png/300px-Cut_the_rope_icon.png",
    iframe: "https://www.cuttherope.net/"
  },
  {
    id: 22,
    title: "Angry Birds",
    rating: 4.7,
    plays: 89000,
    category: "Puzzle",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Angry_Birds_promo_art.png/300px-Angry_Birds_promo_art.png",
    iframe: "https://chrome.angrybirds.com/"
  },
  {
    id: 23,
    title: "Plants vs Zombies",
    rating: 4.8,
    plays: 61000,
    category: "Strategy",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Plants_vs_Zombies.jpg/300px-Plants_vs_Zombies.jpg",
    iframe: "https://www.agame.com/game/plants-vs-zombies"
  },
  {
    id: 24,
    title: "Geometry Dash",
    rating: 4.5,
    plays: 77000,
    category: "Arcade",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Geometry_Dash_logo.png/300px-Geometry_Dash_logo.png",
    iframe: "https://geometrydash.io/"
  },
  {
    id: 25,
    title: "Minecraft Classic",
    rating: 4.9,
    plays: 210000,
    category: "Sandbox",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Minecraft2019.jpg/300px-Minecraft2019.jpg",
    iframe: "https://classic.minecraft.net/"
  },
  {
    id: 26,
    title: "Among Us Online",
    rating: 4.6,
    plays: 155000,
    category: "Social",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Among_Us_cover_art.jpg/300px-Among_Us_cover_art.jpg",
    iframe: "https://www.crazygames.com/embed/among-us-online-edition"
  },
  {
    id: 27,
    title: "Subway Surfers",
    rating: 4.7,
    plays: 130000,
    category: "Runner",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Subway_surfers.jpg/300px-Subway_surfers.jpg",
    iframe: "https://poki.com/en/g/subway-surfers"
  },
  {
    id: 28,
    title: "Stickman Hook",
    rating: 4.4,
    plays: 42000,
    category: "Arcade",
    thumb: "https://img.gamedistribution.com/4bdc8d2498bd44cbaf4bc9c1e5d3e612-512x384.jpeg",
    iframe: "https://html5.gamedistribution.com/4bdc8d2498bd44cbaf4bc9c1e5d3e612/"
  },
  {
    id: 29,
    title: "Krunker.io",
    rating: 4.6,
    plays: 98000,
    category: "Shooter",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Krunker.io-logo.png/300px-Krunker.io-logo.png",
    iframe: "https://krunker.io/"
  },
  {
    id: 30,
    title: "Agar.io",
    rating: 4.5,
    plays: 175000,
    category: "Multiplayer",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Agario.png/300px-Agario.png",
    iframe: "https://agar.io/"
  },
  {
    id: 31,
    title: "Slither.io",
    rating: 4.4,
    plays: 160000,
    category: "Multiplayer",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Slither.io_logo.png/300px-Slither.io_logo.png",
    iframe: "https://slither.io/"
  },
  {
    id: 32,
    title: "Bloons TD 6",
    rating: 4.7,
    plays: 53000,
    category: "Strategy",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/BTD6_-_Box_Art.png/300px-BTD6_-_Box_Art.png",
    iframe: "https://ninja-kiwi.github.io/bloons-td-6/"
  },
  {
    id: 33,
    title: "Crossword",
    rating: 4.2,
    plays: 21000,
    category: "Word",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/CrosswordUSA.svg/300px-CrosswordUSA.svg.png",
    iframe: "https://www.nytimes.com/crosswords/game/mini"
  },
  {
    id: 34,
    title: "Run 3",
    rating: 4.8,
    plays: 112000,
    category: "Runner",
    thumb: "https://img.gamedistribution.com/8e5f8e81b2ad4ca3be01a30b0f1b8d5f-512x384.jpeg",
    iframe: "https://html5.gamedistribution.com/8e5f8e81b2ad4ca3be01a30b0f1b8d5f/"
  },
  {
    id: 35,
    title: "Papa's Pizzeria",
    rating: 4.5,
    plays: 67000,
    category: "Management",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Papas-pizzeria-icon.jpg/300px-Papas-pizzeria-icon.jpg",
    iframe: "https://www.coolmathgames.com/0-papas-pizzeria"
  },
  {
    id: 36,
    title: "Happy Wheels",
    rating: 4.6,
    plays: 88000,
    category: "Physics",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Happy_Wheels_game.png/300px-Happy_Wheels_game.png",
    iframe: "https://www.totaljerkface.com/happy_wheels.tjf"
  },
  {
    id: 37,
    title: "Tank Trouble",
    rating: 4.3,
    plays: 34000,
    category: "Action",
    thumb: "https://img.gamedistribution.com/6f7a81a3e64e4a8b9e6f3c9d0a5b7e9f-512x384.jpeg",
    iframe: "https://html5.gamedistribution.com/tanktrouble/"
  },
  {
    id: 38,
    title: "Drift Hunters",
    rating: 4.7,
    plays: 76000,
    category: "Racing",
    thumb: "https://img.gamedistribution.com/drift-hunters-thumb.jpeg",
    iframe: "https://drifthunters.io/"
  },
  {
    id: 39,
    title: "Zombs Royale",
    rating: 4.5,
    plays: 92000,
    category: "Battle Royale",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Zombs_Royale_logo.png/300px-Zombs_Royale_logo.png",
    iframe: "https://zombsroyale.io/"
  },
  {
    id: 40,
    title: "Little Alchemy 2",
    rating: 4.8,
    plays: 58000,
    category: "Puzzle",
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Little_Alchemy_2_app_icon.jpg/300px-Little_Alchemy_2_app_icon.jpg",
    iframe: "https://littlealchemy2.com/"
  }
];

const GAMES_PER_PAGE = 28;
const TOTAL_PAGES = Math.ceil(GAMES.length / GAMES_PER_PAGE);
