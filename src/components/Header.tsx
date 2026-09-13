import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface HeaderProps {
  onOpenQuoteModal?: (presetCategory?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços & Produtos', href: '#servicos' },
    { label: 'Papelaria Médica', href: '#papelaria-medica' },
    { label: 'Papelaria Empresarial', href: '#papelaria-empresarial' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top bar info - hidden on mobile, scrolls with page on desktop */}
      <div className="hidden md:block bg-slate-100 text-slate-600 text-xs py-2 px-4 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Seg à Sex: 09h às 18h | Sáb: 09h às 12h</span>
            </span>
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Penha, Rio de Janeiro - RJ</span>
            </span>
            <div className="flex items-center gap-2 border-l border-slate-300 pl-3">
              <a 
                href={COMPANY_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-600 hover:text-emerald-600 transition-colors"
                title="Instagram"
              >
                Instagram
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href={COMPANY_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-600 hover:text-emerald-600 transition-colors"
                title="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-xs">
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo with high-contrast badge */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
            <div className="relative flex items-center transition-all">
              <img 
                src="./images/logo2.png" 
                alt="Gráfica Vinigor - Imprimindo boas ideias" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                onError={(e) => {
                  // fallback to text if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback branded text */}
              <div style={{ display: 'none' }} className="flex-col">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-1">
                  GRÁFICA <span className="text-emerald-600">VINIGOR</span>
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-600">
                  Imprimindo Boas Ideias
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 rounded-lg hover:text-emerald-600 hover:bg-slate-100 transition-colors cursor-pointer text-left"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : handleNavClick('#orcamento')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              Simular Pedido
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow-emerald-600/25 transition-all group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white stroke-[2.2]" />
              <span className="text-white hidden sm:inline">Chamar no WhatsApp</span>
              <span className="text-white sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-emerald-600 rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
                else handleNavClick('#orcamento');
              }}
              className="w-full text-center py-2.5 px-4 bg-slate-100 text-slate-800 font-bold text-sm rounded-lg border border-slate-300 hover:bg-slate-200"
            >
              Simulador de Orçamento
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-white stroke-[2.2]" />
              <span className="text-white">Falar com Atendente (21) 98383-1751</span>
            </a>
          </div>
        </div>
      )}
      </header>
    </>
  );
};
