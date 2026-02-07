import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://mma-saint-lunaire.fr',
  output: 'static',
  prefetch: true,
  integrations: [
    react(),
    sitemap(),
    icon(),
  ],
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
});
