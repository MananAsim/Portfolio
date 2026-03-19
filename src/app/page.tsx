"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Download, Mail, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState("Homepage");

  const galleryImages: Record<string, string[]> = {
    "Homepage": ["/Homepage1.png", "/Homepage2.png"],
    "Client View": ["/Client1.png", "/Client2.png", "/Client3.png", "/Client4.png"],
    "Worker View": ["/worker.png"]
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tight text-gray-900">Manan Asim</a>

          <nav className="hidden md:flex gap-8 font-medium text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#featured" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex">
            <a href="/resume.pdf" download="Manan_Asim_Resume.pdf" className="flex items-center gap-2 text-sm font-semibold bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-sm">
              <Download size={16} /> Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg origin-top animate-fade-in">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 py-2 border-b border-gray-50">About</a>
            <a href="#featured" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 py-2 border-b border-gray-50">Work</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 py-2 border-b border-gray-50">Contact</a>
            <a href="/resume.pdf" download="Manan_Asim_Resume.pdf" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 font-semibold bg-gray-900 text-white px-4 py-3 rounded-lg mt-2 shadow-sm hover:-translate-y-0.5 transition-transform">
              <Download size={18} /> Download Resume
            </a>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO */}
      <section className="w-full max-w-[1200px] px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-start gap-6">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-gray-900">
              Helping users succeed with technology through clear communication and structured problem-solving.
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
              Final-year Computer Science student focused on Customer Success and Technical Support roles. I simplify complex systems and help users get real value from technology.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
              <a href="#featured" className="bg-accent text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-sm flex items-center justify-center">
                View My Work
              </a>
              <a href="#contact" className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-3.5 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5 transition-all shadow-sm flex items-center justify-center">
                Contact Me
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Customer Success & Technical Support roles
            </p>
          </FadeUp>
        </div>
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <FadeUp delay={0.2}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-gray-100 ring-1 ring-gray-100">
              <Image
                src="/profile.png"
                alt="Manan Asim"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VALUE PROPOSITION STRIP */}
      <section className="w-full bg-gray-900 py-12 border-y border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:justify-between text-gray-300 font-normal text-sm md:text-base tracking-wide">
            <span className="flex items-center gap-2 cursor-default hover:text-emerald-300 transition-colors duration-300"><span className="text-emerald-400">✔</span> Clear Communicator</span>
            <span className="flex items-center gap-2 cursor-default hover:text-emerald-300 transition-colors duration-300"><span className="text-emerald-400">✔</span> User-Focused Thinker</span>
            <span className="flex items-center gap-2 cursor-default hover:text-emerald-300 transition-colors duration-300"><span className="text-emerald-400">✔</span> Problem Solver</span>
            <span className="flex items-center gap-2 cursor-default hover:text-emerald-300 transition-colors duration-300"><span className="text-emerald-400">✔</span> Calm Under Pressure</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="w-full bg-gray-50 py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-[600px] mx-auto flex flex-col gap-10 relative z-10 text-left">
          <FadeUp>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 border-l-4 border-accent pl-4">About Me</h2>
          </FadeUp>
          <div className="text-lg text-gray-700 leading-relaxed font-normal space-y-6">
            <FadeUp delay={0.1}>
              <p>I’m a final-year Computer Science student focused on solving real user problems, not just writing code.</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p>I specialize in bridging the gap between technical systems and the people who use them — simplifying complexity through clear communication.</p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p>When users are confused or systems break, I stay structured, calm, and focused on resolving the root issue.</p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p>I’m currently targeting Customer Success and Technical Support roles where I can combine technical understanding with strong communication.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECT */}
      <section id="featured" className="w-full max-w-[1200px] px-6 py-32 mx-auto">
        <FadeUp>
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-2">Featured Project</h2>
            <h3 className="text-3xl font-bold text-gray-900">SahulatHub</h3>
          </div>
        </FadeUp>
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="flex-1 w-full flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <div className="flex gap-2 mb-2 overflow-x-auto pb-2 scrollbar-none">
                {Object.keys(galleryImages).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveGalleryTab(tab)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                      activeGalleryTab === tab 
                        ? "bg-gray-900 text-white shadow-md ring-2 ring-gray-900 ring-offset-2" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="relative w-full aspect-[4/3] max-h-[600px] bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm group">
                <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2 absolute top-0 w-full z-10 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 flex-1 flex">
                     <div className="bg-white/50 px-4 py-1 rounded-md text-xs font-medium text-gray-400 w-full max-w-xs truncate">
                       sahulathub.app/{activeGalleryTab.toLowerCase().replace(" ", "-")}
                     </div>
                  </div>
                </div>
                {/* Scrollable container for the images inside the fake browser window */}
                <div className="absolute inset-0 pt-10 overflow-y-auto overflow-x-hidden bg-gray-100 p-4 sm:p-6 custom-scrollbar">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeGalleryTab}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      {galleryImages[activeGalleryTab].map((src, idx) => (
                        <div key={idx} className="relative w-full rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white group/image">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={src} 
                            alt={`${activeGalleryTab} interface view ${idx + 1}`} 
                            className="w-full h-auto object-cover group-hover/image:scale-[1.01] transition-transform duration-500 ease-out" 
                            loading={idx === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="flex-1 flex flex-col gap-10">
            <FadeUp delay={0.2}>
              <div>
                <h4 className="font-bold text-gray-900 border-l-2 border-accent pl-3 text-lg">The Problem</h4>
                <p className="text-gray-600 mt-3 leading-relaxed font-medium">Non-technical users struggled to navigate complex service-booking platforms, leading to high drop-off rates and confusion.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div>
                <h4 className="font-bold text-gray-900 border-l-2 border-accent pl-3 text-lg">The Solution</h4>
                <p className="text-gray-600 mt-3 leading-relaxed font-medium">Architected and built a streamlined platform that removed technical friction, using clear progressive steps to guide users from intent to successful booking.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div>
                <h4 className="font-bold text-gray-900 border-l-2 border-accent pl-3 text-lg">Key Strengths</h4>
                <ul className="list-none text-gray-600 mt-3 space-y-2 font-medium">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> Designed for absolute clarity and ease-of-use.</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> Focused on reducing user confusion at every interaction point.</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">●</span> Structured intelligent workflows specifically for non-technical users.</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div>
                <h4 className="font-bold text-gray-900 border-l-2 border-accent pl-3 text-lg">My Role & Impact</h4>
                <p className="text-gray-600 mt-3 leading-relaxed font-medium">
                  Taking full ownership of the design and development, I made UX decisions that prioritized communication of ideas over technical complexity.
                </p>
                <p className="text-gray-900 mt-3 leading-relaxed font-semibold bg-gray-50 hover:bg-white p-4 rounded-lg border border-gray-200 transition-colors">
                  Reduced friction in user flow by simplifying multi-step processes into clear, guided actions.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-semibold border border-gray-200">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-semibold border border-gray-200">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-semibold border border-gray-200">MongoDB</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 4: SKILLS */}
      <section className="w-full bg-gray-50 py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-bold mb-16 text-center">Core Strengths</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp delay={0.1} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full group">
                <div className="w-14 h-14 bg-blue-50 text-accent rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">💬</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Communication</h3>
                <ul className="space-y-4 text-gray-600 font-medium">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Explaining complex technical concepts clearly</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Staying calm and clear when users are frustrated or confused</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Structured problem-solving under pressure</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full group">
                <div className="w-14 h-14 bg-blue-50 text-accent rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">🛠️</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Technical Support</h3>
                <ul className="space-y-4 text-gray-600 font-medium">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Debugging deeply and driving issue resolution</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Understanding complex multi-tier system flows</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Web App Foundations (React, Node.js)</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.3} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full group">
                <div className="w-14 h-14 bg-blue-50 text-accent rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Product Thinking</h3>
                <ul className="space-y-4 text-gray-600 font-medium">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Adopting a relentless user-first mindset</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Simplifying confusing or broken workflows</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span> Identifying unseen user pain points quickly</li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 5: CERTIFICATIONS */}
      <section className="w-full py-32 px-6 bg-white overflow-hidden flex flex-col items-center">
        <div className="max-w-[1200px] w-full mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp delay={0.1} className="w-full">
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 overflow-hidden flex flex-col h-full group cursor-default text-left">
                <div className="h-48 w-full relative bg-gray-50 border-b border-gray-100 overflow-hidden p-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                    <Image src="/Cert1.png" alt="BS Computer Science" fill className="object-contain group-hover:scale-[1.03] transition-transform duration-500" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Meta Certification</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">Frontend Developer Professional Certificate</h3>
                  <p className="text-gray-600 font-medium text-sm">December 2025</p>
                </div>
              </motion.div>
            </FadeUp>

            <FadeUp delay={0.2} className="w-full">
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 overflow-hidden flex flex-col h-full group cursor-default text-left">
                <div className="h-48 w-full relative bg-gray-50 border-b border-gray-100 overflow-hidden p-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                    <Image src="/Cert2.png" alt="SahulatHub Project" fill className="object-contain group-hover:scale-[1.03] transition-transform duration-500" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Digiskills</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">Communication & Soft Skills</h3>
                  <p className="text-gray-600 font-medium text-sm">Endorsement for Professional Communication </p>
                </div>
              </motion.div>
            </FadeUp>

            <FadeUp delay={0.3} className="w-full">
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 overflow-hidden flex flex-col h-full group cursor-default text-left">
                <div className="h-48 w-full relative bg-gray-50 border-b border-gray-100 overflow-hidden p-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                    <Image src="/Cert3.png" alt="Technical Troubleshooting" fill className="object-contain group-hover:scale-[1.03] transition-transform duration-500" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Certification</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">Business Intelligence & Analytics</h3>
                </div>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT / CTA */}
      <section id="contact" className="w-full bg-gray-50 px-6 py-32 text-center flex flex-col items-center border-t border-gray-100">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">Let’s Solve Real User Problems Together</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed font-medium">
            I’m actively looking for Customer Success and Technical Support roles where I can contribute to user satisfaction and grow professionally.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-md mx-auto sm:max-w-none">
            <a href="mailto:manansama17@gmail.com" className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center gap-2">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/mananasim/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center gap-2">
              <ExternalLink size={20} /> View LinkedIn
            </a>
            <a href="/resume.pdf" download="Manan_Asim_Resume.pdf" className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:border-gray-300 hover:bg-white hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center gap-2">
              <Download size={20} /> Download Resume
            </a>
          </div>
        </FadeUp>
      </section>

      {/* SECTION 7: FOOTER */}
      <footer className="w-full py-10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-6 gap-4 font-medium border-t border-gray-200 bg-white">
        <p>© {new Date().getFullYear()} Manan Asim. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/mananasim/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition font-semibold">LinkedIn</a>
          <a href="mailto:manansama17@gmail.com" className="hover:text-gray-900 transition font-semibold">Email</a>
        </div>
      </footer>
    </div>
  );
}
