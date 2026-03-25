import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, Github, Instagram, Linkedin, Mail, Send, Terminal, Sparkles, Layout, Compass, ExternalLink } from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

// --- Types ---
type Page = "work" | "about" | "contact" | "stack";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  year?: string;
  featured?: boolean;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: "aura-financial",
    title: "Aura Financial",
    description: "Architected a high-performance trading engine scaling to 300% user growth without latency spikes.",
    category: "Fintech",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7bpcNWV2aRoNebY5UVj1oy0VZQ8FVH4EBH8D8xyoCOvI2czEaTmWQQWbMlO7oXul-ZnH3o8mDEh5_ZDil9Jy_2wKfTOZtZg-2CtT-JpbbV6j3empnXNJiw-JG4fXjlauAyf7VVDVVjfBIrE6DWAMdX1VVE7cVEavy24CIfKvwXCCRUY1wIhQa6sgj2HBp6JWpE6aXr836vRO7pKz0qNMANTuR5-AIZoG4IuHDH8f7YFxcaKfYvHlj_Uc6ZXs48cXM9swg134Ru0I",
    tags: ["300% Scale", "Trading Engine"],
    featured: true
  },
  {
    id: "luminal-studio",
    title: "Luminal Studio",
    description: "Implemented a custom CMS and rendering pipeline for 3D assets, reducing load times by 60%.",
    category: "Portfolio",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTsuIahTC_zSxDSOFZMYNbZO-jvBY0uNMymFCIINjzVjw-kzu_mZf5LWIpmUvGnClQH3J7UaHnYqRMJ2ogiSm2tCVQbSpsWcADGKaINX2IkBMdq4H2rrrB_xsZgeV_m8bjoXyXRvGNe6JJLLIp1Wb9QiX3XjAVDvUdu_UOh1wQGLmOMKXyKpkzTjJ2HBBDiqTZY5KAj4LY4C-VW35Qfvkkfd_MfpxECt3cIylCrs9liW-L821i60bYHGly3bmkDBqIshhRg7tJ8PQ",
    tags: ["60% Faster", "3D Pipeline"]
  },
  {
    id: "xenon-protocol",
    title: "Xenon Protocol",
    description: "Designed the core architecture for a decentralized storage network, handling 50TB+ of encrypted data.",
    category: "Web3",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo2jIMdH4i6vrppf_xO5RBJV0FNFkEVUz6EXJifA8m0JmEc7bFcSH9fdQpfETQHzO6CKxX_SOVN9Z-uz7zeVqYVk_cwIGj_vzSIWifKW4pIvR_tr_HfTPndxmIZ9grP6vF_-YAsrwpFuMYf6oC1our3SVaO1WuEn-60YFn6rOtp7eV1CmMXzPTjDVpMqx-VNqnsmYb46H5IYo4FKIb28bdGpkQ9XXfyWxVDsSNtZqcYVTu8ZFw-ithQc6IpbRidgRSceQkJauHlpQ",
    tags: ["50TB Data", "Encryption"]
  }
];

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => (
  <nav className="fixed top-0 w-full z-50 obsidian-glass border-b border-white/5">
    <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter text-white font-headline cursor-pointer flex items-center gap-2"
        onClick={() => setPage("work")}
      >
        <Terminal size={20} className="text-primary" />
        KISHJAN
      </motion.div>
      <div className="hidden md:flex gap-12 items-center font-headline font-medium tracking-tight">
        {(["work", "stack", "about", "contact"] as Page[]).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`capitalize transition-colors relative pb-1 text-sm tracking-widest ${
              currentPage === p ? "text-primary font-bold" : "text-gray-400 hover:text-white"
            }`}
          >
            {p === "stack" ? "Tech Stack" : p}
            {currentPage === p && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
              />
            )}
          </button>
        ))}
      </div>
      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPage("contact")}
        className="bg-primary text-black px-6 py-2.5 rounded-sm font-headline font-bold text-xs tracking-widest uppercase"
      >
        Consultation
      </motion.button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="w-full py-20 px-8 border-t border-white/5">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
      <div className="text-xs tracking-widest text-gray-500 mb-8 md:mb-0 uppercase font-headline">
        © 2024 KISHJAN — FRACTIONAL CTO & ARCHITECT
      </div>
      <div className="flex gap-10">
        {[
          { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/kishjan" },
          { name: "GitHub", icon: Github, url: "https://github.com/kishjan" },
          { name: "Instagram", icon: Instagram, url: "https://instagram.com/kishjan" }
        ].map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest text-gray-500 hover:text-primary transition-colors flex items-center gap-2 uppercase font-headline"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

const ProjectCard = ({ project, index }: { project: Project, index: number, key?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group cursor-pointer ${
        project.id === "aura-financial" ? "md:col-span-8" : 
        project.id === "luminal-studio" ? "md:col-start-6 md:col-span-7" :
        "md:col-span-8 md:col-start-2"
      }`}
    >
      <div className={`overflow-hidden rounded-sm bg-surface-container-high relative mb-8 border border-white/5 group-hover:border-primary/30 transition-colors ${
        project.id === "aura-financial" ? "aspect-[16/10]" : 
        project.id === "luminal-studio" ? "aspect-[16/11]" :
        "aspect-[16/9]"
      }`}>
        <img 
          src={project.image} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-lg">
          <h3 className="font-headline text-3xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6 font-sans">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-sm bg-surface-container-highest text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button className="flex items-center gap-2 font-headline font-bold mt-2 group/btn text-primary text-xs tracking-widest uppercase">
          Case Study
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

// --- Pages ---
const WorkPage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-32 pb-24">
    <section className="max-w-7xl mx-auto px-8 mb-40 min-h-[80vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl"
      >
        <span className="inline-block px-4 py-1 rounded-sm bg-surface-container-high text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-10 border border-primary/20">
          Fractional CTO & Architect
        </span>
        <h1 className="font-headline font-extrabold text-6xl md:text-9xl leading-[0.9] tracking-tighter mb-12">
          I build <span className="text-primary">Scalable Systems</span> for high-growth startups.
        </h1>
        <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed font-sans font-light">
          Engineering leadership focused on full-stack architecture, performance optimization, and technical strategy for modern innovators.
        </p>
        <div className="mt-16 flex flex-wrap gap-8 items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setPage("contact")}
            className="bg-primary text-black px-10 py-5 rounded-sm font-headline font-bold text-sm tracking-widest uppercase"
          >
            Book a Strategy Call
          </motion.button>
          <div className="flex gap-4 items-center">
            <div className="h-[1px] w-12 bg-outline-variant"></div>
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Trusted by 20+ Founders</span>
          </div>
        </div>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto px-8 pb-40">
      <div className="flex justify-between items-end mb-24">
        <h2 className="font-headline font-bold text-4xl tracking-tight">Outcome Proof</h2>
        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Selected Case Studies</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-40">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>

    <section className="bg-surface-container-low py-40 mb-40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline font-bold text-sm tracking-[0.3em] uppercase text-primary mb-20 text-center">Social De-Risking</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              quote: "Kishjan completely transformed our technical roadmap. We scaled from 10k to 100k users without a single minute of downtime.",
              author: "Sarah Chen",
              role: "CEO @ Aura Financial"
            },
            {
              quote: "The most precise architect I've worked with. His focus on performance and clean code is unmatched in the freelance market.",
              author: "Marcus Thorne",
              role: "Founder @ Xenon Protocol"
            },
            {
              quote: "A true strategic partner. Kishjan doesn't just write code; he builds the foundation for long-term business success.",
              author: "Elena Rossi",
              role: "CTO @ Luminal Studio"
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-high/50 backdrop-blur-sm p-10 rounded-sm border border-white/5 relative"
            >
              <div className="text-primary mb-6"><Sparkles size={24} /></div>
              <p className="text-on-surface-variant text-lg italic leading-relaxed mb-8 font-sans">"{t.quote}"</p>
              <div>
                <h4 className="font-headline font-bold text-white text-sm tracking-widest uppercase">{t.author}</h4>
                <p className="text-primary text-[10px] font-bold tracking-widest uppercase mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-8 py-40 text-center">
      <h2 className="font-headline font-extrabold text-5xl md:text-7xl mb-12 tracking-tighter">
        Ready to scale your <span className="text-primary italic">infrastructure</span>?
      </h2>
      <p className="text-on-surface-variant text-xl mb-16 max-w-2xl mx-auto font-sans font-light">
        I am currently accepting new technical leadership roles for Q3 2024. Let's discuss your architecture.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage("contact")}
          className="bg-primary text-black px-12 py-5 rounded-sm font-headline font-bold text-sm tracking-widest uppercase shadow-[0_0_40px_rgba(0,245,255,0.2)]"
        >
          Request Consultation
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage("stack")}
          className="border border-outline-variant hover:bg-surface-container-high px-12 py-5 rounded-sm font-headline font-bold text-sm tracking-widest uppercase transition-all"
        >
          View Technical Stack
        </motion.button>
      </div>
    </section>
  </div>
);

const TechStackPage = () => (
  <div className="pt-32 pb-24">
    <section className="max-w-7xl mx-auto px-8 mb-40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl"
      >
        <span className="inline-block px-4 py-1 rounded-sm bg-surface-container-high text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-10 border border-primary/20">
          The Architecture
        </span>
        <h1 className="font-headline font-extrabold text-6xl md:text-8xl tracking-tighter leading-[0.9] mb-12">
          Modern <span className="text-primary italic">Battle-Tested</span> Stack.
        </h1>
        <p className="text-on-surface-variant text-xl font-sans font-light leading-relaxed mb-16">
          I select tools based on scalability, developer velocity, and long-term maintainability. No hype, just performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {[
          {
            category: "Frontend",
            tools: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            icon: Layout
          },
          {
            category: "Backend",
            tools: ["Node.js / Go", "PostgreSQL", "Redis", "GraphQL / gRPC"],
            icon: Terminal
          },
          {
            category: "Infrastructure",
            tools: ["AWS / GCP", "Terraform", "Docker / K8s", "CI/CD Pipelines"],
            icon: Compass
          },
          {
            category: "Strategy",
            tools: ["System Audits", "Load Testing", "Security Hardening", "Cost Optimization"],
            icon: Sparkles
          }
        ].map((group, i) => (
          <div key={i} className="bg-surface-container-high p-10 border border-white/5 hover:border-primary/30 transition-all group">
            <group.icon className="text-primary mb-8 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-headline text-xl font-bold mb-6 tracking-tight uppercase">{group.category}</h3>
            <ul className="space-y-4">
              {group.tools.map(tool => (
                <li key={tool} className="text-on-surface-variant font-sans text-sm flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-24">
    <section className="max-w-7xl mx-auto px-8 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-7">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-12"
          >
            Technical <span className="text-primary italic">Leadership</span> for the modern web.
          </motion.h1>
          <div className="space-y-8 text-on-surface-variant text-xl font-sans font-light leading-relaxed max-w-2xl">
            <p>
              I am Kishjan, a Fractional CTO and Software Architect specialized in building high-performance, scalable digital infrastructure.
            </p>
            <p>
              With over a decade of experience in full-stack architecture, I help startups bridge the gap between visionary product ideas and robust, production-ready systems. My approach is rooted in technical precision and strategic outcomes.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-sm blur-2xl" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnsETtn0UdmZXM_SmoBoAEsM8VknU9G8Hcihf-P5sycYa6tFnyN-vDlslf7bPXD0Pa67W9dHDAJSIYcRcNGKHOVuOv1wWYNlocaz8MbDLgT31Y9noUMRbaL4Nueta1h1L892TAPGRCkSswNeOVMBdMuvHBUDV4x5PNKXFV-C_CMsukH4mvzGHwrzH0dcXUP690N5ITAKbVR94t1rTeBy7AkA5LYXRxPG08mXinHbSo5U_l9UQ4ENTDwhABJlB77dGBpnmZu3ylMWg" 
              alt="Portrait"
              referrerPolicy="no-referrer"
              className="relative rounded-sm w-full grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-8 mb-40">
      <h2 className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary mb-16 font-bold">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          {
            title: "System Architecture",
            desc: "Designing resilient, distributed systems that handle millions of requests with sub-second latency.",
            icon: Compass
          },
          {
            title: "Technical Strategy",
            desc: "Aligning technical roadmaps with business objectives to ensure sustainable growth and ROI.",
            icon: Sparkles
          },
          {
            title: "Full-Stack Engineering",
            desc: "Deep expertise in React, Node.js, and cloud infrastructure (AWS/GCP/Azure).",
            icon: Terminal
          }
        ].map((item, i) => (
          <div key={i} className="bg-surface-container-high p-12 border border-white/5 hover:border-primary/30 transition-all group">
            <item.icon className="text-primary mb-8 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
            <p className="text-on-surface-variant font-sans font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "Fractional CTO Engagement", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-[70vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8"
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
            <Send className="text-primary" size={40} />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter">Transmission <span className="text-primary italic">Received.</span></h1>
          <p className="text-on-surface-variant text-xl font-sans font-light max-w-md mx-auto">
            Your inquiry has been encrypted and sent to my private channel. Expect a response within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-primary text-[10px] font-bold tracking-widest uppercase hover:underline underline-offset-8"
          >
            Send another message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl font-headline font-extrabold tracking-tighter leading-[0.8]">
              Let's <span className="text-primary italic">Scale.</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-md leading-relaxed font-sans font-light">
              Ready to solve your most complex technical challenges? I'm currently vetting new partnerships for Q3 2024.
            </p>
          </div>
          <div className="space-y-10 pt-8">
            <div className="group cursor-pointer">
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Direct Channel</span>
              <a href="mailto:cto@kishjan.com" className="text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors duration-300 underline decoration-outline-variant underline-offset-8">
                cto@kishjan.com
              </a>
            </div>
            <div className="group cursor-pointer">
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Professional Network</span>
              <a href="https://linkedin.com/in/kishjan" target="_blank" rel="noopener noreferrer" className="text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                LinkedIn <ArrowUpRight size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-surface-container-high rounded-sm p-8 md:p-16 relative border border-white/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
          <form className="relative z-10 space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] ml-1">Identity</label>
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-surface-container-low border border-white/5 rounded-sm py-5 px-8 text-white placeholder:text-outline-variant focus:ring-1 focus:ring-primary transition-all font-sans"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] ml-1">Secure Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-surface-container-low border border-white/5 rounded-sm py-5 px-8 text-white placeholder:text-outline-variant focus:ring-1 focus:ring-primary transition-all font-sans"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] ml-1">Inquiry Type</label>
              <select 
                className="w-full bg-surface-container-low border border-white/5 rounded-sm py-5 px-8 text-white focus:ring-1 focus:ring-primary transition-all appearance-none font-sans"
                value={formState.subject}
                onChange={(e) => setFormState({...formState, subject: e.target.value})}
              >
                <option>Fractional CTO Engagement</option>
                <option>Full-Stack Architecture Design</option>
                <option>Performance & Scalability Audit</option>
                <option>Technical Team Leadership</option>
                <option>Cloud Infrastructure Migration</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] ml-1">Technical Vision</label>
              <textarea 
                rows={6}
                placeholder="Describe your current infrastructure challenges..."
                className="w-full bg-surface-container-low border border-white/5 rounded-sm py-5 px-8 text-white placeholder:text-outline-variant focus:ring-1 focus:ring-primary transition-all resize-none font-sans"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-black font-headline font-extrabold text-sm tracking-[0.2em] uppercase py-6 rounded-sm flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(0,245,255,0.1)]"
            >
              Initiate Contact <Send size={18} />
            </motion.button>
            <p className="text-center text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">
              Response latency: &lt; 24 Hours
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>("work");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen obsidian-gradient">
      <Navbar currentPage={page} setPage={setPage} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {page === "work" && <WorkPage setPage={setPage} />}
          {page === "stack" && <TechStackPage />}
          {page === "about" && <AboutPage />}
          {page === "contact" && <ContactPage />}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
