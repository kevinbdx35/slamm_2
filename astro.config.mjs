import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mma-saint-lunaire.fr',
  // build.format par défaut = directory : URLs canoniques avec slash final
  // (cohérent avec le sitemap et le service de Netlify, sans 301 interne)
  trailingSlash: 'always',
  // Compression HTML « sans perte » (comportement d'Astro 6). Le défaut 'jsx'
  // d'Astro 7 supprime les espaces entre éléments inline et colle des mots
  // dans le texte lu par Google et les lecteurs d'écran (ex. H1 de l'accueil).
  compressHTML: true,
  integrations: [sitemap()],
});
