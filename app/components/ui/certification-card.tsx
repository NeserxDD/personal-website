import type { Certification } from '../../../lib/data/types';

interface CertificationCardProps {
  cert: Certification;
  highlight?: boolean;
}

export function CertificationCard({
  cert,
  highlight = false,
}: CertificationCardProps) {
  const { name, issuer, dateEarned, badgeImage } = cert;

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const cardClasses = highlight
    ? 'max-w-sm mx-auto'
    : 'group flex items-center gap-3';

  return (
    <div
      className={`rounded-lg border border-gray-200 dark:border-gray-800 px-4 py-3 transition-colors ${
        highlight ? '' : 'hover:bg-gray-50 dark:hover:bg-gray-800/30'
      } ${cardClasses} ${highlight ? 'flex flex-col text-center' : ''}`}
    >
      {highlight ? (
        <>
          <img
            src={badgeImage}
            alt={name}
            className="h-24 w-24 shrink-0 rounded-md object-contain mx-auto mb-3"
          />
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
              {name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {issuer}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Earned: {formatDate(dateEarned)}
            </p>
          </div>
        </>
      ) : (
        <>
          <img
            src={badgeImage}
            alt={name}
            className="h-10 w-10 shrink-0 rounded object-contain"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{issuer}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {formatDate(dateEarned)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
