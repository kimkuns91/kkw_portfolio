import Hero from '@/components/Home/Hero';
import ProjectList from '@/components/ProjectList';
import Skills from '@/components/Home/Skills';
import Stats from '@/components/Home/Stats';

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Stats />
      <Skills />
      <ProjectList />
    </div>
  );
}
