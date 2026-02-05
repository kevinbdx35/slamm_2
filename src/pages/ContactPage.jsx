import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import StairsIcon from '@mui/icons-material/Stairs';
import WcIcon from '@mui/icons-material/Wc';
import SeoHelmet from '../components/SeoHelmet';
import ContactGrid from '../components/ContactGrid';

// Leaflet marker config
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/img/leaflet/marker-icon-2x.png',
  iconUrl: '/img/leaflet/marker-icon.png',
  shadowUrl: '/img/leaflet/marker-shadow.png',
});

// Coordonnées GPS
const lat = 48.629194657231274;
const lng = -2.1120771896734203;
const position = [lat, lng];

export default function ContactPage() {
  return (
    <>
      <SeoHelmet
        title="Contact SLAMM | Club MMA Saint-Lunaire, Dinard, Saint-Malo"
        description="Contactez le club SLAMM MMA à Saint-Lunaire. À 5 min de Dinard, 15 min de Saint-Malo, accessible depuis Pleurtuit, Dinan, Cancale et la Côte d'Émeraude."
        url="https://mma-saint-lunaire.fr/contact"
        image="https://mma-saint-lunaire.fr/img/social/social.jpg"
        keywords="contact MMA Saint-Lunaire, adresse club MMA Dinard, inscription MMA Saint-Malo, club sport combat Pleurtuit, dojo MMA Côte d'Émeraude, téléphone SLAMM, inscription MMA Dinan"
      />

      <Box
        sx={{
          py: 6,
          mb: 10,
          maxWidth: 1200,
          mx: "auto",
          width: "100%",
          px: 3,
        }}
      >
        <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
          <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
            Nous contacter
          </Typography>
          <Typography variant="body1" mt={1} maxWidth={1000}>
            Une question sur les cours, les inscriptions ou le club ? Voici comment nous contacter.
          </Typography>
        </Box>

        {/* Version mobile */}
        <Box component="section" sx={{ display: { xs: 'block', md: 'none' }, mt: 6 }}>
          <ContactGrid isMobile={true} />
        </Box>

        {/* Version desktop */}
        <Box component="section" sx={{ display: { xs: 'none', md: 'block' }, mt: 6 }}>
          <ContactGrid isMobile={false} />
        </Box>

        {/* Informations pratiques */}
        <Box component="section" mt={6}>
          <Typography variant="h2" mb={3} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
            Informations pratiques
          </Typography>

          <Grid container spacing={3}>
            {/* Parking */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <LocalParkingIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 1, fontWeight: 'bold' }}>
                  Parking gratuit
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stationnement gratuit disponible sur place
                </Typography>
              </Box>
            </Grid>

            {/* Accès */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <StairsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 1, fontWeight: 'bold' }}>
                  Entraînement à l'étage
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Le dojo se situe au premier étage du bâtiment
                </Typography>
              </Box>
            </Grid>

            {/* Vestiaires */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <WcIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 1, fontWeight: 'bold' }}>
                  Vestiaires séparés
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Vestiaires homme et femme disponibles
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Carte */}
        <Box component="section" mt={6}>
          <Typography variant="h2" mb={3} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
            Plan d'accès
          </Typography>
          <Box
            sx={{
              height: { xs: 300, md: 400 },
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: 0,
              overflow: 'hidden',
            }}
          >
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <strong>SLAMM MMA - Lieu d'entraînement</strong><br />
                  361 Rue de la Saudrais<br />
                  35800 Saint-Lunaire
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
}