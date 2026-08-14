import { Header } from './components/shared/header';
import { Footer } from './components/shared/footer';
import { SidebarNav } from './components/layout/sidebar-nav';
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
      <SidebarNav />
      <main className="lg:ml-sidebar min-h-screen">
        <Hero />
        <div className="max-w-content-max mx-auto px-4 md:px-6 py-section">
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
