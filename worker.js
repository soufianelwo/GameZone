export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Si l'URL commence par /game/ et n'est pas un fichier
        if (url.pathname.startsWith('/game/') &&
            !url.pathname.endsWith('.js') &&
            !url.pathname.endsWith('.css') &&
            url.pathname !== '/game/') {

            // Sert /game/index.html
            const newUrl = new URL(request.url);
            newUrl.pathname = '/game/index.html';
            return env.ASSETS.fetch(new Request(newUrl, request));
        }

        // Pour tout le reste, comportement normal
        return env.ASSETS.fetch(request);
    }
}