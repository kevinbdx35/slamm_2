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
 */
export const SCHEDULE = [
  {
    day: 'Lundi',
    dayEnglish: 'Monday',
    start: '18:00',
    end: '19:15',
    level: 'Tous niveaux'
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
    level: 'Tous niveaux'
  }
];

/**
 * Saison en cours
 */
export const SEASON = '2025–2026';

/**
 * Tarifs d'adhésion
 */
export const PRICING = {
  adult: { label: '+25 ans', price: 210 },
  young: { label: '+16 ans', price: 180 },
  trial: { label: 'Cours d\'essai (nov-juin)', price: 5 }
};

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
  return SCHEDULE.map(s =>
    `<strong>${s.day}</strong> ${formatTimeDisplay(s.start)} → ${formatTimeDisplay(s.end)}`
  ).join('<br />');
}

/**
 * Génère les openingHoursSpecification pour Schema.org
 * @returns {Array} Array d'objets OpeningHoursSpecification
 */
export function getOpeningHoursSchema() {
  return SCHEDULE.map(s => ({
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
  return SCHEDULE.map(s => ({
    "@type": "Schedule",
    "byDay": s.dayEnglish,
    "startTime": s.start,
    "endTime": s.end
  }));
}

export default {
  SCHEDULE,
  SEASON,
  PRICING,
  formatTimeDisplay,
  getScheduleHTML,
  getOpeningHoursSchema,
  getCourseScheduleSchema
};
