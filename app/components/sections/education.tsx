import { siteConfig } from '../../../lib/data/content';
import { EducationCard } from '../ui/education-card';

export function Education() {
  return (
    <section id="education" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048" stroke="currentColor"><path fill="currentColor" d="M1582 1065q41 72 61 150t21 161v103l-640 321l-640-321q0-60 1-112t9-101t24-98t48-103L256 960v587q29 10 52 28t41 42t26 52t9 59v320H0v-320q0-30 9-58t26-53t40-42t53-28V896L0 832l1024-512l1024 512l-466 233zM256 1728q0-26-19-45t-45-19q-26 0-45 19t-19 45v192h128v-192zm30-896l738 369l738-369l-738-369l-738 369zm1250 568q0-77-15-143t-53-135l-444 222l-444-222q-33 58-50 122t-18 132v24l512 256l512-256z"/></svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          04 — education
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Education
      </h2>

      <div className="mt-8 space-y-4">
        {siteConfig.education.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
}
