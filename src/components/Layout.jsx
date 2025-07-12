/**
 * Composant Layout - Structure principale de l'application SLAMM
 * 
 * Ce composant définit la structure globale de l'application avec :
 * - Header/Navigation responsive
 * - Zone de contenu principal
 * - Footer informatif
 * - Éléments flottants (bouton d'essai, scroll to top)
 */

import React from "react";
import { Box, Container } from "@mui/material";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import FloatingTrialButton from "./FloatingTrialButton.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

/**
 * Layout principal de l'application
 * 
 * @param {React.ReactNode} children - Contenu des pages à afficher
 * @param {boolean} isDark - État du mode sombre
 * @param {function} toggleTheme - Fonction de basculement du thème
 */
export default function Layout({ children, isDark, toggleTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <ScrollToTop />
      <Menu isDark={isDark} toggleTheme={toggleTheme} />

      <Box
        component="main"
        sx={{
          flex: 1,
          py: 4, // Padding vertical global uniforme
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters={false}
          sx={{
            px: 3, // Padding horizontal
          }}
        >
          {children}
        </Container>
      </Box>

      <Footer />
      <FloatingTrialButton />
    </Box>
  );
}
