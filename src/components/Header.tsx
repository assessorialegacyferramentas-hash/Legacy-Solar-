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
          ? 'bg-[#004415]/98 backdrop-blur-md border-b border-[#006322] py-3.5 shadow-xl'
          : 'bg-[#004415] border-b border-[#006322]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Comerc Energia */}
          <a
            href="#"
            className="flex items-center group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="https://www.comerc.com.br/hubfs/new-logo-white.svg"
              alt="Comerc Energia Logo"
              className="h-8 sm:h-9 w-auto object-contain max-w-[200px] group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="hover:text-[#E8F6EE] transition-colors focus:outline-none cursor-pointer"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('calculadora')}
              className="hover:text-[#E8F6EE] transition-colors focus:outline-none cursor-pointer"
            >
              Calculadora
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('calculadora')}
              className="px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer bg-[#006322] hover:bg-[#007A2A] text-white border border-[#9EDBB9]/30 shadow-[0_10px_25px_rgba(0,68,21,0.35)] transition-all"
            >
              <Zap className="w-4 h-4 fill-current text-white" />
              <span>Calcular economia</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#E8F6EE] rounded-lg bg-[#006322] border border-[#9EDBB9]/30 focus:outline-none transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#004415]/98 border-b border-[#006322] px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 text-base font-semibold text-white">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="flex items-center justify-between p-3 rounded-lg bg-[#003310] border border-[#006322] text-white text-left hover:bg-[#006322] transition-colors"
            >
              <span>Como Funciona</span>
              <ChevronRight className="w-4 h-4 text-[#E8F6EE]" />
            </button>
            <button
              onClick={() => scrollToSection('calculadora')}
              className="flex items-center justify-between p-3 rounded-lg bg-[#003310] border border-[#006322] text-white text-left hover:bg-[#006322] transition-colors"
            >
              <span>Calculadora</span>
              <ChevronRight className="w-4 h-4 text-[#E8F6EE]" />
            </button>
          </nav>
          <button
            onClick={() => scrollToSection('calculadora')}
            className="w-full bg-[#006322] hover:bg-[#007A2A] text-white border border-[#9EDBB9]/30 shadow-[0_10px_25px_rgba(0,68,21,0.35)] py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-base cursor-pointer transition-all"
          >
            <Zap className="w-5 h-5 fill-current text-white" />
            <span>Calcular economia</span>
          </button>
        </div>
      )}
    </header>
  );
};
