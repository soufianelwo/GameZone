export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Pages jeux : /game/mahjong  /game/index.html
        if (
            path.startsWith('/game/') &&
            path !== '/game/' &&
            !path.match(/\.[a-zA-Z0-9]+$/)
        ) {
            return env.ASSETS.fetch(
                new Request('https://assets.local/game/index.html', request)
            );
        }

        // Tout le reste  comportement normal
        return env.ASSETS.fetch(request);
    }
}