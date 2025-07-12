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
      keywords: "MMA Saint-Lunaire, arts martiaux mixtes Saint-Lunaire, mixed martial arts Saint-Lunaire, sport de combat Saint-Lunaire, grappling Saint-Lunaire, MMA Côte d'Émeraude, dojo Saint-Lunaire, club sportif Saint-Lunaire, FMMAF Bretagne, self-défense Ille-et-Vilaine",
    },
    '/cours': {
      title: "Cours de MMA - SLAMM",
      description: "Découvrez tous nos cours de MMA adaptés à tous les niveaux.",
      url: "https://kevinbdx35.github.io/slamm_2/#/cours",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "cours MMA Saint-Lunaire, cours arts martiaux mixtes Saint-Lunaire, cours mixed martial arts Saint-Lunaire, cours sport de combat Saint-Lunaire, cours grappling Saint-Lunaire, débutant MMA Saint-Lunaire, cours self-défense Saint-Lunaire, formation MMA Saint-Lunaire, entraînement combat Saint-Lunaire",
    },
    '/equipe': {
      title: "Équipe SLAMM",
      description: "Rencontrez notre équipe d'entraîneurs et partenaires.",
      url: "https://kevinbdx35.github.io/slamm_2/#/equipe",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "entraîneurs MMA Saint-Lunaire, professeurs arts martiaux mixtes Saint-Lunaire, coaches mixed martial arts Saint-Lunaire, instructeurs sport de combat Saint-Lunaire, professeurs grappling Saint-Lunaire, équipe SLAMM Saint-Lunaire, FMMAF Côte d'Émeraude, instructeurs self-défense Saint-Lunaire",
    },
    '/actualites': {
      title: "Actualités - SLAMM",
      description: "Suivez toutes les actualités et événements de notre club.",
      url: "https://kevinbdx35.github.io/slamm_2/#/actualites",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "actualités MMA Saint-Lunaire, news arts martiaux mixtes Saint-Lunaire, événements mixed martial arts Saint-Lunaire, compétitions MMA Saint-Lunaire, tournois sport de combat Saint-Lunaire, compétitions grappling Saint-Lunaire, événements FMMAF Bretagne, fight Saint-Lunaire",
    },
    '/contact': {
      title: "Contactez SLAMM",
      description: "Contactez-nous pour toutes questions ou inscriptions.",
      url: "https://kevinbdx35.github.io/slamm_2/#/contact",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "contact MMA Saint-Lunaire, contact arts martiaux mixtes Saint-Lunaire, contact mixed martial arts Saint-Lunaire, inscription dojo Saint-Lunaire, club sport de combat Saint-Lunaire, salle de sport Saint-Lunaire, téléphone club MMA Saint-Lunaire, adresse SLAMM Saint-Lunaire",
    },
    '/faq': {
      title: "FAQ - SLAMM MMA",
      description: "Questions fréquentes sur notre club et la pratique du MMA.",
      url: "https://kevinbdx35.github.io/slamm_2/#/faq",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "FAQ MMA Saint-Lunaire, FAQ arts martiaux mixtes Saint-Lunaire, questions mixed martial arts Saint-Lunaire, tarifs MMA Saint-Lunaire, questions sport de combat Saint-Lunaire, débutant adulte MMA Saint-Lunaire, horaires dojo Saint-Lunaire, prix cours MMA Saint-Lunaire",
    },
    '/mentions-legales': {
      title: "Mentions légales - SLAMM MMA",
      description: "Mentions légales du club de MMA SLAMM Saint-Lunaire.",
      url: "https://kevinbdx35.github.io/slamm_2/#/mentions-legales",
      image: "https://kevinbdx35.github.io/slamm_2/img/social_share_image.jpg",
      keywords: "mentions légales MMA Saint-Lunaire, mentions légales arts martiaux mixtes Saint-Lunaire, mentions légales mixed martial arts Saint-Lunaire, association loi 1901 Saint-Lunaire, club sport de combat Saint-Lunaire, SLAMM association Saint-Lunaire, FMMAF Saint-Lunaire",
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
