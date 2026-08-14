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
