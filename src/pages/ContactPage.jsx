import React from 'react';
import { Typography, Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SeoHelmet from '../components/SeoHelmet';
import ContactGrid from '../components/ContactGrid';

// Leaflet marker config
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Coordonnées GPS
const lat = 48.629194657231274;
const lng = -2.1120771896734203;
const position = [lat, lng];

export default function ContactPage() {
  return (
    <>
      <SeoHelmet
        title="Contact SLAMM - Club de MMA à Saint-Lunaire"
        description="Contactez-nous pour plus d'informations sur nos cours de MMA, nos horaires et inscriptions. Situé à Saint-Lunaire, en Bretagne."
        url="https://mma-saint-lunaire.fr/contact"
        image="https://mma-saint-lunaire.fr/img/social_share_image.jpg"
        keywords="contact MMA Saint-Lunaire, contact arts martiaux mixtes Saint-Lunaire, contact mixed martial arts Saint-Lunaire, inscription dojo Saint-Lunaire, club sport de combat Saint-Lunaire, salle de sport Saint-Lunaire, téléphone club MMA Saint-Lunaire, adresse SLAMM Saint-Lunaire"
      />

      <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
        <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
          Nous contacter
        </Typography>
        <Typography variant="body1" mt={1} maxWidth={1000}>
          Pour toute question concernant les cours, les inscriptions ou le club, voici comment nous joindre.
        </Typography>
      </Box>

      {/* Version mobile */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 6 }}>
        <ContactGrid isMobile={true} />
      </Box>

      {/* Version desktop */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, mt: 6 }}>
        <ContactGrid isMobile={false} />
      </Box>

      {/* Carte */}
      <Box mt={6}>
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
    </>
  );
}