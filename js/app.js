// --- State ---
let currentPage = 1;

// --- DOM refs ---
const grid = document.getElementById('games-grid');
const paginationEl = document.getElementById('pagination');
const countEl = document.getElementById('game-count');
const pageInfoEl = document.getElementById('page-info');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

// --- Helpers ---
function formatPlays(n) {
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

function getStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= Math.round(rating) ? 'full' : 'empty'}">★</span>`;
  }
  return html;
}

function getFilteredGames() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  return GAMES.filter(g => {
    const matchQ = !q || g.title.toLowerCase().includes(q) || g.category.toLowerCase().includes(q);
    const matchCat = !cat || g.category === cat;
    return matchQ && matchCat;
  });
}

function populateCategories() {
  const cats = [...new Set(GAMES.map(g => g.category))].sort();
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    categoryFilter.appendChild(opt);
  });
}

// --- Render ---
function renderGames() {
  const filtered = getFilteredGames();
  const totalFiltered = filtered.length;
  const totalPagesFiltered = Math.ceil(totalFiltered / GAMES_PER_PAGE);
  if (currentPage > totalPagesFiltered) currentPage = 1;

  const start = (currentPage - 1) * GAMES_PER_PAGE;
  const pageGames = filtered.slice(start, start + GAMES_PER_PAGE);

  countEl.textContent = totalFiltered;
  pageInfoEl.textContent = `Page ${currentPage} sur ${totalPagesFiltered || 1}`;

  grid.innerHTML = '';

  if (pageGames.length === 0) {
    grid.innerHTML = '<div class="no-results">Aucun jeu trouvé. Essaie une autre recherche.</div>';
    paginationEl.innerHTML = '';
    return;
  }

  pageGames.forEach((game, idx) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="card-thumb">
        <img src="${game.thumb}" alt="${game.title}" loading="lazy" onerror="this.src='images/placeholder.svg'">
        <div class="card-overlay">
          <button class="play-btn" aria-label="Jouer à ${game.title}">▶ Jouer</button>
        </div>
        <span class="card-category">${game.category}</span>
      </div>
      <div class="card-info">
        <h3 class="card-title">${game.title}</h3>
        <div class="card-meta">
          <div class="card-stars">${getStars(game.rating)} <span class="rating-num">${game.rating}</span></div>
          <span class="card-plays">🎮 ${formatPlays(game.plays)}</span>
        </div>
      </div>
    `;
    // Open in new tab
    card.addEventListener('click', () => {
      window.open(`game.html?id=${game.id}`, '_blank');
    });
    grid.appendChild(card);

    // Stagger animation
    requestAnimationFrame(() => {
      setTimeout(() => card.classList.add('visible'), idx * 28);
    });
  });

  renderPagination(totalPagesFiltered);
}

function renderPagination(total) {
  paginationEl.innerHTML = '';
  if (total <= 1) return;

  const addBtn = (label, page, disabled = false, active = false) => {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (active ? ' active' : '') + (disabled ? ' disabled' : '');
    btn.textContent = label;
    btn.disabled = disabled;
    btn.addEventListener('click', () => {
      if (!disabled && page !== currentPage) {
        currentPage = page;
        renderGames();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    paginationEl.appendChild(btn);
  };

  addBtn('‹', currentPage - 1, currentPage === 1);

  let pages = [];
  if (total <= 7) {
    pages = Array.from({ length: total }, (_, i) => i + 1);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(total - 1, currentPage + 1); i++) pages.push(i);
    if (currentPage < total - 2) pages.push('...');
    pages.push(total);
  }

  pages.forEach(p => {
    if (p === '...') {
      const dots = document.createElement('span');
      dots.className = 'page-dots';
      dots.textContent = '...';
      paginationEl.appendChild(dots);
    } else {
      addBtn(p, p, false, p === currentPage);
    }
  });

  addBtn('›', currentPage + 1, currentPage === total);
}

// --- Search/Filter ---
searchInput.addEventListener('input', () => { currentPage = 1; renderGames(); });
categoryFilter.addEventListener('change', () => { currentPage = 1; renderGames(); });

// --- Init ---
populateCategories();
renderGames();
