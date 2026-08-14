import { siteConfig } from '../../../lib/data/content';
import { Mail, Calendar, ChevronRight } from '../ui/icons';

export function Contact() {
  const { contact } = siteConfig;

  return (
    <section
      id="contact"
      className="w-full space-y-5"
      style={{ opacity: 1, transform: 'none' }}
    >
      <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
        Let's work together.
      </p>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Available for freelance web development - Laravel, WordPress, and
            full-stack builds. Also open to SEO, Google Search Console, and
            Google My Business support for existing sites.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200/80 bg-white/90 px-4 py-4 shadow-sm shadow-gray-900/5 transition-all hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-md dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-blue-700/70 dark:hover:bg-slate-800/90"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-ink transition-colors group-hover:bg-gray-200 dark:bg-slate-800 dark:text-blue-100 dark:group-hover:bg-blue-950/70">
                <Mail className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors dark:text-blue-300/80 dark:group-hover:text-blue-200">
                  Email
                </span>
                <p className="truncate text-sm font-normal text-gray-900 dark:text-white">
                  {contact.email}
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-gray-700 dark:text-slate-500 dark:group-hover:text-blue-200" />
          </a>

          <a
            href="https://calendly.com/rblenon18"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200/80 bg-white/90 px-4 py-4 shadow-sm shadow-gray-900/5 transition-all hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-md dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-blue-700/70 dark:hover:bg-slate-800/90"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-ink transition-colors group-hover:bg-gray-200 dark:bg-slate-800 dark:text-blue-100 dark:group-hover:bg-blue-950/70">
                <Calendar className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors dark:text-blue-300/80 dark:group-hover:text-blue-200">
                  Let's Talk
                </span>
                <p className="truncate text-sm font-normal text-gray-900 dark:text-white">
                  Schedule a Call
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-gray-700 dark:text-slate-500 dark:group-hover:text-blue-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
