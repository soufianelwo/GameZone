const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const files = [
  'index.html',
  'action/index.html',
  'arcade/index.html',
  'battleroyale/index.html',
  'puzzle/index.html',
  'sandbox/index.html',
  'multiplayer/index.html',
  'idle/index.html',
  'sports/index.html',
  'game.html'
];
const navLinks = [
  { href: '/', label: 'Tous les jeux', key: 'index' },
  { href: '/action/', label: 'Action', key: 'action' },
  { href: '/arcade/', label: 'Arcade', key: 'arcade' },
  { href: '/battleroyale/', label: 'Battle Royale', key: 'battleroyale' },
  { href: '/puzzle/', label: 'Puzzle', key: 'puzzle' },
  { href: '/sandbox/', label: 'Sandbox', key: 'sandbox' },
  { href: '/multiplayer/', label: 'Multiplayer', key: 'multiplayer' },
  { href: '/idle/', label: 'Idle', key: 'idle' },
  { href: '/sports/', label: 'Sports', key: 'sports' }
];

files.forEach(file => {
  const filePath = path.join(root, file);
  let html = fs.readFileSync(filePath, 'utf8');
  const currentKey = file === 'index.html' ? 'index' : path.basename(file, '.html');
  const navHtml = ['<nav class="header-nav">'];
  navLinks.forEach(link => {
    const active = link.key === currentKey ? ' active' : '';
    navHtml.push('                <a href="' + link.href + '" class="nav-link' + active + '">' + link.label + '</a>');
  });
  navHtml.push('            </nav>');
  const newNav = navHtml.join('\n');
  const replaced = html.replace(/<nav class="header-nav">[\s\S]*?<\/nav>/, newNav);
  if (replaced === html) {
    throw new Error('No nav block found in ' + file);
  }
  fs.writeFileSync(filePath, replaced, 'utf8');
  console.log('Updated', file);
});
