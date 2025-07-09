import React from 'react'
import { Container, Typography } from '@mui/material'
import SeoHelmet from '../components/SeoHelmet'

export default function ActualitesPage() {
  return (
    <>
      <SeoHelmet
        title="Actualités SLAMM - Club de MMA Saint-Lunaire"
        description="Retrouvez toutes les actualités du club SLAMM : événements, compétitions, stages, et vie du club à Saint-Lunaire."
        url="https://mma-saint-lunaire.fr/actualites"
        image="https://mma-saint-lunaire.fr/img/actualites_social.jpg"
      />

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Actualités
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Restez informé des dernières nouvelles et événements du club.
        </Typography>
      </Container>
    </>
  )
}
