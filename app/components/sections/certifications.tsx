'use client';

import { useState } from 'react';
import { siteConfig } from '../../../lib/data/content';
import { CertificationCard } from '../ui/certification-card';
import { ChevronLeft, ChevronRight } from '../ui/icons';

export function Certifications() {
  const certs = siteConfig.certifications;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % certs.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + certs.length) % certs.length);

  return (
    <section id="certifications" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M14 2v8l3-2v8l-3-2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6z" />
            <path d="M10 7V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          06 — certifications
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Certifications
      </h2>

      <div className="mt-8 relative">
        <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 p-6 sm:p-8">
          {certs.map((cert, index) => (
            <div
              key={cert.id}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === current
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              {index === current && (
                <CertificationCard cert={cert} highlight={true} />
              )}
            </div>
          ))}
        </div>

        {certs.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous certification"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="font-mono text-xs text-gray-400">
              {current + 1} / {certs.length}
            </span>

            <button
              onClick={next}
              aria-label="Next certification"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
