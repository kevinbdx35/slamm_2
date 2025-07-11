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
import { Typography, Box, Grid } from '@mui/material';
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
        image="https://mma-saint-lunaire.fr/img/social_share_image.jpg"
        keywords="MMA Saint-Lunaire, arts martiaux mixtes Saint-Lunaire, mixed martial arts Saint-Lunaire, sport de combat Saint-Lunaire, grappling Saint-Lunaire, dojo Saint-Lunaire, club sportif Saint-Lunaire, self-défense Saint-Lunaire, SLAMM Saint-Lunaire, FMMAF Saint-Lunaire"
      />

      {/* En-tête principal avec présentation du club */}
      <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
        <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
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
            { name: 'Saint-lunaire', logo: 'img/partenaires/stlunaire.jpg' }, // Ville de Saint-Lunaire
            { name: 'FMMAF', logo: 'img/partenaires/fmmaf.png' }, // Fédération Française de MMA
            { name: 'Progress', logo: 'img/partenaires/progress.png' }, // Partenaire technique
            { name: 'Votre logo ici', logo: 'img/partenaires/logo.webp' }, // Slots disponibles
            { name: 'Votre logo ici', logo: 'img/partenaires/logo.webp' }, // pour futurs
            { name: 'Votre logo ici', logo: 'img/partenaires/logo.webp' } // partenaires
          ].map((partner, i) => (
            <Grid item xs={6} sm={4} md={2} key={i} textAlign="center">
              <Box
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
                  mb: 1
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
