# SLAMM MMA Saint-Lunaire

Site web officiel du club de MMA SLAMM (Saint-Lunaire Arts Martiaux Mixtes) situé à Saint-Lunaire, Bretagne.

## À propos

SLAMM est un club de MMA (Mixed Martial Arts) proposant des cours pour tous niveaux dans une ambiance conviviale et professionnelle. Notre club offre un enseignement de qualité dans les disciplines suivantes :

- **MMA** (Arts Martiaux Mixtes)

## Site en ligne

**Site officiel :** [https://mma-saint-lunaire.fr/](https://mma-saint-lunaire.fr/)

Le site est hébergé sur Netlify avec un domaine personnalisé configuré.

## Technologies utilisées

- **Astro 5** - Générateur de sites statiques (SSG)
- **Tailwind CSS v4** - Framework CSS utility-first
- **React 19** - Composants interactifs (islands)
- **Lucide React** - Bibliothèque d'icônes
- **React Leaflet** - Cartes interactives
- **ESLint** - Linting et qualité du code

## Fonctionnalités

- **Site statique** - HTML pré-généré, zéro JS par défaut
- **Islands architecture** - React uniquement pour les éléments interactifs
- **Responsive** - Optimisé mobile et desktop
- **Mode sombre/clair** - Toggle avec persistance localStorage
- **Navigation intuitive** - Bottom navigation mobile + drawer
- **Carte interactive** - Localisation du club avec Leaflet
- **SEO natif** - Métadonnées Schema.org, sitemap automatique
- **Performance** - Pas de FOUC, CSS inline
- **Accessibilité** - Skip-to-content, ARIA labels
- **Curseur personnalisé** - États interactifs (desktop)
- **Safe Area iOS** - Support des encoches

## Installation et développement

### Prérequis

- Node.js 20+
- npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/kevinbdx35/slamm_2.git

# Aller dans le dossier
cd slamm_2

# Installer les dépendances
npm install
```

### Commandes disponibles

```bash
# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Vérification TypeScript/Astro
npm run check

# Lancer le linting
npm run lint
```

## Configuration

### URLs Assoconnect

Les liens vers Assoconnect sont centralisés dans `/src/config/urls.js` pour faciliter les mises à jour :

```javascript
export const ASSOCONNECT_URLS = {
  TRIAL_BOOKING: "https://slamm.assoconnect.com/collect/description/586837-g-cours-d-essai",
  ANNUAL_MEMBERSHIP: "https://slamm.assoconnect.com/collect/description/540662-u-adhesion-annuelle-saison-2025-2026",
};
```

**Pour modifier les liens :** Éditez uniquement ce fichier, les changements se répercutent automatiquement partout.

## Structure du projet

```
src/
├── layouts/
│   └── BaseLayout.astro    # Layout principal (head, SEO, footer)
├── pages/                   # Pages Astro (HTML statique)
│   ├── index.astro         # Page d'accueil
│   ├── cours.astro         # Cours et tarifs
│   ├── equipe.astro        # Équipe d'encadrement
│   ├── evenements.astro    # Événements
│   ├── contact.astro       # Contact et localisation
│   ├── faq.astro           # Questions fréquentes
│   ├── hygiene.astro       # Règles d'hygiène
│   ├── mentions-legales.astro
│   └── 404.astro
├── components/
│   ├── Footer.astro        # Footer statique
│   ├── Menu.jsx            # Navigation (React island)
│   ├── Accordion.jsx       # FAQ/Hygiene (React island)
│   ├── FloatingTrialButton.jsx  # FAB (React island)
│   ├── CustomCursor.jsx    # Curseur (React island)
│   ├── LeafletMap.jsx      # Carte (React island)
│   └── AssoconnectForm.jsx # Formulaire (React island)
├── config/
│   ├── urls.js             # URLs externes centralisées
│   └── events.js           # Données événements
├── utils/
│   └── schemaGenerator.js  # Générateurs Schema.org
└── styles/
    └── global.css          # Tailwind v4 (@theme, composants)
```

## Design System

Le site utilise **Tailwind CSS v4** avec un thème personnalisé :

- **Typographie** : IBM Plex Mono (identité monospace)
- **Couleurs** :
  - Mode clair : Vert accessible (`#2e7d32`)
  - Mode sombre : Vert néon SLAMM (`#00ff5e`)
  - Fond sombre : `#041a1a`
- **Dark mode** : Class-based (`@custom-variant dark`)
- **Composants** : heading-border, section-border, card-border, btn

## Déploiement

Le site est déployé sur **Netlify** avec un **domaine personnalisé** :

### Configuration
- **Domaine** : `mma-saint-lunaire.fr` (Gandi.net)
- **DNS** : CNAME vers Netlify
- **SSL** : Certificat HTTPS automatique
- **Build** : `npm run build` → `dist/`

### Processus
1. Push sur `main`
2. Netlify détecte et build automatiquement
3. Déploiement et mise à jour immédiate

## Licence

Ce projet est sous licence privée. Tous droits réservés au club SLAMM MMA Saint-Lunaire.

---

*Développé pour la communauté MMA de Saint-Lunaire*
