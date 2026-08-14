'use client';

import { useState } from 'react';
import { siteConfig } from '../../../lib/data/content';
import { ProjectCard } from '../ui/project-card';
import { ChevronLeft, ChevronRight } from '../ui/icons';

export function Projects() {
  const projects = siteConfig.projects;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M2 8l10-5 10 5v10l-10 5-10-5z" />
            <path d="M2 8v10" />
            <path d="M22 8v10" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          02 — projects
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Selected Projects
      </h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        A collection of projects I've built — spanning web apps, network tools,
        and full-stack development.
      </p>

      <div className="mt-8 relative">
        <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 p-6 sm:p-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === current
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              {index === current && (
                <ProjectCard project={project} highlight={true} />
              )}
            </div>
          ))}
        </div>

        {projects.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="font-mono text-xs text-gray-400">
              {current + 1} / {projects.length}
            </span>

            <button
              onClick={next}
              aria-label="Next project"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
