'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'certifications', label: 'certifications' },
  { id: 'outside-tech', label: 'outside tech' },
  { id: 'contact', label: 'contact' },
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden lg:block fixed left-0 top-0 h-screen w-sidebar overflow-y-auto py-24 pl-6">
      <nav className="space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block font-mono text-xs uppercase tracking-wider py-2 transition-colors ${
              activeSection === section.id
                ? 'text-ink'
                : 'text-gray-500 hover:text-ink'
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
