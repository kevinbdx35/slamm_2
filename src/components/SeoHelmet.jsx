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
 * @param {string} imageAlt - Texte alternatif pour l'image de partage social
 * @param {string} keywords - Mots-clés pour le référencement
 * @param {string} type - Type de contenu OpenGraph (website, article, etc.)
 * @param {Object|Array} schemas - Schema.org personnalisé(s) pour la page (objet unique ou tableau)
 */
export default function SeoHelmet({
  title = 'SLAMM MMA',
  description = 'Découvre le MMA à Saint-Lunaire avec le club SLAMM. Entraînements, actualités et esprit combatif !',
  url = 'https://mma-saint-lunaire.fr/',
  image = 'https://mma-saint-lunaire.fr/img/social/social.jpg',
  imageAlt = 'Logo du club SLAMM MMA Saint-Lunaire',
  keywords = 'MMA Saint-Lunaire, arts martiaux mixtes Bretagne, club combat Saint-Malo, entraînement MMA Dinard, SLAMM',
  type = 'website',
  schemas = null, // Schema.org personnalisé(s) pour chaque page (objet ou tableau)
}) {
  
  // Note: Les données structurées Schema.org principales sont maintenant dans index.html
  // pour garantir leur détection par Google Search Console (rendu HTML immédiat)
  // Ce composant peut toujours recevoir un schema personnalisé pour des pages spécifiques
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
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SLAMM MMA Saint-Lunaire" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Cards pour un partage optimisé sur X/Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@slamm35800" />

      {/* Données structurées Schema.org pour pages spécifiques uniquement */}
      {/* Les données structurées principales sont dans index.html */}
      {/* Support d'un schema unique ou d'un tableau de schemas */}
      {schemas && (
        Array.isArray(schemas)
          ? schemas.map((schema, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          : (
              <script type="application/ld+json">
                {JSON.stringify(schemas)}
              </script>
            )
      )}

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
