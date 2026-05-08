export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Pages jeux : /game/mahjong  /game/index.html
        if (
            path.startsWith('/game/') &&
            path !== '/game/' &&
            path !== '/game/index.html' &&
            !path.match(/\.[a-zA-Z0-9]+$/)
        ) {
            const newRequest = new Request(
                'https://assets.local/game/index.html',
                {
                    method: request.method,
                    headers: request.headers
                }
            );
            return env.ASSETS.fetch(newRequest);
        }

        return env.ASSETS.fetch(request);
    }
}