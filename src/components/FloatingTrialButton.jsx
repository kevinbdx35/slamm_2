// src/components/FloatingTrialButton.jsx
import { Fab, Zoom, useScrollTrigger, Tooltip } from "@mui/material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export default function FloatingTrialButton() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <Tooltip title="Réserver un cours d’essai" arrow>
        <Fab
          color="primary"
          aria-label="réserver cours d'essai"
          href="https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai"
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
