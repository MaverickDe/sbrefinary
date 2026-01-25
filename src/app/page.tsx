
'use client';


import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Droplets, Factory, Zap, 
  ChevronDown, ChevronLeft, ChevronRight,
  ArrowUpRight, Menu, MapPin, Activity, 
  Settings, Award, Scale, Beaker
} from 'lucide-react';

const heroSlides = [
  {
    title: "Global Energy Security",
    desc: "Deploying high-efficiency distillation architectures to stabilize global supply chains through 2030.",
    img: "https://images.unsplash.com/photo-1544380904-c686aad2fc40?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Molecular Precision",
    desc: "Utilizing AI-driven catalytic cracking to maximize yield while minimizing carbon intensity per barrel.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "The Hydrogen Pivot",
    desc: "Retrofitting integrated complexes for industrial-scale blue hydrogen production and sequestration.",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function EnterpriseRefinery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* --- TOP MARKET TICKER --- */}
      <div className="bg-slate-950 text-[10px] text-slate-400 font-bold uppercase tracking-widest py-2 px-10 flex justify-between border-b border-white/5">
        <div className="flex gap-8">
          <span className="flex items-center gap-2"><Activity size={12} className="text-blue-500" /> Brent: $84.12 <span className="text-emerald-500">+0.8%</span></span>
          <span className="flex items-center gap-2 border-l border-white/10 pl-8"><Activity size={12} className="text-blue-500" /> WTI: $79.45 <span className="text-rose-500">-0.2%</span></span>
        </div>
        <div className="hidden md:block">Asset Monitoring: All Systems Nominal [04:22 UTC]</div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-10 h-24 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-2">
              <Factory size={28} className="text-slate-950" />
              <span className="text-2xl font-black tracking-tighter uppercase">Core<span className="text-blue-700">Refinery</span></span>
            </div>
            
            <div className="hidden xl:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <a href="#" className="hover:text-blue-700 transition">Infrastructure</a>
              <a href="#" className="hover:text-blue-700 transition">Logistics</a>
              <a href="#" className="hover:text-blue-700 transition">ESG Strategy</a>
              <a href="#" className="hover:text-blue-700 transition">Investor Relations</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Polish/Russian Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-[10px] font-black uppercase bg-slate-100 px-5 py-2.5 rounded hover:bg-slate-200 transition"
              >
                <Globe size={14} /> {language === 'EN' ? 'English' : language === 'PL' ? 'Polski' : 'Русский'} <ChevronDown size={14} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 shadow-2xl rounded-sm z-[60]">
                  {[
                    { code: 'EN', label: 'English' },
                    { code: 'PL', label: 'Polski' },
                    { code: 'RU', label: 'Русский' }
                  ].map((lang) => (
                    <button 
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                      className="w-full text-left px-5 py-3 text-xs font-bold hover:bg-blue-50 transition border-b border-slate-50 last:border-0"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SLIDER (LANDSCAPE) --- */}
      <section className="relative h-[85vh] min-h-[700px] bg-slate-900 overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.img} className="w-full h-full object-cover brightness-[0.4]" alt={slide.title} />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1800px] mx-auto px-10 w-full">
                <div className="max-w-4xl">
                  <div className="w-20 h-1 bg-blue-600 mb-8" />
                  <h1 className="text-6xl md:text-8xl font-light text-white leading-tight mb-8">
                    {slide.title.split(' ')[0]} <span className="font-bold">{slide.title.split(' ')[1]}</span>
                  </h1>
                  <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-12">
                    {slide.desc}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 font-bold uppercase tracking-widest text-[10px] transition-all">
                      Asset Directory
                    </button>
                    <button className="border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition">
                      Technical Papers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Slider Controls */}
        <div className="absolute bottom-12 right-12 flex gap-4">
          <button onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length-1 : currentSlide-1)} className="p-4 border border-white/20 text-white hover:bg-white/10 rounded-full transition"><ChevronLeft size={20}/></button>
          <button onClick={() => setCurrentSlide(currentSlide === heroSlides.length-1 ? 0 : currentSlide+1)} className="p-4 border border-white/20 text-white hover:bg-white/10 rounded-full transition"><ChevronRight size={20}/></button>
        </div>
      </section>

      {/* --- EXECUTIVE WRITE-UP SECTION --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-700 mb-6">Strategic Overview</h2>
              <h3 className="text-4xl font-bold text-slate-950 leading-tight mb-10">
                Pivoting the Global Hydrocarbon Chain Toward Carbon-Neutrality.
              </h3>
              <div className="space-y-6 text-slate-600 leading-loose">
                <p>
                  The modern refinery is no longer a static asset; it is a dynamic molecular laboratory. At CoreRefinery, we are pioneering the integration of **Carbon Capture, Utilization, and Storage (CCUS)** directly into our fluid catalytic cracking units. 
                </p>
                <p>
                  By 2026, our primary Singapore hub will achieve a 30% reduction in net emissions through the application of proprietary amine-based solvent scrubbing. This represents the first step in our "Blue Core" initiative—rethinking energy processing from the atom up.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Settings />, title: "Technical Resilience", text: "Predictive maintenance protocols utilizing vibration analysis and thermal imaging." },
                { icon: <Scale />, title: "Market Compliance", text: "Strict adherence to IMO 2030 and European RED III sustainability mandates." },
                { icon: <Beaker />, title: "Distillate Purity", text: "Delivering ultra-low sulfur diesel (ULSD) and high-octane aviation fuels." },
                { icon: <Award />, title: "Safety Record", text: "Maintaining a TRIR below 0.05 across all offshore and terminal operations." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-slate-200 shadow-sm hover:border-blue-300 transition group">
                  <div className="text-blue-700 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- HORIZONTAL INSIGHTS (BLOGS) --- */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Intelligence & Market Insights</h2>
              <p className="text-slate-400 mt-2 font-medium">Strategic technical analysis for the global energy sector.</p>
            </div>
            <button className="text-xs font-bold uppercase border-b-2 border-slate-900 pb-2 flex items-center gap-2">
              All Reports <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                tag: "White Paper",
                title: "Optimizing Thermal Efficiency in Heavy Distillate Columns",
                date: "25 Jan 2026",
                img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800"
              },
              {
                tag: "Market Analysis",
                title: "European Energy Demand: 2026-2030 Outlook Projections",
                date: "12 Jan 2026",
                img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800"
              },
              {
                tag: "Safety Study",
                title: "Next-Gen PPE: Integrating Biometric Monitoring for Personnel",
                date: "02 Jan 2026",
                img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
              }
            ].map((blog, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-8 border border-slate-100">
                  <img src={blog.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={blog.title} />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">{blog.tag}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{blog.date}</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-blue-700 transition">
                  {blog.title}
                </h3>
                <p className="text-slate-500 mt-4 text-sm leading-relaxed line-clamp-2">
                  An in-depth study into the molecular kinetics of heavy crude processing and thermal recapturing techniques...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REFINERY STATS / DATA SECTION --- */}
      <section className="bg-slate-950 py-24 text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-10 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <div className="text-5xl font-light mb-2">1.4M</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">BPD Total Capacity</div>
          </div>
          <div>
            <div className="text-5xl font-light mb-2">24/7</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Technical Support</div>
          </div>
          <div>
            <div className="text-5xl font-light mb-2">-42%</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Carbon Target 2030</div>
          </div>
          <div>
            <div className="text-5xl font-light mb-2">42</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Global Hubs</div>
          </div>
        </div>
      </section>

      {/* --- CORPORATE FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 pt-24 pb-12">
        <div className="max-w-[1800px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Factory size={32} className="text-slate-900" />
              <span className="text-2xl font-black tracking-tighter uppercase">Core<span className="text-blue-700">Refinery</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-loose max-w-sm mb-10">
              Leading the global energy transition with technical precision, operational excellence, and a commitment to long-term sustainability.
            </p>
            <div className="flex gap-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Follow</span>
              <a href="#" className="text-xs font-bold hover:text-blue-700">LinkedIn</a>
              <a href="#" className="text-xs font-bold hover:text-blue-700">Bloomberg</a>
              <a href="#" className="text-xs font-bold hover:text-blue-700">X-Terminal</a>
            </div>
          </div>
          
          {[
            { title: "Infrastructure", links: ["Integrated Hubs", "Terminal Logistics", "Pipeline Network", "R&D Labs"] },
            { title: "Compliance", links: ["Safety Records", "Environmental Audit", "Ethics Hotline", "Trade Policy"] },
            { title: "Investor Relations", links: ["Quarterly Reports", "SEC Filings", "Annual Meeting", "Stock Data"] }
          ].map((col, i) => (
            <div key={i}>
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-slate-900">{col.title}</h5>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                {col.links.map(link => (
                  <li key={link}><a href="#" className="hover:text-blue-700 transition">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[1800px] mx-auto px-10 mt-24 pt-8 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <span>© 2026 CoreRefinery International Group. Systems Verified.</span>
          <div className="flex gap-10">
            <a href="#" className="hover:text-slate-900 transition">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition">Legal</a>
            <a href="#" className="hover:text-slate-900 transition">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}