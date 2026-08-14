'use client';

import { useState } from 'react';
import { siteConfig } from '../../../lib/data/content';
import { ProjectCard } from '../ui/project-card';
import { ChevronLeft, ChevronRight } from '../ui/icons';

const ITEMS_PER_PAGE = 4;

export function Projects() {
  const projects = siteConfig.projects;
  const [startIndex, setStartIndex] = useState(0);

  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, projects.length);
  const visibleProjects = projects.slice(startIndex, endIndex);
  const currentPage = Math.floor(startIndex / ITEMS_PER_PAGE) + 1;
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const next = () => {
    const nextStart = startIndex + ITEMS_PER_PAGE;
    if (nextStart < projects.length) setStartIndex(nextStart);
  };

  const prev = () => {
    setStartIndex(Math.max(0, startIndex - ITEMS_PER_PAGE));
  };

  const canPrev = startIndex > 0;
  const canNext = endIndex < projects.length;

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
          01 — projects
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Selected Projects
      </h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        A collection of projects I've built — spanning web apps, network tools,
        and full-stack development.
      </p>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > ITEMS_PER_PAGE && (
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous projects"
              className={`inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="font-mono text-xs text-gray-400">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={next}
              disabled={!canNext}
              aria-label="Next projects"
              className={`inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
