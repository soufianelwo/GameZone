const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname);
const jsDir = path.join(rootDir, 'js');
const sitemapPath = path.join(rootDir, 'sitemap.xml');
const baseUrl = 'https://www.jeuxgratuis.com';

function formatDate(date) {
  const iso = date.toISOString();
  return iso.slice(0, 10);
}

function buildUrlEntry(loc, lastmod, changefreq, priority) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>'
  ].join('\n');
}

function walkDir(dir) {
  let results = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (dirent.isFile() && dirent.name.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

function getStaticPages() {
  return walkDir(rootDir)
    .filter(file => !path.basename(file).startsWith('google'))
    .filter(file => path.basename(file) !== 'sitemap.xml')
    .sort((a, b) => path.relative(rootDir, a).localeCompare(path.relative(rootDir, b), 'en', { numeric: true }));
}

function slugify(title) {
    return title
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function getGameIds() {
  const ids = new Set();
  if (!fs.existsSync(jsDir)) return ids;

  fs.readdirSync(jsDir)
      //.filter(file => file.endsWith('.js'))
      .filter(file => file.endsWith('.js') && file.startsWith('aa_'))
    .forEach(file => {
      const content = fs.readFileSync(path.join(jsDir, file), 'utf8');
        //const regex = /(?:"id"|id)\s*:\s*(\d+)/g;
        const regex = /"title"\s*:\s*"([^"]+)"/g;
      let match;
        while ((match = regex.exec(content)) !== null) {
            const title = match[1];
            if (title) ids.add(slugify(title));
        //const id = Number(match[1]);
        //if (!Number.isNaN(id)) ids.add(id);
      }
    });

  return ids;
}

function createSitemap() {
  const staticPages = getStaticPages();
  const gameIds = Array.from(getGameIds()).sort((a, b) => a - b);
  const today = formatDate(new Date());

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <!-- ==================== PAGES PRINCIPALES ==================== -->'
  ];

  for (const file of staticPages) {
    const absPath = file;
    const rel = path.relative(rootDir, absPath).replace(/\\/g, '/');
    const stat = fs.statSync(absPath);
    const lastmod = formatDate(stat.mtime);
    const loc = rel === 'index.html' ? `${baseUrl}/` : rel.endsWith('/index.html') ? `${baseUrl}/${rel.slice(0, -'index.html'.length)}` : `${baseUrl}/${rel}`;

    let changefreq = 'weekly';
    let priority = '0.9';

    if (rel === 'index.html') {
      changefreq = 'daily';
      priority = '1.0';
    } else if (rel === 'game.html') {
      changefreq = 'weekly';
      priority = '0.8';
    }

    lines.push(buildUrlEntry(loc, lastmod, changefreq, priority));
  }

  lines.push('');
  lines.push('  <!-- ==================== PAGES JEUX ==================== -->');

  for (const id of gameIds) {
    const loc = `${baseUrl}/game/${id}`;
    lines.push(buildUrlEntry(loc, today, 'monthly', '0.7'));
  }

  lines.push('</urlset>');

  fs.writeFileSync(sitemapPath, lines.join('\n') + '\n', 'utf8');
  console.log(`Sitemap généré: ${sitemapPath}`);
  console.log(`Pages statiques: ${staticPages.length}`);
  console.log(`Pages de jeu: ${gameIds.length}`);
}

createSitemap();
