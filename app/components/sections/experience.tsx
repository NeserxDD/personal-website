import { siteConfig } from '../../../lib/data/content';
import { TimelineItem } from '../ui/timeline-item';

export function Experience() {
  return (
    <section id="experience" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          04 — experience
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Experience</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="space-y-0">
        {siteConfig.experience.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
