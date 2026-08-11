import React from 'react';
import { FormInput, Cpu, Route, MessageSquareText, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Informe seus dados',
      icon: FormInput,
      description: 'Preencha informações básicas sobre consumo, cidade e tipo de imóvel.',
    },
    {
      number: '02',
      title: 'A calculadora analisa seu perfil',
      icon: Cpu,
      description: 'O sistema cruza seu consumo e localização para encontrar a rota ideal.',
    },
    {
      number: '03',
      title: 'Receba uma rota indicada',
      icon: Route,
      description: 'Veja um diagnóstico inicial com a solução Comerc mais compatível.',
    },
    {
      number: '04',
      title: 'Continue pelo WhatsApp',
      icon: MessageSquareText,
      description: 'Envie seus dados formatados diretamente para o atendimento especializado.',
    },
  ];

  return (
    <section id="como-funciona" className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
            Simplicidade & Agilidade
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Como <span className="text-gradient-green">funciona</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-medium">
            Entenda em 4 passos simples como é feita a sua simulação energética.
          </p>
        </div>

        {/* 4 Steps Horizontal Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 hover:border-[#00B86B] transition-all group relative bg-white shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-[#00B86B] tracking-wider">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#00B86B] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#00B86B] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow on desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-[#00B86B] shadow-sm">
                      <ArrowRight className="w-3 h-3" />
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

