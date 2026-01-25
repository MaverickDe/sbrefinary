'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Droplets, Factory, Zap, 
  ChevronDown, ChevronLeft, ChevronRight,
  ArrowUpRight, Menu, MapPin, Activity, 
  Settings, Award, Scale, Beaker
} from 'lucide-react';

const translations = {
  EN: {
    nav: ["Infrastructure", "Logistics", "ESG Strategy", "Investor Relations"],
    hero: [
      { title: "Global Energy Security", desc: "Deploying high-efficiency distillation architectures to stabilize global supply chains through 2030." },
      { title: "Molecular Precision", desc: "Utilizing AI-driven catalytic cracking to maximize yield while minimizing carbon intensity per barrel." },
      { title: "The Hydrogen Pivot", desc: "Retrofitting integrated complexes for industrial-scale blue hydrogen production and sequestration." }
    ],
    overview: {
      tag: "Strategic Overview",
      title: "Pivoting the Global Hydrocarbon Chain Toward Carbon-Neutrality.",
      p1: "The modern refinery is no longer a static asset; it is a dynamic molecular laboratory. At CoreRefinery, we are pioneering the integration of **Carbon Capture, Utilization, and Storage (CCUS)** directly into our fluid catalytic cracking units.",
      p2: "By 2026, our primary Singapore hub will achieve a 30% reduction in net emissions through the application of proprietary amine-based solvent scrubbing."
    },
    cards: [
      { title: "Technical Resilience", text: "Predictive maintenance protocols utilizing vibration analysis and thermal imaging." },
      { title: "Market Compliance", text: "Strict adherence to IMO 2030 and European RED III sustainability mandates." },
      { title: "Distillate Purity", text: "Delivering ultra-low sulfur diesel (ULSD) and high-octane aviation fuels." },
      { title: "Safety Record", text: "Maintaining a TRIR below 0.05 across all offshore and terminal operations." }
    ],
    insights: {
      title: "Intelligence & Market Insights",
      subtitle: "Strategic technical analysis for the global energy sector.",
      cta: "All Reports",
      blogs: [
        { tag: "White Paper", title: "Optimizing Thermal Efficiency in Heavy Distillate Columns", date: "25 Jan 2026", desc: "An in-depth study into the molecular kinetics of heavy crude processing and thermal recapturing techniques..." },
        { tag: "Market Analysis", title: "European Energy Demand: 2026-2030 Outlook Projections", date: "12 Jan 2026", desc: "Analysis of shifting consumption patterns across the Euro-zone industrial sectors..." },
        { tag: "Safety Study", title: "Next-Gen PPE: Integrating Biometric Monitoring for Personnel", date: "02 Jan 2026", desc: "Evaluating real-time health telemetry for high-temperature maintenance environments..." }
      ]
    },
    stats: ["BPD Total Capacity", "Technical Support", "Carbon Target 2030", "Global Hubs"],
    footer: {
      desc: "Leading the global energy transition with technical precision, operational excellence, and a commitment to long-term sustainability.",
      follow: "Follow",
      cols: [
        { title: "Infrastructure", links: ["Integrated Hubs", "Terminal Logistics", "Pipeline Network", "R&D Labs"] },
        { title: "Compliance", links: ["Safety Records", "Environmental Audit", "Ethics Hotline", "Trade Policy"] },
        { title: "Investor Relations", links: ["Quarterly Reports", "SEC Filings", "Annual Meeting", "Stock Data"] }
      ],
      legal: ["Privacy", "Legal", "Sitemap"],
      copy: "© 2026 CoreRefinery International Group. Systems Verified."
    }
  },
  PL: {
    nav: ["Infrastruktura", "Logistyka", "Strategia ESG", "Relacje Inwestorskie"],
    hero: [
      { title: "Globalne Bezpieczeństwo", desc: "Wdrażanie wysokowydajnych architektur destylacji w celu stabilizacji globalnych łańcuchów dostaw do 2030 r." },
      { title: "Precyzja Molekularna", desc: "Wykorzystanie krakingu katalitycznego AI w celu maksymalizacji uzysku przy minimalizacji emisji." },
      { title: "Zwrot Wodorowy", desc: "Modernizacja kompleksów do produkcji niebieskiego wodoru na skalę przemysłową." }
    ],
    overview: {
      tag: "Przegląd Strategiczny",
      title: "Transformacja Globalnego Łańcucha Węglowodorów w Kierunku Neutralności.",
      p1: "Nowoczesna rafineria to dynamiczne laboratorium molekularne. Wdrażamy systemy wychwytywania dwutlenku węgla (CCUS) bezpośrednio w naszych jednostkach.",
      p2: "Do 2026 r. nasze centrum w Singapurze osiągnie 30% redukcję emisji netto dzięki autorskim technologiom płukania."
    },
    cards: [
      { title: "Odporność Techniczna", text: "Protokoły konserwacji predykcyjnej wykorzystujące analizę drgań i termowizję." },
      { title: "Zgodność Rynkowa", text: "Ścisłe przestrzeganie dyrektyw IMO 2030 oraz europejskich mandatów RED III." },
      { title: "Czystość Destylatu", text: "Dostarczanie oleju napędowego o niskiej zawartości siarki i paliw lotniczych." },
      { title: "Bezpieczeństwo", text: "Utrzymanie wskaźnika TRIR poniżej 0,05 we wszystkich operacjach morskich." }
    ],
    insights: {
      title: "Inteligencja i Analizy Rynkowe",
      subtitle: "Strategiczna analiza techniczna dla sektora energetycznego.",
      cta: "Wszystkie Raporty",
      blogs: [
        { tag: "Biała Księga", title: "Optymalizacja wydajności cieplnej w kolumnach ciężkich destylatów", date: "25 Sty 2026", desc: "Dogłębne badanie kinetyki molekularnej przetwarzania ciężkiej ropy..." },
        { tag: "Analiza Rynku", title: "Europejski popyt na energię: Prognozy na lata 2026-2030", date: "12 Sty 2026", desc: "Analiza zmieniających się wzorców konsumpcji w sektorach przemysłowych UE..." },
        { tag: "Bezpieczeństwo", title: "Środki ochrony nowej generacji: Monitoring biometryczny personelu", date: "02 Sty 2026", desc: "Ocena telemetrii zdrowotnej w czasie rzeczywistym dla środowisk o wysokiej temperaturze..." }
      ]
    },
    stats: ["Całkowita wydajność BPD", "Wsparcie Techniczne", "Cel Węglowy 2030", "Globalne Centra"],
    footer: {
      desc: "Lider globalnej transformacji energetycznej dzięki precyzji technicznej i operacyjnej doskonałości.",
      follow: "Obserwuj",
      cols: [
        { title: "Infrastruktura", links: ["Zintegrowane Huby", "Logistyka Terminali", "Sieć Rurociągów", "Laboratoria B+R"] },
        { title: "Zgodność", links: ["Rejestry Bezpieczeństwa", "Audyt Środowiskowy", "Infolinia Etyczna", "Polityka Handlowa"] },
        { title: "Relacje Inwestorskie", links: ["Raporty Kwartalne", "Zgłoszenia SEC", "Walne Zgromadzenie", "Dane Giełdowe"] }
      ],
      legal: ["Prywatność", "Prawo", "Mapa Strony"],
      copy: "© 2026 CoreRefinery International Group. Systemy zweryfikowane."
    }
  },
  RU: {
    nav: ["Инфраструктура", "Логистика", "Стратегия ESG", "Инвесторам"],
    hero: [
      { title: "Энергобезопасность", desc: "Внедрение высокоэффективных архитектур дистилляции для стабилизации мировых поставок." },
      { title: "Молекулярная точность", desc: "Каталитический крекинг под управлением ИИ для максимизации выхода продукции." },
      { title: "Водородный поворот", desc: "Модернизация комплексов для промышленного производства голубого водорода." }
    ],
    overview: {
      tag: "Стратегический обзор",
      title: "Трансформация глобальной углеводородной цепи.",
      p1: "Современный НПЗ — это динамичная лаборатория. Мы внедряем технологии улавливания углерода (CCUS) непосредственно в наши установки.",
      p2: "К 2026 году наш хаб в Сингапуре достигнет 30% сокращения выбросов благодаря запатентованным технологиям очистки."
    },
    cards: [
      { title: "Техническая стойкость", text: "Протоколы прогнозируемого обслуживания с использованием тепловидения." },
      { title: "Рыночное соответствие", text: "Соблюдение мандатов IMO 2030 и европейских директив RED III." },
      { title: "Чистота дистиллята", text: "Поставка дизельного топлива с ультранизким содержанием серы." },
      { title: "Безопасность", text: "Поддержание показателя TRIR ниже 0,05 во всех операциях." }
    ],
    insights: {
      title: "Интеллект и аналитика",
      subtitle: "Стратегический технический анализ мирового энергосектора.",
      cta: "Все отчеты",
      blogs: [
        { tag: "Белая книга", title: "Оптимизация тепловой эффективности в колоннах тяжелых дистиллятов", date: "25 Янв 2026", desc: "Глубокое исследование молекулярной кинетики переработки тяжелой нефти..." },
        { tag: "Анализ рынка", title: "Энергопотребление в Европе: Прогнозы на 2026-2030 годы", date: "12 Янв 2026", desc: "Анализ меняющихся моделей потребления в промышленных секторах еврозоны..." },
        { tag: "Безопасность", title: "СИЗ нового поколения: Биометрический мониторинг персонала", date: "02 Янв 2026", desc: "Оценка телеметрии здоровья в реальном времени для высокотемпературных зон..." }
      ]
    },
    stats: ["Общая мощность BPD", "Техподдержка", "Углеродная цель 2030", "Глобальные хабы"],
    footer: {
      desc: "Ведущий мировой энергетический переход с технической точностью и стремлением к устойчивому развитию.",
      follow: "Следите за нами",
      cols: [
        { title: "Инфраструктура", links: ["Интегрированные хабы", "Логистика терминалов", "Сеть трубопроводов", "НИОКР"] },
        { title: "Комплаенс", links: ["Безопасность", "Эко-аудит", "Линия этики", "Торговая политика"] },
        { title: "Инвесторам", links: ["Квартальные отчеты", "Отчетность SEC", "Годовое собрание", "Акции"] }
      ],
      legal: ["Конфиденциальность", "Правовая информация", "Карта сайта"],
      copy: "© 2026 CoreRefinery International Group. Системы проверены."
    }
  }
};

