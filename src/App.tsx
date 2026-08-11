import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
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
      {/* Fixed Navigation Header */}
      <Header />

      <main>
        {/* Main Hero Section */}
        <Hero />

        {/* Section 2: Pain Block - Financial Impact */}
        <PainBlock />

        {/* Section 3: How It Works Flow */}
        <HowItWorks />

        {/* Section 4: Interactive Energy Calculator & Diagnostic Result */}
        <EnergyCalculator />

        {/* Section 5: Legacy Energy Solutions */}
        <SolutionsSection />

        {/* Section 6: Why Legacy Method */}
        <LegacyMethodSection />

        {/* Section 7: Key Findings & Benefits */}
        <BenefitsSection />

        {/* Section 8: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 9: Final High Impact Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

