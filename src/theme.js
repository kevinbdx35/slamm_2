// theme.js
import { createTheme } from '@mui/material/styles';

const colors = {
  black: 'hsl(190, 65%, 9%)',       // Très sombre bleuté
  blackSurface: 'hsl(190, 65%, 9%)',
  white: '#FFFFFF',
  neonGreenDark: '#00ff5e',             // Vert vif (dark mode)
  neonGreenLight: 'hsl(135, 70%, 50%)', // Vert moins flashy (light mode)
};

const sharedComponents = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingTop: '2rem',
        paddingBottom: '2rem',
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
        '&:hover': {
          backgroundColor: colors.neonGreenDark,
          color: colors.black,
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
    fontFamily: `'IBM Plex Mono', monospace`,
    h1: {
      fontSize: '3rem',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      color: colors.black,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: colors.black,
    },
    body1: {
      fontSize: '1rem',
      color: colors.black,
    },
    body2: {
      fontSize: '0.95rem',
      color: colors.black,
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
          '&:hover': {
            backgroundColor: colors.neonGreenLight,
            color: colors.black,
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
    fontFamily: `'IBM Plex Mono', monospace`,
    h1: {
      fontSize: '3rem',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      color: colors.neonGreenDark,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: colors.neonGreenDark,
    },
    body1: {
      fontSize: '1rem',
      color: colors.white,
    },
    body2: {
      fontSize: '0.95rem',
      color: colors.white,
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
          '&:hover': {
            backgroundColor: colors.neonGreenDark,
            color: colors.black,
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
