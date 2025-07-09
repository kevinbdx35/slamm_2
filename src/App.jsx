import { useState } from 'react'
import Menu from './components/Menu.jsx'
import HomePage from './pages/HomePage.jsx'
import CoursPage from './pages/CoursPage.jsx'
import EquipePage from './pages/EquipePage.jsx'
import ActualitesPage from './pages/ActualitesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import FloatingTrialButton from './components/FloatingTrialButton'
import SeoHelmet from './components/SeoHelmet.jsx'

export default function App({ isDark, toggleTheme }) {
  const [page, setPage] = useState(0)

  // Données SEO pour chaque page (à personnaliser)
  const seoData = [
    {
      title: "Accueil - SLAMM MMA Saint-Lunaire",
      description: "Découvre notre club de MMA à Saint-Lunaire, proche de Saint-Malo, Dinard, Cancale et Dinan.",
      url: "https://mma-saint-lunaire.fr",
      image: "https://mma-saint-lunaire.fr/img/social_share_image.jpg",
    },
    {
      title: "Cours de MMA - SLAMM",
      description: "Découvrez tous nos cours de MMA adaptés à tous les niveaux.",
      url: "https://mma-saint-lunaire.fr/cours",
      image: "https://mma-saint-lunaire.fr/img/cours_social.jpg",
    },
    {
      title: "Équipe SLAMM",
      description: "Rencontrez notre équipe d'entraîneurs et partenaires.",
      url: "https://mma-saint-lunaire.fr/equipe",
      image: "https://mma-saint-lunaire.fr/img/equipe_social.jpg",
    },
    {
      title: "Actualités - SLAMM",
      description: "Suivez toutes les actualités et événements de notre club.",
      url: "https://mma-saint-lunaire.fr/actualites",
      image: "https://mma-saint-lunaire.fr/img/actualites_social.jpg",
    },
    {
      title: "Contactez SLAMM",
      description: "Contactez-nous pour toutes questions ou inscriptions.",
      url: "https://mma-saint-lunaire.fr/contact",
      image: "https://mma-saint-lunaire.fr/img/contact_social.jpg",
    },
    {
      title: "FAQ - SLAMM MMA",
      description: "Questions fréquentes sur notre club et la pratique du MMA.",
      url: "https://mma-saint-lunaire.fr/faq",
      image: "https://mma-saint-lunaire.fr/img/faq_social.jpg",
    },
  ]

  const currentSeo = seoData[page]

  return (
    <>
      <SeoHelmet
        title={currentSeo.title}
        description={currentSeo.description}
        url={currentSeo.url}
        image={currentSeo.image}
      />

      <Menu onNavigate={setPage} isDark={isDark} toggleTheme={toggleTheme} />

      <main style={{ paddingTop: 64, paddingBottom: 56 }}>
        {page === 0 && <HomePage />}
        {page === 1 && <CoursPage />}
        {page === 2 && <EquipePage />}
        {page === 3 && <ActualitesPage />}
        {page === 4 && <ContactPage />}
        {page === 5 && <FaqPage />}
      </main>

      <FloatingTrialButton />
    </>
  )
}
