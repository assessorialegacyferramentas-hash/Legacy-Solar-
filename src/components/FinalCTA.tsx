import React from 'react';
import { Zap, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const defaultWhatsappMsg = encodeURIComponent(
    'Olá! Estava navegando no site da Comerc Energia e gostaria de tirar dúvidas sobre as soluções de economia de energia.'
  );
  const whatsappUrl = `https://wa.me/5584996177978?text=${defaultWhatsappMsg}`;

  return (
    <section className="py-24 bg-[#040D1D] relative overflow-hidden">
      {/* Background Solar Flares */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-solar opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-[#20D489]/40 shadow-[0_0_60px_rgba(32,212,137,0.15)] space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B86B]/15 border border-[#20D489]/30 text-xs font-bold text-[#20D489] tracking-wider uppercase">
            <Zap className="w-4 h-4 fill-current" />
            <span>Transforme Despesa em Estratégia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Energia pode ser mais simples,{' '}
            <span className="text-gradient-solar">inteligente e econômica.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#8FA3B8] max-w-2xl mx-auto leading-relaxed">
            Faça sua simulação e descubra qual solução da Comerc pode fazer mais sentido para seu perfil.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={scrollToCalculator}
              className="w-full sm:w-auto neon-glow-btn px-8 py-4 rounded-xl text-lg font-extrabold flex items-center justify-center gap-3 cursor-pointer shadow-xl"
            >
              <Zap className="w-5 h-5 fill-current text-[#040D1D]" />
              <span>Calcular minha economia</span>
              <ArrowRight className="w-5 h-5 text-[#040D1D]" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-[#071B3A] hover:bg-[#0B2554] border border-[#1065D8]/30 hover:border-[#20D489] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-[#20D489]" />
              <span>Falar com especialista</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#8FA3B8]/80">
            <ShieldCheck className="w-4 h-4 text-[#20D489]" />
            <span>Simulação inicial gratuita • Soluções para residências e empresas • Atendimento consultivo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
