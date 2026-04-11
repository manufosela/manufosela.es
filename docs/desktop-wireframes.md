# Desktop wireframes — Carbon Mint redesign

**Scope:** Define how the Stitch mobile mocks scale to desktop (≥1024 px).
**Source:** `/tmp/stitch-analysis/stitch/*` mockups are mobile-first (~414 px). This document captures the desktop interpretation per ADR-005.

## Global rules

- **Container:** `max-width: 1280px`, centered, with `padding-inline: clamp(1.5rem, 4vw, 3rem)`.
- **Grid baseline:** 12 columns, `gap: 1.5rem`.
- **Breakpoints:**
  - Mobile: `< 640px` — 1 column stacks, BottomNavBar visible.
  - Tablet: `640px–1023px` — 2-col bentos, BottomNavBar still visible.
  - Desktop: `≥ 1024px` — asymmetric bentos, BottomNavBar hidden, TopAppBar expanded with horizontal nav.
  - Ultra: `≥ 1440px` — same layout, more generous lateral whitespace.
- **TopAppBar:**
  - Mobile: burger icon + logo + account icon.
  - Desktop: logo + inline nav (Home · Leadership · Tech · Contact) + language toggle + account icon, all in `.u-glass`.
- **BottomNavBar:** `display: none` on `≥ 768px`.
- **Typography scale (desktop):**
  - Display Large: `clamp(3rem, 6vw, 5.5rem)`
  - Headline Medium: `clamp(1.75rem, 3vw, 2.75rem)`
  - Body Large: `1.0625rem`

## 1. Home — Líder Arquitecto

### Desktop layout (1280 px)

```
┌─────────────────────────────────────────────────────────────────┐
│ TopAppBar (sticky, glass)                                       │
│ ▌Mánu Fosela      Home · Leadership · Tech · Contact   ES ▾ 👤▐ │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ┌────────────────────────┬──────────────────────────────────┐   │
│ │                        │ ▸ LÍDER ARQUITECTO               │   │
│ │  [ grayscale portrait ]│                                  │   │
│ │   with mint highlight  │ Mánu Fosela                      │   │
│ │                        │ Liderazgo Afectivo               │   │
│ │   (full-bleed          │ y Tecnología                     │   │
│ │    until gradient      │                                  │   │
│ │    fade to surface)    │ Building high-performance teams  │   │
│ │                        │ through people-centric           │   │
│ │                        │ engineering.                     │   │
│ │                        │                                  │   │
│ │                        │ [ EXPLORE VISION ]               │   │
│ └────────────────────────┴──────────────────────────────────┘   │
│      ◄── 55% ────┼─────────── 45% ─────────►                    │
│                                                                 │
│ ─────────── DUALIDAD ─────────── [ Human | Tech ] ────────────  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ ♥ CURRENT FOCUS                                             │ │
│ │ Human Leadership                                            │ │
│ │ "The most sophisticated piece of architecture…"             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Bento grid (asymmetric 6 col)                                   │
│ ┌──────────────────────┬──────────────┬───────────────────────┐ │
│ │ 👥 15+ YEARS         │ 📖 Book       │ ⚡ AI-Powered         │ │
│ │  leading elite       │ 'Liderazgo   │  Enthusiast           │ │
│ │  engineering teams   │  Afectivo'   │                       │ │
│ │  (col-span 4, wide)  │  (col 3)     │  (col 3)              │ │
│ └──────────────────────┴──────────────┴───────────────────────┘ │
│                                                                 │
│ Collaborations & Leadership  (logo strip, grayscale opacity-40) │
│ [ Google ] [ Microsoft ] [ IBM ] [ Sentry ] [ … ]               │
└─────────────────────────────────────────────────────────────────┘
```

### Key specs
- Hero: `grid-template-columns: 55% 45%`. Portrait fills left column, text stack in right with `padding-block: clamp(4rem, 8vh, 7rem)`.
- Bento wide item (15+ years) takes `col-span 4`; siblings take `col-span 1` each in a 6-col grid.
- Logo strip uses `.hide-scrollbar` horizontal scroll on small screens, flexible center-aligned row on desktop.

## 2. Liderazgo Afectivo

### Desktop layout

