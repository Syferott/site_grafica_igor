import React from 'react';
import { Send, FileCheck, Printer, Truck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Envie seu Pedido ou Arquivo',
      desc: 'Mande sua arte pronta ou apenas a ideia pelo WhatsApp ou simulador. Nossa equipe recebe na hora.',
      icon: <Send className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '02',
      title: 'Aprovação da Prova Digital',
      desc: 'Conferimos margens, sangria e padrão CMYK. Você confere o modelo final e aprova antes de rodar.',
      icon: <FileCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '03',
      title: 'Impressão & Acabamento Nobre',
      desc: 'Produzido em nosso parque gráfico com cortes precisos, verniz UV ou laminação de alto padrão.',
      icon: <Printer className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '04',
      title: 'Retirada ou Entrega Rápida',
      desc: 'Retire diretamente na nossa unidade da Penha/RJ ou receba no conforto da sua empresa.',
      icon: <Truck className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#12161f] text-white border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Simples, Rápido e Sem Burocracia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            Como funciona seu pedido na Gráfica Vinigor
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Garantia de que seu material sairá exatamente como você planejou, do envio do arquivo até a entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-800 rounded-xl">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-700">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-700">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
