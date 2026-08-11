import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickBenefits } from './components/QuickBenefits';
import { PainBlock } from './components/PainBlock';
import { HowItWorks } from './components/HowItWorks';
import { EnergyCalculator } from './components/EnergyCalculator';
import { SolutionsSection } from './components/SolutionsSection';
import { LegacyMethodSection } from './components/LegacyMethodSection';
import { BenefitsSection } from './components/BenefitsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#00B86B] selection:text-white font-sans antialiased">
      {/* 1. Header */}
      <Header />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. Bloco Rápido de Benefícios */}
        <QuickBenefits />

        {/* 4. Cards de Perfil & 5. Impacto da Conta */}
        <PainBlock />

        {/* 6. Como Funciona */}
        <HowItWorks />

        {/* 7. Calculadora & 8. Resultado */}
        <EnergyCalculator />

        {/* 9. Soluções Comerc */}
        <SolutionsSection />

        {/* 10. Por Que Começar Pela Análise & 11. Frase Institucional */}
        <LegacyMethodSection />

        {/* 12. O Que Você Descobre */}
        <BenefitsSection />

        {/* 13. FAQ Enxuto */}
        <FAQSection />

        {/* 14. CTA Final */}
        <FinalCTA />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}
