import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mma-saint-lunaire.fr',
  // build.format par défaut = directory : URLs canoniques avec slash final
  // (cohérent avec le sitemap et le service de Netlify, sans 301 interne)
  trailingSlash: 'always',
  integrations: [sitemap()],
});
