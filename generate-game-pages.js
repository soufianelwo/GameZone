const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname);
const siteUrl = 'https://www.jeuxgratuis.com';

function slugify(title) {
  return title
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlAttr(value) {
  return escapeHtml(value).replace(/"/g, '&quot;');
}

function determinePlayMode(game) {
  const category = (game.category || '').toLowerCase();
  const title = (game.title || '').toLowerCase();
  if (category.includes('multiplayer') || category.includes('battle royale') || title.includes('.io') || title.includes('party')) {
    return 'MultiPlayer';
  }
  return 'SinglePlayer';
}

function buildJsonLd(game, lang, pageUrl, title, description, image) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: title,
    url: pageUrl,
    image,
    description,
    applicationCategory: 'Game',
    genre: game.category || undefined,
    inLanguage: lang === 'en' ? 'English' : 'French',
    isFamilyFriendly: true,
    gamePlatform: ['WebBrowser'],
    contentRating: 'Everyone',
    publisher: {
      '@type': 'Organization',
      name: lang === 'en' ? 'Free Games' : 'Jeux gratuits',
      url: siteUrl
    }
  };

  if (typeof game.rating === 'number') {
    const aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: Number(game.rating.toFixed(1)),
      ratingCount: game.plays || 1,
      reviewCount: game.plays || 1
    };
    jsonLd.aggregateRating = aggregateRating;
  }

  jsonLd.playMode = determinePlayMode(game);

  jsonLd.offers = {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: lang === 'en' ? 'USD' : 'EUR',
    availability: 'http://schema.org/InStock',
    url: pageUrl,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '0.00',
      priceCurrency: lang === 'en' ? 'USD' : 'EUR'
    }
  };

  if (!jsonLd.genre) {
    delete jsonLd.genre;
  }

  return JSON.stringify(jsonLd, null, 2).replace(/</g, '\u003c');
}

function loadSeoMap(seoFilePath) {
  const filePath = path.join(rootDir, seoFilePath);
  if (!fs.existsSync(filePath)) return {};

  const content = fs.readFileSync(filePath, 'utf8');
  const startIndex = content.indexOf('const SEO_GAMES = {');
  if (startIndex === -1) return {};

  let braceIndex = content.indexOf('{', startIndex);
  let depth = 0;
  let endIndex = -1;
  for (let i = braceIndex; i < content.length; i++) {
    const ch = content[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        endIndex = i;
        break;
      }
    }
  }

  if (endIndex === -1) return {};
  const seoScript = content.slice(0, endIndex + 1) + '\nmodule.exports = SEO_GAMES;';
  const sandbox = { module: { exports: {} }, exports: {} };
  vm.createContext(sandbox);
  vm.runInContext(seoScript, sandbox);
  return sandbox.module.exports || {};
}

function loadCategorySeoMap(seoFilePath) {
  const filePath = path.join(rootDir, seoFilePath);
  if (!fs.existsSync(filePath)) return {};

  const content = fs.readFileSync(filePath, 'utf8');
  const startIndex = content.indexOf('const SEO_CATEGORIES = {');
  if (startIndex === -1) return {};

  let braceIndex = content.indexOf('{', startIndex);
  let depth = 0;
  let endIndex = -1;
  for (let i = braceIndex; i < content.length; i++) {
    const ch = content[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        endIndex = i;
        break;
      }
    }
  }

  if (endIndex === -1) return {};
  const seoScript = content.slice(0, endIndex + 1) + '\nmodule.exports = SEO_CATEGORIES;';
  const sandbox = { module: { exports: {} }, exports: {} };
  vm.createContext(sandbox);
  vm.runInContext(seoScript, sandbox);
  return sandbox.module.exports || {};
}

function loadGames(jsDir) {
  return loadGamesByCategory(jsDir).allGames;
}

