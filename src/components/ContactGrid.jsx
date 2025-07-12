import React from 'react';
import { Box, Grid } from '@mui/material';
import ContactCard from './ContactCard';
import ContactInfo from './ContactInfo';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DirectionsIcon from '@mui/icons-material/Directions';

// Email protégé
const emailUser = 'slamm35800';
const emailDomain = 'gmail.com';
const emailHref = `mailto:${emailUser}@${emailDomain}`;
const emailDisplay = `${emailUser}@${emailDomain}`;

/**
 * Grille de contact réutilisable pour mobile et desktop
 * @param {Object} props
 * @param {boolean} props.isMobile - Si c'est la version mobile
 */
export default function ContactGrid({ isMobile = false }) {
  const gridProps = isMobile 
    ? { container: true, spacing: 4, direction: "column" }
    : { container: true, spacing: 4 };

  const itemProps = isMobile 
    ? { item: true, xs: 12 }
    : { item: true, xs: 12, md: 6 };

  return (
    <Grid {...gridProps}>
      {/* Contact rapide */}
      <Grid {...itemProps}>
        <ContactCard
          icon={<WhatsAppIcon />}
          title="Contact Rapide"
          button={{
            text: "Écrire sur WhatsApp",
            href: "https://wa.me/33782779288?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20club%20de%20MMA.",
            sx: {
              "&:hover": {
                backgroundColor: '#25D366',
                color: '#ffffff',
                borderColor: '#25D366',
              },
            }
          }}
        >
          <ContactInfo label="WhatsApp / Téléphone">
            07 82 77 92 88
          </ContactInfo>
        </ContactCard>
      </Grid>

      {/* Autres contacts */}
      <Grid {...itemProps}>
        <ContactCard
          icon={<EmailIcon />}
          title="Autres contacts"
        >
          <ContactInfo 
            label="EMAIL"
            isLink={true}
            href={emailHref}
          >
            {emailDisplay}
          </ContactInfo>
          
          <ContactInfo label="INSTAGRAM">
            <Box
              component="a"
              href="https://instagram.com/slamm35800"
              target="_blank"
              rel="noopener"
              sx={{ 
                color: 'primary.main', 
                textDecoration: 'underline',
                textDecorationColor: 'rgba(0, 255, 94, 0.6)',
                textDecorationThickness: '1.5px',
                textUnderlineOffset: '3px',
                transition: 'all 0.2s ease-in-out',
                borderRadius: '4px',
                px: 1,
                py: 0.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 94, 0.08)',
                  textDecorationColor: 'rgba(0, 255, 94, 1)',
                },
              }}
            >
              @slamm35800
            </Box>
          </ContactInfo>
        </ContactCard>
      </Grid>

      {/* Localisation */}
      <Grid {...itemProps}>
        <ContactCard
          icon={<LocationOnIcon />}
          title="Nous trouver"
          button={{
            text: "Itinéraire",
            href: "https://www.google.com/maps/dir//48.629194657231274,-2.1120771896734203",
            sx: {
              "&:hover": {
                backgroundColor: '#4285F4',
                color: '#ffffff',
                borderColor: '#4285F4',
              },
            }
          }}
        >
          <ContactInfo label="SIÈGE SOCIAL">
            Boulevard Flusson (Mairie)<br />
            35800 Saint-Lunaire
          </ContactInfo>
          
          <ContactInfo label="LIEU D'ENTRAÎNEMENT">
            361 Rue de la Saudrais<br />
            35800 Saint-Lunaire
          </ContactInfo>
        </ContactCard>
      </Grid>

      {/* Réseaux sociaux */}
      <Grid {...itemProps}>
        <ContactCard
          icon={<InstagramIcon />}
          title="Suivez-nous"
          button={{
            text: "Voir le profil",
            href: "https://instagram.com/slamm35800",
            sx: {
              "&:hover": {
                backgroundColor: '#E4405F',
                color: '#ffffff',
                borderColor: '#E4405F',
              },
            }
          }}
        >
          <ContactInfo label="INSTAGRAM">
            Actualités, photos d'entraînements, évènements du club
          </ContactInfo>
        </ContactCard>
      </Grid>

    </Grid>
  );
}