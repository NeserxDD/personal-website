import { siteConfig } from '../../../lib/data/content';

export function OutsideTech() {
  return (
    <section id="outside-tech" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          07 — outside tech
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Outside Tech</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <p className="text-gray-500 max-w-content-max">
        {siteConfig.outsideTech}
      </p>
    </section>
  );
}
