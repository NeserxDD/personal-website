import { Header } from './components/shared/header';
import { Footer } from './components/shared/footer';
import { Hero } from './components/sections/hero';
import { About } from './components/sections/about';
import { Projects } from './components/sections/projects';
import { Skills } from './components/sections/skills';
import { Experience } from './components/sections/experience';
import { Education } from './components/sections/education';
import { Certifications } from './components/sections/certifications';
import { OutsideTech } from './components/sections/outside-tech';
import { Contact } from './components/sections/contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div className="mx-auto max-w-content-wide px-4 sm:px-6 py-section">
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <OutsideTech />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
