import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  Home as HomeIcon,
  Schedule as ScheduleIcon,
  People as PeopleIcon,
  Article as ArticleIcon,
  ContactMail as ContactMailIcon,
  HelpOutline as HelpOutlineIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Menu({ isDark, toggleTheme }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflowX = '';
    };
  }, [drawerOpen]);

  const routes = useMemo(() => [
    { label: 'Accueil', icon: <HomeIcon />, path: '/' },
    { label: 'Cours', icon: <ScheduleIcon />, path: '/cours' },
    { label: 'Équipe', icon: <PeopleIcon />, path: '/equipe' },
    { label: 'Actualités', icon: <ArticleIcon />, path: '/actualites' },
    { label: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
    { label: 'FAQ', icon: <HelpOutlineIcon />, path: '/faq' },
  ], []);

  const handleMobileNav = useCallback((path) => {
    if (path !== location.pathname) {
      navigate(path);
    }
    setDrawerOpen(false);
  }, [location.pathname, navigate]);

  const ThemeToggleButton = useMemo(() => (
    <Tooltip title={isDark ? 'Thème clair' : 'Thème sombre'}>
      <IconButton onClick={toggleTheme} color="inherit">
        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  ), [isDark, toggleTheme]);

  const drawerMenu = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      ModalProps={{ keepMounted: true }}
    >
      <Box
        sx={{
          width: '100vw',
          maxWidth: 320,
          boxSizing: 'border-box',
          overflowX: 'hidden',
        }}
        role="presentation"
        onClick={() => setDrawerOpen(false)}
      >
        <List>
          {routes.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleMobileNav(item.path)}
                sx={{ overflow: 'hidden' }}
                selected={location.pathname === item.path}
              >
                {item.icon}
                <ListItemText
                  primary={item.label}
                  sx={{ pl: 2, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleTheme}>
              <ListItemText
                primary={isDark ? 'Thème clair' : 'Thème sombre'}
                sx={{ pl: 2 }}
              />
              {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              component="a"
              href="https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai"
              target="_blank"
              rel="noopener"
              sx={{
                backgroundColor: 'rgba(0, 255, 94, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 94, 0.2)',
                }
              }}
            >
              <ListItemText
                primary="Réserve ton essai"
                sx={{ pl: 2, fontWeight: 'bold', color: 'primary.main' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  const bottomNavigation = (
    <>
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(event, newValue) => handleMobileNav(newValue)}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          width: '100%',
          height: 56,
          boxSizing: 'border-box',
          borderTop: `2px solid ${theme.palette.primary.main}`, // ✅ Ajout
        }}
      >
        {routes
          .filter((r) => ['/', '/cours', '/contact'].includes(r.path))
          .map((item) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              value={item.path}
              icon={item.icon}
            />
          ))}
      </BottomNavigation>
      <Box sx={{ height: 56 }} />
    </>
  );

  const desktopMenu = (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
          component={Link}
          to="/"
          color="inherit"
        >
          SLAMM
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {routes.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#00ff5e' : theme.palette.mode === 'dark' ? 'white' : theme.palette.text.primary,
                fontWeight: location.pathname === item.path ? 'bold' : 600,
                borderBottom: location.pathname === item.path ? '2px solid #00ff5e' : '2px solid transparent',
                borderRadius: 0,
                pb: 0.5,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 94, 0.1)',
                  color: '#00ff5e',
                  borderBottomColor: '#00ff5e',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
          {ThemeToggleButton}
          <Button
            variant="contained"
            href="https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai"
            target="_blank"
            rel="noopener"
            sx={{
              ml: 2,
              backgroundColor: '#ff6b35',
              color: '#ffffff',
              fontWeight: 'bold',
              borderRadius: 0,
              px: 3,
              boxShadow: '0 2px 8px rgba(255, 107, 53, 0.3)',
              '&:hover': {
                backgroundColor: '#00ff5e',
                color: '#0a1414',
                boxShadow: '0 0 20px rgba(0, 255, 94, 0.5)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Réserve ton essai
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );

  return (
    <Box sx={{ overflowX: 'hidden', pb: { xs: 7, sm: 0 } }}>
      {isMobile ? (
        <>
          <AppBar position="fixed" color="primary" enableColorOnDark>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => handleMobileNav('/')}
              >
                SLAMM
              </Typography>
              {ThemeToggleButton}
            </Toolbar>
          </AppBar>
          {drawerMenu}
          <Toolbar /> {/* espace haut AppBar */}
          {bottomNavigation}
        </>
      ) : (
        desktopMenu
      )}
    </Box>
  );
}
