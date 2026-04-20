# SLAMM — Design System & Référence UI/UX

## Thème général

- **Mode** : Dark only (pas de toggle)
- **Identité** : Sport de combat, moderne, premium, lisible
- **Palette dominante** : Vert émeraude sur fond quasi-noir

---

## Couleurs

### Fond
| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#080f0a` | Fond principal (body) |
| `--bg1` | `#0d1a10` | Cartes, sections alternées |
| `--bg2` | `#111f15` | Sous-cartes, inputs |
| `--surface` | `#152018` | Surfaces au hover, accordéon ouvert |

### Vert (palette principale)
| Token | Valeur | Usage |
|---|---|---|
| `--g400` | `#4ade80` | Accents, textes colorés, icônes actives |
| `--g500` | `#22c55e` | Boutons primaires, labels, badges |
| `--g600` | `#16a34a` | Hover boutons primaires |
| `--g700` | `#15803d` | Scrollbar thumb |

### Bordures
| Token | Valeur | Usage |
|---|---|---|
| `--border` | `rgba(34,197,94,0.12)` | Bordures standard (subtiles) |
| `--border-strong` | `rgba(34,197,94,0.25)` | Bordures accentuées, séparateurs |

### Texte
| Token | Valeur | Usage |
|---|---|---|
| `--text` | `#f0fdf4` | Titres, texte principal |
| `--text-2` | `#bbf7d0` | Texte secondaire (logo, sous-titres) |
| `--text-3` | `#93c9a4` | Corps de texte, descriptions |
| `--text-muted` | `#7aaa8a` | Métadonnées, notes, labels discrets |

---

## Typographie

### Familles
| Rôle | Police | Import |
|---|---|---|
| Display / Titres | **Syne** (700, 800) | Google Fonts |
| Corps / UI | **Inter** (300, 400, 500, 600) | Google Fonts |

### Échelle de taille (tokens récurrents)
| Usage | Valeur |
|---|---|
| Hero H1 | `clamp(56px, 10vw, 120px)` — Syne 800 |
| Titre de section | `clamp(36px, 5vw, 56px)` — Syne 800 |
| Titre de carte | `20–22px` — Syne 700–800 |
| Corps de texte | `16px` — Inter 400, line-height 1.7 |
| Lead / chapô | `clamp(16px, 2vw, 20px)` — Inter 400 |
| Label section | `13px` — Inter 600, uppercase, letter-spacing 0.15em |
| Métadonnée | `12–13px` — Inter 400–500 |
| Bouton | `14–15px` — Inter 600 |

### Règles typo
- `letter-spacing: -0.03em` sur les grands titres Syne
- `font-variant-numeric: tabular-nums` sur les prix et chiffres
- `-webkit-font-smoothing: antialiased` global
- `line-height: 1.7` sur le corps

---

## Espacements

### Sections
- **Padding vertical standard** : `120px 0`
- **Padding bas réduit** (dernière section) : `120px 0 80px`
- **Séparateur de section** : ligne horizontale `1px` en `linear-gradient(90deg, transparent, var(--border-strong), transparent)`

### Container
- **Max-width** : `1200px`
- **Padding horizontal** : `24px` (desktop) → `16px` (≤ 768px)

### Grilles
- **2 colonnes égales** : `grid-template-columns: 1fr 1fr` + `gap: 24px`
- **3 colonnes** : `repeat(3, 1fr)` + séparateurs `border-right`
- **Cartes** : padding interne `40px`

---

## Border Radius

| Token | Valeur | Usage |
|---|---|---|
| `--r-sm` | `8px` | Badges, petits éléments |
| `--r-md` | `16px` | Listes, accordéons, inputs |
| `--r-lg` | `24px` | Cartes moyennes |
| `--r-xl` | `32px` | Grandes cartes, sections |
| `100px` | — | Boutons pill (tous les CTAs) |
| `50%` | — | Avatars, numéros d'étapes |

---

## Animations & Interactions

### Easing
| Token | Valeur | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrées, reveal, menus |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Transitions bidirectionnelles |

### Reveal au scroll
- Classe `.reveal` : `opacity: 0` + `translateY(32px)` → visible quand dans le viewport
- Transition : `0.8s var(--ease-out)`
- Délais disponibles : `.reveal-delay-1` (0.1s) à `.reveal-delay-4` (0.4s)
- Seuil IntersectionObserver : `threshold: 0.1`, `rootMargin: 0px 0px -60px 0px`

### Hover standard sur les boutons
- `transform: translateY(-1px)` + changement de couleur fond
- Durée : `0.2s`

### Navigation
- Scroll > 40px → nav se rétracte (`padding: 20px` → `12px`) + fond `rgba(8,15,10,0.85)` + `backdrop-filter: blur(20px)`
- Transition nav : `0.4s var(--ease-out)`

### Menu mobile
- Breakpoint : `≤ 1100px`
- Overlay fullscreen (`inset: 0`) avec `opacity` transition `0.3s`
- Liens en `clamp(32px, 8vw, 48px)` — Syne 800
- Burger animé : `translateY + rotate` sur les deux barres

### Accordéon FAQ
- HTML natif `<details>/<summary>`
- Icône chevron tourne `180deg` à l'ouverture
- Fond summary : `--bg1` → `--surface` au hover/ouvert

---

## Composants UI

### Boutons
| Variante | Style |
|---|---|
| Primaire | Fond `--g500`, texte `--bg`, pill `100px`, hover `--g400` |
| Ghost / Outline | Fond `rgba(g500, 0.08)`, bordure `rgba(g500, 0.25)`, texte `--g400` |
| Nav CTA | Fond `--g500`, texte `--bg`, `font-size: 13px`, `padding: 8px 18px` |

### Cartes
- Fond `--bg1`, bordure `1px solid --border`, border-radius `--r-xl`
- Variante accent : bordure `--border-strong`, fond `rgba(34,197,94,0.04)`

### Labels de section
- Uppercase, `13px`, `letter-spacing: 0.15em`, couleur `--g500`
- Placés au-dessus du titre H2

### Badges de statut
- `font-size: 11px`, uppercase, `letter-spacing: 0.04em`
- Fond `--g500`, texte `--bg`, `padding: 3px 8px`, `border-radius: 4px`

### Scrollbar
- Largeur `4px`, track `--bg`, thumb `--g700`, border-radius `2px`

### Sélection texte
- Fond `--g600`, texte blanc

### Focus visible
- Outline `2px solid --g400`, offset `3px`, border-radius `4px`

---

## Carte interactive (Contact)

- **Librairie** : Leaflet 1.9.4 via CDN
- **Tuiles** : CartoDB Light (`basemaps.cartocdn.com/light_all`)
- `scrollWheelZoom: false`
- Chargement différé via `IntersectionObserver` sur le conteneur map

---

## Responsive

| Breakpoint | Comportement |
|---|---|
| `≤ 1100px` | Menu desktop masqué → burger + overlay mobile |
| `≤ 960px` | Grilles 2 colonnes → 1 colonne |
| `≤ 768px` | Container padding `24px` → `16px`, ajustements typographie |
| `≤ 700px` | Grilles 3 colonnes → 1 colonne (steps, tarif cards) |

---

## Principes UX

- **Scroll smooth** global + `scroll-padding-top: 80px` (hauteur nav fixe)
- Toutes les images : `display: block; max-width: 100%`
- `overflow-x: hidden` sur le body
- Liens externes Assoconnect : `target="_blank" rel="noopener noreferrer"`
- Menu mobile : `overflow: hidden` sur body quand ouvert (évite le scroll sous-jacent)
- Formulaire contact : mailto protégé contre les bots via JS
