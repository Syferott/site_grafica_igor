import React from 'react';
import { Target, Award, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface AboutSectionProps {
  onOpenQuote?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="quem-somos" className="py-16 sm:py-24 bg-[#0f141c] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content & Journey */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Nossa Empresa
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Mais de 20 anos de tradição e inovação no mercado gráfico
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                A <strong className="text-white">Gráfica Vinigor</strong> se consolidou como uma das principais referências em soluções visuais inovadoras no Rio de Janeiro. Desde nossa fundação, nos dedicamos a oferecer serviços de alta qualidade, atendendo às necessidades específicas de cada cliente.
              </p>
              <p className="text-sm sm:text-base text-slate-300">
                <strong className="text-white">Nossa jornada:</strong> Começamos nos anos 90 com um grupo seleto de colaboradores que construíram os alicerces do que somos hoje. Ao longo dos anos, expandimos nossas capacidades, investindo continuamente em máquinas de última geração e talentos especializados.
              </p>
            </div>

            {/* Mission Box */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Target className="w-5 h-5" />
                <span>Nossa Missão</span>
              </div>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                Fortalecer marcas e empresas por meio de soluções gráficas impactantes, valorizando suas identidades visuais e fazendo com que sejam lembradas pelo público com orgulho e autoridade.
              </p>
            </div>

            {/* Callout action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-colors shadow-md cursor-pointer"
              >
                <span>Falar com Nossa Equipe</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {onOpenQuote && (
                <button
                  onClick={onOpenQuote}
                  className="px-5 py-3 text-slate-300 hover:text-white font-bold text-sm underline cursor-pointer"
                >
                  Fazer um orçamento online
                </button>
              )}
            </div>

          </div>

          {/* Right: Graphic Identity & Visual Proof */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-4 bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              {/* Graphic Print Press image */}
              <div className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-800 relative">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                  alt="Parque Gráfico e Produção"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Parque Gráfico</p>
                    <p className="text-sm font-bold">Estrada José Rucas, 201 - Penha / RJ</p>
                  </div>
                </div>
              </div>

              {/* Logo highlight card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-4">
                <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-xs">
                  <img
                    src="./images/logo_vinigor.png"
                    alt="Gráfica Vinigor"
                    className="h-9 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase">Tradição</span>
                  <p className="text-xs font-bold text-white">Desde a década de 1990</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
