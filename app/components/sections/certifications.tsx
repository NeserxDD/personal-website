import { siteConfig } from '../../../lib/data/content';
import { CertificationCard } from '../ui/certification-card';

export function Certifications() {
  return (
    <section id="certifications" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          06 — certifications
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">
          Certifications
        </h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid-gap">
        {siteConfig.certifications.map((cert) => (
          <CertificationCard key={cert.id} {...cert} />
        ))}
      </div>
    </section>
  );
}
