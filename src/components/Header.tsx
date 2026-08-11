import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070a]/90 backdrop-blur-md border-b border-[#00d084]/20 py-3.5 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col items-start group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="https://i.imgur.com/26lmRao.png"
              alt="LEGACY Renewable Energy Logo"
              className="h-9 sm:h-11 w-auto object-contain max-w-[200px] drop-shadow-[0_0_12px_rgba(0,208,132,0.3)] group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span className="text-[9px] sm:text-[10px] text-[#b8c0cc] tracking-[0.25em] uppercase font-semibold mt-0.5 pl-0.5">
              renewable energy
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#b8c0cc]">
            <button
              onClick={() => scrollToSection('calculadora')}
              className="hover:text-[#00ff9d] transition-colors focus:outline-none cursor-pointer"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="hover:text-[#00ff9d] transition-colors focus:outline-none cursor-pointer"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection('solucoes')}
              className="hover:text-[#00ff9d] transition-colors focus:outline-none cursor-pointer"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="hover:text-[#00ff9d] transition-colors focus:outline-none cursor-pointer"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-[#00ff9d] transition-colors focus:outline-none cursor-pointer"
            >
              Dúvidas
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('calculadora')}
              className="neon-glow-btn px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current text-[#05070a]" />
              <span>Calcular economia agora</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#b8c0cc] hover:text-white rounded-lg bg-[#0b0f14] border border-[#00d084]/20 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00ff9d]" /> : <Menu className="w-6 h-6 text-[#00d084]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05070a]/98 border-b border-[#00d084]/20 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 text-base font-medium text-[#b8c0cc]">
            <button
              onClick={() => scrollToSection('calculadora')}
              className="flex items-center justify-between p-3 rounded-lg bg-[#0b0f14] border border-[#00d084]/10 text-white text-left"
            >
              <span>Calculadora de Economia</span>
              <ChevronRight className="w-4 h-4 text-[#00ff9d]" />
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="flex items-center justify-between p-3 rounded-lg bg-[#0b0f14]/50 text-left hover:text-white"
            >
              <span>Como funciona</span>
              <ChevronRight className="w-4 h-4 text-[#b8c0cc]" />
            </button>
            <button
              onClick={() => scrollToSection('solucoes')}
              className="flex items-center justify-between p-3 rounded-lg bg-[#0b0f14]/50 text-left hover:text-white"
            >
              <span>Soluções Energéticas</span>
              <ChevronRight className="w-4 h-4 text-[#b8c0cc]" />
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="flex items-center justify-between p-3 rounded-lg bg-[#0b0f14]/50 text-left hover:text-white"
            >
              <span>Benefícios</span>
              <ChevronRight className="w-4 h-4 text-[#b8c0cc]" />
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="flex items-center justify-between p-3 rounded-lg bg-[#0b0f14]/50 text-left hover:text-white"
            >
              <span>Perguntas Frequentes</span>
              <ChevronRight className="w-4 h-4 text-[#b8c0cc]" />
            </button>
          </nav>
          <button
            onClick={() => scrollToSection('calculadora')}
            className="w-full neon-glow-btn py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-current text-[#05070a]" />
            <span>Calcular economia agora</span>
          </button>
        </div>
      )}
    </header>
  );
};
