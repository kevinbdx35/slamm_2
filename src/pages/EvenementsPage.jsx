import React from "react";
import { Typography, Box, Button, Grid, Chip } from "@mui/material";
import { CalendarToday, LocationOn, AccessTime, Euro, People } from "@mui/icons-material";
import SeoHelmet from "../components/SeoHelmet";
import { SOCIAL_URLS } from "../config/urls";
import { EVENTS, getUpcomingEvents, getPastEvents, sortEventsByDate, formatEventDate } from "../config/events";
import { generateEventListSchema, generateBreadcrumbSchema } from "../utils/schemaGenerator";

export default function EvenementsPage() {
  // Récupérer les événements à venir et les trier par date
  const upcomingEvents = sortEventsByDate(getUpcomingEvents(EVENTS));

  // Générer les schemas : Events + Breadcrumb
  const eventsSchema = upcomingEvents.length > 0
    ? generateEventListSchema(upcomingEvents)
    : null;
  const breadcrumbSchema = generateBreadcrumbSchema('/evenements');
  const allSchemas = eventsSchema
    ? [eventsSchema, breadcrumbSchema]
    : [breadcrumbSchema];

  // Récupérer les événements passés (triés du plus récent au plus ancien)
  const pastEvents = getPastEvents(EVENTS);

  // Fonction pour obtenir la couleur du statut
  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "success";
      case "full":
        return "warning";
      case "cancelled":
        return "error";
      default:
        return "default";
    }
  };

  // Fonction pour obtenir le label du statut
  const getStatusLabel = (status) => {
    switch (status) {
      case "upcoming":
        return "Places disponibles";
      case "full":
        return "Complet";
      case "cancelled":
        return "Annulé";
      default:
        return "";
    }
  };

  return (
    <>
      <SeoHelmet
        title="Événements SLAMM - Club MMA Saint-Lunaire"
        description="Suivez les futurs événements du club SLAMM : stages MMA, compétitions et portes ouvertes à Saint-Lunaire. Restez informés sur Instagram."
        url="https://mma-saint-lunaire.fr/evenements"
        image="https://mma-saint-lunaire.fr/img/social/social.jpg"
        keywords="événements MMA Saint-Lunaire, stages MMA futurs, club SLAMM actualités, MMA Bretagne événements, arts martiaux mixtes Saint-Lunaire"
        schemas={allSchemas}
      />

      <Box
        sx={{
          py: 6,
          mb: 10,
          maxWidth: 1200,
          mx: "auto",
          width: "100%",
          px: 3,
        }}
      >
        <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
          <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
            Événements
          </Typography>
          <Typography variant="body1" mt={1} maxWidth={1000}>
            Participe à nos stages, compétitions et événements pour progresser et partager ta passion du MMA.
          </Typography>
          <Typography variant="body2" color="primary.main" mt={2} sx={{ fontWeight: 'medium' }}>
            Depuis 2023 : 5 stages organisés • 2 participations en compétition
          </Typography>
        </Box>

        {/* Prochains événements */}
        <Box component="section" mt={6} mb={6}>
          <Typography
            variant="h2"
            mb={3}
            sx={{ borderBottom: "2px solid", borderColor: "primary.main", display: "inline-block" }}
          >
            Prochains événements
          </Typography>

          {upcomingEvents.length === 0 ? (
            // Aucun événement à venir
            <Box
              sx={{
                border: "3px solid",
                borderColor: "primary.main",
                borderRadius: 0,
                p: 4,
                mb: 4,
                textAlign: "center",
                background: 'linear-gradient(135deg, rgba(0,255,94,0.03) 0%, rgba(0,255,94,0.01) 100%)',
              }}
            >
              <Typography variant="h3" fontWeight="bold" mb={2} color="text.secondary">
                Aucun événement programmé
              </Typography>
              <Typography variant="body1" color="text.primary" mb={3}>
                Nous préparons de nouveaux événements pour vous. Restez connectés sur nos réseaux sociaux pour être informés en priorité !
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  href={SOCIAL_URLS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: 0,
                    fontWeight: "bold",
                    textTransform: "none",
                    py: 1.5,
                    px: 4,
                    backgroundColor: "primary.main",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Suivre sur Instagram
                </Button>
              </Box>
            </Box>
          ) : (
            // Affichage des événements
            <Grid container spacing={4}>
              {upcomingEvents.map((event) => (
                <Grid item xs={12} key={event.id}>
                  <Box
                    sx={{
                      border: "3px solid",
                      borderColor: "primary.main",
                      borderRadius: 0,
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, rgba(0,255,94,0.03) 0%, rgba(0,255,94,0.01) 100%)',
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      {/* Poster à gauche */}
                      {event.image && (
                        <Box
                          sx={{
                            p: { xs: 2, md: 3 },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src={event.image}
                            alt={event.title}
                            sx={{
                              width: { xs: "100%", md: 220 },
                              height: "auto",
                              objectFit: "cover",
                              border: "2px solid",
                              borderColor: "primary.main",
                            }}
                          />
                        </Box>
                      )}

                      {/* Contenu à droite */}
                      <Box sx={{ flexGrow: 1, p: 3 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="start" mb={2}>
                          <Typography variant="h3" component="h3" gutterBottom>
                            {event.title}
                          </Typography>
                          {event.status && (
                            <Chip
                              label={getStatusLabel(event.status)}
                              color={getStatusColor(event.status)}
                              size="small"
                              sx={{ ml: 1 }}
                            />
                          )}
                        </Box>

                        <Box display="flex" alignItems="flex-start" mb={1.5}>
                          <CalendarToday sx={{ mr: 1.5, fontSize: 20, mt: 0.2 }} color="primary" />
                          <Typography variant="body2">
                            {formatEventDate(event.date)}
                          </Typography>
                        </Box>

                        {event.time && (
                          <Box display="flex" alignItems="flex-start" mb={1.5}>
                            <AccessTime sx={{ mr: 1.5, fontSize: 20, mt: 0.2 }} color="primary" />
                            <Typography variant="body2">{event.time}</Typography>
                          </Box>
                        )}

                        {event.location && (
                          <Box display="flex" alignItems="flex-start" mb={1.5}>
                            <LocationOn sx={{ mr: 1.5, fontSize: 20, mt: 0.2 }} color="primary" />
                            <Typography variant="body2">{event.location}</Typography>
                          </Box>
                        )}

                        {event.price && (
                          <Box display="flex" alignItems="flex-start" mb={1.5}>
                            <Euro sx={{ mr: 1.5, fontSize: 20, mt: 0.2 }} color="primary" />
                            <Typography variant="body2">{event.price}</Typography>
                          </Box>
                        )}

                        {event.maxParticipants && (
                          <Box display="flex" alignItems="flex-start" mb={2}>
                            <People sx={{ mr: 1.5, fontSize: 20, mt: 0.2 }} color="primary" />
                            <Typography variant="body2">
                              Limité à {event.maxParticipants} participants
                            </Typography>
                          </Box>
                        )}

                        <Typography variant="body2" color="text.primary" mb={3}>
                          {event.description}
                        </Typography>

                        {event.registrationUrl && event.status === "upcoming" && (
                          <Button
                            variant="contained"
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              borderRadius: 0,
                              fontWeight: "bold",
                              textTransform: "none",
                              py: 1.5,
                              px: 4,
                              backgroundColor: "primary.main",
                              "&:hover": {
                                backgroundColor: "secondary.main",
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            S'inscrire
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* Événements passés */}
        {pastEvents.length > 0 && (
          <Box component="section" mb={6}>
            <Typography
              variant="h2"
              mb={3}
              sx={{ borderBottom: "2px solid", borderColor: "text.secondary", display: "inline-block", opacity: 0.7 }}
            >
              Événements passés
            </Typography>

            <Grid container spacing={4}>
              {pastEvents.map((event) => (
                <Grid item xs={12} md={6} key={event.id}>
                  <Box
                    sx={{
                      border: "2px solid",
                      borderColor: "text.disabled",
                      borderRadius: 0,
                      p: 3,
                      opacity: 0.7,
                      overflow: 'hidden',
                    }}
                  >
                      <Typography variant="h4" component="h3" gutterBottom color="text.secondary">
                        {event.title}
                      </Typography>

                      <Box display="flex" alignItems="flex-start" mb={1.5}>
                        <CalendarToday sx={{ mr: 1.5, fontSize: 18, mt: 0.2 }} color="disabled" />
                        <Typography variant="body2" color="text.secondary">
                          {formatEventDate(event.date)}
                        </Typography>
                      </Box>

                      {event.time && (
                        <Box display="flex" alignItems="flex-start" mb={1.5}>
                          <AccessTime sx={{ mr: 1.5, fontSize: 18, mt: 0.2 }} color="disabled" />
                          <Typography variant="body2" color="text.secondary">{event.time}</Typography>
                        </Box>
                      )}

                      {event.location && (
                        <Box display="flex" alignItems="flex-start" mb={1.5}>
                          <LocationOn sx={{ mr: 1.5, fontSize: 18, mt: 0.2 }} color="disabled" />
                          <Typography variant="body2" color="text.secondary">{event.location}</Typography>
                        </Box>
                      )}

                      <Typography variant="body2" color="text.secondary" mb={2}>
                        {event.description}
                      </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}
