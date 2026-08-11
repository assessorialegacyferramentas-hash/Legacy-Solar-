import React from 'react';
import { Sun, Zap, SearchCheck, Warehouse, MapPin, Wrench, Filter, ArrowRight } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const solutions = [
    {
      title: 'Instalação própria',
      description: 'Para quem tem imóvel próprio, telhado disponível e deseja transformar despesa recorrente em ativo de economia.',
      icon: Sun,
      badge: 'Ativo de Economia',
    },
    {
      title: 'Assinatura solar',
      description: 'Para quem quer economizar sem instalar placas, sem obra e sem investimento inicial elevado.',
      icon: Zap,
      badge: 'Sem Obra',
    },
    {
      title: 'Diagnóstico energético empresarial',
      description: 'Para empresas com conta alta que precisam entender onde está a perda e qual solução faz mais sentido.',
      icon: SearchCheck,
      badge: 'Alta Performance',
    },
    {
      title: 'Telhado grande ou galpão',
      description: 'Para empresas com estrutura disponível que podem transformar espaço ocioso em economia ou oportunidade.',
      icon: Warehouse,
      badge: 'Espaço Ocioso',
    },
    {
      title: 'Terreno para usina',
      description: 'Para proprietários com área disponível que desejam avaliar potencial de parceria energética.',
      icon: MapPin,
      badge: 'Parceria Energética',
    },
    {
      title: 'Manutenção solar',
      description: 'Para quem já possui placas e precisa manter geração, performance e segurança.',
      icon: Wrench,
      badge: 'Geração Máxima',
    },
    {
      title: 'Funil para empresa solar',
      description: 'Para empresas solares que querem captar leads qualificados usando tráfego, calculadora e WhatsApp.',
      icon: Filter,
      badge: 'Aquisição B2B',
    },
  ];

  return (
    <section id="solucoes" className="py-20 bg-[#05070a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#00d084]/10 border border-[#00d084]/30 text-xs font-bold text-[#00ff9d] tracking-wider uppercase">
            Ecossistema de Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Uma conta de energia pode abrir{' '}
            <span className="text-gradient-green">várias rotas de economia</span>
          </h2>
          <p className="text-base sm:text-lg text-[#b8c0cc]">
            Cada perfil de consumo possui uma estratégia ideal. Descubra qual modelo se encaixa com o seu momento.
          </p>
        </div>

        {/* Grid of 7 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-[#00d084]/20 hover:border-[#00ff9d] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0b0f14] border border-[#00d084]/30 flex items-center justify-center text-[#00ff9d] group-hover:scale-110 group-hover:border-[#00ff9d] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#05070a] border border-[#00d084]/20 text-[#00ff9d]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff9d] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#b8c0cc] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={scrollToCalculator}
                    className="text-xs font-bold text-[#00ff9d] group-hover:text-white flex items-center gap-1.5 cursor-pointer hover:underline"
                  >
                    <span>Ver se faz sentido para mim</span>
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
