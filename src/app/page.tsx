
'use client';

'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Droplets, Factory, Zap, 
  ChevronDown, ChevronLeft, ChevronRight,
  ArrowUpRight, Menu, MapPin, Activity, 
  Settings, Award, Scale, Beaker
} from 'lucide-react';

// 1. TRANSLATION DICTIONARY
const content = {
  EN: {
    nav: ["Infrastructure", "Logistics", "ESG Strategy", "Investor Relations"],
    hero: [
      { title1: "Global Energy", title2: "Security", desc: "Deploying high-efficiency distillation architectures to stabilize global supply chains through 2030." },
      { title1: "Molecular", title2: "Precision", desc: "Utilizing AI-driven catalytic cracking to maximize yield while minimizing carbon intensity." },
      { title1: "The Hydrogen", title2: "Pivot", desc: "Retrofitting integrated complexes for industrial-scale blue hydrogen production." }
    ],
    buttons: { assets: "Asset Directory", papers: "Technical Papers", reports: "All Reports" },
    overview: {
      tag: "Strategic Overview",
      h3: "Pivoting the Global Hydrocarbon Chain Toward Carbon-Neutrality.",
      p1: "The modern refinery is no longer a static asset; it is a dynamic molecular laboratory. At CoreRefinery, we are pioneering the integration of Carbon Capture (CCUS) directly into our units.",
      p2: "By 2026, our primary Singapore hub will achieve a 30% reduction in net emissions through the application of proprietary amine-based solvent scrubbing."
    },
    cards: [
      { title: "Technical Resilience", desc: "Predictive maintenance protocols utilizing vibration analysis and thermal imaging." },
      { title: "Market Compliance", desc: "Strict adherence to IMO 2030 and European RED III sustainability mandates." },
      { title: "Distillate Purity", desc: "Delivering ultra-low sulfur diesel (ULSD) and high-octane aviation fuels." },
      { title: "Safety Record", desc: "Maintaining a TRIR below 0.05 across all offshore and terminal operations." }
    ],
    insights: {
      h2: "Intelligence & Market Insights",
      p: "Strategic technical analysis for the global energy sector.",
      blogs: [
        { tag: "White Paper", title: "Optimizing Thermal Efficiency in Heavy Distillate Columns", date: "25 Jan 2026" },
        { tag: "Analysis", title: "European Energy Demand: 2026-2030 Outlook Projections", date: "12 Jan 2026" },
        { tag: "Safety Study", title: "Next-Gen PPE: Integrating Biometric Monitoring", date: "02 Jan 2026" }
      ]
    },
    stats: ["BPD Total Capacity", "Technical Support", "Carbon Target 2030", "Global Hubs"]
  },
  PL: {
    nav: ["Infrastruktura", "Logistyka", "Strategia ESG", "Relacje Inwestorskie"],
    hero: [
      { title1: "Globalne Bezpieczeństwo", title2: "Energetyczne", desc: "Wdrażanie wysokowydajnych architektur destylacji w celu stabilizacji łańcuchów dostaw do 2030 r." },
      { title1: "Precyzja", title2: "Molekularna", desc: "Wykorzystanie krakingu katalitycznego sterowanego przez AI w celu maksymalizacji uzysku." },
      { title1: "Wodorowy", title2: "Zwrot", desc: "Modernizacja kompleksów do produkcji niebieskiego wodoru na skalę przemysłową." }
    ],
    buttons: { assets: "Katalog Aktywów", papers: "Dokumentacja", reports: "Wszystkie Raporty" },
    overview: {
      tag: "Przegląd Strategiczny",
      h3: "Transformacja Globalnego Łańcucha Węglowodorów w Kierunku Neutralności.",
      p1: "Nowoczesna rafineria to nie tylko aktywa; to dynamiczne laboratorium molekularne. Pioniersko wdrażamy technologie wychwytywania dwutlenku węgla (CCUS).",
      p2: "Do 2026 roku nasze centrum w Singapurze osiągnie 30% redukcję emisji netto dzięki autorskim technologiom czyszczenia rozpuszczalnikami."
    },
    cards: [
      { title: "Odporność Techniczna", desc: "Protokoły konserwacji predykcyjnej wykorzystujące termowizję." },
      { title: "Zgodność Rynkowa", desc: "Przestrzeganie mandatów IMO 2030 i europejskich dyrektyw RED III." },
      { title: "Czystość Destylatu", desc: "Dostarczanie oleju napędowego o niskiej zawartości siarki i paliw lotniczych." },
      { title: "Bezpieczeństwo", desc: "Utrzymanie wskaźnika TRIR poniżej 0,05 we wszystkich operacjach." }
    ],
    insights: {
      h2: "Inteligencja i Analizy Rynkowe",
      p: "Strategiczna analiza techniczna dla globalnego sektora energetycznego.",
      blogs: [
        { tag: "Biała Księga", title: "Optymalizacja wydajności cieplnej w kolumnach ciężkich destylatów", date: "25 Sty 2026" },
        { tag: "Analiza", title: "Europejski popyt na energię: Prognozy na lata 2026-2030", date: "12 Sty 2026" },
        { tag: "Bezpieczeństwo", title: "Środki ochrony nowej generacji: Monitoring biometryczny", date: "02 Sty 2026" }
      ]
    },
    stats: ["Całkowita wydajność BPD", "Wsparcie techniczne", "Cel węglowy 2030", "Globalne centra"]
  },
  RU: {
    nav: ["Инфраструктура", "Логистика", "Стратегия ESG", "Инвесторам"],
    hero: [
      { title1: "Глобальная Энерго", title2: "Безопасность", desc: "Внедрение высокоэффективных архитектур дистилляции для стабилизации поставок до 2030 года." },
      { title1: "Молекулярная", title2: "Точность", desc: "Каталитический крекинг под управлением ИИ для максимизации выхода продукции." },
      { title1: "Водородный", title2: "Поворот", desc: "Модернизация комплексов для промышленного производства голубого водорода." }
    ],
    buttons: { assets: "Каталог активов", papers: "Техдокументация", reports: "Все отчеты" },
    overview: {
      tag: "Стратегический обзор",
      h3: "Трансформация глобальной углеводородной цепи к углеродной нейтральности.",
      p1: "Современный НПЗ — это динамичная молекулярная лаборатория. Мы внедряем технологии улавливания углерода (CCUS) в наши установки.",
      p2: "К 2026 году наш хаб в Сингапуре достигнет 30-процентного сокращения выбросов благодаря запатентованным технологиям очистки."
    },
    cards: [
      { title: "Техническая стойкость", desc: "Протоколы прогнозируемого обслуживания с использованием тепловидения." },
      { title: "Рыночное соответствие", desc: "Соблюдение мандатов IMO 2030 и европейских директив RED III." },
      { title: "Чистота дистиллята", desc: "Поставка дизельного топлива с ультранизким содержанием серы." },
      { title: "Безопасность", desc: "Поддержание показателя TRIR ниже 0,05 во всех операциях." }
    ],
    insights: {
      h2: "Интеллект и рыночные данные",
      p: "Стратегический технический анализ для мирового энергетического сектора.",
      blogs: [
        { tag: "Белая книга", title: "Оптимизация тепловой эффективности в колоннах тяжелых дистиллятов", date: "25 Янв 2026" },
        { tag: "Анализ", title: "Энергопотребление в Европе: Прогнозы на 2026-2030 годы", date: "12 Янв 2026" },
        { tag: "Безопасность", title: "СИЗ нового поколения: Биометрический мониторинг", date: "02 Янв 2026" }
      ]
    },
    stats: ["Общая мощность BPD", "Техподдержка", "Углеродная цель 2030", "Глобальные хабы"]
  }
};

