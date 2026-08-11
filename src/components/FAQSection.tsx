import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'A calculadora garante economia?',
      a: 'Não. A calculadora entrega uma estimativa inicial. A economia real depende da análise da conta de energia, região, consumo, solução contratada e viabilidade técnica.',
    },
    {
      q: 'Preciso instalar placas?',
      a: 'Nem sempre. Dependendo do seu perfil, pode fazer mais sentido avaliar assinatura solar, diagnóstico energético ou outra solução sem obras.',
    },
    {
      q: 'Serve para empresas?',
      a: 'Sim. A página foi pensada principalmente para empresas, comércios, indústrias, hotéis, mercados, clínicas, condomínios e grandes consumidores de energia.',
    },
    {
      q: 'Serve para pessoa física?',
      a: 'Sim. A calculadora também pode direcionar pessoas físicas para instalação própria ou assinatura solar.',
    },
    {
      q: 'O atendimento é gratuito?',
      a: 'O diagnóstico inicial pelo site é gratuito. Caso seja necessário um projeto, proposta ou análise mais profunda, a equipe informará as condições com total transparência.',
    },
    {
      q: 'Quem vai receber meus dados?',
      a: 'A equipe da Legacy receberá os dados enviados pelo WhatsApp para continuar o atendimento consultivo.',
    },
    {
      q: 'Tenho uma empresa solar. Isso serve para mim?',
      a: 'Sim. A Legacy também estrutura funis de captação para empresas solares que desejam gerar leads qualificados usando esta mesma tecnologia.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#0b0f14] relative overflow-hidden border-t border-b border-[#00d084]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#00d084]/10 border border-[#00d084]/30 text-xs font-bold text-[#00ff9d] tracking-wider uppercase">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tire suas <span className="text-gradient-green">dúvidas</span>
          </h2>
          <p className="text-base text-[#b8c0cc]">
            Transparência total sobre o diagnóstico energético e sobre a atuação da Legacy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#00ff9d] bg-[#0b0f14]' : 'border-[#00d084]/20 hover:border-[#00d084]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#00ff9d] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00ff9d] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-[#b8c0cc] leading-relaxed border-t border-[#00d084]/10 pt-4 animate-in fade-in duration-200">
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
