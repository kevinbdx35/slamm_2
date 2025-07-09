import React from 'react'
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
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

        {/* Bloc Informations */}
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ height: 300 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Informations
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="📍 361 Rue de la Saudrais, 35800 Saint-Lunaire, Bretagne, France" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="✉️ slamm35800@gmail.com" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="☎️ 07 82 77 92 88" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText
                  primary="📷 Pour connaître nos dernières actualités, suivez-nous sur Instagram :"
                />
              </ListItem>
              <ListItem disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
                <InstagramIcon sx={{ mr: 1 }} />
                <ListItemText
                  primary={
                    <a
                      href="https://instagram.com/slamm35800"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#000', textDecoration: 'underline' }}
                    >
                      @slamm35800
                    </a>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

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
