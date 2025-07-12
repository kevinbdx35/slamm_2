# SLAMM MMA Saint-Lunaire

Site web officiel du club de MMA SLAMM (Saint-Lunaire Arts Martiaux Mixtes) situé à Saint-Lunaire, Bretagne.

## 🥊 À propos

SLAMM est un club de MMA (Mixed Martial Arts) proposant des cours pour tous niveaux dans une ambiance conviviale et professionnelle. Notre club offre un enseignement de qualité dans les disciplines suivantes :

- **MMA** (Arts Martiaux Mixtes)
- **Grappling** 
- **Boxe**
- **Lutte**

## 🌐 Site en ligne

Le site est déployé automatiquement sur GitHub Pages : [https://kevinbdx35.github.io/slamm_2/](https://kevinbdx35.github.io/slamm_2/)

## 🛠️ Technologies utilisées

- **React 19** - Framework JavaScript moderne
- **Material-UI (MUI)** - Bibliothèque de composants Material Design 3
- **Vite** - Outil de build ultra-rapide
- **React Router** - Navigation côté client
- **React Leaflet** - Cartes interactives
- **ESLint** - Linting et qualité du code

## ✨ Fonctionnalités

- ✅ **Design moderne** avec Material Design 3
- ✅ **Responsive** - Optimisé mobile et desktop
- ✅ **Mode sombre/clair** avec transition fluide
- ✅ **Navigation intuitive** avec bottom navigation mobile
- ✅ **Carte interactive** pour la localisation du club
- ✅ **Performance optimisée** avec lazy loading
- ✅ **SEO friendly** avec métadonnées structurées
- ✅ **Accessibilité** conforme aux standards WCAG
- ✅ **Curseur personnalisé** avec états interactifs
- ✅ **Safe Area iOS** - Support des encoches et Dynamic Island

## 🚀 Installation et développement

### Prérequis

- Node.js 20+ 
- npm ou yarn

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

# Lancer le linting
npm run lint

# Déployer sur GitHub Pages
npm run deploy
```

## 📱 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Layout.jsx      # Layout principal avec navigation
│   ├── Menu.jsx        # Navigation bottom mobile
│   ├── Footer.jsx      # Pied de page
│   ├── CustomCursor.jsx # Curseur personnalisé
│   └── SeoHelmet.jsx   # Métadonnées SEO
├── pages/              # Pages de l'application
│   ├── HomePage.jsx    # Page d'accueil
│   ├── CoursPage.jsx   # Cours et tarifs
│   ├── EquipePage.jsx  # Équipe d'encadrement
│   ├── ContactPage.jsx # Contact et localisation
│   └── ClubPage.jsx    # Présentation du club
├── styles/             # Styles CSS
├── theme.js            # Configuration Material-UI
└── App.jsx             # Composant racine
```

## 🎨 Design System

Le site utilise un système de design basé sur **Material Design 3** avec :

- **Typographie** : IBM Plex Mono (identité monospace moderne)
- **Couleurs** : 
  - Mode clair : Vert lisible (#2e7d32)
  - Mode sombre : Vert néon SLAMM (#00ff5e)
- **Espacements** : Système 8px harmonieux
- **Border radius** : 12px pour les surfaces
- **Animations** : Transitions fluides avec cubic-bezier

## 🌍 Déploiement

Le déploiement se fait automatiquement via GitHub Actions :

1. **Push sur main** → Déclenche le workflow
2. **Build Vite** → Génère les fichiers statiques
3. **Deploy GitHub Pages** → Publie sur gh-pages

Le workflow utilise Node.js 20 pour la compatibilité avec Vite 7.

## 📄 Licence

Ce projet est sous licence privée. Tous droits réservés au club SLAMM MMA Saint-Lunaire.

---

*Développé avec ❤️ pour la communauté MMA de Saint-Lunaire*