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
  HomeOutlined as HomeOutlinedIcon,
  Schedule as ScheduleIcon,
  ScheduleOutlined as ScheduleOutlinedIcon,
  People as PeopleIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  Article as ArticleIcon,
  ArticleOutlined as ArticleOutlinedIcon,
  ContactMail as ContactMailIcon,
  ContactMailOutlined as ContactMailOutlinedIcon,
  HelpOutline as HelpOutlineIcon,
  Help as HelpIcon,
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
    { 
      label: 'Accueil', 
      icon: <HomeOutlinedIcon />, 
      activeIcon: <HomeIcon />, 
      path: '/' 
    },
    { 
      label: 'Cours', 
      icon: <ScheduleOutlinedIcon />, 
      activeIcon: <ScheduleIcon />, 
      path: '/cours' 
    },
    { 
      label: 'Équipe', 
      icon: <PeopleOutlinedIcon />, 
      activeIcon: <PeopleIcon />, 
      path: '/equipe' 
    },
    { 
      label: 'Actualités', 
      icon: <ArticleOutlinedIcon />, 
      activeIcon: <ArticleIcon />, 
      path: '/actualites' 
    },
    { 
      label: 'Contact', 
      icon: <ContactMailOutlinedIcon />, 
      activeIcon: <ContactMailIcon />, 
      path: '/contact' 
    },
    { 
      label: 'FAQ', 
      icon: <HelpOutlineIcon />, 
      activeIcon: <HelpIcon />, 
      path: '/faq' 
    },
  ], []);

  const handleMobileNav = useCallback((path) => {
    if (path !== location.pathname) {
      navigate(path);
    }
    setDrawerOpen(false);
  }, [location.pathname, navigate]);

  const ThemeToggleButton = useMemo(() => (
    <Tooltip title={isDark ? 'Thème clair' : 'Thème sombre'}>
      <IconButton 
        onClick={toggleTheme} 
        color="inherit"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.1)',
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
            transition: 'width 0.4s, height 0.4s',
            pointerEvents: 'none',
          },
          '&:active::before': {
            width: '50px',
            height: '50px',
          },
        }}
      >
        <Box
          sx={{
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </Box>
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
          {routes.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() => handleMobileNav(item.path)}
                  sx={{ overflow: 'hidden' }}
                  selected={isActive}
                >
                  <Box sx={{ color: isActive ? theme.palette.primary.main : 'inherit' }}>
                    {isActive ? item.activeIcon : item.icon}
                  </Box>
                  <ListItemText
                    primary={item.label}
                    sx={{ 
                      pl: 2, 
                      whiteSpace: 'nowrap', 
                      textOverflow: 'ellipsis', 
                      overflow: 'hidden',
                      fontWeight: isActive ? 'bold' : 'normal',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem disablePadding>
            <ListItemButton 
              onClick={toggleTheme}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 94, 0.1)',
                }
              }}
            >
              <ListItemText
                primary={isDark ? 'Thème clair' : 'Thème sombre'}
                sx={{ pl: 2 }}
              />
              <Box
                sx={{
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: theme.palette.primary.main,
                }}
              >
                {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </Box>
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
          borderTop: `2px solid ${theme.palette.primary.main}`,
          // Safe Area iOS
          paddingBottom: 'env(safe-area-inset-bottom)',
          minHeight: 'calc(56px + env(safe-area-inset-bottom))',
        }}
      >
        {routes
          .filter((r) => ['/', '/cours', '/equipe', '/contact', '/faq'].includes(r.path))
          .map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <BottomNavigationAction
                key={item.label}
                label={item.label}
                value={item.path}
                icon={
                  <Box
                    sx={{
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isActive ? 'scale(1.2)' : 'scale(1)',
                      color: isActive ? theme.palette.primary.main : 'inherit',
                    }}
                  >
                    {isActive ? item.activeIcon : item.icon}
                  </Box>
                }
                sx={{
                  minWidth: 0,
                  padding: '6px 0',
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.75rem',
                    transition: 'all 0.3s ease',
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? theme.palette.primary.main : 'inherit',
                    opacity: isActive ? 1 : 0.7,
                    transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                  },
                  '&.Mui-selected': {
                    '& .MuiBottomNavigationAction-label': {
                      fontSize: '0.8rem',
                    },
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isActive ? '40px' : '0px',
                    height: '3px',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '0 0 2px 2px',
                    transition: 'width 0.3s ease',
                  },
                }}
              />
            );
          })}
      </BottomNavigation>
      <Box sx={{ height: 'calc(56px + env(safe-area-inset-bottom))' }} />
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
          <AppBar 
            position="fixed" 
            color="primary" 
            enableColorOnDark
            sx={{
              // Safe Area iOS
              paddingTop: 'env(safe-area-inset-top)',
              paddingLeft: 'env(safe-area-inset-left)',
              paddingRight: 'env(safe-area-inset-right)',
            }}
          >
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
          <Box sx={{ height: 'calc(64px + env(safe-area-inset-top))' }} /> {/* espace haut AppBar avec safe area */}
          {bottomNavigation}
        </>
      ) : (
        desktopMenu
      )}
    </Box>
  );
}
