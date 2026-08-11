import React from 'react';
import { Home, Building2, Store, Factory, ArrowRight, Zap } from 'lucide-react';

export const PainBlock: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      title: 'Residência',
      monthly: 'R$ 300 - R$ 800 / mês',
      annual: 'Até R$ 9.600 / ano',
      impact: 'Entenda se existe potencial de economia sem precisar instalar placas.',
      badge: 'Residencial',
      icon: Home,
    },
    {
      title: 'Apartamento / Alugado',
      monthly: 'R$ 500 - R$ 1.500 / mês',
      annual: 'Até R$ 18.000 / ano',
      impact: 'Avalie alternativas como assinatura de energia solar sem obra.',
      badge: 'Assinatura Solar',
      icon: Building2,
    },
    {
      title: 'Comércio / PME',
      monthly: 'R$ 1.500 - R$ 5.000 / mês',
      annual: 'Até R$ 60.000 / ano',
      impact: 'Descubra quanto a energia representa no seu caixa todos os meses.',
      badge: 'Solução Empresarial',
      icon: Store,
    },
    {
      title: 'Grandes Consumidores',
      monthly: 'Acima de R$ 5.000 / mês',
      annual: 'R$ 60.000+ / ano',
      impact: 'Contas altas exigem uma análise energética mais estratégica.',
      badge: 'Gestão & Mercado Livre',
      icon: Factory,
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-200">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] tracking-wide uppercase">
            Conscientização Financeira
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Quanto sua conta de energia{' '}
            <span className="text-gradient-green">pesa no seu mês?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Seja em casa ou na empresa, energia é uma despesa recorrente. A diferença está em descobrir se existe uma forma mais inteligente de lidar com esse custo.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-200 hover:border-[#00B86B] hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-white shadow-sm"
              >
                {/* Subtle Glow Header Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00B86B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[#059669]">
                      {card.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#00B86B] group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold">{card.title}</p>
                    <p className="text-lg font-extrabold text-[#0F172A] mt-0.5">{card.monthly}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[11px] text-[#64748B] uppercase tracking-wider font-semibold">Impacto Anual Estimado</p>
                    <p className="text-base font-bold text-[#059669] mt-0.5">{card.annual}</p>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed pt-1 font-medium">
                    "{card.impact}"
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={scrollToCalculator}
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-[#00B86B] text-xs font-bold text-[#0F172A] hover:text-[#059669] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Simular este perfil</span>
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
            className="neon-glow-btn px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-3 cursor-pointer shadow-md"
          >
            <Zap className="w-5 h-5 fill-current text-white" />
            <span>Calcular minha economia</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
