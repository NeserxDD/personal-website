interface TimelineItemProps {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export function TimelineItem({
  role,
  company,
  location,
  startDate,
  endDate,
  bullets,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-px h-full bg-gray-200 dark:bg-gray-700" />
      <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-ink" />

      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-ink">{role}</h3>
        <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
          {company} — {location}
        </p>
        <p className="font-mono text-xs text-gray-400">
          {new Date(startDate).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })}{' '}
          —{' '}
          {new Date(endDate).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>

      <ul className="mt-3 space-y-1">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="text-sm text-gray-500 list-none"
          >
            • {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
