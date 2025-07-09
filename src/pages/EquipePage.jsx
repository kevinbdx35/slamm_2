import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import SeoHelmet from '../components/SeoHelmet'

const teamMembers = [
  {
    name: 'Malik',
    role: 'Président',
    avatar: 'M',
    diplomas: ['BF1 et BF2 de MMA - FMMAF', 'Référent musculation', 'PSC1'],
  },
  {
    name: 'Miguel',
    role: 'Vice-Président',
    avatar: 'Mi',
    diplomas: ['PSC1 et PSC2'],
  },
  {
    name: 'Thomas',
    role: 'Trésorier',
    avatar: 'T',
    diplomas: ['BF1 et BF2 de MMA - FMMAF', 'Référent pieds / poings', 'PSC1'],
  },
  {
    name: 'Kévin',
    role: 'Secrétaire',
    avatar: 'K',
    diplomas: [
      'BF1 et BF2 de MMA - FMMAF',
      'BF1 de grappling et grappling fight - FFL',
      'Référent lutte / sol',
      'PSC1',
    ],
  },
]

export default function EquipePage() {
  return (
    <>
      <SeoHelmet
        title="Équipe SLAMM - Club de MMA Saint-Lunaire"
        description="Découvrez les membres fondateurs de SLAMM, passionnés et diplômés en MMA, grappling et sports de combat. Une équipe bienveillante et qualifiée pour vous encadrer."
        url="https://mma-saint-lunaire.fr/equipe"
        image="https://mma-saint-lunaire.fr/img/equipe_social.jpg"
      />

      <Container sx={{ py: 6 }}>
        <Typography
          variant="h2"
          sx={{
            borderBottom: '2px solid',
            display: 'inline-block',
            mb: 3,
          }}
        >
          Qui sommes-nous
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, maxWidth: 1000 }}>
          SLAMM association loi 1901 est née de la vision partagée de trois
          passionnés de MMA (Kévin, Malik, Thomas), chacun apportant des
          compétences complémentaires. Nous encourageons une pratique loisirs
          basée sur la bienveillance, le respect et l'écoute mutuelle, afin de
          permettre à chaque membre de progresser dans un environnement adapté
          à ses envies et à ses capacités physiques.
        </Typography>

        <Typography
          variant="h2"
          sx={{
            borderBottom: '2px solid',
            display: 'inline-block',
            mb: 3,
          }}
        >
          Notre Équipe
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map(({ name, role, avatar, diplomas }) => (
            <Grid item xs={12} sm={6} md={3} key={name}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: '#39FF14',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      {avatar}
                    </Avatar>
                  }
                  title={<Typography sx={{ fontWeight: 700 }}>{name}</Typography>}
                  subheader={<Typography sx={{ fontWeight: 500 }}>{role}</Typography>}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                    Diplômes :
                  </Typography>
                  <List dense>
                    {diplomas.map((diploma, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemText
                          primary={diploma}
                          primaryTypographyProps={{ sx: { fontSize: '0.9rem' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
