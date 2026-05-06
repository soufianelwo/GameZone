const SEO_CATEGORIES = {
  "Arcade": {
    "h1": "Jeux Arcade Gratuits en Ligne",
    "intro": "Retrouve les meilleurs jeux Arcade gratuits sur GameZone : Pac-Man, Geometry Dash, Flappy Bird et des dizaines d'autres classiques. Joue directement dans ton navigateur sur PC, mobile ou tablette, sans téléchargement ni inscription. Nouveaux jeux ajoutés régulièrement !"
  },
  "Puzzle": {
    "h1": "Jeux de Puzzle Gratuits en Ligne",
    "intro": "Entraîne ton cerveau avec les meilleurs jeux de Puzzle gratuits sur GameZone : Sudoku, Tetris, Mahjong, Minesweeper et bien plus encore. Des défis pour tous les niveaux, accessibles instantanément dans ton navigateur sans aucun téléchargement."
  },
  "Battle Royale": {
    "h1": "Jeux Battle Royale Gratuits en Ligne",
    "intro": "Affronte des milliers de joueurs dans les meilleurs jeux Battle Royale gratuits sur GameZone : PUBG Mobile, Fortnite, Zombs Royale et bien d'autres. Lance-toi dans la bataille directement depuis ton navigateur, sans téléchargement ni installation."
  },
  "Sandbox": {
    "h1": "Jeux Sandbox Gratuits en Ligne",
    "intro": "Laisse libre cours à ta créativité avec les meilleurs jeux Sandbox gratuits sur GameZone : Minecraft Classic, Infinite Craft, Build Now GG et des dizaines d'autres. Construis, explore et crée des mondes entiers directement dans ton navigateur."
  },
  "Action": {
    "h1": "Jeux d'Action Gratuits en Ligne",
    "intro": "Vis des expériences intenses avec les meilleurs jeux d'Action gratuits sur GameZone. Affronte des ennemis, surmonte des obstacles et prouve ta valeur dans des aventures palpitantes jouables directement dans ton navigateur, sans téléchargement."
  },
  "Multiplayer": {
    "h1": "Jeux Multijoueur Gratuits en Ligne",
    "intro": "Joue avec tes amis ou affronte des joueurs du monde entier avec les meilleurs jeux Multijoueur gratuits sur GameZone. Slither.io et d'autres hits accessibles instantanément dans ton navigateur, sans installation ni inscription obligatoire."
  },
  "Idle": {
    "h1": "Jeux Idle Gratuits en Ligne",
    "intro": "Détends-toi avec les meilleurs jeux Idle gratuits sur GameZone : Cookie Clicker, Clicker Heroes et bien d'autres. Des jeux relaxants et addictifs où ta progression continue même quand tu n'es pas là. Jouable directement dans ton navigateur."
  },
  "Sports": {
    "h1": "Jeux de Sport Gratuits en Ligne",
    "intro": "Découvre les meilleurs jeux de Sport gratuits sur GameZone. Football, basketball, course et bien d'autres disciplines t'attendent. Joue instantanément dans ton navigateur sur PC ou mobile, sans téléchargement ni inscription requise."
  }
};
const SEO_GAMES = {};
/*const SEO_GAMES = {
  "1": {
    "title": "Jouer à Mahjong gratuitement – GameZone",
    "description": "Découvre Mahjong sur GameZone. Entraîne ta réflexion avec ce jeu de Puzzle gratuit, jouable en ligne sans installation.",
    "h1": "Mahjong – Jeu Puzzle Gratuit"
  },
  "2": {
    "title": "Jouer à Pac-Man gratuitement – GameZone",
    "description": "Joue à Pac-Man gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Pac-Man – Jeu Arcade Gratuit"
  },
  "3": {
    "title": "Jouer à Geometry Dash gratuitement – GameZone",
    "description": "Joue à Geometry Dash gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Geometry Dash – Jeu Arcade Gratuit"
  },
  "4": {
    "title": "Jouer à Zombs Royale gratuitement – GameZone",
    "description": "Lance-toi dans Zombs Royale sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Zombs Royale – Jeu Battle Royale Gratuit"
  },
  "5": {
    "title": "Jouer à Minecraft Classic gratuitement – GameZone",
    "description": "Explore Minecraft Classic gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Minecraft Classic – Jeu Sandbox Gratuit"
  },
  "6": {
    "title": "Jouer à Slither.io gratuitement – GameZone",
    "description": "Joue à Slither.io en ligne sur GameZone. Affronte ou coopère avec d'autres joueurs gratuitement, sans téléchargement.",
    "h1": "Slither.io – Jeu Multiplayer Gratuit"
  },
  "7": {
    "title": "Jouer à Minesweeper gratuitement – GameZone",
    "description": "Découvre Minesweeper sur GameZone. Entraîne ta réflexion avec ce jeu de Puzzle gratuit, jouable en ligne sans installation.",
    "h1": "Minesweeper – Jeu Puzzle Gratuit"
  },
  "8": {
    "title": "Jouer à Little Alchemy 2 gratuitement – GameZone",
    "description": "Découvre Little Alchemy 2 sur GameZone. Entraîne ta réflexion avec ce jeu de Puzzle gratuit, jouable en ligne sans installation.",
    "h1": "Little Alchemy 2 – Jeu Puzzle Gratuit"
  },
  "9": {
    "title": "Jouer à Sudoku gratuitement – GameZone",
    "description": "Découvre Sudoku sur GameZone. Entraîne ta réflexion avec ce jeu de Puzzle gratuit, jouable en ligne sans installation.",
    "h1": "Sudoku – Jeu Puzzle Gratuit"
  },
  "10": {
    "title": "Jouer à Tetris gratuitement – GameZone",
    "description": "Découvre Tetris sur GameZone. Entraîne ta réflexion avec ce jeu de Puzzle gratuit, jouable en ligne sans installation.",
    "h1": "Tetris – Jeu Puzzle Gratuit"
  },
  "11": {
    "title": "Jouer à Tank Trouble gratuitement – GameZone",
    "description": "Plonge dans l'action avec Tank Trouble sur GameZone. Un jeu d'action intense à jouer gratuitement dans ton navigateur.",
    "h1": "Tank Trouble – Jeu Action Gratuit"
  },
  "12": {
    "title": "Jouer à Cookie Clicker gratuitement – GameZone",
    "description": "Découvre Cookie Clicker sur GameZone. Un jeu idle relaxant et addictif à jouer gratuitement dans ton navigateur.",
    "h1": "Cookie Clicker – Jeu Idle Gratuit"
  },
  "1041": {
    "title": "Jouer à Bowmasters gratuitement – GameZone",
    "description": "Joue à Bowmasters gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Bowmasters – Jeu Arcade Gratuit"
  },
  "1042": {
    "title": "Jouer à Angry Birds Reloaded gratuitement – GameZone",
    "description": "Joue à Angry Birds Reloaded gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Angry Birds Reloaded – Jeu Arcade Gratuit"
  },
  "1043": {
    "title": "Jouer à Ragdoll Archers gratuitement – GameZone",
    "description": "Joue à Ragdoll Archers gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Ragdoll Archers – Jeu Arcade Gratuit"
  },
  "1044": {
    "title": "Jouer à Stickman Warrior gratuitement – GameZone",
    "description": "Joue à Stickman Warrior gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Stickman Warrior – Jeu Arcade Gratuit"
  },
  "1045": {
    "title": "Jouer à Sniper 3D gratuitement – GameZone",
    "description": "Joue à Sniper 3D gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Sniper 3D – Jeu Arcade Gratuit"
  },
  "1046": {
    "title": "Jouer à Agent Action gratuitement – GameZone",
    "description": "Joue à Agent Action gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Agent Action – Jeu Arcade Gratuit"
  },
  "1047": {
    "title": "Jouer à Gangstar Vegas gratuitement – GameZone",
    "description": "Joue à Gangstar Vegas gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Gangstar Vegas – Jeu Arcade Gratuit"
  },
  "1048": {
    "title": "Jouer à Stickman World Battle gratuitement – GameZone",
    "description": "Joue à Stickman World Battle gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Stickman World Battle – Jeu Arcade Gratuit"
  },
  "1049": {
    "title": "Jouer à Mad Skills BMX 2 gratuitement – GameZone",
    "description": "Joue à Mad Skills BMX 2 gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Mad Skills BMX 2 – Jeu Arcade Gratuit"
  },
  "1050": {
    "title": "Jouer à Drift Ride gratuitement – GameZone",
    "description": "Joue à Drift Ride gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Drift Ride – Jeu Arcade Gratuit"
  },
  "1051": {
    "title": "Jouer à Geometry Dash Meltdown gratuitement – GameZone",
    "description": "Joue à Geometry Dash Meltdown gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Geometry Dash Meltdown – Jeu Arcade Gratuit"
  },
  "1052": {
    "title": "Jouer à Shadow Fight 2 gratuitement – GameZone",
    "description": "Joue à Shadow Fight 2 gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Shadow Fight 2 – Jeu Arcade Gratuit"
  },
  "1053": {
    "title": "Jouer à Mortal Kombat gratuitement – GameZone",
    "description": "Joue à Mortal Kombat gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Mortal Kombat – Jeu Arcade Gratuit"
  },
  "1054": {
    "title": "Jouer à Street Fighter gratuitement – GameZone",
    "description": "Joue à Street Fighter gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Street Fighter – Jeu Arcade Gratuit"
  },
  "1055": {
    "title": "Jouer à Egg Inc gratuitement – GameZone",
    "description": "Joue à Egg Inc gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Egg Inc – Jeu Arcade Gratuit"
  },
  "1056": {
    "title": "Jouer à Flappy Dunk gratuitement – GameZone",
    "description": "Joue à Flappy Dunk gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Flappy Dunk – Jeu Arcade Gratuit"
  },
  "1057": {
    "title": "Jouer à Tower Bloxx gratuitement – GameZone",
    "description": "Joue à Tower Bloxx gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Tower Bloxx – Jeu Arcade Gratuit"
  },
  "1058": {
    "title": "Jouer à Space Frontier gratuitement – GameZone",
    "description": "Joue à Space Frontier gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Space Frontier – Jeu Arcade Gratuit"
  },
  "1059": {
    "title": "Jouer à Johnny Trigger gratuitement – GameZone",
    "description": "Joue à Johnny Trigger gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Johnny Trigger – Jeu Arcade Gratuit"
  },
  "1060": {
    "title": "Jouer à Sky Dancer gratuitement – GameZone",
    "description": "Joue à Sky Dancer gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Sky Dancer – Jeu Arcade Gratuit"
  },
  "1061": {
    "title": "Jouer à Aquapark.io gratuitement – GameZone",
    "description": "Joue à Aquapark.io gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Aquapark.io – Jeu Arcade Gratuit"
  },
  "1062": {
    "title": "Jouer à Archery King gratuitement – GameZone",
    "description": "Joue à Archery King gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Archery King – Jeu Arcade Gratuit"
  },
  "1063": {
    "title": "Jouer à Toon Blast gratuitement – GameZone",
    "description": "Joue à Toon Blast gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Toon Blast – Jeu Arcade Gratuit"
  },
  "1064": {
    "title": "Jouer à Toy Blast gratuitement – GameZone",
    "description": "Joue à Toy Blast gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Toy Blast – Jeu Arcade Gratuit"
  },
  "1065": {
    "title": "Jouer à Candy Crush Jelly gratuitement – GameZone",
    "description": "Joue à Candy Crush Jelly gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Candy Crush Jelly – Jeu Arcade Gratuit"
  },
  "1066": {
    "title": "Jouer à Dragon City Mobile gratuitement – GameZone",
    "description": "Joue à Dragon City Mobile gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Dragon City Mobile – Jeu Arcade Gratuit"
  },
  "1067": {
    "title": "Jouer à Pou gratuitement – GameZone",
    "description": "Joue à Pou gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Pou – Jeu Arcade Gratuit"
  },
  "1068": {
    "title": "Jouer à Tom and Jerry Mouse Maze gratuitement – GameZone",
    "description": "Joue à Tom and Jerry Mouse Maze gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Tom and Jerry Mouse Maze – Jeu Arcade Gratuit"
  },
  "1069": {
    "title": "Jouer à Subway Surfers Paris gratuitement – GameZone",
    "description": "Joue à Subway Surfers Paris gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Subway Surfers Paris – Jeu Arcade Gratuit"
  },
  "1070": {
    "title": "Jouer à Temple Run Oz gratuitement – GameZone",
    "description": "Joue à Temple Run Oz gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Temple Run Oz – Jeu Arcade Gratuit"
  },
  "1071": {
    "title": "Jouer à Hopscotch gratuitement – GameZone",
    "description": "Joue à Hopscotch gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Hopscotch – Jeu Arcade Gratuit"
  },
  "1072": {
    "title": "Jouer à Dizzy Dino Jump gratuitement – GameZone",
    "description": "Joue à Dizzy Dino Jump gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Dizzy Dino Jump – Jeu Arcade Gratuit"
  },
  "1073": {
    "title": "Jouer à Red Ball 4 gratuitement – GameZone",
    "description": "Joue à Red Ball 4 gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Red Ball 4 – Jeu Arcade Gratuit"
  },
  "1074": {
    "title": "Jouer à Donkey Kong gratuitement – GameZone",
    "description": "Joue à Donkey Kong gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Donkey Kong – Jeu Arcade Gratuit"
  },
  "1075": {
    "title": "Jouer à Super Mario Bros gratuitement – GameZone",
    "description": "Joue à Super Mario Bros gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Super Mario Bros – Jeu Arcade Gratuit"
  },
  "1076": {
    "title": "Jouer à Asteroids gratuitement – GameZone",
    "description": "Joue à Asteroids gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Asteroids – Jeu Arcade Gratuit"
  },
  "1077": {
    "title": "Jouer à Galaga gratuitement – GameZone",
    "description": "Joue à Galaga gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Galaga – Jeu Arcade Gratuit"
  },
  "1078": {
    "title": "Jouer à Centipede gratuitement – GameZone",
    "description": "Joue à Centipede gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Centipede – Jeu Arcade Gratuit"
  },
  "1079": {
    "title": "Jouer à Frogger gratuitement – GameZone",
    "description": "Joue à Frogger gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Frogger – Jeu Arcade Gratuit"
  },
  "1080": {
    "title": "Jouer à Q*bert gratuitement – GameZone",
    "description": "Joue à Q*bert gratuitement sur GameZone. Un jeu Arcade addictif accessible directement dans ton navigateur, sans téléchargement.",
    "h1": "Q*bert – Jeu Arcade Gratuit"
  },
  "2001": {
    "title": "Jouer à PUBG Mobile gratuitement – GameZone",
    "description": "Lance-toi dans PUBG Mobile sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "PUBG Mobile – Jeu Battle Royale Gratuit"
  },
  "2002": {
    "title": "Jouer à Free Fire MAX gratuitement – GameZone",
    "description": "Lance-toi dans Free Fire MAX sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Free Fire MAX – Jeu Battle Royale Gratuit"
  },
  "2003": {
    "title": "Jouer à Fortnite Online gratuitement – GameZone",
    "description": "Lance-toi dans Fortnite Online sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Fortnite Online – Jeu Battle Royale Gratuit"
  },
  "2004": {
    "title": "Jouer à Bullet Force gratuitement – GameZone",
    "description": "Lance-toi dans Bullet Force sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Bullet Force – Jeu Battle Royale Gratuit"
  },
  "2005": {
    "title": "Jouer à Surviv.io gratuitement – GameZone",
    "description": "Lance-toi dans Surviv.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Surviv.io – Jeu Battle Royale Gratuit"
  },
  "2006": {
    "title": "Jouer à Warzone Mobile gratuitement – GameZone",
    "description": "Lance-toi dans Warzone Mobile sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Warzone Mobile – Jeu Battle Royale Gratuit"
  },
  "2007": {
    "title": "Jouer à Battlelands Royale gratuitement – GameZone",
    "description": "Lance-toi dans Battlelands Royale sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Battlelands Royale – Jeu Battle Royale Gratuit"
  },
  "2008": {
    "title": "Jouer à Farlight 84 gratuitement – GameZone",
    "description": "Lance-toi dans Farlight 84 sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Farlight 84 – Jeu Battle Royale Gratuit"
  },
  "2009": {
    "title": "Jouer à Apex Legends Mobile gratuitement – GameZone",
    "description": "Lance-toi dans Apex Legends Mobile sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Apex Legends Mobile – Jeu Battle Royale Gratuit"
  },
  "2010": {
    "title": "Jouer à Hunter Assassin 2 gratuitement – GameZone",
    "description": "Lance-toi dans Hunter Assassin 2 sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Hunter Assassin 2 – Jeu Battle Royale Gratuit"
  },
  "2011": {
    "title": "Jouer à Zooba gratuitement – GameZone",
    "description": "Lance-toi dans Zooba sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Zooba – Jeu Battle Royale Gratuit"
  },
  "2012": {
    "title": "Jouer à Super Sus gratuitement – GameZone",
    "description": "Lance-toi dans Super Sus sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Super Sus – Jeu Battle Royale Gratuit"
  },
  "2013": {
    "title": "Jouer à Sigma Battle Royale gratuitement – GameZone",
    "description": "Lance-toi dans Sigma Battle Royale sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Sigma Battle Royale – Jeu Battle Royale Gratuit"
  },
  "2014": {
    "title": "Jouer à Creative Destruction gratuitement – GameZone",
    "description": "Lance-toi dans Creative Destruction sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Creative Destruction – Jeu Battle Royale Gratuit"
  },
  "2015": {
    "title": "Jouer à Cyber Hunter gratuitement – GameZone",
    "description": "Lance-toi dans Cyber Hunter sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Cyber Hunter – Jeu Battle Royale Gratuit"
  },
  "2016": {
    "title": "Jouer à Knives Out gratuitement – GameZone",
    "description": "Lance-toi dans Knives Out sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Knives Out – Jeu Battle Royale Gratuit"
  },
  "2017": {
    "title": "Jouer à Pixel Unknown Battle Ground gratuitement – GameZone",
    "description": "Lance-toi dans Pixel Unknown Battle Ground sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Pixel Unknown Battle Ground – Jeu Battle Royale Gratuit"
  },
  "2018": {
    "title": "Jouer à Rules of Survival gratuitement – GameZone",
    "description": "Lance-toi dans Rules of Survival sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Rules of Survival – Jeu Battle Royale Gratuit"
  },
  "2019": {
    "title": "Jouer à Mini Militia gratuitement – GameZone",
    "description": "Lance-toi dans Mini Militia sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Mini Militia – Jeu Battle Royale Gratuit"
  },
  "2020": {
    "title": "Jouer à Stumble Guys gratuitement – GameZone",
    "description": "Lance-toi dans Stumble Guys sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Stumble Guys – Jeu Battle Royale Gratuit"
  },
  "2021": {
    "title": "Jouer à Fall Guys Online gratuitement – GameZone",
    "description": "Lance-toi dans Fall Guys Online sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Fall Guys Online – Jeu Battle Royale Gratuit"
  },
  "2022": {
    "title": "Jouer à Spellbreak gratuitement – GameZone",
    "description": "Lance-toi dans Spellbreak sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Spellbreak – Jeu Battle Royale Gratuit"
  },
  "2023": {
    "title": "Jouer à Hyper Front gratuitement – GameZone",
    "description": "Lance-toi dans Hyper Front sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Hyper Front – Jeu Battle Royale Gratuit"
  },
  "2024": {
    "title": "Jouer à Gridironheroes gratuitement – GameZone",
    "description": "Lance-toi dans Gridironheroes sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Gridironheroes – Jeu Battle Royale Gratuit"
  },
  "2025": {
    "title": "Jouer à Headshot Online gratuitement – GameZone",
    "description": "Lance-toi dans Headshot Online sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Headshot Online – Jeu Battle Royale Gratuit"
  },
  "2026": {
    "title": "Jouer à Battle Squad gratuitement – GameZone",
    "description": "Lance-toi dans Battle Squad sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Battle Squad – Jeu Battle Royale Gratuit"
  },
  "2027": {
    "title": "Jouer à Royal Battletown gratuitement – GameZone",
    "description": "Lance-toi dans Royal Battletown sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Royal Battletown – Jeu Battle Royale Gratuit"
  },
  "2028": {
    "title": "Jouer à Garena Free Fire gratuitement – GameZone",
    "description": "Lance-toi dans Garena Free Fire sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Garena Free Fire – Jeu Battle Royale Gratuit"
  },
  "2029": {
    "title": "Jouer à Standoff 2 gratuitement – GameZone",
    "description": "Lance-toi dans Standoff 2 sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Standoff 2 – Jeu Battle Royale Gratuit"
  },
  "2030": {
    "title": "Jouer à Zero Day gratuitement – GameZone",
    "description": "Lance-toi dans Zero Day sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Zero Day – Jeu Battle Royale Gratuit"
  },
  "2031": {
    "title": "Jouer à Bravo Stars gratuitement – GameZone",
    "description": "Lance-toi dans Bravo Stars sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Bravo Stars – Jeu Battle Royale Gratuit"
  },
  "2032": {
    "title": "Jouer à Top War gratuitement – GameZone",
    "description": "Lance-toi dans Top War sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Top War – Jeu Battle Royale Gratuit"
  },
  "2033": {
    "title": "Jouer à Rebirth of Chaos gratuitement – GameZone",
    "description": "Lance-toi dans Rebirth of Chaos sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Rebirth of Chaos – Jeu Battle Royale Gratuit"
  },
  "2034": {
    "title": "Jouer à Super Mecha Champions gratuitement – GameZone",
    "description": "Lance-toi dans Super Mecha Champions sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Super Mecha Champions – Jeu Battle Royale Gratuit"
  },
  "2035": {
    "title": "Jouer à Land of Dread gratuitement – GameZone",
    "description": "Lance-toi dans Land of Dread sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Land of Dread – Jeu Battle Royale Gratuit"
  },
  "2036": {
    "title": "Jouer à Dawn of Isles gratuitement – GameZone",
    "description": "Lance-toi dans Dawn of Isles sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Dawn of Isles – Jeu Battle Royale Gratuit"
  },
  "2037": {
    "title": "Jouer à Battlefield Mobile gratuitement – GameZone",
    "description": "Lance-toi dans Battlefield Mobile sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Battlefield Mobile – Jeu Battle Royale Gratuit"
  },
  "2038": {
    "title": "Jouer à CrossFire Legends gratuitement – GameZone",
    "description": "Lance-toi dans CrossFire Legends sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "CrossFire Legends – Jeu Battle Royale Gratuit"
  },
  "2039": {
    "title": "Jouer à Black Desert Mobile gratuitement – GameZone",
    "description": "Lance-toi dans Black Desert Mobile sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Black Desert Mobile – Jeu Battle Royale Gratuit"
  },
  "2040": {
    "title": "Jouer à Last Battleground gratuitement – GameZone",
    "description": "Lance-toi dans Last Battleground sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Last Battleground – Jeu Battle Royale Gratuit"
  },
  "2041": {
    "title": "Jouer à Thetan Arena gratuitement – GameZone",
    "description": "Lance-toi dans Thetan Arena sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Thetan Arena – Jeu Battle Royale Gratuit"
  },
  "2042": {
    "title": "Jouer à Warcraft Rumble gratuitement – GameZone",
    "description": "Lance-toi dans Warcraft Rumble sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Warcraft Rumble – Jeu Battle Royale Gratuit"
  },
  "2043": {
    "title": "Jouer à Survival Heroes gratuitement – GameZone",
    "description": "Lance-toi dans Survival Heroes sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Survival Heroes – Jeu Battle Royale Gratuit"
  },
  "2044": {
    "title": "Jouer à Island War gratuitement – GameZone",
    "description": "Lance-toi dans Island War sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Island War – Jeu Battle Royale Gratuit"
  },
  "2045": {
    "title": "Jouer à Hopeless Land gratuitement – GameZone",
    "description": "Lance-toi dans Hopeless Land sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Hopeless Land – Jeu Battle Royale Gratuit"
  },
  "2046": {
    "title": "Jouer à Grand Battle Royale gratuitement – GameZone",
    "description": "Lance-toi dans Grand Battle Royale sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Grand Battle Royale – Jeu Battle Royale Gratuit"
  },
  "2047": {
    "title": "Jouer à Pixel Combat 2 gratuitement – GameZone",
    "description": "Lance-toi dans Pixel Combat 2 sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Pixel Combat 2 – Jeu Battle Royale Gratuit"
  },
  "2048": {
    "title": "Jouer à Pixel Combat Zombies gratuitement – GameZone",
    "description": "Lance-toi dans Pixel Combat Zombies sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Pixel Combat Zombies – Jeu Battle Royale Gratuit"
  },
  "2049": {
    "title": "Jouer à Dead Trigger 2 gratuitement – GameZone",
    "description": "Lance-toi dans Dead Trigger 2 sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Dead Trigger 2 – Jeu Battle Royale Gratuit"
  },
  "2050": {
    "title": "Jouer à Flat Zombies gratuitement – GameZone",
    "description": "Lance-toi dans Flat Zombies sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Flat Zombies – Jeu Battle Royale Gratuit"
  },
  "2051": {
    "title": "Jouer à Into the Dead 2 gratuitement – GameZone",
    "description": "Lance-toi dans Into the Dead 2 sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Into the Dead 2 – Jeu Battle Royale Gratuit"
  },
  "2052": {
    "title": "Jouer à State of Survival gratuitement – GameZone",
    "description": "Lance-toi dans State of Survival sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "State of Survival – Jeu Battle Royale Gratuit"
  },
  "2053": {
    "title": "Jouer à Zero City gratuitement – GameZone",
    "description": "Lance-toi dans Zero City sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Zero City – Jeu Battle Royale Gratuit"
  },
  "2054": {
    "title": "Jouer à Survival City gratuitement – GameZone",
    "description": "Lance-toi dans Survival City sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Survival City – Jeu Battle Royale Gratuit"
  },
  "2055": {
    "title": "Jouer à Alienware Zone gratuitement – GameZone",
    "description": "Lance-toi dans Alienware Zone sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Alienware Zone – Jeu Battle Royale Gratuit"
  },
  "2056": {
    "title": "Jouer à Clash Royale gratuitement – GameZone",
    "description": "Lance-toi dans Clash Royale sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Clash Royale – Jeu Battle Royale Gratuit"
  },
  "2057": {
    "title": "Jouer à Crown Rush Royale gratuitement – GameZone",
    "description": "Lance-toi dans Crown Rush Royale sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Crown Rush Royale – Jeu Battle Royale Gratuit"
  },
  "2058": {
    "title": "Jouer à Squad Alpha gratuitement – GameZone",
    "description": "Lance-toi dans Squad Alpha sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Squad Alpha – Jeu Battle Royale Gratuit"
  },
  "2059": {
    "title": "Jouer à Last Day on Earth gratuitement – GameZone",
    "description": "Lance-toi dans Last Day on Earth sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Last Day on Earth – Jeu Battle Royale Gratuit"
  },
  "2060": {
    "title": "Jouer à Boom Beach gratuitement – GameZone",
    "description": "Lance-toi dans Boom Beach sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Boom Beach – Jeu Battle Royale Gratuit"
  },
  "2061": {
    "title": "Jouer à Shell Shockers gratuitement – GameZone",
    "description": "Lance-toi dans Shell Shockers sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Shell Shockers – Jeu Battle Royale Gratuit"
  },
  "2062": {
    "title": "Jouer à Yohoho.io gratuitement – GameZone",
    "description": "Lance-toi dans Yohoho.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Yohoho.io – Jeu Battle Royale Gratuit"
  },
  "2063": {
    "title": "Jouer à Brutes.io gratuitement – GameZone",
    "description": "Lance-toi dans Brutes.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Brutes.io – Jeu Battle Royale Gratuit"
  },
  "2064": {
    "title": "Jouer à Starve.io gratuitement – GameZone",
    "description": "Lance-toi dans Starve.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Starve.io – Jeu Battle Royale Gratuit"
  },
  "2065": {
    "title": "Jouer à Mope.io gratuitement – GameZone",
    "description": "Lance-toi dans Mope.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Mope.io – Jeu Battle Royale Gratuit"
  },
  "2066": {
    "title": "Jouer à Wings.io gratuitement – GameZone",
    "description": "Lance-toi dans Wings.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Wings.io – Jeu Battle Royale Gratuit"
  },
  "2067": {
    "title": "Jouer à Warbot.io gratuitement – GameZone",
    "description": "Lance-toi dans Warbot.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Warbot.io – Jeu Battle Royale Gratuit"
  },
  "2068": {
    "title": "Jouer à Kirka.io gratuitement – GameZone",
    "description": "Lance-toi dans Kirka.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Kirka.io – Jeu Battle Royale Gratuit"
  },
  "2069": {
    "title": "Jouer à Venge.io gratuitement – GameZone",
    "description": "Lance-toi dans Venge.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Venge.io – Jeu Battle Royale Gratuit"
  },
  "2070": {
    "title": "Jouer à Warscrap.io gratuitement – GameZone",
    "description": "Lance-toi dans Warscrap.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Warscrap.io – Jeu Battle Royale Gratuit"
  },
  "2071": {
    "title": "Jouer à Territorial.io gratuitement – GameZone",
    "description": "Lance-toi dans Territorial.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Territorial.io – Jeu Battle Royale Gratuit"
  },
  "2072": {
    "title": "Jouer à BuildRoyale.io gratuitement – GameZone",
    "description": "Lance-toi dans BuildRoyale.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "BuildRoyale.io – Jeu Battle Royale Gratuit"
  },
  "2073": {
    "title": "Jouer à Crazycraft.io gratuitement – GameZone",
    "description": "Lance-toi dans Crazycraft.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Crazycraft.io – Jeu Battle Royale Gratuit"
  },
  "2074": {
    "title": "Jouer à Fightz.io gratuitement – GameZone",
    "description": "Lance-toi dans Fightz.io sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Fightz.io – Jeu Battle Royale Gratuit"
  },
  "2075": {
    "title": "Jouer à Tanki Online gratuitement – GameZone",
    "description": "Lance-toi dans Tanki Online sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Tanki Online – Jeu Battle Royale Gratuit"
  },
  "2076": {
    "title": "Jouer à War Thunder gratuitement – GameZone",
    "description": "Lance-toi dans War Thunder sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "War Thunder – Jeu Battle Royale Gratuit"
  },
  "2077": {
    "title": "Jouer à World of Tanks Blitz gratuitement – GameZone",
    "description": "Lance-toi dans World of Tanks Blitz sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "World of Tanks Blitz – Jeu Battle Royale Gratuit"
  },
  "2078": {
    "title": "Jouer à Battalion Commander gratuitement – GameZone",
    "description": "Lance-toi dans Battalion Commander sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Battalion Commander – Jeu Battle Royale Gratuit"
  },
  "2079": {
    "title": "Jouer à Raid Shadow Legends gratuitement – GameZone",
    "description": "Lance-toi dans Raid Shadow Legends sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Raid Shadow Legends – Jeu Battle Royale Gratuit"
  },
  "2080": {
    "title": "Jouer à Arena of Valor gratuitement – GameZone",
    "description": "Lance-toi dans Arena of Valor sur GameZone. Affronte des joueurs du monde entier dans ce Battle Royale gratuit, sans téléchargement.",
    "h1": "Arena of Valor – Jeu Battle Royale Gratuit"
  },
  "4041": {
    "title": "Jouer à Infinite Craft gratuitement – GameZone",
    "description": "Explore Infinite Craft gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Infinite Craft – Jeu Sandbox Gratuit"
  },
  "4042": {
    "title": "Jouer à Build Now GG gratuitement – GameZone",
    "description": "Explore Build Now GG gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Build Now GG – Jeu Sandbox Gratuit"
  },
  "4043": {
    "title": "Jouer à Sandbox Evolution gratuitement – GameZone",
    "description": "Explore Sandbox Evolution gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Sandbox Evolution – Jeu Sandbox Gratuit"
  },
  "4044": {
    "title": "Jouer à Sandbox World Creator gratuitement – GameZone",
    "description": "Explore Sandbox World Creator gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Sandbox World Creator – Jeu Sandbox Gratuit"
  },
  "4045": {
    "title": "Jouer à Minecraft Earth gratuitement – GameZone",
    "description": "Explore Minecraft Earth gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Minecraft Earth – Jeu Sandbox Gratuit"
  },
  "4046": {
    "title": "Jouer à Block Craft 3D gratuitement – GameZone",
    "description": "Explore Block Craft 3D gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Block Craft 3D – Jeu Sandbox Gratuit"
  },
  "4047": {
    "title": "Jouer à Cubic Castles gratuitement – GameZone",
    "description": "Explore Cubic Castles gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Cubic Castles – Jeu Sandbox Gratuit"
  },
  "4048": {
    "title": "Jouer à Minetest gratuitement – GameZone",
    "description": "Explore Minetest gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Minetest – Jeu Sandbox Gratuit"
  },
  "4049": {
    "title": "Jouer à Creative Block gratuitement – GameZone",
    "description": "Explore Creative Block gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Creative Block – Jeu Sandbox Gratuit"
  },
  "4050": {
    "title": "Jouer à Lego Worlds gratuitement – GameZone",
    "description": "Explore Lego Worlds gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Lego Worlds – Jeu Sandbox Gratuit"
  },
  "4051": {
    "title": "Jouer à Lego Marvel Super Heroes gratuitement – GameZone",
    "description": "Explore Lego Marvel Super Heroes gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Lego Marvel Super Heroes – Jeu Sandbox Gratuit"
  },
  "4052": {
    "title": "Jouer à My World gratuitement – GameZone",
    "description": "Explore My World gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "My World – Jeu Sandbox Gratuit"
  },
  "4053": {
    "title": "Jouer à Dig to China gratuitement – GameZone",
    "description": "Explore Dig to China gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Dig to China – Jeu Sandbox Gratuit"
  },
  "4054": {
    "title": "Jouer à Digging Game gratuitement – GameZone",
    "description": "Explore Digging Game gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Digging Game – Jeu Sandbox Gratuit"
  },
  "4055": {
    "title": "Jouer à Motherload gratuitement – GameZone",
    "description": "Explore Motherload gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Motherload – Jeu Sandbox Gratuit"
  },
  "4056": {
    "title": "Jouer à Clicker Heroes gratuitement – GameZone",
    "description": "Explore Clicker Heroes gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Clicker Heroes – Jeu Sandbox Gratuit"
  },
  "4057": {
    "title": "Jouer à Adventure Capitalist gratuitement – GameZone",
    "description": "Explore Adventure Capitalist gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Adventure Capitalist – Jeu Sandbox Gratuit"
  },
  "4058": {
    "title": "Jouer à Realm Grinder gratuitement – GameZone",
    "description": "Explore Realm Grinder gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Realm Grinder – Jeu Sandbox Gratuit"
  },
  "4059": {
    "title": "Jouer à Candy Box 2 gratuitement – GameZone",
    "description": "Explore Candy Box 2 gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Candy Box 2 – Jeu Sandbox Gratuit"
  },
  "4060": {
    "title": "Jouer à Universal Paperclips gratuitement – GameZone",
    "description": "Explore Universal Paperclips gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Universal Paperclips – Jeu Sandbox Gratuit"
  },
  "4061": {
    "title": "Jouer à Kittens Game gratuitement – GameZone",
    "description": "Explore Kittens Game gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Kittens Game – Jeu Sandbox Gratuit"
  },
  "4062": {
    "title": "Jouer à Spaceplan gratuitement – GameZone",
    "description": "Explore Spaceplan gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Spaceplan – Jeu Sandbox Gratuit"
  },
  "4063": {
    "title": "Jouer à Evolve Idle gratuitement – GameZone",
    "description": "Explore Evolve Idle gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Evolve Idle – Jeu Sandbox Gratuit"
  },
  "4064": {
    "title": "Jouer à Paperclip Factory gratuitement – GameZone",
    "description": "Explore Paperclip Factory gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Paperclip Factory – Jeu Sandbox Gratuit"
  },
  "4065": {
    "title": "Jouer à Grow Valley gratuitement – GameZone",
    "description": "Explore Grow Valley gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Grow Valley – Jeu Sandbox Gratuit"
  },
  "4066": {
    "title": "Jouer à Grow Island gratuitement – GameZone",
    "description": "Explore Grow Island gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Grow Island – Jeu Sandbox Gratuit"
  },
  "4067": {
    "title": "Jouer à Grow Tower gratuitement – GameZone",
    "description": "Explore Grow Tower gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Grow Tower – Jeu Sandbox Gratuit"
  },
  "4068": {
    "title": "Jouer à My Aquarium gratuitement – GameZone",
    "description": "Explore My Aquarium gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "My Aquarium – Jeu Sandbox Gratuit"
  },
  "4069": {
    "title": "Jouer à Fish World gratuitement – GameZone",
    "description": "Explore Fish World gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Fish World – Jeu Sandbox Gratuit"
  },
  "4070": {
    "title": "Jouer à Dragon Cave gratuitement – GameZone",
    "description": "Explore Dragon Cave gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Dragon Cave – Jeu Sandbox Gratuit"
  },
  "4071": {
    "title": "Jouer à My Colony gratuitement – GameZone",
    "description": "Explore My Colony gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "My Colony – Jeu Sandbox Gratuit"
  },
  "4072": {
    "title": "Jouer à Space Settlers gratuitement – GameZone",
    "description": "Explore Space Settlers gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Space Settlers – Jeu Sandbox Gratuit"
  },
  "4073": {
    "title": "Jouer à Colonist.io gratuitement – GameZone",
    "description": "Explore Colonist.io gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Colonist.io – Jeu Sandbox Gratuit"
  },
  "4074": {
    "title": "Jouer à Catan Universe gratuitement – GameZone",
    "description": "Explore Catan Universe gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Catan Universe – Jeu Sandbox Gratuit"
  },
  "4075": {
    "title": "Jouer à Poly Bridge gratuitement – GameZone",
    "description": "Explore Poly Bridge gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Poly Bridge – Jeu Sandbox Gratuit"
  },
  "4076": {
    "title": "Jouer à Crayon Physics Deluxe gratuitement – GameZone",
    "description": "Explore Crayon Physics Deluxe gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Crayon Physics Deluxe – Jeu Sandbox Gratuit"
  },
  "4077": {
    "title": "Jouer à World Of Sand gratuitement – GameZone",
    "description": "Explore World Of Sand gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "World Of Sand – Jeu Sandbox Gratuit"
  },
  "4078": {
    "title": "Jouer à The Powder Toy gratuitement – GameZone",
    "description": "Explore The Powder Toy gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "The Powder Toy – Jeu Sandbox Gratuit"
  },
  "4079": {
    "title": "Jouer à Sand Tetris gratuitement – GameZone",
    "description": "Explore Sand Tetris gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Sand Tetris – Jeu Sandbox Gratuit"
  },
  "4080": {
    "title": "Jouer à Guts and Glory gratuitement – GameZone",
    "description": "Explore Guts and Glory gratuitement sur GameZone. Laisse libre cours à ta créativité dans ce jeu Sandbox jouable en ligne.",
    "h1": "Guts and Glory – Jeu Sandbox Gratuit"
  }
};*/

// Injection automatique sur game.html
(function() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id || !SEO_GAMES[id]) return;
  const meta = SEO_GAMES[id];

  // Title
  document.title = meta.title;

  // Meta description
  let desc = document.querySelector('meta[name="description"]');
  if (!desc) {
    desc = document.createElement('meta');
    desc.setAttribute('name', 'description');
    document.head.appendChild(desc);
  }
  desc.setAttribute('content', meta.description);

  // H1 visible
  const h1 = document.getElementById('game-title-h1');
  if (h1 && h1.textContent === 'Chargement...') {
    h1.textContent = meta.h1;
  }
    const p = document.getElementById('game-description');
    if (p) p.textContent = meta.description;
})();
