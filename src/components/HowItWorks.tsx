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
    <section id="como-funciona" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] tracking-wider uppercase">
            Fluxo em 4 Etapas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Como a <span className="text-gradient-green">simulação funciona</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
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
                className="glass-card p-6 rounded-2xl border border-slate-200 hover:border-[#00B86B] transition-all duration-300 group flex flex-col justify-between relative bg-white shadow-sm"
              >
                {/* Step Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#00B86B] tracking-wider">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#00B86B] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#00B86B] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#475569] mb-4 leading-relaxed font-medium">
                    {step.description}
                  </p>

                  <ul className="space-y-2 text-xs text-[#475569]">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B86B] mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector arrow on desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-[#00B86B] shadow-sm">
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
