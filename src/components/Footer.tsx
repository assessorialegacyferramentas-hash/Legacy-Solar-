import React from 'react';
import { Phone, ShieldAlert, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F17] border-t border-white/10 pt-16 pb-24 sm:pb-12 text-[#9CA3AF] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <img
                src="https://www.comerc.com.br/hubfs/new-logo-white.svg"
                alt="Comerc Energia Logo"
                className="h-9 sm:h-10 w-auto object-contain max-w-[200px]"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-sm font-medium">
              A Comerc conecta pessoas e empresas a soluções de energia mais inteligentes, sustentáveis e econômicas em todo o Brasil.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-white pt-1">
              <Phone className="w-4 h-4 text-[#9EDBB9]" />
              <span>WhatsApp Comercial: +55 (84) 99617-7978</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Navegação</p>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => scrollToSection('como-funciona')} className="hover:text-[#9EDBB9] transition-colors cursor-pointer text-[#9CA3AF]">
                  Como Funciona
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('calculadora')} className="hover:text-[#9EDBB9] transition-colors cursor-pointer text-[#9CA3AF]">
                  Simular Economia
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/5584996177978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9EDBB9] transition-colors cursor-pointer text-[#9CA3AF] block"
                >
                  Falar com Especialista
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Methodology */}
          <div className="md:col-span-4 space-y-3 p-4 rounded-2xl bg-[#131B2A] border border-white/10 shadow-sm">
            <div className="flex items-center gap-2 text-white font-bold text-xs">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Aviso Legal e Compliance</span>
            </div>
            <p className="text-[11px] text-[#9CA3AF] leading-relaxed font-medium">
              As estimativas e percentuais simulados nesta ferramenta constituem diagnósticos iniciais baseados nas premissas informadas pelo usuário. A concessão de descontos, projetos de engenharia ou contratos de assinatura energética estão sujeitos a análise técnica e comercial da Comerc Energia.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9CA3AF] font-medium">
          <p>© 2026 COMERC ENERGIA. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#9EDBB9]" />
            <span>Soluções de energia inteligente para residências e empresas.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
