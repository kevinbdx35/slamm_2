/**
 * Composant OptimizedImage - Image avec gestion d'erreur simple
 *
 * Ce composant améliore l'expérience utilisateur en gérant les erreurs
 * de chargement d'images avec un fallback élégant.
 */

import React, { useState } from 'react';
import { Box } from '@mui/material';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

/**
 * Composant d'image optimisée avec gestion d'erreur
 *
 * @param {string} src - URL de l'image
 * @param {string} srcSet - URLs responsives de l'image
 * @param {string} sizes - Tailles responsives
 * @param {string} alt - Texte alternatif (obligatoire pour accessibilité)
 * @param {string} title - Titre de l'image
 * @param {string} loading - Mode de chargement ('eager' ou 'lazy')
 * @param {string} fetchpriority - Priorité de fetch ('high', 'low', 'auto')
 * @param {object} sx - Styles Material-UI
 * @param {string|number} width - Largeur de l'image
 * @param {string|number} maxWidth - Largeur maximale
 * @param {string} fallbackSrc - Image de secours en cas d'erreur
 * @param {boolean} showErrorIcon - Afficher l'icône d'erreur (default: true)
 */
export default function OptimizedImage({
  src,
  srcSet,
  sizes,
  alt,
  title,
  loading = 'lazy',
  fetchpriority = 'auto',
  sx = {},
  width,
  maxWidth,
  fallbackSrc = null,
  showErrorIcon = true,
  ...props
}) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  // Si une erreur s'est produite et qu'on n'a pas de fallback, afficher le placeholder d'erreur
  if (hasError && !fallbackSrc) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'surface.variant',
          width: width || '100%',
          maxWidth: maxWidth,
          minHeight: 200,
          ...sx,
        }}
      >
        {showErrorIcon && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              color: 'text.secondary',
              opacity: 0.5,
            }}
          >
            <BrokenImageIcon sx={{ fontSize: 48 }} />
            {alt && (
              <Box
                component="span"
                sx={{
                  fontSize: '0.875rem',
                  textAlign: 'center',
                  px: 2,
                }}
              >
                Image non disponible
              </Box>
            )}
          </Box>
        )}
      </Box>
    );
  }

  // Image normale ou fallback
  return (
    <Box
      component="img"
      src={hasError && fallbackSrc ? fallbackSrc : src}
      srcSet={!hasError ? srcSet : undefined}
      sizes={!hasError ? sizes : undefined}
      alt={alt}
      title={title}
      loading={loading}
      fetchpriority={fetchpriority}
      onError={handleError}
      sx={{
        width: width || '100%',
        maxWidth: maxWidth,
        height: 'auto',
        ...sx,
      }}
      {...props}
    />
  );
}
