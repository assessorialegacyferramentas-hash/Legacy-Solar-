import React from 'react';
import { Home, Store, Factory, SunMedium, ArrowRight, Zap, TrendingUp } from 'lucide-react';

export const PainBlock: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const profileCards = [
    {
      title: 'Residência',
      desc: 'Conta de luz em casa ou apartamento.',
      badge: 'Residencial',
      cta: 'Simular residência',
      icon: Home,
    },
    {
      title: 'Empresa',
      desc: 'Comércio, clínica, mercado, hotel ou escritório.',
      badge: 'Comercial',
      cta: 'Simular empresa',
      icon: Store,
    },
    {
      title: 'Grandes Consumidores',
      desc: 'Indústria, galpão, condomínio ou operação com conta alta.',
      badge: 'Alta Demanda',
      cta: 'Simular alto consumo',
      icon: Factory,
    },
    {
      title: 'Assinatura Solar',
      desc: 'Para quem quer economizar sem instalar placas no imóvel.',
      badge: 'Sem Placas',
      cta: 'Ver assinatura',
      icon: SunMedium,
    },
  ];

  const impactItems = [
    { monthly: 'R$ 500 / mês', annual: 'R$ 6.000 / ano', impact: 'Pequenas economias acumuladas fazem diferença no orçamento' },
    { monthly: 'R$ 1.500 / mês', annual: 'R$ 18.000 / ano', impact: 'Potencial relevante de redução na fatura mensal' },
    { monthly: 'R$ 3.500 / mês', annual: 'R$ 42.000 / ano', impact: 'Custo significativo de operação que pode ser otimizado' },
    { monthly: 'R$ 5.000+ / mês', annual: 'R$ 60.000+ / ano', impact: 'Exige análise estratégica de Gestão ou Mercado Livre' },
  ];

  return (
    <div className="bg-white">
      {/* SECTION 4: CARDS DE PERFIL */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
              Escolha seu Perfil
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Qual perfil mais <span className="text-gradient-green">parece com o seu?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] font-medium">
              Escolha uma rota e vá direto para a calculadora.
            </p>
          </div>

          {/* 4 Profile Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {profileCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 hover:border-[#00B86B] hover:shadow-md transition-all duration-200 flex flex-col justify-between group bg-white"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[#059669]">
                        {card.badge}
                      </span>
                      <Icon className="w-5 h-5 text-[#00B86B] group-hover:scale-110 transition-transform" />
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-[#0F172A]">{card.title}</h3>
                      <p className="text-xs text-[#475569] font-medium mt-1 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5">
                    <button
                      onClick={scrollToCalculator}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-[#00B86B] text-xs font-bold text-[#0F172A] hover:text-[#059669] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: IMPACTO DA CONTA */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
              Conscientização Financeira
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Quanto sua conta <span className="text-gradient-green">pesa no ano?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] font-medium">
              Uma conta mensal pequena pode virar um custo alto quando vista em 12 meses.
            </p>
          </div>

          {/* 4 Impact Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-[#64748B] font-bold uppercase tracking-wider">Conta Mensal</span>
                  <p className="text-lg font-black text-[#0F172A] mt-0.5">{item.monthly}</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[11px] text-[#059669] font-bold uppercase tracking-wider">Custo Anual</span>
                  <p className="text-base font-extrabold text-[#059669] mt-0.5">{item.annual}</p>
                </div>

                <p className="text-xs text-[#475569] font-medium leading-relaxed">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center space-y-2">
            <button
              onClick={scrollToCalculator}
              className="neon-glow-btn px-7 py-3 rounded-xl text-sm font-extrabold inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Zap className="w-4 h-4 fill-current text-white" />
              <span>Simular meu perfil</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <p className="text-[11px] text-[#64748B] font-medium block">
              Valores ilustrativos. A economia depende da análise do perfil e solução contratada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

