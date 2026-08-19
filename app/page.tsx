import { Header } from './components/shared/header';
import { Footer } from './components/shared/footer';
import { Hero } from './components/sections/hero';
import { Projects } from './components/sections/projects';
import { Skills } from './components/sections/skills';
import { Experience } from './components/sections/experience';
import { Education } from './components/sections/education';
import { Certifications } from './components/sections/certifications';
import { OutsideTech } from './components/sections/outside-tech';
import { Contact } from './components/sections/contact';
import { AnimateOnScroll } from './components/ui/animate-on-scroll';

export default function Home() {
  const sections = [
    { key: 'projects', Component: Projects, delay: '0ms' },
    { key: 'skills', Component: Skills, delay: '100ms' },
    { key: 'experience', Component: Experience, delay: '200ms' },
    { key: 'education', Component: Education, delay: '300ms' },
    { key: 'certifications', Component: Certifications, delay: '400ms' },
    { key: 'outside-tech', Component: OutsideTech, delay: '500ms' },
    { key: 'contact', Component: Contact, delay: '600ms' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div className="mx-auto max-w-content-wide px-4 sm:px-6 py-section">
          {sections.map(({ key, Component, delay }) => (
            <AnimateOnScroll key={key} delay={delay}>
              <Component />
            </AnimateOnScroll>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
