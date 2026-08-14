import { siteConfig } from '../../../lib/data/content';

export function About() {
  return (
    <section
      id="about"
      className="py-section relative overflow-hidden"
    >
      {/* Subtle halftone accent behind content */}
      <div
        className="absolute inset-0 halftone-bg opacity-90 dark:opacity-42 pointer-events-none"
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 30%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 30%, transparent 100%)',
        }}
      />

      <div className="relative">
        <div className="mb-8">
          <span className="font-display text-xs uppercase tracking-wider text-gray-400">
            01 — about
          </span>
          <h2 className="text-2xl font-semibold text-ink mt-1">About</h2>
          <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="space-y-4 text-gray-500">
          {siteConfig.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
          </span>
          <span className="font-mono text-xs text-gray-500">
            Open to opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
