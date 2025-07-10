import React, { useState, useEffect } from 'react';
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
  const [bottomNavValue, setBottomNavValue] = useState(location.pathname);

  useEffect(() => {
    document.body.style.overflowX = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflowX = '';
    };
  }, [drawerOpen]);

  useEffect(() => {
    setBottomNavValue(location.pathname);
  }, [location.pathname]);

  const routes = [
    { label: 'Accueil', icon: <HomeIcon />, path: '/' },
    { label: 'Cours', icon: <ScheduleIcon />, path: '/cours' },
    { label: 'Équipe', icon: <PeopleIcon />, path: '/equipe' },
    { label: 'Actualités', icon: <ArticleIcon />, path: '/actualites' },
    { label: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
    { label: 'FAQ', icon: <HelpOutlineIcon />, path: '/faq' },
  ];

  const handleMobileNav = (path) => {
    navigate(path);
    setBottomNavValue(path);
    setDrawerOpen(false);
  };

  const ThemeToggleButton = (
    <Tooltip title={isDark ? 'Thème clair' : 'Thème sombre'}>
      <IconButton onClick={toggleTheme} color="inherit">
        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );

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
            <ListItemButton onClick={() => alert('Réserver ton cours d’essai')}>
              <ListItemText
                primary="Réserve ton essai"
                sx={{ pl: 2, fontWeight: 'bold' }}
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
        value={bottomNavValue}
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
              color="inherit"
              component={Link}
              to={item.path}
              sx={{ fontWeight: 600 }}
            >
              {item.label}
            </Button>
          ))}
          {ThemeToggleButton}
          <Button
            variant="contained"
            color="secondary"
            sx={{ ml: 2 }}
            onClick={() => alert('Réserver ton cours d’essai')}
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
