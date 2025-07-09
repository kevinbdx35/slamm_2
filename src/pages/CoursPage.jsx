import React from "react";
import {
  Stack,
  Typography,
  Divider,
  Box,
  Button,
  Paper,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SeoHelmet from "../components/SeoHelmet";

export default function PageCours() {
  return (
    <>
      <SeoHelmet
        title="Cours de MMA - SLAMM Saint-Lunaire"
        description="Découvrez les créneaux, tarifs et modalités d'essai pour rejoindre notre club de MMA à Saint-Lunaire. Ouvert aux débutants comme aux confirmés."
        url="https://mma-saint-lunaire.fr/cours"
        image="https://mma-saint-lunaire.fr/img/cours_social.jpg"
      />

      <Stack spacing={6} alignItems="center" sx={{ mt: 8, maxWidth: 640, mx: "auto", px: 3 }}>
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Nos Cours
        </Typography>

        {/* Créneaux horaires */}
        <Paper elevation={3} sx={{ p: 3, width: "100%", textAlign: "center", borderRadius: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1} justifyContent="center" mb={2}>
            <EventAvailableIcon color="primary" />
            <Typography variant="h5" fontWeight="medium">Créneaux 2025-2026</Typography>
          </Stack>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            Lundi 18h00 → 19h15<br />
            Mercredi 19h15 → 21h15<br />
            Vendredi 19h30 → 21h00
          </Typography>
        </Paper>

        {/* Cours d'essai */}
        <Paper elevation={3} sx={{ p: 3, width: "100%", borderRadius: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1} justifyContent="center" mb={2}>
            <LocalOfferIcon color="secondary" />
            <Typography variant="h5" fontWeight="medium" textAlign="center">
              Cours d’essai
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2, textAlign: "center" }}>
            - 2 séances offertes (septembre - octobre)<br />
            - 5 € par séance dès novembre<br />
            Maximum 2 essais – montant déduit si inscription
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai"
            target="_blank"
            rel="noopener"
            fullWidth
            size="large"
            sx={{
              borderRadius: 2,
              fontWeight: "bold",
              textTransform: "none",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Réserver un cours d’essai
          </Button>
          <Typography variant="caption" sx={{ mt: 1, color: "text.secondary", textAlign: "center", display: "block" }}>
            Le formulaire s'ouvrira dans un nouvel onglet.
          </Typography>
        </Paper>

        {/* Tarifs */}
        <Paper elevation={3} sx={{ p: 3, width: "100%", borderRadius: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1} justifyContent="center" mb={2}>
            <PriceCheckIcon color="info" />
            <Typography variant="h5" fontWeight="medium" textAlign="center">
              Tarifs à la saison
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2, textAlign: "center" }}>
            +25 ans : 210 €<br />
            +16 ans : 180 €
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            href="https://slamm.assoconnect.com/collect/description/540662-u-adhesion-annuelle-saison-2025-2026"
            target="_blank"
            rel="noopener"
            fullWidth
            size="large"
            sx={{
              borderRadius: 2,
              fontWeight: "bold",
              textTransform: "none",
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: "secondary.light",
              },
            }}
          >
            S'inscrire pour la saison
          </Button>
          <Typography variant="caption" sx={{ mt: 1, color: "text.secondary", textAlign: "center", display: "block" }}>
            Le formulaire s'ouvrira dans un nouvel onglet.
          </Typography>
        </Paper>
      </Stack>
    </>
  );
}
