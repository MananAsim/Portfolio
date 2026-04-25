"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, Download, Mail, ExternalLink, Workflow, Code, Database, Bot, Terminal, FileJson, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState("Homepage");
  const [activeSupportTab, setActiveSupportTab] = useState("Authentication Flow");

  const sahulatImages: Record<string, string[]> = {
    "Homepage": ["/Homepage1.png", "/Homepage2.png"],
    "Client View": ["/Client1.png", "/Client2.png", "/Client3.png", "/Client4.png"],
    "Worker View": ["/worker.png"]
  };

  const supportImages: Record<string, string[]> = {
    "Authentication Flow": ["/SS1.png"],
    "Main Dashboard": ["/SS2.png"]
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative bg-black text-white selection:bg-white/20 selection:text-white min-h-screen">
      
      {/* Absolute Noise Overlay for SOTA Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 z-50 w-full glass-panel border-x-0 border-t-0 transition-all">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-sm font-black text-sm">M</div>
            Manan Asim
          </a>

          <nav className="hidden md:flex gap-8 font-medium text-sm text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex">
            <a href="/AI_Resume.pdf" download="Manan_Asim_AI_Resume.pdf" className="flex items-center gap-2 text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-all">
              <Download size={14} /> Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 text-neutral-400 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full glass-panel border-b border-neutral-800 px-6 py-4 flex flex-col gap-4 origin-top animate-fade-in">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-neutral-400 py-2 border-b border-neutral-900">About</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-neutral-400 py-2 border-b border-neutral-900">Skills</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-neutral-400 py-2 border-b border-neutral-900">Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-neutral-400 py-2 border-b border-neutral-900">Contact</a>
            <a href="/AI_Resume.pdf" download="Manan_Asim_AI_Resume.pdf" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 font-semibold bg-white text-black px-4 py-3 rounded-md mt-2">
              <Download size={16} /> Download Resume
            </a>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO */}
      <section className="w-full max-w-[1200px] px-6 pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        <div className="flex-1 flex flex-col items-start gap-8">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/50 text-neutral-300 text-xs font-mono tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              SYSTEMS ARCHITECT
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tighter text-white mt-4">
              AI Automation <br/><span className="text-neutral-500">& Systems Builder</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl font-normal">
              <strong className="text-white font-medium">NO-CODE / LOW-CODE & API INTEGRATIONS</strong>
              <br/><br/>
              I architect end-to-end automated workflows, integrate complex APIs, and develop AI-driven systems to seamlessly connect isolated services and drastically reduce manual effort.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <a href="#projects" className="bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-sm">
                Explore Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="bg-transparent border border-neutral-800 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2 text-sm">
                Get in Touch
              </a>
            </div>
          </FadeUp>
        </div>
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <FadeUp delay={0.3}>
            <TiltCard>
              <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-3xl p-1 bg-gradient-to-b from-neutral-800 to-black shadow-2xl">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-black relative border border-neutral-900">
                  <Image
                    src="/profile.png"
                    alt="Manan Asim"
                    fill
                    className="object-cover opacity-90 filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
              </div>
            </TiltCard>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 2: SKILLS & FOUNDATIONS */}
      <section id="skills" className="w-full border-y border-neutral-900 py-32 px-6 bg-neutral-950/30 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp>
            <div className="mb-20 flex flex-col items-center text-center">
              <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-4">Technical Arsenal</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Skills & Foundations</h3>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.1} className="h-full">
              <TiltCard className="h-full">
                <div className="glass-panel p-8 rounded-3xl h-full flex flex-col gap-6 group hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 border border-neutral-800 bg-neutral-900 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Workflow size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Automation & Systems</h3>
                  <ul className="space-y-4 text-neutral-400 text-sm mt-auto">
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">01</span>
                      <span>Workflow Automation (n8n, Zapier)</span>
                    </li>
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">02</span>
                      <span>API Integrations (REST APIs, Webhooks)</span>
                    </li>
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">03</span>
                      <span>CRM & DB Sync (Zendesk, GoHighLevel)</span>
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </FadeUp>

            <FadeUp delay={0.2} className="h-full">
              <TiltCard className="h-full">
                <div className="glass-panel p-8 rounded-3xl h-full flex flex-col gap-6 group hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 border border-neutral-800 bg-neutral-900 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Bot size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">AI & Tools</h3>
                  <ul className="space-y-4 text-neutral-400 text-sm mt-auto">
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">01</span>
                      <span>Prompt Engineering</span>
                    </li>
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">02</span>
                      <span>OpenAI / ChatGPT / Claude</span>
                    </li>
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">03</span>
                      <span>AI Development (Antigravity)</span>
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </FadeUp>

            <FadeUp delay={0.3} className="h-full">
              <TiltCard className="h-full">
                <div className="glass-panel p-8 rounded-3xl h-full flex flex-col gap-6 group hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 border border-neutral-800 bg-neutral-900 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Terminal size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Technical Foundations</h3>
                  <ul className="space-y-4 text-neutral-400 text-sm mt-auto">
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">01</span>
                      <span>Python (Basic)</span>
                    </li>
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">02</span>
                      <span>JavaScript (Basic)</span>
                    </li>
                    <li className="flex items-start gap-3 border-t border-neutral-900 pt-4">
                      <span className="font-mono text-xs text-neutral-600 mt-0.5">03</span>
                      <span className="flex items-center gap-2">JSON Handling</span>
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS & EXPERIENCE */}
      <section id="projects" className="w-full max-w-[1200px] px-6 py-40 mx-auto relative z-10">
        <FadeUp>
          <div className="mb-32 text-center">
            <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Projects & Experience</h3>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-40">
          
          {/* PROJECT 1: AI Lead-to-Conversion Automation System */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 w-full order-2 lg:order-1">
              <FadeUp delay={0.1}>
                <TiltCard>
                  <div className="relative w-full aspect-square md:aspect-[4/3] bg-neutral-950 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl flex items-center justify-center p-8 group">
                    {/* Minimalist Automation Graphic */}
                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
                       <div className="flex items-center gap-0">
                          <div className="w-16 h-16 rounded-2xl border border-neutral-800 bg-black flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500 z-10"><FileJson size={24} className="text-white"/></div>
                          <div className="w-8 h-[1px] bg-neutral-700"></div>
                          <div className="w-20 h-20 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center shadow-xl z-20"><Bot size={32} className="text-white"/></div>
                          <div className="w-8 h-[1px] bg-neutral-700"></div>
                          <div className="w-16 h-16 rounded-2xl border border-neutral-800 bg-black flex items-center justify-center shadow-lg transform rotate-6 group-hover:rotate-0 transition-all duration-500 z-10"><Database size={24} className="text-white"/></div>
                       </div>
                       <div className="text-center font-mono text-xs text-neutral-500 tracking-widest uppercase mt-4">
                          Webhook → OpenAI Parse → Data Sync → Auto-Reply
                       </div>
                    </div>
                  </div>
                </TiltCard>
              </FadeUp>
            </div>

            <div className="flex-1 flex flex-col gap-8 order-1 lg:order-2">
              <FadeUp delay={0.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 text-[10px] font-mono tracking-widest mb-4 uppercase">
                  End-to-End Workflow Automation
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">AI Lead-to-Conversion<br/>Automation System</h3>
              </FadeUp>

              <FadeUp delay={0.3}>
                <ul className="space-y-6 text-neutral-400 text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">01.</span>
                    <span className="leading-relaxed">Built an automated pipeline to capture, qualify, and respond to inbound leads using AI.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">02.</span>
                    <span className="leading-relaxed">Integrated lead forms with Airtable and Google Sheets, triggering real-time workflows via automation tools.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">03.</span>
                    <span className="leading-relaxed">Used OpenAI (ChatGPT API) to classify inbound lead intent and generate personalized responses instantly.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">04.</span>
                    <span className="leading-relaxed">Automated email and WhatsApp responses alongside internal notifications to aggressively reduce manual follow-ups.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">05.</span>
                    <span className="leading-relaxed">Connected multiple isolated services seamlessly utilizing APIs, webhooks, and scalable no-code platforms.</span>
                  </li>
                </ul>
              </FadeUp>
            </div>
          </div>

          {/* PROJECT 2: SupportOS */}
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 flex flex-col gap-8">
              <FadeUp delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 text-[10px] font-mono tracking-widest mb-4 uppercase">
                  Full-Stack AI Prototype
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">SupportOS: Automated<br/>Ticket Resolution</h3>
              </FadeUp>

              <FadeUp delay={0.2}>
                <ul className="space-y-6 text-neutral-400 text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">01.</span>
                    <span className="leading-relaxed">Built a live SaaS simulation using modern AI-assisted coding environments (Cursor) showcasing intelligent issue tracking and triage.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">02.</span>
                    <span className="leading-relaxed">Implemented AI reasoning models to automate initial responses and coordinate async communication between mock end-users and internal support.</span>
                  </li>
                </ul>
              </FadeUp>

              <FadeUp delay={0.3}>
                <a href="https://supportos.vercel.app/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors w-fit mt-4">
                  Visit Application <ExternalLink size={16} />
                </a>
              </FadeUp>
            </div>

            <div className="flex-1 w-full flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <div className="flex gap-2 mb-2">
                  {Object.keys(supportImages).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveSupportTab(tab)}
                      className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                        activeSupportTab === tab 
                          ? "bg-white text-black" 
                          : "bg-transparent border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <TiltCard>
                  <div className="relative w-full rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-950 shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSupportTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="w-full flex justify-center bg-black/50 p-2 md:p-6"
                      >
                        {supportImages[activeSupportTab].map((src, idx) => (
                          <div key={idx} className="relative w-full rounded-xl overflow-hidden border border-neutral-800 bg-black">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                              src={src} 
                              alt={`SupportOS ${activeSupportTab}`} 
                              className="w-full h-auto object-contain block" 
                              loading={idx === 0 ? "eager" : "lazy"}
                            />
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </TiltCard>
              </FadeUp>
            </div>
          </div>

          {/* PROJECT 3: SahulatHub */}
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 w-full flex flex-col gap-6 order-2 lg:order-1">
              <FadeUp delay={0.1}>
                <div className="flex gap-2 mb-2 overflow-x-auto pb-2 scrollbar-none">
                  {Object.keys(sahulatImages).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveGalleryTab(tab)}
                      className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all ${
                        activeGalleryTab === tab 
                          ? "bg-white text-black" 
                          : "bg-transparent border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <TiltCard>
                  <div className="relative w-full rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-950 shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeGalleryTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="w-full flex flex-col gap-6 p-2 md:p-6 bg-black/50 max-h-[600px] overflow-y-auto custom-scrollbar"
                      >
                        {sahulatImages[activeGalleryTab].map((src, idx) => (
                          <div key={idx} className="relative w-full rounded-xl overflow-hidden border border-neutral-800 bg-black shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                              src={src} 
                              alt={`${activeGalleryTab} view ${idx + 1}`} 
                              className="w-full h-auto object-contain block" 
                              loading={idx === 0 ? "eager" : "lazy"}
                            />
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </TiltCard>
              </FadeUp>
            </div>

            <div className="flex-1 flex flex-col gap-8 order-1 lg:order-2">
              <FadeUp delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 text-[10px] font-mono tracking-widest mb-4 uppercase">
                  System Integration & Webhooks
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">SahulatHub — MVP<br/>Platform Architecture</h3>
              </FadeUp>

              <FadeUp delay={0.2}>
                <ul className="space-y-6 text-neutral-400 text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">01.</span>
                    <span className="leading-relaxed">Designed data architectures that integrate multiple marketplace services alongside a custom API layer.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">02.</span>
                    <span className="leading-relaxed">Coordinated back-end background jobs and database migrations (PostgreSQL) ensuring robust data consistency.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">03.</span>
                    <span className="leading-relaxed">Delivered rapid MVP iterations utilizing AI-assisted generation tools to drastically cut development time without sacrificing reliability.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white font-mono text-xs mt-1">04.</span>
                    <span className="leading-relaxed">Resolved deployment blockers efficiently by parsing complex system documentation independently.</span>
                  </li>
                </ul>
              </FadeUp>
              
              <FadeUp delay={0.3}>
                <a href="https://sahulat-hub-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors w-fit mt-4">
                  Visit Application <ExternalLink size={16} />
                </a>
              </FadeUp>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: EDUCATION */}
      <section className="w-full border-y border-neutral-900 py-32 px-6 bg-neutral-950/30 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp delay={0.1}>
            <TiltCard>
               <div className="glass-panel p-10 md:p-16 rounded-3xl text-left w-full border border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                 <div>
                   <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-4">Academic Background</h2>
                   <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">BS Computer Science</h3>
                   <p className="text-neutral-400 font-medium mt-3 text-lg">University of Management & Technology (UMT), Lahore</p>
                 </div>
                 <div className="text-white font-mono text-sm border border-neutral-800 bg-neutral-900 px-6 py-3 rounded-full">
                   2022 – 2026
                 </div>
               </div>
            </TiltCard>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 5: CONTACT / CTA */}
      <section id="contact" className="w-full px-6 py-40 text-center flex flex-col items-center relative z-10">
        <FadeUp>
          <div className="w-16 h-16 border border-neutral-800 bg-neutral-900 rounded-2xl flex items-center justify-center mb-8 mx-auto">
             <Mail size={24} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Let’s Build the Next <br className="hidden md:block"/>Generation of Systems</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
            I’m actively looking for opportunities where I can architect, automate, and build robust AI-driven systems.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto justify-center">
            <a href="mailto:manansama17@gmail.com" className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/mananasim/" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-neutral-800 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-neutral-900 transition-all flex items-center justify-center gap-2">
              LinkedIn Profile <ExternalLink size={16} />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* SECTION 6: FOOTER */}
      <footer className="w-full py-12 text-center text-neutral-600 text-xs font-mono tracking-widest uppercase flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-6 gap-6 border-t border-neutral-900 relative z-10">
        <p>© {new Date().getFullYear()} Manan Asim.</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <span className="text-neutral-500">Lahore, Pakistan</span>
          <a href="tel:+923006562793" className="hover:text-white transition">+92 300 6562793</a>
          <a href="mailto:manansama17@gmail.com" className="hover:text-white transition">manansama17@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
