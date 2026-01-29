'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Droplets, Factory, Zap, 
  ChevronDown, ChevronLeft, ChevronRight,
  ArrowUpRight, Menu, MapPin, Activity, 
  Settings, Award, Scale, Beaker, Truck, Container, X, Phone, Mail
} from 'lucide-react';

const translations = {
  ES: {
    nav: ["Infraestructura", "Logística", "Estrategia ESG", "Inversores", "Sostenibilidad", "Seguridad", "I+D+", "Carreras"],
    hero: [
      { title: "Independencia Energética", desc: "Optimizando el complejo de Puertollano para liderar el suministro energético de la Península Ibérica. Nuestra infraestructura de vanguardia garantiza un flujo constante de recursos estratégicos, fortaleciendo la soberanía energética regional mediante procesos de refinado de última generación y una red logística sin precedentes en el sur de Europa." },
      { title: "Circularidad Total", desc: "Transformando residuos urbanos y biomasa en combustibles renovables de alta calidad. Este proceso no solo reduce el impacto ambiental, sino que redefine el concepto de materia prima dentro de la industria petroquímica moderna, permitiéndonos cerrar el ciclo de vida de los productos plásticos y avanzar hacia una economía neutra." },
      { title: "Pivote Hidrógeno", desc: "Instalación del mayor electrolizador de España para descarbonizar la industria pesada. Este proyecto representa la piedra angular de nuestra estrategia de hidrógeno verde, integrando energías renovables directamente en el núcleo de nuestros procesos térmicos y de hidrogenación, eliminando toneladas de emisiones de CO2 anualmente." }
    ],
    overview: {
      tag: "Complejo Industrial Puertollano",
      title: "Liderando la Transformación Multienérgetica en España.",
      p1: "El complejo de Puertollano es un referente en integración química. No solo refinamos; conectamos procesos de destilación con la producción de olefinas y plásticos de alto valor técnico.",
      p2: "Nuestra hoja de ruta 2026 incluye la puesta en marcha de la planta de biocombustibles avanzados, consolidando nuestra posición en la economía circular."
    },
    tech: {
      title: "Capacidades Técnicas",
      units: [
        { label: "Destilación Atmosférica", value: "A-1", desc: "Fraccionamiento primario de crudo con capacidad de 150.000 BPD." },
        { label: "Hidrotratamiento", value: "HDT", desc: "Eliminación de azufre para cumplir con la normativa Euro 6." },
        { label: "Unidad de Olefinas", value: "OP-2", desc: "Producción de etileno y propileno de alta pureza." }
      ]
    },
    cards: [
      { title: "Resiliencia Técnica", text: "Integración de gemelos digitales para el mantenimiento predictivo de unidades de vacío." },
      { title: "Cumplimiento RED III", text: "Alineación estricta con las directivas europeas de energías renovables y bajas en carbono." },
      { title: "Pureza Química", text: "Producción de polipropileno y polietileno de grado médico y alimentario." },
      { title: "Seguridad Laboral", text: "Líderes en el sector con más de 2 millones de horas sin accidentes con baja." }
    ],
    insights: {
      title: "Inteligencia Operativa",
      subtitle: "Análisis técnico del hub petroquímico más importante de Castilla-La Mancha.",
      cta: "Ver Todos los Informes",
      blogs: [
        { tag: "Informe Técnico", title: "Integración de Hidrógeno Verde en procesos de Hidrotratamiento", date: "25 Ene 2026", desc: "Cómo el electrolizador de 100MW está reduciendo la huella de carbono en la producción de diésel..." },
        { tag: "Sostenibilidad", title: "Reciclaje Químico: Del residuo plástico a la materia prima", date: "12 Ene 2026", desc: "Puertollano inicia pruebas con pirólisis avanzada para cerrar el círculo de los plásticos..." },
        { tag: "Seguridad", title: "Digitalización de la Seguridad en Paradas de Mantenimiento", date: "02 Ene 2026", desc: "Uso de IoT y geolocalización para proteger a los más de 1.000 operarios en paradas críticas..." }
      ]
    },
    stats: ["Barriles/Día Capacidad", "Soporte Técnico 24/7", "Reducción CO2 2030", "Centros Logísticos"],
    footer: {
      desc: "Complejo Petroquímico de Puertollano: Innovación constante para una energía más eficiente y sostenible.",
      follow: "SÍGUENOS",
      cols: [
        { title: "Infraestructura", links: ["Unidades de Crudo", "Complejo Olefinas", "Logística Ductos", "I+D Tech"] },
        { title: "Cumplimiento", links: ["Seguridad y Salud", "Medio Ambiente", "Ética Profesional", "Certificaciones ISO"] },
        { title: "Inversores", links: ["Resultados Anuales", "Gobierno Corporativo", "Accionistas", "Calendario Financiero"] }
      ],
      legal: ["Privacidad", "Aviso Legal", "Cookies"],
      copy: "© 2026 PuertollanoRefinery / Grupo Energético Industrial."
    }
  },
  EN: {
    nav: ["Infrastructure", "Logistics", "ESG Strategy", "Investors", "Sustainability", "Safety", "R&D", "Careers"],
    hero: [
      { title: "Energy Independence", desc: "Optimizing the Puertollano complex to lead the energy supply of the Iberian Peninsula. Our cutting-edge infrastructure guarantees a constant flow of strategic resources, strengthening regional energy sovereignty through state-of-the-art refining processes and a logistics network unprecedented in Southern Europe." },
      { title: "Total Circularity", desc: "Transforming urban waste and biomass into high-quality renewable fuels. This process not only reduces environmental impact but redefines the concept of raw materials within the modern petrochemical industry, allowing us to close the life cycle of plastic products and move toward a neutral economy." },
      { title: "Hydrogen Pivot", desc: "Installing Spain's largest electrolyzer to decarbonize heavy industry. This project represents the cornerstone of our green hydrogen strategy, integrating renewable energy directly into the core of our thermal and hydrogenation processes, eliminating tons of CO2 emissions annually." }
    ],
    overview: {
      tag: "Puertollano Industrial Complex",
      title: "Leading Spain's Multi-Energy Transformation.",
      p1: "The Puertollano complex is a benchmark in chemical integration. We don't just refine; we connect distillation processes with high-value technical plastics.",
      p2: "Our 2026 roadmap includes launching the advanced biofuels plant, solidifying our circular economy position."
    },
    tech: {
      title: "Technical Capabilities",
      units: [
        { label: "Atmospheric Distillation", value: "A-1", desc: "Primary crude fractionation with 150,000 BPD capacity." },
        { label: "Hydrotreating", value: "HDT", desc: "Sulphur removal to meet Euro 6 regulations." },
        { label: "Olefins Unit", value: "OP-2", desc: "High purity ethylene and propylene production." }
      ]
    },
    cards: [
      { title: "Technical Resilience", text: "Digital twin integration for predictive maintenance of vacuum units." },
      { title: "RED III Compliance", text: "Strict alignment with European renewable and low-carbon energy directives." },
      { title: "Chemical Purity", text: "Production of medical and food-grade polypropylene and polyethylene." },
      { title: "Operational Safety", text: "Sector leaders with over 2 million hours without lost-time accidents." }
    ],
    insights: {
      title: "Operational Intelligence",
      subtitle: "Technical analysis of the most important petrochemical hub in central Spain.",
      cta: "View All Reports",
      blogs: [
        { tag: "Technical Report", title: "Green Hydrogen Integration in Hydrotreating", date: "25 Jan 2026", desc: "How the 100MW electrolyzer is reducing the carbon footprint of diesel production..." },
        { tag: "Sustainability", title: "Chemical Recycling: From Plastic Waste to Raw Material", date: "12 Jan 2026", desc: "Puertollano begins testing advanced pyrolysis to close the plastics loop..." },
        { tag: "Safety", title: "Safety Digitalization in Maintenance Turnarounds", date: "02 Jan 2026", desc: "Using IoT and geolocation to protect over 1,000 operators during critical stops..." }
      ]
    },
    stats: ["Barrels/Day Capacity", "24/7 Tech Support", "CO2 Reduction 2030", "Logistics Hubs"],
    footer: {
      desc: "Puertollano Petrochemical Complex: Constant innovation for more efficient and sustainable energy.",
      follow: "FOLLOW US",
      cols: [
        { title: "Infrastructure", links: ["Crude Units", "Olefin Complex", "Pipeline Logistics", "R&D Tech"] },
        { title: "Compliance", links: ["Health & Safety", "Environment", "Ethics", "ISO Certifications"] },
        { title: "Investors", links: ["Annual Results", "Corporate Governance", "Shareholders", "Financial Calendar"] }
      ],
      legal: ["Privacy", "Legal Notice", "Cookies"],
      copy: "© 2026 PuertollanoRefinery / Industrial Energy Group."
    }
  }
};

