import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { ProjectGrid } from './components/ProjectGrid';
import { Certifications } from './components/Certifications';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E5E5E5]">
      <Hero />
      <TechMarquee />
      <ProjectGrid />
      <Certifications />
      <ExperienceTimeline />
      <Footer />
    </div>
  );
}