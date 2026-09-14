import React, { useRef, useState, useEffect } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Estimate active card index
      const cardWidth = 360;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, TESTIMONIALS.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 370;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 370;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="depoimentos" className="py-10 sm:py-14 bg-[#12161f] border-t border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header with Integrated Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Depoimentos de Clientes
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              O que dizem sobre a Vinigor
            </h2>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-slate-600">•</span>
              <span>Mais de 3.800 clientes atendidos</span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700 active:scale-95'
                  : 'bg-slate-900/60 text-slate-600 border-slate-800/80 cursor-not-allowed'
              }`}
              aria-label="Rolar depoimentos para a esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700 active:scale-95'
                  : 'bg-slate-900/60 text-slate-600 border-slate-800/80 cursor-not-allowed'
              }`}
              aria-label="Rolar depoimentos para a direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 no-scrollbar w-full max-w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="w-[260px] xs:w-[290px] sm:w-[350px] md:w-[370px] shrink-0 snap-start bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {t.date}
                  </span>
                </div>

                {/* Comment with clamped height */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic line-clamp-4">
                  "{t.comment}"
                </p>

                {/* Project Tag */}
                <div className="mt-3 pt-2.5 border-t border-slate-800">
                  <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    {t.projectType}
                  </span>
                </div>
              </div>

              {/* Author Profile */}
              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-slate-700 shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                    {t.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 truncate">
                    {t.role} • {t.company}
                  </p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    {t.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === activeIndex
                  ? 'w-6 bg-emerald-400'
                  : 'w-1.5 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
