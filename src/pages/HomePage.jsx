/**
 * Page d'accueil - Vitrine principale du club SLAMM MMA
 * 
 * Cette page présente :
 * - Introduction au club et à son histoire (fondé en 2023)
 * - Image héroïque d'entraînement MMA
 * - Explication des arts martiaux mixtes (MMA/Mixed Martial Arts)
 * - Bénéfices de la pratique du MMA
 * - Section partenaires du club (ville, FMMAF, sponsors)
 * - SEO optimisé pour "MMA Saint-Lunaire" et villes environnantes
 */

import React from 'react';
import { Typography, Box, Grid, Button, Container } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { PARTNER_URLS } from '../config/urls';
import OptimizedImage from '../components/OptimizedImage';

/**
 * Composant HomePage - Page d'accueil du site SLAMM
 */
export default function HomePage() {
  // Styles réutilisables pour les bordures
  const imageBorderStyle = {
    border: '4px solid',
    borderColor: 'primary.main',
    borderRadius: 0
  };

  const sectionBorderStyle = {
    borderBottom: '4px solid',
    borderColor: 'primary.main'
  };

  const headingBorderStyle = {
    borderBottom: '2px solid',
    borderColor: 'primary.main',
    display: 'inline-block'
  };

  // Données structurées JSON-LD pour le SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Saint-Lunaire Arts Martiaux Mixtes (SLAMM)",
    "alternateName": "SLAMM MMA",
    "description": "Club de MMA et arts martiaux mixtes à Saint-Lunaire. Cours pour adultes à partir de 16 ans, tous niveaux.",
    "url": "https://mma-saint-lunaire.fr",
    "logo": "https://mma-saint-lunaire.fr/logo.png",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Saint-Lunaire",
      "addressRegion": "Bretagne",
      "addressCountry": "FR"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Saint-Lunaire"
      },
      {
        "@type": "City",
        "name": "Dinard"
      },
      {
        "@type": "City",
        "name": "Pleurtuit"
      },
      {
        "@type": "City",
        "name": "La Richardais"
      }
    ],
    "sport": "Mixed Martial Arts",
    "sameAs": [
      "https://www.facebook.com/slammclub/",
      "https://www.instagram.com/slamm_club/"
    ],
    "offers": {
      "@type": "Offer",
      "name": "Cours de MMA",
      "description": "Entraînements de MMA et arts martiaux mixtes",
      "category": "Sports & Recreation"
    }
  };

  return (
    <>
      {/* Schema Markup pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: { xs: '50vh', sm: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1611077492881-8d15417d0d38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(46, 125, 50, 0.7)',
            zIndex: 1
          },
          ...sectionBorderStyle
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 2,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }
              }}
            >
              Saint-Lunaire Arts Martiaux Mixtes
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                maxWidth: 800,
                mx: 'auto',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              Découvre les arts martiaux mixtes avec nos instructeurs certifiés.
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                maxWidth: 800,
                mx: 'auto',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              À partir de 16 ans - Tous niveaux bienvenus.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/cours"
                variant="outlined"
                size="large"
                aria-label="Découvrir nos cours de MMA et arts martiaux mixtes à Saint-Lunaire"
                sx={{
                  borderRadius: 0,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderWidth: 3,
                  borderColor: 'white',
                  color: 'white',
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  "&:hover": {
                    backgroundColor: 'brand.neonGreen',
                    color: 'brand.darkBg',
                    borderColor: 'brand.neonGreen',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0,255,94,0.3)',
                  }
                }}
              >
                Découvrir nos cours
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                aria-label="Contacter le club SLAMM pour une séance d'essai gratuite"
                sx={{
                  borderRadius: 0,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderWidth: 2,
                  borderColor: 'white',
                  color: 'white',
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'brand.orange',
                    color: 'common.white',
                    borderColor: 'brand.orange',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 8px rgba(255,107,53,0.3)',
                  }
                }}
              >
                Nous contacter
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* En-tête principal avec présentation du club */}
      <Box component="header" sx={{ ...sectionBorderStyle, pb: 2, mt: 4 }}>
        <Typography variant="h2" sx={{ letterSpacing: '-1px' }}>
          Saint-Lunaire Arts Martiaux Mixtes - Académie de MMA
        </Typography>
        <Typography variant="body1" mt={1} maxWidth={1000}>
          Association loi 1901 dédiée à l'enseignement et la pratique des Arts Martiaux Mixtes depuis 2023.
          Basé à Saint-Lunaire, notre club accueille les pratiquants de Dinard, Pleurtuit, La Richardais et toute la région.
          Découvre nos cours, notre ambiance, et rejoins-nous pour pratiquer le MMA.
        </Typography>
      </Box>

      {/* Galerie d'images d'entraînement MMA */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          my: 4,
          justifyContent: 'center',
          flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}
      >
        {[
          { id: 'miguel', src: '/img/team/miguel.webp', alt: 'Victoire de Miguel en NoGi' },
          { id: 'team', src: '/img/team/team.webp', alt: 'Une partie de l\'équipe 2025-2026' },
          { id: 'florian', src: '/img/team/photo1_scale,w_1400.webp', alt: 'Victoire de Florian en MMA', srcSet: `/img/team/photo1_scale,w_200.webp 200w, /img/team/photo1_scale,w_400.webp 400w, /img/team/photo1_scale,w_525.webp 525w, /img/team/photo1_scale,w_704.webp 704w, /img/team/photo1_scale,w_914.webp 914w, /img/team/photo1_scale,w_1104.webp 1104w, /img/team/photo1_scale,w_1314.webp 1314w, /img/team/photo1_scale,w_1400.webp 1400w` },
          { id: 'cage', src: '/img/team/cage.webp', alt: 'Travail du cage control' },
        ].map((image) => (
          <Box key={image.id} sx={{ flex: { xs: '0 0 calc(50% - 8px)', md: '0 0 calc(25% - 12px)' } }}>
            <OptimizedImage
              src={image.src}
              srcSet={image.srcSet}
              sizes="(max-width: 900px) 50vw, 25vw"
              alt={image.alt}
              title={image.alt}
              fetchpriority={image.id === 'miguel' ? "high" : "auto"}
              loading={image.id === 'miguel' ? "eager" : "lazy"}
              width="100%"
              sx={{
                ...imageBorderStyle,
                aspectRatio: '1 / 1',
                objectFit: 'cover'
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Section éducative : Qu'est-ce que le MMA ? */}
      <Box component="section" mt={6}>
        <Typography variant="h3" mb={2} sx={headingBorderStyle}>
          Mixed Martial Arts - MMA
        </Typography>
        <Typography variant="body2" maxWidth={1000}>
        Les arts martiaux mixtes (mixed martial arts) sont un sport de combat complet qui combine plusieurs disciplines de combat différentes, telles que la boxe, la lutte, la luta livre, le kickboxing, le muay thaï, etc. Il y a généralement trois phases dans un combat de MMA : la phase debout, la phase de corps à corps et la phase au sol. Notre académie à Saint-Lunaire propose des cours de MMA accessibles aux habitants de Dinard, Pleurtuit, La Richardais et toute la Côte d'Émeraude.
        </Typography>
      </Box>

      {/* Section bénéfices : Pourquoi pratiquer le MMA ? */}
      <Box component="section" mt={6}>
        <Typography variant="h3" mb={2} sx={headingBorderStyle}>
          Les bénéfices du MMA
        </Typography>
        <Typography variant="body2" maxWidth={1000}>
        Les arts martiaux mixtes, discipline complète qui combine différentes techniques, offrent de nombreux bénéfices. Le MMA améliore la condition physique, renforce la confiance en soi et développe des compétences en autodéfense. Les entraînements de mixed martial arts permettent de libérer le stress accumulé, favorisent l'esprit de camaraderie et le respect envers les autres pratiquants.
        </Typography>

        {/* Images de l'équipe */}
        <Box
          my={4}
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box sx={{ flex: 1 }}>
            <OptimizedImage
              src="/img/team2/equipe1_scale,w_1400.webp"
              srcSet={`
                /img/team2/equipe1_scale,w_200.webp 200w,
                /img/team2/equipe1_scale,w_637.webp 637w,
                /img/team2/equipe1_scale,w_955.webp 955w,
                /img/team2/equipe1_scale,w_1266.webp 1266w,
                /img/team2/equipe1_scale,w_1400.webp 1400w
              `}
              sizes="(max-width: 900px) 100vw, 50vw"
              alt="Une partie de l'équipe SLAMM de la saison 2024-2025"
              title="Une partie de l'équipe SLAMM de la saison 2024-2025"
              loading="lazy"
              width="100%"
              sx={imageBorderStyle}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <OptimizedImage
              src="/img/team2/cours_2025-2026_scale,w_1400.webp"
              srcSet={`
                /img/team2/cours_2025-2026_scale,w_200.webp 200w,
                /img/team2/cours_2025-2026_scale,w_637.webp 637w,
                /img/team2/cours_2025-2026_scale,w_955.webp 955w,
                /img/team2/cours_2025-2026_scale,w_1266.webp 1266w,
                /img/team2/cours_2025-2026_scale,w_1400.webp 1400w
              `}
              sizes="(max-width: 900px) 100vw, 50vw"
              alt="Cours saison 2025-2026"
              title="Cours saison 2025-2026"
              loading="lazy"
              width="100%"
              sx={imageBorderStyle}
            />
          </Box>
        </Box>
      </Box>

      {/* Section témoignages */}
      <Box component="section" mt={6}>
        <Typography variant="h3" mb={2} sx={headingBorderStyle}>
          Ils témoignent
        </Typography>
        <Typography variant="body2" maxWidth={1000} mb={4}>
          Découvrez ce que nos adhérents pensent de leur expérience au sein du club.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: '2px solid',
                borderColor: 'primary.main',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body1" sx={{ fontStyle: 'italic', flex: 1, mb: 2 }}>
                "La pratique du MMA m'a apporté discipline, confiance en moi et une condition physique optimale. C'est bien plus qu'un sport, c'est un mode de vie qui m'a renforcé mentalement et physiquement."
              </Typography>
              <Box>
                <Typography variant="subtitle2" color="primary.main" fontWeight="bold">
                  Miguel
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Adhérent depuis 2024
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: '2px solid',
                borderColor: 'primary.main',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body1" sx={{ fontStyle: 'italic', flex: 1, mb: 2 }}>
                "Je pratique le MMA depuis septembre 2024 et ça m'a appris beaucoup de choses sur moi que j'ignorais : le dépassement de soi, la condition physique et le mental. Je me sens bien mieux depuis que j'ai découvert cette pratique qui, depuis mon inscription, m'anime jour et nuit."
              </Typography>
              <Box>
                <Typography variant="subtitle2" color="primary.main" fontWeight="bold">
                  Florian
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Adhérent de 2024 à 2026
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Section partenaires : Soutiens du club */}
      <Box component="section" mt={6} mb={8}>
        <Typography variant="h3" mb={2} sx={headingBorderStyle}>
          Nos partenaires
        </Typography>
        <Typography variant="body2" maxWidth={1000} mb={4}>
          Notre association remercie chaleureusement les institutions, partenaires techniques, sponsors privés et amis du club pour leur soutien dans le développement de notre projet associatif et sportif.
        </Typography>
        {/* Grille des logos partenaires */}
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: 'Saint-lunaire', logo: 'img/partenaires/stlunaire.webp', url: PARTNER_URLS.SAINT_LUNAIRE },
            { name: 'FMMAF', logo: 'img/partenaires/fmmaf.webp', url: PARTNER_URLS.FMMAF },
            { name: 'Progress', logo: 'img/partenaires/progress.webp', url: PARTNER_URLS.PROGRESS },
            { name: 'RDX', logo: 'img/partenaires/rdx.webp', url: PARTNER_URLS.RDX },
          ].map((partner) => (
            <Grid item xs={6} sm={4} md={2} key={partner.name} textAlign="center">
              <Box
                component={
                  partner.url
                    ? partner.url.startsWith('http')
                      ? "a"
                      : Link
                    : "div"
                }
                href={partner.url && partner.url.startsWith('http') ? partner.url : undefined}
                to={partner.url && partner.url.startsWith('/') ? partner.url : undefined}
                target={partner.url && partner.url.startsWith('http') ? "_blank" : undefined}
                rel={partner.url && partner.url.startsWith('http') ? "noopener noreferrer" : undefined}
                sx={{
                  width: 150,
                  height: 100,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 1,
                  backgroundColor: 'common.white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 1,
                  textDecoration: 'none',
                  cursor: partner.url ? 'pointer' : 'default',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': partner.url ? {
                    transform: 'scale(1.05)',
                    borderColor: 'secondary.main'
                  } : {}
                }}
              >
                <OptimizedImage
                  src={partner.logo}
                  alt={`Logo de ${partner.name}`}
                  title={partner.name}
                  loading="lazy"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
              <Typography variant="caption" display="block" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                {partner.name}
                {partner.url && partner.url.startsWith('http') && (
                  <OpenInNew sx={{ fontSize: '0.75rem' }} />
                )}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
