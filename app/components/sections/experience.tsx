import { siteConfig } from '../../../lib/data/content';
import { TimelineItem } from '../ui/timeline-item';

export function Experience() {
  return (
    <section id="experience" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" ><path fill="currentColor"  d="M19 16.28V11l3-3l-4-4l-3 3H8V6h3V2H3v4h3v6H3v4h3v5h4.28A2 2 0 0 0 12 22a2 2 0 1 0-1.72-3H8v-3h3v-4H8V9h7l2 2v5.27a2 2 0 1 0 2 0ZM4 5V3h6v2Zm8 14a1 1 0 1 1-1 1a1 1 0 0 1 1-1Zm-2-6v2H4v-2Zm8-7.59L20.59 8L18 10.59L15.41 8ZM18 19a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"/></svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          03 — experience
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
