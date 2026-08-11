import React from 'react';
import { Phone, ShieldAlert, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-[#00d084]/20 pt-16 pb-24 sm:pb-12 text-[#b8c0cc] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col items-start gap-1">
              <img
                src="https://i.imgur.com/26lmRao.png"
                alt="LEGACY Renewable Energy Logo"
                className="h-10 sm:h-12 w-auto object-contain max-w-[200px] drop-shadow-[0_0_12px_rgba(0,208,132,0.3)]"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] text-[#b8c0cc] tracking-[0.25em] uppercase font-semibold pl-0.5">
                renewable energy
              </span>
            </div>

            <p className="text-xs text-[#b8c0cc]/80 leading-relaxed max-w-sm">
              Especialistas em qualificação de demanda, diagnóstico energético e inteligência comercial para o setor de energia solar e renováveis no Brasil.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-white pt-1">
              <Phone className="w-4 h-4 text-[#00ff9d]" />
              <span>WhatsApp Comercial: +55 (84) 99617-7978</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Navegação</p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('calculadora')} className="hover:text-[#00ff9d] transition-colors cursor-pointer">
                  Calculadora de Economia
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('como-funciona')} className="hover:text-[#00ff9d] transition-colors cursor-pointer">
                  Como Funciona o Diagnóstico
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solucoes')} className="hover:text-[#00ff9d] transition-colors cursor-pointer">
                  Soluções Energéticas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('beneficios')} className="hover:text-[#00ff9d] transition-colors cursor-pointer">
                  Benefícios da Análise
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-[#00ff9d] transition-colors cursor-pointer">
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Methodology */}
          <div className="md:col-span-4 space-y-3 p-4 rounded-2xl bg-[#0b0f14] border border-[#00d084]/20">
            <div className="flex items-center gap-2 text-white font-bold text-xs">
              <ShieldAlert className="w-4 h-4 text-[#ff8a00]" />
              <span>Aviso Legal e Compliance</span>
            </div>
            <p className="text-[11px] text-[#b8c0cc]/70 leading-relaxed">
              As estimativas e percentuais simulados nesta ferramenta constituem diagnósticos iniciais baseados nas premissas informadas pelo usuário. A concessão de descontos, projetos de engenharia ou contratos de assinatura energética estão sujeitos a parecer técnico comercial.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#00d084]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#b8c0cc]/60">
          <p>© {new Date().getFullYear()} LEGACY RENEWABLE ENERGY. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#00ff9d]" />
            <span>Desenvolvido com tecnologia de alta conversão.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
