import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  Instagram, 
  Facebook, 
  CheckCircle2, 
  Navigation 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Orçamento',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*MENSAGEM VIA SITE - GRÁFICA VINIGOR*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📧 *E-mail:* ${formData.email}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `📌 *Assunto:* ${formData.subject}\n` +
      `💬 *Mensagem:* ${formData.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneClean}?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-[#12161f] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            Fale Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Entre em Contato com a Gráfica Vinigor
          </h2>
          <p className="mt-2 text-base text-slate-300">
            Dúvidas? Sugestões? Elogios? Entre em contato via e-mail, telefone ou WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xs hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Atendimento via WhatsApp</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    De segunda à sexta, das 9h às 18h. Sábados das 9h às 12h.
                  </p>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    <span>{COMPANY_INFO.phone}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-950/80 text-emerald-300 rounded-full border border-emerald-500/30">
                      Chamar agora →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xs hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Atendimento via E-mail</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Envie seus arquivos técnicos ou propostas comerciais.
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-block mt-3 text-sm font-bold text-emerald-400 hover:text-emerald-300 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xs hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Atendimento via Telefone</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    De segunda à sexta, das 9h às 18h. Sábados das 9h às 12h.
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="inline-block mt-3 text-sm font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Nossa Localização</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {COMPANY_INFO.address.full}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Também com base de apoio em {COMPANY_INFO.regionalBranch.name} ({COMPANY_INFO.regionalBranch.address})
                  </p>
                  <a
                    href={COMPANY_INFO.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Como chegar pelo Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 shadow-xs flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase">Siga nossas redes:</span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Envie uma mensagem direta
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Preencha os campos abaixo e nosso time responderá rapidamente.
              </p>

              {sent ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Mensagem Enviada!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Recebemos sua mensagem e já estamos preparando seu atendimento.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 px-4 py-2 text-xs font-bold text-emerald-400 hover:underline cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp / Celular
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(21) 98383-1751"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Assunto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
                    >
                      <option value="Orçamento de Cartões de Visita" className="bg-slate-900 text-white">Orçamento de Cartões de Visita</option>
                      <option value="Orçamento de Papelaria Médica" className="bg-slate-900 text-white">Orçamento de Papelaria Médica (Receituários, Pastas)</option>
                      <option value="Orçamento de Papelaria Corporativa" className="bg-slate-900 text-white">Orçamento de Papelaria Corporativa (Timbrados, Pastas)</option>
                      <option value="Orçamento de Comunicação Visual" className="bg-slate-900 text-white">Orçamento de Comunicação Visual (Banners, Wind Banner, Adesivos)</option>
                      <option value="Impressão Digital Rápida / Apostilas" className="bg-slate-900 text-white">Impressão Digital Rápida / Apostilas</option>
                      <option value="Outro assunto / Dúvida geral" className="bg-slate-900 text-white">Outro assunto / Dúvida geral</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Mensagem ou Detalhes do Projeto
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Descreva o que você precisa (quantidade, tamanho, papel, se já tem a arte)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-slate-950/80 border border-slate-700 rounded-xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Enviar Mensagem</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
