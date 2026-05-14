---
name: The Design System
colors:
  light:
    primary: '#051A49'
    primary-vibrant: '#1E0040'
    purple-vibrant: '#3B0764'
    on-primary: '#FDFBF7'
    background: '#FDFBF7'
    surface: '#F5F2EA'
    surface-container-low: '#FAF8F2'
    surface-container: '#F5F2EA'
    surface-container-high: '#EBE8E0'
    surface-container-highest: '#E1DED5'
    surface-variant: '#E1DED5'
    on-surface: '#0A192F'
    on-surface-variant: '#44566C'
    outline: '#D1D5DB'
    outline-variant: '#E5E7EB'
    secondary: '#051A49'
    tertiary: '#FBC02D'
    inverse-surface: '#051A49'
    inverse-on-surface: '#FDFBF7'
    primary-container: '#E0F2F1'
    on-primary-container: '#004D40'
  dark:
    background-dark: '#121316'
    surface-dark: '#121316'
    surface-container-dark: '#1e2022'
    surface-container-low-dark: '#1a1c1e'
    surface-container-high-dark: '#292a2d'
    surface-container-highest-dark: '#343538'
    surface-container-lowest: '#0d0e11'
    surface-bright: '#38393c'
    on-surface-dark: '#e3e2e6'
    on-surface-variant-dark: '#c4c6cf'
    on-background-dark: '#e3e2e6'
    primary-dark: '#5B21B6'
    on-primary-dark: '#133057'
    primary-container-dark: '#1a365d'
    on-primary-container-dark: '#86a0cd'
    secondary-dark: '#ffe083'
    tertiary-dark: '#7bd0ff'
    outline-dark: '#8e9099'
    outline-variant-dark: '#43474e'
    surface-variant-dark: '#343538'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontSizeMd: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
    note: 48px default, 64px at md breakpoint via inline class
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-caps:
    note: Used inline as text-[10px] md:text-[11px] tracking-[0.2em..0.3em] font-bold uppercase. Not a named Tailwind token.
rounded:
  DEFAULT: 4px
  lg: 8px
  xl: 12px
  full: 9999px
  brain-card: 40px
  note: rounded-[40px] used exclusively on the central Company Brain card in the Enterprise Superintelligence section.
spacing:
  unit: 4px
  gutter: 24px
  block-gap: 32px
  container-padding: 32px
  section-gap: 96px
  container-max: 1280px
  section-padding-y: 80px
  note: Sections use py-20 (80px) in practice. section-gap token (96px) is defined but not applied directly.
---

## Brand & Style

Grace-X embodies a "stealth startup" persona: highly intelligent, strategically quiet, and institutionally trustworthy. The visual language avoids consumer-tech loudness in favor of a sophisticated editorial aesthetic that signals deep expertise.

The palette pairs a warm parchment background (`#FDFBF7`) with deep navy (`#051A49`) as primary. Dark purple (`#1E0040`, `primary-vibrant`) is used for interactive emphasis — hover states, active indicators, and the primary CTA button. Gold (`#FBC02D`, `tertiary`) is reserved for decorative horizontal rules and accent marks, never for buttons. The dark theme pivots from the navy family to a violet primary (`#5B21B6`, `primary-dark`) against a near-black charcoal surface (`#121316`).

## Colors

### Light Theme

