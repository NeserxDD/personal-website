interface EducationCardProps {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  details?: string;
}

export function EducationCard({
  degree,
  institution,
  startDate,
  endDate,
  details,
}: EducationCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-card-md p-card-padding bg-gray-50 dark:bg-gray-900">
      <h3 className="text-lg font-semibold text-ink">{degree}</h3>
      <p className="font-mono text-xs uppercase tracking-wider text-gray-500 mt-1">
        {institution}
      </p>
      <p className="font-mono text-xs text-gray-400 mt-1">
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
      {details && (
        <p className="mt-2 text-sm text-gray-500">{details}</p>
      )}
    </div>
  );
}