export default function PuertollanoRefinery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('ES');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[language] || translations['ES'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === t.hero.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [t.hero.length]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100">
      
      {/* 1. Ticker */}
      <div className="bg-slate-950 text-[10px] text-slate-400 font-bold uppercase tracking-widest py-2 px-6 lg:px-10 flex justify-between border-b border-white/5 relative z-[60]">
        <div className="flex gap-4 lg:gap-8">
          <span className="flex items-center gap-2 text-red-500"><Activity size={12} /> BRENT: $84.12 <span className="text-emerald-500">+0.8%</span></span>
          <span className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-8 text-red-500"><Activity size={12} /> PUERTOLLANO: <span className="text-emerald-500">NOMINAL</span></span>
        </div>
        <div className="text-[9px] sm:text-[10px]">ASSET FEED: [01:11 UTC]</div>
      </div>

      {/* 2. Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-10 h-20 lg:h-24 flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                <Factory size={20} className="text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-black tracking-tighter uppercase">Puerto<span className="text-red-500">llano</span></span>
            </div>
            <div className="hidden xl:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              {t.nav.slice(0, 4).map((item, i) => ( <a key={i} href="#" className="hover:text-red-600 transition">{item}</a> ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-[10px] font-black uppercase bg-slate-100 px-4 py-2 rounded border border-slate-200">
                <Globe size={12} /> {language} <ChevronDown size={12} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 shadow-xl z-50">
                  {['ES', 'EN'].map((lang) => (
                    <button key={lang} onClick={() => { setLanguage(lang); setIsLangOpen(false); }} className="w-full text-left px-4 py-2 text-[10px] font-black hover:bg-slate-50 uppercase">{lang === 'ES' ? 'Español' : 'English'}</button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setIsMenuOpen(true)} className="p-2 bg-slate-100 text-slate-900 rounded hover:bg-red-600 hover:text-white transition">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Simplified Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-200">
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-red-600 rounded-sm flex items-center justify-center">
                  <Factory size={16} className="text-white" />
                </div>
                <span className="text-lg font-black tracking-tighter uppercase">Puerto<span className="text-red-500">llano</span></span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400">
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <nav className="space-y-6 mb-12">
                  {t.nav.map((item, i) => (
                    <a key={i} href="#" className="block text-lg text-slate-700 hover:text-red-600 transition-colors">
                      {item}
                    </a>
                  ))}
                </nav>

                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <section className="space-y-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Ubicación</p>
                    <p className="text-sm text-slate-600">Puertollano, Ciudad Real, Spain</p>
                  </section>

                  <section className="space-y-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Teléfonos</p>
                    <div className="text-sm text-slate-600 space-y-1">
                      <p>34 917 538 200</p>
                      <p>34 917 538 100</p>
                      <p>34 917 538 000</p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email</p>
                    <div className="text-sm space-y-1">
                      <a href="mailto:Ventas@Puertollanorefinery.com" className="block text-red-600">Ventas@Puertollanorefinery.com</a>
                      <a href="mailto:mercadeo@Puertollanorefinery.com" className="block text-red-600">mercadeo@Puertollanorefinery.com</a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Hero Carousel */}
      <section className="relative h-[75vh] lg:h-[85vh] bg-slate-900 overflow-hidden">
        {t.hero.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={i === 0 ? "https://images.unsplash.com/photo-1544380904-c686aad2fc40?q=80&w=2000" : i === 1 ? "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000" : "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000"} className="w-full h-full object-cover brightness-[0.35]" alt="" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1800px] mx-auto px-6 lg:px-10 w-full">
                <div className="max-w-3xl">
                  <div className="w-16 lg:w-20 h-1.5 bg-red-600 mb-8 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                  <h1 className="text-4xl lg:text-8xl font-light text-white leading-tight mb-8">
                    {slide.title.split(' ')[0]} <span className="font-bold text-red-500">{slide.title.split(' ').slice(1).join(' ')}</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 lg:mb-14">{slide.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 lg:px-10 py-4 font-bold uppercase tracking-widest text-[10px] transition-all">Asset Directory</button>
                    <button className="border border-white/30 text-white px-8 lg:px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition">Technical Papers</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-10 right-10 flex gap-4 z-20">
          <button onClick={() => setCurrentSlide(currentSlide === 0 ? t.hero.length-1 : currentSlide-1)} className="p-3 border border-white/20 text-white hover:bg-red-600 transition rounded-full"><ChevronLeft size={20}/></button>
          <button onClick={() => setCurrentSlide(currentSlide === t.hero.length-1 ? 0 : currentSlide+1)} className="p-3 border border-white/20 text-white hover:bg-red-600 transition rounded-full"><ChevronRight size={20}/></button>
        </div>
      </section>

      {/* 4. Technical Units */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4">{t.tech.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">Infraestructura crítica operando bajo estándares de máxima eficiencia térmica y control de emisiones en tiempo real.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full lg:w-2/3">
              {t.tech.units.map((unit, i) => (
                <div key={i} className="border-l-2 border-red-600 pl-6 py-2 bg-slate-50/50 hover:bg-slate-50 transition p-4">
                  <div className="text-2xl font-black text-slate-900 mb-1">{unit.value}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-widest">{unit.label}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{unit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategic Overview */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-6">{t.overview.tag}</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-950 mb-10 leading-tight">{t.overview.title}</h3>
              <div className="space-y-6 text-slate-600 leading-loose">
                <p>{t.overview.p1}</p>
                <p>{t.overview.p2}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.cards.map((item, i) => (
                <div key={i} className="bg-white p-8 border border-slate-200 shadow-sm hover:border-red-500 transition group">
                  <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform">{i === 0 ? <Settings /> : i === 1 ? <Shield /> : i === 2 ? <Beaker /> : <Award />}</div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Insights (Blogs) */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{t.insights.title}</h2>
              <p className="text-slate-400 mt-2 font-medium">{t.insights.subtitle}</p>
            </div>
            <button className="text-[10px] font-black uppercase border-b-2 border-red-600 pb-2 flex items-center gap-2 hover:text-red-500 hover:border-red-600 transition">
              {t.insights.cta} <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {t.insights.blogs.map((blog, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-8 border border-slate-100 shadow-lg">
                  <img src={i === 0 ? "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800" : i === 1 ? "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800" : "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">{blog.tag}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{blog.date}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold leading-tight group-hover:text-red-500 transition">{blog.title}</h3>
                <p className="text-slate-500 mt-4 text-sm leading-relaxed line-clamp-3">{blog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Stats */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {["150K", "24/7", "-35%", "12"].map((val, i) => (
            <div key={i}>
              <div className="text-4xl lg:text-5xl font-light mb-2 text-red-500">{val}</div>
              <div className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{t.stats[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 lg:pt-32 pb-12">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm">
                  <Factory size={24} className="text-white" />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase">Puerto<span className="text-red-500">llano</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-loose max-w-sm mb-4">{t.footer.desc}</p>
              <div className="space-y-2 text-[11px] font-bold text-slate-900 uppercase">
                <p className="flex items-center gap-2"><MapPin size={12} className="text-red-600"/> Puertollano, Ciudad Real, Spain</p>
                <div className="flex flex-col gap-1">
                  <p className="flex items-center gap-2"><Phone size={12} className="text-red-600"/> 34 917 538 200 / 100 / 000</p>
                </div>
                <p className="flex items-center gap-2"><Mail size={12} className="text-red-600"/> Ventas@Puertollanorefinery.com</p>
              </div>
            </div>
            {t.footer.cols.map((col, i) => (
              <div key={i}>
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 lg:mb-8 text-slate-900 border-b border-red-100 pb-2">{col.title}</h5>
                <ul className="space-y-3 lg:space-y-4 text-[11px] font-bold uppercase text-slate-500">
                  {col.links.map(link => ( <li key={link}><a href="#" className="hover:text-red-600 transition">{link}</a></li> ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <span>{t.footer.copy}</span>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {t.footer.legal.map(link => ( <a key={link} href="#" className="hover:text-slate-900 transition">{link}</a> ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}