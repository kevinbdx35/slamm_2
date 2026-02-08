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

import { getOpeningHoursSchema, getCourseScheduleSchema, PRICING } from '../config/schedule.js';

const BASE_URL = 'https://mma-saint-lunaire.fr';

/**
 * Informations de base du club (réutilisables)
 */
const CLUB_INFO = {
  name: "SLAMM - Saint-Lunaire Arts Martiaux Mixtes",
  url: BASE_URL,
  logo: `${BASE_URL}/img/logo-slamm.png`,
  image: `${BASE_URL}/img/social/social.webp`,
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
    "alternateName": ["SLAMM MMA", "Club MMA Saint-Lunaire", "Club MMA Dinard", "Club MMA Saint-Malo", "Grappling Saint-Lunaire", "Grappling Dinard", "Grappling Saint-Malo", "No-Gi Dinard", "No-Gi Saint-Malo", "Boxe Dinard", "Kickboxing Saint-Malo", "Jiu-jitsu Dinard", "BJJ Saint-Malo", "Lutte Dinard"],
    "description": "Club de MMA à Saint-Lunaire proposant des cours d'arts martiaux mixtes : grappling, No-Gi, boxe pieds-poings, lutte, jiu-jitsu brésilien, kickboxing et self-défense. Tous niveaux depuis 2023. Dojo affilié FMMAF.",
    "sport": ["Mixed Martial Arts", "MMA", "Grappling", "No-Gi", "Submission Wrestling", "Boxe", "Kickboxing", "Lutte", "Jiu-jitsu brésilien", "Self-défense"],
    "keywords": "MMA, arts martiaux mixtes, grappling, No-Gi, boxe pieds-poings, lutte, jiu-jitsu, BJJ, kickboxing, muay thai, self-défense, combat au sol, striking",
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
    "openingHoursSpecification": getOpeningHoursSchema(),
    "sameAs": [
      "https://instagram.com/slamm35800"
    ],
    "areaServed": [
      { "@type": "City", "name": "Saint-Lunaire" },
      { "@type": "City", "name": "Dinard" },
      { "@type": "City", "name": "Saint-Malo" },
      { "@type": "City", "name": "Pleurtuit" },
      { "@type": "City", "name": "La Richardais" },
      { "@type": "City", "name": "Dinan" },
      { "@type": "City", "name": "Cancale" },
      { "@type": "City", "name": "Saint-Briac-sur-Mer" },
      { "@type": "City", "name": "Lancieux" },
      { "@type": "City", "name": "Ploubalay" },
      { "@type": "City", "name": "Saint-Coulomb" },
      { "@type": "City", "name": "Paramé" },
      { "@type": "City", "name": "Saint-Servan" },
      { "@type": "City", "name": "Rothéneuf" },
      { "@type": "Place", "name": "Côte d'Émeraude, Ille-et-Vilaine, Bretagne" }
    ],
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
  const startTime = parseTime(event.time);
  const endTime = parseEndTime(event.time);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": event.title,
    "description": event.description,
    "startDate": `${event.date}T${startTime}`,
    "endDate": `${event.date}T${endTime}`,
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
    "performer": {
      "@type": "Person",
      "name": event.performer || "SLAMM MMA"
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
    "description": "Cours d'arts martiaux mixtes pour tous niveaux : grappling, No-Gi, boxe pieds-poings, lutte, jiu-jitsu et kickboxing. Entraînements encadrés par des coachs diplômés FMMAF.",
    "keywords": "cours MMA, grappling, No-Gi, boxe, kickboxing, lutte, jiu-jitsu, BJJ, self-défense",
    "provider": {
      "@type": "SportsOrganization",
      "name": CLUB_INFO.name,
      "url": CLUB_INFO.url
    },
    "courseSchedule": getCourseScheduleSchema(),
    "offers": [
      {
        "@type": "Offer",
        "name": `Adhésion annuelle ${PRICING.adult.label}`,
        "price": String(PRICING.adult.price),
        "priceCurrency": "EUR",
        "category": "Adulte"
      },
      {
        "@type": "Offer",
        "name": `Adhésion annuelle ${PRICING.young.label}`,
        "price": String(PRICING.young.price),
        "priceCurrency": "EUR",
        "category": "Jeune"
      },
      {
        "@type": "Offer",
        "name": PRICING.trial.label,
        "price": String(PRICING.trial.price),
        "priceCurrency": "EUR",
        "category": "Découverte"
      }
    ],
    "educationalLevel": "Débutant à confirmé",
    "teaches": ["Arts martiaux mixtes (MMA)", "Grappling et No-Gi", "Boxe et pieds-poings", "Lutte et clinch", "Jiu-jitsu brésilien (BJJ)", "Kickboxing", "Self-défense", "Combat au sol", "Striking"],
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

/**
 * Mapping des chemins vers leurs titres
 */
const PAGE_TITLES = {
  '/': 'Accueil',
  '/cours': 'Cours de MMA',
  '/equipe': 'Équipe',
  '/evenements': 'Événements',
  '/contact': 'Contact',
  '/faq': 'FAQ',
  '/hygiene': 'Hygiène et Sécurité',
  '/mentions-legales': 'Mentions légales'
};

/**
 * Génère un schema BreadcrumbList basé sur le chemin actuel
 * @param {string} pathname - Chemin actuel (ex: '/cours')
 * @returns {Object} Schema.org BreadcrumbList
 */
export function generateBreadcrumbSchema(pathname) {
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": BASE_URL
    }
  ];

  if (pathname !== '/') {
    const pageName = PAGE_TITLES[pathname] || pathname.substring(1);
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `${BASE_URL}${pathname}`
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
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
 * Extrait l'heure de fin d'un texte type "14h30-16h30"
 * Si pas d'heure de fin explicite, ajoute 2h à l'heure de début
 * @param {string} timeString - Texte de l'heure
 * @returns {string} Heure de fin au format HH:MM
 */
function parseEndTime(timeString) {
  if (!timeString) return "23:59";

  // Cherche un pattern avec plage horaire "14h30-16h30" ou "14:30-16:30"
  const rangeMatch = timeString.match(/(\d{1,2})[h:](\d{2})\s*[-–]\s*(\d{1,2})[h:](\d{2})/);
  if (rangeMatch) {
    const hours = rangeMatch[3].padStart(2, '0');
    const minutes = rangeMatch[4];
    return `${hours}:${minutes}`;
  }

  // Pas de plage : ajouter 2h à l'heure de début par défaut
  const startMatch = timeString.match(/(\d{1,2})[h:](\d{2})/);
  if (startMatch) {
    const endHours = String(Math.min(parseInt(startMatch[1]) + 2, 23)).padStart(2, '0');
    const minutes = startMatch[2];
    return `${endHours}:${minutes}`;
  }

  return "23:59";
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
 * Génère un schema LocalBusiness pour Google Maps et le pack local
 * @returns {Object} Schema.org LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    "name": CLUB_INFO.name,
    "alternateName": ["SLAMM MMA", "Club MMA Saint-Lunaire", "Club MMA Dinard", "Club MMA Saint-Malo", "MMA Dinan", "Grappling Saint-Lunaire", "Grappling Dinard", "Grappling Saint-Malo", "No-Gi Dinard", "No-Gi Saint-Malo", "Boxe Dinard", "Boxe Saint-Malo", "Kickboxing Dinard", "Kickboxing Saint-Malo", "Jiu-jitsu Dinard", "BJJ Saint-Malo", "Lutte Dinard", "Self-défense Côte d'Émeraude"],
    "description": "Club de MMA à Saint-Lunaire, à 5 min de Dinard et 15 min de Saint-Malo. Cours d'arts martiaux mixtes : grappling, No-Gi, boxe, lutte, jiu-jitsu et kickboxing. Coachs diplômés FMMAF.",
    "keywords": "MMA, grappling, No-Gi, boxe pieds-poings, lutte, jiu-jitsu brésilien, kickboxing, self-défense",
    "url": CLUB_INFO.url,
    "telephone": CLUB_INFO.telephone,
    "email": CLUB_INFO.email,
    "image": CLUB_INFO.image,
    "logo": CLUB_INFO.logo,
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Espèces, Chèques, Virement",
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
    "hasMap": "https://www.google.com/maps/dir//48.629194657231274,-2.1120771896734203",
    "openingHoursSpecification": getOpeningHoursSchema(),
    "areaServed": [
      { "@type": "City", "name": "Saint-Lunaire", "sameAs": "https://fr.wikipedia.org/wiki/Saint-Lunaire" },
      { "@type": "City", "name": "Dinard", "sameAs": "https://fr.wikipedia.org/wiki/Dinard" },
      { "@type": "City", "name": "Saint-Malo", "sameAs": "https://fr.wikipedia.org/wiki/Saint-Malo" },
      { "@type": "City", "name": "Pleurtuit" },
      { "@type": "City", "name": "La Richardais" },
      { "@type": "City", "name": "Dinan" },
      { "@type": "City", "name": "Cancale" },
      { "@type": "City", "name": "Saint-Briac-sur-Mer" },
      { "@type": "City", "name": "Lancieux" },
      { "@type": "Place", "name": "Côte d'Émeraude, Bretagne" }
    ],
    "sameAs": ["https://instagram.com/slamm35800"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "2",
      "reviewCount": "2"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Miguel" },
        "datePublished": "2024-09-01",
        "reviewBody": "La pratique du MMA m'a apporté discipline, confiance en moi et une condition physique optimale. C'est bien plus qu'un sport, c'est un mode de vie qui m'a renforcé mentalement et physiquement.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Florian" },
        "datePublished": "2024-09-15",
        "reviewBody": "Je pratique le MMA depuis septembre 2024 et ça m'a appris beaucoup de choses sur moi que j'ignorais : le dépassement de soi, la condition physique et le mental. Je me sens bien mieux depuis que j'ai découvert cette pratique.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ]
  };
}

/**
 * Génère un schema Person pour un membre de l'équipe
 * @param {Object} member - Données du membre
 * @returns {Object} Schema.org Person
 */
export function generatePersonSchema(member) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "worksFor": {
      "@type": "SportsOrganization",
      "name": CLUB_INFO.name,
      "url": CLUB_INFO.url
    },
    "knowsAbout": ["MMA", "Arts martiaux mixtes", "Grappling", "No-Gi", "Boxe", "Kickboxing", "Lutte", "Jiu-jitsu brésilien", "Self-défense", "Combat au sol"],
    "hasCredential": member.diplomas?.map(diploma => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Diplôme sportif",
      "name": diploma
    })) || []
  };
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
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generatePersonSchema,
  CLUB_INFO,
  BASE_URL
};
