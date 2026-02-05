// Importation des dépendances React et React Router
import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'

// Importation du layout principal et composants critiques (chargés immédiatement)
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx' // Page d'accueil chargée immédiatement pour le LCP
import { Helmet } from 'react-helmet'
import { generateBreadcrumbSchema } from './utils/schemaGenerator.js'

// Lazy loading des pages secondaires pour optimiser le bundle initial
const CoursPage = lazy(() => import('./pages/CoursPage.jsx'))
const EquipePage = lazy(() => import('./pages/EquipePage.jsx'))
const EvenementsPage = lazy(() => import('./pages/EvenementsPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'))
const HygienePage = lazy(() => import('./pages/HygienePage.jsx'))
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

// Composant de chargement pour Suspense
const PageLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
    }}
  >
    <CircularProgress color="primary" />
  </Box>
)

/**
 * Composant racine de l'application SLAMM MMA
 * Gère le routage, le SEO et la transmission des props de thème
 * 
 * @param {boolean} isDark - État du mode sombre
 * @param {function} toggleTheme - Fonction pour basculer le thème
 */
export default function App({ isDark, toggleTheme }) {
  // Hook pour récupérer l'URL actuelle
  const location = useLocation()

  // Génération du breadcrumb schema pour la navigation
  const breadcrumbSchema = generateBreadcrumbSchema(location.pathname)

  return (
    <>
      {/* Breadcrumb schema global pour toutes les pages */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Layout principal englobant toutes les pages */}
      <Layout isDark={isDark} toggleTheme={toggleTheme}>
        {/* Configuration des routes avec Suspense pour le lazy loading */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cours" element={<CoursPage />} />
            <Route path="/equipe" element={<EquipePage />} />
            <Route path="/evenements" element={<EvenementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/hygiene" element={<HygienePage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            {/* <Route path="/partenariat" element={<PartnershipPage />} /> */} {/* TODO: Activer plus tard */}
            {/* Route catch-all pour les pages non trouvées */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}
