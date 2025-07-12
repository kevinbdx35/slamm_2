/**
 * Point d'entrée principal de l'application SLAMM MMA
 * 
 * Ce fichier initialise React et charge les polices nécessaires
 * pour l'identité visuelle du club SLAMM.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.jsx'

// Import des polices Roboto Mono pour l'identité SLAMM
// Chargées de manière optimale avec @fontsource
import '@fontsource/roboto-mono/300.css' // Light
import '@fontsource/roboto-mono/400.css' // Regular
import '@fontsource/roboto-mono/500.css' // Medium
import '@fontsource/roboto-mono/600.css' // Semi-Bold
import '@fontsource/roboto-mono/700.css' // Bold

// Police d'accent Cinzel pour les titres spéciaux
import '@fontsource/cinzel/700.css'

// Rendu de l'application React dans le DOM
// StrictMode active les vérifications supplémentaires en développement
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
