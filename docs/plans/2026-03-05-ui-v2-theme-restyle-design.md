# UI v2 Theme — Full Site Restyle Design

**Date:** 2026-03-05
**Branch:** `ui-v2-theme`
**Goal:** Restyle the entire site (homepage sections, service pages, contact modal, header, footer) to match the visual language of `/lp/v2`. All business logic, content, forms, and tracking remain intact.

---

## Design Tokens

Already established in `app/globals.css` on `ui-v2-theme`:

| Token | Value | Usage |
|---|---|---|
| `--color-v2-bg` | `#F8F4EF` | Warm cream — all section backgrounds |
| `--color-v2-surface` | `#FFFFFF` | Card surfaces |
| `--color-v2-border` | `#E8DDD2` | Dividers, light borders |
| `--color-v2-primary` | `#F43F5E` | Hot pink — buttons, accents, highlights |
| `--color-v2-secondary` | `#3B82F6` | Electric blue — tags, left-border accents |
| `--color-v2-text` | `#1A1F28` | Near-black — primary text |
| `--color-v2-muted` | `#64707C` | Muted text, secondary labels |

## Visual Patterns (from LP v2)

### Brutal Card
```
rounded-xl border-2 border-[#1A1F28] bg-white shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)]
```

### Brutal Button (primary)
```
bg-[#F43F5E] text-white shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)]
hover:shadow-none hover:translate-x-1 hover:translate-y-1
```

### Blue Badge / Tag
```
bg-[#EFF6FF] border border-[#BFDBFE] text-[#3B82F6] rounded px-2 py-1 text-xs font-bold
```

### Pink Badge / Tag
```
bg-[#FFF1F2] border border-[#FECDD3] text-[#F43F5E] rounded px-2 py-1 text-xs font-bold
```

### Left-border Accent Block
```
border-l-4 border-[#3B82F6] pl-6 text-[#4C5A67]
```

### Background Blur Orbs (subtle)
```
absolute bg-[#F43F5E]/5 blur-3xl rounded-full pointer-events-none
absolute bg-[#3B82F6]/5 blur-3xl rounded-full pointer-events-none
```

### Section Divider
```
h-px w-full bg-gradient-to-r from-transparent via-[#F43F5E]/25 to-transparent border-t border-[#E8DDD2]
```

### Form Field
```
h-11 w-full rounded-lg border border-[#DDD4C8] bg-white px-3.5 text-sm text-[#1A1F28]
placeholder:text-[#A0AAB4] focus:border-[#F43F5E] focus:ring-1 focus:ring-[#F43F5E]/30
```

---

## Scope

### Homepage Sections (`components/sections/`)
All sections: full markup rewrite. Logic/content unchanged.

| File | Current | Target |
|---|---|---|
| `Hero.tsx` | Dark spotlight bg, white text, gradient blue CTA | Cream bg, dark text, headline left + CTA card right, pink brutal button |
| `Services.tsx` | Dark gradient icon cards | White brutal-shadow cards, icon in light badge |
| `About.tsx` | `bg-[#0B1A30]` dark section | Cream bg, brutal-border photo frame, blue left-border quote |
| `Projects.tsx` | Dark card grid with colored translucent badges | White brutal-card grid, LP v2 badge style |
| `Packages.tsx` | Dark card grid | White brutal-shadow cards, highlighted card with pink border |
| `FAQ.tsx` | Likely dark, accordion | Cream bg, `#E8DDD2` dividers, pink open-item highlight |
| `GrowthPlanMagnet.tsx` | Form on dark/accent bg | White brutal-card form, same style as LP v2 form |
| `Process.tsx` | Dark step cards | Numbered white cards, brutal shadows, pink/blue connector |
| `Contact.tsx` | Dark contact section with form | Cream bg, LP v2 form card pattern |

### Service Pages
| File | Notes |
|---|---|
| `app/ads/AdsPageClient.tsx` | Uses SpotlightHero (dark) + Card components; full restyle |
| `app/web/WebPageClient.tsx` | Full restyle |
| `app/tracking/page.tsx` | Full restyle |
| `app/automation/page.tsx` | Full restyle |

### Layout & UI
| File | Notes |
|---|---|
| `components/layout/Header.tsx` | Partially done; minor polish only |
| `components/layout/Footer.tsx` | Partially done; minor polish only |
| `components/ui/contact-modal.tsx` | Update service chip colors + field styles to LP v2 |
| `components/ui/button.tsx` | Done |
| `components/ui/card.tsx` | Done |
| `components/ui/input.tsx` | Update to LP v2 field style |
| `components/ui/textarea.tsx` | Update to LP v2 field style |

---

## What Does NOT Change

- All form submit handlers and API calls (`/api/webhook/lead`, etc.)
- PostHog and HaloTrack event calls
- Zod validation schemas
- React Hook Form wiring
- All Russian text content
- Routing and page structure
- Framer Motion scroll animations (kept, adapted to light theme)
- Component props and interfaces

---

## Approach

**A — Token-first, then sections.**
Build on existing token/button/card/header work in `ui-v2-theme`. Rewrite each section's markup. Use parallel agents per section group for speed.

---

## Implementation Groups (for parallel execution)

**Group 1 — Homepage core sections**
- Hero, Services, About, Projects

**Group 2 — Homepage secondary sections**
- Packages, FAQ, Process, Contact, GrowthPlanMagnet

**Group 3 — Service pages**
- AdsPageClient, WebPageClient, tracking/page, automation/page

**Group 4 — UI primitives & layout polish**
- contact-modal, input, textarea, Header polish, Footer polish
