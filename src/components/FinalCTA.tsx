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
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background Solar Flares */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-solar opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl p-8 sm:p-12 border-2 border-[#00B86B]/40 shadow-xl space-y-6 bg-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] tracking-wider uppercase">
            <Zap className="w-4 h-4 fill-current" />
            <span>Comerc Energia</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-2xl mx-auto">
            Energia pode ser mais simples,{' '}
            <span className="text-gradient-solar">inteligente e econômica.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto leading-relaxed font-medium">
            Faça sua simulação e descubra qual solução da Comerc pode fazer mais sentido para seu perfil.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={scrollToCalculator}
              className="w-full sm:w-auto neon-glow-btn px-7 py-3.5 rounded-xl text-base font-extrabold flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
            >
              <Zap className="w-5 h-5 fill-current text-white" />
              <span>Calcular minha economia</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-[#0F172A] bg-slate-100 hover:bg-slate-200 border border-slate-300 hover:border-[#00B86B] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm text-base"
            >
              <MessageSquare className="w-5 h-5 text-[#059669]" />
              <span>Falar com especialista</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#64748B] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>Simulação inicial gratuita • Para residências e empresas • Atendimento consultivo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
