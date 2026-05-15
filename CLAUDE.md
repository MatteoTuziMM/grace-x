# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for **Grace-X**, a privacy-preserving enterprise AI memory and knowledge graph platform. No build system, no framework, no package manager. Three files:

- `index.html` — HTML structure + Tailwind config inline
- `style.css` — all custom CSS (animations, component classes, form transitions)
- `main.js` — all JavaScript (theme, wheel carousel, CTA form + EmailJS)

## Running the Page

Open `index.html` directly in a browser, or serve it locally:

```
npx serve .
# or
python -m http.server 8080
```

## Deployment

Hosted on GitHub Pages with a custom domain configured via `CNAME` → **grace-x.ai**. No CI/CD pipeline; pushing to `main` deploys automatically.

## Architecture

`index.html` is a fully self-contained file with three logical zones:

1. **`<head>` / Tailwind config** (`<script id="tailwind-config">`) — the entire design token system lives here as a `tailwind.config` object. All custom colors, font sizes, border radii, and spacing are defined inline. Edit tokens here to propagate changes site-wide.

2. **`<body>` sections** — sequential marketing sections, each commented with their name. Order: `TopNavBar` → `Hero` → `Problem` → `Solution` → `Infrastructure` → `Enterprise Superintelligence` → `How Grace-X Works` → `Final CTA` → `Footer`. The layout uses a `max-w-[1280px] mx-auto` container throughout. All sections from Hero through Final CTA are wrapped in a `<main>` element.

3. **`main.js`** (loaded at bottom of `<body>`) — reads/writes `localStorage.theme`, applies `dark`/`light` class to `<html>`. Initializes from localStorage or system preference, and listens for system preference changes. No UI toggle is wired up; add one by calling `applyTheme('dark'|'light')`.

## Design System (`DESIGN.md`)

The canonical design reference is `DESIGN.md`. Key rules:

- **Colors**: Warm parchment background (`#FDFBF7`) paired with deep navy primary (`#051A49`). `primary-vibrant` (`#1E0040`) is the interactive accent — used for the CTA form submit button, hover text states, and active dot indicators (not `primary`). Gold/yellow (`#FBC02D`) is reserved for decorative horizontal rules only — never for buttons. Turquoise is **not used** in the current implementation and must not be introduced.
- **Typography**:
  - `Space Grotesk` — all headlines, always with tight/negative letter-spacing
  - `Inter` — body copy and labels (DESIGN.md specifies Hanken Grotesk; Inter is the current implementation)
  - JetBrains Mono was specified in an earlier iteration but is not loaded; do not add it without a product decision
- **Elevation**: No drop shadows. Depth via tonal surface layers and 1px borders. Exception: the central "Company Brain" card uses a large soft shadow (`shadow-[0_32px_64px_-16px_...]`) for emphasis.
- **Radius**: 4px (`rounded`) globally; 12px (`rounded-xl`) for cards; 40px (`rounded-[40px]`) only for the hero brain card.
- **Spacing**: 120px section gaps per spec; implemented as `py-20` (80px) in most sections. The custom `section-gap: 96px` token in Tailwind config is defined but not used.

## Known Token Drift (DESIGN.md vs index.html)

| Spec | Implementation |
|------|---------------|
| Body font: Hanken Grotesk | Inter (loaded from Google Fonts) |
| JetBrains Mono for labels | Not loaded; labels use Inter or inline tracking |
| `primary` navy: `#0A192F` | `#051A49` (darker) |
| Section gap: 120px | `py-20` ≈ 80px |

When reconciling design and code, follow `index.html`'s Tailwind config as the live source of truth.

## Dark Mode

Tailwind `darkMode: "class"` — the `dark:` prefix variants are active when `<html>` has class `dark`. Every color used should have a `dark:` counterpart. The dark palette uses `-dark` suffixed tokens (e.g., `bg-background-dark`, `text-on-surface-dark`, `border-outline-variant-dark`).

**Exception — Wheel Carousel:** The "How Grace-X Works" section (`#gx-section`) is intentionally always dark-styled. The JavaScript hard-codes near-black backgrounds (`#201f1f`, `#1c1b1b`) for orbit nodes regardless of page theme. This is by design; do not attempt to make the carousel node styles theme-aware.

**Mobile:** The carousel orbit radius is 210px on desktop and reduces to 128px on mobile (`md:` breakpoint). Node sizing, opacity, and scale logic are unchanged; only the radius changes.

## Conventions

