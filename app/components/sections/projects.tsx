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
<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" fillRule="evenodd" d="m85.333 160.617l128-74l.043.025L256 62l-42.667-24.666L42.667 136v197.333L85.333 358zm87.581 23.701l104.419-60.367l104.43 60.373l-104.419 60.368zm-23.581 35.651V346.05L256 407.716v-126.08zm256 126.081l-106.667 61.666V281.649l106.667-61.667zm-128-271.383L448 173.333v197.334l-170.667 98.667l-170.666-98.667V173.333z" clipRule="evenodd"/></svg>
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
