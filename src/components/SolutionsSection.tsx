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
      description: 'Economia com energia solar sem precisar instalar placas no imóvel.',
      icon: Sun,
      badge: 'Sem Obras',
    },
    {
      title: 'Soluções para Residências',
      description: 'Alternativas para reduzir o impacto da conta de luz no orçamento familiar.',
      icon: Home,
      badge: 'Residencial',
    },
    {
      title: 'Soluções para Empresas',
      description: 'Análise energética para comércios, indústrias, condomínios e operações com maior consumo.',
      icon: Building2,
      badge: 'Corporativo',
    },
    {
      title: 'Gestão de Energia',
      description: 'Mais controle, previsibilidade e inteligência para empresas consumidoras de energia.',
      icon: BarChart3,
      badge: 'Eficiência',
    },
    {
      title: 'Mercado Livre de Energia',
      description: 'Possibilidade de análise para empresas que buscam estratégias energéticas mais avançadas.',
      icon: TrendingUp,
      badge: 'Estratégico',
    },
    {
      title: 'Diagnóstico Energético',
      description: 'Entenda seu perfil de consumo antes de tomar qualquer decisão de contratação.',
      icon: SearchCheck,
      badge: 'Consultoria',
    },
  ];

  return (
    <section id="solucoes" className="py-20 bg-[#040D1D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#1065D8]/20 border border-[#1E88FF]/30 text-xs font-bold text-[#20D489] tracking-wider uppercase">
            Ecossistema de Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Soluções <span className="text-gradient-green">Comerc Energia</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8FA3B8]">
            Cada perfil de consumo possui uma rota ideal. Descubra qual modelo se encaixa com a sua necessidade.
          </p>
        </div>

        {/* Grid of 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-[#1065D8]/30 hover:border-[#20D489] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#071B3A] border border-[#1065D8]/30 flex items-center justify-center text-[#20D489] group-hover:scale-110 group-hover:border-[#20D489] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#040D1D] border border-[#1065D8]/30 text-[#20D489]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#20D489] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#8FA3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={scrollToCalculator}
                    className="text-xs font-bold text-[#20D489] group-hover:text-white flex items-center gap-1.5 cursor-pointer hover:underline"
                  >
                    <span>Simular para meu perfil</span>
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
