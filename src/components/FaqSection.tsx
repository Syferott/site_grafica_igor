import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-20 bg-[#0f141c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Respostas claras sobre envio de arquivos, formatos, prazos de entrega e pagamento.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-900/90 hover:bg-slate-800/80"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="font-bold text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <span className={`p-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-emerald-400 border-emerald-500/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 bg-slate-950/70">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still has doubts CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-white text-sm">
              Tem alguma dúvida específica sobre o seu projeto?
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Nossos consultores técnicos atendem de segunda à sexta das 9h às 18h e sábados das 9h às 12h.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors shrink-0 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white stroke-[2.2]" />
            <span className="text-white">Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
