/**
 * Point d'entrée principal de l'application SLAMM MMA
 * 
 * Ce fichier initialise React et charge les polices nécessaires
 * pour l'identité visuelle du club SLAMM.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.jsx'

// Import des polices IBM Plex Mono pour l'identité SLAMM
// Chargées de manière optimale avec @fontsource et font-display: swap
import '@fontsource/ibm-plex-mono/300.css' // Light
import '@fontsource/ibm-plex-mono/400.css' // Regular
import '@fontsource/ibm-plex-mono/500.css' // Medium
import '@fontsource/ibm-plex-mono/600.css' // Semi-Bold
import '@fontsource/ibm-plex-mono/700.css' // Bold

// IBM Plex Mono uniquement pour cohérence UI parfaite

// Rendu de l'application React dans le DOM
// StrictMode active les vérifications supplémentaires en développement
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
