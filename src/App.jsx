// Importation des dépendances React Router pour la gestion de la navigation
import { Routes, Route, useLocation } from 'react-router-dom'

// Importation du layout principal et des composants de pages
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import CoursPage from './pages/CoursPage.jsx'
import EquipePage from './pages/EquipePage.jsx'
import ActualitesPage from './pages/ActualitesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import MentionsLegalesPage from './pages/MentionsLegalesPage.jsx'
import SeoHelmet from './components/SeoHelmet.jsx'

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
      title: "Accueil - SLAMM MMA Saint-Lunaire",
      description: "Découvre notre club de MMA à Saint-Lunaire, proche de Saint-Malo, Dinard, Cancale et Dinan.",
      url: "https://mma-saint-lunaire.fr",
      image: "https://mma-saint-lunaire.fr/img/social_share_image.jpg",
    },
    '/cours': {
      title: "Cours de MMA - SLAMM",
      description: "Découvrez tous nos cours de MMA adaptés à tous les niveaux.",
      url: "https://mma-saint-lunaire.fr/cours",
      image: "https://mma-saint-lunaire.fr/img/cours_social.jpg",
    },
    '/equipe': {
      title: "Équipe SLAMM",
      description: "Rencontrez notre équipe d'entraîneurs et partenaires.",
      url: "https://mma-saint-lunaire.fr/equipe",
      image: "https://mma-saint-lunaire.fr/img/equipe_social.jpg",
    },
    '/actualites': {
      title: "Actualités - SLAMM",
      description: "Suivez toutes les actualités et événements de notre club.",
      url: "https://mma-saint-lunaire.fr/actualites",
      image: "https://mma-saint-lunaire.fr/img/actualites_social.jpg",
    },
    '/contact': {
      title: "Contactez SLAMM",
      description: "Contactez-nous pour toutes questions ou inscriptions.",
      url: "https://mma-saint-lunaire.fr/contact",
      image: "https://mma-saint-lunaire.fr/img/contact_social.jpg",
    },
    '/faq': {
      title: "FAQ - SLAMM MMA",
      description: "Questions fréquentes sur notre club et la pratique du MMA.",
      url: "https://mma-saint-lunaire.fr/faq",
      image: "https://mma-saint-lunaire.fr/img/faq_social.jpg",
    },
    '/mentions-legales': {
      title: "Mentions légales - SLAMM MMA",
      description: "Mentions légales du club de MMA SLAMM Saint-Lunaire.",
      url: "https://mma-saint-lunaire.fr/mentions-legales",
      image: "https://mma-saint-lunaire.fr/img/social_share_image.jpg",
    },
  }

  // Récupération des métadonnées SEO pour la route actuelle
  // Fallback sur la page d'accueil si la route n'est pas trouvée
  const currentSeo = seoMap[location.pathname] || seoMap['/']

  return (
    <>
      {/* Composant de gestion des métadonnées SEO dynamiques */}
      <SeoHelmet
        title={currentSeo.title}
        description={currentSeo.description}
        url={currentSeo.url}
        image={currentSeo.image}
      />

      {/* Layout principal englobant toutes les pages */}
      <Layout isDark={isDark} toggleTheme={toggleTheme}>
        {/* Configuration des routes de l'application */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cours" element={<CoursPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        </Routes>
      </Layout>
    </>
  )
}
