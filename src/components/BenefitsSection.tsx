import React from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const benefitsList = [
    'Quanto sua conta representa em impacto acumulado por ano',
    'Se seu perfil combina com assinatura de energia solar ou outra solução',
    'Se sua empresa necessita de gestão de energia ou análise corporativa',
    'Se existe oportunidade viável de economia no seu perfil e região',
    'Qual próximo passo técnico e financeiro faz mais sentido',
    'Como conversar com a Comerc no WhatsApp já com todos os dados organizados',
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#040D1D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#00B86B]/15 border border-[#20D489]/30 text-xs font-bold text-[#20D489] tracking-wider uppercase">
              Clareza Imediata
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              O que você descobre ao{' '}
              <span className="text-gradient-green">preencher a calculadora</span>
            </h2>
            <p className="text-base text-[#8FA3B8] leading-relaxed">
              Em menos de 2 minutos você obtém um raio-x do seu consumo elétrico e direcionamento estratégico com as soluções da Comerc.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToCalculator}
                className="neon-glow-btn px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-3 cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-current text-[#040D1D]" />
                <span>Preencher calculadora agora</span>
                <ArrowRight className="w-5 h-5 text-[#040D1D]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#20D489]/30 space-y-4">
              {benefitsList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#071B3A] border border-[#1065D8]/20">
                  <div className="w-6 h-6 rounded-lg bg-[#00B86B]/20 border border-[#20D489] flex items-center justify-center text-[#20D489] shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-semibold text-white leading-snug">
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
