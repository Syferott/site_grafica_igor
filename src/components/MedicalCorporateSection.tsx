import React, { useState } from 'react';
import { Stethoscope, Briefcase, CheckCircle2, MessageCircle, FileText, Folder, CreditCard } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const MedicalCorporateSection: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'medica' | 'empresarial'>('medica');

  const medicalHighlights = [
    {
      title: 'Receituários Simples e Controlados (Portaria 344)',
      desc: 'Padronizados conforme exigências do CFM e Anvisa. Numeração sequencial, canhoto picotado e vias autocopiativas nítidas.',
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      tag: 'Conforme CFM/Anvisa'
    },
    {
      title: 'Pastas Personalizadas para Exames e Laudos',
      desc: 'Com bolsa interna ou orelhas para guardar raios-x, exames laboratoriais e receitas sem amassar. Valoriza o consultório.',
      icon: <Folder className="w-5 h-5 text-emerald-400" />,
      tag: 'Alta Resistência'
    },
    {
      title: 'Atestados, Prontuários e Declarações Timbradas',
      desc: 'Papel Sulfite 75g, 90g ou Vergê especial com a logomarca e dados do médico com acabamento impecável.',
      icon: <Stethoscope className="w-5 h-5 text-emerald-400" />,
      tag: 'Personalizado'
    },
    {
      title: 'Cartões de Consulta e Agendamento de Retorno',
      desc: 'Formato clássico com espaço no verso para anotações de datas de retorno, recomendações ou mapa de acesso à clínica.',
      icon: <CreditCard className="w-5 h-5 text-emerald-400" />,
      tag: 'Verso Prático'
    }
  ];

  const corporateHighlights = [
    {
      title: 'Cartões de Visita com Verniz Localizado UV',
      desc: 'Couché 300g com toque aveludado de laminação fosca e brilho milimétrico no seu logotipo. Causam impacto imediato.',
      icon: <CreditCard className="w-5 h-5 text-emerald-400" />,
      tag: 'Acabamento Nobre'
    },
    {
      title: 'Pastas Corporativas com Encaixe para Cartão',
      desc: 'Apresente propostas comerciais, contratos e catálogos com elegância e profissionalismo que fecham negócios.',
      icon: <Folder className="w-5 h-5 text-emerald-400" />,
      tag: 'Para Contratos'
    },
    {
      title: 'Papéis Timbrados e Envelopes Ofício / Saco',
      desc: 'Papelaria institucional que transmite solidez para documentos oficiais, pareceres jurídicos e orçamentos.',
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      tag: 'Documentos Oficiais'
    },
    {
      title: 'Blocos de Notas, Comandas e Talões Numerados',
      desc: 'Organização interna da sua equipe com blocos colados, numerados ou autocopiativos para faturamento e ordens de serviço.',
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      tag: 'Organização'
    }
  ];

  const currentList = activeSegment === 'medica' ? medicalHighlights : corporateHighlights;

  return (
    <section id="papelaria-medica" className="py-16 sm:py-20 bg-[#12161f] text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toggle between Médica and Empresarial */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              Linhas Corporativas de Alto Padrão
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {activeSegment === 'medica' ? 'Papelaria Médica e Clínica' : 'Papelaria Empresarial & Corporativa'}
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
              Materiais desenvolvidos com padrão rigoroso de acabamento para fortalecer a credibilidade da sua clínica ou empresa.
            </p>
          </div>

          <div id="papelaria-empresarial" className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveSegment('medica')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSegment === 'medica'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">Papelaria Médica</span>
            </button>
            <button
              onClick={() => setActiveSegment('empresarial')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSegment === 'empresarial'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">Papelaria Empresarial</span>
            </button>
          </div>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-sm">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para ${item.title} da linha ${activeSegment === 'medica' ? 'Médica' : 'Empresarial'}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center justify-between group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Pedir Orçamento</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with Guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#141a24] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Precisa de padronização para mais de um profissional ou filial?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Mantemos seu arquivo arquivado em segurança com prova de cor padronizada para reordens rápidas em segundos.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(`Olá! Gostaria de falar sobre papelaria corporativa/médica para minha equipe/empresa.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shrink-0 transition-colors shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white stroke-[2.2]" />
            <span className="text-white">Falar com Especialista</span>
          </a>
        </div>

      </div>
    </section>
  );
};
