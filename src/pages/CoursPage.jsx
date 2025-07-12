/**
 * Page Cours - Présentation des cours, tarifs et processus d'inscription
 * 
 * Cette page utilise un layout asymétrique avancé avec :
 * - Grid responsive séparé mobile/desktop 
 * - Hero section pour le Pack Découverte (8/12 colonnes)
 * - Sidebar avec créneaux et tarifs (4/12 colonnes)
 * - Stepper Material Design pour le processus d'inscription
 * - Design system cohérent avec les tokens Material Design 3
 */

import React from "react";
import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
  useTheme,
} from "@mui/material";

// Import des icônes Material Design pour les étapes et actions
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SeoHelmet from "../components/SeoHelmet";

/**
 * Configuration du processus d'inscription en étapes
 * Utilise le composant Stepper de Material-UI pour une UX claire
 */
const steps = [
  {
    label: "OBSERVE UN COURS",
    icon: <VisibilityIcon sx={{ color: "primary.main" }} />,
    description: "Aucune pression, juste pour découvrir.",
  },
  {
    label: "ESSAYE JUSQU’À 2 SÉANCES D’ESSAI",
    icon: <CheckCircleIcon sx={{ color: "primary.main" }} />,
    description: (
      <>
        <Typography variant="body2" color="error" sx={{ fontWeight: "bold" }}>
          En sept-oct : Gratuit!
        </Typography>
        <Typography variant="body2">
          À partir de novembre : 5 € par séance, déductible de l’adhésion.
        </Typography>
      </>
    ),
  },
  {
    label: "INSCRIPTION",
    icon: <AssignmentIcon sx={{ color: "primary.main" }} />,
    description: "Bienvenue dans l’équipe!",
  },
];

