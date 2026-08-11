import React from 'react';
import { Sparkles, Users, SunMedium, MessageSquareText } from 'lucide-react';

export const QuickBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Simulação gratuita',
      description: 'Análise sem nenhum custo ou compromisso',
    },
    {
      icon: Users,
      title: 'Para CPF e CNPJ',
      description: 'Atende residências, comércios e indústrias',
    },
    {
      icon: SunMedium,
      title: 'Sem instalar placas',
      description: 'Pode indicar assinatura solar sem obras',
    },
    {
      icon: MessageSquareText,
      title: 'WhatsApp organizado',
      description: 'Dados formatados para agilizar o atendimento',
    },
  ];

  return (
    <section className="py-8 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-[#00B86B] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#059669] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">{item.title}</h4>
                  <p className="text-xs text-[#64748B] font-medium mt-0.5">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
