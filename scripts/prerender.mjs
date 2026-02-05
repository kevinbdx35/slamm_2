/**
 * Script de pré-rendu pour le SEO
 *
 * Visite chaque route avec Puppeteer et sauvegarde le HTML rendu
 * dans dist/ pour que les crawlers voient le contenu sans exécuter JS.
 */

import { launch } from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 45678;

// Routes à pré-rendre
const ROUTES = [
  '/',
  '/cours',
  '/equipe',
  '/evenements',
  '/contact',
  '/faq',
  '/hygiene',
  '/mentions-legales',
];

// Serveur statique minimal pour servir dist/
function startServer() {
  const server = createServer((req, res) => {
    let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url);

    // SPA fallback : si le fichier n'existe pas, servir index.html
    if (!existsSync(filePath) || !filePath.includes('.')) {
      filePath = join(DIST, 'index.html');
    }

    try {
      const content = readFileSync(filePath);
      const ext = filePath.split('.').pop();
      const types = {
        html: 'text/html',
        js: 'application/javascript',
        css: 'text/css',
        woff2: 'font/woff2',
        woff: 'font/woff',
        webp: 'image/webp',
        svg: 'image/svg+xml',
        png: 'image/png',
        jpg: 'image/jpeg',
        ico: 'image/x-icon',
      };
      res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log('🔍 Pré-rendu des pages pour le SEO...');

  const server = await startServer();
  const browser = await launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();

    // Bloquer les requêtes externes (analytics, fonts CDN, etc.)
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      if (url.startsWith(`http://localhost:${PORT}`)) {
        req.continue();
      } else {
        req.abort();
      }
    });

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Attendre que le contenu React soit rendu
    await page.waitForSelector('#root > *', { timeout: 10000 });

    // Extraire les styles Emotion du CSSOM vers le HTML
    // Emotion utilise insertRule() en production (speedy mode),
    // ce qui rend les styles invisibles dans page.content().
    // On les récupère manuellement depuis les styleSheets du navigateur.
    await page.evaluate(() => {
      for (const sheet of document.styleSheets) {
        try {
          const node = sheet.ownerNode;
          if (node?.dataset?.emotion !== undefined) {
            const rules = [];
            for (const rule of sheet.cssRules) {
              rules.push(rule.cssText);
            }
            node.textContent = rules.join('\n');
          }
        } catch {
          // Ignore cross-origin stylesheets
        }
      }
    });

    const html = await page.content();
    await page.close();

    // Sauvegarder le HTML
    const dir = join(DIST, route);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    const outputPath = route === '/' ? join(DIST, 'index.html') : join(dir, 'index.html');
    writeFileSync(outputPath, html);
    console.log(`  ✅ ${route}`);
  }

  await browser.close();
  server.close();
  console.log(`\n🎉 ${ROUTES.length} pages pré-rendues avec succès !`);
}

prerender().catch((err) => {
  console.error('❌ Erreur de pré-rendu:', err.message);
  process.exit(1);
});
