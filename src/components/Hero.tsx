import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import profileImage from 'figma:asset/4cc6110dca4f938af9218b1bffef10f0cf8de690.png';

export function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1">
            <div className="mb-4 font-mono text-[#00FF41] text-sm opacity-80">
              $ whoami
            </div>

            <h1 className="font-mono mb-6">
              <span className="block text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] tracking-tight">
                Gregory Bateham
              </span>
              <span className="block text-[clamp(1.5rem,4vw,3rem)] leading-[0.95] tracking-tight opacity-60 mt-2">
                Software Engineer & ML Specialist
              </span>
            </h1>

            <p className="text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mb-12 opacity-90">
              Building scalable systems and AI solutions
              <span className={`inline-block w-[0.6em] h-[1.2em] bg-[#00FF41] ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </p>

            {/* Download CV Button */}
            <div className="mb-12">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-3 font-mono text-sm border border-[#E5E5E5]/20 px-6 py-3 hover:bg-[#00FF41] hover:text-[#050505] hover:border-[#00FF41] transition-all duration-200 group"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl border-t border-[#E5E5E5]/10 pt-8">
              <div>
                <div className="font-mono text-3xl text-[#00FF41] mb-1">M.S.</div>
                <div className="text-sm opacity-60">Computer Science</div>
              </div>
              <div>
                <div className="font-mono text-3xl text-[#00FF41] mb-1">1+</div>
                <div className="text-sm opacity-60">Year of Experience</div>
              </div>
              <div>
                <div className="font-mono text-3xl text-[#00FF41] mb-1">10+</div>
                <div className="text-sm opacity-60">Projects Deployed</div>
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative group">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[#00FF41] transition-all duration-200 group-hover:w-16 group-hover:h-16" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#00FF41] transition-all duration-200 group-hover:w-16 group-hover:h-16" />

              {/* Image */}
              <img
                src={profileImage}
                alt="Gregory Bateham"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}