import { CertificationCard } from '../ui/certification-card';

const certifications = [
  {
    id: '1',
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    dateEarned: '2025-03-15',
    badgeImage: 'https://placehold.co/80x80?text=Network+',
  },
  {
    id: '2',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    dateEarned: '2025-01-10',
    badgeImage: 'https://placehold.co/80x80?text=AWS',
  },
  {
    id: '3',
    name: 'Google IT Support',
    issuer: 'Google',
    dateEarned: '2024-11-20',
    badgeImage: 'https://placehold.co/80x80?text=GCP',
  },
  {
    id: '4',
    name: 'Linux+',
    issuer: 'CompTIA',
    dateEarned: '2024-08-15',
    badgeImage: 'https://placehold.co/80x80?text=Linux',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2v8l3-2v8l-3-2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6z" />
            <path d="M10 7V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          06 — certifications
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Certifications
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}
