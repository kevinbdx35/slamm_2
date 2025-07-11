import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Button,
  Divider,
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import DirectionsIcon from '@mui/icons-material/Directions'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'

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

      <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
        <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
          Nous contacter
        </Typography>
        <Typography variant="body1" mt={1} maxWidth={1000}>
          Pour toute question concernant les cours, les inscriptions ou le club, voici comment nous joindre.
        </Typography>
      </Box>

      <Grid container spacing={4} mt={6}>
        {/* Colonne gauche : Informations de contact */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} direction="column">
            {/* Contact rapide */}
            <Grid item>
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'primary.main',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <WhatsAppIcon sx={{ mr: 1, color: 'primary.main', fontSize: 28 }} />
                  <Typography variant="h5" fontWeight="bold">Contact Rapide</Typography>
                </Box>
                
                <Box mb={3}>
                  <Typography variant="body1" mb={1} fontWeight="bold">
                    WhatsApp / Téléphone
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    07 82 77 92 88
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  href="https://wa.me/33782779288?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20club%20de%20MMA."
                  target="_blank"
                  rel="noopener"
                  fullWidth
                  size="medium"
                  sx={{
                    borderRadius: 0,
                    fontWeight: "bold",
                    textTransform: "none",
                    borderWidth: 2,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    "&:hover": {
                      backgroundColor: '#25D366',
                      color: '#ffffff',
                      borderColor: '#25D366',
                    },
                  }}
                >
                  Écrire sur WhatsApp
                </Button>
              </Box>
            </Grid>

            {/* Autres contacts */}
            <Grid item>
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'primary.main',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <EmailIcon sx={{ mr: 1, color: 'primary.main', fontSize: 28 }} />
                  <Typography variant="h5" fontWeight="bold">Autres contacts</Typography>
                </Box>
                
                <Box mb={2}>
                  <Typography variant="subtitle2" color="text.secondary" mb={1}>
                    EMAIL
                  </Typography>
                  <Box
                    component="a"
                    href={emailHref}
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
                      mx: -1,
                      my: -0.5,
                      "&:hover": { 
                        textDecorationColor: 'primary.main',
                        textDecorationThickness: '2px',
                        backgroundColor: 'rgba(0, 255, 94, 0.08)',
                        transform: 'translateX(2px)',
                      },
                      "&:focus": {
                        outline: '2px solid',
                        outlineColor: 'primary.main',
                        outlineOffset: '2px',
                      }
                    }}
                  >
                    <Typography variant="body1">{emailDisplay}</Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2, borderColor: 'primary.main' }} />

                <Box>
                  <Typography variant="subtitle2" color="text.secondary" mb={1}>
                    INSTAGRAM
                  </Typography>
                  <Box
                    component="a"
                    href="https://instagram.com/slamm35800"
                    target="_blank"
                    rel="noopener"
                    aria-label="Suivez-nous sur Instagram @slamm35800"
                    sx={{ 
                      color: 'primary.main', 
                      textDecoration: 'underline',
                      textDecorationColor: 'rgba(0, 255, 94, 0.6)',
                      textDecorationThickness: '1.5px',
                      textUnderlineOffset: '3px',
                      display: 'inline-flex',
                      alignItems: 'baseline',
                      gap: 0.5,
                      transition: 'all 0.2s ease-in-out',
                      borderRadius: '4px',
                      px: 1,
                      py: 0.5,
                      mx: -1,
                      my: -0.5,
                      "&:hover": { 
                        textDecorationColor: 'primary.main',
                        textDecorationThickness: '2px',
                        backgroundColor: 'rgba(0, 255, 94, 0.08)',
                        transform: 'translateX(2px)',
                      },
                      "&:focus": {
                        outline: '2px solid',
                        outlineColor: 'primary.main',
                        outlineOffset: '2px',
                      }
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: '1.5rem' }} />
                    <Typography variant="body1">@slamm35800</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Colonne droite : Localisation */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '2px solid',
              borderColor: 'primary.main',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box display="flex" alignItems="center" mb={3}>
              <LocationOnIcon sx={{ mr: 1, color: 'primary.main', fontSize: 28 }} />
              <Typography variant="h5" fontWeight="bold">Localisation</Typography>
            </Box>
            
            <Box mb={3}>
              <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '1.1rem' }}>
                361 Rue de la Saudrais<br />
                35800 Saint-Lunaire<br />
                <Typography component="span" color="text.secondary" variant="body2">
                  Bretagne, France
                </Typography>
              </Typography>
            </Box>

            <Box mt="auto" display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
              <Button
                variant="outlined"
                href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                target="_blank"
                rel="noopener"
                startIcon={<DirectionsIcon />}
                sx={{
                  borderRadius: 0,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderWidth: 2,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  flex: 1,
                  "&:hover": {
                    backgroundColor: '#4285F4',
                    color: '#ffffff',
                    borderColor: '#4285F4',
                  },
                }}
              >
                Itinéraire
              </Button>
              
              <Button
                variant="outlined"
                href="https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai"
                target="_blank"
                rel="noopener"
                startIcon={<EventAvailableIcon />}
                sx={{
                  borderRadius: 0,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderWidth: 2,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  flex: 1,
                  whiteSpace: 'nowrap',
                  px: 3,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: '#00ff5e',
                    color: '#0a1414',
                    borderColor: '#00ff5e',
                  },
                }}
              >
                Réserve ton essai
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* CARTE MAP */}
      <Box component="section" mt={6} mb={4}>
        <Typography
          variant="h2"
          mb={3}
          sx={{
            borderBottom: '2px solid',
            borderColor: 'primary.main',
            display: 'inline-block',
          }}
        >
          Plan d'accès
        </Typography>

        <Box
          sx={{
            height: { xs: 250, md: 350 },
            border: '4px solid',
            borderColor: 'primary.main',
            borderRadius: 0,
            overflow: 'hidden',
          }}
        >
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
                <Box sx={{ textAlign: 'center', p: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                    🥊 SLAMM MMA
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    361 Rue de la Saudrais<br />
                    35800 Saint-Lunaire
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                    target="_blank"
                    rel="noopener"
                    startIcon={<DirectionsIcon />}
                    sx={{
                      borderRadius: 0,
                      textTransform: 'none',
                      fontSize: '0.75rem',
                    }}
                  >
                    Itinéraire
                  </Button>
                </Box>
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>
    </>
  )
}
