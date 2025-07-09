import { Helmet } from 'react-helmet';

export default function SeoHelmet({
  title = 'SLAMM MMA',
  description = 'Découvre le MMA à Saint-Lunaire avec le club SLAMM. Entraînements, actualités et esprit combatif !',
  url = 'https://mma-saint-lunaire.fr',
  image = 'https://mma-saint-lunaire.fr/img/og-image.jpg',
}) {
  return (
    <Helmet>
      {/* Viewport mobile responsive */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
      />

      {/* SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn...) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
