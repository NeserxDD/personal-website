import { siteConfig } from '../../../lib/data/content';
import { TimelineItem } from '../ui/timeline-item';

export function Experience() {
  return (
    <section id="experience" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
            <path d="M3 7v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" />
            <path d="M8 15h.01M12 15h.01M16 15h.01" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          04 — experience
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Experience
      </h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Where I've worked and what I did there.
      </p>

      <div className="mt-8 space-y-0">
        {siteConfig.experience.map((item, index, array) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === array.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
