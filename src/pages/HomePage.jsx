import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SeoHelmet from '../components/SeoHelmet';

export default function HomePage() {
  const sharedImageUrl = 'https://mma-saint-lunaire.fr/img/mma_blur_vwsa7w_c_scale,w_1400.webp';

  return (
    <>
      <SeoHelmet
        title="Accueil - SLAMM MMA Saint-Lunaire"
        description="Découvrez notre club de MMA à Saint-Lunaire, proche de Saint-Malo, Dinard, Cancale et Dinan en Bretagne. Entraînez-vous en arts martiaux mixtes dans une ambiance conviviale et engagée."
        url="https://mma-saint-lunaire.fr"
        image="https://mma-saint-lunaire.fr/img/social_share_image.jpg"
      />

      <Container>
        <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
          <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
            Saint-Lunaire Arts Martiaux Mixtes - Académie de MMA
          </Typography>
          <Typography variant="body1" mt={1} maxWidth={1000}>
            Association loi 1901 dédiée à l'enseignement et la pratique des Arts Martiaux Mixtes.
            Découvre nos cours, notre ambiance, et rejoins-nous pour tester le MMA.
          </Typography>
        </Box>

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

        {/* Le reste de ta page inchangé... */}


      <Box component="section" mt={6}>
        <Typography variant="h2" mb={2} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Mixed Martial Arts - MMA
        </Typography>
        <Typography variant="body2" maxWidth={1000}>
          Le MMA (Mixed Martial Arts) est un sport de combat complet combinant plusieurs disciplines : boxe, lutte, luta livre, kickboxing, muay thaï, et bien plus encore. Un combat de MMA comprend trois phases : debout, corps à
          corps, et au sol.
        </Typography>
      </Box>

      <Box component="section" mt={6}>
        <Typography variant="h2" mb={2} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Les bénéfices du MMA
        </Typography>
        <Typography variant="body2" maxWidth={1000}>
          Le MMA améliore la condition physique, la confiance en soi et les réflexes. 
          Il développe aussi l'autodéfense, l’endurance, la coordination et favorise le respect, l'esprit d'équipe et la discipline.
        </Typography>

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


{/* SECTION PARTENAIRES */}
<Box component="section" mt={6} mb={8}>
  <Typography variant="h2" mb={2} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
    Partenaires 2025–2026
  </Typography>
  <Typography variant="body2" maxWidth={1000} mb={4}>
    Notre association remercie chaleureusement les institutions, partenaires techniques, sponsors privés et amis du club pour leur soutien dans le développement de notre projet associatif et sportif.
  </Typography>
  <Grid container spacing={4} justifyContent="center">
  {[
    { name: 'Ville de Saint-lunaire', logo: '/img/partenaires/stlunaire.jpg' },
    { name: 'FMMAF', logo: '/img/partenaires/fmmaf.png' },
    { name: 'Progress', logo: '/img/partenaires/progress.png' },
    { name: 'Votre logo ici', logo: '/img/partenaires/logo.webp' },
    { name: 'Votre logo ici', logo: '/img/partenaires/logo.webp' },
    { name: 'Votre logo ici', logo: '/img/partenaires/logo.webp' }
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

    </Container>
    </>
  );
}
