// theme.js
import { createTheme } from '@mui/material/styles';

const colors = {
  black: 'hsl(190, 65%, 9%)',
  blackSurface: 'hsl(190, 65%, 9%)',
  white: '#FFFFFF',
  neonGreen: 'hsl(135, 90%, 41%)',
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
        border: `2px solid ${colors.neonGreen}`,
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
        border: `2px solid ${colors.neonGreen}`,
        borderRadius: 0,
        backgroundColor: colors.black,
        color: colors.neonGreen,
        '&:hover': {
          backgroundColor: colors.neonGreen,
          color: colors.black,
        },
      },
    },
  },
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f4f3f1',
      paper: '#ffffff',
    },
    primary: {
      main: colors.neonGreen,
      contrastText: colors.black,
    },
    secondary: {
      main: colors.black,
      contrastText: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.neonGreen,
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
  components: sharedComponents,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.black,
      paper: colors.blackSurface,
    },
    primary: {
      main: colors.neonGreen,
      contrastText: colors.black,
    },
    secondary: {
      main: colors.white,
      contrastText: colors.black,
    },
    text: {
      primary: colors.white,
      secondary: colors.neonGreen,
    },
    divider: colors.neonGreen,
  },
  typography: {
    fontFamily: `'IBM Plex Mono', monospace`,
    h1: {
      fontSize: '3rem',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      color: colors.neonGreen,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: colors.neonGreen,
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
  components: sharedComponents,
});
