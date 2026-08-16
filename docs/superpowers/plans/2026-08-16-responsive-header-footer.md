# Responsive Header & Footer Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the header responsive (hamburger menu on mobile with always-visible theme toggle) and replace the footer copyright with a distinctive, personal tagline.

**Architecture:** Header uses `useState` for mobile menu toggle, CSS for responsive show/hide. Footer is a simple centered layout. Both follow existing Tailwind + dark-mode patterns.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS, TypeScript

**Spec:** User request in conversation — responsive header, footer with "Still learning. Still building. Still improving." + "Ernes Glenn Dalope / Pangasinan, PH"

## Global Constraints
- Must use `'use client'` for any component with `useState`/interactivity
- Match existing Tailwind dark-mode conventions
- Keep desktop header layout unchanged
- ThemeToggle always visible (the core fix)

---

### Task 1: Make header responsive with mobile hamburger menu

**Files:**
- Modify: `app/components/shared/header.tsx`

**Problem:**
On mobile, 3 nav links + ThemeToggle with `gap-6` overflows. ThemeToggle gets squished or hidden.

**Fix:**
- Desktop (`md:flex`): Keep full nav + ThemeToggle
- Mobile (`md:hidden`): Show hamburger icon + ThemeToggle only
- Add `useState` + `isMobileMenuOpen` toggle
- Hamburger button shows inline SVG (menu icon)
- Mobile menu: overlay panel below header with nav links (absolute positioned, full-width)

**Code:**
```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-content-wide mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="#hero" className="font-display text-xl text-ink">
          EGD
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#projects" className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider">
            projects
          </Link>
          <Link href="#experience" className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider">
            experience
          </Link>
          <Link href="#certifications" className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider">
            certifications
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-content-wide mx-auto flex flex-col py-2 px-4 md:px-6 gap-1">
            <Link href="#projects" className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider py-2" onClick={() => setIsMobileMenuOpen(false)}>
              projects
            </Link>
            <Link href="#experience" className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider py-2" onClick={() => setIsMobileMenuOpen(false)}>
              experience
            </Link>
            <Link href="#certifications" className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider py-2" onClick={() => setIsMobileMenuOpen(false)}>
              certifications
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 1: Rewrite header.tsx with responsive mobile menu**
- [ ] **Step 2: Type check**
- [ ] **Step 3: Commit**

---

### Task 2: Redesign footer with personal tagline

**Files:**
- Modify: `app/components/shared/footer.tsx`

**Before:**
```tsx
<span>© 2026 Ernes Glenn Dalope · MIT Licensed</span>
<span>Built with Next.js</span>
```

**After:**
```tsx
<footer className="py-8 border-t border-gray-200 dark:border-gray-700 mt-section">
  <div className="max-w-content-wide mx-auto flex flex-col items-center px-4 md:px-6 gap-1">
    <p className="font-mono text-xs text-gray-400 dark:text-gray-500 italic">
      Still learning. Still building. Still improving.
    </p>
    <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
      Ernes Glenn Dalope / Pangasinan, PH
    </p>
    <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mt-2">
      Built with Next.js
    </p>
  </div>
</footer>
```

**Design choice:** `PH` = Philippines country code. Alternative: "Pangasinan, Philippines". Keeping `PH` is concise and fits the minimalist aesthetic.

- [ ] **Step 1: Rewrite footer.tsx**
- [ ] **Step 2: Type check**
- [ ] **Step 3: Commit**
