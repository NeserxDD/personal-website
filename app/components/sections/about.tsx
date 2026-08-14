import { siteConfig } from '../../../lib/data/content';

export function About() {
  return (
    <section id="about" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 7.5v7.5M12 15h-3m3 0h3m-3 0v-7.5M12 7.5L8 11.5M12 7.5l4 4" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          01 — about
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        About
      </h2>

      <div className="mt-4 space-y-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {siteConfig.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-gray-500" />
        </span>
        <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
          Open to opportunities
        </span>
      </div>
    </section>
  );
}
