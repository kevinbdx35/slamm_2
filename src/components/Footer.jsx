import { Box, Typography, Link, Stack, Divider, useTheme } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'hsl(190, 65%, 6%)',
        color: '#fff',
        fontFamily: theme.typography.fontFamily,
        padding: theme.spacing(4),
        borderTop: `2px solid ${theme.palette.primary.main}`,
        mt: "auto",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        sx={{ mb: theme.spacing(2) }}
      >
        {/* Identité club */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            SLAMM – Saint-Lunaire Arts Martiaux Mixtes
          </Typography>
          <Typography variant="body2">Depuis 2023</Typography>
        </Box>
      </Stack>

      <Divider sx={{ borderColor: theme.palette.primary.main, my: 2 }} />

      {/* Mentions légales + Instagram, taille et alignement unifiés */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="caption">
            © {new Date().getFullYear()} SLAMM – Tous droits réservés
          </Typography>
          <Link
            href="/mentions-legales"
            color="inherit"
            underline="hover"
            variant="caption"
          >
            Mentions légales
          </Link>
        </Stack>

        <Link
          href="https://instagram.com/slamm"
          target="_blank"
          rel="noopener"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center' }}
          aria-label="Instagram SLAMM"
        >
          <InstagramIcon sx={{ mr: 0.5, fontSize: 20, color: '#fff' }} />
          <Typography variant="caption">Instagram</Typography>
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
