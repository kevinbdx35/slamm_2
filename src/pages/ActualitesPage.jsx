import React from "react";
import { Container, Typography, Box } from "@mui/material";
import SeoHelmet from "../components/SeoHelmet";

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
        <Typography
          variant="h1"
          sx={{ borderBottom: "4px solid", borderColor: "primary.main", pb: 2, mb: 4 }}
        >
          Actualités
        </Typography>

        <Typography variant="body1" maxWidth={1000} mb={4}>
          Restez informé des dernières nouvelles et événements du club.
        </Typography>

        <Box
          sx={{
            border: "2px solid",
            borderColor: "primary.main",
            borderRadius: 0,
            p: 3,
            mb: 4,
            backgroundColor: "transparent",
            maxWidth: 800,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Reprise des cours
          </Typography>
          <Typography variant="body1" color="text.primary">
            Les cours reprendront le lundi 15 septembre 2025.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
