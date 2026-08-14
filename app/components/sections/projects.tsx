import { siteConfig } from '../../../lib/data/content';
import { ProjectCard } from '../ui/project-card';

export function Projects() {
  return (
    <section id="projects" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          02 — projects
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Projects</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap-lg">
        {siteConfig.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
