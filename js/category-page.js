(function () {
    const CATEGORY = document.body.dataset.category;
    if (!CATEGORY) {
        console.error('[category-page.js] Ajoute data-category="..." sur le <body>.');
        return;
    }

    const GAMES_PER_PAGE = 16;

    const JS_FILES = [
        'js/aa_action_games.js',
        'js/aa_arcade_games.js',
        'js/aa_battleroyale_games.js',
        'js/aa_puzzle_games.js',
        'js/aa_sports_games.js',
        'js/games.js',
    ];

    function loadScripts(files, onAllLoaded) {
        if (files.length === 0) { onAllLoaded(); return; }
        const script = document.createElement('script');
        script.src = files[0];
        script.onload = function () { loadScripts(files.slice(1), onAllLoaded); };
        script.onerror = function () {
            console.warn('[category-page.js] Impossible de charger : ' + files[0]);
            loadScripts(files.slice(1), onAllLoaded);
        };
        document.head.appendChild(script);
    }

    // ── Met à jour la nav comme app.js le fait sur index.html ──────────────
    function buildNav() {
        const headerNav = document.querySelector('.header-nav');
        if (!headerNav) return;

        // Récupère les catégories uniques depuis GAMES (même source que index.html)
        const cats = [...new Set(GAMES.map(g => g.category))].sort();
        const categories = [{ name: 'Tous les jeux', value: '' }, ...cats.map(c => ({ name: c, value: c }))];

        headerNav.innerHTML = '';
        categories.forEach(cat => {
            const a = document.createElement('a');
            a.href      = cat.value === '' ? 'index.html' : cat.value.toLowerCase().replace(' ', '') + '.html';
            a.className = 'nav-link' + (cat.value === CATEGORY ? ' active' : '');
            a.textContent = cat.name;
            headerNav.appendChild(a);
        });
    }

    // ── Rendu des jeux ──────────────────────────────────────────────────────
    function init() {
        buildNav();

        const ALL = GAMES.filter(g => g.category === CATEGORY);
        let currentPage = 1;

        const grid        = document.getElementById('games-grid');
        const pagEl       = document.getElementById('pagination');
        const countEl     = document.getElementById('game-count');
        const pageInfoEl  = document.getElementById('page-info');
        const searchInput = document.getElementById('search-input');

        function formatPlays(n) {
            return n >= 1000 ? (n / 1000).toFixed(0) + 'K' : n.toString();
        }

        function getStars(rating) {
            let html = '';
            for (let i = 1; i <= 5; i++) {
                html += '<span class="star ' + (i <= Math.round(rating) ? 'full' : 'empty') + '">★</span>';
            }
            return html;
        }

        function getFiltered() {
            const q = searchInput.value.trim().toLowerCase();
            return q ? ALL.filter(g => g.title.toLowerCase().includes(q)) : ALL;
        }

        function renderGames() {
            const filtered   = getFiltered();
            const total      = filtered.length;
            const totalPages = Math.ceil(total / GAMES_PER_PAGE) || 1;
            if (currentPage > totalPages) currentPage = 1;

            const start     = (currentPage - 1) * GAMES_PER_PAGE;
            const pageGames = filtered.slice(start, start + GAMES_PER_PAGE);

            countEl.textContent    = total;
            pageInfoEl.textContent = 'Page ' + currentPage + ' sur ' + totalPages;
            grid.innerHTML = '';

            if (pageGames.length === 0) {
                grid.innerHTML = '<div class="no-results">Aucun jeu trouvé. Essaie une autre recherche.</div>';
                pagEl.innerHTML = '';
                return;
            }

            pageGames.forEach(function (game, idx) {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML =
                    '<div class="card-thumb">' +
                        '<img src="' + game.thumb + '" alt="' + game.title + '" loading="lazy" onerror="this.src=\'images/placeholder.svg\'">' +
                        '<div class="card-overlay"><button class="play-btn">▶ Jouer</button></div>' +
                        '<span class="card-category">' + game.category + '</span>' +
                    '</div>' +
                    '<div class="card-info">' +
                        '<h3 class="card-title">' + game.title + '</h3>' +
                        '<div class="card-meta">' +
                            '<div class="card-stars">' + getStars(game.rating) + ' <span class="rating-num">' + game.rating + '</span></div>' +
                            '<span class="card-plays">🎮 ' + formatPlays(game.plays) + '</span>' +
                        '</div>' +
                    '</div>';
                card.addEventListener('click', function () {
                    window.location.href = 'game.html?id=' + game.id;
                });
                grid.appendChild(card);
                requestAnimationFrame(function () {
                    setTimeout(function () { card.classList.add('visible'); }, idx * 28);
                });
            });

            renderPagination(totalPages);
        }

        function renderPagination(total) {
            pagEl.innerHTML = '';
            if (total <= 1) return;

            function addBtn(label, page, disabled, active) {
                const btn = document.createElement('button');
                btn.className = 'page-btn' + (active ? ' active' : '') + (disabled ? ' disabled' : '');
                btn.textContent = label;
                btn.disabled = disabled;
                btn.addEventListener('click', function () {
                    if (!disabled && page !== currentPage) {
                        currentPage = page;
                        renderGames();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
                pagEl.appendChild(btn);
            }

            var pages = [];
            if (total <= 7) {
                pages = Array.from({ length: total }, function (_, i) { return i + 1; });
            } else {
                pages.push(1);
                if (currentPage > 3) pages.push('...');
                for (var i = Math.max(2, currentPage - 1); i <= Math.min(total - 1, currentPage + 1); i++) pages.push(i);
                if (currentPage < total - 2) pages.push('...');
                pages.push(total);
            }

            addBtn('‹', currentPage - 1, currentPage === 1, false);
            pages.forEach(function (p) {
                if (p === '...') {
                    var dots = document.createElement('span');
                    dots.className = 'page-dots';
                    dots.textContent = '...';
                    pagEl.appendChild(dots);
                } else {
                    addBtn(p, p, false, p === currentPage);
                }
            });
            addBtn('›', currentPage + 1, currentPage === total, false);
        }

        searchInput.addEventListener('input', function () { currentPage = 1; renderGames(); });
        renderGames();
    }

    loadScripts(JS_FILES, init);
})();
