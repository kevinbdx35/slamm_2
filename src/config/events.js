/**
 * Configuration centralisée des événements SLAMM
 *
 * Ce fichier centralise tous les événements du club (stages, compétitions, portes ouvertes).
 *
 * Pour ajouter un événement :
 * 1. Ajoutez un nouvel objet dans le tableau EVENTS
 * 2. Remplissez tous les champs obligatoires
 * 3. Définissez le statut : "upcoming", "full", "cancelled", "past"
 *
 * Les événements sont automatiquement triés par date (du plus proche au plus lointain)
 */

/**
 * Liste des événements du club
 * @type {Array<Object>}
 */
export const EVENTS = [
  {
    id: 1,
    title: "Stage de Luta Livre",
    date: "2025-11-16", // Format YYYY-MM-DD
    time: "À partir de 14h30",
    location: "Dojo SLAMM, 361 Rue de la Saudrais, 35800 Saint-Lunaire",
    price: "Réservé aux membres SLAMM",
    description: "Stage de Luta Livre avec Emilien Bouillard, ceinture noire 1er dan. Thématique : attaquer et défendre les jambes. Une excellente opportunité d'apprendre des techniques avancées de soumission et de défense au sol.",
    performer: "Emilien Bouillard",
    maxParticipants: null,
    registrationUrl: null,
    image: "/img/events/stage_1.webp",
    imageWidth: 900,
    imageHeight: 1600,
    status: "upcoming"
  },
  {
    id: 2,
    title: "Stage avec Jonathan Allouche",
    date: "2026-03-01", // Format YYYY-MM-DD
    time: "14h30-16h30",
    location: "Dojo SLAMM, 361 Rue de la Saudrais, 35800 Saint-Lunaire",
    price: "10€",
    description: "Stage JJB No-Gi / Luta Livre avec Jonathan Allouche, champion de France No-Gi (adulte – ceinture noire), ceinture noire 1er degré de JJB et ceinture noire de Luta Livre. Une excellente opportunité d'améliorer son jeu au sol grâce à des techniques modernes, efficaces et actuelles.",
    performer: "Jonathan Allouche",
    maxParticipants: 30,
    registrationUrl: "https://slamm.assoconnect.com/collect/description/662218-o-stage-avec-jonathan-allouche",
    image: "/img/events/jonathan.webp",
    imageWidth: 923,
    imageHeight: 1154,
    status: "upcoming"
  },
  {
    id: 3,
    title: "GNC TOUR - TOURNOI DE PLOERMEL",
    date: "2026-02-01", // Format YYYY-MM-DD
    time: null,
    location: "Ploërmel",
    price: null,
    description: "5 compétiteurs de Saint-Lunaire auront l'honneur de représenter les couleurs de l'association lors du GNC Tour, en compétition de grappling.",
    performer: null,
    maxParticipants: null,
    registrationUrl: null,
    image: null,
    status: null
  },
  {
    id: 4,
    title: "Stage de JJB No-Gi",
    date: "2026-01-21", // Format YYYY-MM-DD
    time: null,
    location: "Dojo SLAMM, 361 Rue de la Saudrais, 35800 Saint-Lunaire",
    price: "Réservé aux membres de SLAMM",
    description: "Stage JJB No-Gi avec Bruno Louvel, ceinture noire de JJB. Thématique : Inside Camping. Une excellente opportunité d'améliorer son jeu au sol grâce à des techniques modernes.",
    performer: "Bruno Louvel",
    maxParticipants: null,
    registrationUrl: null,
    image: null,
    status: null
  },
  {
    id: 5,
    title: "DAYMAT 5 No Gi",
    date: "2026-03-29", // Format YYYY-MM-DD
    time: null,
    location: "Ploërmel",
    price: null,
    description: "Compétition de grappling No Gi à Ploërmel. Plusieurs compétiteurs de SLAMM représenteront les couleurs de l'association.",
    performer: null,
    maxParticipants: null,
    registrationUrl: "https://smoothcomp.com/fr/event/28618",
    image: null,
    imageWidth: null,
    imageHeight: null,
    status: "upcoming"
  },
];

/**
 * Fonction utilitaire pour trier les événements par date
 * @param {Array} events - Tableau d'événements
 * @returns {Array} Événements triés du plus proche au plus lointain
 */
export function sortEventsByDate(events) {
  return [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
}

/**
 * Fonction utilitaire pour filtrer les événements à venir
 * @param {Array} events - Tableau d'événements
 * @returns {Array} Événements futurs uniquement
 */
export function getUpcomingEvents(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= today && event.status !== "past" && event.status !== "cancelled";
  });
}

/**
 * Fonction utilitaire pour filtrer les événements passés
 * @param {Array} events - Tableau d'événements
 * @param {number} limit - Nombre maximum d'événements à retourner (par défaut: 3)
 * @returns {Array} Événements passés uniquement (triés du plus récent au plus ancien, limité aux N derniers)
 */
export function getPastEvents(events, limit = 4) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const pastEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate < today || event.status === "past";
  });
  // Trier du plus récent au plus ancien (ordre inverse) et limiter le nombre
  return [...pastEvents]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

/**
 * Fonction utilitaire pour formater une date
 * @param {string} dateString - Date au format YYYY-MM-DD
 * @returns {string} Date formatée (ex: "15 novembre 2025")
 */
export function formatEventDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
}

/**
 * Export par défaut
 */
export default {
  EVENTS,
  sortEventsByDate,
  getUpcomingEvents,
  getPastEvents,
  formatEventDate,
};
