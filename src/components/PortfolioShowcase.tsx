import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, COMPANY_INFO } from '../data/siteData';
import { MessageCircle, ExternalLink } from 'lucide-react';

export const PortfolioShowcase: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Papelaria Empresarial', 'Papelaria Médica', 'Comunicação Visual', 'Gráfica Offset', 'Impressão Digital'];

  const filteredItems = filter === 'Todos'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-[#0f141c] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            Qualidade Comprovada
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trabalhos Realizados e Acabamentos
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Veja amostras reais dos nossos materiais impressos. A precisão de corte, vivacidade das cores e nobreza dos papéis que chegam até as mãos dos seus clientes.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-2xs hover:shadow-xl hover:border-slate-700 transition-all group flex flex-col"
            >
              <div className="relative aspect-16/10 bg-slate-800 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md flex items-center gap-1 border border-white/10">
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                    Padrão Gráfica Vinigor
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/85 backdrop-blur-md rounded-md text-[11px] font-bold text-emerald-400 border border-slate-800 shadow-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-sm font-medium border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(`Olá! Vi no site o projeto "${item.title}" e gostaria de orçar algo semelhante.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 shrink-0 ml-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 stroke-[2.2]" />
                    Orçar igual
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
