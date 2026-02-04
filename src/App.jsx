// Importation des dépendances React et React Router
import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'

// Importation du layout principal et composants critiques (chargés immédiatement)
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx' // Page d'accueil chargée immédiatement pour le LCP
import SeoHelmet from './components/SeoHelmet.jsx'
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

  // Configuration SEO centralisée pour chaque route
  // Permet une gestion cohérente des métadonnées OpenGraph et Twitter Cards
  const seoMap = {
    '/': {
      title: "Club MMA Saint-Lunaire | SLAMM - Côte d'Émeraude",
      description: "Club de MMA à Saint-Lunaire, proche de Dinard, Saint-Malo, Pleurtuit, Dinan et Cancale. Cours tous niveaux, ambiance conviviale. Rejoins-nous sur la Côte d'Émeraude !",
      url: "https://mma-saint-lunaire.fr/",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "MMA Saint-Lunaire, MMA Dinard, MMA Saint-Malo, MMA Pleurtuit, MMA Dinan, MMA Cancale, MMA Saint-Briac, MMA Lancieux, MMA Ploubalay, club MMA Côte d'Émeraude, arts martiaux mixtes Bretagne, sport de combat Ille-et-Vilaine",
    },
    '/cours': {
      title: "Cours de MMA Saint-Lunaire | Dinard, Saint-Malo, Dinan",
      description: "Cours de MMA pour débutants et confirmés à Saint-Lunaire. Accessible depuis Dinard, Saint-Malo, Pleurtuit, Cancale, Dinan et toute la Côte d'Émeraude.",
      url: "https://mma-saint-lunaire.fr/cours",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "cours MMA Saint-Lunaire, cours MMA Dinard, cours MMA Saint-Malo, cours MMA Pleurtuit, cours MMA Dinan, entraînement MMA Côte d'Émeraude, débutant MMA Bretagne, cours arts martiaux mixtes Ille-et-Vilaine",
    },
    '/equipe': {
      title: "Équipe SLAMM | Coachs MMA certifiés FMMAF",
      description: "Découvrez nos entraîneurs certifiés FMMAF à Saint-Lunaire. Club accessible depuis Dinard, Saint-Malo, Pleurtuit, Dinan et la Côte d'Émeraude.",
      url: "https://mma-saint-lunaire.fr/equipe",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "entraîneurs MMA Saint-Lunaire, coach MMA Dinard, instructeur MMA Saint-Malo, professeur arts martiaux Côte d'Émeraude, FMMAF Bretagne, équipe SLAMM",
    },
    '/evenements': {
      title: "Événements MMA | Stages et compétitions Côte d'Émeraude",
      description: "Stages MMA, compétitions et événements à Saint-Lunaire. Ouvert aux pratiquants de Dinard, Saint-Malo, Pleurtuit, Dinan, Cancale et toute la région.",
      url: "https://mma-saint-lunaire.fr/evenements",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "stage MMA Saint-Lunaire, stage MMA Dinard, compétition MMA Saint-Malo, événements MMA Bretagne, stage grappling Côte d'Émeraude, compétition arts martiaux Dinan",
    },
    '/contact': {
      title: "Contact SLAMM | Club MMA Saint-Lunaire",
      description: "Contactez le club SLAMM MMA à Saint-Lunaire. À 5 min de Dinard, 15 min de Saint-Malo, accessible depuis Pleurtuit, Dinan, Cancale et la Côte d'Émeraude.",
      url: "https://mma-saint-lunaire.fr/contact",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "contact MMA Saint-Lunaire, adresse club MMA Dinard, inscription MMA Saint-Malo, club sport combat Pleurtuit, dojo MMA Côte d'Émeraude, téléphone SLAMM",
    },
    '/faq': {
      title: "FAQ MMA | Questions fréquentes - SLAMM Saint-Lunaire",
      description: "Réponses à vos questions sur la pratique du MMA à Saint-Lunaire. Club accessible depuis Dinard, Saint-Malo, Pleurtuit, Dinan et la Côte d'Émeraude.",
      url: "https://mma-saint-lunaire.fr/faq",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "FAQ MMA Saint-Lunaire, questions MMA Dinard, tarifs MMA Saint-Malo, débuter MMA Côte d'Émeraude, horaires club MMA Bretagne, prix cours MMA Ille-et-Vilaine",
    },
    '/hygiene': {
      title: "Hygiène et Sécurité | SLAMM MMA Saint-Lunaire",
      description: "Règles d'hygiène et protocoles de sécurité pour la pratique du MMA au club SLAMM Saint-Lunaire, Côte d'Émeraude.",
      url: "https://mma-saint-lunaire.fr/hygiene",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "hygiène MMA Saint-Lunaire, sécurité club MMA Dinard, protocole sanitaire dojo Saint-Malo, règles hygiène arts martiaux Bretagne",
    },
    '/mentions-legales': {
      title: "Mentions légales | SLAMM MMA Saint-Lunaire",
      description: "Mentions légales du club de MMA SLAMM Saint-Lunaire, Côte d'Émeraude, Bretagne.",
      url: "https://mma-saint-lunaire.fr/mentions-legales",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "mentions légales SLAMM, association loi 1901 Saint-Lunaire, club MMA Bretagne, FMMAF Ille-et-Vilaine",
    },
    '/404': {
      title: "Page non trouvée - SLAMM MMA",
      description: "Cette page n'existe pas. Retournez à l'accueil du club SLAMM MMA Saint-Lunaire.",
      url: "https://mma-saint-lunaire.fr/404",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "erreur 404, page non trouvée, SLAMM MMA",
    },
    // '/partenariat': {
    //   title: "Devenez Partenaire - SLAMM MMA",
    //   description: "Rejoignez notre communauté de partenaires ! Soutenez le développement du MMA à Saint-Lunaire.",
    //   url: "https://mma-saint-lunaire.fr/partenariat",
    //   image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
    //   keywords: "partenariat MMA Saint-Lunaire, sponsor MMA, partenaire club sport, sponsor arts martiaux mixtes",
    // }, // TODO: Activer plus tard
  }

  // Récupération des métadonnées SEO pour la route actuelle
  // Fallback sur la page 404 si la route n'est pas dans seoMap
  const currentSeo = seoMap[location.pathname] || seoMap['/404']

  // Génération du breadcrumb schema pour la navigation
  const breadcrumbSchema = generateBreadcrumbSchema(location.pathname)

  return (
    <>
      {/* Composant de gestion des métadonnées SEO dynamiques */}
      <SeoHelmet
        title={currentSeo.title}
        description={currentSeo.description}
        url={currentSeo.url}
        image={currentSeo.image}
        keywords={currentSeo.keywords}
        schemas={breadcrumbSchema}
      />

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
