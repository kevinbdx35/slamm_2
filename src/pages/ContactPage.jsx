import React from 'react'
import {
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

// Leaflet marker config
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Coordonnées GPS
const lat = 48.629194657231274
const lng = -2.1120771896734203
const position = [lat, lng]

// Email protégé
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

      <Box
        sx={{
          mt: 8,
          mb: 10,
          px: 3,
          maxWidth: 1200,
          mx: 'auto',
          width: '100%',
        }}
      >
        <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
          <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
            Nous contacter
          </Typography>
          <Typography variant="body1" mt={1} maxWidth={1000}>
            Pour toute question concernant les cours, les inscriptions ou le club, voici comment nous joindre.
          </Typography>
        </Box>

        {/* INFOS DE CONTACT */}
        <Box component="section" mt={6} mb={6}>
          <Box display="flex" flexWrap="wrap" gap={4}>
            {[
              {
                icon: <LocationOnIcon sx={{ color: 'primary.main', fontSize: 30, mr: 1 }} />,
                title: 'ADRESSE',
                content: (
                  <>
                    361 Rue de la Saudrais<br />
                    35800 Saint-Lunaire
                  </>
                ),
              },
              {
                icon: <WhatsAppIcon sx={{ color: 'primary.main', fontSize: 30, mr: 1 }} />,
                title: 'WHATSAPP',
                content: (
                  <Box
                    component="a"
                    href="https://wa.me/33782779288?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20club%20de%20MMA."
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'underline', color: 'inherit' }}
                  >
                    07 82 77 92 88
                  </Box>
                ),
              },
              {
                icon: <EmailIcon sx={{ color: 'primary.main', fontSize: 30, mr: 1 }} />,
                title: 'EMAIL',
                content: (
                  <Box
                    component="a"
                    href={emailHref}
                    title={emailDisplay}
                    sx={{ textDecoration: 'underline', color: 'inherit', whiteSpace: 'nowrap' }}
                  >
                    {emailDisplay}
                  </Box>
                ),
              },
              {
                icon: <InstagramIcon sx={{ color: 'primary.main', fontSize: 30, mr: 1 }} />,
                title: 'INSTAGRAM',
                content: (
                  <Box
                    component="a"
                    href="https://instagram.com/slamm35800"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'underline', color: 'inherit' }}
                  >
                    @slamm35800
                  </Box>
                ),
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                sx={{
                  flex: '1 1 250px',
                  minWidth: 250,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  {item.icon}
                  <Typography variant="h5" fontWeight="bold">
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'break-word',
                    fontSize: '1rem',
                  }}
                >
                  {item.content}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>

        {/* CARTE MAP */}
        <Box component="section" mb={8}>
          <Typography
            variant="h2"
            mb={2}
            sx={{
              borderBottom: '2px solid',
              borderColor: 'primary.main',
              display: 'inline-block',
            }}
          >
            Localisation du club
          </Typography>

          <Card sx={{ height: 300, border: '4px solid', borderColor: 'primary.main', borderRadius: 0 }}>
            <CardContent sx={{ p: 0, height: '100%' }}>
              <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                touchZoom={false}
                doubleClickZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors & Carto'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <strong>SLAMM MMA</strong><br />
                    361 Rue de la Saudrais<br />
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ➤ Itinéraire Google Maps
                    </a>
                  </Popup>
                </Marker>
              </MapContainer>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  )
}
