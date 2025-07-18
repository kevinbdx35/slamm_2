// Importation des dépendances React Router pour la gestion de la navigation
import { Routes, Route, useLocation } from 'react-router-dom'

// Importation du layout principal et des composants de pages
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import CoursPage from './pages/CoursPage.jsx'
import EquipePage from './pages/EquipePage.jsx'
import EvenementsPage from './pages/EvenementsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import MentionsLegalesPage from './pages/MentionsLegalesPage.jsx'
// import PartnershipPage from './pages/PartnershipPage.jsx' // TODO: Activer plus tard
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
      url: "https://mma-saint-lunaire.fr/",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "MMA Saint-Lunaire, arts martiaux mixtes Saint-Lunaire, mixed martial arts Saint-Lunaire, sport de combat Saint-Lunaire, grappling Saint-Lunaire, MMA Côte d'Émeraude, dojo Saint-Lunaire, club sportif Saint-Lunaire, FMMAF Bretagne, self-défense Ille-et-Vilaine",
    },
    '/cours': {
      title: "Cours de MMA - SLAMM",
      description: "Découvrez tous nos cours de MMA adaptés à tous les niveaux.",
      url: "https://mma-saint-lunaire.fr/cours",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "cours MMA Saint-Lunaire, cours arts martiaux mixtes Saint-Lunaire, cours mixed martial arts Saint-Lunaire, cours sport de combat Saint-Lunaire, cours grappling Saint-Lunaire, débutant MMA Saint-Lunaire, cours self-défense Saint-Lunaire, formation MMA Saint-Lunaire, entraînement combat Saint-Lunaire",
    },
    '/equipe': {
      title: "Équipe SLAMM",
      description: "Rencontrez notre équipe d'entraîneurs et partenaires.",
      url: "https://mma-saint-lunaire.fr/equipe",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "entraîneurs MMA Saint-Lunaire, professeurs arts martiaux mixtes Saint-Lunaire, coaches mixed martial arts Saint-Lunaire, instructeurs sport de combat Saint-Lunaire, professeurs grappling Saint-Lunaire, équipe SLAMM Saint-Lunaire, FMMAF Côte d'Émeraude, instructeurs self-défense Saint-Lunaire",
    },
    '/evenements': {
      title: "Événements SLAMM - Stages et compétitions MMA",
      description: "Découvrez tous nos événements : stages MMA, compétitions, portes ouvertes. Inscrivez-vous aux prochains événements du club SLAMM à Saint-Lunaire.",
      url: "https://mma-saint-lunaire.fr/evenements",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "stage MMA Saint-Lunaire, événements MMA Bretagne, compétition MMA, stage arts martiaux mixtes, événements club sportif Saint-Lunaire, compétitions grappling Saint-Lunaire, événements FMMAF Bretagne",
    },
    '/contact': {
      title: "Contactez SLAMM",
      description: "Contactez-nous pour toutes questions ou inscriptions.",
      url: "https://mma-saint-lunaire.fr/contact",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "contact MMA Saint-Lunaire, contact arts martiaux mixtes Saint-Lunaire, contact mixed martial arts Saint-Lunaire, inscription dojo Saint-Lunaire, club sport de combat Saint-Lunaire, salle de sport Saint-Lunaire, téléphone club MMA Saint-Lunaire, adresse SLAMM Saint-Lunaire",
    },
    '/faq': {
      title: "FAQ - SLAMM MMA",
      description: "Questions fréquentes sur notre club et la pratique du MMA.",
      url: "https://mma-saint-lunaire.fr/faq",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "FAQ MMA Saint-Lunaire, FAQ arts martiaux mixtes Saint-Lunaire, questions mixed martial arts Saint-Lunaire, tarifs MMA Saint-Lunaire, questions sport de combat Saint-Lunaire, débutant adulte MMA Saint-Lunaire, horaires dojo Saint-Lunaire, prix cours MMA Saint-Lunaire",
    },
    '/mentions-legales': {
      title: "Mentions légales - SLAMM MMA",
      description: "Mentions légales du club de MMA SLAMM Saint-Lunaire.",
      url: "https://mma-saint-lunaire.fr/mentions-legales",
      image: "https://mma-saint-lunaire.fr/img/social/social.jpg",
      keywords: "mentions légales MMA Saint-Lunaire, mentions légales arts martiaux mixtes Saint-Lunaire, mentions légales mixed martial arts Saint-Lunaire, association loi 1901 Saint-Lunaire, club sport de combat Saint-Lunaire, SLAMM association Saint-Lunaire, FMMAF Saint-Lunaire",
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
          <Route path="/evenements" element={<EvenementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          {/* <Route path="/partenariat" element={<PartnershipPage />} /> */} {/* TODO: Activer plus tard */}
        </Routes>
      </Layout>
    </>
  )
}
