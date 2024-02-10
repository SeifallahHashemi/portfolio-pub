import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import SolarSystem from '@/components/solar-system';
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <SolarSystem />
      <Intro />
      <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
    </main>
  );
}
