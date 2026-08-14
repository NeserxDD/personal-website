'use client';

import { useState } from 'react';
import { siteConfig } from '../../../lib/data/content';
import { ArrowUpRight, Check, Copy } from '../ui/icons';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { contact } = siteConfig;

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          08 — contact
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Contact
      </h2>

      <p className="mt-2 text-sm italic text-gray-400 dark:text-gray-500">
        I'm currently open to new opportunities. Have a project in mind or
        want to say hello?
      </p>

      <div className="mt-6 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300 break-all">
                {contact.email}
              </p>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={copied ? 'Copied!' : 'Copy email'}
            >
              {copied ? (
                <Check className="h-4 w-4 text-gray-900 dark:text-white" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {contact.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {contact.location}
          </p>
        </div>
      </div>
    </section>
  );
}
