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
          ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg'
          : 'bg-[#0B0F17] border-b border-white/5 py-4'
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
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-200">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="hover:text-[#00B86B] transition-colors focus:outline-none cursor-pointer"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('calculadora')}
              className="hover:text-[#00B86B] transition-colors focus:outline-none cursor-pointer"
            >
              Calculadora
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('calculadora')}
              className="neon-glow-btn px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Zap className="w-4 h-4 fill-current text-white" />
              <span>Calcular economia</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-200 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00B86B]" /> : <Menu className="w-6 h-6 text-[#00B86B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17]/98 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 text-base font-semibold text-slate-200">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800 text-white text-left"
            >
              <span>Como Funciona</span>
              <ChevronRight className="w-4 h-4 text-[#00B86B]" />
            </button>
            <button
              onClick={() => scrollToSection('calculadora')}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800 text-white text-left"
            >
              <span>Calculadora</span>
              <ChevronRight className="w-4 h-4 text-[#00B86B]" />
            </button>
          </nav>
          <button
            onClick={() => scrollToSection('calculadora')}
            className="w-full neon-glow-btn py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-current text-white" />
            <span>Calcular economia</span>
          </button>
        </div>
      )}
    </header>
  );
};
