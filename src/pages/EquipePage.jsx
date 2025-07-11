import React from 'react'
import {
  Typography,
  Box,
  Stack,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import SeoHelmet from '../components/SeoHelmet'

const teamMembers = [
  {
    name: 'Malik',
    role: 'Président',
    initials: 'M',
    color: '#1976d2',
    diplomas: ['BF1 et BF2 de MMA - FMMAF', 'Référent musculation', 'PSC1'],
  },
  {
    name: 'Miguel',
    role: 'Vice-Président',
    initials: 'Mi',
    color: '#2e7d32',
    diplomas: ['PSC1 et PSC2'],
  },
  {
    name: 'Thomas',
    role: 'Trésorier',
    initials: 'T',
    color: '#d32f2f',
    diplomas: ['BF1 et BF2 de MMA - FMMAF', 'Référent pieds / poings', 'PSC1'],
  },
  {
    name: 'Kévin',
    role: 'Secrétaire',
    initials: 'K',
    color: '#512da8',
    diplomas: [
      'BF1 et BF2 de MMA - FMMAF',
      'BF1 de grappling et grappling fight - FFL',
      'Référent lutte / sol',
      'PSC1',
    ],
  },
]

export default function EquipePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <SeoHelmet
        title="Équipe SLAMM - Club de MMA Saint-Lunaire"
        description="Découvrez les membres fondateurs de SLAMM, passionnés et diplômés en MMA, grappling et sports de combat. Une équipe bienveillante et qualifiée pour vous encadrer."
        url="https://mma-saint-lunaire.fr/equipe"
        image="https://mma-saint-lunaire.fr/img/equipe_social.jpg"
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
        {/* Titre principal */}
        <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
          <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
            L’Équipe SLAMM
          </Typography>
          <Typography variant="body1" mt={1} maxWidth={1000}>
            SLAMM est née de la vision partagée de trois passionnés de MMA (Kévin, Malik, Thomas), chacun apportant des compétences complémentaires. 
            Nous encourageons une pratique loisirs bienveillante, respectueuse et adaptée à chacun.
          </Typography>
        </Box>

        <Box component="section" mt={6}>
          <Typography variant="h2" mb={2} sx={{ borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block' }}>
            Membres du bureau
          </Typography>

          <Stack spacing={4} mt={4}>
            {teamMembers.map(({ name, role, initials, diplomas, color }) => (
              <Box
                key={name}
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    bgcolor: color,
                    width: isMobile ? '100%' : 100,
                    minHeight: isMobile ? 60 : 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                    p: 2,
                  }}
                >
                  {initials}
                </Box>

                <Box sx={{ p: 3, flex: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {role}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Diplômes :
                  </Typography>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    {diplomas.map((d, i) => (
                      <li key={i}>
                        <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                          {d}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  )
}
