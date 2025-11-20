import React from 'react';
import { Box, Typography, Button } from '@mui/material';

/**
 * Composant réutilisable pour les cartes de contact
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icône de la carte
 * @param {string} props.title - Titre de la carte
 * @param {React.ReactNode} props.children - Contenu de la carte
 * @param {Object} props.button - Configuration du bouton (text, href, sx)
 */
export default function ContactCard({ icon, title, children, button }) {
  return (
    <Box
      sx={{
        border: '2px solid',
        borderColor: 'primary.main',
        borderRadius: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box display="flex" alignItems="center" mb={3}>
          {React.cloneElement(icon, {
            sx: { mr: 1, color: 'primary.main', fontSize: 28 }
          })}
          <Typography component="div" sx={{ fontSize: '1.125rem', fontWeight: 'bold', letterSpacing: '0.02em' }}>{title}</Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          {children}
        </Box>

        {button && (
          <Button
            variant="outlined"
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            size="medium"
            sx={{
              mt: 2,
              borderRadius: 0,
              fontWeight: "bold",
              textTransform: "none",
              borderWidth: 2,
              borderColor: 'primary.main',
              color: 'primary.main',
              ...button.sx,
            }}
          >
            {button.text}
          </Button>
        )}
      </Box>
    </Box>
  );
}