- Tailwind utility classes only — no custom CSS in `index.html`. All custom CSS lives in `style.css`:
  - `material-symbols-outlined` — icon font variation settings (weight 300, fill 0)
  - `.blend-bg` — edge-fading gradient overlay (white/dark edges, transparent center) used to blend image regions into the page background
  - `.mask-radial` — radial mask that fades element edges to transparent, used on the orbit wheel background circle
  - `.text-balance` — `text-wrap: balance` for multi-line headline reflow
  - Keyframe animations: `gx-flow` (wheel arc dashes), `infra-flow` (left→center paths), `infra-dot-blink` (source activity dots), `infra-llm-sweep` (center→LLM paths)
  - CTA form open/close transitions (`#cta-btn-area`, `#cta-form-container`, `.hiding`, `.is-open`)
- Tailwind is loaded from CDN with the `forms` and `container-queries` plugins: `<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries">`. The `forms` plugin resets input default styles; `container-queries` adds `@container` variant support.
- **EmailJS** (`@emailjs/browser@4`) is loaded from jsDelivr CDN in `<head>` and powers the contact form. It is initialized in the theme script block with a public key.
- Icons use **Material Symbols Outlined** (`<span class="material-symbols-outlined">`), weight 300, fill 0.
- Section structure: `<section>` with optional full-width background → inner `<div class="max-w-[1280px] mx-auto px-8 py-20">`.
- Interactive hover states: `hover:-translate-y-1` lift + shadow increase is the standard micro-interaction pattern.
- **Nav scroll links:** "Platform" scrolls to `#platform-section` (Enterprise Superintelligence); "Technology" scrolls to `#gx-section` (How Grace-X Works). Both use `scrollIntoView({behavior:'smooth', block:'start'})`.
- **Enterprise Superintelligence SVG** uses `preserveAspectRatio="none"` and `z-20`. The `none` value is critical — without it the default `xMidYMid meet` scales the SVG by height, creating large horizontal margins that misalign path coordinates with the HTML card layout.

## main.js

`main.js` is loaded via `<script src="main.js"></script>` at the bottom of `<body>` (after all DOM elements). It contains three logical sections in order:

1. **Theme + EmailJS init** — `applyTheme(theme)` helper + initialization. Sets `class="dark"` or `class="light"` on `<html>`. The page ships with `<html class="light">` as the default. Calls `emailjs.init({ publicKey: '...' })` to initialize the EmailJS client (requires the EmailJS CDN already loaded in `<head>`).

2. **Wheel Carousel IIFE** — drives the "How Grace-X Works" section (`#gx-section`). Five nodes (`#gx-n0`–`#gx-n4`, class `.gx-node`) are positioned by polar offset from center at radius 210px. Active node: scale 1.0/opacity 1/violet glow. Adjacent nodes: scale 0.62/opacity 0.55. Far nodes: scale 0.5/opacity 0.3. Center panel `#gx-info` fades between `#gx-c-num`, `#gx-c-title`, `#gx-c-flow`, `#gx-c-desc`. Global functions: `gxGoTo(n)`, `gxPrev()`, `gxNext()`. Auto-advances every 5s; clicking a node resets the timer.

3. **CTA form** — three global functions manage the Final CTA inline contact form:
   - `expandCtaForm()` — hides `#cta-btn-area`, reveals `#cta-form-container` with a CSS `is-open` class, smooth-scrolls into view.
   - `collapseCtaForm()` — reverses the above, resets the form, and hides both `#contact-success` and `#contact-error`.
   - `handleContactSubmit(e)` — prevents default, disables the submit button with "Invio in corso…" feedback, calls `emailjs.sendForm('service_f2w7adi', 'template_2c9xmz9', form)`. On success: shows `#contact-success`, hides `#contact-form`. On failure: re-enables the button and shows `#contact-error`.

## UI Copy Language

The main page body copy is in English. The CTA contact form labels and UI strings are intentionally in Italian (`Nome`, `Cognome`, `Messaggio`, `Invia messaggio`, `Annulla`, `Ti contatteremo al più presto.`). Do not translate these to English.

## Assets

All local images live in the `logos/` folder:
- `logo.png` — Grace-X logo (favicon, navbar wordmark, Company Brain card)
- `slack_logo.png`, `Jira_logo.png` — data source cards in Enterprise Superintelligence section
- `openai_logo.svg`, `claude_logo.svg`, `gemini_logo.webp` — LLM cards (right column)

- `openai_logo_old.webp` — unused older asset; superseded by `openai_logo.svg`

`screen.png` (root) is a static page screenshot, not used in the page itself.

External images (lh3.googleusercontent.com AIDA URLs) are placeholder assets used in the Solution section; replace with real assets before production.
