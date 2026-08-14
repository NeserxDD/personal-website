# Digital Resume / Portfolio — Design Spec

**Date:** 2026-08-14  
**Framework:** Next.js 14 (App Router)  
**Design System:** bryl-minimal-design  
**Target Role:** Entry-level IT Support / Network Engineering / Software Engineering  

---

## 1. Architecture Overview

```
personal-website/
├── app/
│   ├── layout.tsx           (root layout, theme provider, global fonts)
│   ├── page.tsx             (single-page portfolio — all sections)
│   ├── globals.css          (bryl-minimal base styles)
│   ├── theme/
│   │   └── provider.tsx     (light/dark/system theme logic)
│   └── components/
│       ├── shared/
│       │   ├── header.tsx
│       │   ├── footer.tsx
│       │   ├── theme-toggle.tsx
│       │   └── section-wrapper.tsx
│       ├── layout/
│       │   └── sidebar-nav.tsx
│       ├── sections/
│       │   ├── hero.tsx
│       │   ├── about.tsx
│       │   ├── projects.tsx
│       │   ├── skills.tsx
│       │   ├── experience.tsx
│       │   ├── education.tsx
│       │   ├── certifications.tsx
│       │   ├── outside-tech.tsx
│       │   └── contact.tsx
│       └── ui/
│           ├── section-header.tsx
│           ├── project-card.tsx
│           ├── experience-item.tsx
│           ├── timeline-item.tsx
│           └── social-link.tsx
├── lib/
│   └── data/
│       ├── content.ts          (all real + placeholder data)
│       └── types.ts            (TypeScript interfaces)
├── styles/
│   └── tailwind.css            (Tailwind entry + custom utilities)
├── public/
│   ├── images/
│   │   ├── profile-main.jpg    (main profile photo — placeholder)
│   │   └── profile-hover.jpg   (hover profile photo — placeholder)
│   └── fonts/
│       ├── geist-pixel.woff2
│       └── geist-pixel-bold.woff2
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### Decision: Single Page vs. Multi-Page

**Approved approach:** Single-page portfolio with anchor-scrolling navigation. All 9 sections render on one page (`app/page.tsx`). The bryl-minimal design system specifies a fixed sidebar nav (≥1024px) with a top bar overlay menu (mobile), which maps naturally to a single-page scroll experience.

**Future enhancement:** Individual pages can be extracted later if needed for deep-linking, but the core experience is single-page.

---

## 2. Design System Mapping (bryl-minimal → Tailwind)

### Color Tokens

```js
// tailwind.config.js — darkMode: 'class'
const colors = {
  // Semantic roles
  background: isDark => isDark ? '#0c0c0f' : '#ffffff',
  ink: isDark => isDark ? '#f4f4f5' : '#0a0a0a',
  // Gray ramp
  gray: {
    50: '#fafafa', 100: '#f5f5f5', 200: '#e9e9e9',
    300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373',
    600: '#636363', 700: '#525252', 800: '#464646',
    900: '#3a3a3a', 950: '#2a2a2a',
  },
}
// Applied via CSS variables for crossfade support
```

CSS variable strategy for theme crossfade:

```css
:root {
  --color-background: 255 255 255;       /* white */
  --color-ink: 10 10 10;                /* true black */
}
.dark {
  --color-background: 12 12 15;         /* near-black w/ blue cast */
  --color-ink: 244 244 245;             /* off-white */
}
```

### Typography

| Role | Font | Loading Strategy |
|------|------|-----------------|
| Body/UI | Geist (sans) | Google Fonts, `font-display: swap` |
| Technical | Geist Mono | Google Fonts, `font-display: swap` |
| Display | Geist Pixel (Square) | Local woff2 files in `public/fonts/` |
| Long-form | Source Serif 4 | Google Fonts, `font-display: swap` |

Tailwind config:

```js
fontFamily: {
  body: ['var(--font-geist)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
  display: ['var(--font-geist-pixel)', 'var(--font-geist-mono)', 'monospace'],
  serif: ['var(--font-source-serif-4)', 'Georgia', 'serif'],
},
fontSize: {
  'ui-body': ['15px', { lineHeight: '1.6' }],
  'ui-sm': ['13px', { lineHeight: '1.6' }],
  'micro-label': ['10px', { letterSpacing: '0.05em' }],  // ~1px tracking
  'page-title': ['3rem', { lineHeight: '1' }],           // pixel font
  'h1': ['1.6rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
  'h2': ['1.3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
  'h3': ['1.1rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
},
```

### Spacing Scale

```js
spacing: {
  'section': '3.5rem',        // vertical rhythm between sections
  'half-section': '1.75rem',
  'component-gap': '0.75rem',
  'grid-gap': '0.75rem',      // small screens
  'grid-gap-lg': '1.5rem',    // ≥1024px
  'sidebar': '14rem',
  'content-max': '42rem',     // 672px reading width
  'content-max-wide': '56rem', // 896px for grids
  'card-padding': '1.25rem',
  'page-padding-mobile': '1rem',
  'page-padding-desktop': '1.5rem',
},
```

### Shadows

```js
boxShadow: {
  card: '0 8px 22px -14px hsla(0 0% 0% / 0.25)',
  'card-hover': '0 18px 36px -20px hsla(0 0% 0% / 0.40)',
  modal: '0 40px 90px -20px hsla(0 0% 0% / 0.35)',
  inset: 'inset 0 1px 0 0 hsla(0 0% 0% / 0.05)',
},
```

### Border Radius Ladder

```js
borderRadius: {
  card: '16px',     // large cards
  card-md: '12px',  // medium cards
  card-sm: '8px',   // small elements
  input: '6px',     // inputs/minimal
  full: '9999px',   // pills, badges, profile photo
},
```

### Halftone Motif

A reusable CSS pattern component:

```css
.halftone-bg {
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 9px 9px;
  opacity: 0.9;  /* light theme */
}
.dark .halftone-bg {
  opacity: 0.42; /* dark theme */
}
```

Applied via a mask gradient for soft edges:

```css
.mask-fade-bottom {
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
}
```

Limit: one halftone field per page maximum.

---

## 3. Section-by-Section Spec

### 3.1 Section Header Convention

Every content section starts with a `SectionHeader` component:

```
01 — about          (display font, gray 400, small)
About               (body font, weight 600, ink)
```

- Numbered label in Geist Pixel, 14px, uppercase, gray 400
- Section title in Geist sans, h2, ink color
- Separator: 1px gray-200 hairline below

### 3.2 Hero Section

**Content:**
- Circular profile photo (120px diameter)
- Name (page-title display font, lowercase)
- Title/role tags (mono micro-labels, gray 500)
- Brief subtitle (1-2 lines, body font)

**Profile Photo Animation (approved):**
- Circular crop with `border-radius: 9999px`
- On hover: photo changes to alternate image (main → hover)
- On hover: subtle scale up (1.05x) + shadow deepen
- Transition: 300ms ease-out (faster than card hovers for snappy feel)
- Disabled under `prefers-reduced-motion`

```tsx
// ProfilePhoto.tsx
<div className="relative w-32 h-32 mx-auto group">
  <img 
    src={photoMain} 
    alt="Profile" 
    className="w-full h-full rounded-full object-cover 
               group-hover:hidden transition-all duration-300"
  />
  <img 
    src={photoHover} 
    alt="Profile (hover)" 
    className="w-full h-full rounded-full object-cover 
               hidden group-hover:block transition-all duration-300 
               scale-105"
  />
</div>
```

### 3.3 About Section

**Content:**
- 2-3 paragraphs of bio text (placeholder)
- Status dot (pulsating, green-ish — use gray 500 since monochrome)
- "Open to opportunities" label
- Tech stack tags (pills with gray-300 border)

### 3.4 Projects Section

**Layout:** Grid (1 col mobile → 2 cols tablet → 3 cols desktop)
**Card recipe:** Hairline border, 16px radius, gray-50 fill, soft shadow

Each project card:
- Project thumbnail (aspect-ratio box, 16:9)
- Title (h3)
- Tech tags (mono micro-labels)
- Short description (2 lines)
- GitHub + Live links (text links with ↗ for external)

**Placeholder:** 3 projects:
1. "Portfolio Website" — Next.js, TypeScript, Tailwind
2. "Network Config Toolkit" — Python, Bash, YAML
3. "API Dashboard" — React, REST API, Chart.js

### 3.5 Skills Section

**Layout:** Two-column grid (technical + soft skills)

**Technical skills grouped by category:**
- Languages: HTML, CSS, JavaScript, Python, Bash
- Frameworks: React, Next.js
- Tools: Git, Docker, VS Code
- Networks: TCP/IP, DNS, VLAN, Cisco IOS basics

**Soft skills:** Communication, Problem-solving, Documentation, Customer service

Each skill rendered as a tag/pill with gray-300 border.

### 3.6 Experience Section

**Layout:** Vertical timeline (left-aligned)

Each experience item:
- Role (h3, ink)
- Company + location (gray 500, mono micro-label)
- Dates (gray 400, right-aligned on desktop)
- Bullet points (3-4 per role, concise impact format)

**Placeholder:** 3 roles (entry-level focused):
1. IT Support Intern — TechCorp Inc. (Summer 2025)
2. Help Desk Technician (Part-time) — University IT
3. Freelance Full-Stack Developer (Self-employed, 2024-2025)

### 3.7 Education Section

Each entry:
- Degree (h3)
- University name
- Dates
- Relevant coursework / GPA (optional)

**Placeholder:** 1 entry — B.S. Computer Science or related, 2025 graduation target

### 3.8 Certifications Section

**Layout:** Grid of certification cards (2 cols)

Each card:
- Certification badge image (placeholder)
- Name (h3)
- Issuing organization
- Date earned / expires
- Credential ID (mono micro-label)

**Placeholder:** 2-3 certs:
1. CompTIA Network+ (placeholder)
2. AWS Certified Cloud Practitioner (in progress)
3. FreeCodeCamp Responsive Web Design

### 3.9 Outside Tech Section

A brief, human section. **Layout:** Text block with optional hobby tags.

**Placeholder content:** "When I'm not debugging code or configuring networks, I enjoy..."

---

### 3.10 Contact Section

**Layout:** Simple stack

Content:
- Email address (click-to-copy with toast feedback)
- GitHub username (link, external ↗)
- LinkedIn (link, external ↗)
- Optional: location (city, country)

Social links use the "text link with arrow glyph" pattern from bryl-minimal:
> github.com/neserxdd ↗

Email copy interaction:
- Click email → copies to clipboard
- Brief "Copied!" toast (mono micro-label, appears then fades)

---

## 4. Navigation & Layout

### Desktop Layout (≥1024px)

```
┌─────────────────────────────────────────────────────┐
│  Sidebar (14rem, fixed)                             │
│  [logo/name]                                        │
│  • about                                            │
│  • projects                                         │
│  • skills                                           │
│  • experience                                       │
│  • education                                        │
│  • certifications                                   │
│  • outside tech                                     │
│  • contact                                          │
│  ────────────                                       │
│  [theme toggle]                                     │
├─────────────────────────────────────────────────────┤
│  Main content (896px max, centered)                 │
│  Hero → About → Projects → ...                       │
└─────────────────────────────────────────────────────┘
```

### Mobile Layout (<1024px)

```
┌─────────────────────────────────────────────┐
│  Header (sticky, hairline bottom border)    │
│  [☰ menu]  [name]    [theme toggle]        │
│                                             │
│  [Full-screen overlay menu when opened]     │
├─────────────────────────────────────────────┤
│  Main content (1rem padding)                │
│  Hero → About → Projects → ...               │
└─────────────────────────────────────────────┘
```

### Theme Toggle Component

- Icon: Sun (light) / Moon (dark) / Auto (system)
- Three-state cycling: light → dark → system
- Persists preference in `localStorage`
- Respects `prefers-color-scheme` when on "system"

### Footer

Minimal footer with:
- Copyright (mono micro-label, gray 500)
- "Built with Next.js" badge
- Optional: back-to-top link

---

## 5. Animation & Interaction Plan

### Entrance Animation

All sections fade up from 12px over 700ms, staggered 70ms apart down the page. Uses `cubic-bezier(0.16, 1, 0.3, 1)`. First element starts at 50ms.

Implementation: CSS animation with per-element `animation-delay`:

```css
.fade-in-up {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeInUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}
```

### Hover Interactions

| Element | Hover Behavior | Duration |
|---------|---------------|----------|
| Profile photo | Swap image + scale 1.05x + shadow deepen | 300ms |
| Project cards | Shadow deepen + 2px lift | 350ms |
| Links | Underline opacity 25% → 100% + arrow nudge | 200ms |
| Tags/pills | Background → gray-50 fill | 200ms |

### Reduced Motion

All animations disabled under `prefers-reduced-motion: reduce`.

---

## 6. Data Model (TypeScript)

```ts
// lib/data/types.ts

export interface ProfileData {
  name: string;
  role: string;
  subtitle: string;
  photoMain: string;
  photoHover: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  links: {
    github?: string;
    live?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  details?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateEarned: string;
  dateExpires?: string;
  credentialId?: string;
  badgeImage: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'other';
  url?: string;
  label: string;
}

export interface SiteConfig {
  profile: ProfileData;
  about: string[];
  projects: Project[];
  skills: {
    technical: Record<string, string[]>;
    soft: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  outsideTech: string;
  contact: {
    email: string;
    socialLinks: SocialLink[];
    location: string;
  };
}
```

---

## 7. Development & Deployment Workflow

### Stack

- **Framework:** Next.js 14+ (App Router, React 18)
- **Styling:** Tailwind CSS 3+
- **Type checking:** TypeScript
- **Fonts:** Geist, Geist Mono, Geist Pixel (local), Source Serif 4
- **Deployment:** Vercel (GitHub integration)
- **Git:** Commit messages follow Conventional Commits

### Setup Steps

1. `npm create next-app@latest --typescript`
2. Install Tailwind CSS
3. Configure `tailwind.config.js` with bryl-minimal tokens
4. Add font imports (`@font-face` for Geist Pixel, Google Fonts for others)
5. Create component structure
6. Populate with placeholder content
7. Connect to GitHub repo
8. Deploy on Vercel

### Git Conventions

```bash
# Branch naming
feature/section-name      # new section
feature/component-name    # new component
fix/typo-in-about         # bug fixes
docs/update-spec          # documentation

# Commit format
git commit -m "feat: add projects section with placeholder cards"
git commit -m "style: apply bryl-minimal section header to about"
git commit -m "fix: correct dark mode color token for gray-500"
```

---

## 8. Next Steps

1. ✅ Design spec written and committed
2. ⏳ Write implementation plan (writing-plans skill)
3. ⏳ Scaffold Next.js + Tailwind project
4. ⏳ Implement theme system + fonts
5. ⏳ Build components + sections
6. ⏳ Populate with placeholder content
7. ⏳ Deploy to Vercel
8. ⏳ User replaces placeholders with real content
9. ⏳ Iterate on design based on review

---

## 9. Assumptions & Notes

- **GitHub repo** `NeserxDD/personal-website` exists and is empty — we'll initialize it with the scaffolded project
- **Profile photos** will be placeholder images initially (Unsplash source blocks or solid color placeholders)
- **Certification badges** will use placeholder images or text-only cards initially
- **Geist Pixel font** needs to be downloaded from Vercel's GitHub releases and placed in `public/fonts/`
- **Single-page approach** means the sidebar/nav will use smooth anchor scrolling (`scroll-margin-top` for offset)
- All animations respect `prefers-reduced-motion`
