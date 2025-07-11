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
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SeoHelmet from "../components/SeoHelmet";

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
        image="https://mma-saint-lunaire.fr/img/cours_social.jpg"
      />

      <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
        <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
          Nos Cours de MMA
        </Typography>
        <Typography variant="body1" mt={1} maxWidth={1000}>
          Que tu sois débutant ou confirmé, découvre nos créneaux, notre système d'essai, et les modalités d’inscription.
        </Typography>
      </Box>

      <Grid container spacing={4} mt={6}>
        {/* Colonne gauche : Créneaux + Pack découverte */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} direction="column">
            {/* Carte Créneaux */}
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
                <Box display="flex" alignItems="center" mb={2}>
                  <EventAvailableIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  <Typography variant="h5" fontWeight="bold">Créneaux 2025–2026</Typography>
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  Lundi 18h00 → 19h15<br />
                  Mercredi 19h15 → 21h15<br />
                  Vendredi 19h30 → 21h00
                </Typography>
              </Box>
            </Grid>

            {/* Carte Pack Découverte */}
            <Grid item>
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
                    <LocalOfferIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h5" fontWeight="bold">Pack Découverte</Typography>
                  </Box>
                  <Stepper orientation="vertical" nonLinear activeStep={-1}>
                    {steps.map((step, index) => (
                      <Step key={index} active>
                        <StepLabel icon={step.icon}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {step.label}
                          </Typography>
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Box>

                <Box mt={2} textAlign="center">
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai"
                    target="_blank"
                    rel="noopener"
                    size="medium"
                    sx={{
                      borderRadius: 0,
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      },
                    }}
                  >
                    Réserver un cours d’essai
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Colonne droite : Carte Tarifs */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '2px solid',
              borderColor: 'primary.main',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                <PriceCheckIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="h5" fontWeight="bold">Tarifs 2025–2026</Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                +25 ans : 210 €<br />
                +16 ans : 180 €
              </Typography>
            </Box>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                href="https://slamm.assoconnect.com/collect/description/540662-u-adhesion-annuelle-saison-2025-2026"
                target="_blank"
                rel="noopener"
                fullWidth
                size="medium"
                sx={{
                  borderRadius: 0,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderWidth: 2,
                  "&:hover": {
                    backgroundColor: "secondary.light",
                  },
                }}
              >
                S’inscrire pour la saison
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
