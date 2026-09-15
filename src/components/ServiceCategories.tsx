import React, { useState, useMemo } from 'react';
import { 
  Printer, 
  Layers, 
  Sparkles, 
  Stethoscope, 
  Briefcase, 
  Check, 
  MessageCircle, 
  Search, 
  ArrowUpRight 
} from 'lucide-react';
import { SERVICE_CATEGORIES, HIGHLIGHTED_PRODUCTS, COMPANY_INFO } from '../data/siteData';
import { ServiceCategory } from '../types';

interface ServiceCategoriesProps {
  onSelectProductForQuote?: (productName: string, category: string) => void;
}

export const ServiceCategories: React.FC<ServiceCategoriesProps> = ({ onSelectProductForQuote }) => {
  const [activeTab, setActiveTab] = useState<string>('digital');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = useMemo(() => {
    return SERVICE_CATEGORIES.find(c => c.id === activeTab) || SERVICE_CATEGORIES[0];
  }, [activeTab]);

  // Filter items based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    
    const results: { category: ServiceCategory; item: string }[] = [];
    SERVICE_CATEGORIES.forEach(cat => {
      cat.items.forEach(item => {
        if (item.toLowerCase().includes(q)) {
          results.push({ category: cat, item });
        }
      });
    });
    return results;
  }, [searchQuery]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Printer': return <Printer className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      default: return <Printer className="w-5 h-5" />;
    }
  };

  const generateWhatsAppProductUrl = (productName: string) => {
    const text = encodeURIComponent(`Olá, Gráfica Vinigor! Gostaria de um orçamento para *${productName}*. Poderia me passar os valores e prazos?`);
    return `https://wa.me/${COMPANY_INFO.phoneClean}?text=${text}`;
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-[#0f141c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            Tudo o que você precisa em um só lugar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nossos Serviços e Produtos Gráficos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Podemos realizar mais do que você procura. Descubra todas as possibilidades que oferecemos para atender suas necessidades e surpreender com soluções criativas.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-6 relative max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar produto (ex: receituário, verniz, comanda, banner)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-white placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white font-bold cursor-pointer"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* If Search is Active */}
        {searchResults !== null ? (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 mb-12">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">
                Resultados para "{searchQuery}" ({searchResults.length} {searchResults.length === 1 ? 'item' : 'itens'})
              </h3>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-emerald-400 font-semibold hover:underline cursor-pointer"
              >
                Voltar às categorias
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <p className="text-base font-medium text-slate-200">Nenhum produto com esse nome específico encontrado.</p>
                <p className="text-sm mt-1 text-slate-400">Nossa gráfica faz impressos sob medida! Entre em contato no WhatsApp para consultar seu projeto especial.</p>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white stroke-[2.2]" />
                  Consultar no WhatsApp (21) 98383-1751
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {searchResults.map((res, i) => (
                  <div key={i} className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        {res.category.name}
                      </span>
                      <p className="font-semibold text-white text-sm mt-1">
                        {res.item}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
                      <a
                        href={generateWhatsAppProductUrl(res.item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 stroke-[2.2]" />
                        Pedir Orçamento
                      </a>
                      {onSelectProductForQuote && (
                        <button
                          onClick={() => onSelectProductForQuote(res.item, res.category.id)}
                          className="text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                        >
                          Simule agora
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Category Tabs */
          <div>
            {/* Category Navigation Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    }`}
                  >
                    <span className={isActive ? 'text-slate-950' : 'text-slate-400'}>
                      {getIcon(cat.iconName)}
                    </span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Display */}
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Category Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-block px-3 py-1 bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full">
                    {currentCategory.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentCategory.name}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {currentCategory.longDesc}
                  </p>
                  
                  {/* Category Fast Action Card */}
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 shadow-xs space-y-3">
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Atendimento Especializado
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      Precisa de um formato específico ou ajuda com seu arquivo?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                      <a
                        href={generateWhatsAppProductUrl(currentCategory.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 text-white stroke-[2.2]" />
                        Pedir Orçamento Direto
                      </a>
                      {onSelectProductForQuote && (
                        <button
                          onClick={() => onSelectProductForQuote(currentCategory.items[0], currentCategory.id)}
                          className="inline-flex items-center justify-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg border border-slate-700 transition-colors cursor-pointer"
                        >
                          Simule agora
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Highlights from original site */}
                  <div className="text-xs text-slate-400 pt-2 space-y-1">
                    <p className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Conferência técnica gratuita antes de rodar a máquina</p>
                    <p className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Opções de papel: Couché, Offset, Kraft, Reciclato, PVC e Vinil</p>
                    <p className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Retirada no balcão da Penha ou envio para seu endereço</p>
                  </div>
                </div>

                {/* Right side: Complete List of Items for this Category */}
                <div className="lg:col-span-7">
                  <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-5 sm:p-6 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                      <span className="text-xs font-semibold text-slate-300">
                        Total de {currentCategory.items.length} itens disponíveis
                      </span>
                      <span className="text-xs text-slate-400">
                        Clique para orçar
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentCategory.items.map((item, index) => (
                        <a
                          key={index}
                          href={generateWhatsAppProductUrl(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all text-left"
                        >
                          <span className="w-5 h-5 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                            <Check className="w-3 h-3" />
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-emerald-400 leading-snug">
                            {item}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Featured Products / Highlights Showcase */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Os Mais Solicitados
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Destaques da Gráfica Vinigor
              </h3>
            </div>
            <p className="text-sm text-slate-400 mt-2 sm:mt-0 max-w-md">
              Materiais campeões de pedidos com acabamento de alto padrão e valores competitivos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTED_PRODUCTS.slice(0, 4).map((prod) => (
              <div 
                key={prod.id} 
                className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-2xs hover:shadow-lg hover:border-slate-700 transition-all flex flex-col group"
              >
                <div className="relative aspect-4/3 bg-slate-800 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {prod.popular && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-emerald-500 text-slate-950 text-[11px] font-extrabold rounded-md uppercase tracking-wider shadow-xs">
                      Popular
                    </span>
                  )}
                  {prod.basePrice && (
                    <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-slate-950/90 backdrop-blur-xs text-white text-xs font-semibold rounded-md border border-slate-700/60">
                      {prod.basePrice}
                    </span>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base leading-tight group-hover:text-emerald-400 transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    {prod.highlights && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {prod.highlights.map((hl, i) => (
                          <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-sm font-medium border border-slate-700">
                            {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Mín: {prod.minQuantity}
                    </span>
                    <a
                      href={generateWhatsAppProductUrl(prod.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                      Orçar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
