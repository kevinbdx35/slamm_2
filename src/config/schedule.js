/**
 * Configuration centralisée des horaires d'entraînement
 * Modifier ce fichier pour mettre à jour les horaires sur tout le site
 */

/**
 * Horaires d'entraînement
 * @property {string} day - Jour en français (pour affichage)
 * @property {string} dayEnglish - Jour en anglais (pour Schema.org)
 * @property {string} start - Heure de début (format HH:MM)
 * @property {string} end - Heure de fin (format HH:MM)
 * @property {string} level - Niveau des participants
 * @property {boolean} [inactive] - Créneau affiché mais pas encore actif (ex. début de saison)
 */
export const SCHEDULE = [
  {
    day: 'Lundi',
    dayEnglish: 'Monday',
    start: '18:00',
    end: '19:15',
    level: 'Tous niveaux',
    inactive: true // pas encore actif en début de saison 2026–2027
  },
  {
    day: 'Mercredi',
    dayEnglish: 'Wednesday',
    start: '19:15',
    end: '21:15',
    level: 'Tous niveaux'
  },
  {
    day: 'Vendredi',
    dayEnglish: 'Friday',
    start: '19:00',
    end: '20:00',
    level: 'Tous niveaux'
  },
  {
    day: 'Vendredi',
    dayEnglish: 'Friday',
    start: '20:00',
    end: '21:00',
    level: 'Tous niveaux',
    label: 'Sparring'
  },
  {
    day: 'Mardi',
    dayEnglish: 'Tuesday',
    start: '18:15',
    end: '19:45',
    level: 'Tous niveaux',
    label: 'Luta Livre'
  }
];

/**
 * Saison en cours
 */
export const SEASON = '2026–2027';

/**
 * Inscriptions pas encore ouvertes pour la saison à venir.
 * Passer à `false` dès l'ouverture (affiche/masque la bannière « bientôt ouvertes »).
 */
export const REGISTRATION_OPENING_SOON = false;

/**
 * Fermeture estivale : bandeau « club fermé, reprise en septembre ».
 * Passer `active` à `false` à la reprise des cours pour masquer le bandeau.
 */
export const SUMMER_BREAK = {
  active: true,
  message: 'Club fermé pour l\'été — reprise des cours le mercredi 16 septembre 2026. Inscriptions déjà ouvertes.'
};

/**
 * Tarifs d'adhésion
 */
export const PRICING = {
  adult: {
    label: 'Adhésion',
    periods: [
      { label: 'Sept → Déc', months: [9, 10, 11, 12], price: 210 },
      { label: 'Jan → Mars',  months: [1, 2, 3],       price: 150 },
      { label: 'Avr → Juin',  months: [4, 5, 6],       price: 89  },
    ]
  },
  trial: { label: "Cours d'essai (nov-juin)", price: 5 }
};

/**
 * Aides financières acceptées pour le paiement de l'adhésion.
 * Le Chèque jeunesse est un dispositif municipal reconduit chaque année
 * scolaire : revérifier montant et tranche d'âge auprès de la mairie de
 * Saint-Lunaire à chaque reconduction.
 */
export const FINANCIAL_AID = {
  /** Ligne courte pour les cartes tarifs */
  short: "Pass'Sport & Chèque jeunesse acceptés",
  schemes: [
    {
      name: "Pass'Sport",
      detail: "aide de l'État, sous conditions d'éligibilité"
    },
    {
      name: 'Chèque jeunesse',
      detail: 'aide de 60 € de la mairie de Saint-Lunaire, de 3 à 18 ans'
    }
  ]
};

/**
 * Retourne l'index (0, 1 ou 2) de la période tarifaire active selon le mois courant.
 * Retourne -1 en dehors de la saison (juillet–août).
 */
export function getActivePeriodIndex() {
  const month = new Date().getMonth() + 1; // 1–12
  return PRICING.adult.periods.findIndex(p => p.months.includes(month));
}

/**
 * Formate l'heure pour l'affichage (18:00 -> 18h00)
 * @param {string} time - Heure au format HH:MM
 * @returns {string} Heure formatée
 */
export function formatTimeDisplay(time) {
  return time.replace(':', 'h');
}

/**
 * Génère le HTML pour l'affichage des horaires
 * @returns {string} HTML avec les horaires
 */
export function getScheduleHTML() {
  return SCHEDULE.filter(s => !s.inactive).map(s =>
    `<strong>${s.day}</strong> ${formatTimeDisplay(s.start)} → ${formatTimeDisplay(s.end)}${s.label ? ` <em>(${s.label})</em>` : ''}`
  ).join('<br />');
}

/**
 * Génère les openingHoursSpecification pour Schema.org
 * @returns {Array} Array d'objets OpeningHoursSpecification
 */
export function getOpeningHoursSchema() {
  return SCHEDULE.filter(s => !s.inactive).map(s => ({
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": s.dayEnglish,
    "opens": s.start,
    "closes": s.end
  }));
}

/**
 * Génère les courseSchedule pour Schema.org Course
 * @returns {Array} Array d'objets Schedule
 */
export function getCourseScheduleSchema() {
  return SCHEDULE.filter(s => !s.inactive).map(s => ({
    "@type": "Schedule",
    "byDay": s.dayEnglish,
    "startTime": s.start,
    "endTime": s.end
  }));
}

export default {
  SCHEDULE,
  SEASON,
  REGISTRATION_OPENING_SOON,
  PRICING,
  FINANCIAL_AID,
  getActivePeriodIndex,
  formatTimeDisplay,
  getScheduleHTML,
  getOpeningHoursSchema,
  getCourseScheduleSchema
};
