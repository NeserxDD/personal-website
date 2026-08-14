interface CertificationCardProps {
  name: string;
  issuer: string;
  dateEarned: string;
  dateExpires?: string;
  credentialId?: string;
  badgeImage: string;
}

export function CertificationCard({
  name,
  issuer,
  dateEarned,
  dateExpires,
  credentialId,
  badgeImage,
}: CertificationCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-card-md p-card-padding bg-gray-50 dark:bg-gray-900 flex items-start gap-4">
      <img
        src={badgeImage}
        alt={name}
        className="w-16 h-16 rounded object-contain"
      />
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
          {issuer}
        </p>
        <p className="font-mono text-xs text-gray-400">
          Earned:{" "}
          {new Date(dateEarned).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
        {dateExpires && (
          <p className="font-mono text-xs text-gray-400">
            Expires:{" "}
            {new Date(dateExpires).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </p>
        )}
        {credentialId && (
          <p className="font-mono text-xs text-gray-400">
            ID: {credentialId}
          </p>
        )}
      </div>
    </div>
  );
}
