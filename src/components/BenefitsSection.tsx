import React from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const benefitsList = [
    'Quanto sua conta representa por ano',
    'Qual solução pode fazer mais sentido',
    'Se existe potencial de economia',
    'Qual próximo passo seguir',
    'Como falar com a Comerc com os dados organizados',
  ];

  return (
    <section id="beneficios" className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] tracking-wider uppercase">
              Clareza Imediata
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              O que você descobre{' '}
              <span className="text-gradient-green">em poucos minutos</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium">
              A simulação entrega um raio-x direto e um direcionamento prático para seu perfil.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToCalculator}
                className="neon-glow-btn px-7 py-3.5 rounded-xl text-base font-bold inline-flex items-center gap-2.5 cursor-pointer shadow-md"
              >
                <Zap className="w-5 h-5 fill-current text-white" />
                <span>Descobrir agora</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl border border-emerald-200 space-y-3 bg-white shadow-sm">
              {benefitsList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#059669] shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#0F172A]">
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