function loadGamesByCategory(jsDir) {
  const fullDir = path.join(rootDir, jsDir);
  const result = { byCategory: {}, allGames: {} };
  if (!fs.existsSync(fullDir)) return result;

  const categoryFileOrder = [
    'aa_action_games.js',
    'aa_arcade_games.js',
    'aa_battleroyale_games.js',
    'aa_idle_games.js',
    'aa_puzzle_games.js',
    'aa_sandbox_games.js',
    'aa_multiplayer_games.js',
    'aa_sports_games.js'
  ];

  const files = fs.readdirSync(fullDir, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.startsWith('aa_') && dirent.name.endsWith('.js'))
    .map(dirent => dirent.name);

  const orderedFiles = categoryFileOrder.filter(name => files.includes(name))
    .concat(files.filter(name => !categoryFileOrder.includes(name)).sort());

  orderedFiles.forEach(fileName => {
    const content = fs.readFileSync(path.join(fullDir, fileName), 'utf8');
    const objectRegex = /{[^}]*?}/gs;
    let match;
    while ((match = objectRegex.exec(content)) !== null) {
      const objectText = match[0];
      const idMatch = objectText.match(/["']id["']\s*:\s*([0-9]+)/);
      const titleMatch = objectText.match(/["']title["']\s*:\s*["']([^"']+)["']/);
      if (!idMatch || !titleMatch) continue;

      const thumbMatch = objectText.match(/["']thumb["']\s*:\s*["']([^"']+)["']/);
      const categoryMatch = objectText.match(/["']category["']\s*:\s*["']([^"']+)["']/);
      const ratingMatch = objectText.match(/["']rating["']\s*:\s*([0-9]+(?:\.[0-9]+)?)/);
      const playsMatch = objectText.match(/["']plays["']\s*:\s*([0-9]+)/);
      const title = titleMatch[1];
      const slug = slugify(title);
      const category = categoryMatch ? categoryMatch[1] : '';
      const game = {
        id: idMatch[1],
        title,
        thumb: thumbMatch ? thumbMatch[1].replace(/^\/+/, '') : 'images/placeholder.svg',
        category,
        rating: ratingMatch ? Number(ratingMatch[1]) : undefined,
        plays: playsMatch ? Number(playsMatch[1]) : undefined
      };

      result.allGames[slug] = game;
      result.byCategory[category] = result.byCategory[category] || [];
      result.byCategory[category].push(game);
    }
  });

  return result;
}

function mergeGamesInterleaved(gamesByCategory, categoryOrder) {
  const orderedGroups = [];
  categoryOrder.forEach(category => {
    if (gamesByCategory[category] && gamesByCategory[category].length) {
      orderedGroups.push(gamesByCategory[category]);
    }
  });

  const remainingCategories = Object.keys(gamesByCategory)
    .filter(category => !categoryOrder.includes(category))
    .sort();

  remainingCategories.forEach(category => {
    orderedGroups.push(gamesByCategory[category]);
  });

  const maxLen = orderedGroups.reduce((max, group) => Math.max(max, group.length), 0);
  const merged = [];

  for (let i = 0; i < maxLen; i++) {
    orderedGroups.forEach(group => {
      if (i < group.length) {
        merged.push(group[i]);
      }
    });
  }

  return merged;
}

function updateStaticHomePages() {
  const homePages = [
    path.join(rootDir, 'index.html'),
    path.join(rootDir, 'en', 'index.html')
  ];
  const categoryOrder = [
    'Action',
    'Arcade',
    'Battle Royale',
    'Idle',
    'Puzzle',
    'Sandbox',
    'Multiplayer',
    'Sports'
  ];

  homePages.forEach(pagePath => {
    if (!fs.existsSync(pagePath)) return;
    const relPath = path.relative(rootDir, pagePath).replace(/\\/g, '/');
    const lang = relPath.startsWith('en/') ? 'en' : 'fr';
    const gamesByCategory = lang === 'en' ? englishGamesByCategory.byCategory : frenchGamesByCategory.byCategory;
    const mergedGames = mergeGamesInterleaved(gamesByCategory, categoryOrder);
    const cardsHtml = buildCategoryCardsHtml(mergedGames, lang);

    let html = fs.readFileSync(pagePath, 'utf8');
    html = html.replace(/<div class="games-grid" id="games-grid">[\s\S]*?<\/div>/, `<div class="games-grid" id="games-grid">\n${cardsHtml}\n                </div>`);
    html = html.replace(/<script\s+src="\/js\/aa_[^\"]+"><\/script>\s*/g, '');
    html = html.replace(/<script\s+src="\/(?:en\/)?js\/(?:games|app)\.js"><\/script>\s*/g, '');

    if (html !== fs.readFileSync(pagePath, 'utf8')) {
      fs.writeFileSync(pagePath, html, 'utf8');
    }
  });
}

function fillTemplate(template, data) {
  const {
    title,
    description,
    canonical,
    image,
    h1,
    descriptionText,
    instructionText,
    twitterTitle,
    twitterDescription,
    pageUrl,
    jsonLd
  } = data;

  let html = template;

  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtmlAttr(description)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtmlAttr(title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtmlAttr(description)}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escapeHtmlAttr(pageUrl)}">`);
  html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${escapeHtmlAttr(image)}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeHtmlAttr(twitterTitle)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeHtmlAttr(twitterDescription)}">`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${escapeHtmlAttr(image)}">`);
  html = html.replace(/<title[^>]*>[^<]*<\/title>/, `<title id="page-title">${escapeHtml(title)}</title>`);

  if (!html.includes('rel="canonical"')) {
    html = html.replace('</title>', `</title>\n    <link rel="canonical" href="${escapeHtmlAttr(canonical)}">`);
  } else {
    html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${escapeHtmlAttr(canonical)}">`);
  }

  html = html.replace(/<h1 id="game-title-h1">[^<]*<\/h1>/, `<h1 id="game-title-h1">${escapeHtml(h1)}</h1>`);
  html = html.replace(/<p id="game-description"[^>]*>[^<]*<\/p>/s, `<p id="game-description" style="color: #aaa; font-size: 14px; margin-top: 6px;">${escapeHtml(descriptionText)}</p>`);
  html = html.replace(/<p id="game-instruction"[^>]*>[^<]*<\/p>/s, `<p id="game-instruction" style="color: #aaa; font-size: 14px; margin-top: 6px;">${escapeHtml(instructionText)}</p>`);

  if (jsonLd) {
    const jsonLdTag = `<script type="application/ld+json">${jsonLd}</script>`;
    html = html.replace('</head>', `${jsonLdTag}
</head>`);
  }

  return html;
}

function getCategoryCounts(gamesMap) {
  const counts = {};
  Object.values(gamesMap).forEach(game => {
    const category = game.category || '';
    counts[category] = (counts[category] || 0) + 1;
  });
  return counts;
}

function formatPlays(n) {
  if (typeof n !== 'number') return '0';
  return n >= 1000 ? (n / 1000).toFixed(0) + 'K' : n.toString();
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= Math.round(rating || 0) ? 'full' : 'empty'}">★</span>`;
  }
  return html;
}

function buildCategoryCardsHtml(games, lang) {
  return games.map(game => {
    const slug = slugify(game.title);
    const href = lang === 'en' ? `/en/game/${slug}/` : `/game/${slug}/`;
    const playLabel = lang === 'en' ? 'Play' : 'Jouer';
    const playsLabel = lang === 'en' ? 'plays' : 'parties';

    return `<a class="game-card" href="${escapeHtmlAttr(href)}">
            <div class="card-thumb">
                <img src="/${escapeHtmlAttr(game.thumb)}" alt="${escapeHtmlAttr(game.title)}" loading="lazy" onerror="this.src='/images/placeholder.svg'">
                <div class="card-overlay"><button class="play-btn">▶ ${playLabel}</button></div>
                <span class="card-category">${escapeHtml(game.category)}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${escapeHtml(game.title)}</h3>
                <div class="card-meta">
                    <div class="card-stars">${renderStars(game.rating)} <span class="rating-num">${escapeHtml(String(game.rating || 0))}</span></div>
                    <span class="card-plays">🎮 ${escapeHtml(formatPlays(game.plays))} ${playsLabel}</span>
                </div>
            </div>
        </a>`;
  }).join('\n');
}

function updateStaticCategoryPages() {
  const files = [];
  function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
      const fullPath = path.join(dir, dirent.name);
      if (dirent.isDirectory()) {
        walk(fullPath);
      } else if (dirent.isFile() && dirent.name === 'index.html') {
        files.push(fullPath);
      }
    });
  }

  walk(rootDir);

  files.forEach(filePath => {
    const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
    const lang = relPath.startsWith('en/') ? 'en' : 'fr';
    const html = fs.readFileSync(filePath, 'utf8');
    const bodyMatch = html.match(/<body[^>]*data-category=["']([^"']+)["'][^>]*>/i);
    if (!bodyMatch) return;

    const category = bodyMatch[1];
    const gamesMap = lang === 'en' ? englishGames : frenchGames;
    const categoryGames = Object.values(gamesMap)
      .filter(game => game.category === category)
      .sort((a, b) => (b.plays || 0) - (a.plays || 0));

    const cardsHtml = buildCategoryCardsHtml(categoryGames, lang);
    let updatedHtml = html
      .replace(/<div class="games-grid" id="games-grid">[\s\S]*?<\/div>/, `<div class="games-grid" id="games-grid">\n${cardsHtml}\n            </div>`)
      .replace(/<script\s+src="\/(?:en\/)?js\/category-page\.js"><\/script>\s*/g, '');

    if (updatedHtml !== html) {
      fs.writeFileSync(filePath, updatedHtml, 'utf8');
    }
  });
}

function updateStaticHomePages() {
  const homePages = [
    path.join(rootDir, 'index.html'),
    path.join(rootDir, 'en', 'index.html')
  ];
  const categoryOrder = [
    'Action',
    'Arcade',
    'Battle Royale',
    'Idle',
    'Puzzle',
    'Sandbox',
    'Multiplayer',
    'Sports'
  ];

  homePages.forEach(pagePath => {
    if (!fs.existsSync(pagePath)) return;
    const relPath = path.relative(rootDir, pagePath).replace(/\\/g, '/');
    const lang = relPath.startsWith('en/') ? 'en' : 'fr';
    const gamesByCategory = lang === 'en' ? englishGamesByCategory.byCategory : frenchGamesByCategory.byCategory;
    const mergedGames = mergeGamesInterleaved(gamesByCategory, categoryOrder);
    const cardsHtml = buildCategoryCardsHtml(mergedGames, lang);

    let html = fs.readFileSync(pagePath, 'utf8');
    html = html.replace(/<div class="games-grid" id="games-grid">[\s\S]*?<\/div>/, `<div class="games-grid" id="games-grid">\n${cardsHtml}\n                </div>`);
    html = html.replace(/<script\s+src="\/js\/aa_[^\"]+"><\/script>\s*/g, '');
    html = html.replace(/<script\s+src="\/(?:en\/)?js\/(?:games|app)\.js"><\/script>\s*/g, '');

    if (html !== fs.readFileSync(pagePath, 'utf8')) {
      fs.writeFileSync(pagePath, html, 'utf8');
    }
  });
}

function updateStaticGameCounts() {
  const frenchCategoryCounts = getCategoryCounts(frenchGames);
  const englishCategoryCounts = getCategoryCounts(englishGames);
  const files = [];

  function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
      const fullPath = path.join(dir, dirent.name);
      if (dirent.isDirectory()) {
        walk(fullPath);
      } else if (dirent.isFile() && dirent.name === 'index.html') {
        files.push(fullPath);
      }
    });
  }

  walk(rootDir);

  files.forEach(filePath => {
    let html = fs.readFileSync(filePath, 'utf8');
    const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
    const lang = relPath.startsWith('en/') ? 'en' : 'fr';

    // Update game counts
    if (html.includes('id="game-count"')) {
      let count = null;

      if (relPath === 'index.html') {
        count = Object.keys(frenchGames).length;
      } else if (relPath === 'en/index.html') {
        count = Object.keys(englishGames).length;
      } else {
        const bodyMatch = html.match(/<body[^>]*data-category=["']([^"']+)["']/i);
        if (bodyMatch) {
          const category = bodyMatch[1];
          count = relPath.startsWith('en/') ? englishCategoryCounts[category] || 0 : frenchCategoryCounts[category] || 0;
        }
      }

      if (count !== null) {
        html = html.replace(/(<strong[^>]*id=["']game-count["'][^>]*>)([^<]*)(<\/strong>)/i, `$1${count}$3`);
      }
    }

    // Update static SEO for home and category pages
    const seoMap = lang === 'en' ? englishCategorySeo : frenchCategorySeo;
    const isHome = relPath === 'index.html' || relPath === 'en/index.html';
    let seoEntry = null;
    let canonical = '/' + (lang === 'en' ? 'en/' : '');

    if (isHome) {
      seoEntry = null;
    } else {
      const bodyMatch = html.match(/<body[^>]*data-category=["']([^"']+)["']/i);
      if (bodyMatch) {
        const category = bodyMatch[1];
        seoEntry = seoMap[category];
        if (lang === 'en') {
          const needsEnglish = !seoEntry || (seoEntry.h1 && seoEntry.h1.toLowerCase().startsWith('jeux'));
          if (needsEnglish) {
            seoEntry = {
              title: `Free ${category} Games Online`,
              description: `Discover the best free ${category.toLowerCase()} games on Free Games. Play instantly in your browser on PC, mobile, and tablet.`,
              h1: `Free ${category} Games Online`,
              intro: `Discover the best free ${category.toLowerCase()} games on Free Games. Play instantly in your browser on PC, mobile, and tablet.`
            };
          }
        }

        canonical = '/' + (lang === 'en' ? 'en/' : '') + relPath.replace(/^en\//, '').replace(/index\.html$/, '');
      }
    }

    if (isHome || seoEntry) {
      const seo = seoEntry || {
        title: lang === 'en'
          ? 'Free Games – play hundreds of games for free'
          : 'Jeux gratuits – Joue gratuitement à des centaines de jeux',
        description: lang === 'en'
          ? 'Free Games : offers hundreds of free HTML5 games. Play instantly without downloading.'
          : 'Jeux gratuits : des centaines de jeux HTML5 gratuits à jouer directement dans ton navigateur. Sans téléchargement.',
        h1: lang === 'en'
          ? 'Play Hundreds of Free Games Instantly'
          : 'Jouez à des centaines de jeux gratuits instantanément',
        intro: lang === 'en'
          ? 'Free Games offers hundreds of free HTML5 games playable directly in your browser on PC, mobile and tablet. New games are added every day.'
          : 'Jeux gratuits propose des centaines de jeux HTML5 gratuits jouables directement dans ton navigateur sur PC, mobile et tablette. De nouveaux jeux sont ajoutés chaque jour.'
      };

      const title = seo.title || seo.h1;
      const description = seo.description || seo.intro || '';
      const image = '/images/placeholder.svg';
      const twitterTitle = title;
      const twitterDescription = description;

      html = html.replace(/<title[^>]*>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
      html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtmlAttr(description)}">`);
      html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtmlAttr(title)}">`);
      html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtmlAttr(description)}">`);
      html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escapeHtmlAttr(canonical)}">`);
      html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${escapeHtmlAttr(image)}">`);
      html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeHtmlAttr(twitterTitle)}">`);
      html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeHtmlAttr(twitterDescription)}">`);
      html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${escapeHtmlAttr(image)}">`);
      if (html.includes('rel="canonical"')) {
        html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${escapeHtmlAttr(canonical)}">`);
      }

      if (seo.h1) {
        html = html.replace(/<h1[^>]*id=["']cat-h1["'][^>]*>[^<]*<\/h1>/, `<h1 id="cat-h1">${escapeHtml(seo.h1)}</h1>`);
      }
      if (seo.intro) {
        html = html.replace(/<p[^>]*id=["']cat-intro["'][^>]*>[^<]*<\/p>/, `<p id="cat-intro">${escapeHtml(seo.intro)}</p>`);
      }
    }

    if (html !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, html, 'utf8');
    }
  });
}

function createStaticPages(templatePath, outputBase, gamesMap, seoMap, routePrefix) {
  const template = fs.readFileSync(path.join(rootDir, templatePath), 'utf8');
  const lang = routePrefix.startsWith('en/') ? 'en' : 'fr';

  const slugs = Object.keys(gamesMap).sort();
  for (const slug of slugs) {
    const game = gamesMap[slug];
    const seo = seoMap[game.id] || {};
    const pageUrl = `${siteUrl}/${routePrefix}/${slug}/`.replace(/\\/g, '/');
    const canonical = pageUrl;

    const defaultTitle = lang === 'en'
      ? `Play ${game.title} for free online – Free Games`
      : `Jouer à ${game.title} gratuitement – Jeux gratuits`;

    const defaultDescription = lang === 'en'
      ? `Play ${game.title} online for free on Free Games. No download, no registration required — just jump into the action in your browser.`
      : `Joue à ${game.title} en ligne gratuitement sur Jeux gratuits. Aucun téléchargement ni inscription requis — lance-toi directement dans le navigateur.`;

    const title = seo.title || defaultTitle;
    const description = seo.description || defaultDescription;
    const h1 = seo.h1 || (lang === 'en'
      ? `${game.title} – Free Online Game`
      : `${game.title} – Jeu ${game.category || ''} Gratuit`);
    const descriptionText = seo.description || defaultDescription;
    const instructionText = seo.Instructions || '';
    const image = `/${game.thumb}`;
    const twitterTitle = title;
    const twitterDescription = description;

    const jsonLd = buildJsonLd(game, lang, pageUrl, title, description, image);
    const pageHtml = fillTemplate(template, {
      title,
      description,
      canonical,
      image,
      h1,
      descriptionText,
      instructionText,
      twitterTitle,
      twitterDescription,
      pageUrl,
      jsonLd
    });

    const dirPath = path.join(rootDir, outputBase, slug);
    fs.mkdirSync(dirPath, { recursive: true });
    const targetPath = path.join(dirPath, 'index.html');
    fs.writeFileSync(targetPath, pageHtml, 'utf8');
  }

  console.log(`Généré ${slugs.length} pages dans ${outputBase}`);
}

const frenchGamesByCategory = loadGamesByCategory('js');
const frenchGames = frenchGamesByCategory.allGames;
const englishGamesByCategoryLoaded = loadGamesByCategory(path.join('en', 'js'));
const englishGamesByCategory = Object.keys(englishGamesByCategoryLoaded.allGames).length
  ? englishGamesByCategoryLoaded
  : { allGames: frenchGames, byCategory: frenchGamesByCategory.byCategory };
const englishGames = englishGamesByCategory.allGames;
// Load merged bilingual SEO map and extract per-language views
const mergedSeo = loadSeoMap(path.join('js', 'seo-meta.js'));
const mergedCategorySeo = loadCategorySeoMap(path.join('js', 'seo-meta.js'));

function hasSeoContent(o) {
  if (!o || typeof o !== 'object') return false;
  return ['title', 'description', 'h1', 'intro', 'Instructions'].some(k => k in o && o[k]);
}

function unwrapLang(obj, lang) {
  if (!obj || typeof obj !== 'object') return {};
  // Walk down repeated lang wrappers: obj -> obj[lang] -> obj[lang][lang] ...
  let cur = obj;
  const seen = new Set();
  while (cur && typeof cur === 'object') {
    const id = JSON.stringify(Object.keys(cur).slice(0,5));
    if (seen.has(id)) break;
    seen.add(id);
    if (cur[lang] && typeof cur[lang] === 'object') {
      if (hasSeoContent(cur[lang])) return cur[lang];
      cur = cur[lang];
      continue;
    }
    // if current object itself has content, return it
    if (hasSeoContent(cur)) return cur;
    // otherwise try to find a nested object that has content for lang
    if (typeof cur === 'object') {
      for (const k of Object.keys(cur)) {
        if (cur[k] && typeof cur[k] === 'object') {
          const found = unwrapLang(cur[k], lang);
          if (hasSeoContent(found)) return found;
        }
      }
    }
    break;
  }
  return {};
}

function extractLangSeo(map, lang) {
  const result = {};
  Object.keys(map || {}).forEach(key => {
    const val = map[key];
    if (!val) { result[key] = {}; return; }
    // If val has direct lang objects
    if (val[lang] && typeof val[lang] === 'object') {
      result[key] = unwrapLang(val[lang], lang) || {};
      return;
    }
    // Try to unwrap from a merged structure
    result[key] = unwrapLang(val, lang) || {};
  });
  return result;
}

const frenchSeo = extractLangSeo(mergedSeo, 'fr');
const englishSeo = extractLangSeo(mergedSeo, 'en');
const frenchCategorySeo = extractLangSeo(mergedCategorySeo, 'fr');
const englishCategorySeo = extractLangSeo(mergedCategorySeo, 'en');

createStaticPages('game/index.html', 'game', frenchGames, frenchSeo, 'game');
createStaticPages(path.join('en', 'game', 'index.html'), path.join('en', 'game'), englishGames, englishSeo, 'en/game');

updateStaticGameCounts();
updateStaticCategoryPages();
updateStaticHomePages();
console.log('Mise à jour des compteurs statiques terminée.');
console.log('Mise à jour des pages de catégories statiques terminée.');
console.log('Mise à jour des pages d’accueil statiques terminée.');
console.log('Génération des pages statiques terminée.');
