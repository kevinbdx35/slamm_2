/**
 * Page 404 - Page non trouvée
 *
 * Affichée lorsque l'utilisateur accède à une URL invalide.
 * Design cohérent avec l'identité SLAMM.
 */

import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        px: 3,
      }}
    >
      {/* Icône stylisée */}
      <Box
        sx={{
          position: 'relative',
          mb: 4,
        }}
      >
        <SportsKabaddiIcon
          sx={{
            fontSize: { xs: 80, md: 120 },
            color: 'primary.main',
            opacity: 0.8,
          }}
        />
      </Box>

      {/* Code d'erreur */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '4rem', md: '6rem' },
          fontWeight: 900,
          color: 'primary.main',
          letterSpacing: '-4px',
          lineHeight: 1,
          mb: 2,
        }}
      >
        404
      </Typography>

      {/* Message principal */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.5rem', md: '2rem' },
          fontWeight: 600,
          mb: 2,
        }}
      >
        Page non trouvée
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 500,
          mb: 4,
          opacity: 0.8,
        }}
      >
        Cette page semble avoir quitté le tatami.
        Elle n'existe pas ou a été déplacée.
      </Typography>

      {/* Boutons d'action */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="outlined"
          size="large"
          startIcon={<HomeIcon />}
          sx={{
            borderRadius: 0,
            fontWeight: 'bold',
            textTransform: 'none',
            borderWidth: 3,
            borderColor: 'primary.main',
            color: 'primary.main',
            py: 1.5,
            px: 4,
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              borderColor: 'primary.main',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Retour à l'accueil
        </Button>

        <Button
          component={Link}
          to="/contact"
          variant="outlined"
          size="large"
          sx={{
            borderRadius: 0,
            fontWeight: 'bold',
            textTransform: 'none',
            borderWidth: 2,
            borderColor: 'text.secondary',
            color: 'text.secondary',
            py: 1.5,
            px: 4,
            '&:hover': {
              backgroundColor: 'brand.orange',
              color: 'common.white',
              borderColor: 'brand.orange',
              transform: 'translateY(-1px)',
            },
          }}
        >
          Nous contacter
        </Button>
      </Box>
    </Box>
  );
}
