(function(){
  function qs(sel,root=document){return root.querySelector(sel)}
  function qsa(sel,root=document){return Array.from(root.querySelectorAll(sel))}

  function init() {
    const grid = qs('#games-grid');
    if(!grid) return;

    // Hide stray cards outside the grid (malformed HTML safety)
    const allCards = qsa('.game-card');
    const gridCards = allCards.filter(el => grid.contains(el));
    allCards.filter(el => !grid.contains(el)).forEach(el => { el.style.display = 'none'; el.classList.remove('visible'); });

    const cards = gridCards.map(el => ({
      el,
      title: (qs('.card-title', el) || {}).textContent || '',
      category: ((qs('.card-category', el) || {}).textContent || '').trim()
    }));

    const search = qs('#search-input');
    const catFilter = qs('#category-filter');
    const countEl = qs('#game-count');

    // Populate category filter from cards
    if(catFilter){
      const cats = Array.from(new Set(cards.map(c => c.category))).filter(Boolean).sort();
      while(catFilter.options.length > 1) catFilter.remove(1);
      cats.forEach(cat => {
        const o = document.createElement('option'); o.value = cat; o.textContent = cat; catFilter.appendChild(o);
      });
    }

    // Hide pagination elements
    const pager = qs('#pagination');
    if(pager) pager.style.display = 'none';
    const pagerControls = qs('#pagination-controls');
    if(pagerControls) pagerControls.style.display = 'none';

    let state = { q: '', category: '' };

    function applyFilters(){
      const q = state.q.toLowerCase().trim();
      const cat = state.category;
      const filtered = cards.filter(c => {
        if(cat && c.category !== cat) return false;
        if(q && c.title.toLowerCase().indexOf(q) === -1) return false;
        return true;
      });
      cards.forEach(c => { c.el.style.display = 'none'; c.el.classList.remove('visible'); });
      filtered.forEach(c => { c.el.style.display = 'block'; c.el.classList.add('visible'); });
      if(countEl) countEl.textContent = filtered.length;
    }

    function debounce(fn, wait){ let t; return function(...a){ clearTimeout(t); t = setTimeout(() => fn.apply(this, a), wait); } }

    if(search){
      search.addEventListener('input', debounce((e) => { state.q = e.target.value; applyFilters(); }, 200));
    }
    if(catFilter){
      catFilter.addEventListener('change', (e) => { state.category = e.target.value; applyFilters(); });
    }

    applyFilters();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
