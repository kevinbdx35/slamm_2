// theme.js
import { createTheme } from '@mui/material/styles';

const colors = {
  black: 'hsl(190, 65%, 9%)',       // Très sombre bleuté
  blackSurface: 'hsl(190, 65%, 9%)',
  white: '#FFFFFF',
  neonGreenDark: '#00ff5e',             // Vert vif (dark mode)
  neonGreenLight: 'hsl(135, 70%, 50%)', // Vert moins flashy (light mode)
};

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
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        borderRadius: 0,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
        '&:hover': {
          backgroundColor: colors.neonGreenDark,
          color: colors.black,
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '0',
          height: '0',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.3)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.6s, height 0.6s',
        },
        '&:active::before': {
          width: '300px',
          height: '300px',
        },
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
    background: {
      default: '#f4f3f1',
      paper: '#ffffff',
    },
    primary: {
      main: colors.neonGreenLight,
      contrastText: colors.black,
    },
    secondary: {
      main: colors.black,
      contrastText: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.neonGreenLight,
    },
  },
  typography: {
    fontFamily: `'Roboto Mono', 'IBM Plex Mono', monospace`,
    fontDisplay: 'swap',
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsive 40px-64px
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-2px',
      lineHeight: 1.1,
      color: colors.black,
      marginBottom: spacing.lg,
    },
    h2: {
      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', // Responsive 28px-40px
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      lineHeight: 1.2,
      color: colors.black,
      marginBottom: spacing.md,
    },
    h3: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // Responsive 20px-28px
      fontWeight: 700,
      letterSpacing: '-0.5px',
      lineHeight: 1.3,
      color: colors.black,
      marginBottom: spacing.md,
    },
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.black,
      marginBottom: spacing.sm,
    },
    h5: {
      fontSize: '1.125rem', // 18px
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.black,
      marginBottom: spacing.sm,
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.6,
      color: colors.black,
      marginBottom: spacing.md,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5,
      color: colors.black,
      marginBottom: spacing.sm,
    },
    subtitle1: {
      fontSize: '1.125rem', // 18px
      fontWeight: 500,
      lineHeight: 1.5,
      color: colors.black,
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.4,
      color: colors.black,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    ...sharedComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          border: `2px solid ${colors.neonGreenLight}`,
          borderRadius: 0,
          backgroundColor: '#fff',
          color: colors.neonGreenLight,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: `2px solid ${colors.neonGreenLight}`,
          backgroundColor: '#fff',
          color: colors.neonGreenLight,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: 0,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
          '&:hover': {
            backgroundColor: colors.neonGreenLight,
            color: colors.black,
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '0',
            height: '0',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.3)',
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.6s, height 0.6s',
          },
          '&:active::before': {
            width: '300px',
            height: '300px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.neonGreenLight,
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
    background: {
      default: colors.black,
      paper: colors.blackSurface,
    },
    primary: {
      main: colors.neonGreenDark,
      contrastText: colors.black,
    },
    secondary: {
      main: colors.white,
      contrastText: colors.black,
    },
    text: {
      primary: colors.white,
      secondary: colors.neonGreenDark,
    },
    divider: colors.neonGreenDark,
  },
  typography: {
    fontFamily: `'Roboto Mono', 'IBM Plex Mono', monospace`,
    fontDisplay: 'swap',
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsive 40px-64px
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-2px',
      lineHeight: 1.1,
      color: colors.neonGreenDark,
      marginBottom: spacing.lg,
    },
    h2: {
      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', // Responsive 28px-40px
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      lineHeight: 1.2,
      color: colors.neonGreenDark,
      marginBottom: spacing.md,
    },
    h3: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // Responsive 20px-28px
      fontWeight: 700,
      letterSpacing: '-0.5px',
      lineHeight: 1.3,
      color: colors.neonGreenDark,
      marginBottom: spacing.md,
    },
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.white,
      marginBottom: spacing.sm,
    },
    h5: {
      fontSize: '1.125rem', // 18px
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.white,
      marginBottom: spacing.sm,
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.6,
      color: colors.white,
      marginBottom: spacing.md,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5,
      color: colors.white,
      marginBottom: spacing.sm,
    },
    subtitle1: {
      fontSize: '1.125rem', // 18px
      fontWeight: 500,
      lineHeight: 1.5,
      color: colors.white,
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.4,
      color: colors.white,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    ...sharedComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          border: `2px solid ${colors.neonGreenDark}`,
          borderRadius: 0,
          backgroundColor: colors.black,
          color: colors.neonGreenDark,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: `2px solid ${colors.neonGreenDark}`,
          backgroundColor: colors.black,
          color: colors.neonGreenDark,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: 0,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
          '&:hover': {
            backgroundColor: colors.neonGreenDark,
            color: colors.black,
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 8px rgba(0, 255, 94, 0.3)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '0',
            height: '0',
            borderRadius: '50%',
            background: 'rgba(0, 255, 94, 0.3)',
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.6s, height 0.6s',
          },
          '&:active::before': {
            width: '300px',
            height: '300px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.neonGreenDark,
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});
