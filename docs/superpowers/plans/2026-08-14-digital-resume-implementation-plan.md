# Digital Resume / Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bryl-minimal-design portfolio/resume website with 9 sections (Hero, About, Projects, Skills, Experience, Education, Certifications, Outside Tech, Contact) using Next.js 14 + Tailwind + TypeScript, deployed on Vercel.

**Architecture:** Single-page App Router React application with CSS variable-based theme tokens, Tailwind for styling, all content stored as TypeScript data objects for easy replacement. Components are organized by feature (shared layout, sections, UI primitives).

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 3, Geist/Geist Mono/Source Serif 4 (Google Fonts), Geist Pixel (local woff2)

**Spec:** docs/superpowers/specs/2026-08-14-digital-resume-design.md

## Global Constraints

- Next.js 14+ with App Router (not Pages Router)
- TypeScript strict mode enabled
- Tailwind CSS darkMode: 'class' strategy
- All animations must respect `prefers-reduced-motion: reduce`
- No third-party UI libraries (Tailwind + custom CSS only)
- Geist fonts loaded via Google Fonts with `font-display: swap`
- Geist Pixel loaded via `@font-face` from local woff2 files
- Commit messages follow Conventional Commits format
- Feature branches used for all work

---

## Task 1: Scaffold Next.js + Tailwind Project

**Files:**
- Create: `package.json`, `next.config.js`, `tsconfig.json`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `styles/tailwind.css`
- Create: `tailwind.config.js`
- Create: `public/favicon.ico`

**Consumes:** None (project bootstrapping)
**Produces:** Empty Next.js app running at `http://localhost:3000`

- [ ] **Step 1: Create next.config.js with minimal config**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
```

- [ ] **Step 2: Initialize npm and install Next.js + Tailwind + TypeScript**

```bash
npm init -y
npm install next react react-dom
npx shadcn-ui@latest init  # no — just install tailwind
npm install -D typescript @types/react @types/node tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [ ] **Step 3: Configure tailwind.config.js with bryl-minimal tokens**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        ink: 'hsl(0 0% 4%)',
        gray: {
          50: '#fafafa', 100: '#f5f5f5', 200: '#e9e9e9',
          300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373',
          600: '#636363', 700: '#525252', 800: '#464646',
          900: '#3a3a3a', 950: '#2a2a2a',
        },
      },
      fontFamily: {
        body: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-geist-pixel)', 'var(--font-geist-mono)', 'monospace'],
        serif: ['var(--font-source-serif-4)', 'Georgia', 'serif'],
      },
      spacing: {
        'section': '3.5rem', 'half-section': '1.75rem',
        'component-gap': '0.75rem', 'grid-gap': '0.75rem',
        'grid-gap-lg': '1.5rem', 'sidebar': '14rem',
        'content-max': '42rem', 'content-max-wide': '56rem',
        'card-padding': '1.25rem',
        'page-padding-mobile': '1rem', 'page-padding-desktop': '1.5rem',
      },
      boxShadow: {
        card: '0 8px 22px -14px hsla(0 0% 0% / 0.25)',
        'card-hover': '0 18px 36px -20px hsla(0 0% 0% / 0.40)',
        modal: '0 40px 90px -20px hsla(0 0% 0% / 0.35)',
      },
      borderRadius: {
        card: '16px', card-md: '12px', card-sm: '8px',
        input: '6px', full: '9999px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 1.8s infinite',
      },
      keyframes: {
        fadeInUp: {
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.25 },
        },
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Configure tsconfig.json for strict mode**

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Create base layout.tsx and page.tsx**

