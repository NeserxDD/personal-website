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
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-content-wide mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link
          href="#hero"
          className="font-display text-xl text-ink lowercase"
        >
          .portfolio
        </Link>
        <nav className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-500 hover:text-ink transition-colors font-mono uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>
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
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-950 flex flex-col items-center pt-24">
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-xl font-mono text-gray-500 hover:text-ink uppercase tracking-wider transition-colors"
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

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
