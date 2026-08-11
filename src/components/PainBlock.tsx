import React from 'react';
import { DollarSign, AlertTriangle, TrendingUp, Zap, ArrowRight } from 'lucide-react';

export const PainBlock: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      monthly: 'R$ 500 / mês',
      annual: 'R$ 6.000 / ano',
      impact: 'Pode haver oportunidade de economia.',
      highlightColor: 'border-[#00d084]/30',
      badge: 'Cenário Inicial',
      icon: DollarSign,
    },
    {
      monthly: 'R$ 1.500 / mês',
      annual: 'R$ 18.000 / ano',
      impact: 'Já existe impacto direto no caixa.',
      highlightColor: 'border-[#00ff9d]/40',
      badge: 'Impacto Direto',
      icon: TrendingUp,
    },
    {
      monthly: 'R$ 5.000 / mês',
      annual: 'R$ 60.000 / ano',
      impact: 'Energia vira decisão estratégica.',
      highlightColor: 'border-[#ff8a00]/50',
      badge: 'Decisão Estratégica',
      icon: AlertTriangle,
    },
    {
      monthly: 'Acima de R$ 10.000 / mês',
      annual: 'R$ 120.000+ / ano',
      impact: 'A análise energética pode mudar margem, previsibilidade e competitividade.',
      highlightColor: 'border-[#ffc247]/60 shadow-[0_0_20px_rgba(255,138,0,0.15)]',
      badge: 'Prioridade Empresarial',
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 bg-[#0b0f14] relative overflow-hidden border-t border-b border-[#00d084]/15">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#ff8a00]/10 border border-[#ff8a00]/30 text-xs font-bold text-[#ff8a00] tracking-wide uppercase">
            Conscientização Financeira
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Você sabe quanto sua conta de energia{' '}
            <span className="text-gradient-solar">pesa no seu caixa?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#b8c0cc]">
            Muitas empresas olham apenas o valor mensal da conta, mas esquecem do impacto acumulado ano após ano.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border ${card.highlightColor} hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Subtle Glow Header Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#05070a] border border-[#00d084]/20 text-[#00ff9d]">
                      {card.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#ff8a00] group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <p className="text-xs text-[#b8c0cc] uppercase tracking-wider font-medium">Gasto Mensal</p>
                    <p className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">{card.monthly}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#05070a] border border-[#00d084]/15">
                    <p className="text-[11px] text-[#b8c0cc] uppercase tracking-wider">Impacto Anual Direto</p>
                    <p className="text-lg font-bold text-[#00ff9d] mt-0.5">{card.annual}</p>
                  </div>

                  <p className="text-sm text-[#b8c0cc] leading-relaxed pt-1 font-medium">
                    "{card.impact}"
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={scrollToCalculator}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#05070a] hover:bg-[#00d084]/10 border border-[#00d084]/30 hover:border-[#00ff9d] text-xs font-bold text-white hover:text-[#00ff9d] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Simular este cenário</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner Bottom */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToCalculator}
            className="neon-glow-btn px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-3 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-current text-[#05070a]" />
            <span>Calcule seu cenário agora</span>
            <ArrowRight className="w-5 h-5 text-[#05070a]" />
          </button>
        </div>
      </div>
    </section>
  );
};
