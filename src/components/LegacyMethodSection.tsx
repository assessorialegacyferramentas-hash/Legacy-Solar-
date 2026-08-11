import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const LegacyMethodSection: React.FC = () => {
  const benefits = [
    {
      title: 'Mais clareza sobre seu consumo',
      desc: 'Identificação exata do peso anual da energia no seu orçamento familiar ou empresarial.',
    },
    {
      title: 'Indicação mais alinhada ao seu perfil',
      desc: 'Assinatura, gestão ou diagnóstico sem empurrar produtos genéricos.',
    },
    {
      title: 'Soluções para residências e empresas',
      desc: 'Opções abrangentes adaptadas para CPFs e CNPJs de variados portes de consumo.',
    },
    {
      title: 'Atendimento com dados organizados',
      desc: 'A equipe consultiva da Comerc recebe suas informações de forma estruturada para maior agilidade.',
    },
    {
      title: 'Menos achismo na tomada de decisão',
      desc: 'Análise orientada por dados reais de consumo e localização geográfica.',
    },
    {
      title: 'Energia como estratégia de economia',
      desc: 'Aproximação consultiva focada em transformar despesa mensal em oportunidade financeira.',
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] tracking-wider uppercase">
            Metodologia Comercial Consultiva
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Por que a Comerc começa pela{' '}
            <span className="text-gradient-green">análise do seu perfil?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Porque cada consumidor tem uma realidade. Uma residência, um apartamento, um comércio e uma indústria não precisam da mesma solução. A simulação ajuda a entender o cenário antes de indicar o melhor caminho.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-2xl border border-slate-200 hover:border-[#00B86B] transition-all duration-300 space-y-2 group bg-white shadow-sm"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00B86B] shrink-0 group-hover:scale-110 transition-transform" />
                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#00B86B] transition-colors">
                  {b.title}
                </h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed pl-8 font-medium">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Quote Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-50 via-slate-50 to-emerald-50 border border-emerald-200 text-center relative overflow-hidden shadow-xl">
          <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-3 animate-pulse" />
          <p className="text-lg sm:text-2xl font-extrabold text-[#0F172A] max-w-4xl mx-auto leading-snug">
            “A Comerc conecta pessoas e empresas a soluções de energia mais inteligentes, sustentáveis e econômicas.”
          </p>
          <p className="text-xs text-[#059669] font-bold tracking-widest uppercase mt-4">
            — COMERC ENERGIA
          </p>
        </div>
      </div>
    </section>
  );
};