```
┌─────────────────────────────────────────────────────────────────┐
│ TopAppBar                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ┌────────────────────────────────┬──────────────────────────┐   │
│ │ ▸ LANZAMIENTO EXCLUSIVO        │                          │   │
│ │                                │    [ book mockup   ]     │   │
│ │ Liderazgo (mint gradient)      │    (aspect 4/5,          │   │
│ │ Afectivo                       │     drop-shadow,         │   │
│ │                                │     mint glow bg)        │   │
│ │ Aprende a liderar con el       │                          │   │
│ │ corazón y la mente. Una guía   │                          │   │
│ │ para la nueva era…             │                          │   │
│ │                                │                          │   │
│ │ [ Comprar Libro ] [ Ver más ]  │                          │   │
│ └────────────────────────────────┴──────────────────────────┘   │
│      ◄── 60% ─────┼────────── 40% ──────────►                   │
│                                                                 │
│ ─ People & Culture Manifesto ───────────────────────────────    │
│                                                                 │
│ "El verdadero liderazgo no reside en la jerarquía,              │
│  sino en la conexión humana. Las organizaciones no son          │
│  estructuras; son ecosistemas de confianza y afecto técnico."   │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Comunidad                         [ 500+ Miembros ]         │ │
│ │ Únete al movimiento de líderes conscientes.                 │ │
│ │                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ "La mentoría de Mánu transformó…"                       │ │ │
│ │ │ 👤 Javier Aranda · CTO TechFlow (glass testimonial)     │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ [ Unirse a la Comunidad ]                                   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────┬─────────────┬───────────────────────────────┐   │
│ │ 🖥 Tech      │ 📊 Métricas │ ✉ Contacto                    │   │
│ │  Leadership │             │                               │   │
│ │  (col 4)    │  (col 4)    │  (col 4)  — three equal bento │   │
│ └─────────────┴─────────────┴───────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Key specs
- Hero: `grid-template-columns: 60% 40%` with text left, book mockup right.
- Manifesto section gets `max-width: 65ch` centered to preserve editorial feel.
- Bottom bento uses 3 equal columns (`col-span 4` each in a 12-col grid) on desktop vs 2x2 on mobile.

## 3. Tech Hub

### Desktop layout

```
┌─────────────────────────────────────────────────────────────────┐
│ TopAppBar                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ● System.Engine.Core                                            │
│                                                                 │
│ Tech Hub                                                        │
│ High-performance engineering, systems architecture,             │
│ and technical leadership insights.                              │
│                                                                 │
│ ── Engineering Pulse ────── SOURCE: GITHUB_API ──                │
│ ┌────────────────────────────────────┬────────────┬────────────┐│
│ │ ▦ Global Contributions             │ ★  1.4k    │ 🌳 128     ││
│ │  2,842 COMMITS / YR                │  Stars     │  Repos     ││
│ │  [■■■■■■ Rust 60%]                 │            │            ││
│ │  [■■ TS 25% ][ Go 15%]             │ (col 3)    │ (col 3)    ││
│ │  (col 6, wide)                     │            │            ││
│ └────────────────────────────────────┴────────────┴────────────┘│
│                                                                 │
│ Featured Repos                                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ ▦ quantum-scheduler     Distributed systems orchestrator →  │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ 🔒 vault-guard-pro      Zero-trust auth middleware       →  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ── Engineering Insights ──────────────────── View All →         │
│ ┌──────────────────────────┬──────────────────────────────────┐ │
│ │                          │ STRATEGY · 8 MIN                 │ │
│ │  [ hero image, grayscale]│ The Future of AI in              │ │
│ │   (aspect 16/10)         │ Software Teams                   │ │
│ │                          │ How generative agents are        │ │
│ │                          │ shifting the role of the         │ │
│ │                          │ Senior Engineer…                 │ │
│ └──────────────────────────┴──────────────────────────────────┘ │
│                                                                 │
│ ┌─────┬────────────────────────────────────────────────────┐    │
│ │[img]│ TECHNICAL DEPTH · Scaling Beyond Microservices…    │    │
│ └─────┴────────────────────────────────────────────────────┘    │
│                                                                 │
│ ── Talks & Media ──                                             │
│ (grid 2 col desktop)                                            │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Newsletter CTA — Sync with the Hub.   (full primary mint)   │ │
│ │ [ email@address.com            ] [ → ]                      │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Key specs
- Tech grid bg pattern (`radial-gradient dots`) applies to the whole `main`.
- Blog hero article: `grid-template-columns: 50% 50%` with image left, text right.
- Secondary articles: horizontal cards, `120px` square thumb + flexible text.
- Newsletter CTA: full bleed of container, mint background, white-on-mint text.

## 4. Trayectoria & Contacto

### Desktop layout

```
┌─────────────────────────────────────────────────────────────────┐
│ TopAppBar                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PORTFOLIO & NETWORK                                            │
│                                                                 │
│  Trayectoria                                                    │
│  ────── (mint bar 3rem wide)                                    │
│                                                                 │
│  Impact Resume                                                  │
│                                                                 │
│  ●─── GLOBAL SCALE-UP                                           │
│  │    Scaled team from 10 to 100+ engineers                     │
│  │    Orchestrated massive expansion for a Fintech unicorn…     │
│  │                                                              │
│  ●─── CULTURE ARCHITECTURE                                      │
│  │    Transformed engineering culture at Fortune 500            │
│  │    Shifted traditional "output-focused" organization…        │
│  │                                                              │
│  ●─── TECHNICAL STRATEGY                                        │
│       Modernized legacy infrastructure for high availability    │
│       Led the migration from monolith to microservices…         │
│                                                                 │
│ ┌────────────────────────────┬────────────────────────────────┐ │
│ │  Get in touch              │   GITHUB       LINKEDIN        │ │
│ │  Strategic mentorship and  │   TWITTER/X    MEDIUM          │ │
│ │  technical advisory…       │                                │ │
│ │                            │   (2×2 social grid, glass      │ │
│ │  NAME     [ Your full… ]   │    cards)                      │ │
│ │  EMAIL    [ name@com.. ]   │                                │ │
│ │  INQUIRY  [ Mentorship▾]   │                                │ │
│ │  MESSAGE  [              ] │                                │ │
│ │           [              ] │                                │ │
│ │                            │                                │ │
│ │         [ SEND MESSAGE ]   │                                │ │
│ └────────────────────────────┴────────────────────────────────┘ │
│        ◄── 60% ───────┼────────── 40% ────────►                 │
└─────────────────────────────────────────────────────────────────┘
```

### Key specs
- Timeline `.impact-resume`: single column on mobile, same on desktop but centered `max-width: 56rem` for editorial rhythm.
- Contact + social layout: `grid-template-columns: 60% 40%` on desktop, stacked on mobile.
- Form inputs use `.u-ghost-border` + active state with `.u-ghost-border--active` for focus.

## Open decisions (to validate with Mánu)

- [ ] Ultra-wide (`≥1920px`) — keep container 1280 or grow to 1440?
- [ ] Desktop menu burger vs inline nav — always inline on `≥1024px`?
- [ ] Dualidad switch: client-side JS toggle or separate sections fading in?
- [ ] Logo strip: infinite scroll animation or static flex?
- [ ] Book mockup asset — do we have a proper high-res mockup or do we render the current book cover in a CSS frame?
