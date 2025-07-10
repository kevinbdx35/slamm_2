import React from 'react'
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'

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

// Email reconstruit pour éviter les bots
const emailUser = 'slamm35800'
const emailDomain = 'gmail.com'
const emailHref = `mailto:${emailUser}@${emailDomain}`
const emailDisplay = `${emailUser}@${emailDomain}`

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

        {/* Bloc Informations */}
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
              icon: <LocationOnIcon fontSize="large" color="primary" />,
              title: 'ADRESSE',
              content: (
                <>
                  361 Rue de la Saudrais<br />
                  35800 Saint-Lunaire
                </>
              ),
            },
            {
              icon: <WhatsAppIcon fontSize="large" color="primary" />,
              title: 'WHATSAPP',
              content: (
                <Box
                  component="a"
                  href="https://wa.me/33782779288?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20club%20de%20MMA."
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'underline',
                    color: 'primary.main',
                    fontWeight: 'bold',
                    '&:visited': {
                      color: 'primary.main',
                    },
                  }}
                >
                  07 82 77 92 88
                </Box>
              ),
            },
            {
              icon: <EmailIcon fontSize="large" color="primary" />,
              title: 'EMAIL',
              content: (
                <Box
                  component="a"
                  href={emailHref}
                  title={emailDisplay}
                  sx={{
                    display: 'inline-block',
                    textDecoration: 'underline',
                    color: 'primary.main',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  {emailDisplay}
                </Box>
              ),
            },
            {
              icon: <InstagramIcon fontSize="large" color="primary" />,
              title: 'INSTAGRAM',
              content: (
                <Box
                  component="a"
                  href="https://instagram.com/slamm35800"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'underline',
                    color: 'primary.main',
                    fontWeight: 'bold',
                    '&:visited': {
                      color: 'primary.main',
                    },
                  }}
                >
                  @slamm35800
                </Box>
              ),
            },
          ].map((item, idx) => (
            <Card key={idx} sx={{ flex: '1 1 250px', minWidth: 250, boxShadow: 1 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  {item.icon}
                </Box>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    fontSize: '0.9rem',
                  }}
                >
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Bloc Carte */}
        <Card sx={{ mb: 4 }}>
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
