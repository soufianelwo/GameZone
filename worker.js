export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Page d'accueil
        if (url.pathname === '/' || url.pathname === '') {
            return env.ASSETS.fetch(
                new Request('https://assets.local/index.html', request)
            );
        }

        // Pages jeux : /game/mahjong  /game/index.html
        if (
            url.pathname.startsWith('/game/') &&
            url.pathname !== '/game/' &&
            !url.pathname.match(/\.[a-zA-Z0-9]+$/)
        ) {
            return env.ASSETS.fetch(
                new Request('https://assets.local/game/index.html', request)
            );
        }

        // Tout le reste comportement normal
        return env.ASSETS.fetch(request);
    }
}