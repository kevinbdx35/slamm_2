# Guide des Rich Snippets Schema.org - SLAMM MMA

## Résumé des améliorations

Ce document explique les améliorations apportées aux données structurées (rich snippets) du site SLAMM pour améliorer son apparence dans les résultats de recherche Google.

## Schemas implémentés

### 1. SportsClub (Page principale - index.html)
**Emplacement:** `index.html:42-103`

**Améliorations apportées:**
- ✅ Ajout de `alternateName` : "SLAMM MMA"
- ✅ Ajout de `openingHoursSpecification` avec les créneaux d'entraînement
- ✅ Ajout de `sport` : "Mixed Martial Arts"
- ✅ Ajout de `priceRange` : "€€"
- ✅ Ajout de l'URL de la FMMAF dans `memberOf`

**Bénéfices SEO:**
- Affichage des horaires directement dans Google Maps et la recherche locale
- Meilleure visibilité pour les recherches "club MMA près de moi"
- Rich card avec informations de contact et horaires

---

### 2. Event / ItemList (Page événements)
**Emplacement:** `src/pages/EvenementsPage.jsx`
**Générateur:** `src/utils/schemaGenerator.js:generateEventSchema()`

**Ce qui est inclus:**
- Type d'événement : `SportsEvent`
- Titre, description, date/heure
- Lieu (avec adresse complète)
- Organisateur (SLAMM)
- Prix et disponibilité
- Nombre maximum de participants
- Image de l'événement

**Bénéfices SEO:**
- Les événements apparaissent dans Google Search avec date et lieu
- Éligibilité pour les carrousels d'événements
- Affichage de la disponibilité (places libres/complet)
- Rich card avec bouton "Réserver"

**Exemple de résultat:**
```
📅 Stage de Luta Livre
16 novembre 2025 à 14h30
📍 Dojo SLAMM, Saint-Lunaire
👥 Places disponibles
```

---

### 3. FAQPage (Page FAQ)
**Emplacement:** `src/pages/FaqPage.jsx`
**Générateur:** `src/utils/schemaGenerator.js:generateFAQSchema()`

**Ce qui est inclus:**
- Liste de toutes les questions/réponses
- Format structuré pour Google

**Bénéfices SEO:**
- Apparition dans les "People Also Ask" de Google
- Rich snippet avec accordéon de questions dans les SERP
- Meilleure visibilité pour les recherches longues ("faut-il avoir de l'expérience pour faire du MMA")

**Exemple de résultat:**
```
FAQ – MMA Saint-Lunaire
❓ Faut-il avoir de l'expérience pour commencer le MMA ?
❓ À partir de quel âge peut-on pratiquer le MMA ?
❓ Quel équipement est nécessaire pour débuter ?
[Afficher plus]
```

---

### 4. Course (Page cours)
**Emplacement:** `src/pages/CoursPage.jsx`
**Générateur:** `src/utils/schemaGenerator.js:generateCourseSchema()`

**Ce qui est inclus:**
- Nom et description du cours
- Horaires des créneaux (lundi, mercredi, vendredi)
- Tarifs détaillés (+25 ans, 16-24 ans, essai)
- Niveau : "Débutant à confirmé"
- Disciplines enseignées
- Lieu d'entraînement

**Bénéfices SEO:**
- Affichage dans Google for Education
- Rich card avec prix et horaires
- Meilleur ranking pour "cours MMA Saint-Lunaire"

**Exemple de résultat:**
```
Cours de MMA à Saint-Lunaire
💶 À partir de 180€/an
📅 Lundi 18h-19h15, Mercredi 19h15-21h15, Vendredi 19h30-21h
📍 Saint-Lunaire, 35800
⭐ Débutant à confirmé
```

---

## Comment tester les rich snippets

### Option 1 : Google Rich Results Test (Recommandé)
1. Visitez : https://search.google.com/test/rich-results
2. Testez ces URLs une fois le site déployé :
   - `https://mma-saint-lunaire.fr/` (SportsClub)
   - `https://mma-saint-lunaire.fr/evenements` (Event)
   - `https://mma-saint-lunaire.fr/faq` (FAQPage)
   - `https://mma-saint-lunaire.fr/cours` (Course)

### Option 2 : Schema.org Validator
1. Visitez : https://validator.schema.org/
2. Collez le HTML complet d'une page
3. Vérifiez qu'il n'y a pas d'erreurs

### Option 3 : Google Search Console
1. Connectez-vous à : https://search.google.com/search-console
2. Section "Expérience" → "Résultats enrichis"
3. Attendez que Google crawle le site (peut prendre 1-2 semaines)
4. Vérifiez les erreurs et améliorations suggérées

---

## Architecture technique

### Fichier utilitaire : `src/utils/schemaGenerator.js`

Ce module centralise la génération de tous les schemas. Avantages :

