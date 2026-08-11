import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'A simulação garante economia?',
      a: 'Não. É uma estimativa inicial. A economia real depende do consumo, região, perfil e solução contratada.',
    },
    {
      q: 'Preciso instalar placas?',
      a: 'Nem sempre. Dependendo do perfil, pode fazer sentido avaliar assinatura solar ou outra solução sem instalação no imóvel.',
    },
    {
      q: 'Serve para residência?',
      a: 'Sim. A simulação também atende pessoas físicas e imóveis residenciais.',
    },
    {
      q: 'Serve para empresas?',
      a: 'Sim. Empresas, comércios, condomínios e grandes consumidores podem receber uma análise inicial.',
    },
    {
      q: 'O que acontece depois?',
      a: 'Você será direcionado para o WhatsApp com seus dados organizados para continuar o atendimento.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-2 mb-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Tire suas <span className="text-gradient-green">dúvidas</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-medium">
            Respostas objetivas sobre a simulação e as soluções Comerc.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen ? 'border-[#00B86B] shadow-sm' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 py-4 text-left font-bold text-sm sm:text-base text-[#0F172A] flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#00B86B] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#00B86B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200 font-medium">
                    {faq.a}
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

