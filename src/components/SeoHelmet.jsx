/**
 * Composant SeoHelmet - Gestion complète des métadonnées SEO
 * 
 * Ce composant centralise la gestion du SEO pour toutes les pages :
 * - Métadonnées standards (title, description, keywords)
 * - Open Graph pour les réseaux sociaux (Facebook, LinkedIn)
 * - Twitter Cards pour un partage optimisé
 * - Schema.org JSON-LD pour les données structurées
 * - Géolocalisation pour le référencement local
 * - Support mobile avec viewport optimisé
 */

import { Helmet } from 'react-helmet';

/**
 * Composant de gestion des métadonnées SEO
 * 
 * @param {string} title - Titre de la page (affiché dans l'onglet)
 * @param {string} description - Description pour les moteurs de recherche
 * @param {string} url - URL canonique de la page
 * @param {string} image - Image de partage social (Open Graph)
 * @param {string} keywords - Mots-clés pour le référencement
 * @param {string} type - Type de contenu OpenGraph (website, article, etc.)
 * @param {Object} schema - Schema.org personnalisé pour la page
 */
export default function SeoHelmet({
  title = 'SLAMM MMA',
  description = 'Découvre le MMA à Saint-Lunaire avec le club SLAMM. Entraînements, actualités et esprit combatif !',
  url = 'https://mma-saint-lunaire.fr/',
  image = 'https://mma-saint-lunaire.fr/img/social/social.jpg',
  keywords = 'MMA Saint-Lunaire, arts martiaux mixtes Bretagne, club combat Saint-Malo, entraînement MMA Dinard, SLAMM',
  type = 'website',
  schema = null, // Schema.org personnalisé pour chaque page
}) {
  
  // Schema.org par défaut pour l'organisation SLAMM
  // Optimisé pour le référencement local et la visibilité dans les recherches de clubs de sport
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "SLAMM - Saint-Lunaire Arts Martiaux Mixtes",
    "description": "Club de MMA à Saint-Lunaire proposant des cours d'arts martiaux mixtes, mixed martial arts, grappling, self-défense et sports de combat pour tous niveaux depuis 2023. Dojo affilié FMMAF.",
    "url": "https://mma-saint-lunaire.fr/",
    "logo": "https://mma-saint-lunaire.fr/img/logo-slamm.png",
    "image": image,
    "telephone": "+33782779288",
    "email": "slamm35800@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Boulevard Flusson (Mairie)",
      "addressLocality": "Saint-Lunaire",
      "postalCode": "35800",
      "addressRegion": "Bretagne, Ille-et-Vilaine, Côte d'Émeraude",
      "addressCountry": "FR"
    },
    "location": {
      "@type": "Place",
      "name": "Lieu d'entraînement SLAMM",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "361 Rue de la Saudrais",
        "addressLocality": "Saint-Lunaire",
        "postalCode": "35800",
        "addressRegion": "Bretagne",
        "addressCountry": "FR"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.629194657231274",
      "longitude": "-2.1120771896734203"
    },
    "sameAs": [
      "https://instagram.com/slamm35800"
    ],
    "sport": ["MMA", "Arts martiaux mixtes", "Mixed Martial Arts", "Sport de combat", "Grappling", "Self-défense", "Luta livre", "Muay Thai", "Combat libre"],
    "areaServed": {
      "@type": "Place",
      "name": "Côte d'Émeraude, Ille-et-Vilaine, Saint-Lunaire, Saint-Malo, Dinard, Cancale, Dinan, Saint-Briac, Bretagne"
    },
    "foundingDate": "2023",
    "memberOf": {
      "@type": "Organization",
      "name": "Fédération Française de MMA"
    }
  };
  return (
    <Helmet>
      {/* Configuration viewport pour mobile optimal */}
      {/* viewport-fit=cover pour les Safe Areas iOS (iPhone X+) */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
      />

      {/* Métadonnées SEO principales */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph pour les réseaux sociaux (Facebook, LinkedIn, WhatsApp...) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SLAMM MMA Saint-Lunaire" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Cards pour un partage optimisé sur X/Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@slamm35800" />

      {/* Données structurées Schema.org pour Google Rich Snippets */}
      {/* Améliore l'affichage dans les résultats de recherche */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>

      {/* Métadonnées de géolocalisation pour le référencement local */}
      {/* Optimise la visibilité dans les recherches "MMA près de moi" */}
      <meta name="geo.region" content="FR-35" />
      <meta name="geo.placename" content="Saint-Lunaire, Côte d'Émeraude, Ille-et-Vilaine" />
      <meta name="geo.position" content="48.629194657231274;-2.1120771896734203" />
      <meta name="ICBM" content="48.629194657231274, -2.1120771896734203" />
      
      {/* Métadonnées locales étendues pour le SEO géographique */}
      <meta name="locality" content="Saint-Lunaire" />
      <meta name="region" content="Bretagne" />
      <meta name="country" content="France" />
      <meta name="coverage" content="Saint-Malo, Dinard, Cancale, Dinan, Saint-Briac" />
    </Helmet>
  );
}