**✅ Maintenance facile**
- Un seul endroit pour les infos du club (nom, adresse, tel, email)
- Modifications en cascade automatiques

**✅ Réutilisable**
- Fonctions exportées utilisables dans n'importe quelle page
- Génération dynamique basée sur les données

**✅ Type-safe et validé**
- Tous les schemas suivent les specs Schema.org
- Fonctions utilitaires pour parser dates, prix, etc.

### Fonctions disponibles

```javascript
import {
  generateSportsClubSchema,    // Schema principal du club
  generateEventSchema,          // Schema pour un événement
  generateEventListSchema,      // Liste d'événements
  generateFAQSchema,            // Schema FAQ
  generateCourseSchema,         // Schema cours
  CLUB_INFO,                    // Infos centralisées du club
  BASE_URL                      // URL de base
} from '../utils/schemaGenerator';
```

---

## Impact SEO attendu

### Court terme (1-2 semaines)
- ✅ Validation des schemas dans Google Search Console
- ✅ Affichage des rich snippets dans les SERP
- ✅ Meilleure présentation visuelle des résultats

### Moyen terme (1-3 mois)
- 📈 Augmentation du CTR (Click-Through Rate) grâce aux rich cards
- 📈 Meilleur positionnement pour les recherches locales
- 📈 Apparition dans les carrousels d'événements
- 📈 Featured snippets pour les questions FAQ

### Long terme (3-6 mois)
- 🎯 Autorité accrue dans la niche "MMA Saint-Lunaire"
- 🎯 Meilleure visibilité sur Google Maps
- 🎯 Augmentation du trafic organique
- 🎯 Réduction du taux de rebond (infos claires dès les SERP)

---

## Prochaines étapes recommandées

### 1. Après déploiement
- [ ] Tester toutes les pages avec Google Rich Results Test
- [ ] Vérifier dans Google Search Console (Expérience → Résultats enrichis)
- [ ] Soumettre les URLs dans Search Console pour réindexation rapide

### 2. Améliorations futures possibles

**AggregateRating (Avis clients)**
```javascript
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "24"
}
```
- Nécessite de collecter des avis (Google, Facebook, etc.)
- Affichage d'étoiles dans les SERP

**Video Schema (pour vidéos d'entraînement)**
```javascript
"video": {
  "@type": "VideoObject",
  "name": "Entraînement MMA SLAMM",
  "thumbnailUrl": "...",
  "uploadDate": "..."
}
```
- Éligibilité pour les carrousels vidéo
- Meilleure visibilité sur YouTube

**Review Schema (témoignages détaillés)**
```javascript
"review": [{
  "@type": "Review",
  "author": "Jean D.",
  "reviewRating": { "@type": "Rating", "ratingValue": "5" }
}]
```

### 3. Monitoring continu
- Vérifier mensuellement les erreurs dans Search Console
- Mettre à jour les événements régulièrement
- Ajouter de nouvelles FAQ basées sur les questions des visiteurs

---

## Maintenance

### Ajouter un nouvel événement
1. Modifiez `src/config/events.js`
2. Ajoutez un objet dans le tableau `EVENTS`
3. Le schema sera généré automatiquement

### Ajouter une nouvelle FAQ
1. Modifiez `src/pages/FaqPage.jsx`
2. Ajoutez un objet dans le tableau `faqs`
3. Le schema sera mis à jour automatiquement

### Modifier les infos du club
1. Modifiez `src/utils/schemaGenerator.js`
2. Section `CLUB_INFO` (lignes 19-36)
3. Tous les schemas seront mis à jour automatiquement

---

## Ressources

**Documentation officielle:**
- Schema.org : https://schema.org/
- Google Search Central : https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

**Outils de test:**
- Rich Results Test : https://search.google.com/test/rich-results
- Schema Validator : https://validator.schema.org/
- Search Console : https://search.google.com/search-console

**Exemples de schemas:**
- SportsOrganization : https://schema.org/SportsOrganization
- Event : https://schema.org/Event
- FAQPage : https://schema.org/FAQPage
- Course : https://schema.org/Course

---

## Notes techniques

**Pourquoi le schema SportsClub est dans index.html et pas en React ?**
- Google Search Console détecte mieux les schemas dans le HTML statique
- Garantit que le schema est présent au premier rendu
- Les schemas spécifiques aux pages restent en React via `<SeoHelmet>`

**Pourquoi utiliser ItemList pour les événements ?**
- Google privilégie ItemList pour les listes d'éléments similaires
- Permet d'indexer plusieurs événements d'un coup
- Meilleure éligibilité pour les carrousels

**Format des dates**
- ISO 8601 : `YYYY-MM-DDTHH:MM`
- Exemple : `2025-11-16T14:30`
- Gère automatiquement les fuseaux horaires français

---

Dernière mise à jour : 2025-10-16
Auteur : Claude Code (Assistant IA)
