export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Si l'URL est /game/quelquechose (pas un fichier avec extension)
        if (
            url.pathname.startsWith('/game/') &&
            url.pathname !== '/game/' &&
            !url.pathname.match(/\.[a-zA-Z0-9]+$/)
        ) {
            // Sert /game/index.html via le binding ASSETS
            return env.ASSETS.fetch(
                new Request('https://assets.local/game/index.html', request)
            );
        }

        // Tout le reste  comportement normal
        return env.ASSETS.fetch(request);
    }
}