# MAC Industrial Services — Website

## Overview

Next.js 14 (App Router) marketing website for MAC Industrial Services. Built with TypeScript, Tailwind CSS, and zero dependencies beyond the Next.js core stack.

**Live pages:**
- `/` — Home (Hero, Stats, Services overview, Capabilities grid, Clients, CTA)
- `/services` — Full service catalog with item lists
- `/capabilities` — Areas of expertise by category + welding specs
- `/safety` — Safety & Quality program (Commitment, Care, Courage)
- `/contact` — Contact form + direct contact card

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Font | Inter (next/font/google) |
| Icons | Inline SVG (no icon lib dependency) |

---

## Setup

```bash
# Install
npm install

# Dev server
npm run dev

# Type check
npm run typecheck

# Production build
npm run build
```

---

## Project Structure

```
├── app/                     # App Router pages
│   ├── layout.tsx           # Root layout (Navbar + Footer)
│   ├── globals.css          # Global Tailwind + custom CSS
│   ├── page.tsx             # Home
│   ├── services/page.tsx
│   ├── capabilities/page.tsx
│   ├── safety/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with scroll detection + mobile menu
│   │   └── Footer.tsx       # Full footer with nav, contact, brand
│   ├── home/
│   │   ├── Hero.tsx         # Full-screen hero with geometric accents
│   │   ├── StatsBar.tsx     # Animated count-up stats (IntersectionObserver)
│   │   ├── ServicesOverview.tsx
│   │   ├── CapabilitiesGrid.tsx
│   │   ├── ClientsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Button.tsx       # Primary / outline / ghost variants
│       └── SectionHeader.tsx
│
├── lib/
│   └── data.ts              # All site content (services, clients, stats, etc.)
│
├── types/
│   └── index.ts             # Shared TypeScript interfaces
│
└── docs/
    └── README.md            # This file
```

---

## Design System

### Colors (Tailwind custom)
| Token | Hex | Usage |
|---|---|---|
| `mac-red` | `#CC1F1F` | Primary accent, CTAs, icons |
| `mac-red-dark` | `#A01818` | Hover state for red |
| `mac-dark` | `#0D0D0D` | Page background |
| `mac-gray` | `#1A1A1A` | Card / section background |
| `mac-gray-light` | `#2A2A2A` | Borders, dividers |
| `mac-steel` | `#3D3D3D` | Secondary borders |
| `mac-silver` | `#9CA3AF` | Muted labels |

### Component Classes (globals.css)
- `.btn-primary` — Red CTA button
- `.btn-outline` — White-outlined button
- `.card-dark` — Standard dark card
- `.red-accent-line` — 3px red left border accent
- `.section-container` — Max-width padded container

---

## Content Updates

All site content lives in `lib/data.ts`. No CMS required for basic updates:

- **Services** → `services[]`
- **Capabilities** → `capabilities[]`
- **Clients** → `clients[]`
- **Stats** → `stats[]`
- **Safety pillars** → `safetyPillars[]`
- **Welding specs** → `weldingSpecs[]`
- **Contact info** → `contact`

---

## Contact Form

The contact form in `app/contact/page.tsx` currently logs to state only. To wire it:

**Netlify Forms** — Add `netlify` attribute to `<form>` and a hidden `form-name` input.

**API Route** — Create `app/api/contact/route.ts` and POST to it. Example:

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  // send email via Resend, SendGrid, etc.
  return NextResponse.json({ ok: true })
}
```

---

## Adding Sanity CMS (Future)

The data layer is isolated in `lib/data.ts` which makes a Sanity drop-in straightforward:

1. `npm install next-sanity @sanity/image-url`
2. Create `lib/sanity.ts` with client config
3. Replace `lib/data.ts` static exports with GROQ `fetch()` calls
4. Add `generateStaticParams` / `revalidate` to pages as needed

---

## Deployment

**Vercel** (recommended):
```bash
vercel deploy
```

**Netlify:**
```bash
npm run build
# publish .next as output
```

---

## Aliases

```zsh
# Add to ~/.zshrc
alias mac-dev="cd ~/path/to/mac-industrial-services && npm run dev"
alias mac-build="cd ~/path/to/mac-industrial-services && npm run build && npm run typecheck"
```
