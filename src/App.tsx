import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { EnergyCalculator } from './components/EnergyCalculator';
import { FinalCTA } from './components/FinalCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#00B86B] selection:text-white font-sans antialiased">
      {/* 1. Header */}
      <Header />

      <main>
        {/* 2. Hero com card de simulação rápida */}
        <Hero />

        {/* 3. Calculadora principal completa & Resultado */}
        <EnergyCalculator />

        {/* 4. Como Funciona */}
        <HowItWorks />

        {/* 5. Widget Final "Energia pode ser mais simples, inteligente e econômica" */}
        <FinalCTA />
      </main>

      {/* 8. WhatsApp Flutuante */}
      <FloatingWhatsApp />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

