import React from 'react';
import { Star, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-[#12161f] border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Credibilidade & Confiança Comprovada
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que nossos clientes dizem sobre a Vinigor
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Médicos, empresários, designers e comerciantes que confiam sua imagem e seus impressos à nossa equipe há mais de 20 anos.
          </p>

          {/* Social Proof Stats Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 bg-slate-900/90 border border-slate-800 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-extrabold text-white text-sm">4.9 / 5.0</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              Mais de <strong className="text-white">3.800 clientes atendidos</strong> no Rio de Janeiro e Região dos Lagos
            </span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Header with stars & date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {t.date}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-300 leading-relaxed italic relative">
                  "{t.comment}"
                </p>

                {/* Project Tag */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <span className="inline-block text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                    Projeto: {t.projectType}
                  </span>
                </div>
              </div>

              {/* Author Profile */}
              <div className="mt-6 flex items-center gap-3 pt-3 border-t border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-700 shadow-2xs shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white truncate">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {t.role} • {t.company}
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    {t.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
