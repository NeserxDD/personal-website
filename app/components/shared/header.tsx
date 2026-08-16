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

        {/* Desktop nav — full links always visible */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#projects"
            className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider"
          >
            projects
          </Link>
          <Link
            href="#experience"
            className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider"
          >
            experience
          </Link>
          <Link
            href="#certifications"
            className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider"
          >
            certifications
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile nav — ThemeToggle always visible + hamburger toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel — slides down below the header */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-content-wide mx-auto flex flex-col py-2 px-4 md:px-6 gap-1">
            <Link
              href="#projects"
              className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              projects
            </Link>
            <Link
              href="#experience"
              className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              experience
            </Link>
            <Link
              href="#certifications"
              className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              certifications
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
