import type { Project } from '../../../lib/data/types';
import { ArrowUpRight } from './icons';

interface ProjectCardProps {
  project: Project;
  highlight?: boolean;
}

export function ProjectCard({ project, highlight = false }: ProjectCardProps) {
  return (
    <div
      className={`group flex flex-col gap-4 ${
        highlight ? 'max-w-xl mx-auto' : ''
      }`}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            highlight ? 'w-full h-48 sm:h-56' : 'aspect-video w-full'
          }`}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        <p
          className={`text-sm text-gray-500 dark:text-gray-400 leading-relaxed ${
            highlight ? 'line-clamp-2' : 'line-clamp-2'
          }`}
        >
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs uppercase tracking-wider text-gray-500"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.links && (
          <div className="mt-3 flex items-center gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                github
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                live
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
