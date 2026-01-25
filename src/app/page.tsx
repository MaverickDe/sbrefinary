
'use client';
import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Droplets, Factory, Zap, 
  ChevronDown, ChevronLeft, ChevronRight,
  ArrowRight, Menu, Mail, MapPin, Newspaper,
  Activity, BarChart3
} from 'lucide-react';

const slides = [
  {
    title: "Global Energy Security",
    sub: "Optimizing supply chains for a resilient future.",
    img: "https://images.unsplash.com/photo-1544380904-c686aad2fc40?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Net-Zero Integration",
    sub: "Leading the industry in carbon capture technology.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Technical Excellence",
    sub: "Precision refining with AI-driven safety protocols.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920",
  }
];

export default function RefineryLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- TOP NEWS TICKER --- */}
      <div className="bg-slate-900 text-slate-400 text-[10px] uppercase tracking-widest py-2 px-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex gap-6 overflow-hidden">
          <span className="flex items-center gap-1"><Activity size={10} /> Brent Crude: $82.40 (+0.4%)</span>
          <span className="flex items-center gap-1"><Activity size={10} /> WTI: $77.15 (-0.1%)</span>
          <span className="flex items-center gap-1 hidden md:flex"><Activity size={10} /> Natural Gas: $2.45 (+1.2%)</span>
        </div>
        <div className="hidden sm:block">Investor Portal: Logged Out</div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Factory size={28} className="text-slate-900" />
            <span className="text-xl font-bold tracking-tighter text-slate-900">CORE<span className="text-blue-600">REFINERY</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider text-slate-600">
            <a href="#" className="hover:text-blue-600 transition">Our Facilities</a>
            <a href="#" className="hover:text-blue-600 transition">ESG & Safety</a>
            <a href="#" className="hover:text-blue-600 transition">Technology</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
            
            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-1 hover:text-blue-600 transition">
                <Globe size={16} /> {language} <ChevronDown size={14} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-4 w-32 bg-white border border-slate-200 shadow-xl rounded-md">
                  {['EN', 'FR', 'DE'].map(l => (
                    <button key={l} onClick={() => {setLanguage(l); setIsLangOpen(false);}} className="block w-full text-left px-4 py-2 hover:bg-slate-50 text-xs">{l}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className="lg:hidden"><Menu /></button>
        </div>
      </nav>

      {/* --- HERO SLIDER --- */}
      <section className="relative h-[650px] bg-slate-900 overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="max-w-4xl px-6">
                <h2 className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">Industrial Excellence</h2>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{slide.title}</h1>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">{slide.sub}</p>
                <div className="flex justify-center gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-bold transition">View Operations</button>
                  <button className="border border-white/40 text-white hover:bg-white/10 px-8 py-3 font-bold transition">Sustainability</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Slider Controls */}
        <button onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length-1 : currentSlide-1)} className="absolute left-6 top-1/2 -translate-y-1/2 p-2 border border-white/20 text-white hover:bg-white/10 rounded-full transition"><ChevronLeft /></button>
        <button onClick={() => setCurrentSlide(currentSlide === slides.length-1 ? 0 : currentSlide+1)} className="absolute right-6 top-1/2 -translate-y-1/2 p-2 border border-white/20 text-white hover:bg-white/10 rounded-full transition"><ChevronRight /></button>
      </section>

      {/* --- INDUSTRIAL STATS --- */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Refining Capacity", val: "1.2M BPD", icon: <BarChart3 className="text-blue-600" /> },
              { label: "Global Facilities", val: "14 Sites", icon: <MapPin className="text-blue-600" /> },
              { label: "Safety Record", val: "0.02 TRIR", icon: <Shield className="text-blue-600" /> },
              { label: "R&D Investment", val: "$4.2B", icon: <Zap className="text-blue-600" /> }
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="mb-2">{s.icon}</div>
                <div className="text-3xl font-bold text-slate-900">{s.val}</div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LATEST INSIGHTS (BLOGS) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Media Center</h2>
              <h3 className="text-4xl font-bold text-slate-900">Latest Insights & News</h3>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-2 font-bold text-slate-600 hover:text-blue-600 transition">
              View All News <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: "Jan 12, 2026",
                tag: "Innovation",
                title: "Next-Gen Hydrogen Cracking: Efficiency Benchmarks",
                img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800"
              },
              {
                date: "Jan 05, 2026",
                tag: "ESG",
                title: "Carbon Capture Milestones at our Singapore Facility",
                img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800"
              },
              {
                date: "Dec 28, 2025",
                tag: "Global Markets",
                title: "Annual Energy Outlook: 2026-2030 Projections",
                img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800"
              }
            ].map((blog, i) => (
              <div key={i} className="group bg-white border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-500">
                <div className="h-56 overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-bold mb-4">
                    <span className="text-blue-600 uppercase tracking-widest">{blog.tag}</span>
                    <span className="text-slate-400">{blog.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition mb-4 leading-tight">{blog.title}</h4>
                  <p className="text-slate-500 text-sm mb-6">Our latest technical findings and market analysis for stakeholders...</p>
                  <button className="flex items-center gap-1 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all">Read More <ArrowRight size={16}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <Factory size={32} />
              <span className="text-2xl font-bold tracking-tighter">CORE<span className="text-blue-500">REFINERY</span></span>
            </div>
            <p className="max-w-md mb-8">
              A global leader in refining and energy processing. Committed to operational excellence, technical innovation, and the energy transition of tomorrow.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition cursor-pointer leading-none font-bold">in</div>
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition cursor-pointer leading-none font-bold">X</div>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Headquarters</h5>
            <p className="text-sm leading-relaxed">
              One Energy Square<br />
              Floor 54, Houston Tower<br />
              Houston, TX 77002, USA
            </p>
            <p className="mt-4 text-sm font-bold">+1 (800) CORE-OPS</p>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Global Hubs</h5>
            <ul className="text-sm space-y-3">
              <li>Rotterdam, Netherlands</li>
              <li>Jurong Island, Singapore</li>
              <li>Al-Jubail, Saudi Arabia</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between text-[11px] uppercase tracking-[0.2em]">
          <span>© 2026 Core Refinery Corp. All Rights Reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Legal Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


