import React from 'react';
import { Card, CardContent, Box, Typography, Button } from '@mui/material';

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
    <Card
      sx={{
        border: '2px solid',
        borderColor: 'primary.main',
        borderRadius: 0,
        height: '100%',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={3}>
          {React.cloneElement(icon, { 
            sx: { mr: 1, color: 'primary.main', fontSize: 28 } 
          })}
          <Typography variant="h5" fontWeight="bold">{title}</Typography>
        </Box>
        
        {children}

        {button && (
          <Button
            variant="outlined"
            href={button.href}
            target="_blank"
            rel="noopener"
            fullWidth
            size="medium"
            sx={{
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
      </CardContent>
    </Card>
  );
}