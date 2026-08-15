import type { Project } from '../../../lib/data/types';
import { ArrowUpRight } from './icons';

interface ProjectCardProps {
  project: Project;
  delay?: string;
}

export function ProjectCard({ project, delay = '0ms' }: ProjectCardProps) {
  return (
    <div className="group flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-lg opacity-0 translate-y-4 animate-fade-in-up" style={{ animationDelay: delay }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105 aspect-video"
        />
      </div>
      <div className="flex flex-col" style={{ animationDelay: delay }}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        <ul className="mt-1 space-y-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed list-disc list-outside pl-4">
          {project.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-gray-500"
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
