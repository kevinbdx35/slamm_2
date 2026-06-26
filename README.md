# Saint-Lunaire MMA — site du club

Site vitrine du club **SLAMM — Saint-Lunaire Arts Martiaux Mixtes** (association loi 1901, Côte d'Émeraude, Bretagne).

🌐 Production : [mma-saint-lunaire.fr](https://mma-saint-lunaire.fr)

## Stack

- **[Astro 6](https://astro.build/)** — générateur de site statique, composants `.astro`, sortie 100 % statique (aucun framework client).
- **CSS natif** — tokens de design en variables CSS (`:root` dans `Layout.astro`) + `<style>` scopés par composant. Pas de Tailwind ni de framework CSS.
- **Leaflet** (vanilla) — carte interactive sur la page Contact.
- **@fontsource** — Inter (corps) & Syne (titres).
- **@astrojs/sitemap** — génération du sitemap.

## Démarrage

```bash
npm install
npm run dev        # serveur de dev avec hot reload
```

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production → `dist/` |
| `npm run preview` | Prévisualisation du build |

> Il n'y a pas de script `check`/`lint` : la validation se fait via `npm run build` (il échoue en cas d'erreur de template ou de type).

## Structure

```
src/
├── layouts/Layout.astro   # <head>/SEO, tokens CSS globaux, fond du site, footer
├── pages/                 # une route = un .astro (URLs propres)
├── components/            # sections réutilisables (Hero, Essentials, Pricing, Schedule…)
└── config/                # données centralisées
    ├── schedule.js        # horaires (SCHEDULE) + tarifs (PRICING, SEASON) + helpers
    ├── faq.js             # questions/réponses FAQ (source unique)
    ├── urls.js            # liens externes (Assoconnect, réseaux, partenaires) + contact
    └── events.js          # événements
```

## Modifier le contenu

Toutes les infos pratiques vivent dans `src/config/` et se propagent partout :

- **Tarifs / horaires / saison** → `src/config/schedule.js`
- **Questions FAQ** → `src/config/faq.js` (la mini-FAQ de l'accueil en réutilise une sélection via `getFaqByIds()`)
- **Liens d'inscription, réseaux, contact** → `src/config/urls.js`

## Déploiement

Hébergé sur **Netlify** (config dans `netlify.toml`), déploiement automatique à chaque push sur `main`. Le build publie le dossier `dist/`.
