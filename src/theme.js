/**
 * Configuration du système de design Material Design 3 pour SLAMM MMA
 * 
 * Ce fichier centralise la configuration complète du thème Material Design 3
 * avec les tokens de couleur, la typographie et les composants personnalisés
 * adaptés à l'identité visuelle du club SLAMM.
 */

import { createTheme } from '@mui/material/styles';

/**
 * Tokens de couleur Material Design 3 - Mode Clair
 * 
 * Configuration optimisée pour le mode clair avec :
 * - Vert sombre (#2e7d32) pour la lisibilité
 * - Palette bleu-vert cohérente avec l'identité SLAMM
 * - Respect des ratios de contraste WCAG AA
 */
const mdTokens = {
  // Couleurs primaires - Identité SLAMM en mode clair
  primary: '#2e7d32', // Vert sombre accessible et lisible
  onPrimary: '#ffffff', // Texte blanc sur fond vert
  primaryContainer: '#c8e6c9', // Container d'arrière-plan vert clair
  onPrimaryContainer: '#1b5e20', // Texte sombre sur container clair
  
  // Secondary colors (Neutral complements)
  secondary: '#4b635b',
  onSecondary: '#ffffff',
  secondaryContainer: '#cde9dd',
  onSecondaryContainer: '#072119',
  
  // Tertiary colors (Accent)
  tertiary: '#386a94',
  onTertiary: '#ffffff',
  tertiaryContainer: '#d0e4ff',
  onTertiaryContainer: '#001d36',
  
  // Error colors
  error: '#ba1a1a',
  onError: '#ffffff',
  errorContainer: '#ffdad6',
  onErrorContainer: '#410002',
  
  // Background colors (Light) - Cohérent avec dark bleu-vert
  background: '#f8fffe', // Très léger bleu-vert
  onBackground: '#0a1313', // Sombre bleu-vert
  surface: '#ffffff',
  onSurface: '#0a1313',
  surfaceVariant: '#e0f2f1', // Teinté vert très clair
  onSurfaceVariant: '#3e4947',
  
  // Surface containers - harmonisés bleu-vert
  surfaceDim: '#e8f5f5',
  surfaceBright: '#ffffff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f1fffe',
  surfaceContainer: '#ebf9f8',
  surfaceContainerHigh: '#e0f2f1',
  surfaceContainerHighest: '#daf0ef',
  
  // Outline - harmonisé avec teinte bleu-vert
  outline: '#6b7877',
  outlineVariant: '#b8c9c7',
  
  // Other - inversions cohérentes
  inverseSurface: '#0a1414', // hsl(190, 65%, 9%) pour cohérence
  inverseOnSurface: '#e0f2f1',
  inversePrimary: '#00ff5e', // Garde le néon pour les inversions
  shadow: '#000000',
  scrim: '#000000',
};

// Material Design 3 Dark Color Tokens - Adapté pour SLAMM Dark Mode avec hsl(190, 65%, 9%)
const mdTokensDark = {
  // Primary colors (SLAMM Neon Green éclatant en dark)
  primary: '#00ff5e', // Vert néon SLAMM pour dark mode
  onPrimary: '#003826',
  primaryContainer: '#005138',
  onPrimaryContainer: '#7ddc7a',
  
  // Secondary colors
  secondary: '#b1ccc2',
  onSecondary: '#1d352d',
  secondaryContainer: '#334b43',
  onSecondaryContainer: '#cde9dd',
  
  // Tertiary colors
  tertiary: '#a2c8ff',
  onTertiary: '#003258',
  tertiaryContainer: '#1e4a75',
  onTertiaryContainer: '#d0e4ff',
  
  // Error colors
  error: '#ffb4ab',
  onError: '#690005',
  errorContainer: '#93000a',
  onErrorContainer: '#ffb4ab',
  
  // Background colors (Dark) - Basé sur hsl(190, 65%, 9%) = #041a1a
  background: '#041a1a', // hsl(190, 65%, 9%) - couleur originale SLAMM
  onBackground: '#e0f2f1',
  surface: '#041a1a', // Surface principale identique au background
  onSurface: '#e0f2f1',
  surfaceVariant: '#1a3030', // Variation plus claire
  onSurfaceVariant: '#b0c4c4',
  
  // Surface containers - variations cohérentes de hsl(190, 65%, 9%)
  surfaceDim: '#041a1a', // Identique au background
  surfaceBright: '#0d2727', // Plus clair
  surfaceContainerLowest: '#021414', // Plus sombre
  surfaceContainerLow: '#062020', // Légèrement plus clair
  surfaceContainer: '#0a2424', // Container standard
  surfaceContainerHigh: '#0f2a2a', // Plus élevé
  surfaceContainerHighest: '#143030', // Le plus élevé
  
  // Outline - harmonisé avec la teinte bleu-vert
  outline: '#5a7070',
  outlineVariant: '#2a4040',
  
  // Other - inversions cohérentes
  inverseSurface: '#e0f2f1',
  inverseOnSurface: '#0a1313',
  inversePrimary: '#2e7d32', // Vert sombre pour les inversions en dark
  shadow: '#000000',
  scrim: '#000000',
};

