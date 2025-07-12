import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'  // chemin corrigé
import HomePage from './pages/HomePage.jsx'
import CoursPage from './pages/CoursPage.jsx'
import EquipePage from './pages/EquipePage.jsx'
import ActualitesPage from './pages/ActualitesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import MentionsLegalesPage from './pages/MentionsLegalesPage.jsx'
import SeoHelmet from './components/SeoHelmet.jsx'

export default function App({ isDark, toggleTheme }) {
  const location = useLocation()

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

  const currentSeo = seoMap[location.pathname] || seoMap['/']

  return (
    <>
      <SeoHelmet
        title={currentSeo.title}
        description={currentSeo.description}
        url={currentSeo.url}
        image={currentSeo.image}
      />

      <Layout isDark={isDark} toggleTheme={toggleTheme}>
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
