import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/slamm_2/', // base pour GitHub Pages sous un sous-dossier
  plugins: [react()],
  server: {
    // Pas besoin de historyApiFallback dans Vite
    fs: {
      strict: true, // protège l'accès au système de fichiers, recommandé
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          'mui-core': ['@mui/material', '@mui/system'],
          'mui-icons': ['@mui/icons-material'],
          router: ['react-router-dom'],
          helmet: ['react-helmet'],
        },
      },
    },
  },
})
