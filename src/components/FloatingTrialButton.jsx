/**
 * Composant FloatingTrialButton - Bouton flottant d'appel à l'action
 * 
 * Ce bouton flottant incite à l'action principale : réserver un cours d'essai.
 * 
 * Fonctionnalités :
 * - Apparition progressive au scroll (après 100px)
 * - Position fixe en bas à droite
 * - Transition Zoom avec Material-UI
 * - Tooltip informatif
 * - Lien direct vers la réservation Assoconnect
 * - Icône parlante (EventAvailable)
 */

import { Fab, Zoom, useScrollTrigger, Tooltip } from "@mui/material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { ASSOCONNECT_URLS } from '../config/urls.js';

/**
 * Bouton flottant pour réserver un cours d'essai
 * Apparaît après 100px de scroll pour encourager l'action
 */
export default function FloatingTrialButton() {
  // Détection du scroll pour afficher/masquer le bouton
  const trigger = useScrollTrigger({
    disableHysteresis: true, // Évite les oscillations
    threshold: 100, // Seuil d'apparition en pixels
  });

  return (
    <Zoom in={trigger}>
      <Tooltip title="Réserver un cours d’essai" arrow>
        <Fab
          color="primary"
          aria-label="réserver cours d'essai"
          href={ASSOCONNECT_URLS.TRIAL_BOOKING}
          target="_blank"
          rel="noopener"
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 24,
            zIndex: 1300,
            boxShadow: 3,
          }}
        >
          <EventAvailableIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}
