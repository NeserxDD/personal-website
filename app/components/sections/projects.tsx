import { siteConfig } from '../../../lib/data/content';
import { ProjectCard } from '../ui/project-card';

const projects = [
  {
    id: '1',
    title: 'Portfolio Website',
    description:
      'A minimal portfolio built with Next.js and the bryl-minimal design system.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    thumbnail: 'https://placehold.co/400x225?text=Portfolio',
    links: {
      github: 'https://github.com/NeserxDD',
    },
  },
  {
    id: '2',
    title: 'Network Config Toolkit',
    description:
      'A collection of Python and Bash scripts for network device configuration auditing.',
    techStack: ['Python', 'Bash', 'YAML'],
    thumbnail: 'https://placehold.co/400x225?text=Network+Tool',
    links: {
      github: 'https://github.com/NeserxDD',
    },
  },
  {
    id: '3',
    title: 'API Dashboard',
    description:
      'A React dashboard consuming REST APIs with live data visualization.',
    techStack: ['React', 'REST API', 'Chart.js'],
    thumbnail: 'https://placehold.co/400x225?text=Dashboard',
    links: {
      github: 'https://github.com/NeserxDD',
      live: 'https://example.com',
    },
  },
  {
    id: '4',
    title: 'System Monitor',
    description:
      'A real-time system monitoring dashboard with alerting and log analysis.',
    techStack: ['Next.js', 'Socket.IO', 'Tailwind CSS'],
    thumbnail: 'https://placehold.co/400x225?text=Monitor',
    links: {
      github: 'https://github.com/NeserxDD',
      live: 'https://example.com',
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
