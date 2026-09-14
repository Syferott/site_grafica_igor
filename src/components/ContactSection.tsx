import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Navigation,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-10 sm:py-14 bg-[#12161f] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            Fale Conosco
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Entre em Contato com a Gráfica Vinigor
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
            Atendimento humanizado para dúvidas, pedidos e orçamentos rápidos.
          </p>
        </div>

        {/* 4 Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* WhatsApp Card */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-bold text-white text-sm">WhatsApp Comercial</h3>
              <p className="text-xs text-slate-400 mt-1">
                Atendimento rápido para orçamentos e envio de arquivos.
              </p>
            </div>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">Ligação Telefônica</h3>
              <p className="text-xs text-slate-400 mt-1">
                Seg a Sex: 9h às 18h | Sáb: 9h às 12h
              </p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="mt-4 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">E-mail Comercial</h3>
              <p className="text-xs text-slate-400 mt-1">
                Propostas e arquivos técnicos em alta resolução.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="mt-4 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold rounded-xl transition-colors truncate"
              title={COMPANY_INFO.email}
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Address / Maps Card */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm">Localização</h3>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
              </p>
            </div>
            <a
              href={COMPANY_INFO.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              <span>Abrir no Maps</span>
            </a>
          </div>

        </div>

        {/* Compact Footer Bar for Socials & Regional Info */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            <span className="text-slate-300 font-semibold">Atendimento no Rio e Grande Rio</span> • Apoio em {COMPANY_INFO.regionalBranch.name}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium mr-1">Redes:</span>
            <a
              href={COMPANY_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-pink-400 border border-slate-700 transition-colors font-semibold"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href={COMPANY_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 transition-colors font-semibold"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
