/**
 * Page Partenariat - Attirer de nouveaux sponsors et partenaires
 * 
 * Cette page présente :
 * - Les avantages de soutenir le club SLAMM
 * - Les différentes formules de partenariat
 * - Les besoins du club
 * - Les chiffres et impact du club
 * - Formulaire de contact pour partenariat
 */

import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { CONTACT_INFO } from '../config/urls';
import SeoHelmet from '../components/SeoHelmet';

export default function PartnershipPage() {
  const partnershipOffers = [
    {
      level: 'Bronze',
      price: '200 - 500€',
      color: '#CD7F32',
      benefits: [
        'Logo sur notre site web',
        'Mention sur nos réseaux sociaux',
        'Remerciements lors des événements'
      ]
    },
    {
      level: 'Argent',
      price: '500 - 1000€',
      color: '#C0C0C0',
      benefits: [
        'Tous les avantages Bronze',
        'Logo sur nos supports de communication',
        'Bannière pendant nos événements',
        'Articles dédiés sur nos réseaux',
        'Visibilité lors des compétitions'
      ]
    },
    {
      level: 'Or',
      price: '1000€+',
      color: '#FFD700',
      benefits: [
        'Tous les avantages précédents',
        'Naming d\'événements',
        'Partenariat privilégié et personnalisé',
        'Présence VIP lors des événements',
        'Collaboration sur mesure'
      ]
    }
  ];

  const clubNeeds = [
    'Équipements sportifs (tatamis, gants, protections)',
    'Matériel de communication (banderoles, flyers)',
    'Soutien logistique pour événements',
    'Partenariat financier pour développement',
    'Services (transport, hébergement, restauration)'
  ];

  const clubStats = [
    { label: 'Licenciés actifs', value: '50+' },
    { label: 'Années d\'existence', value: '2' },
    { label: 'Entraînements par semaine', value: '6' },
    { label: 'Événements organisés', value: '10+' }
  ];

  return (
    <>
      <SeoHelmet
        title="Devenez Partenaire - SLAMM MMA Saint-Lunaire"
        description="Rejoignez notre communauté de partenaires ! Soutenez le développement du MMA à Saint-Lunaire et bénéficiez d'une visibilité auprès d'une audience jeune et dynamique."
        url="https://mma-saint-lunaire.fr/partenariat"
        image="https://mma-saint-lunaire.fr/img/social/social.jpg"
      />

      {/* En-tête principal */}
      <Box component="section" mb={6}>
        <Typography 
          variant="h1" 
          mb={2}
          sx={{ 
            borderBottom: '3px solid', 
            borderColor: 'primary.main', 
            display: 'inline-block',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Devenez Partenaire du SLAMM
        </Typography>
        <Typography variant="h2" color="text.secondary" fontSize="1.2rem" mb={4}>
          Rejoignez notre communauté sportive dynamique et soutenez le développement du MMA en Bretagne
        </Typography>
      </Box>

      {/* Pourquoi nous soutenir */}
      <Box component="section" mb={6}>
        <Typography variant="h3" mb={3} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Pourquoi soutenir le SLAMM ?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" mb={2}>
              <strong>Un club en pleine croissance</strong> : Fondé en 2023, le SLAMM connaît un développement rapide avec une communauté grandissante de passionnés.
            </Typography>
            <Typography variant="body1" mb={2}>
              <strong>Un sport d'avenir</strong> : Le MMA attire une audience jeune, dynamique et engagée, offrant une excellente visibilité à nos partenaires.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" mb={2}>
              <strong>Des valeurs fortes</strong> : Respect, dépassement de soi, discipline et esprit d'équipe sont au cœur de notre philosophie.
            </Typography>
            <Typography variant="body1" mb={2}>
              <strong>Rayonnement local</strong> : Nous représentons Saint-Lunaire et la région dans les compétitions départementales et régionales.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Nos chiffres */}
      <Box component="section" mb={6}>
        <Typography variant="h3" mb={3} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Notre impact
        </Typography>
        <Grid container spacing={3}>
          {clubStats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card sx={{ textAlign: 'center', height: '100%' }}>
                <CardContent>
                  <Typography variant="h4" color="primary.main" mb={1}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Offres de partenariat */}
      <Box component="section" mb={6}>
        <Typography variant="h3" mb={3} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Nos offres de partenariat
        </Typography>
        <Grid container spacing={3}>
          {partnershipOffers.map((offer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', border: '2px solid', borderColor: offer.color }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Typography variant="h4" sx={{ color: offer.color }} mr={2}>
                      {offer.level}
                    </Typography>
                    <Chip 
                      label={offer.price} 
                      sx={{ backgroundColor: offer.color, color: '#fff' }}
                    />
                  </Box>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {offer.benefits.map((benefit, i) => (
                      <Typography component="li" variant="body2" mb={1} key={i}>
                        {benefit}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Nos besoins */}
      <Box component="section" mb={6}>
        <Typography variant="h3" mb={3} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Comment nous aider ?
        </Typography>
        <Typography variant="body1" mb={3}>
          Votre soutien peut prendre différentes formes selon vos possibilités :
        </Typography>
        <Grid container spacing={2}>
          {clubNeeds.map((need, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box display="flex" alignItems="center" mb={1}>
                <Box 
                  sx={{ 
                    width: 8, 
                    height: 8, 
                    backgroundColor: 'primary.main', 
                    borderRadius: '50%', 
                    mr: 2 
                  }} 
                />
                <Typography variant="body1">{need}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact */}
      <Box component="section" mb={6}>
        <Typography variant="h3" mb={3} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
          Contactez-nous
        </Typography>
        <Typography variant="body1" mb={3}>
          Vous souhaitez soutenir notre club ? Discutons ensemble de la formule qui vous convient !
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" mb={2}>Contact direct</Typography>
                <Typography variant="body1" mb={1}>
                  <strong>Email :</strong> {CONTACT_INFO.EMAIL}
                </Typography>
                <Typography variant="body1" mb={3}>
                  <strong>Téléphone :</strong> {CONTACT_INFO.PHONE}
                </Typography>
                <Button 
                  variant="contained" 
                  href={`mailto:${CONTACT_INFO.EMAIL}?subject=Demande de partenariat SLAMM`}
                  fullWidth
                >
                  Nous contacter par email
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" mb={2}>Rencontrons-nous</Typography>
                <Typography variant="body1" mb={3}>
                  Venez découvrir notre club et rencontrer notre équipe lors d'un entraînement.
                </Typography>
                <Typography variant="body2" mb={2}>
                  <strong>Adresse :</strong><br />
                  {CONTACT_INFO.TRAINING_ADDRESS}
                </Typography>
                <Button 
                  variant="outlined" 
                  href={`tel:${CONTACT_INFO.PHONE.replace(/\s/g, '')}`}
                  fullWidth
                >
                  Prendre rendez-vous
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}