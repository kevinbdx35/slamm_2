import React from 'react';
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import SeoHelmet from '../components/SeoHelmet';

export default function MentionsLegalesPage() {
  return (
    <>
      <SeoHelmet
        title="Mentions légales - SLAMM MMA Saint-Lunaire"
        description="Mentions légales du club de MMA SLAMM (Saint-Lunaire Arts Martiaux Mixtes) - Informations juridiques et responsabilités."
        url="https://kevinbdx35.github.io/slamm_2/mentions-legales"
      />

      <Container maxWidth="md">
        <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2, mb: 4 }}>
          <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
            Mentions légales
          </Typography>
          <Typography variant="body1" mt={1}>
            Informations légales concernant le site web du club SLAMM MMA Saint-Lunaire.
          </Typography>
        </Box>

        <Card sx={{ mb: 4, border: '2px solid', borderColor: 'primary.main', borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              1. Informations sur l'éditeur
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>Dénomination :</strong> SLAMM (Saint-Lunaire Arts Martiaux Mixtes)
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>Siège social :</strong><br />
              Boulevard Flusson (Mairie)<br />
              35800 Saint-Lunaire<br />
              France
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>Lieu d'entraînement :</strong><br />
              361 Rue de la Saudrais<br />
              35800 Saint-Lunaire<br />
              France
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>Téléphone :</strong> 07 82 77 92 88
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>Email :</strong> slamm35800@gmail.com
            </Typography>

            <Divider sx={{ my: 3, borderColor: 'primary.main' }} />

            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              2. Hébergement
            </Typography>
            
            <Typography variant="body1" paragraph>
              Ce site est hébergé par GitHub Pages :
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>GitHub, Inc.</strong><br />
              88 Colin P Kelly Jr St<br />
              San Francisco, CA 94107<br />
              États-Unis
            </Typography>

            <Divider sx={{ my: 3, borderColor: 'primary.main' }} />

            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              3. Propriété intellectuelle
            </Typography>
            
            <Typography variant="body1" paragraph>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </Typography>
            
            <Typography variant="body1" paragraph>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du club SLAMM.
            </Typography>

            <Divider sx={{ my: 3, borderColor: 'primary.main' }} />

            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              4. Protection des données personnelles
            </Typography>
            
            <Typography variant="body1" paragraph>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </Typography>
            
            <Typography variant="body1" paragraph>
              Ce site ne collecte aucune donnée personnelle sans votre consentement explicite. Les seules données collectées sont celles que vous fournissez volontairement lors de prises de contact.
            </Typography>
            
            <Typography variant="body1" paragraph>
              Pour exercer vos droits, contactez-nous à : slamm35800@gmail.com
            </Typography>

            <Divider sx={{ my: 3, borderColor: 'primary.main' }} />

            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              5. Cookies
            </Typography>
            
            <Typography variant="body1" paragraph>
              Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement (préférences de thème). Aucun cookie de suivi ou publicitaire n'est utilisé.
            </Typography>

            <Divider sx={{ my: 3, borderColor: 'primary.main' }} />

            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              6. Responsabilité
            </Typography>
            
            <Typography variant="body1" paragraph>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </Typography>
            
            <Typography variant="body1" paragraph>
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse slamm35800@gmail.com en décrivant le problème de la manière la plus précise possible.
            </Typography>

            <Divider sx={{ my: 3, borderColor: 'primary.main' }} />

            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              7. Liens hypertextes
            </Typography>
            
            <Typography variant="body1" paragraph>
              Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité du club SLAMM.
            </Typography>

            <Divider sx={{ my: 3, borderColor: 'primary.main' }} />

            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              8. Droit applicable
            </Typography>
            
            <Typography variant="body1" paragraph>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront les seuls compétents.
            </Typography>

            <Box sx={{ mt: 4, p: 2, backgroundColor: 'surface.container', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.8 }}>
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}