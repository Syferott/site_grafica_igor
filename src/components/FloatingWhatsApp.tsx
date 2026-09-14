import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    'Olá! Gostaria de solicitar um orçamento rápido.',
    'Preciso de cartões de visita com verniz localizado.',
    'Gostaria de orçar receituários e pastas médicas.',
    'Preciso de banners / lonas de comunicação visual.'
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end max-w-[calc(100vw-2rem)]">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:max-w-sm bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src="./images/logo_vinigor.png"
                    alt="Gráfica Vinigor"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">Gráfica Vinigor</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online agora • Penha / RJ
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#0f141c] space-y-3 text-xs">
            <div className="bg-slate-900 p-3 rounded-xl rounded-tl-xs border border-slate-800 shadow-2xs text-slate-300 leading-relaxed">
              <p className="font-semibold text-white">Olá! Em que podemos te ajudar hoje?</p>
              <p className="text-slate-400 mt-1">
                Escolha uma das opções abaixo ou digite sua dúvida para falar com nossa equipe:
              </p>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-1.5 pt-1">
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left p-2.5 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/40 rounded-xl transition-all cursor-pointer font-medium"
                >
                  💬 {msg}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customMsg.trim()) handleSend(customMsg);
              }}
              className="pt-2 flex items-center gap-1.5"
            >
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-950 border border-slate-700 text-white placeholder-slate-500 rounded-xl text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold rounded-full shadow-lg hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        aria-label="Atendimento via WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-white stroke-[2.2]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full ring-2 ring-emerald-600"></span>
        </div>
        <span className="font-extrabold text-sm hidden sm:inline text-white">
          {isOpen ? 'Fechar' : 'WhatsApp'}
        </span>
      </button>
    </div>
  );
};
