/**
 * Générateur de schemas Schema.org pour les rich snippets Google
 *
 * Ce module centralise la génération de données structurées pour améliorer
 * l'apparence du site dans les résultats de recherche Google.
 *
 * Schemas supportés :
 * - Organization/SportsClub : informations principales du club
 * - Event : événements, stages, compétitions
 * - FAQPage : questions fréquentes
 * - Course : offres de cours
 * - LocalBusiness : horaires et coordonnées
 */

const BASE_URL = 'https://mma-saint-lunaire.fr';

/**
 * Informations de base du club (réutilisables)
 */
const CLUB_INFO = {
  name: "SLAMM - Saint-Lunaire Arts Martiaux Mixtes",
  url: BASE_URL,
  logo: `${BASE_URL}/img/logo-slamm.png`,
  image: `${BASE_URL}/img/social/social.jpg`,
  telephone: "+33782779288",
  email: "slamm35800@gmail.com",
  address: {
    streetAddress: "361 Rue de la Saudrais",
    addressLocality: "Saint-Lunaire",
    postalCode: "35800",
    addressRegion: "Bretagne",
    addressCountry: "FR"
  },
  geo: {
    latitude: "48.629194657231274",
    longitude: "-2.1120771896734203"
  }
};

/**
 * Génère le schema Organization/SportsClub principal avec horaires d'ouverture
 * @returns {Object} Schema.org SportsClub
 */
export function generateSportsClubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": CLUB_INFO.name,
    "alternateName": "SLAMM MMA",
    "description": "Club de MMA à Saint-Lunaire proposant des cours d'arts martiaux mixtes, mixed martial arts, grappling, self-défense et sports de combat pour tous niveaux depuis 2023. Dojo affilié FMMAF.",
    "url": CLUB_INFO.url,
    "logo": CLUB_INFO.logo,
    "image": CLUB_INFO.image,
    "telephone": CLUB_INFO.telephone,
    "email": CLUB_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLUB_INFO.address.streetAddress,
      "addressLocality": CLUB_INFO.address.addressLocality,
      "postalCode": CLUB_INFO.address.postalCode,
      "addressRegion": CLUB_INFO.address.addressRegion,
      "addressCountry": CLUB_INFO.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": CLUB_INFO.geo.latitude,
      "longitude": CLUB_INFO.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "18:00",
        "closes": "19:15"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "19:15",
        "closes": "21:15"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "19:30",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/slamm35800"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Côte d'Émeraude, Ille-et-Vilaine, Saint-Lunaire, Saint-Malo, Dinard, Cancale, Dinan, Saint-Briac, Bretagne"
    },
    "foundingDate": "2023",
    "memberOf": {
      "@type": "Organization",
      "name": "Fédération Française de MMA",
      "url": "https://fmmaf.fr"
    },
    "priceRange": "€€"
  };
}

/**
 * Génère un schema Event pour un événement
 * @param {Object} event - Données de l'événement depuis /config/events.js
 * @returns {Object} Schema.org Event
 */
export function generateEventSchema(event) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": event.title,
    "description": event.description,
    "startDate": `${event.date}T${parseTime(event.time)}`,
    "eventStatus": getEventStatus(event.status),
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Dojo SLAMM",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CLUB_INFO.address.streetAddress,
        "addressLocality": CLUB_INFO.address.addressLocality,
        "postalCode": CLUB_INFO.address.postalCode,
        "addressRegion": CLUB_INFO.address.addressRegion,
        "addressCountry": CLUB_INFO.address.addressCountry
      }
    },
    "organizer": {
      "@type": "SportsOrganization",
      "name": CLUB_INFO.name,
      "url": CLUB_INFO.url
    },
    "image": event.image ? `${BASE_URL}${event.image}` : CLUB_INFO.image
  };

  // Ajouter les infos de prix si disponibles
  if (event.price) {
    schema.offers = {
      "@type": "Offer",
      "price": event.price.includes("Gratuit") || event.price.includes("Réservé") ? "0" : extractPrice(event.price),
      "priceCurrency": "EUR",
      "availability": event.status === "full" ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
      "url": event.registrationUrl || CLUB_INFO.url,
      "validFrom": new Date().toISOString()
    };
  }

  // Ajouter le nombre max de participants si disponible
  if (event.maxParticipants) {
    schema.maximumAttendeeCapacity = event.maxParticipants;
  }

  return schema;
}

