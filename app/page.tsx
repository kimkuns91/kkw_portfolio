import Background from '@/components/Home/Background';
import Hero from '@/components/Home/Hero';
import Skills from '@/components/Home/Skills';
import Stats from '@/components/Home/Stats';

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Stats />
      <Skills />
      <Background />
    </div>
  );
}
