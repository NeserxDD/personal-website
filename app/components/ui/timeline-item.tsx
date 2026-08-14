import type { ExperienceItem } from '../../../lib/data/types';

interface TimelineItemProps {
  item: ExperienceItem;
  isLast: boolean;
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
  const { role, company, location, startDate, endDate, bullets } = item;

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="relative flex gap-5 sm:gap-6">
      <div className="relative flex flex-col items-center">
        <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-ink dark:bg-white ring-4 ring-white dark:ring-gray-900 z-10" />
        {!isLast && (
          <span className="w-px flex-1 bg-gray-200 dark:bg-gray-700" />
        )}
      </div>
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-10'}`}>
        <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
          {formatDate(startDate)} — {formatDate(endDate)}
        </p>
        <h3 className="mt-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
          {role}
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {company}
        </p>
        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
          {location}
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed list-disc list-outside pl-4">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