// Legacy colors pour compatibilité (gardé pour référence)
// const colors = {
//   black: mdTokensDark.surface,
//   blackSurface: mdTokensDark.surfaceContainer,
//   white: mdTokens.surface,
//   neonGreenDark: mdTokensDark.primary,
//   neonGreenLight: mdTokens.primary,
// };

const spacing = {
  xs: '4px',   // 0.5 * 8px
  sm: '8px',   // 1 * 8px  
  md: '16px',  // 2 * 8px
  lg: '24px',  // 3 * 8px
  xl: '32px',  // 4 * 8px
  xxl: '48px', // 6 * 8px
  xxxl: '64px' // 8 * 8px
};

const sharedComponents = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingTop: spacing.xl,
        paddingBottom: spacing.xl,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12, // MD3 Surface container radius
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.20)', // MD3 Elevation 1
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none', // MD3: No text transform by default
        fontWeight: 500,
        borderRadius: 20, // MD3 Button radius
        minHeight: 40,
        paddingLeft: 24,
        paddingRight: 24,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)', // MD3 Standard easing
        '&:hover': {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px rgba(0, 0, 0, 0.15)', // MD3 Elevation 2
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
        // MD3 State layer for interactions
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'currentColor',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        },
        '&:hover::before': {
          opacity: 0.08, // MD3 Hover state layer
        },
        '&:active::before': {
          opacity: 0.12, // MD3 Pressed state layer
        },
      },
      // MD3 Button variants
      contained: {
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.20)',
      },
      outlined: {
        borderWidth: 1,
        borderColor: 'currentColor',
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: mdTokens.primary,
      contrastText: mdTokens.onPrimary,
      dark: mdTokens.primaryContainer,
      light: mdTokens.onPrimaryContainer,
    },
    secondary: {
      main: mdTokens.secondary,
      contrastText: mdTokens.onSecondary,
      dark: mdTokens.secondaryContainer,
      light: mdTokens.onSecondaryContainer,
    },
    tertiary: {
      main: mdTokens.tertiary,
      contrastText: mdTokens.onTertiary,
    },
    error: {
      main: mdTokens.error,
      contrastText: mdTokens.onError,
      dark: mdTokens.errorContainer,
      light: mdTokens.onErrorContainer,
    },
    background: {
      default: mdTokens.background,
      paper: mdTokens.surface,
    },
    surface: {
      main: mdTokens.surface,
      variant: mdTokens.surfaceVariant,
      container: mdTokens.surfaceContainer,
      containerHigh: mdTokens.surfaceContainerHigh,
      containerHighest: mdTokens.surfaceContainerHighest,
      containerLow: mdTokens.surfaceContainerLow,
      containerLowest: mdTokens.surfaceContainerLowest,
      dim: mdTokens.surfaceDim,
      bright: mdTokens.surfaceBright,
    },
    text: {
      primary: mdTokens.onSurface,
      secondary: mdTokens.onSurfaceVariant,
    },
    divider: mdTokens.outline,
    outline: {
      main: mdTokens.outline,
      variant: mdTokens.outlineVariant,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  typography: {
    // Material Design 3 Typography Scale avec IBM Plex Mono (brand identity)
    fontFamily: `'IBM Plex Mono', 'Roboto Mono', monospace`,
    fontDisplay: 'swap',
    
    // Display (largest text)
    h1: {
      fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', // MD3 Display Large: 57px
      fontWeight: 400,
      letterSpacing: '-0.25px',
      lineHeight: 1.12,
      marginBottom: spacing.lg,
    },
    
    // Headline 
    h2: {
      fontSize: 'clamp(1.75rem, 3vw, 2rem)', // MD3 Headline Large: 32px
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.25,
      marginBottom: spacing.md,
    },
    h3: {
      fontSize: '1.75rem', // MD3 Headline Medium: 28px
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.29,
      marginBottom: spacing.md,
    },
    
    // Title
    h4: {
      fontSize: '1.375rem', // MD3 Title Large: 22px
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.27,
      marginBottom: spacing.sm,
    },
    h5: {
      fontSize: '1rem', // MD3 Title Medium: 16px
      fontWeight: 500,
      letterSpacing: '0.15px',
      lineHeight: 1.5,
      marginBottom: spacing.sm,
    },
    h6: {
      fontSize: '0.875rem', // MD3 Title Small: 14px
      fontWeight: 500,
      letterSpacing: '0.1px',
      lineHeight: 1.43,
      marginBottom: spacing.sm,
    },
    
    // Body
    body1: {
      fontSize: '1rem', // MD3 Body Large: 16px
      fontWeight: 400,
      letterSpacing: '0.5px',
      lineHeight: 1.5,
      marginBottom: spacing.md,
    },
    body2: {
      fontSize: '0.875rem', // MD3 Body Medium: 14px
      fontWeight: 400,
      letterSpacing: '0.25px',
      lineHeight: 1.43,
      marginBottom: spacing.sm,
    },
    
    // Label
    subtitle1: {
      fontSize: '0.875rem', // MD3 Label Large: 14px
      fontWeight: 500,
      letterSpacing: '0.1px',
      lineHeight: 1.43,
    },
    subtitle2: {
      fontSize: '0.75rem', // MD3 Label Medium: 12px
      fontWeight: 500,
      letterSpacing: '0.5px',
      lineHeight: 1.33,
    },
    caption: {
      fontSize: '0.6875rem', // MD3 Label Small: 11px
      fontWeight: 500,
      letterSpacing: '0.5px',
      lineHeight: 1.45,
    },
    
    // Custom SLAMM variants (garde l'identité)
    displayLarge: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-2px',
      lineHeight: 1.1,
    },
    headlineSmall: {
      fontSize: '1.5rem', // MD3 Headline Small: 24px
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.33,
    },
  },
  shape: {
    borderRadius: 12, // MD3 Standard border radius
  },
  components: {
    ...sharedComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // MD3 Surface container radius
          display: 'flex',
          flexDirection: 'column',
          border: 'none',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.20)', // MD3 Elevation 1
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // MD3: No text transform by default
          fontWeight: 500,
          borderRadius: 20, // MD3 Button radius
          minHeight: 40,
          paddingLeft: 24,
          paddingRight: 24,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)', // MD3 Standard easing
          '&:hover': {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px rgba(0, 0, 0, 0.15)', // MD3 Elevation 2
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
          // MD3 State layer for interactions
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'currentColor',
            opacity: 0,
            transition: 'opacity 0.2s ease',
          },
          '&:hover::before': {
            opacity: 0.08, // MD3 Hover state layer
          },
          '&:active::before': {
            opacity: 0.12, // MD3 Pressed state layer
          },
        },
        // MD3 Button variants
        contained: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.20)',
        },
        outlined: {
          borderWidth: 1,
          borderColor: 'currentColor',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: mdTokensDark.primary,
      contrastText: mdTokensDark.onPrimary,
      dark: mdTokensDark.primaryContainer,
      light: mdTokensDark.onPrimaryContainer,
    },
    secondary: {
      main: mdTokensDark.secondary,
      contrastText: mdTokensDark.onSecondary,
      dark: mdTokensDark.secondaryContainer,
      light: mdTokensDark.onSecondaryContainer,
    },
    tertiary: {
      main: mdTokensDark.tertiary,
      contrastText: mdTokensDark.onTertiary,
    },
    error: {
      main: mdTokensDark.error,
      contrastText: mdTokensDark.onError,
      dark: mdTokensDark.errorContainer,
      light: mdTokensDark.onErrorContainer,
    },
    background: {
      default: mdTokensDark.background,
      paper: mdTokensDark.surface,
    },
    surface: {
      main: mdTokensDark.surface,
      variant: mdTokensDark.surfaceVariant,
      container: mdTokensDark.surfaceContainer,
      containerHigh: mdTokensDark.surfaceContainerHigh,
      containerHighest: mdTokensDark.surfaceContainerHighest,
      containerLow: mdTokensDark.surfaceContainerLow,
      containerLowest: mdTokensDark.surfaceContainerLowest,
      dim: mdTokensDark.surfaceDim,
      bright: mdTokensDark.surfaceBright,
    },
    text: {
      primary: mdTokensDark.onSurface,
      secondary: mdTokensDark.onSurfaceVariant,
    },
    divider: mdTokensDark.outline,
    outline: {
      main: mdTokensDark.outline,
      variant: mdTokensDark.outlineVariant,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  typography: {
    // Material Design 3 Typography Scale avec IBM Plex Mono (brand identity)
    fontFamily: `'IBM Plex Mono', 'Roboto Mono', monospace`,
    fontDisplay: 'swap',
    
    // Display (largest text)
    h1: {
      fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', // MD3 Display Large: 57px
      fontWeight: 400,
      letterSpacing: '-0.25px',
      lineHeight: 1.12,
      marginBottom: spacing.lg,
    },
    
    // Headline 
    h2: {
      fontSize: 'clamp(1.75rem, 3vw, 2rem)', // MD3 Headline Large: 32px
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.25,
      marginBottom: spacing.md,
    },
    h3: {
      fontSize: '1.75rem', // MD3 Headline Medium: 28px
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.29,
      marginBottom: spacing.md,
    },
    
    // Title
    h4: {
      fontSize: '1.375rem', // MD3 Title Large: 22px
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.27,
      marginBottom: spacing.sm,
    },
    h5: {
      fontSize: '1rem', // MD3 Title Medium: 16px
      fontWeight: 500,
      letterSpacing: '0.15px',
      lineHeight: 1.5,
      marginBottom: spacing.sm,
    },
    h6: {
      fontSize: '0.875rem', // MD3 Title Small: 14px
      fontWeight: 500,
      letterSpacing: '0.1px',
      lineHeight: 1.43,
      marginBottom: spacing.sm,
    },
    
    // Body
    body1: {
      fontSize: '1rem', // MD3 Body Large: 16px
      fontWeight: 400,
      letterSpacing: '0.5px',
      lineHeight: 1.5,
      marginBottom: spacing.md,
    },
    body2: {
      fontSize: '0.875rem', // MD3 Body Medium: 14px
      fontWeight: 400,
      letterSpacing: '0.25px',
      lineHeight: 1.43,
      marginBottom: spacing.sm,
    },
    
    // Label
    subtitle1: {
      fontSize: '0.875rem', // MD3 Label Large: 14px
      fontWeight: 500,
      letterSpacing: '0.1px',
      lineHeight: 1.43,
    },
    subtitle2: {
      fontSize: '0.75rem', // MD3 Label Medium: 12px
      fontWeight: 500,
      letterSpacing: '0.5px',
      lineHeight: 1.33,
    },
    caption: {
      fontSize: '0.6875rem', // MD3 Label Small: 11px
      fontWeight: 500,
      letterSpacing: '0.5px',
      lineHeight: 1.45,
    },
    
    // Custom SLAMM variants (garde l'identité)
    displayLarge: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-2px',
      lineHeight: 1.1,
    },
    headlineSmall: {
      fontSize: '1.5rem', // MD3 Headline Small: 24px
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.33,
    },
  },
  shape: {
    borderRadius: 12, // MD3 Standard border radius
  },
  components: {
    ...sharedComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // MD3 Surface container radius
          display: 'flex',
          flexDirection: 'column',
          border: 'none',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.24), 0px 1px 1px rgba(0, 0, 0, 0.28), 0px 2px 1px rgba(0, 0, 0, 0.40)', // MD3 Elevation 1 Dark
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // MD3: No text transform by default
          fontWeight: 500,
          borderRadius: 20, // MD3 Button radius
          minHeight: 40,
          paddingLeft: 24,
          paddingRight: 24,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)', // MD3 Standard easing
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.40), 0px 2px 6px rgba(0, 0, 0, 0.20)', // MD3 Elevation 2 Dark
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
          // MD3 State layer for interactions
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'currentColor',
            opacity: 0,
            transition: 'opacity 0.2s ease',
          },
          '&:hover::before': {
            opacity: 0.08, // MD3 Hover state layer
          },
          '&:active::before': {
            opacity: 0.12, // MD3 Pressed state layer
          },
        },
        // MD3 Button variants
        contained: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.24), 0px 1px 1px rgba(0, 0, 0, 0.28), 0px 2px 1px rgba(0, 0, 0, 0.40)',
        },
        outlined: {
          borderWidth: 1,
          borderColor: 'currentColor',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});
