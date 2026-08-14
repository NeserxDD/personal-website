import type { EducationItem } from '../../../lib/data/types';

interface EducationCardProps {
  education: EducationItem;
}

export function EducationCard({ education }: EducationCardProps) {
  const { degree, institution, startDate, endDate, details } = education;

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
          {degree}
        </h3>
        <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
          {formatDate(startDate)} — {formatDate(endDate)}
        </p>
      </div>
      <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
        {institution}
      </p>
      {details && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {details}
        </p>
      )}
    </div>
  );
}
