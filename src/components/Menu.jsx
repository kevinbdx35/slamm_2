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

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Menu({ onNavigate, isDark, toggleTheme }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bottomNavValue, setBottomNavValue] = useState(0);

  // Empêche le scroll horizontal sur body quand drawer est ouvert
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowX = '';
    }
    return () => {
      document.body.style.overflowX = '';
    };
  }, [drawerOpen]);

  const menuItems = [
    { label: 'Accueil', icon: <HomeIcon />, page: 0 },
    { label: 'Cours', icon: <ScheduleIcon />, page: 1 },
    { label: 'Équipe', icon: <PeopleIcon />, page: 2 },
    { label: 'Actualités', icon: <ArticleIcon />, page: 3 },
    { label: 'Contact', icon: <ContactMailIcon />, page: 4 },
    { label: 'FAQ', icon: <HelpOutlineIcon />, page: 5 },
  ];

  const handleNavigate = (page) => {
    onNavigate(page);
    if (isMobile) {
      setBottomNavValue(page);
      setDrawerOpen(false);
    }
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
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavigate(item.page)}
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
              <ListItemText primary="Réserve ton essai" sx={{ pl: 2, fontWeight: 'bold' }} />
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
        onChange={(event, newValue) => {
          setBottomNavValue(newValue);
          onNavigate(newValue);
        }}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          width: '100%',
        }}
      >
        {menuItems.map((item) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
      <Box sx={{ height: 56 }} /> {/* espace pour éviter chevauchement */}
    </>
  );

  const desktopMenu = (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => handleNavigate(0)}
        >
          SLAMM
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              onClick={() => handleNavigate(item.page)}
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
    <Box sx={{ overflowX: 'hidden' }}>
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
                onClick={() => handleNavigate(0)}
              >
                SLAMM
              </Typography>
              {ThemeToggleButton}
            </Toolbar>
          </AppBar>
          {drawerMenu}
          <Toolbar /> {/* Espace haut AppBar */}
          {bottomNavigation}
        </>
      ) : (
        desktopMenu
      )}
    </Box>
  );
}
