const GAMES = [];

const maxLen = Math.max(
    GAMES_ACTION.length,
    GAMES_ARCADE.length,
    GAMES_BATTLEROYALE.length,
    GAMES_IDLE.length,
    GAMES_MULTIPLAYER.length,
    GAMES_PUZZLE.length,
    GAMES_SANDBOX.length,
    GAMES_SPORTS.length,
    );

    for (let i = 0; i < maxLen; i++) {
        if (i < GAMES_ACTION.length) GAMES.push(GAMES_ACTION[i]);
        if (i < GAMES_ARCADE.length) GAMES.push(GAMES_ARCADE[i]);
        if (i < GAMES_BATTLEROYALE.length) GAMES.push(GAMES_BATTLEROYALE[i]);
        if (i < GAMES_IDLE.length) GAMES.push(GAMES_IDLE[i]);

        if (i < GAMES_PUZZLE.length) GAMES.push(GAMES_PUZZLE[i]);
        if (i < GAMES_SANDBOX.length) GAMES.push(GAMES_SANDBOX[i]);
        if (i < GAMES_MULTIPLAYER.length) GAMES.push(GAMES_MULTIPLAYER[i]);

        if (i < GAMES_SPORTS.length) GAMES.push(GAMES_SPORTS[i]);
    }
const GAMES_PER_PAGE = 16;
const TOTAL_PAGES = Math.ceil(GAMES.length / GAMES_PER_PAGE);