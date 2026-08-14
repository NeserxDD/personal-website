'use client';

import { useState } from 'react';
import { siteConfig } from '../../../lib/data/content';
import { CertificationCard } from '../ui/certification-card';
import { ChevronLeft, ChevronRight } from '../ui/icons';

const ITEMS_PER_PAGE = 4;

export function Certifications() {
  const certs = siteConfig.certifications;
  const [startIndex, setStartIndex] = useState(0);

  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, certs.length);
  const visibleCerts = certs.slice(startIndex, endIndex);

  const next = () => {
    const nextStart = startIndex + ITEMS_PER_PAGE;
    if (nextStart < certs.length) setStartIndex(nextStart);
  };

  const prev = () => {
    setStartIndex(Math.max(0, startIndex - ITEMS_PER_PAGE));
  };

  const canPrev = startIndex > 0;
  const canNext = endIndex < certs.length;

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
          05 — certifications
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Certifications
      </h2>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {visibleCerts.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>

        {certs.length > ITEMS_PER_PAGE && (
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous certifications"
              className={`inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="font-mono text-xs text-gray-400">
              {startIndex + 1}–{endIndex} / {certs.length}
            </span>

            <button
              onClick={next}
              disabled={!canNext}
              aria-label="Next certifications"
              className={`inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
