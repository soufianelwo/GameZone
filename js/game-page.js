// Read game id from URL: /game/<slug>/
// The page path is either /game/<slug>/ or /en/game/<slug>/.
function slugifygame(title) {
    return title
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

const isEnglishPage = window.location.pathname.startsWith('/en/');
const slug = window.location.pathname.replace(isEnglishPage ? '/en/game/' : '/game/', '').replace(/\//g, '');
const game = GAMES.find(g => slugifygame(g.title) === slug);
const gameId = game ? game.id : null;

function getStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= Math.round(rating) ? 'full' : 'empty'}">★</span>`;
  }
  return html;
}

function formatPlays(n) {
  return n >= 1000 ? (n / 1000).toFixed(0) + 'K' : n;
}

const i18n = {
  titleSuffix: isEnglishPage ? 'Free Games' : 'Jeux gratuits',
  countLabel: isEnglishPage ? 'plays' : 'parties',
  notFound: isEnglishPage ? 'Game not found' : 'Jeu introuvable',
  cardPathPrefix: isEnglishPage ? '/en/game/' : '/game/'
};

if (game) {
  document.title = `${game.title} – ${i18n.titleSuffix}`;
  document.getElementById('page-title').textContent = `${game.title} – ${i18n.titleSuffix}`;
  document.getElementById('game-title-h1').textContent = game.title;
  document.getElementById('game-category-badge').textContent = game.category;
  document.getElementById('game-stars-bar').innerHTML = getStars(game.rating) + ` <span style="color:var(--text-muted);font-size:.8rem;margin-left:4px">${game.rating}</span>`;
  document.getElementById('game-plays-count').textContent = `🎮 ${formatPlays(game.plays)} ${i18n.countLabel}`;
  document.getElementById('game-iframe').src = game.iframe;
} else {
  document.getElementById('game-title-h1').textContent = i18n.notFound;
}

function shuffled(arr) {
  return [...arr].sort(() => Math.random() - .5);
}

function buildSidebarCards(containerId, games) {
  const container = document.getElementById(containerId);
  games.forEach(g => {
    const a = document.createElement('a');
    const thumb = g.thumb.replace('/game', '');
    a.className = 'sb-card';
    a.href = `${i18n.cardPathPrefix}${slugifygame(g.title)}`;
    a.title = g.title;
    a.innerHTML = `
      <img src="/${thumb}" alt="${g.title}" loading="lazy" onerror="this.src='/images/placeholder.svg'">
      <div class="sb-card-name">${g.title}</div>
    `;
    container.appendChild(a);
  });
}

const others = GAMES.filter(g => g.id !== gameId);

const sameCat = game ? others.filter(g => g.category === game.category) : [];
const diff = others.filter(g => !sameCat.includes(g));
const youMayLike = [...shuffled(sameCat), ...shuffled(diff)].slice(0, 9);
buildSidebarCards('you-may-like', youMayLike);

const trending = [...others].sort((a, b) => b.plays - a.plays).slice(0, 9);
buildSidebarCards('trending', trending);

document.getElementById('fullscreen-btn').addEventListener('click', () => {
  const wrap = document.querySelector('.game-frame-wrap');
  if (wrap.requestFullscreen) wrap.requestFullscreen();
  else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
});
