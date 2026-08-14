import { ArrowUpRight } from './icons';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export function ProjectCard({
  title,
  description,
  techStack,
  thumbnail,
  links,
}: ProjectCardProps) {
  return (
    <div className="group bg-gray-50 dark:bg-gray-900 rounded-card border border-gray-200 dark:border-gray-700 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-350 hover:-translate-y-0.5">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-card-padding space-y-3">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs uppercase tracking-wider text-gray-500"
            >
              {tech}
            </span>
          ))}
        </div>
        {links && (
          <div className="flex gap-4 pt-2">
            {links.github && (
              <a
                href={links.github}
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-ink transition-colors"
              >
                github <ArrowUpRight />
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-ink transition-colors"
              >
                live <ArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
