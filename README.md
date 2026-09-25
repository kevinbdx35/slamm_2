# Saint-Lunaire MMA — site du club

Site vitrine du club **SLAMM — Saint-Lunaire Arts Martiaux Mixtes** (association loi 1901, Côte d'Émeraude, Bretagne).

🌐 Production : [mma-saint-lunaire.fr](https://mma-saint-lunaire.fr)

## Stack

- **[Astro 6](https://astro.build/)** — générateur de site statique, composants `.astro`, sortie 100 % statique (aucun framework client).
- **CSS natif** — tokens de design en variables CSS (`:root` dans `Layout.astro`) + `<style>` scopés par composant. Pas de Tailwind ni de framework CSS.
- **Leaflet** (vanilla) — carte interactive sur la page Contact.
- **@fontsource-variable/archivo** — Archivo auto-hébergée (`src/styles/fonts.css`) : largeur normale pour le corps, « Archivo Expanded » (axe wdth figé à 112 %) pour les titres.
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
├── layouts/Layout.astro   # <head>/SEO, tokens CSS, fond du site, utilitaires d'animation globaux
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

## Design et animations

Thème sombre unique (vert accessible sur quasi-noir). Les tokens (couleurs `--g400`/`--g500`,
polices, rayons, courbes `--ease-out` / `--ease-in-out`) sont définis une seule fois dans
le `:root` de `Layout.astro` ; le reste du CSS est scopé par composant.

Les effets d'animation réutilisables vivent dans `Layout.astro`. On les réutilise au lieu
de recoder l'effet dans un composant :

| Classe | Effet | Utilisé sur |
|--------|-------|-------------|
| `.reveal` (+ `.reveal-delay-1..4`) | Apparition en fondu au défilement | Partout |
| `.title-slot` > `.title-slot-text` | Titre `<h1>` révélé ligne par ligne au chargement | Pages intérieures, 404, pages locales |
| `.reveal .reveal-photo` | Photo dévoilée de haut en bas, zoom qui se pose | About (accueil), Équipe |
| `.reveal .rule-cascade` + `.rule-item` | Filets dessinés depuis la gauche, puis texte, en cascade | Valeurs (accueil), cours type, infos pratiques, étapes Tarifs |
| `details.accordion-item` | Ouverture/fermeture, fondu de la réponse, retour au clic | FAQ de l'accueil et `/faq` |
| `.sommaire-link` | Section en cours marquée (`aria-current`) | Équipements, Sparring |

Conventions à respecter pour toute nouvelle interaction :

- **Survols** réservés à la souris : les règles `:hover` vont dans
  `@media (hover: hover) and (pointer: fine)`. Les styles de base restent **en dehors**,
  sinon l'élément perd son style sur mobile.
- **Retour au clic** sur tout ce qui se presse : `:active { transform: scale(0.97) }`.
- **Transitions** sur des propriétés explicites (jamais `all`), courtes (200 ms environ) ;
  `ease` pour les couleurs, `--ease-out` pour les mouvements.
- **Mouvement réduit** (`prefers-reduced-motion`) : chaque animation a un repli en simple
  fondu, sans déplacement.
- Ne pas poser `.reveal` directement sur un bouton : sa transition écrase celle du bouton.
  Le mettre sur un conteneur.
- Une image dans `.reveal-photo` doit être en `loading="eager" fetchpriority="low"`
  (Chrome ne charge jamais une image `lazy` entièrement masquée). Ne pas l'utiliser sur
  l'image principale en haut de page, pour ne pas retarder son affichage (LCP).

## Déploiement

Hébergé sur **Netlify** (config dans `netlify.toml`), déploiement automatique à chaque push sur `main`. Le build publie le dossier `dist/`.

## Google Search Console — ne pas supprimer

⚠️ **`public/google40382428cf17f542.html` ne doit JAMAIS être supprimé, renommé ni modifié.**

Ce fichier est le jeton de validation de propriété Google Search Console pour
`https://mma-saint-lunaire.fr`. Google le re-vérifie périodiquement : s'il disparaît ou
si son contenu change, la propriété est **dé-validée** et on perd l'accès aux données de
référencement, aux demandes d'indexation et aux alertes de sécurité.

Contraintes à respecter :

- Contenu exact, une seule ligne, **sans saut de ligne final** :
  `google-site-verification: google40382428cf17f542.html`
- Doit répondre en **HTTP 200** sur `https://mma-saint-lunaire.fr/google40382428cf17f542.html`
  (pas de redirection, pas de 404 déguisé en 200).
- Il vit dans `public/` : Astro le recopie tel quel dans `dist/`, sans passer par un
  template ni par le routeur. Ne pas le déplacer dans `src/pages/`.
- Le catch-all `/*` → `/404.html` de `netlify.toml` ne doit jamais recevoir `force = true`
  (voir le commentaire sur place), sous peine de masquer ce fichier.

Vérification après déploiement :

```bash
curl -sSL -D - -o /tmp/gsc.txt -w '\nHTTP final: %{http_code}\nRedirections: %{num_redirects}\nURL finale: %{url_effective}\n' \
  https://mma-saint-lunaire.fr/google40382428cf17f542.html && cat /tmp/gsc.txt
```

Attendu : `HTTP final: 200`, `Redirections: 0`, et le contenu exact ci-dessus.

### Validation DNS (propriété « Domaine », méthode durable)

En complément du fichier HTML, la propriété de type **Domaine** se valide par un
enregistrement TXT sur l'apex. Cette méthode survit à une refonte complète du site.

⚠️ La zone DNS est gérée par **Netlify DNS** (serveurs de noms `dns1→dns4.p07.nsone.net`),
pas chez le registraire : l'enregistrement se crée dans Netlify → Domains →
`mma-saint-lunaire.fr` → DNS panel.

| Champ | Valeur |
|-------|--------|
| Type | `TXT` |
| Name / Host | *(vide — l'apex, pas `www`)* |
| Value | `google-site-verification=zGMsPo4XH7j4MTW55xPOQGI6EBbWk1dn1J01LZchXGM` |
| TTL | 3600 |

Ce jeton n'est pas un secret (il est publié en clair dans le DNS). Il est **différent** de
celui du fichier HTML : les deux méthodes ont chacune leur jeton, et les deux propriétés
(« Domaine » et « Préfixe d'URL ») coexistent avec leur propre historique de données —
garder les deux validations actives.

S'il existe déjà des TXT sur l'apex (SPF, DMARC…), **ajouter** un enregistrement
supplémentaire sans écraser les existants.

Vérification de la propagation :

```bash
dig +short TXT mma-saint-lunaire.fr @8.8.8.8 | grep google-site-verification
```
