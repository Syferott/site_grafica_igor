import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import cartaoVernizRealImg from '../assets/images/cartao_verniz_real_1789429910140.jpg';
import receitaBrancaImg from '../assets/images/receita_branca_1789429567242.jpg';
import windBannerFacaImg from '../assets/images/wind_banner_faca_1789430122076.jpg';

interface HeroProps {
  onExploreServices: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onOpenQuote }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#12161f] via-[#141a24] to-[#0f141c] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Background subtle accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-slate-700/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Slogan & Title */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-bold tracking-wider text-emerald-400 uppercase">
                {COMPANY_INFO.slogan}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Sua parceira completa em <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">Impressão Digital</span>, Offset e Comunicação Visual.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl pt-2">
                Qualidade de ponta para empresas, profissionais de saúde e comércios no Rio de Janeiro. De pequenas tiragens a grandes volumes.
              </p>
            </div>

            {/* Core differentiators checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Soluções em impressão Off-set e Digital</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Especialistas em Papelaria Médica e Corporativa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acabamentos nobres: Verniz UV, BOPP e Laminação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Retirada na Penha / RJ ou entrega rápida</span>
              </div>
            </div>

            {/* CTA Buttons in logo green */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3.5 pt-3 w-full">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-emerald-600/25 transition-all transform active:scale-95 cursor-pointer text-center"
              >
                <MessageCircle className="w-5 h-5 text-white stroke-[2.2] shrink-0" />
                <span className="text-white">Pedir Orçamento no WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base rounded-xl border border-slate-700 hover:border-slate-600 shadow-xs transition-colors cursor-pointer text-center"
              >
                <span>Simule agora pelo site</span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-3 text-slate-400 hover:text-emerald-400 text-sm font-semibold transition-colors cursor-pointer text-center"
              >
                Ver todos os serviços ↓
              </button>
            </div>

          </div>

          {/* Right Column: Visual Composite Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="rounded-2xl p-3 bg-slate-900/90 backdrop-blur-xs border border-slate-800 shadow-2xl space-y-3">
                {/* Main Showcase Image */}
                <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-800 group">
                  <img
                    src={cartaoVernizRealImg}
                    alt="Cartão de Visita com Verniz Localizado - Gráfica Vinigor"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Tag inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">Destaque</span>
                      <p className="text-sm font-bold leading-tight">Cartões Verniz Localizado & Papelaria Fina</p>
                    </div>
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-xs font-semibold">
                      4x4 Cores
                    </span>
                  </div>
                </div>

                {/* Grid of 2 mini samples */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg overflow-hidden bg-slate-800/80 p-2.5 border border-slate-700/80 flex items-center gap-2.5">
                    <img
                      src={receitaBrancaImg}
                      alt="Papelaria Médica"
                      className="w-12 h-12 rounded-md object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">Papelaria Médica</p>
                      <p className="text-[11px] text-slate-400">Receituários e Pastas</p>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden bg-slate-800/80 p-2.5 border border-slate-700/80 flex items-center gap-2.5">
                    <img
                      src={windBannerFacaImg}
                      alt="Comunicação Visual"
                      className="w-12 h-12 rounded-md object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">Comunicação Visual</p>
                      <p className="text-[11px] text-slate-400">Banners e Sinalização</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
