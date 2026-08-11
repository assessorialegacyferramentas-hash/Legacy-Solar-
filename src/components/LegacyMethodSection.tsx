import React from 'react';
import { ShieldAlert, BarChart, FileCheck2, Sparkles, Zap, ArrowRight } from 'lucide-react';

export const LegacyMethodSection: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      title: 'Evita escolha errada',
      desc: 'Você entende se faz sentido assinatura, solução empresarial ou diagnóstico.',
      icon: ShieldAlert,
    },
    {
      title: 'Mostra o impacto real',
      desc: 'Sua conta mensal vira impacto anual, facilitando a decisão.',
      icon: BarChart,
    },
    {
      title: 'Organiza o atendimento',
      desc: 'Seus dados chegam prontos para o especialista continuar a análise.',
      icon: FileCheck2,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
            Análise Estratégica
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Por que analisar <span className="text-gradient-green">antes de escolher?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-medium">
            Porque cada perfil de consumo precisa de uma solução diferente.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 hover:border-[#00B86B] transition-all bg-white shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#059669]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A]">
                  {c.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <button
            onClick={scrollToCalculator}
            className="neon-glow-btn px-7 py-3 rounded-xl text-sm font-extrabold inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Zap className="w-4 h-4 fill-current text-white" />
            <span>Preencher calculadora agora</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Frase Institucional / Faixa Verde-Clara */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center relative overflow-hidden shadow-sm">
          <Sparkles className="w-6 h-6 text-amber-500 mx-auto mb-2 animate-pulse" />
          <p className="text-base sm:text-xl font-extrabold text-[#0F172A] max-w-3xl mx-auto leading-snug">
            “A Comerc conecta pessoas e empresas a soluções de energia mais inteligentes, sustentáveis e econômicas.”
          </p>
          <p className="text-xs text-[#059669] font-bold tracking-widest uppercase mt-3">
            — COMERC ENERGIA
          </p>
        </div>
      </div>
    </section>
  );
};

