import React from 'react';
import { FormInput, Cpu, Route, MessageSquareText, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Você informa seus dados',
      icon: FormInput,
      items: [
        'Tipo de cliente (PF ou CNPJ)',
        'Valor médio da conta de energia',
        'Cidade e Estado de atuação',
        'Tipo de imóvel/operação comercial',
        'Perfil geral de consumo',
      ],
    },
    {
      number: '02',
      title: 'O sistema analisa seu perfil',
      icon: Cpu,
      items: [
        'Documento CPF ou CNPJ',
        'Status do imóvel (próprio ou alugado)',
        'Telhado, terreno ou estrutura disponível',
        'Interesse em instalar ou economizar sem obra',
      ],
    },
    {
      number: '03',
      title: 'A calculadora indica uma rota',
      icon: Route,
      items: [
        'Instalação própria de energia solar',
        'Assinatura solar sem investimento inicial',
        'Diagnóstico energético corporativo',
        'Terreno / telhado para usina ou funil solar',
      ],
    },
    {
      number: '04',
      title: 'Você fala com a Legacy',
      icon: MessageSquareText,
      items: [
        'O WhatsApp abre com seus dados preenchidos',
        'Atendimento consultivo com contexto',
        'Análise comercial rápida e objetiva',
        'Direcionamento sem promessas falsas',
      ],
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#05070a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#00d084]/10 border border-[#00d084]/30 text-xs font-bold text-[#00ff9d] tracking-wider uppercase">
            Fluxo em 4 Etapas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Como a calculadora transforma curiosidade em{' '}
            <span className="text-gradient-green">diagnóstico comercial</span>
          </h2>
          <p className="text-base sm:text-lg text-[#b8c0cc]">
            Um processo inteligente para qualificar sua demanda e apontar a solução ideal antes de qualquer abordagem comercial.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-[#00d084]/20 hover:border-[#00ff9d] transition-all duration-300 group flex flex-col justify-between relative"
              >
                {/* Step Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-gradient-green tracking-wider">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0b0f14] border border-[#00d084]/30 flex items-center justify-center text-[#00ff9d] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00ff9d] transition-colors">
                    {step.title}
                  </h3>

                  <ul className="space-y-2 text-xs text-[#b8c0cc]">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector arrow on desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-[#0b0f14] border border-[#00d084]/40 flex items-center justify-center text-[#00ff9d]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
