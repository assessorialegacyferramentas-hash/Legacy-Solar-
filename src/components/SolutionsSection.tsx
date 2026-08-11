import React from 'react';
import { Sun, Home, Building2, BarChart3, TrendingUp, SearchCheck, ArrowRight } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const solutions = [
    {
      title: 'Energia Solar por Assinatura',
      description: 'Economia com energia solar sem instalar placas no imóvel.',
      icon: Sun,
      badge: 'Sem Obras',
    },
    {
      title: 'Residências',
      description: 'Alternativas para reduzir o impacto da conta de luz.',
      icon: Home,
      badge: 'Residencial',
    },
    {
      title: 'Empresas',
      description: 'Soluções para comércios, condomínios e operações com maior consumo.',
      icon: Building2,
      badge: 'Corporativo',
    },
    {
      title: 'Gestão de Energia',
      description: 'Mais controle e previsibilidade para empresas consumidoras.',
      icon: BarChart3,
      badge: 'Eficiência',
    },
    {
      title: 'Mercado Livre de Energia',
      description: 'Análise estratégica para empresas com maior demanda energética.',
      icon: TrendingUp,
      badge: 'Estratégico',
    },
    {
      title: 'Diagnóstico Energético',
      description: 'Entenda seu consumo antes de contratar uma solução.',
      icon: SearchCheck,
      badge: 'Consultoria',
    },
  ];

  return (
    <section id="solucoes" className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
            Ecossistema de Soluções
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Soluções <span className="text-gradient-green">Comerc Energia</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-medium">
            Uma rota para cada perfil de consumo.
          </p>
        </div>

        {/* Grid of 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 hover:border-[#00B86B] transition-all group flex flex-col justify-between hover:-translate-y-0.5 bg-white shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#00B86B] group-hover:scale-110 group-hover:border-[#00B86B] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[#059669]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#00B86B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={scrollToCalculator}
                    className="text-xs font-bold text-[#059669] group-hover:text-[#00B86B] flex items-center gap-1.5 cursor-pointer hover:underline"
                  >
                    <span>Simular este perfil</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