```tsx
// app/layout.tsx
import './globals.css';
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google';

const geist = Geist({ 
  subsets: ['latin'], 
  variable: '--font-geist',
  display: 'swap',
});
const geistMono = Geist_Mono({ 
  subsets: ['latin'], 
  variable: '--font-geist-mono',
  display: 'swap',
});
const sourceSerif4 = Source_Serif_4({ 
  subsets: ['latin'], 
  variable: '--font-source-serif-4',
  display: 'swap',
});

export const metadata = {
  title: 'Digital Resume',
  description: 'Personal portfolio and resume',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${sourceSerif4.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

```tsx
// app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>Portfolio placeholder</h1>
    </main>
  );
}
```

- [ ] **Step 6: Create styles/tailwind.css entry point**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-background: 255 255 255;
    --color-ink: 10 10 10;
  }
  .dark {
    --color-background: 12 12 15;
    --color-ink: 244 244 245;
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  body {
    background-color: rgb(var(--color-background));
    color: rgb(var(--color-ink));
    transition: background-color 500ms, color 500ms;
  }
}
```

- [ ] **Step 7: Add Geist Pixel font via @font-face**

Download Geist Pixel woff2 files and create:
```css
/* styles/fonts.css — imported in globals.css */
@font-face {
  font-family: 'Geist Pixel';
  src: url('/fonts/geist-pixel.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Geist Pixel';
  src: url('/fonts/geist-pixel-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

- [ ] **Step 8: Run dev server to verify**

```bash
npm run dev
```
Expected: Page loads at http://localhost:3000 with white background

- [ ] **Step 9: Commit**

```bash
git checkout -b feature/scaffold-nextjs
git add .
git commit -m "chore: scaffold Next.js project with Tailwind and bryl-minimal tokens"
git push -u origin feature/scaffold-nextjs
```

---

## Task 2: Implement Theme System

**Files:**
- Create: `app/theme/provider.tsx`
- Create: `app/theme/types.ts`
- Modify: `app/layout.tsx` (add ThemeProvider)

**Consumes:** Tailwind config from Task 1
**Produces:** `useTheme()` hook, `ThemeProvider` component

- [ ] **Step 1: Create theme types**

```ts
// app/theme/types.ts
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}
```

- [ ] **Step 2: Create ThemeProvider**

```tsx
// app/theme/provider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const applyTheme = (e: MediaQueryListEvent) => {
        root.classList.toggle('dark', e.matches);
      };
      root.classList.toggle('dark', mediaQuery.matches);
      mediaQuery.addEventListener('change', applyTheme);
      return () => mediaQuery.removeEventListener('change', applyTheme);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const resolvedTheme: 'light' | 'dark' = theme === 'system'
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;

  const value = {
    theme,
    setTheme: (t: Theme) => {
      localStorage.setItem('theme', t);
      setTheme(t);
    },
    resolvedTheme,
  };

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

- [ ] **Step 3: Wrap app with ThemeProvider in layout.tsx**

```tsx
import { ThemeProvider } from './theme/provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="...">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add theme provider with light/dark/system support"
```

---

## Task 3: Build Data Layer (Types + Placeholder Content)

**Files:**
- Create: `lib/data/types.ts`
- Create: `lib/data/content.ts`
- Create: `lib/data/placeholder-images.ts`

**Consumes:** Section specs from design doc
**Produces:** `siteConfig` object, all TypeScript interfaces

