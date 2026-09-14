import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, Mail, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    scrollToSection(target, 75, 750);
  };
  return (
    <footer className="bg-[#090d14] text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://graficavinigor.com.br/wp-content/uploads/2024/11/logo_vinigor-300x107.png"
                alt="Gráfica Vinigor"
                className="h-10 sm:h-11 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = './images/logo_vinigor.png';
                }}
              />
              <span className="font-extrabold text-xl text-white tracking-tight">
                GRÁFICA VINIGOR
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-white">Imprimindo boas ideias</strong> desde a década de 90. Soluções de alta precisão em impressão digital rápida, offset e comunicação visual para todo o Rio de Janeiro.
            </p>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Nossos Serviços
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#servicos" onClick={(e) => handleScroll(e, '#servicos')} className="hover:text-emerald-400 transition-colors">Impressão Digital & Plottagem</a></li>
              <li><a href="#servicos" onClick={(e) => handleScroll(e, '#servicos')} className="hover:text-emerald-400 transition-colors">Gráfica Offset de Grandes Tiragens</a></li>
              <li><a href="#servicos" onClick={(e) => handleScroll(e, '#servicos')} className="hover:text-emerald-400 transition-colors">Comunicação Visual, Banners & Faixas</a></li>
              <li><a href="#papelaria-medica" onClick={(e) => handleScroll(e, '#papelaria-medica')} className="hover:text-emerald-400 transition-colors">Receituários Médicos e Pastas</a></li>
              <li><a href="#papelaria-empresarial" onClick={(e) => handleScroll(e, '#papelaria-empresarial')} className="hover:text-emerald-400 transition-colors">Cartões com Verniz Localizado UV</a></li>
              <li><a href="#servicos" onClick={(e) => handleScroll(e, '#servicos')} className="hover:text-emerald-400 transition-colors">Cardápios PVC e Plastificados</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Canais de Atendimento
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">{COMPANY_INFO.phone} (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>SEG À SEX 9h às 18h - Sáb 9h às 12h</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust, Payment & Security */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Segurança & Entrega
            </h4>
            
            {/* Site Seguro badge */}
            <div className="space-y-2">
              <img
                src="./images/site-seguro.png"
                alt="Site Seguro SSL"
                className="h-10 w-auto object-contain brightness-95"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-[11px] text-slate-400">
                Atendimento direto e seguro com conferência antes do fechamento.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-colors shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                <span className="text-white">Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Official legal details from old site */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            <p>
              Gráfica Vinigor • CNPJ {COMPANY_INFO.cnpj} • Todos os direitos reservados.
            </p>
            <p className="mt-0.5 text-slate-400">
              IR Design – CNPJ 19.642.269/0001-08 © 2024–2026. Desenvolvido por Igor Resende.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="hover:text-emerald-400 transition-colors cursor-pointer">Voltar ao topo ↑</a>
            <span>•</span>
            <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Instagram</a>
            <span>•</span>
            <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Facebook</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