export default function EnterpriseRefinery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === t.hero.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [t.hero.length]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Ticker */}
      <div className="bg-slate-950 text-[10px] text-slate-400 font-bold uppercase tracking-widest py-2 px-10 flex justify-between border-b border-white/5">
        <div className="flex gap-8">
          <span className="flex items-center gap-2"><Activity size={12} className="text-blue-500" /> Brent: $84.12 <span className="text-emerald-500">+0.8%</span></span>
          <span className="flex items-center gap-2 border-l border-white/10 pl-8"><Activity size={12} className="text-blue-500" /> WTI: $79.45 <span className="text-rose-500">-0.2%</span></span>
        </div>
        <div className="hidden md:block">Asset Monitoring: All Systems Nominal [04:22 UTC]</div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-10 h-24 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-2">
              <Factory size={28} className="text-slate-950" />
              <span className="text-2xl font-black tracking-tighter uppercase">Core<span className="text-blue-700">Refinery</span></span>
            </div>
            <div className="hidden xl:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              {t.nav.map((item, i) => ( <a key={i} href="#" className="hover:text-blue-700 transition">{item}</a> ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-[10px] font-black uppercase bg-slate-100 px-5 py-2.5 rounded hover:bg-slate-200 transition">
                <Globe size={14} /> {language === 'EN' ? 'English' : language === 'PL' ? 'Polski' : 'Русский'} <ChevronDown size={14} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 shadow-2xl rounded-sm z-[60]">
                  {Object.keys(translations).map((code) => (
                    <button key={code} onClick={() => { setLanguage(code); setIsLangOpen(false); }} className="w-full text-left px-5 py-3 text-xs font-bold hover:bg-blue-50 transition border-b border-slate-50 last:border-0">
                      {code === 'EN' ? 'English' : code === 'PL' ? 'Polski' : 'Русский'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[700px] bg-slate-900 overflow-hidden">
        {t.hero.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={i === 0 ? "https://images.unsplash.com/photo-1544380904-c686aad2fc40?q=80&w=2000" : i === 1 ? "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000" : "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000"} className="w-full h-full object-cover brightness-[0.4]" alt={slide.title} />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1800px] mx-auto px-10 w-full">
                <div className="max-w-4xl">
                  <div className="w-20 h-1 bg-blue-600 mb-8" />
                  <h1 className="text-6xl md:text-8xl font-light text-white leading-tight mb-8">
                    {slide.title.split(' ')[0]} <span className="font-bold">{slide.title.split(' ').slice(1).join(' ')}</span>
                  </h1>
                  <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-12">{slide.desc}</p>
                  <div className="flex gap-4">
                    <button className="bg-blue-700 text-white px-10 py-4 font-bold uppercase text-[10px]">Asset Directory</button>
                    <button className="border border-white/30 text-white px-10 py-4 font-bold uppercase text-[10px]">Technical Papers</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-12 right-12 flex gap-4">
          <button onClick={() => setCurrentSlide(currentSlide === 0 ? t.hero.length-1 : currentSlide-1)} className="p-4 border border-white/20 text-white rounded-full"><ChevronLeft size={20}/></button>
          <button onClick={() => setCurrentSlide(currentSlide === t.hero.length-1 ? 0 : currentSlide+1)} className="p-4 border border-white/20 text-white rounded-full"><ChevronRight size={20}/></button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-700 mb-6">{t.overview.tag}</h2>
              <h3 className="text-4xl font-bold text-slate-950 mb-10">{t.overview.title}</h3>
              <div className="space-y-6 text-slate-600 leading-loose">
                <p>{t.overview.p1}</p>
                <p>{t.overview.p2}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.cards.map((item, i) => (
                <div key={i} className="bg-white p-8 border border-slate-200 shadow-sm hover:border-blue-300 transition group">
                  <div className="text-blue-700 mb-6 group-hover:scale-110 transition-transform">{i === 0 ? <Settings /> : i === 1 ? <Scale /> : i === 2 ? <Beaker /> : <Award />}</div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">{t.insights.title}</h2>
              <p className="text-slate-400 mt-2 font-medium">{t.insights.subtitle}</p>
            </div>
            <button className="text-xs font-bold uppercase border-b-2 border-slate-900 pb-2 flex items-center gap-2">
              {t.insights.cta} <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.insights.blogs.map((blog, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-8 border border-slate-100">
                  <img src={i === 0 ? "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800" : i === 1 ? "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800" : "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={blog.title} />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">{blog.tag}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{blog.date}</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-blue-700 transition">{blog.title}</h3>
                <p className="text-slate-500 mt-4 text-sm leading-relaxed line-clamp-2">{blog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-950 py-24 text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-10 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-16">
          {["1.4M", "24/7", "-42%", "42"].map((val, i) => (
            <div key={val}>
              <div className="text-5xl font-light mb-2">{val}</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{t.stats[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-24 pb-12">
        <div className="max-w-[1800px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Factory size={32} className="text-slate-900" />
              <span className="text-2xl font-black tracking-tighter uppercase">Core<span className="text-blue-700">Refinery</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-loose max-w-sm mb-10">{t.footer.desc}</p>
            <div className="flex gap-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{t.footer.follow}</span>
              <a href="#" className="text-xs font-bold hover:text-blue-700">LinkedIn</a>
              <a href="#" className="text-xs font-bold hover:text-blue-700">Bloomberg</a>
              <a href="#" className="text-xs font-bold hover:text-blue-700">X-Terminal</a>
            </div>
          </div>
          {t.footer.cols.map((col, i) => (
            <div key={i}>
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-slate-900">{col.title}</h5>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                {col.links.map(link => ( <li key={link}><a href="#" className="hover:text-blue-700 transition">{link}</a></li> ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[1800px] mx-auto px-10 mt-24 pt-8 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <span>{t.footer.copy}</span>
          <div className="flex gap-10">
            {t.footer.legal.map(link => ( <a key={link} href="#" className="hover:text-slate-900 transition">{link}</a> ))}
          </div>
        </div>
      </footer>
    </div>
  );
}