/**
 * Génère un schema FAQPage pour la page FAQ
 * @param {Array} faqs - Liste des questions/réponses
 * @returns {Object} Schema.org FAQPage
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer : extractTextFromReactElement(faq.answer)
      }
    }))
  };
}

/**
 * Génère un schema Course pour l'offre de cours
 * @returns {Object} Schema.org Course
 */
export function generateCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Cours de MMA à Saint-Lunaire",
    "description": "Cours d'arts martiaux mixtes pour tous niveaux, débutants et confirmés. Entraînements encadrés par des coachs diplômés FMMAF.",
    "provider": {
      "@type": "SportsOrganization",
      "name": CLUB_INFO.name,
      "url": CLUB_INFO.url
    },
    "courseSchedule": [
      {
        "@type": "Schedule",
        "byDay": "Monday",
        "startTime": "18:00",
        "endTime": "19:15"
      },
      {
        "@type": "Schedule",
        "byDay": "Wednesday",
        "startTime": "19:15",
        "endTime": "21:15"
      },
      {
        "@type": "Schedule",
        "byDay": "Friday",
        "startTime": "19:30",
        "endTime": "21:00"
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Adhésion annuelle +25 ans",
        "price": "210",
        "priceCurrency": "EUR",
        "category": "Adulte"
      },
      {
        "@type": "Offer",
        "name": "Adhésion annuelle 16-24 ans",
        "price": "180",
        "priceCurrency": "EUR",
        "category": "Jeune"
      },
      {
        "@type": "Offer",
        "name": "Cours d'essai (novembre-juin)",
        "price": "5",
        "priceCurrency": "EUR",
        "category": "Découverte"
      }
    ],
    "educationalLevel": "Débutant à confirmé",
    "teaches": "Arts martiaux mixtes, MMA, grappling, striking, self-défense",
    "availableLanguage": "fr",
    "location": {
      "@type": "Place",
      "name": "Dojo SLAMM",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CLUB_INFO.address.streetAddress,
        "addressLocality": CLUB_INFO.address.addressLocality,
        "postalCode": CLUB_INFO.address.postalCode,
        "addressRegion": CLUB_INFO.address.addressRegion,
        "addressCountry": CLUB_INFO.address.addressCountry
      }
    }
  };
}

/**
 * Génère une liste d'événements pour une ItemList
 * @param {Array} events - Liste d'événements
 * @returns {Object} Schema.org ItemList
 */
export function generateEventListSchema(events) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": events.map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": generateEventSchema(event)
    }))
  };
}

// ========== FONCTIONS UTILITAIRES ==========

/**
 * Convertit un statut d'événement en eventStatus Schema.org
 * @param {string} status - Statut de l'événement
 * @returns {string} URL Schema.org du statut
 */
function getEventStatus(status) {
  switch (status) {
    case "upcoming":
      return "https://schema.org/EventScheduled";
    case "cancelled":
      return "https://schema.org/EventCancelled";
    case "full":
      return "https://schema.org/EventScheduled";
    case "past":
      return "https://schema.org/EventScheduled";
    default:
      return "https://schema.org/EventScheduled";
  }
}

/**
 * Extrait l'heure de début d'un texte type "À partir de 14h30"
 * @param {string} timeString - Texte de l'heure
 * @returns {string} Heure au format HH:MM
 */
function parseTime(timeString) {
  if (!timeString) return "00:00";

  // Cherche un pattern type "14h30" ou "14:30"
  const match = timeString.match(/(\d{1,2})[h:](\d{2})/);
  if (match) {
    const hours = match[1].padStart(2, '0');
    const minutes = match[2];
    return `${hours}:${minutes}`;
  }

  return "00:00";
}

/**
 * Extrait un prix numérique d'une chaîne
 * @param {string} priceString - Texte du prix
 * @returns {string} Prix numérique
 */
function extractPrice(priceString) {
  const match = priceString.match(/(\d+)/);
  return match ? match[1] : "0";
}

/**
 * Extrait le texte d'un élément React (pour les réponses FAQ)
 * @param {*} element - Élément React ou string
 * @returns {string} Texte extrait
 */
function extractTextFromReactElement(element) {
  // Si c'est déjà une string, retourner tel quel
  if (typeof element === 'string') return element;

  // Sinon, retourner une description générique
  return "Voir la réponse complète sur notre site.";
}

/**
 * Export par défaut
 */
export default {
  generateSportsClubSchema,
  generateEventSchema,
  generateEventListSchema,
  generateFAQSchema,
  generateCourseSchema,
  CLUB_INFO,
  BASE_URL
};
