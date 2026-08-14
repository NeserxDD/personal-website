import { siteConfig } from '../../../lib/data/content';
import { EducationCard } from '../ui/education-card';

export function Education() {
  return (
    <section id="education" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 10L12 5 2 10v10a2 2 0 0 0 1 1.72l8 4a2 2 0 0 0 2 0l8-4a2 2 0 0 0 1-1.72z" />
            <path d="M12 15V7" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          05 — education
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Education
      </h2>

      <div className="mt-8 space-y-4">
        {siteConfig.education.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
}
