import React from 'react';
import { ArrowLeft, Download, Mail, Phone, MapPin, Calendar, GraduationCap, Languages as LangIcon } from 'lucide-react';
import { CyberButton } from './CyberButton';
import { CosmicBackground } from './CosmicBackground';

interface ResumeProps {
  onBack: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-slate-300 pt-24 pb-12 px-6 relative overflow-x-hidden animate-in fade-in duration-500">
        {/* Background elements */}
        <CosmicBackground />
        <div className="fixed inset-0 pointer-events-none z-50"><div className="scanline"></div></div>

        <div className="max-w-4xl mx-auto relative z-10">
            {/* Header Controls */}
            <div className="flex justify-between items-center mb-12 print:hidden">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-[#00FF4F] hover:text-white transition-colors group font-mono"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="tracking-widest">RETURN_TO_BASE</span>
                </button>
            </div>

            {/* Resume Header */}
            <header className="border-b-2 border-[#00FF4F]/30 pb-8 mb-12 bg-black/50 backdrop-blur-sm p-6 rounded-sm border border-neutral-800">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-orbitron">
                    ROHITH <span className="text-[#00FF4F]">GOPI</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-[#00FF4F] font-mono tracking-widest mb-6">AIML ENGINEERING STUDENT</h2>
                
                <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-mono text-slate-400">
                    <div className="flex items-center gap-2 hover:text-[#00FF4F] transition-colors cursor-default">
                        <Phone className="w-4 h-4 text-[#00FF4F]" />
                        <span>(+91) 73059 19416</span>
                    </div>
                    <a href="mailto:rohiththeg05@gmail.com" className="flex items-center gap-2 hover:text-[#00FF4F] transition-colors">
                        <Mail className="w-4 h-4 text-[#00FF4F]" />
                        <span>rohiththeg05@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-2 hover:text-[#00FF4F] transition-colors cursor-default">
                        <MapPin className="w-4 h-4 text-[#00FF4F]" />
                        <span>Chennai, Tamil Nadu</span>
                    </div>
                </div>
            </header>

            {/* Summary */}
            <section className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-orbitron">
                    <span className="text-[#00FF4F]">//</span> SUMMARY
                </h3>
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6 rounded-sm text-lg leading-relaxed border-l-4 border-l-[#00FF4F] font-mono">
                    <p>
                        Passionate and creative 4th-year AIML student with a strong interest in machine learning and UX design. Skilled in designing intuitive user experiences. Experienced in organizing events around the city through part-time work, showcasing strong project management and teamwork abilities. Always eager to learn and apply innovative ideas in technology and design.
                    </p>
                </div>
            </section>

            {/* Education */}
            <section className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-orbitron">
                    <span className="text-[#00FF4F]">//</span> EDUCATION
                </h3>
                <div className="relative border-l border-neutral-800 ml-3 pl-8 pb-4">
                    <div className="absolute -left-[5px] top-0 w-3 h-3 bg-[#00FF4F] rounded-full shadow-[0_0_10px_#00FF4F]"></div>
                    <div className="bg-neutral-900/50 backdrop-blur-sm p-6 border border-neutral-800 hover:border-[#00FF4F]/50 transition-colors">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 className="text-xl font-bold text-white font-orbitron">Sri Ramachandra Institute of Higher Education and Research</h4>
                            <span className="text-[#00FF4F] font-mono text-sm bg-[#00FF4F]/10 px-2 py-1 rounded mt-2 md:mt-0 inline-block">Chennai, Tamil Nadu</span>
                        </div>
                        <div className="text-lg text-slate-300 mb-2 font-mono">B.Tech Computer Engineering with AI/ML specialization</div>
                        <div className="flex items-center gap-4 text-sm font-mono text-slate-500">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Graduating 06/2026</span>
                            <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" /> CGPA: 7.45</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-orbitron">
                    <span className="text-[#00FF4F]">//</span> EXPERIENCE
                </h3>
                <div className="space-y-8 border-l border-neutral-800 ml-3">
                    
                    {/* Job 1 */}
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 w-3 h-3 bg-neutral-700 rounded-full border border-[#00FF4F]"></div>
                        <div className="bg-neutral-900/50 backdrop-blur-sm p-6 border border-neutral-800 hover:border-[#00FF4F]/50 transition-colors group">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-[#00FF4F] transition-colors font-orbitron">Undergraduate Internship</h4>
                                    <div className="text-slate-400 font-mono">Sri Ramachandra Institute of Higher Education and Research</div>
                                </div>
                                <span className="text-xs font-mono text-slate-500 mt-2 md:mt-0 bg-neutral-800 px-2 py-1">08/2024 - 10/2024</span>
                            </div>
                            <h5 className="text-[#00FF4F] font-mono text-sm mb-4 border-b border-[#00FF4F]/20 inline-block pb-1 font-bold">PROJECT: 2D TO 3D ARCHITECTURAL MODELING</h5>
                            <ul className="list-disc list-inside space-y-2 text-slate-300 marker:text-[#00FF4F] font-mono text-sm leading-relaxed">
                                <li>Converted 2D architectural diagrams into fully developed 3D house models using machine learning techniques.</li>
                                <li>Applied ML methods for data preprocessing to clean and structure architectural data.</li>
                                <li>Utilized ML-based labeling for accurate identification of architectural components.</li>
                                <li>Implemented data visualization and plotting to enhance model accuracy and insights.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Job 2 */}
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 w-3 h-3 bg-neutral-700 rounded-full border border-[#00FF4F]"></div>
                        <div className="bg-neutral-900/50 backdrop-blur-sm p-6 border border-neutral-800 hover:border-[#00FF4F]/50 transition-colors group">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-[#00FF4F] transition-colors font-orbitron">Undergraduate Internship</h4>
                                    <div className="text-slate-400 font-mono">Sri Ramachandra Institute of Higher Education and Research</div>
                                </div>
                                <span className="text-xs font-mono text-slate-500 mt-2 md:mt-0 bg-neutral-800 px-2 py-1">03/2024 - 04/2024</span>
                            </div>
                            <h5 className="text-[#00FF4F] font-mono text-sm mb-4 border-b border-[#00FF4F]/20 inline-block pb-1 font-bold">PROJECT: FLEET MANAGEMENT APPLICATION</h5>
                            <ul className="list-disc list-inside space-y-2 text-slate-300 marker:text-[#00FF4F] font-mono text-sm leading-relaxed">
                                <li>Built a truck fleet management application that used the Markov Decision Process to reward high-performing drivers and optimize load assignments.</li>
                                <li>Implemented map functionality to determine the shortest routes between locations.</li>
                                <li>Developed the complete frontend for the application, ensuring a seamless user experience.</li>
                                <li>Implemented a driver search bar for efficient driver lookup.</li>
                                <li>Designed and built a driver dashboard for monitoring performance and assigned loads.</li>
                                <li>Created a driver earnings dashboard to track rewards and earnings.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Job 3 */}
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 w-3 h-3 bg-neutral-700 rounded-full border border-[#00FF4F]"></div>
                        <div className="bg-neutral-900/50 backdrop-blur-sm p-6 border border-neutral-800 hover:border-[#00FF4F]/50 transition-colors group">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-[#00FF4F] transition-colors font-orbitron">Undergraduate Instructional Assistant</h4>
                                    <div className="text-slate-400 font-mono">Sri Ramachandra Institute of Higher Education and Research</div>
                                </div>
                                <span className="text-xs font-mono text-slate-500 mt-2 md:mt-0 bg-neutral-800 px-2 py-1">05/2023 - 07/2023</span>
                            </div>
                            <h5 className="text-[#00FF4F] font-mono text-sm mb-4 border-b border-[#00FF4F]/20 inline-block pb-1 font-bold">PROJECT: 2-PLAYER WEB GAME</h5>
                            <ul className="list-disc list-inside space-y-2 text-slate-300 marker:text-[#00FF4F] font-mono text-sm leading-relaxed">
                                <li>Developed a web-based multiplayer tag game using HTML, JavaScript.</li>
                                <li>Managed static screens, ensuring a smooth and responsive UI.</li>
                                <li>Implemented transition logic for seamless navigation between game screens.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* Skills & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section>
                     <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-orbitron">
                        <span className="text-[#00FF4F]">//</span> SKILLS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'Machine Learning', 'UX Design', 'Application Development', 'Communication skills'].map((skill) => (
                            <span key={skill} className="px-3 py-2 bg-neutral-800 border border-neutral-700 text-[#00FF4F] font-mono text-sm hover:bg-[#00FF4F]/10 hover:border-[#00FF4F] transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-orbitron">
                        <span className="text-[#00FF4F]">//</span> LANGUAGES
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['English', 'Tamil'].map((lang) => (
                            <div key={lang} className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-slate-300 font-mono hover:border-[#00FF4F]/50 transition-colors cursor-default">
                                <LangIcon className="w-4 h-4 text-slate-500" />
                                {lang}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            
            {/* Download Button */}
            <div className="mt-16 text-center print:hidden">
                <CyberButton 
                    onClick={() => window.open('https://drive.google.com/file/d/1IvguHnsr7kuK67sz-jBu_0CR7YJWtsNI/view?usp=sharing', '_blank')} 
                    variant="primary" 
                    className="w-full md:w-auto flex items-center justify-center gap-2 mx-auto"
                >
                    <Download className="w-5 h-5" />
                    DOWNLOAD_FULL_DOSSIER
                </CyberButton>
            </div>
        </div>
    </div>
  );
};