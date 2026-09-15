import React, { useState } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle2, Sparkles, FileUp } from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../data/siteData';

interface QuoteAssistantProps {
  initialCategory?: string;
  initialProduct?: string;
}

export const QuoteAssistant: React.FC<QuoteAssistantProps> = ({
  initialCategory = 'offset',
  initialProduct = ''
}) => {
  const [category, setCategory] = useState(initialCategory);
  const [product, setProduct] = useState(initialProduct);
  const [customProduct, setCustomProduct] = useState('');
  const [quantity, setQuantity] = useState('1000');
  const [paper, setPaper] = useState('Couché 300g');
  const [finishing, setFinishing] = useState('Verniz Localizado UV + Laminação Fosca');
  const [hasArtwork, setHasArtwork] = useState<'sim' | 'preciso' | 'ajuste'>('sim');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [observations, setObservations] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Available products for chosen category
  const activeCategoryObj = SERVICE_CATEGORIES.find(c => c.id === category) || SERVICE_CATEGORIES[0];

  const handleCategoryChange = (newCat: string) => {
    setCategory(newCat);
    const found = SERVICE_CATEGORIES.find(c => c.id === newCat);
    if (found && found.items.length > 0) {
      setProduct(found.items[0]);
    }
  };

  const currentProductName = product || activeCategoryObj.items[0] || 'Material Gráfico';

  const generateWhatsAppMessage = () => {
    const finalProduct = customProduct.trim() || currentProductName;
    const artStatus = hasArtwork === 'sim' 
      ? 'Já possuo a arte pronta' 
      : hasArtwork === 'preciso' 
        ? 'Preciso que a Gráfica crie a arte' 
        : 'Preciso de ajustes na minha arte atual';

    const text = 
      `*PEDIDO DE ORÇAMENTO - GRÁFICA VINIGOR*\n\n` +
      `👤 *Cliente:* ${clientName || 'Não informado'}\n` +
      `📱 *WhatsApp:* ${clientPhone || 'Não informado'}\n` +
      `📂 *Categoria:* ${activeCategoryObj.name}\n` +
      `📦 *Produto:* ${finalProduct}\n` +
      `🔢 *Quantidade/Tiragem:* ${quantity}\n` +
      `📄 *Papel/Material:* ${paper}\n` +
      `✨ *Acabamento:* ${finishing}\n` +
      `🎨 *Situação da Arte:* ${artStatus}\n` +
      (observations ? `📝 *Observações:* ${observations}\n\n` : '\n') +
      `Gostaria de saber os valores e o prazo para retirada na Penha / entrega. Obrigado!`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="orcamento" className="py-16 sm:py-24 bg-[#0f141c] border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            Faça seu Orçamento Rápido
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Monte seu orçamento sem burocracia
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Selecione as especificações do seu impresso. Enviaremos a proposta diretamente no seu WhatsApp
          </p>
        </div>

        {/* Simulator Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-950 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Orçamento Encaminhado com Sucesso!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                A janela do WhatsApp foi aberta com todos os detalhes do seu pedido. Nossa equipe na Penha responderá em instantes.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white stroke-[2.2]" />
                  Abrir WhatsApp Novamente
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Fazer outro orçamento
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Category selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Categoria do Serviço
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        category === cat.id
                          ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-md'
                          : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <p className="truncate font-bold">{cat.name}</p>
                      <p className={`text-[10px] mt-0.5 truncate ${category === cat.id ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                        {cat.badge}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Product & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    2. Produto ou Item
                  </label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                  >
                    {activeCategoryObj.items.map((item, idx) => (
                      <option key={idx} value={item} className="bg-slate-900 text-white">
                        {item}
                      </option>
                    ))}
                    <option value="outro" className="bg-slate-900 text-white">Outro material personalizado...</option>
                  </select>

                  {product === 'outro' && (
                    <input
                      type="text"
                      placeholder="Especifique qual material precisa..."
                      value={customProduct}
                      onChange={(e) => setCustomProduct(e.target.value)}
                      className="mt-2 w-full p-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    3. Quantidade / Tiragem Estimada
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 500 un, 1.000 un, 5 blocos, 2 wind banners"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Step 3: Material specs & Finish */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    4. Papel ou Substrato de Preferência
                  </label>
                  <select
                    value={paper}
                    onChange={(e) => setPaper(e.target.value)}
                    className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                  >
                    <option value="Couché 300g (Padrão nobre para cartões)" className="bg-slate-900 text-white">Couché 300g (Cartões e Pastas)</option>
                    <option value="Couché 115g / 150g (Ideal para panfletos e flyers)" className="bg-slate-900 text-white">Couché 115g / 150g (Panfletos e Folders)</option>
                    <option value="Sulfite 75g / 90g (Receituários e Timbrados)" className="bg-slate-900 text-white">Sulfite 75g / 90g (Receituários e Timbrados)</option>
                    <option value="Autocopiativo 2 vias (Comandas e Talões)" className="bg-slate-900 text-white">Autocopiativo 2 vias (Comandas e Talões)</option>
                    <option value="PVC Lavável / Plastificado (Cardápios)" className="bg-slate-900 text-white">PVC Lavável / Plastificado (Cardápios)</option>
                    <option value="Lona Frontlight 440g (Banners e Faixas)" className="bg-slate-900 text-white">Lona Frontlight 440g (Banners e Faixas)</option>
                    <option value="Vinil Adesivo Brilho / Fosco" className="bg-slate-900 text-white">Vinil Adesivo Brilho / Fosco</option>
                    <option value="Não sei / Preciso de recomendação" className="bg-slate-900 text-white">Não sei / Preciso de recomendação da gráfica</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    5. Acabamento
                  </label>
                  <select
                    value={finishing}
                    onChange={(e) => setFinishing(e.target.value)}
                    className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                  >
                    <option value="Verniz Localizado UV + Laminação Fosca" className="bg-slate-900 text-white">Verniz Localizado UV + Laminação Fosca</option>
                    <option value="Verniz Total Brilho na Frente" className="bg-slate-900 text-white">Verniz Total Brilho Frente</option>
                    <option value="Laminação Fosca (Toque Aveludado)" className="bg-slate-900 text-white">Laminação Fosca (BOPP)</option>
                    <option value="Corte e Vinco Especial" className="bg-slate-900 text-white">Corte e Vinco Especial / Cantos Redondos</option>
                    <option value="Blocagem com cola e picote" className="bg-slate-900 text-white">Blocagem com cola e picote</option>
                    <option value="Bastão de madeira, ponteiras e corda (Banner)" className="bg-slate-900 text-white">Bastão, ponteiras e corda (Banner)</option>
                    <option value="Sem acabamento especial (Corte reto simples)" className="bg-slate-900 text-white">Corte reto simples</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Artwork status */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  6. Situação da Arte Gráfica
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setHasArtwork('sim')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      hasArtwork === 'sim'
                        ? 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-500'
                        : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="font-bold text-emerald-400">✓ Já tenho a arte pronta</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Em PDF, Corel, AI ou JPG alta resolução</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHasArtwork('preciso')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      hasArtwork === 'preciso'
                        ? 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-500'
                        : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="font-bold text-emerald-400">✏️ Preciso que criem a arte</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Nossa equipe de designers desenvolve para você</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHasArtwork('ajuste')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      hasArtwork === 'ajuste'
                        ? 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-500'
                        : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="font-bold text-emerald-400">🔧 Preciso de pequenos ajustes</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Atualizar dados, telefones ou formatos</p>
                  </button>
                </div>
              </div>

              {/* Step 5: Customer Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Seu Nome ou Nome da Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Dr. Roberto / Pizzaria do Bairro"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Seu WhatsApp para Retorno
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: (21) 99999-9999"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                    className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Observações adicionais (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Algum detalhe de prazo, formato especial ou preferência de entrega/retirada na Penha..."
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  🔒 Seus dados são usados exclusivamente para a elaboração do seu orçamento.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md hover:shadow-emerald-600/25 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white stroke-[2.2]" />
                  <span className="text-white">Enviar Pedido pelo WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
