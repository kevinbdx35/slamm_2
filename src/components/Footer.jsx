/**
 * Composant Footer - Pied de page informatif de SLAMM
 * 
 * Ce composant contient :
 * - Identité et présentation du club
 * - Informations de contact complètes (entraînements + siège social)
 * - Navigation rapide vers toutes les pages
 * - Liens sociaux (Instagram)
 * - Copyright et mentions légales
 * - Design responsive avec Material Design 3
 */

import { Box, Typography, Link, Stack, Divider, Grid, Container } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

/**
 * Composant Footer avec informations complètes du club
 */
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'surface.containerLowest',
        color: 'text.primary',
        borderTop: '2px solid',
        borderColor: 'primary.main',
        mt: "auto",
        py: 6,
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Identité club */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography 
                component="div"
              sx={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                letterSpacing: '0.02em'
              }} 
                sx={{ 
                  fontWeight: "bold",
                  color: 'primary.main',
                  mb: 1,
                  letterSpacing: '-0.5px'
                }}
              >
                SLAMM
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
                Saint-Lunaire Arts Martiaux Mixtes
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Club de MMA fondé en 2023, proposant des cours pour tous niveaux 
                dans une ambiance conviviale et sérieuse.
              </Typography>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography 
              component="div"
            sx={{
              fontSize: '0.875rem',
              fontWeight: '500',
              letterSpacing: '0.02em'
            }} 
              sx={{ 
                fontWeight: "bold", 
                mb: 2,
                color: 'text.primary'
              }}
            >
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ mr: 1, fontSize: 20, color: 'primary.main', mt: 0.2 }} />
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 'bold' }}>
                    Entraînements :
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    361 Rue de la Saudrais<br />35800 Saint-Lunaire
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 'bold', mt: 1 }}>
                    Siège social :
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Boulevard Flusson (Mairie)<br />35800 Saint-Lunaire
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1, fontSize: 20, color: 'primary.main' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  07 82 77 92 88
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, fontSize: 20, color: 'primary.main' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  slamm35800@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} md={4}>
            <Typography 
              component="div"
            sx={{
              fontSize: '0.875rem',
              fontWeight: '500',
              letterSpacing: '0.02em'
            }} 
              sx={{ 
                fontWeight: "bold", 
                mb: 2,
                color: 'text.primary'
              }}
            >
              Navigation
            </Typography>
            <Stack spacing={1}>
              {[
                { to: '/', label: 'Accueil' },
                { to: '/cours', label: 'Cours & Tarifs' },
                { to: '/equipe', label: 'Équipe' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  color="inherit"
                  underline="none"
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      opacity: 1,
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'outline.main', my: 4 }} />

        {/* Bottom section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={2}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} SLAMM – Tous droits réservés
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.5, fontStyle: 'italic' }}>
              • Site créé par Kevin depuis la Bretagne
            </Typography>
            <Link
              component={RouterLink}
              to="/mentions-legales"
              color="inherit"
              underline="hover"
              variant="caption"
              sx={{
                opacity: 0.7,
                transition: 'opacity 0.2s ease',
                '&:hover': { opacity: 1 }
              }}
            >
              Mentions légales
            </Link>
          </Stack>

          <Link
            href="https://instagram.com/slamm35800"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              transition: 'all 0.2s ease',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                color: 'primary.main',
                backgroundColor: 'action.hover',
                transform: 'translateY(-2px)',
              }
            }}
            aria-label="Suivez-nous sur Instagram @slamm35800"
          >
            <InstagramIcon sx={{ mr: 0.5, fontSize: 20 }} />
            <Typography variant="caption">@slamm35800</Typography>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
