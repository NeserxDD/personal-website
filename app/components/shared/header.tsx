'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-content-wide mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link
          href="#hero"
          className="font-display text-xl text-ink lowercase"
        >
          EGD
        </Link>
        <nav className="flex items-center gap-6">
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
      </div>
    </header>
  );
}