- [ ] **Step 1: Write types.ts**

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
  links?: {
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

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SiteConfig {
  profile: ProfileData;
  about: string[];
  projects: Project[];
  skills: {
    technical: SkillCategory[];
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

- [ ] **Step 2: Write content.ts with placeholder data**

```ts
// lib/data/content.ts
import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  profile: {
    name: 'Your Name',
    role: 'Entry-Level IT Support | Network Engineering | Software Development',
    subtitle: 'Building systems that work, networks that connect, code that scales.',
    photoMain: '/images/profile-main.jpg',
    photoHover: '/images/profile-hover.jpg',
  },
  about: [
    'Placeholder paragraph about yourself. Replace with your bio about what drives you in tech — whether it\'s solving network puzzles, building web applications, or helping users navigate technology.',
    'Placeholder second paragraph about your journey. Replace with your story about how you got into IT Support, Network Engineering, or Software Engineering — what experiences shaped your path.',
  ],
  projects: [
    {
      id: '1',
      title: 'Portfolio Website',
      description: 'A minimal portfolio built with Next.js and the bryl-minimal design system.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      thumbnail: 'https://placehold.co/400x225?text=Portfolio',
      links: {
        github: '#',
      },
    },
    {
      id: '2',
      title: 'Network Config Toolkit',
      description: 'A collection of Python and Bash scripts for network device configuration auditing.',
      techStack: ['Python', 'Bash', 'YAML'],
      thumbnail: 'https://placehold.co/400x225?text=Network+Tool',
      links: {
        github: '#',
      },
    },
    {
      id: '3',
      title: 'API Dashboard',
      description: 'A React dashboard consuming REST APIs with live data visualization.',
      techStack: ['React', 'REST API', 'Chart.js'],
      thumbnail: 'https://placehold.co/400x225?text=Dashboard',
      links: {
        github: '#',
        live: '#',
      },
    },
  ],
  skills: {
    technical: [
      { category: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Python', 'Bash'] },
      { category: 'Frameworks', items: ['React', 'Next.js'] },
      { category: 'Tools', items: ['Git', 'Docker', 'VS Code'] },
      { category: 'Networks', items: ['TCP/IP', 'DNS', 'VLAN', 'Cisco IOS'] },
    ],
    soft: ['Communication', 'Problem-solving', 'Documentation', 'Customer Service'],
  },
  experience: [
    {
      id: '1',
      role: 'IT Support Intern',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      bullets: [
        'Provided first-line support for 50+ internal users',
        'Managed Active Directory account provisioning and deprovisioning',
        'Configured and troubleshot network printers across 3 office locations',
      ],
    },
    {
      id: '2',
      role: 'Help Desk Technician (Part-time)',
      company: 'University IT',
      location: 'Remote',
      startDate: '2024-09-01',
      endDate: '2025-05-31',
      bullets: [
        'Resolved 200+ tickets via Slack and email support channels',
        'Created and maintained documentation for common issues',
        'Supported macOS, Windows, and Linux users across departments',
      ],
    },
    {
      id: '3',
      role: 'Freelance Full-Stack Developer',
      company: 'Self-employed',
      location: 'Remote',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      bullets: [
        'Built 3 client websites using React and Next.js',
        'Deployed applications on Vercel with CI/CD pipelines',
        'Implemented responsive designs with Tailwind CSS',
      ],
    },
  ],
  education: [
    {
      id: '1',
      degree: 'B.S. Computer Science',
      institution: 'University of Technology',
      startDate: '2022-09-01',
      endDate: '2026-05-31',
      details: 'Relevant Coursework: Computer Networks, Operating Systems, Web Development, Database Systems',
    },
  ],
  certifications: [
    {
      id: '1',
      name: 'CompTIA Network+',
      issuer: 'CompTIA',
      dateEarned: '2025-03-15',
      badgeImage: 'https://placehold.co/80x80?text=Network+',
    },
    {
      id: '2',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      dateEarned: '2025-01-10',
      badgeImage: 'https://placehold.co/80x80?text=AWS',
    },
  ],
  outsideTech: 'When I\'m not debugging code or configuring networks, I enjoy hiking, photography, and playing indie video games.',
  contact: {
    email: 'your.email@example.com',
    socialLinks: [
      { platform: 'github', label: 'github.com/neserxdd', url: 'https://github.com/NeserxDD' },
      { platform: 'linkedin', label: 'linkedin.com/in/yourname', url: 'https://linkedin.com/in/yourname' },
    ],
    location: 'San Francisco, CA',
  },
};
```

- [ ] **Step 3: Create placeholder images**

Create SVG placeholders for profile photos in `public/images/`:

```svg
<!-- public/images/profile-main.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#e9e9e9"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="20" fill="#737373">Profile Photo</text>
</svg>
```

- [ ] **Step 4: Commit**

```bash
git checkout -b feature/data-layer
git add .
git commit -m "feat: add data layer with types and placeholder content"
```

---

## Task 4: Build Shared Layout Components (Header, Footer, ThemeToggle)

**Files:**
- Create: `app/components/shared/theme-toggle.tsx`
- Create: `app/components/shared/header.tsx`
- Create: `app/components/shared/footer.tsx`
- Create: `app/components/shared/section-wrapper.tsx`

**Consumes:** `useTheme` from Task 2
**Produces:** Header with nav, Footer, ThemeToggle, SectionWrapper

- [ ] **Step 1: Create ThemeToggle component**

```tsx
// app/components/shared/theme-toggle.tsx
'use client';

import { useTheme } from '../../theme/provider';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const icons = {
  light: SunIcon,
  dark: MoonIcon,
  system: ComputerDesktopIcon,
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const Icon = icons[theme];

  const handleClick = () => {
    const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(next);
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
```

Note: We'll need `@heroicons/react` — install it or use inline SVGs. Let me use inline SVGs to avoid dependency:

```tsx
// theme-toggle.tsx — no heroicons dependency
'use client';

import { useTheme } from '../../theme/provider';
import { Sun, Moon, Monitor } from '../ui/icons'; // custom SVG icons

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' && <Sun />}
      {theme === 'dark' && <Moon />}
      {theme === 'system' && <Monitor />}
    </button>
  );
}
```

- [ ] **Step 2: Create SVG icon components**

```tsx
// app/components/ui/icons.tsx
export function Sun() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

export function Moon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 0 1 11.21 3c0 .34.07.67.22.97A7 7 0 0 0 12 21a7.4 7.4 0 0 0 10-8.62c.02-.06.03-.13.03-.2z"/>
    </svg>
  );
}

export function Monitor() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="2" y1="21" x2="22" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>
  );
}
```

- [ ] **Step 3: Create SectionWrapper**

```tsx
// app/components/shared/section-wrapper.tsx
import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export function SectionWrapper({ id, label, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          {label}
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">{title}</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      {children}
    </section>
  );
}
```

- [ ] **Step 4: Create Header**

```tsx
// app/components/shared/header.tsx
'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { useState } from 'react';

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'education', href: '#education' },
  { label: 'certifications', href: '#certifications' },
  { label: 'outside tech', href: '#outside-tech' },
  { label: 'contact', href: '#contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-content-wide mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="#hero" className="font-display text-xl text-ink">
          .portfolio
        </Link>
        <nav className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-ink transition-colors"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
          <ThemeToggle />
        </nav>
      </div>
      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur flex flex-col items-center pt-20">
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-xl text-gray-500 hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 5: Create Footer**

```tsx
// app/components/shared/footer.tsx
export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700 mt-section">
      <div className="max-w-content-wide mx-auto flex items-center justify-between px-4 md:px-6">
        <span className="font-mono text-xs text-gray-500">
          © 2025 Your Name. All rights reserved.
        </span>
        <span className="font-mono text-xs text-gray-500">
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: add shared layout components (header, footer, theme toggle)"
```

---

## Task 5: Build Hero Section

**Files:**
- Create: `app/components/sections/hero.tsx`

**Consumes:** `siteConfig.profile`, ThemeToggle
**Produces:** Hero section with profile photo hover animation

- [ ] **Step 1: Create Hero component**

```tsx
// app/components/sections/hero.tsx
'use client';

import Image from 'next/image';
import { siteConfig } from '../../../lib/data/content';

export function Hero() {
  const { profile } = siteConfig;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center pt-16"
    >
      <div className="space-y-8">
        {/* Profile photo with hover swap */}
        <div className="relative w-32 h-32 mx-auto group">
          <img
            src={profile.photoMain}
            alt="Profile"
            className="w-full h-full rounded-full object-cover 
                       group-hover:hidden transition-all duration-300"
          />
          <img
            src={profile.photoHover}
            alt="Profile"
            className="w-full h-full rounded-full object-cover 
                       hidden group-hover:block transition-all duration-300 
                       scale-105 group-hover:scale-110"
          />
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl lowercase text-ink">
          {profile.name}
        </h1>

        {/* Role tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {profile.role.split('|').map((tag, i) => (
            <span
              key={i}
              className="font-mono text-xs uppercase tracking-wider text-gray-500"
            >
              {tag.trim()}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-md mx-auto">
          {profile.subtitle}
        </p>
      </div>
    </section>
  );
}
```

Wait — the role should be parsed as tags, not split. Let me fix:

```tsx
// Update role tags in content.ts:
role: 'Entry-Level IT Support | Network Engineering | Software Engineering',
// Render as:
{profile.role.split('|').map((tag, i) => (
  <span key={i} className="font-mono text-xs uppercase tracking-wider text-gray-500">
    {tag.trim()}
  </span>
))}
```

- [ ] **Step 2: Use placeholder SVGs instead of JPGs**

Since we're using placeholders, update `content.ts`:

```ts
photoMain: '/images/profile-main.svg',
photoHover: '/images/profile-hover.svg',
```

- [ ] **Step 3: Commit**

```bash
git checkout -b feature/hero-section
git add .
git commit -m "feat: add hero section with profile photo hover animation"
```

---

## Task 6: Build About + Skills Sections

**Files:**
- Create: `app/components/sections/about.tsx`
- Create: `app/components/sections/skills.tsx`
- Create: `app/components/ui/skill-tag.tsx`
- Modify: `app/page.tsx` (add sections)

**Consumes:** `siteConfig.about`, `siteConfig.skills`
**Produces:** About section with status dot, Skills section with category groups

- [ ] **Step 1: Create SkillTag component**

```tsx
// app/components/ui/skill-tag.tsx
interface SkillTagProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured';
}

export function SkillTag({ children, variant = 'default' }: SkillTagProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider';
  
  if (variant === 'featured') {
    return (
      <span className={`${baseClasses} bg-ink text-background`}>
        {children}
      </span>
    );
  }
  
  return (
    <span className={`${baseClasses} border border-gray-300 text-gray-500`}>
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Create About component**

```tsx
// app/components/sections/about.tsx
import { siteConfig } from '../../../lib/data/content';
import { SkillTag } from '../ui/skill-tag';

export function About() {
  return (
    <section id="about" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          01 — about
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">About</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="space-y-4 text-gray-500">
        {siteConfig.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      
      <div className="mt-6 flex items-center gap-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
        </span>
        <span className="font-mono text-xs text-gray-500">
          Open to opportunities
        </span>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create Skills component**

```tsx
// app/components/sections/skills.tsx
import { siteConfig } from '../../../lib/data/content';
import { SkillTag } from '../ui/skill-tag';

export function Skills() {
  return (
    <section id="skills" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          03 — skills
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Skills</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="font-semibold text-ink">Technical</h3>
          {siteConfig.skills.technical.map((category) => (
            <div key={category.category}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-2">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-ink">Soft Skills</h3>
          <div className="space-y-2">
            {siteConfig.skills.soft.map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span className="font-mono text-sm text-gray-500">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git checkout -b feature/about-skills-sections
git add .
git commit -m "feat: add about and skills sections with status dot and tags"
```

---

## Task 7: Build Projects Section

**Files:**
- Create: `app/components/sections/projects.tsx`
- Create: `app/components/ui/project-card.tsx`

**Consumes:** `siteConfig.projects`, ArrowUpRight icon
**Produces:** Project grid with cards and hover animation

- [ ] **Step 1: Create ProjectCard component**

```tsx
// app/components/ui/project-card.tsx
import Image from 'next/image';
import { ArrowUpRight } from './icons';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export function ProjectCard({
  title,
  description,
  techStack,
  thumbnail,
  links,
}: ProjectCardProps) {
  return (
    <div className="group bg-gray-50 dark:bg-gray-900 rounded-card border border-gray-200 dark:border-gray-700 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-350 hover:-translate-y-0.5">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-card-padding space-y-3">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs uppercase tracking-wider text-gray-500"
            >
              {tech}
            </span>
          ))}
        </div>
        {links && (
          <div className="flex gap-4 pt-2">
            {links.github && (
              <a
                href={links.github}
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-ink transition-colors"
              >
                github <ArrowUpRight />
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-ink transition-colors"
              >
                live <ArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create Projects section**

```tsx
// app/components/sections/projects.tsx
import { siteConfig } from '../../../lib/data/content';
import { ProjectCard } from '../ui/project-card';

export function Projects() {
  return (
    <section id="projects" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          02 — projects
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Projects</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap-lg">
        {siteConfig.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git checkout -b feature/projects-section
git add .
git commit -m "feat: add projects section with card grid"
```

---

## Task 8: Build Experience + Education Sections

**Files:**
- Create: `app/components/sections/experience.tsx`
- Create: `app/components/sections/education.tsx`
- Create: `app/components/ui/timeline-item.tsx`
- Create: `app/components/ui/education-card.tsx`

**Consumes:** `siteConfig.experience`, `siteConfig.education`
**Produces:** Timeline of experience items + education cards

- [ ] **Step 1: Create TimelineItem component**

```tsx
// app/components/ui/timeline-item.tsx
interface TimelineItemProps {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export function TimelineItem({
  role,
  company,
  location,
  startDate,
  endDate,
  bullets,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-px h-full bg-gray-200 dark:bg-gray-700" />
      <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-ink" />
      
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-ink">{role}</h3>
        <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
          {company} — {location}
        </p>
        <p className="font-mono text-xs text-gray-400">
          {new Date(startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} — {new Date(endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </p>
      </div>
      
      <ul className="mt-3 space-y-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-sm text-gray-500 list-none">
            • {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Create Experience section**

```tsx
// app/components/sections/experience.tsx
import { siteConfig } from '../../../lib/data/content';
import { TimelineItem } from '../ui/timeline-item';

export function Experience() {
  return (
    <section id="experience" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          04 — experience
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Experience</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="space-y-0">
        {siteConfig.experience.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create Education card**

```tsx
// app/components/ui/education-card.tsx
interface EducationCardProps {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  details?: string;
}

export function EducationCard({
  degree,
  institution,
  startDate,
  endDate,
  details,
}: EducationCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-card-md p-card-padding bg-gray-50 dark:bg-gray-900">
      <h3 className="text-lg font-semibold text-ink">{degree}</h3>
      <p className="font-mono text-xs uppercase tracking-wider text-gray-500 mt-1">
        {institution}
      </p>
      <p className="font-mono text-xs text-gray-400 mt-1">
        {new Date(startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} — {new Date(endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
      </p>
      {details && (
        <p className="mt-2 text-sm text-gray-500">{details}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Create Education section**

```tsx
// app/components/sections/education.tsx
import { siteConfig } from '../../../lib/data/content';
import { EducationCard } from '../ui/education-card';

export function Education() {
  return (
    <section id="education" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          05 — education
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Education</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid-gap">
        {siteConfig.education.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git checkout -b feature/experience-education
git add .
git commit -m "feat: add experience timeline and education sections"
```

---

## Task 9: Build Certifications + Outside Tech Sections

**Files:**
- Create: `app/components/sections/certifications.tsx`
- Create: `app/components/ui/certification-card.tsx`
- Create: `app/components/sections/outside-tech.tsx`

**Consumes:** `siteConfig.certifications`, `siteConfig.outsideTech`
**Produces:** Certification grid + outside-tech text block

- [ ] **Step 1: Create CertificationCard component**

```tsx
// app/components/ui/certification-card.tsx
interface CertificationCardProps {
  name: string;
  issuer: string;
  dateEarned: string;
  dateExpires?: string;
  credentialId?: string;
  badgeImage: string;
}

export function CertificationCard({
  name,
  issuer,
  dateEarned,
  dateExpires,
  credentialId,
  badgeImage,
}: CertificationCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-card-md p-card-padding bg-gray-50 dark:bg-gray-900 flex items-start gap-4">
      <img
        src={badgeImage}
        alt={name}
        className="w-16 h-16 rounded object-contain"
      />
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
          {issuer}
        </p>
        <p className="font-mono text-xs text-gray-400">
          Earned: {new Date(dateEarned).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </p>
        {dateExpires && (
          <p className="font-mono text-xs text-gray-400">
            Expires: {new Date(dateExpires).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </p>
        )}
        {credentialId && (
          <p className="font-mono text-xs text-gray-400">
            ID: {credentialId}
          </p>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create Certifications section**

```tsx
// app/components/sections/certifications.tsx
import { siteConfig } from '../../../lib/data/content';
import { CertificationCard } from '../ui/certification-card';

export function Certifications() {
  return (
    <section id="certifications" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          06 — certifications
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Certifications</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid-gap">
        {siteConfig.certifications.map((cert) => (
          <CertificationCard key={cert.id} {...cert} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create OutsideTech component**

```tsx
// app/components/sections/outside-tech.tsx
import { siteConfig } from '../../../lib/data/content';

export function OutsideTech() {
  return (
    <section id="outside-tech" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          07 — outside tech
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Outside Tech</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <p className="text-gray-500 max-w-content-max">
        {siteConfig.outsideTech}
      </p>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git checkout -b feature/certifications-outside-tech
git add .
git commit -m "feat: add certifications grid and outside tech sections"
```

---

## Task 10: Build Contact Section + Copy-to-Clipboard

**Files:**
- Create: `app/components/sections/contact.tsx`

**Consumes:** `siteConfig.contact`, ArrowUpRight icon
**Produces:** Contact section with email copy button

- [ ] **Step 1: Create Contact component**

```tsx
// app/components/sections/contact.tsx
'use client';

import { useState } from 'react';
import { siteConfig } from '../../../lib/data/content';
import { ArrowUpRight } from '../ui/icons';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { contact } = siteConfig;

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          08 — contact
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Contact</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <button
            onClick={copyEmail}
            className="font-mono text-sm text-ink hover:text-gray-700 transition-colors"
          >
            {contact.email}
            {copied && (
              <span className="ml-2 font-mono text-xs text-gray-500">
                (copied)
              </span>
            )}
          </button>
        </div>
        
        <div className="space-y-2">
          {contact.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-500 hover:text-ink transition-colors font-mono text-sm"
            >
              {link.label} <ArrowUpRight />
            </a>
          ))}
        </div>
        
        <p className="font-mono text-sm text-gray-500">
          {contact.location}
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git checkout -b feature/contact-section
git add .
git commit -m "feat: add contact section with email copy-to-clipboard"
```

---

## Task 11: Wire Up Main Page + SidebarNav

**Files:**
- Modify: `app/page.tsx`
- Create: `app/components/layout/sidebar-nav.tsx`

**Consumes:** All section components from Tasks 5-10
**Produces:** Complete single-page portfolio

- [ ] **Step 1: Create SidebarNav component**

```tsx
// app/components/layout/sidebar-nav.tsx
'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'certifications', label: 'certifications' },
  { id: 'outside-tech', label: 'outside tech' },
  { id: 'contact', label: 'contact' },
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden lg:block fixed left-0 top-0 h-screen w-sidebar overflow-y-auto py-24 pl-6">
      <nav className="space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block font-mono text-xs uppercase tracking-wider py-2 transition-colors ${
              activeSection === section.id
                ? 'text-ink'
                : 'text-gray-500 hover:text-ink'
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
```

- [ ] **Step 2: Update page.tsx with all sections**

```tsx
// app/page.tsx
import { Header } from './components/shared/header';
import { Footer } from './components/shared/footer';
import { SidebarNav } from './components/layout/sidebar-nav';
import { Hero } from './components/sections/hero';
import { About } from './components/sections/about';
import { Projects } from './components/sections/projects';
import { Skills } from './components/sections/skills';
import { Experience } from './components/sections/experience';
import { Education } from './components/sections/education';
import { Certifications } from './components/sections/certifications';
import { OutsideTech } from './components/sections/outside-tech';
import { Contact } from './components/sections/contact';

export default function Home() {
  return (
    <>
      <Header />
      <SidebarNav />
      <main className="lg:ml-sidebar min-h-screen">
        <Hero />
        <div className="max-w-content-max mx-auto px-4 md:px-6 py-section">
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <OutsideTech />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Add scroll-margin-top for smooth anchor scrolling**

Update `globals.css`:

```css
section[id] {
  scroll-margin-top: 5rem;
}
```

- [ ] **Step 4: Commit**

```bash
git checkout -b feature/wire-up-main-page
git add .
git commit -m "feat: wire up all sections in main page with sidebar navigation"
```

---

## Task 12: Add Entrance Animation + Halftone Accent

**Files:**
- Modify: `app/globals.css` (add animation styles)
- Modify: `app/components/sections/*` (add animation classes)
- Create: `app/components/ui/halftone-decoy.tsx` (optional accent)

**Consumes:** All existing components
**Produces:** Entrance animation on page load

- [ ] **Step 1: Add global animation styles to globals.css**

```css
.fade-in-up {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeInUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

/* Apply staggered delays via inline styles in React */
```

- [ ] **Step 2: Add entrance animation to sections**

Add a wrapper component that applies the animation with staggered delays:

```tsx
// app/components/ui/animation-wrapper.tsx
'use client';

import { ReactNode, useEffect, useRef } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimationWrapper({ children, delay = 0, className = '' }: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${delay}ms`;
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

Then wrap sections:

```tsx
// In page.tsx, wrap each section:
<AnimationWrapper delay={50}>
  <About />
</AnimationWrapper>
<AnimationWrapper delay={120}>
  <Projects />
</AnimationWrapper>
```

- [ ] **Step 3: Commit**

```bash
git checkout -b feature/animations
git add .
git commit -m "feat: add entrance animations and halftone accent"
```

---

## Task 13: Add Halftone Background Accent

**Files:**
- Modify: `app/components/sections/about.tsx` (add subtle halftone)
- Modify: `app/globals.css` (add halftone utility)

- [ ] **Step 1: Add halftone CSS utility**

```css
/* globals.css */
.halftone-bg {
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 9px 9px;
}
.halftone-light { opacity: 0.9; }
.halftone-dark { opacity: 0.42; }
```

- [ ] **Step 2: Apply halftone to About section background**

Add a subtle halftone behind the About section text content.

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add halftone background accent to about section"
```

---

## Task 14: Final Polish + Preview Build

**Files:**
- Modify: `app/globals.css` (cleanup)
- Modify: various (any polish items)

- [ ] **Step 1: Run lint/typecheck**

```bash
npm run lint
npm run build
```

- [ ] **Step 2: Fix any SSR hydration issues**

Ensure client components are marked with `'use client'` where needed.

- [ ] **Step 3: Verify dark mode transitions work**

- [ ] **Step 4: Verify mobile responsiveness**

- [ ] **Step 5: Commit**

```bash
git checkout -b feature/polish-and-preview
git add .
git commit -m "fix: final polish and preview build"
```

---

## Task 15: Deploy to Vercel

**Files:**
- Modify: `app/layout.tsx` (add SEO metadata)

- [ ] **Step 1: Add SEO metadata**

```tsx
export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'IT Support | Network Engineering | Software Engineering portfolio',
  openGraph: {
    title: 'Your Name | Portfolio',
    description: 'IT Support | Network Engineering | Software Engineering portfolio',
    type: 'website',
  },
};
```

- [ ] **Step 2: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 3: Import on Vercel** (instructions in README)

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add SEO metadata for Vercel deployment"
```

---

## Execution Order Summary

```
Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 → Task 7 → Task 8 → Task 9 → Task 10 → Task 11 → Task 12 → Task 13 → Task 14 → Task 15
```

All tasks have no cross-dependencies requiring parallelization — each builds on the previous. The single-page structure means we build sections sequentially and wire them together at Task 11.
