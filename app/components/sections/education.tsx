import { siteConfig } from '../../../lib/data/content';
import { EducationCard } from '../ui/education-card';

export function Education() {
  return (
    <section id="education" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          05 — education
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Education</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid-gap">
        {siteConfig.education.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
