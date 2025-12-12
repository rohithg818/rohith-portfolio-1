import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Cpu, Database, Video, Bot, Layers, Brain, Zap, Layout, Users, FileText, Activity, Server, Radio, Eye, Code, Terminal } from 'lucide-react';
import { GlitchText } from './components/GlitchText';
import { SkillsRadar } from './components/SkillsRadar';
import { ScrollReveal } from './components/ScrollReveal';
import { Resume } from './components/Resume';
import { CosmicBackground } from './components/CosmicBackground';
import { Hero } from './components/Hero';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [view, setView] = useState<'home' | 'resume'>('home');
  
  // Simple scroll spy
  useEffect(() => {
    if (view !== 'home') return;
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const scrollTo = (id: string) => {
    // If not on home view, switch to home first
    if (view !== 'home') {
      setView('home');
      // Wait for render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          const header = element.querySelector('h2');
          if (header) {
            (header as HTMLElement).tabIndex = -1;
            (header as HTMLElement).focus({ preventScroll: true });
          } else {
            element.tabIndex = -1;
            element.focus({ preventScroll: true });
          }
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Set focus to the section header or container for accessibility
      const header = element.querySelector('h2');
      if (header) {
        (header as HTMLElement).tabIndex = -1;
        (header as HTMLElement).focus({ preventScroll: true });
      } else {
        element.tabIndex = -1;
        element.focus({ preventScroll: true });
      }
    }
  };

  const handleHeroProtocolsClick = () => {
    scrollTo('projects');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.classList.add('animate-pulse-fast');
        setTimeout(() => projectsSection.classList.remove('animate-pulse-fast'), 1000);
      }
    }, view !== 'home' ? 600 : 0);
  };

  const handleHeroSignalClick = () => {
    scrollTo('contact');
  };

  const skillCategories = [
    {
      title: 'Machine Learning',
      desc: 'Python, Scikit-Learn',
      tools: ['Random Forest', 'Decision Trees', 'Logistic Regression', 'KNN', 'AutoML'],
      icon: <Cpu className="w-5 h-5 text-[#00FF4F]" />
    },
    {
      title: 'Deep Learning',
      desc: 'CNN, RNN, LSTM',
      tools: ['ResNet/VGG', 'Image Classification', 'Fine-tuning', 'PyTorch/TensorFlow'],
      icon: <Brain className="w-5 h-5 text-[#00FF4F]" />
    },
    {
      title: 'RL / MDP',
      desc: 'Optimization Logic',
      tools: ['Markov Decision Processes', 'Reward Shaping', 'Policy Optimization', 'Applied RL'],
      icon: <Zap className="w-5 h-5 text-[#00FF4F]" />
    },
    {
      title: 'Computer Vision',
      desc: 'OpenCV, YOLOv4',
      tools: ['Image Preprocessing', '2D-to-3D Logic', 'RoboAnnotate', 'Object Detection'],
      icon: <Layers className="w-5 h-5 text-[#00FF4F]" />
    },
    {
      title: 'Data Engineering',
      desc: 'ETL & Prep',
      tools: ['CSV/PDF Extraction', 'Data Cleaning', 'Pipeline Prep', 'Automation Flows'],
      icon: <Database className="w-5 h-5 text-[#00FF4F]" />
    },
    {
      title: 'Frontend / UX',
      desc: 'Web Interfaces',
      tools: ['HTML', 'JavaScript', 'UI Layout', 'Clean Design Thinking'],
      icon: <Layout className="w-5 h-5 text-[#00FF4F]" />
    },
    {
      title: 'Video Editing',
      desc: 'Visual Production',
      tools: ['After Effects', 'Premiere Pro', 'Motion Graphics', 'Event Edits'],
      icon: <Video className="w-5 h-5 text-[#00FF4F]" />
    },
    {
      title: 'Soft Skills',
      desc: 'Collaboration',
      tools: ['Communication', 'Teamwork', 'Event Management', 'Creative Problem Solving'],
      icon: <Users className="w-5 h-5 text-[#00FF4F]" />
    }
  ];

  const systemMetrics = [
    { name: 'Machine Learning Systems', status: 'ACTIVE', icon: <Brain className="w-4 h-4" /> },
    { name: 'Deep Learning Models', status: 'STABLE', icon: <Server className="w-4 h-4" /> },
    { name: 'Computer Vision Modules', status: 'OPTIMIZED', icon: <Eye className="w-4 h-4" /> },
    { name: 'Reinforcement Learning Engine', status: 'LISTENING', icon: <Activity className="w-4 h-4" /> },
    { name: 'UX / Frontend Layer', status: 'RESPONSIVE', icon: <Code className="w-4 h-4" /> },
    { name: 'Automation Pipelines', status: 'OPERATIONAL', icon: <Terminal className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-200 relative overflow-x-hidden selection:bg-[#00FF4F]/30 selection:text-[#00FF4F]">
      
      {/* Background Effects */}
      <CosmicBackground />
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="scanline"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo('home')} role="button" aria-label="Scroll to top" tabIndex={0}>
            <div className="relative">
              <Bot className="w-6 h-6 text-[#00FF4F] group-hover:animate-pulse transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#00FF4F] blur-md opacity-40 animate-pulse"></div>
            </div>
            <span className="font-orbitron font-bold text-lg tracking-widest text-white group-hover:text-[#00FF4F] transition-colors">
              ROHITH<span className="text-neutral-500">.G</span>
            </span>
          </div>
          
          <div className="flex items-center gap-8 font-mono text-sm">
            <div className="hidden md:flex gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => {
                const id = item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollTo(id)}
                    className={`relative px-2 py-1 transition-all duration-150 hover:text-[#00FF4F] hover:shadow-[0_0_15px_rgba(0,255,79,0.2)] ${
                      activeSection === id && view === 'home' ? 'text-[#00FF4F] scale-105' : 'text-slate-400'
                    }`}
                    aria-label={`Scroll to ${item} section`}
                  >
                    {activeSection === id && view === 'home' && (
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-[10px] text-[#00FF4F]">{'>'}</span>
                    )}
                    {item.toUpperCase()}
                  </button>
                );
              })}
            </div>
            
            {/* Resume Button */}
            <button 
              onClick={() => setView('resume')}
              className={`flex items-center gap-2 px-4 py-2 border text-xs font-bold hover:shadow-[0_0_15px_rgba(0,255,79,0.3)] transition-all duration-150 rounded-sm ${
                view === 'resume' 
                  ? 'bg-[#00FF4F]/20 border-[#00FF4F] text-[#00FF4F]' 
                  : 'border-[#00FF4F] text-[#00FF4F] hover:bg-[#00FF4F]/10'
              }`}
              title="View Resume Dossier"
              aria-label="View Resume Dossier"
            >
              <FileText className="w-4 h-4" />
              RESUME
            </button>
          </div>
        </div>
      </nav>

      {view === 'resume' ? (
        <Resume onBack={() => setView('home')} />
      ) : (
        <>
          {/* HERO SECTION */}
          <Hero 
            onProtocolsClick={handleHeroProtocolsClick}
            onStatusClick={handleHeroSignalClick}
          />

          {/* ABOUT SECTION */}
          <section id="about" className="py-24 relative outline-none">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <ScrollReveal direction="right">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF4F] to-emerald-600 rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-neutral-900 p-1 border border-neutral-800">
                      {/* Updated Image Source to LinkedIn URL */}
                      <img src="https://media.licdn.com/dms/image/v2/D4D03AQHhNRtnvHyL_g/profile-displayphoto-crop_800_800/B4DZrR3tdJIEAI-/0/1764457636236?e=1767225600&v=beta&t=w8RHdGWzS8W_0RL7RyLsKxCi-EqjhehD5IcFdKdsKkU" alt="Rohith Gopi" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-500 filter contrast-125 object-cover" />
                      {/* HUD Elements */}
                      <div className="absolute top-4 right-4 text-[#00FF4F] text-xs font-mono flex flex-col items-end gap-1">
                        <span>ID: AIML-04</span>
                        <span>STATUS: ACTIVE</span>
                      </div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#00FF4F]"></div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={200}>
                  <div>
                    <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                      <span className="text-[#00FF4F] text-2xl">01.</span>
                      <GlitchText text="IDENTITY" />
                    </h2>
                    <div className="space-y-6 text-slate-400 font-mono text-lg border-l-2 border-neutral-800 pl-6">
                      <p className="leading-relaxed">
                        I am a <span className="text-[#00FF4F]">4th-year AIML student</span> specializing in Machine Learning, Deep Learning, Computer Vision, RL, and Automation.
                      </p>
                      <p className="leading-relaxed">
                        I thrive on building practical intelligent systems—from automating workflows to training models for real-world utility. My technical foundation extends to design and media, where I use <span className="text-white">Adobe After Effects</span> and <span className="text-white">Premiere Pro</span> to craft compelling visual narratives.
                      </p>
                      <p className="leading-relaxed">
                        With experience in leadership and event organization, I balance technical depth with creative problem-solving. My goal is to build intelligent, user-centric systems that elevate digital experiences.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 bg-neutral-900/50 border border-neutral-800 hover:border-[#00FF4F]/50 transition-colors">
                          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                            <Bot className="w-4 h-4 text-[#00FF4F]" /> Focus
                          </h3>
                          <p className="text-sm">ML, Deep Networks & LLM</p>
                        </div>
                        <div className="p-4 bg-neutral-900/50 border border-neutral-800 hover:border-[#00FF4F]/50 transition-colors">
                          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                            <Layout className="w-4 h-4 text-[#00FF4F]" /> Creative
                          </h3>
                          <p className="text-sm">UX & Video Production</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="py-24 relative overflow-hidden outline-none">
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF4F] to-transparent z-10"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <ScrollReveal>
                <div className="mb-16 text-center">
                  <h2 className="text-4xl font-bold mb-4">
                    <span className="text-[#00FF4F] text-2xl mr-4">02.</span>
                    <GlitchText text="TECHNICAL ARSENAL" />
                  </h2>
                  <p className="text-slate-400 font-mono">Core competencies and operational modules.</p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Radar Chart */}
                <div className="order-2 lg:order-1">
                  <ScrollReveal direction="right" delay={200}>
                    <SkillsRadar />
                  </ScrollReveal>
                </div>
                
                {/* Right Column: Grid of Skills */}
                <div className="order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillCategories.map((cat, i) => (
                    <ScrollReveal key={i} direction="left" delay={100 + (i * 50)}>
                      <div className="group relative p-5 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 hover:border-[#00FF4F]/50 transition-all duration-300 h-full hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(0,255,79,0.12)]">
                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {cat.icon}
                        </div>
                        <h3 className="font-orbitron text-lg text-white mb-1 group-hover:text-[#00FF4F] transition-colors">{cat.title}</h3>
                        <p className="text-xs text-[#00FF4F]/80 mb-3 italic">{cat.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {cat.tools.map((tool, idx) => (
                            <span key={idx} className="text-[10px] font-mono text-slate-400 bg-neutral-800 px-1.5 py-0.5 rounded-sm border border-neutral-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="py-24 relative outline-none">
            <div className="max-w-7xl mx-auto px-6">
              <ScrollReveal>
                <div className="flex items-center justify-between mb-16">
                  <h2 className="text-4xl font-bold">
                    <span className="text-[#00FF4F] text-2xl mr-4">03.</span>
                    <GlitchText text="MISSION LOGS" />
                  </h2>
                  <div className="hidden md:block h-[1px] flex-1 bg-neutral-800 mx-8"></div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                  <ScrollReveal key={project.id} delay={index * 100} direction="up">
                    <div className="group relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 hover:border-[#00FF4F] transition-all duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,79,0.2)] p-8 overflow-hidden">
                      {/* Hover background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF4F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-xl font-bold text-white mb-4 font-orbitron group-hover:text-[#00FF4F] transition-colors flex items-center justify-between">
                          {project.title}
                          {project.featured && (
                             <span className="text-[10px] text-[#00FF4F] border border-[#00FF4F] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">DEPLOYED</span>
                          )}
                        </h3>
                        <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.techStack.map(tech => (
                            <span key={tech} className="text-xs font-mono text-green-200/70 bg-green-900/10 px-2 py-1 rounded-sm border border-green-500/10 group-hover:border-[#00FF4F]/40 group-hover:text-[#00FF4F] transition-all">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* SYSTEM STATUS (CONTACT) SECTION */}
          <section id="contact" className="py-24 relative border-t border-neutral-900 outline-none">
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <ScrollReveal>
                <h2 className="text-4xl font-bold mb-8">
                  <span className="text-[#00FF4F] text-2xl mr-4">04.</span>
                  <GlitchText text="SYSTEM STATUS" />
                </h2>
                <p className="text-slate-400 mb-12 max-w-xl mx-auto font-mono">
                  Diagnostics panel active. Monitoring real-time operational metrics.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200} direction="up">
                <div className="max-w-3xl mx-auto bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-8 md:p-12 relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] group hover:border-[#00FF4F]/30 transition-all">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF4F]/50 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF4F]/50 to-transparent"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/5 pb-6">
                    <div className="text-left">
                       <div className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-widest">System Status</div>
                       <div className="text-3xl md:text-4xl font-bold text-[#00FF4F] tracking-widest font-orbitron animate-pulse shadow-green-500/50 drop-shadow-[0_0_8px_rgba(0,255,79,0.5)]">ONLINE</div>
                    </div>
                    <div className="text-left md:text-right mt-6 md:mt-0 font-mono">
                      <div className="text-xs text-slate-500 mb-1 uppercase tracking-widest">Last Sync</div>
                      <div className="text-white tracking-widest text-sm">12 DEC 2025 — 09:30 IST</div>
                    </div>
                  </div>

                  <div className="space-y-6 mb-10 text-left">
                     <h3 className="text-slate-500 text-xs font-mono tracking-[0.2em] mb-4 border-l-2 border-[#00FF4F] pl-3 uppercase">Current Operations</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {systemMetrics.map((metric, idx) => (
                           <div key={idx} className="flex items-center justify-between bg-black/40 p-3 border border-white/5 hover:border-[#00FF4F]/20 transition-colors">
                             <div className="flex items-center gap-3">
                                <span className="text-[#00FF4F]/70">{metric.icon}</span>
                                <span className="text-slate-300 font-mono text-sm">{metric.name}</span>
                             </div>
                             <span className={`text-[10px] font-bold px-2 py-1 rounded tracking-wider ${
                               metric.status === 'ACTIVE' || metric.status === 'ONLINE' ? 'bg-[#00FF4F]/10 text-[#00FF4F]' :
                               metric.status === 'STABLE' ? 'bg-blue-500/10 text-blue-400' :
                               'bg-emerald-500/10 text-emerald-400'
                             }`}>
                               {metric.status}
                             </span>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="text-center pt-6 border-t border-white/5">
                      <p className="text-[#00FF4F] font-mono italic text-sm">"All systems calibrated. Standing by for new missions."</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="mt-20 flex flex-col items-center gap-8">
                  <div className="flex justify-center gap-8">
                    <a 
                      href="https://github.com/rohithg818" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-500 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,79,0.5)] transition-all duration-150 p-2 rounded-full"
                      title="Access Source Protocols"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/rohith-gopi-a26223353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-500 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,79,0.5)] transition-all duration-150 p-2 rounded-full"
                      title="Establish Professional Link"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.instagram.com/im__god__818/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-500 hover:text-[#00FF4F] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,79,0.5)] transition-all duration-150 p-2 rounded-full"
                      title="View Transmission Feed"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                  
                  <a 
                    href="mailto:rohiththeg05@gmail.com"
                    className="font-mono text-[#00FF4F] text-sm tracking-widest hover:text-white hover:shadow-[0_0_15px_rgba(0,255,79,0.5)] transition-all duration-150 px-4 py-2 border border-transparent hover:border-[#00FF4F]/30 rounded-sm"
                    title="Send email to rohiththeg05@gmail.com"
                    aria-label="Send email to rohiththeg05@gmail.com"
                  >
                    rohiththeg05@gmail.com
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 text-center text-xs text-slate-600 font-mono border-t border-neutral-900 bg-black relative z-10">
            <p>SYSTEM STATUS: ONLINE | BUILT WITH REACT + TAILWIND</p>
            <p className="mt-2">&copy; 2024 NEUROLINK PORTFOLIO. ALL RIGHTS RESERVED.</p>
          </footer>
        </>
      )}
      
    </div>
  );
};

export default App;