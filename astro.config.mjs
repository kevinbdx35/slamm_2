import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mma-saint-lunaire.fr',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
  ],
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
});
