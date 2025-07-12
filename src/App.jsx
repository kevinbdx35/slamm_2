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
      url: "https://kevinbdx35.github.io/slamm_2/",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "MMA Saint-Lunaire, arts martiaux mixtes Bretagne, club combat Saint-Malo, entraînement MMA Dinard, SLAMM",
    },
    '/cours': {
      title: "Cours de MMA - SLAMM",
      description: "Découvrez tous nos cours de MMA adaptés à tous les niveaux.",
      url: "https://kevinbdx35.github.io/slamm_2/#/cours",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "cours MMA Saint-Lunaire, entraînement arts martiaux mixtes, planning MMA Bretagne, débutant MMA Dinard",
    },
    '/equipe': {
      title: "Équipe SLAMM",
      description: "Rencontrez notre équipe d'entraîneurs et partenaires.",
      url: "https://kevinbdx35.github.io/slamm_2/#/equipe",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "entraîneurs MMA Saint-Lunaire, équipe SLAMM, professeurs arts martiaux Bretagne, coaches MMA",
    },
    '/actualites': {
      title: "Actualités - SLAMM",
      description: "Suivez toutes les actualités et événements de notre club.",
      url: "https://kevinbdx35.github.io/slamm_2/#/actualites",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "actualités MMA Saint-Lunaire, événements SLAMM, news arts martiaux Bretagne, compétitions MMA",
    },
    '/contact': {
      title: "Contactez SLAMM",
      description: "Contactez-nous pour toutes questions ou inscriptions.",
      url: "https://kevinbdx35.github.io/slamm_2/#/contact",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "contact MMA Saint-Lunaire, inscription SLAMM, téléphone club MMA Bretagne, adresse dojo",
    },
    '/faq': {
      title: "FAQ - SLAMM MMA",
      description: "Questions fréquentes sur notre club et la pratique du MMA.",
      url: "https://kevinbdx35.github.io/slamm_2/#/faq",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "FAQ MMA Saint-Lunaire, questions fréquentes arts martiaux, débutant MMA Bretagne, tarifs SLAMM",
    },
    '/mentions-legales': {
      title: "Mentions légales - SLAMM MMA",
      description: "Mentions légales du club de MMA SLAMM Saint-Lunaire.",
      url: "https://kevinbdx35.github.io/slamm_2/#/mentions-legales",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "mentions légales SLAMM, association loi 1901 MMA, club Saint-Lunaire juridique",
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
        keywords={currentSeo.keywords}
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
