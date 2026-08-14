import { siteConfig } from '../../../lib/data/content';

export function OutsideTech() {
  return (
    <section id="outside-tech" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.5 15c1.5 1 3.5 1 5 0" />
            <path d="M10 9h.01M14 9h.01" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          07 — outside tech
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Outside Tech
      </h2>

      <p className="mt-4 max-w-2xl text-sm italic text-gray-500 dark:text-gray-400">
        {siteConfig.outsideTech}
      </p>
    </section>
  );
}
