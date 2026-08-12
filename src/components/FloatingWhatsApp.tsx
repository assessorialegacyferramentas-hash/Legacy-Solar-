import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isCalculatorInView, setIsCalculatorInView] = useState(false);

  useEffect(() => {
    const calcEl = document.getElementById('calculadora');
    if (!calcEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCalculatorInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(calcEl);
    return () => observer.disconnect();
  }, []);

  const defaultWhatsappMsg = encodeURIComponent(
    'Olá! Estava navegando no site da Comerc Energia e gostaria de simular meu potencial de economia energética.'
  );
  const whatsappUrl = `https://wa.me/5584996177978?text=${defaultWhatsappMsg}`;

  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-4 rounded-full bg-[#00B86B] hover:bg-[#20D489] text-[#0B0F17] shadow-[0_0_25px_rgba(0,184,107,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
          aria-label="Falar no WhatsApp"
        >
          {/* Notification Ping Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#20D489] border-2 border-[#0B0F17] animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#20D489] border-2 border-[#0B0F17]" />

          <MessageSquare className="w-7 h-7 fill-current" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#131B2A] border border-[#20D489]/40 text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Atendimento Comerc Energia
          </span>
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar for Instant Calculation (hidden when viewing calculator section) */}
      {!isCalculatorInView && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#0B0F17]/95 backdrop-blur-md border-t border-white/10 shadow-2xl transition-opacity duration-300">
          <button
            onClick={scrollToCalculator}
            className="w-full neon-glow-btn py-3 rounded-xl text-sm font-black flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-current text-[#0B0F17]" />
            <span>Calcular economia agora</span>
          </button>
        </div>
      )}
    </>
  );
};
