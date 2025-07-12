/**
 * Composant Layout - Structure principale de l'application SLAMM
 * 
 * Ce composant définit la structure globale de l'application avec :
 * - Header/Navigation responsive
 * - Zone de contenu principal
 * - Footer informatif
 * - Éléments flottants (bouton d'essai, scroll to top)
 * - Error Boundary pour la gestion d'erreurs
 * - Skip navigation pour l'accessibilité
 * - Optimisations de performance avec lazy loading
 */

import React, { Suspense, lazy } from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";

// Lazy loading des composants flottants pour optimiser les performances
const FloatingTrialButton = lazy(() => import("./FloatingTrialButton.jsx"));
const ScrollToTop = lazy(() => import("./ScrollToTop.jsx"));

/**
 * Error Boundary pour capturer les erreurs des pages enfants
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Layout Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            textAlign: 'center',
            p: 4,
          }}
        >
          <Typography variant="h4" color="error" gutterBottom>
            Oups ! Une erreur s'est produite
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Veuillez rafraîchir la page ou retourner à l'accueil.
          </Typography>
          <Link href="/" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
            Retour à l'accueil
          </Link>
        </Box>
      );
    }

    return this.props.children;
  }
}

/**
 * Layout principal de l'application avec optimisations
 * 
 * @param {React.ReactNode} children - Contenu des pages à afficher
 * @param {boolean} isDark - État du mode sombre
 * @param {function} toggleTheme - Fonction de basculement du thème
 */
const Layout = React.memo(function Layout({ children, isDark, toggleTheme }) {
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
      {/* Skip to content link pour l'accessibilité */}
      <Link
        href="#main-content"
        sx={{
          position: 'absolute',
          top: -40,
          left: 6,
          zIndex: 10000,
          px: 2,
          py: 1,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 1,
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: 'bold',
          '&:focus': {
            top: 6,
          },
          transition: 'top 0.2s ease',
        }}
      >
        Aller au contenu principal
      </Link>

      {/* Composants avec lazy loading et fallbacks */}
      <Suspense fallback={<Box sx={{ height: 4 }} />}>
        <ScrollToTop />
      </Suspense>
      
      <Menu isDark={isDark} toggleTheme={toggleTheme} />

      {/* Zone de contenu principal avec Error Boundary */}
      <Box
        id="main-content"
        component="main"
        sx={{
          flex: 1,
          py: { xs: 2, md: 4 }, // Padding responsive
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters={false}
          sx={{
            px: { xs: 2, md: 3 }, // Padding horizontal responsive
          }}
        >
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </Container>
      </Box>

      <Footer />
      
      {/* FloatingTrialButton avec lazy loading */}
      <Suspense fallback={null}>
        <FloatingTrialButton />
      </Suspense>
    </Box>
  );
});

export default Layout;
