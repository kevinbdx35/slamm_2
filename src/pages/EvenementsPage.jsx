import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import { CalendarToday, LocationOn, AccessTime, Euro, People } from "@mui/icons-material";
import SeoHelmet from "../components/SeoHelmet";
import { ASSOCONNECT_URLS, CONTACT_INFO } from "../config/urls";

export default function EvenementsPage() {


  return (
    <>
      <SeoHelmet
        title="Événements SLAMM - Club MMA Saint-Lunaire"
        description="Suivez les futurs événements du club SLAMM : stages MMA, compétitions et portes ouvertes à Saint-Lunaire. Restez informés sur Instagram."
        url="https://mma-saint-lunaire.fr/evenements"
        image="https://mma-saint-lunaire.fr/img/social/social.jpg"
        keywords="événements MMA Saint-Lunaire, stages MMA futurs, club SLAMM actualités, MMA Bretagne événements, arts martiaux mixtes Saint-Lunaire"
      />

      <Box
        sx={{
          py: 4,
          px: 3,
          maxWidth: 1200,
          mx: "auto",
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{ borderBottom: "4px solid", borderColor: "primary.main", pb: 2, mb: 4 }}
        >
          Événements
        </Typography>

        <Typography variant="body1" maxWidth={1000} mb={6} color="text.primary">
          Participez à nos stages, compétitions et événements pour progresser et partager votre passion du MMA.
        </Typography>

        {/* Prochains événements */}
        <Box mb={6}>
          <Typography
            variant="h2"
            mb={3}
            sx={{ borderBottom: "2px solid", borderColor: "primary.main", display: "inline-block" }}
          >
            Prochains événements
          </Typography>

          <Box
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 0,
              p: 4,
              mb: 4,
              backgroundColor: "transparent",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" fontWeight="bold" mb={2} color="text.secondary">
              Aucun événement programmé
            </Typography>
            <Typography variant="body1" color="text.primary" mb={3}>
              Nous préparons de nouveaux événements pour vous. Restez connectés sur nos réseaux sociaux pour être informés en priorité !
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                size="large"
                href="https://instagram.com/slamm35800"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 0,
                  fontWeight: "bold",
                  textTransform: "none",
                  py: 1.5,
                  px: 4,
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Suivre sur Instagram
              </Button>
            </Box>
          </Box>
        </Box>

      </Box>
    </>
  );
}
