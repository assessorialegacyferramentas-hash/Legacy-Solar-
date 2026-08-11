import React from 'react';
import { Zap, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const defaultWhatsappMsg = encodeURIComponent(
    'Olá! Estava navegando no site da Legacy Renewable Energy e gostaria de tirar dúvidas sobre o diagnóstico energético.'
  );
  const whatsappUrl = `https://wa.me/5584996177978?text=${defaultWhatsappMsg}`;

  return (
    <section className="py-24 bg-[#05070a] relative overflow-hidden">
      {/* Background Solar Flares */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-solar opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-[#00ff9d]/40 shadow-[0_0_60px_rgba(0,255,157,0.15)] space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d084]/10 border border-[#00ff9d]/30 text-xs font-bold text-[#00ff9d] tracking-wider uppercase">
            <Zap className="w-4 h-4 fill-current" />
            <span>Transforme Despesa em Estratégia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Pare de olhar sua conta de energia como um{' '}
            <span className="text-gradient-solar">custo inevitável.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#b8c0cc] max-w-2xl mx-auto leading-relaxed">
            Preencha a calculadora e descubra qual rota pode fazer mais sentido para reduzir, otimizar ou transformar sua relação com energia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={scrollToCalculator}
              className="w-full sm:w-auto neon-glow-btn px-8 py-4 rounded-xl text-lg font-extrabold flex items-center justify-center gap-3 cursor-pointer shadow-xl"
            >
              <Zap className="w-5 h-5 fill-current text-[#05070a]" />
              <span>Calcular agora</span>
              <ArrowRight className="w-5 h-5 text-[#05070a]" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-[#0b0f14] hover:bg-[#1a1f27] border border-[#00d084]/30 hover:border-[#00ff9d] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-[#00ff9d]" />
              <span>Falar com a Legacy</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#b8c0cc]/80">
            <ShieldCheck className="w-4 h-4 text-[#00ff9d]" />
            <span>Diagnóstico inicial gratuito • Atendimento consultivo • Sem promessa falsa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