export default function EnterpriseRefinery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Shortcut for translations
  const t = content[language];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === t.hero.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [t.hero.length]);

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
              {t.nav.map((item, idx) => (
                <a key={idx} href="#" className="hover:text-blue-700 transition">{item}</a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-[10px] font-black uppercase bg-slate-100 px-5 py-2.5 rounded hover:bg-slate-200 transition"
              >
                <Globe size={14} /> {language === 'EN' ? 'English' : language === 'PL' ? 'Polski' : 'Русский'} <ChevronDown size={14} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 shadow-2xl rounded-sm z-[60]">
                  {Object.keys(content).map((langCode) => (
                    <button 
                      key={langCode}
                      onClick={() => { setLanguage(langCode); setIsLangOpen(false); }}
                      className="w-full text-left px-5 py-3 text-xs font-bold hover:bg-blue-50 transition border-b border-slate-50 last:border-0"
                    >
                      {langCode === 'EN' ? 'English' : langCode === 'PL' ? 'Polski' : 'Русский'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SLIDER --- */}
      <section className="relative h-[85vh] min-h-[700px] bg-slate-900 overflow-hidden">
        {t.hero.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={i === 0 ? "https://images.unsplash.com/photo-1544380904-c686aad2fc40?q=80&w=2000" : i === 1 ? "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000" : "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000"} className="w-full h-full object-cover brightness-[0.4]" alt="Refinery" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1800px] mx-auto px-10 w-full">
                <div className="max-w-4xl">
                  <div className="w-20 h-1 bg-blue-600 mb-8" />
                  <h1 className="text-6xl md:text-8xl font-light text-white leading-tight mb-8">
                    {slide.title1} <span className="font-bold">{slide.title2}</span>
                  </h1>
                  <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-12">{slide.desc}</p>
                  <div className="flex gap-4">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 font-bold uppercase tracking-widest text-[10px] transition-all">{t.buttons.assets}</button>
                    <button className="border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition">{t.buttons.papers}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- EXECUTIVE WRITE-UP --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-700 mb-6">{t.overview.tag}</h2>
              <h3 className="text-4xl font-bold text-slate-950 leading-tight mb-10">{t.overview.h3}</h3>
              <div className="space-y-6 text-slate-600 leading-loose">
                <p>{t.overview.p1}</p>
                <p>{t.overview.p2}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.cards.map((item, i) => (
                <div key={i} className="bg-white p-8 border border-slate-200 shadow-sm hover:border-blue-300 transition group">
                  <div className="text-blue-700 mb-6 group-hover:scale-110 transition-transform">
                    {i === 0 ? <Settings /> : i === 1 ? <Scale /> : i === 2 ? <Beaker /> : <Award />}
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- HORIZONTAL INSIGHTS --- */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">{t.insights.h2}</h2>
              <p className="text-slate-400 mt-2 font-medium">{t.insights.p}</p>
            </div>
            <button className="text-xs font-bold uppercase border-b-2 border-slate-900 pb-2 flex items-center gap-2">
              {t.buttons.reports} <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.insights.blogs.map((blog, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-8 border border-slate-100">
                  <img src={i === 0 ? "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800" : i === 1 ? "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800" : "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="News" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">{blog.tag}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{blog.date}</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-blue-700 transition">{blog.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-16 text-center lg:text-left">
          {["1.4M", "24/7", "-42%", "42"].map((val, i) => (
            <div key={i}>
              <div className="text-5xl font-light mb-2">{val}</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{t.stats[i]}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}