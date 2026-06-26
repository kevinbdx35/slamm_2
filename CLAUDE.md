# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Only three scripts are defined in `package.json`:

- `npm run dev` — Start the Astro dev server (hot reload)
- `npm run build` — Build for production (outputs to `dist/`)
- `npm run preview` — Preview the production build locally

There is **no `check` or `lint` script**. ESLint (`eslint-plugin-astro`) is installed as a dev dependency but is not wired to a script and has no config file — the project's real validation is `npm run build` (it fails on template/type errors).

## Deployment

Static site deployed on **Netlify** with the custom domain `mma-saint-lunaire.fr`. Auto-deploys on push to `main`. Config in `netlify.toml`:
- `build.command = "npm run build"`, `publish = "dist"`
- 301 redirects (e.g. `/cours` → `/disciplines`) and a `/*` → `/404.html` fallback

## Architecture Overview

Static marketing site for the SLAMM MMA Saint-Lunaire club, built with **Astro 6**. Zero client framework: every component is a `.astro` file producing static HTML. The only client-side JS is small inline scripts (nav burger, `.reveal` IntersectionObserver in the layout, and the Leaflet map).

### Tech Stack
- **Astro 6** (`^6.1.8`) — Static Site Generator, default `output: 'static'` (no adapter configured)
- **Plain CSS** — design tokens as CSS custom properties + component-scoped `<style>` blocks. **No Tailwind, no CSS framework.**
- **@astrojs/sitemap** — sitemap auto-generation
- **Leaflet** (`leaflet`, vanilla JS) — interactive map in `Contact.astro`
- **@fontsource/inter** + **@fontsource/syne** — typography (Inter = body, Syne = display)

### Project Structure

```
src/
├── layouts/
│   └── Layout.astro        # Single layout: <head>/SEO, global CSS tokens, site background,
│                           # skip-link, .reveal observer, FloatingTrialButton, Footer slot
├── pages/                  # One .astro file per route (clean URLs via /page/index.html)
│   ├── index.astro         # Accueil : Hero · About · Essentials · Testimonials · Partners
│   ├── disciplines.astro   # Disciplines + <Schedule /> (ancre #horaires)
│   ├── tarifs.astro        # <Pricing /> (détail complet des tarifs)
│   ├── faq.astro           # FAQ complète (accordéon <details>)
│   ├── equipe.astro · evenements.astro · contact.astro · equipements.astro
│   ├── hygiene.astro · reglement.astro · mentions-legales.astro
│   ├── politique-confidentialite.astro
│   ├── mma-dinard.astro · mma-saint-malo.astro   # pages SEO local (<GeoPage />)
│   ├── sparring.astro
│   └── 404.astro
├── components/             # Sections .astro réutilisables
│   ├── Nav.astro · Footer.astro · Hero.astro · About.astro
│   ├── Essentials.astro    # Home : aperçu Tarifs + Horaires + mini-FAQ + CTA
│   ├── Pricing.astro       # Section tarifs complète (utilisée par /tarifs)
│   ├── Schedule.astro      # Grille des créneaux (utilisée par /disciplines)
│   ├── Disciplines.astro · Team.astro · Events.astro · Testimonials.astro
│   ├── Partners.astro · Contact.astro · GeoPage.astro
│   └── FloatingTrialButton.astro
└── config/                 # Sources de données centralisées (JS)
    ├── schedule.js         # SCHEDULE, PRICING, SEASON + helpers (horaires/tarifs + Schema.org)
    ├── faq.js              # FAQ_CATEGORIES + getFaqByIds() (source unique FAQ)
    ├── urls.js             # ASSOCONNECT_URLS, SOCIAL_URLS, PARTNER_URLS, CONTACT_INFO
    └── events.js           # Données + utilitaires événements
```

There is no `src/utils/` and no separate schema generator: Schema.org JSON-LD is built **inline** in each page's frontmatter and passed to `Layout` via the `pageSchema` prop.

### Key Patterns

**Data lives in `src/config/`, never duplicated in templates.** Pricing/horaires come from `schedule.js`; FAQ from `faq.js`; external links from `urls.js`. When a piece of info is needed in two places (e.g. FAQ on `/faq` and the home mini-FAQ), import it from the config rather than copy-pasting. `getFaqByIds([...])` selects specific questions by stable `id` for the home.

**Styling conventions (no utility framework):**
- Design tokens (colors `--g500`, fonts `--font-display`/`--font-body`, radii `--r-sm`…`--r-xl`, easings) are defined once in the `:root` of `Layout.astro`'s `<style is:global>`.
- Globally available classes: `.container` (max-width wrapper) and the reveal-on-scroll system `.reveal` / `.reveal-delay-1..4` (driven by an IntersectionObserver in the layout).
- Everything else (`.section-label`, `.section-title`, buttons, cards…) is **scoped per component** — these class names are re-declared inside each component's `<style>` block following the same pattern. When adding a section, copy the established `section-header` / `section-label` / `section-title` structure.
- Single dark theme: accessible green on near-black. Prices use Inter + `tabular-nums` for legibility (see `Pricing.astro` / `Essentials.astro`).

**Astro template gotchas:**
- `.astro` files use `class` (not `className`), even inside expressions.
- Use `set:html` for raw HTML injection (e.g. SVG strings from data).
- Heading order: one `<h1>` in `Hero`, `<h2>` per section, `<h3>` for cards/sub-blocks.

**SEO:** each page passes `title`, `description` (and optional `pageSchema`) to `<Layout>`. The home FAQ does **not** emit FAQPage JSON-LD — that schema lives only on `/faq` to avoid duplication.

## Development Notes

- **No testing framework** configured.
- **Mobile-first / responsive** throughout; a floating "cours d'essai" button (`FloatingTrialButton.astro`) is present site-wide.
- **Adding a page:** create `src/pages/<name>.astro`, render `<Nav />` … `<Footer />` inside `<Layout>`, pass SEO props, add inline Schema.org if relevant.
- **Updating prices/horaires/FAQ/links:** edit the relevant file in `src/config/` — changes propagate everywhere.