- **`primary` (#051A49):** Deep navy. Used for headlines, logo wordmark, and structural text.
- **`primary-vibrant` (#1E0040):** Dark purple. Used for interactive states: hover text, icon tints, dot indicators, and the form submit button.
- **`purple-vibrant` (#3B0764):** Deeper purple. Used for text selection highlights (`selection:bg-primary-vibrant/20`).
- **`on-primary` (#FDFBF7):** Warm cream. Text on dark/navy surfaces.
- **`background` (#FDFBF7):** Warm parchment. Default page background; also used in `.blend-bg` and `.dark body` override.
- **`surface` / `surface-container` (#F5F2EA):** Warm off-white. Used for section backgrounds that need slight visual lift (e.g. Solution section).
- **`tertiary` (#FBC02D):** Gold/amber. Used exclusively for decorative `h-0.5` horizontal rules separating pillar items. Never used for buttons.
- **`on-surface` (#0A192F):** Primary body text color.
- **`on-surface-variant` (#44566C):** Secondary/supporting text.
- **`outline` (#D1D5DB) / `outline-variant` (#E5E7EB):** Border colors for inputs and dividers.

### Dark Theme

- **`background-dark` (#121316):** Near-black charcoal. Page background.
- **`primary-dark` (#5B21B6):** Violet. Replaces `primary-vibrant` for interactive states in dark mode.
- **`secondary-dark` (#ffe083):** Warm yellow. Available for emphasis; not currently applied in the page.
- **`on-surface-dark` (#e3e2e6):** Light warm gray. Primary text in dark mode.
- **`on-surface-variant-dark` (#c4c6cf):** Muted light gray. Supporting text in dark mode.
- **`outline-variant-dark` (#43474e):** Subtle border in dark mode.
- **`surface-container-dark` (#1e2022):** Slightly lifted surface; used for cards and the orbit carousel node active state.

### Colors Not in Spec (intentionally absent)

Turquoise (`#40E0D0`) is **not used** in the current implementation. It was specified in an earlier iteration but was removed. Do not introduce it.

## Typography

Two fonts are loaded:

1. **Space Grotesk** — all headlines (`display-xl`, `headline-lg`, `headline-md`). Always tight or negative letter-spacing.
2. **Inter** — all body copy and labels. JetBrains Mono was specified in an earlier iteration but is not loaded; do not add it without a product decision.

Label-caps style (e.g. "Pillar 01", "Company Brain", section eyebrows) is implemented with inline Tailwind: `text-[10px] tracking-[0.25em] font-bold uppercase` — not via a named token.

## Layout & Spacing

- **Container:** `max-w-[1280px] mx-auto px-8` throughout. Horizontal padding is 32px (not 64px).
- **Section vertical padding:** `py-20` (80px) on all sections.
- **Internal block gaps:** `gap-8` (32px) for card grids, `gap-12` for pillar grids, `gap-16` for asymmetric two-column layouts.
- **Mobile:** Responsive via Tailwind breakpoints (`md:`). Section layout collapses to single column; orbit carousel radius reduces from 210px to 128px.

## Elevation & Depth

Depth is achieved primarily through tonal surface layering and borders. Shadows are used selectively:

- **Cards (Solution section):** `shadow-sm` at rest, `hover:shadow-md` on hover.
- **Integration cards (Enterprise section):** `shadow-sm` with `hover:-translate-y-1` lift.
- **Company Brain card (central focal point):** Large soft shadow — `shadow-[0_32px_64px_-16px_rgba(5,26,73,0.12)]` light / `shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)]` dark. This is the one deliberate exception to the flat aesthetic, used to create the "center of gravity" of the page.
- **NavBar:** `backdrop-blur-md bg-background/80` glassmorphism. No drop shadow.
- **Orbit nodes (active):** `box-shadow: 0 8px 40px rgba(30,0,64,0.16)` light / `0 8px 40px rgba(91,33,182,0.28)` dark.

## Shapes

Global radius is **4px** (`rounded`). Cards use **8px** (`rounded-xl` = 12px in some sections). The single exception is the Company Brain card which uses **40px** (`rounded-[40px]`) to create a pill-like focal shape. Do not apply `rounded-[40px]` to other elements.

## Components

### Buttons

- **Primary CTA (NavBar, Hero):** `bg-white text-black rounded-lg font-bold text-sm shadow-sm hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5`
- **Form submit:** `bg-primary-vibrant dark:bg-primary-dark text-white rounded font-semibold text-sm hover:opacity-90`
- **Secondary/Cancel:** `border border-outline-variant text-on-surface-variant rounded hover:border-primary hover:text-primary`

There is no gold/yellow button in the current implementation.

### Inputs & Form

- Border: `border border-outline-variant dark:border-white/10`
- Background: `bg-white dark:bg-white/5`
- Focus: `focus:border-primary-vibrant dark:focus:border-primary-dark` (no turquoise underline)
- Text size: `text-sm`, radius: `rounded` (4px)

### Cards

Flat with 1px border (`border border-primary/5 dark:border-outline-variant-dark/20`), `rounded-xl` (12px), `backdrop-blur-md`. Solution cards: `shadow-sm hover:shadow-md`. Hover micro-interaction: `hover:-translate-y-1`.

### Label-caps Pattern

Used for eyebrow text, pillar numbers, "Company Brain" subtitle, orbit step numbers. Pattern: `text-[10px] md:text-[11px] font-bold tracking-[0.2em..0.3em] uppercase text-on-surface-variant dark:text-on-surface-variant-dark`.

### NavBar

Sticky, `top-0 z-50`, glassmorphism: `bg-background/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/5 dark:border-outline-variant-dark/20`. Logo + wordmark left, nav links center (hidden on mobile), single CTA button right.

### Wheel Carousel (How Grace-X Works)

Fixed-position wheel with 5 nodes positioned by polar offset at radius 210px. Active node: scale 1.0, opacity 1, violet border glow (`rgba(124,58,237,.35)`) and box-shadow. Adjacent nodes: scale 0.62, opacity 0.55. Far nodes: scale 0.5, opacity 0.3. Node transitions: `cubic-bezier(0.4,0,0.2,1) 0.95s`. Dashed arc arrows (`.gx-arrow-path`) briefly flash violet (`.lit` class, 900ms) on each step change. Center panel `#gx-info` fades (280ms) to show step number, title, flow direction label, and description. Prev/next buttons. Auto-advances every 5s; clicking any node resets the timer.

### Enterprise Infra Animations

Three animation layers on the Enterprise Superintelligence section SVG (`preserveAspectRatio="none"`, `z-20`):

- **Left→Center (`.infra-flow-path`):** Continuously flowing dashes on the 3 source→Grace-X paths. `stroke-dasharray: 4 10`, cycle offset `-84px`, `2.5s linear infinite`. Staggered delays: 0s / −0.67s / −1.34s. Light: `rgba(30,0,64,0.55)`, dark: `rgba(124,58,237,0.65)`.
- **Source box pulse (`.infra-activity-dot`):** 6×6px circle (top-right corner of each source card), `@keyframes infra-dot-blink` 1.8s ease-in-out, staggered 0s / −0.6s / −1.2s.
- **Center→LLMs (`.infra-llm-path`):** Sequential sweep — one 90px dash travels each path in order (top→GPT, middle→Claude, bottom→Gemini). Cycle: 9s total (3s per path, no gap). `stroke-dasharray: 90 600`. Positive delays `0s / 3s / 6s` with `animation-fill-mode: backwards` to prevent pre-delay visibility. Light: `rgba(30,0,64,0.35)`, dark: `rgba(124,58,237,0.4)`.

### CTA Inline Form

The Final CTA section has a two-state layout: button visible by default, form revealed on click via CSS `max-height` transition (`is-open` class). Form collects Nome, Cognome, Email, Messaggio. Email sending is a stub in `handleContactSubmit`. Success state replaces the form in place.

## Hover Micro-interactions

Standard pattern: `transition-transform hover:-translate-y-1` for cards and integration items. CTA buttons use `hover:-translate-y-0.5` with `hover:shadow-lg`. Icon containers in pillar section use `hover:scale-110`. All transitions use the global `transition: ... 0.3s ease` applied via `<style>`.
