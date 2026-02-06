# SLAMM MMA Saint-Lunaire

Site web officiel du club de MMA SLAMM (Saint-Lunaire Arts Martiaux Mixtes) situé à Saint-Lunaire, Bretagne.

## Site en ligne

**Site officiel :** [https://mma-saint-lunaire.fr/](https://mma-saint-lunaire.fr/)

## Technologies

- **Astro 5** - Générateur de sites statiques (SSG)
- **Tailwind CSS v4** - Framework CSS utility-first
- **React 19** - Composants interactifs (islands)
- **Lucide React** - Bibliothèque d'icônes
- **React Leaflet** - Cartes interactives

## Fonctionnalités

- **Site statique** - HTML pré-généré, zéro JS par défaut
- **Islands architecture** - React uniquement pour les éléments interactifs
- **Responsive** - Mobile-first, optimisé tous écrans
- **Mode sombre/clair** - Toggle avec persistance localStorage
- **Navigation mobile** - Bottom navigation + drawer latéral
- **Carte interactive** - Localisation avec Leaflet/OpenStreetMap
- **SEO complet** - Schema.org (SportsClub, LocalBusiness, FAQ, Event), sitemap
- **Sécurité renforcée** - CSP, HSTS, headers de protection
- **Accessibilité** - Skip-to-content, ARIA labels, focus visible
- **Safe Area iOS** - Support des encoches

## Installation

```bash
# Cloner le repository
git clone https://github.com/kevinbdx35/slamm_2.git
cd slamm_2

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## Configuration centralisée

### Horaires et tarifs (`/src/config/schedule.js`)

```javascript
export const SCHEDULE = [
  { day: 'Lundi', dayEnglish: 'Monday', start: '18:00', end: '19:15' },
  { day: 'Mercredi', dayEnglish: 'Wednesday', start: '19:15', end: '21:15' },
  { day: 'Vendredi', dayEnglish: 'Friday', start: '19:30', end: '21:00' },
];

export const PRICING = {
  adult: { label: '+25 ans', price: 210 },
  young: { label: '+16 ans', price: 180 },
};
```

### URLs Assoconnect (`/src/config/urls.js`)

```javascript
export const ASSOCONNECT_URLS = {
  TRIAL_BOOKING: "https://slamm.assoconnect.com/...",
  ANNUAL_MEMBERSHIP: "https://slamm.assoconnect.com/...",
};
```

### Événements (`/src/config/events.js`)

Configuration des stages, compétitions et événements du club.

## Structure du projet

```
src/
├── layouts/
│   └── BaseLayout.astro      # Layout principal (head, SEO, footer)
├── pages/                     # Pages Astro (HTML statique)
│   ├── index.astro           # Accueil
│   ├── cours.astro           # Cours et tarifs
│   ├── equipe.astro          # Équipe
│   ├── evenements.astro      # Événements
│   ├── contact.astro         # Contact et carte
│   ├── faq.astro             # FAQ
│   ├── hygiene.astro         # Règles d'hygiène
│   ├── mentions-legales.astro # Mentions légales + cookies
│   └── 404.astro
├── components/
│   ├── Footer.astro          # Footer statique
│   ├── Menu.jsx              # Navigation (React)
│   ├── Accordion.jsx         # FAQ/Hygiene (React)
│   ├── FloatingTrialButton.jsx # Bouton flottant (React)
│   ├── LeafletMap.jsx        # Carte (React)
│   └── CustomCursor.jsx      # Curseur interactif (React, desktop)
├── config/
│   ├── urls.js               # URLs externes
│   ├── schedule.js           # Horaires et tarifs
│   └── events.js             # Événements
├── utils/
│   └── schemaGenerator.js    # Schema.org (SportsClub, LocalBusiness, FAQ, etc.)
└── styles/
    └── global.css            # Tailwind v4 config
```

## Design System

- **Police** : IBM Plex Mono
- **Couleurs** :
  - Mode clair : `#2e7d32` (vert accessible)
  - Mode sombre : `#00ff5e` (vert néon SLAMM)
  - Fond sombre : `#041a1a`
- **Dark mode** : Class-based via `@custom-variant dark`

## Sécurité

Headers de sécurité configurés dans `netlify.toml` :

- **Content-Security-Policy** - Protection XSS et injection
- **Strict-Transport-Security** - Force HTTPS
- **X-Frame-Options** - Protection clickjacking
- **Permissions-Policy** - Désactive APIs sensibles

## Déploiement

- **Hébergement** : Netlify
- **Domaine** : `mma-saint-lunaire.fr` (Gandi.net)
- **SSL** : Certificat HTTPS automatique
- **Build** : Auto-deploy sur push `main`

## Licence

Tous droits réservés - Club SLAMM MMA Saint-Lunaire
