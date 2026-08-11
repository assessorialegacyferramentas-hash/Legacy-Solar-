import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'A simulação garante economia?',
      a: 'Não. A simulação é uma estimativa inicial. A economia real depende da análise do consumo, região, perfil do cliente e solução contratada.',
    },
    {
      q: 'Preciso instalar placas?',
      a: 'Nem sempre. Dependendo do seu perfil, pode fazer sentido avaliar soluções como energia solar por assinatura, sem instalação no imóvel.',
    },
    {
      q: 'Serve para residência?',
      a: 'Sim. A página considera perfis residenciais, apartamentos e pessoas físicas.',
    },
    {
      q: 'Serve para empresas?',
      a: 'Sim. Empresas, comércios, condomínios e grandes consumidores podem receber uma indicação inicial para análise energética.',
    },
    {
      q: 'O que acontece depois que envio meus dados?',
      a: 'Você será direcionado para o WhatsApp com uma mensagem pronta contendo os dados da simulação para continuar o atendimento consultivo da Comerc.',
    },
    {
      q: 'A Comerc atende todo o Brasil?',
      a: 'A disponibilidade pode variar conforme a região e solução indicada. A equipe confirmará as opções aplicáveis ao seu perfil.',
    },
    {
      q: 'Meus dados são usados para quê?',
      a: 'Os dados são usados exclusivamente para entender seu perfil de consumo e conduzir o atendimento consultivo sobre soluções energéticas.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#071B3A] relative overflow-hidden border-t border-b border-[#1065D8]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#00B86B]/15 border border-[#20D489]/30 text-xs font-bold text-[#20D489] tracking-wider uppercase">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tire suas <span className="text-gradient-green">dúvidas</span>
          </h2>
          <p className="text-base text-[#8FA3B8]">
            Transparência total sobre a simulação e sobre a atuação da Comerc Energia.
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
                  isOpen ? 'border-[#20D489] bg-[#071B3A]' : 'border-[#1065D8]/20 hover:border-[#1065D8]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#20D489] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#20D489] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-[#8FA3B8] leading-relaxed border-t border-[#1065D8]/10 pt-4 animate-in fade-in duration-200">
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
