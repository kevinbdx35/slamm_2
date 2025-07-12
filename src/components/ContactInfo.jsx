import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * Composant pour afficher les informations de contact
 * @param {Object} props
 * @param {string} props.label - Label de l'information
 * @param {React.ReactNode} props.children - Contenu de l'information
 * @param {boolean} props.isLink - Si le contenu est un lien
 * @param {string} props.href - URL du lien
 */
export default function ContactInfo({ label, children, isLink = false, href }) {
  const content = (
    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
      {children}
    </Typography>
  );

  return (
    <Box mb={2}>
      <Typography variant="subtitle2" color="text.secondary" mb={1}>
        {label}
      </Typography>
      {isLink ? (
        <Box
          component="a"
          href={href}
          sx={{ 
            color: 'primary.main', 
            textDecoration: 'underline',
            textDecorationColor: 'rgba(0, 255, 94, 0.6)',
            textDecorationThickness: '1.5px',
            textUnderlineOffset: '3px',
            transition: 'all 0.2s ease-in-out',
            borderRadius: '4px',
            px: 1,
            py: 0.5,
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 94, 0.08)',
              textDecorationColor: 'rgba(0, 255, 94, 1)',
            },
          }}
        >
          {content}
        </Box>
      ) : (
        content
      )}
    </Box>
  );
}