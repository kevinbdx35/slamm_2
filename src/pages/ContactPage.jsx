import React from 'react'
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import SeoHelmet from '../components/SeoHelmet'

// Configuration icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Position GPS
const position = [48.629194657231274, -2.1120771896734203]

export default function ContactPage() {
  return (
    <>
      <SeoHelmet
        title="Contact SLAMM - Club de MMA à Saint-Lunaire"
        description="Contactez-nous pour plus d'informations sur nos cours de MMA, nos horaires et inscriptions. Situé à Saint-Lunaire, en Bretagne."
        url="https://mma-saint-lunaire.fr/contact"
        image="https://mma-saint-lunaire.fr/img/slamm_map.jpg"
      />

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Nous contacter
        </Typography>

        {/* Bloc Informations - style basé sur l'image fournie */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            mb: 4,
          }}
        >
          {[
            {
              icon: '📍',
              title: 'ADRESSE',
              content: (
                <>
                  361 Rue de la Saudrais<br />
                  35800 Saint-Lunaire
                </>
              ),
            },
            {
              icon: '☎️',
              title: 'TÉLÉPHONE',
              content: '07 82 77 92 88',
            },
            {
              icon: '✉️',
              title: 'EMAIL',
              content: 'slamm35800@gmail.com',
            },
            {
              icon: <InstagramIcon fontSize="large" />,
              title: 'INSTAGRAM',
              content: (
                <a
                  href="https://instagram.com/slamm35800"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline', color: '#000' }}
                >
                  @slamm35800
                </a>
              ),
            },
          ].map((item, idx) => (
            <Card key={idx} sx={{ flex: '1 1 200px', minWidth: 200, boxShadow: 1 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: 30, mb: 1 }}>{item.icon}</Box>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Bloc Carte */}
        <Card>
          <CardContent sx={{ p: 0, height: 300 }}>
            <Typography variant="h6" sx={{ p: 2, pb: 0 }}>
              Où nous trouver ?
            </Typography>
            <Box sx={{ width: '100%', height: '100%' }}>
              <MapContainer
                center={position}
                zoom={15}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    SLAMM MMA<br />
                    361 Rue de la Saudrais, Saint-Lunaire
                  </Popup>
                </Marker>
              </MapContainer>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
