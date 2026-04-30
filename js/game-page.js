// Read game id from URL: game.html?id=5
const params = new URLSearchParams(window.location.search);
const gameId = parseInt(params.get('id'));
const game = GAMES.find(g => g.id === gameId);

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

if (game) {
  // Meta
  document.title = `${game.title} – GameZone`;
  document.getElementById('page-title').textContent = `${game.title} – GameZone`;
  document.getElementById('game-title-h1').textContent = game.title;
  document.getElementById('game-category-badge').textContent = game.category;
  document.getElementById('game-stars-bar').innerHTML = getStars(game.rating) + ` <span style="color:var(--text-muted);font-size:.8rem;margin-left:4px">${game.rating}</span>`;
  document.getElementById('game-plays-count').textContent = `🎮 ${formatPlays(game.plays)} parties`;
  document.getElementById('game-iframe').src = game.iframe;
} else {
  document.getElementById('game-title-h1').textContent = 'Jeu introuvable';
}

// Sidebar: shuffle others
function shuffled(arr) {
  return [...arr].sort(() => Math.random() - .5);
}

function buildSidebarCards(containerId, games) {
  const container = document.getElementById(containerId);
  games.forEach(g => {
    const a = document.createElement('a');
    a.className = 'sb-card';
    a.href = `game.html?id=${g.id}`;
    a.title = g.title;
    a.innerHTML = `
      <img src="${g.thumb}" alt="${g.title}" loading="lazy" onerror="this.src='images/placeholder.svg'">
      <div class="sb-card-name">${g.title}</div>
    `;
    container.appendChild(a);
  });
}

const others = GAMES.filter(g => g.id !== gameId);
const shuffledOthers = shuffled(others);

// "You may like" – same category first, then fill
const sameCat = game ? others.filter(g => g.category === game.category) : [];
const diff = others.filter(g => !sameCat.includes(g));
const youMayLike = [...shuffled(sameCat), ...shuffled(diff)].slice(0, 9);
buildSidebarCards('you-may-like', youMayLike);

// "Trending" – highest plays
const trending = [...others].sort((a, b) => b.plays - a.plays).slice(0, 9);
buildSidebarCards('trending', trending);

// Fullscreen button
document.getElementById('fullscreen-btn').addEventListener('click', () => {
  const wrap = document.querySelector('.game-frame-wrap');
  if (wrap.requestFullscreen) wrap.requestFullscreen();
  else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
});
