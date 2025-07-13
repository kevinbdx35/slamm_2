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
import { Link } from 'react-router-dom';
import { PARTNER_URLS } from '../config/urls';
import SeoHelmet from '../components/SeoHelmet';

/**
 * Composant HomePage - Page d'accueil du site SLAMM
 */
export default function HomePage() {
  // URL de l'image principale optimisée (WebP responsive)
  const sharedImageUrl = 'https://mma-saint-lunaire.fr/img/mma_blur_vwsa7w_c_scale,w_1400.webp';

  return (
    <>
      <SeoHelmet
        title="Accueil - SLAMM MMA Saint-Lunaire"
        description="Découvrez notre club de MMA à Saint-Lunaire, proche de Saint-Malo, Dinard, Cancale et Dinan en Bretagne. Entraînez-vous en arts martiaux mixtes, mixed martial arts, grappling, self-défense et sports de combat dans notre dojo convivial."
        url="https://mma-saint-lunaire.fr/"
        image="https://mma-saint-lunaire.fr/img/social/social.jpg"
        keywords="MMA Saint-Lunaire, arts martiaux mixtes Saint-Lunaire, mixed martial arts Saint-Lunaire, sport de combat Saint-Lunaire, grappling Saint-Lunaire, dojo Saint-Lunaire, club sportif Saint-Lunaire, self-défense Saint-Lunaire, SLAMM Saint-Lunaire, FMMAF Saint-Lunaire"
      />

      {/* Hero Section */}
      <Box 
        component="section" 
        sx={{ 
          position: 'relative',
          minHeight: '70vh',
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
          borderBottom: '4px solid',
          borderColor: 'primary.main'
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
              Découvrez les arts martiaux mixtes avec nos instructeurs certifiés.
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
                    backgroundColor: '#00ff5e',
                    color: '#0a1414',
                    borderColor: '#00ff5e',
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
                    backgroundColor: '#ff6b35',
                    color: '#ffffff',
                    borderColor: '#ff6b35',
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
      <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2, mt: 4 }}>
        <Typography variant="h2" sx={{ letterSpacing: '-1px' }}>
          Saint-Lunaire Arts Martiaux Mixtes - Académie de MMA
        </Typography>
        <Typography variant="body1" mt={1} maxWidth={1000}>
          Association loi 1901 dédiée à l'enseignement et la pratique des Arts Martiaux Mixtes depuis 2023.
          Découvre nos cours, notre ambiance, et rejoins-nous pour tester le MMA.
        </Typography>
      </Box>

      {/* Image héroïque d'entraînement MMA */}
      <Box my={4} textAlign="center">
        <Box
          component="img"
          src={sharedImageUrl}
          alt="Combattants MMA en entraînement"
          title="Entraînement de MMA chez SLAMM"
          loading="lazy"
          maxWidth={2000}
          width="100%"
          sx={{ border: '4px solid', borderColor: 'primary.main', borderRadius: 0 }}
        />
      </Box>

      {/* Section éducative : Qu'est-ce que le MMA ? */}
      <Box component="section" mt={6}>
        <Typography variant="h2" mb={2} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Mixed Martial Arts - MMA
        </Typography>
        <Typography variant="body2" maxWidth={1000}>
        Les arts martiaux mixtes (mixed martial arts) sont un sport de combat complet qui combine plusieurs disciplines de combat différentes, telles que la boxe, la lutte, la luta livre, le kickboxing, le muay thaï, etc. Il y a généralement trois phases dans un combat de MMA : la phase debout, la phase de corps à corps et la phase au sol.
        </Typography>
      </Box>

      {/* Section bénéfices : Pourquoi pratiquer le MMA ? */}
      <Box component="section" mt={6}>
        <Typography variant="h2" mb={2} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Les bénéfices du MMA
        </Typography>
        <Typography variant="body2" maxWidth={1000}>
        Les arts martiaux mixtes, discipline complète qui combine différentes techniques comme la luta livre, offrent de nombreux bénéfices. Le MMA améliore la condition physique, renforce la confiance en soi et développe des compétences en autodéfense. Les entraînements de mixed martial arts permettent de libérer le stress accumulé, favorisent l'esprit de camaraderie et le respect envers les autres pratiquants.
        </Typography>

        {/* Image illustrative des bénéfices */}
        <Box my={4} textAlign="center">
          <Box
            component="img"
            src="https://mma-saint-lunaire.fr/img/photo_mma_ws3yn7_c_scale,w_1400.jpg"
            alt="Bénéfices de l'entraînement MMA"
            title="Entraînement et bienfaits du MMA"
            loading="lazy"
            maxWidth={2000}
            width="100%"
            sx={{ border: '4px solid', borderColor: 'primary.main', borderRadius: 0 }}
          />
        </Box>
      </Box>

      {/* Section partenaires : Soutiens du club */}
      <Box component="section" mt={6} mb={8}>
        <Typography variant="h2" mb={2} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Partenaires 2025–2026
        </Typography>
        <Typography variant="body2" maxWidth={1000} mb={4}>
          Notre association remercie chaleureusement les institutions, partenaires techniques, sponsors privés et amis du club pour leur soutien dans le développement de notre projet associatif et sportif.
        </Typography>
        {/* Grille des logos partenaires */}
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: 'Saint-lunaire', logo: 'img/partenaires/stlunaire.jpg', url: PARTNER_URLS.SAINT_LUNAIRE },
            { name: 'FMMAF', logo: 'img/partenaires/fmmaf.png', url: PARTNER_URLS.FMMAF },
            { name: 'Progress', logo: 'img/partenaires/progress.png', url: PARTNER_URLS.PROGRESS },
            { name: 'Votre logo ici', logo: 'img/partenaires/logo.webp', url: null },
            { name: 'Votre logo ici', logo: 'img/partenaires/logo.webp', url: null },
            { name: 'Votre logo ici', logo: 'img/partenaires/logo.webp', url: null }
          ].map((partner, i) => (
            <Grid item xs={6} sm={4} md={2} key={i} textAlign="center">
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
                  backgroundColor: '#fff',
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
                <Box
                  component="img"
                  src={partner.logo}
                  alt={`Logo de ${partner.name}`}
                  title={partner.name}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
              <Typography variant="caption" display="block">{partner.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
