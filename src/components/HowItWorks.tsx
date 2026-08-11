import React from 'react';
import { FormInput, Cpu, Route, MessageSquareText, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Informe seus dados',
      icon: FormInput,
      description: 'Você preenche informações básicas sobre consumo, cidade e perfil de consumo.',
      items: [
        'Tipo de cliente (PF ou CNPJ)',
        'Valor médio da conta de energia',
        'Cidade e Estado do imóvel',
        'Perfil do imóvel ou operação',
      ],
    },
    {
      number: '02',
      title: 'A calculadora analisa seu cenário',
      icon: Cpu,
      description: 'O sistema cruza tipo de cliente, valor de conta, imóvel e objetivo.',
      items: [
        'Avaliação de potencial financeiro',
        'Status do imóvel e telhado',
        'Preferência por obras ou assinatura',
        'Mapeamento da rota mais vantajosa',
      ],
    },
    {
      number: '03',
      title: 'Receba uma solução indicada',
      icon: Route,
      description: 'A página mostra uma rota inicial compatível com seu perfil de consumo.',
      items: [
        'Assinatura de energia solar',
        'Solução energética empresarial',
        'Gestão ou Mercado Livre de Energia',
        'Diagnóstico consultivo de consumo',
      ],
    },
    {
      number: '04',
      title: 'Continue pelo WhatsApp',
      icon: MessageSquareText,
      description: 'Seus dados já chegam organizados para o atendimento consultivo da Comerc.',
      items: [
        'Mensagem automática estruturada',
        'Atendimento ágil com especialistas',
        'Análise sem compromisso inicial',
        'Acompanhamento de viabilidade',
      ],
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#040D1D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#1065D8]/20 border border-[#1E88FF]/30 text-xs font-bold text-[#20D489] tracking-wider uppercase">
            Fluxo em 4 Etapas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Como a <span className="text-gradient-green">simulação funciona</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8FA3B8]">
            Um processo simples e inteligente para analisar seu consumo e indicar a melhor rota de economia energética da Comerc.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-[#1065D8]/30 hover:border-[#20D489] transition-all duration-300 group flex flex-col justify-between relative"
              >
                {/* Step Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-gradient-green tracking-wider">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#071B3A] border border-[#1065D8]/30 flex items-center justify-center text-[#20D489] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#20D489] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#8FA3B8] mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 text-xs text-[#8FA3B8]">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20D489] mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector arrow on desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-[#071B3A] border border-[#1065D8]/40 flex items-center justify-center text-[#20D489]">
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
