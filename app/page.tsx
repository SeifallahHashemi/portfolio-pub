import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import SolarSystem from '@/components/solar-system';
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <SolarSystem />
      <Intro />
      <SectionDivider />
        <About />
        <Projects />
    </main>
  );
}
