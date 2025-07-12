/**
 * Configuration centralisée des URLs externes
 * 
 * Ce fichier centralise toutes les URLs externes du site SLAMM,
 * notamment les liens Assoconnect qui changent régulièrement.
 * 
 * Avantages :
 * - Modification en un seul endroit
 * - Évite les oublis lors des mises à jour
 * - Facilite la maintenance
 * - Permet de basculer facilement entre différentes campagnes
 */

/**
 * URLs Assoconnect pour les inscriptions et réservations
 */
export const ASSOCONNECT_URLS = {
  // Lien pour réserver un cours d'essai (gratuit sept-oct, 5€ après)
  TRIAL_BOOKING: "https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai",
  
  // Lien pour l'adhésion annuelle complète
  ANNUAL_MEMBERSHIP: "https://slamm.assoconnect.com/collect/description/540662-u-adhesion-annuelle-saison-2025-2026",
};

/**
 * URLs des réseaux sociaux
 */
export const SOCIAL_URLS = {
  INSTAGRAM: "https://instagram.com/slamm35800",
};

/**
 * URLs d'images et médias
 */
export const MEDIA_URLS = {
  SOCIAL_SHARE_IMAGE: "https://mma-saint-lunaire.fr/img/social/social.jpg",
  LOGO: "https://mma-saint-lunaire.fr/img/logo-slamm.png",
};

/**
 * URLs des partenaires
 */
export const PARTNER_URLS = {
  SAINT_LUNAIRE: "https://www.saint-lunaire.fr/",
  FMMAF: "https://www.fmmaf.fr/",
  PROGRESS: "https://www.progressjj-europe.com/",
};

/**
 * Informations de contact
 */
export const CONTACT_INFO = {
  PHONE: "07 82 77 92 88",
  EMAIL: "slamm35800@gmail.com",
  TRAINING_ADDRESS: "361 Rue de la Saudrais, 35800 Saint-Lunaire",
  HEADQUARTERS_ADDRESS: "Boulevard Flusson (Mairie), 35800 Saint-Lunaire",
};

/**
 * Export par défaut avec toutes les configurations
 */
export default {
  ASSOCONNECT_URLS,
  SOCIAL_URLS,
  MEDIA_URLS,
  PARTNER_URLS,
  CONTACT_INFO,
};