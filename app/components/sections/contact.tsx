import type { ReactNode } from 'react';
import { siteConfig } from '../../../lib/data/content';
import { Mail, LinkedIn, Facebook, Twitter, ChevronRight, } from '../ui/icons';

interface ContactCard {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}

export function Contact() {
  const { contact } = siteConfig;

  const cards: ContactCard[] = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail className="h-4 w-4" />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ernes-glenn-dalope',
      href: 'https://www.linkedin.com/in/ernes-glenn-dalope-2282a9316/',
      icon: <LinkedIn className="h-4 w-4" />,
    },
    {
      label: 'Facebook',
      value: 'facebook.com/rblenon18',
      href: 'https://facebook.com/rblenon18',
      icon: <Facebook className="h-4 w-4" />,
    },
    {
      label: 'Twitter',
      value: 'twitter.com/rblenon18',
      href: 'https://twitter.com/rblenon18',
      icon: <Twitter className="h-4 w-4" />,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full space-y-5 mt-20 sm:mt-24"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          07 — contact
        </span>
      </div>

      <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
        Let's connect.
      </p>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
            I'm open to entry-level opportunities in IT Support, Networking, Software Development, and other technology-related roles. I'm always interested in learning, taking on new challenges, and growing my skills.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={
                card.href.startsWith('mailto:')
                  ? undefined
                  : 'noopener noreferrer'
              }
              className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200/80 bg-white/90 px-4 py-4 shadow-sm shadow-gray-900/5 transition-all hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-md dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-blue-700/70 dark:hover:bg-slate-800/90"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-ink transition-colors group-hover:bg-gray-200 dark:bg-slate-800 dark:text-blue-100 dark:group-hover:bg-blue-950/70">
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors dark:text-blue-300/80 dark:group-hover:text-blue-200">
                    {card.label}
                  </span>
                  <p className="truncate text-sm font-normal text-gray-900 dark:text-white">
                    {card.value}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-gray-700 dark:text-slate-500 dark:group-hover:text-blue-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
