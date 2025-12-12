import React, { useEffect, useState } from 'react';
import { Layers, Radio } from 'lucide-react';
import { CyberButton } from './CyberButton';

interface HeroProps {
  onProtocolsClick: () => void;
  onStatusClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onProtocolsClick, onStatusClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger boot-up animations
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Parallax helper function
  const parallax = (depth: number) => ({
    transform: `translate(${mousePosition.x * depth}px, ${mousePosition.y * depth}px)`,
    transition: 'transform 0.1s ease-out'
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      
      {/* LAYER 1: Soft Neon Fog (Green Glow) */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-40' : 'opacity-0'}`}
        style={parallax(20)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF4F] blur-[150px] opacity-10 rounded-full mix-blend-screen animate-pulse-slow"></div>
      </div>

      {/* LAYER 2: Grid Lines (Boot up reveal) */}
      <div 
        className={`absolute inset-0 z-0 bg-grid transition-opacity duration-1500 ease-in-out ${isLoaded ? 'opacity-20' : 'opacity-0'}`}
        style={{
          ...parallax(15),
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      ></div>

      {/* LAYER 3: Light Particles (Ambient) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(0,255,79,0.8)]"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.4 + 0.1,
              animation: `float ${15 + Math.random() * 20}s infinite linear`,
              animationDelay: `-${Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* LAYER 4: Hero Content */}
      <div 
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
        style={parallax(5)}
      >
        {/* HERO NAME with Light Sweep */}
        <div className={`relative mb-4 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 drop-shadow-[0_0_35px_rgba(0,255,79,0.3)] font-orbitron relative overflow-hidden inline-block px-4">
            ROHITH . G
            {/* Light sweep effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full animate-shine pointer-events-none"></div>
          </h1>
          {/* Reflection Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-[#00FF4F] blur-[60px] opacity-20 pointer-events-none"></div>
        </div>

        {/* TAGLINE */}
        <div className={`transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-lg md:text-2xl font-bold tracking-[0.15em] text-[#00FF4F] uppercase font-orbitron mb-6 inline-block relative group cursor-default select-none">
            AIML Engineer Crafting Engineered Intelligence
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00FF4F] shadow-[0_0_15px_#00FF4F] transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>

        {/* SUBTEXT */}
        <div className={`transition-all duration-1000 delay-500 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg font-mono leading-relaxed tracking-wide">
            4th-Year AIML Student. Building machine learning systems, automating workflows, and crafting clean digital experiences.
          </p>
        </div>

        {/* BUTTONS */}
        <div className={`flex flex-col md:flex-row gap-6 justify-center transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF4F] to-emerald-600 rounded-sm blur opacity-0 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
              <CyberButton 
                onClick={onProtocolsClick} 
                icon={<Layers className="w-5 h-5" />}
                className="relative hover:scale-105 transition-transform duration-300 bg-black"
              >
                View Protocols
              </CyberButton>
           </div>
           
           <div className="group relative">
              <CyberButton 
                variant="secondary" 
                onClick={onStatusClick} 
                icon={<Radio className="w-5 h-5" />}
                className="relative hover:scale-105 transition-transform duration-300 hover:text-[#00FF4F] hover:border-[#00FF4F] hover:shadow-[0_0_20px_rgba(0,255,79,0.3)]"
              >
                View Status
              </CyberButton>
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-[#00FF4F]/50 to-transparent relative overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#00FF4F] blur-[2px] animate-drop"></div>
        </div>
        {/* Ripple effect at bottom */}
        <div className="w-4 h-1 bg-[#00FF4F]/50 rounded-full blur-[2px] animate-pulse"></div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          20% { opacity: var(--opacity, 0.5); }
          80% { opacity: var(--opacity, 0.5); }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-12deg); }
          15% { transform: translateX(150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
        @keyframes drop {
            0% { top: -50%; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 150%; opacity: 0; }
        }
        .animate-shine {
            animation: shine 8s infinite linear;
        }
        .animate-drop {
            animation: drop 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};
