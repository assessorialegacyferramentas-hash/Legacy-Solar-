import React from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const benefitsList = [
    'Quanto sua conta representa em impacto acumulado por ano',
    'Se seu perfil combina mais com instalação própria ou assinatura solar',
    'Se sua empresa necessita de diagnóstico energético corporativo',
    'Se existe oportunidade viável de receita em seu telhado ou terreno',
    'Qual próximo passo técnico e financeiro faz mais sentido',
    'Como conversar com a Legacy no WhatsApp já com todos os dados organizados',
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#05070a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#00d084]/10 border border-[#00d084]/30 text-xs font-bold text-[#00ff9d] tracking-wider uppercase">
              Clareza Imediata
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              O que você descobre ao{' '}
              <span className="text-gradient-green">preencher a calculadora</span>
            </h2>
            <p className="text-base text-[#b8c0cc] leading-relaxed">
              Em menos de 2 minutos você obtém um raio-x completo do seu consumo elétrico e direcionamento estratégico.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToCalculator}
                className="neon-glow-btn px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-3 cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-current text-[#05070a]" />
                <span>Preencher calculadora agora</span>
                <ArrowRight className="w-5 h-5 text-[#05070a]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#00ff9d]/30 space-y-4">
              {benefitsList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0b0f14] border border-[#00d084]/15">
                  <div className="w-6 h-6 rounded-lg bg-[#00d084]/20 border border-[#00ff9d] flex items-center justify-center text-[#00ff9d] shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
