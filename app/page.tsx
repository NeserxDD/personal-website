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

const sectionDelays = ['', '100ms', '200ms', '300ms', '400ms', '500ms', '600ms'];

export default function Home() {
  const sections = [
    { Component: Projects, delay: '0ms' },
    { Component: Skills, delay: '100ms' },
    { Component: Experience, delay: '200ms' },
    { Component: Education, delay: '300ms' },
    { Component: Certifications, delay: '400ms' },
    { Component: OutsideTech, delay: '500ms' },
    { Component: Contact, delay: '600ms' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div className="mx-auto max-w-content-wide px-4 sm:px-6 py-section">
          {sections.map(({ Component, delay }) => (
            <AnimateOnScroll key={Component.name} delay={delay}>
              <Component />
            </AnimateOnScroll>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
