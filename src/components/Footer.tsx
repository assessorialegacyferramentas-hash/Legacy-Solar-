import React from 'react';
import { Phone, ShieldAlert, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040D1D] border-t border-[#1065D8]/20 pt-16 pb-24 sm:pb-12 text-[#8FA3B8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col items-start gap-1">
              <img
                src="https://www.comerc.com.br/hubfs/new-logo-white.svg"
                alt="Comerc Energia Logo"
                className="h-10 sm:h-12 w-auto object-contain max-w-[200px] drop-shadow-[0_0_12px_rgba(30,136,255,0.4)]"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] text-[#8FA3B8] tracking-[0.25em] uppercase font-semibold pl-0.5">
                renewable energy
              </span>
            </div>

            <p className="text-xs text-[#8FA3B8]/80 leading-relaxed max-w-sm">
              A Comerc conecta pessoas e empresas a soluções de energia mais inteligentes, sustentáveis e econômicas em todo o Brasil.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-white pt-1">
              <Phone className="w-4 h-4 text-[#20D489]" />
              <span>WhatsApp Comercial: +55 (84) 99617-7978</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Navegação</p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('calculadora')} className="hover:text-[#20D489] transition-colors cursor-pointer">
                  Calculadora de Economia
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('como-funciona')} className="hover:text-[#20D489] transition-colors cursor-pointer">
                  Como Funciona a Simulação
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solucoes')} className="hover:text-[#20D489] transition-colors cursor-pointer">
                  Soluções Comerc
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('beneficios')} className="hover:text-[#20D489] transition-colors cursor-pointer">
                  Benefícios da Análise
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-[#20D489] transition-colors cursor-pointer">
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Methodology */}
          <div className="md:col-span-4 space-y-3 p-4 rounded-2xl bg-[#071B3A] border border-[#1065D8]/20">
            <div className="flex items-center gap-2 text-white font-bold text-xs">
              <ShieldAlert className="w-4 h-4 text-[#FFB000]" />
              <span>Aviso Legal e Compliance</span>
            </div>
            <p className="text-[11px] text-[#8FA3B8]/70 leading-relaxed">
              As estimativas e percentuais simulados nesta ferramenta constituem diagnósticos iniciais baseados nas premissas informadas pelo usuário. A concessão de descontos, projetos de engenharia ou contratos de assinatura energética estão sujeitos a análise técnica e comercial da Comerc Energia.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1065D8]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8FA3B8]/60">
          <p>© 2026 COMERC ENERGIA. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#20D489]" />
            <span>Soluções de energia inteligente para residências e empresas.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
