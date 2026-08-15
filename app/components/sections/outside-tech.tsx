import { siteConfig } from '../../../lib/data/content';

export function OutsideTech() {
  return (
    <section id="outside-tech" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" strokeWidth="1"><path fill="currentColor" d="M17.525 31.24v-1.52h3.04v-1.53h3.05v-1.52h3.05v-1.53h1.52v-1.52h1.53V8.38h-1.53V6.86h-1.52v1.52h-3.05v1.53h-3.05v1.52h-3.04v1.52h-3.05v1.53H16v15.24h-1.52v1.52Zm6.09-18.29h3.05v1.53h-3.05Zm-4.57 9.15H22.1v3.04h-3.05Zm4.57-16.76h3.05v1.52h-3.05Zm-3.05-1.53h3.05v1.53h-3.05Zm-3.04-1.52h3.04v1.52h-3.04Zm-3.05 4.57h3.05v3.05h-3.05Zm0-6.1h3.05v1.53h-3.05Zm-3.05 27.43h3.05v1.53h-3.05Z"/><path fill="currentColor" d="M11.425 11.43h3.05v1.52h-3.05Zm0-9.14h3.05v1.52h-3.05Zm0 19.81h3.05v3.04h-3.05Zm0-6.1h3.05v3.05h-3.05Zm-3.05 10.67h3.05v1.52h-3.05Zm0-16.76h3.05v1.52h-3.05Zm0-6.1h3.05v1.53h-3.05Zm-3.04 21.33h3.04v1.53h-3.04Zm0-16.76h3.04v1.53h-3.04Zm0-3.04h3.04v1.52h-3.04Zm0 13.71h3.04v3.05h-3.04Zm0-6.1h3.04V16h-3.04Zm-1.53 10.67h1.53v1.52h-1.53Zm0-16.76h1.53v1.52h-1.53Zm-1.52 1.52h1.52v15.24h-1.52Z"/></svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          06 — outside tech
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Outside Tech
      </h2>

      <p className="mt-4 max-w-2xl text-sm italic text-gray-500 dark:text-gray-400">
        {siteConfig.outsideTech}
      </p>
    </section>
  );
}