export default function PageCours() {
  const theme = useTheme();

  return (
    <>
      <SeoHelmet
        title="Cours de MMA - SLAMM Saint-Lunaire"
        description="Découvrez les créneaux, tarifs et modalités d'essai pour rejoindre notre club de MMA à Saint-Lunaire. Ouvert aux débutants comme aux confirmés."
        url="https://mma-saint-lunaire.fr/cours"
        image="https://mma-saint-lunaire.fr/img/social_share_image.jpg"
        keywords="cours MMA Saint-Lunaire, cours arts martiaux mixtes Saint-Lunaire, cours mixed martial arts Saint-Lunaire, cours sport de combat Saint-Lunaire, cours grappling Saint-Lunaire, débutant MMA Saint-Lunaire, cours self-défense Saint-Lunaire, formation MMA Saint-Lunaire, entraînement combat Saint-Lunaire"
      />

      <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
        <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
          Nos Cours de MMA
        </Typography>
        <Typography variant="body1" mt={1} maxWidth={1000}>
          Que tu sois débutant ou confirmé, découvre nos créneaux, notre système d'essai, et les modalités d’inscription.
        </Typography>
      </Box>

      {/* GRID ASYMÉTRIQUE AVANCÉ */}
      <Box sx={{ mt: 6 }}>
        {/* En MOBILE : Stack vertical de toutes les cartes */}
        <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
          <Grid container spacing={3} direction="column">
            {/* Carte Pack Découverte */}
            <Grid item xs={12}>
              <Box
                sx={{
                  border: '3px solid',
                  borderColor: 'primary.main',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, rgba(0,255,94,0.03) 0%, rgba(0,255,94,0.01) 100%)',
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <LocalOfferIcon sx={{ mr: 1.5, color: theme.palette.primary.main, fontSize: 32 }} />
                  <Typography variant="h4" fontWeight="bold" sx={{ letterSpacing: '-0.5px' }}>
                    Pack Découverte MMA
                  </Typography>
                </Box>
                
                <Stepper orientation="vertical" nonLinear activeStep={-1} sx={{ flex: 1 }}>
                  {steps.map((step, index) => (
                    <Step key={index} active>
                      <StepLabel icon={step.icon}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: '1.1rem' }}>
                          {step.label}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography sx={{ fontSize: '1rem' }}>{step.description}</Typography>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>

                <Box mt={3}>
                  <Button
                    variant="outlined"
                    href="https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai"
                    target="_blank"
                    rel="noopener"
                    fullWidth
                    size="large"
                    startIcon={<EventAvailableIcon />}
                    sx={{
                      borderRadius: 0,
                      fontWeight: "bold",
                      textTransform: "none",
                      borderWidth: 3,
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      py: 1.5,
                      fontSize: '1.1rem',
                      "&:hover": {
                        backgroundColor: '#00ff5e',
                        color: '#0a1414',
                        borderColor: '#00ff5e',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(0,255,94,0.3)',
                      },
                    }}
                  >
                    Réserver ton cours d'essai
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Carte Créneaux */}
            <Grid item xs={12}>
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'primary.main',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <EventAvailableIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: 24 }} />
                  <Typography variant="h6" fontWeight="bold">Créneaux 2025–2026</Typography>
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.05rem', flex: 1 }}>
                  <strong>Lundi</strong> 18h00 → 19h15<br />
                  <strong>Mercredi</strong> 19h15 → 21h15<br />
                  <strong>Vendredi</strong> 19h30 → 21h00
                </Typography>
              </Box>
            </Grid>

            {/* Carte Tarifs */}
            <Grid item xs={12}>
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'primary.main',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <PriceCheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: 24 }} />
                    <Typography variant="h6" fontWeight="bold">Tarifs 2025–2026</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                    <strong>+25 ans</strong> : 210 €<br />
                    <strong>+16 ans</strong> : 180 €
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    href="https://slamm.assoconnect.com/collect/description/540662-u-adhesion-annuelle-saison-2025-2026"
                    target="_blank"
                    rel="noopener"
                    fullWidth
                    size="medium"
                    startIcon={<AssignmentIcon />}
                    sx={{
                      borderRadius: 0,
                      fontWeight: "bold",
                      textTransform: "none",
                      borderWidth: 2,
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      "&:hover": {
                        backgroundColor: '#ff6b35',
                        color: '#ffffff',
                        borderColor: '#ff6b35',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    S'inscrire
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* En DESKTOP : Layout asymétrique */}
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Grid container spacing={3}>
            {/* HERO SECTION - Pack Découverte (Grande carte principale) */}
            <Grid item lg={8}>
              <Box
                sx={{
                  border: '3px solid',
                  borderColor: 'primary.main',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 400,
                  background: 'linear-gradient(135deg, rgba(0,255,94,0.03) 0%, rgba(0,255,94,0.01) 100%)',
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <LocalOfferIcon sx={{ mr: 1.5, color: theme.palette.primary.main, fontSize: 32 }} />
                  <Typography variant="h4" fontWeight="bold" sx={{ letterSpacing: '-0.5px' }}>
                    Pack Découverte MMA
                  </Typography>
                </Box>
                
                <Stepper orientation="vertical" nonLinear activeStep={-1} sx={{ flex: 1 }}>
                  {steps.map((step, index) => (
                    <Step key={index} active>
                      <StepLabel icon={step.icon}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: '1.1rem' }}>
                          {step.label}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography sx={{ fontSize: '1rem' }}>{step.description}</Typography>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>

                <Box mt={3}>
                  <Button
                    variant="outlined"
                    href="https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai"
                    target="_blank"
                    rel="noopener"
                    fullWidth
                    size="large"
                    startIcon={<EventAvailableIcon />}
                    sx={{
                      borderRadius: 0,
                      fontWeight: "bold",
                      textTransform: "none",
                      borderWidth: 3,
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      py: 1.5,
                      fontSize: '1.1rem',
                      "&:hover": {
                        backgroundColor: '#00ff5e',
                        color: '#0a1414',
                        borderColor: '#00ff5e',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(0,255,94,0.3)',
                      },
                    }}
                  >
                    Réserver ton cours d'essai
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* SIDEBAR - Cartes compactes */}
            <Grid item lg={4}>
              <Grid container spacing={3} direction="column">
                {/* Carte Créneaux - Compacte */}
                <Grid item>
                  <Box
                    sx={{
                      border: '2px solid',
                      borderColor: 'primary.main',
                      p: 3,
                      minHeight: 180,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={2}>
                      <EventAvailableIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: 24 }} />
                      <Typography variant="h6" fontWeight="bold">Créneaux 2025–2026</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.05rem', flex: 1 }}>
                      <strong>Lundi</strong> 18h00 → 19h15<br />
                      <strong>Mercredi</strong> 19h15 → 21h15<br />
                      <strong>Vendredi</strong> 19h30 → 21h00
                    </Typography>
                  </Box>
                </Grid>

                {/* Carte Tarifs - Compacte */}
                <Grid item>
                  <Box
                    sx={{
                      border: '2px solid',
                      borderColor: 'primary.main',
                      p: 3,
                      minHeight: 180,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Box display="flex" alignItems="center" mb={2}>
                        <PriceCheckIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: 24 }} />
                        <Typography variant="h6" fontWeight="bold">Tarifs 2025–2026</Typography>
                      </Box>
                      <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                        <strong>+25 ans</strong> : 210 €<br />
                        <strong>+16 ans</strong> : 180 €
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <Button
                        variant="outlined"
                        href="https://slamm.assoconnect.com/collect/description/540662-u-adhesion-annuelle-saison-2025-2026"
                        target="_blank"
                        rel="noopener"
                        fullWidth
                        size="medium"
                        startIcon={<AssignmentIcon />}
                        sx={{
                          borderRadius: 0,
                          fontWeight: "bold",
                          textTransform: "none",
                          borderWidth: 2,
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          "&:hover": {
                            backgroundColor: '#ff6b35',
                            color: '#ffffff',
                            borderColor: '#ff6b35',
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        S'inscrire
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

