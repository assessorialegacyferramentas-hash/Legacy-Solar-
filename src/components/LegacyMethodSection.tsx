import React from 'react';
import { Target, Lightbulb, Users, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const LegacyMethodSection: React.FC = () => {
  const benefits = [
    {
      title: 'Menos leads frios',
      desc: 'Eliminamos contatos desqualificados focando apenas em demandas com real potencial de aplicação.',
    },
    {
      title: 'Mais contexto para o atendimento',
      desc: 'Nossa equipe comercial inicia o contato conhecendo detalhadamente a fatura, estrutura e prazos.',
    },
    {
      title: 'Mais clareza sobre o perfil',
      desc: 'Mapeamento preciso entre compra direta de placas, assinatura solar ou diagnóstico corporativo.',
    },
    {
      title: 'Melhor direcionamento da solução',
      desc: 'Evitamos empurrar produtos genéricos, apresentando exatamente a engenharia financeira adequada.',
    },
    {
      title: 'Atendimento mais consultivo',
      desc: 'Diálogo pautado em números reais, estimativas de retorno e transparência técnica.',
    },
    {
      title: 'Mais chance de conversão',
      desc: 'Agilidade do primeiro clique ao fechamento do projeto comercial.',
    },
  ];

  return (
    <section className="py-20 bg-[#0b0f14] relative overflow-hidden border-t border-b border-[#00d084]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#00d084]/10 border border-[#00d084]/30 text-xs font-bold text-[#00ff9d] tracking-wider uppercase">
            Engenharia de Vendas Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Por que a Legacy usa uma calculadora{' '}
            <span className="text-gradient-green">antes de vender?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#b8c0cc] leading-relaxed">
            Porque campanhas comuns geram curiosos. A calculadora transforma interesse em dados, dados em diagnóstico e diagnóstico em oportunidade comercial.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-2xl border border-[#00d084]/20 hover:border-[#00ff9d] transition-all duration-300 space-y-2 group"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ff9d] shrink-0 group-hover:scale-110 transition-transform" />
                <h3 className="text-base font-bold text-white group-hover:text-[#00ff9d] transition-colors">
                  {b.title}
                </h3>
              </div>
              <p className="text-xs text-[#b8c0cc] leading-relaxed pl-8">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Quote Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#00d084]/10 via-[#0b0f14] to-[#00ff9d]/10 border border-[#00ff9d]/40 text-center relative overflow-hidden shadow-2xl">
          <Sparkles className="w-8 h-8 text-[#00ff9d] mx-auto mb-3 animate-pulse" />
          <p className="text-lg sm:text-2xl font-extrabold text-white max-w-4xl mx-auto leading-snug">
            “Não é sobre anunciar energia solar. É sobre construir um caminho para transformar atenção em oportunidade real.”
          </p>
          <p className="text-xs text-[#00ff9d] font-bold tracking-widest uppercase mt-4">
            — LEGACY RENEWABLE ENERGY
          </p>
        </div>
      </div>
    </section>
  );
};
