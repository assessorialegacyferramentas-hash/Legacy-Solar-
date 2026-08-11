import React, { useState } from 'react';
import { Zap, ArrowRight, ShieldCheck, BarChart3, TrendingUp, Sparkles, AlertCircle, Building, SunMedium } from 'lucide-react';
import { formatBRL } from '../utils/calculator';

export const Hero: React.FC = () => {
  const [previewBill, setPreviewBill] = useState(3500);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('como-funciona');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Preview estimation
  const previewAnnual = previewBill * 12;
  const previewSavingsMin = previewAnnual * 0.12;
  const previewSavingsMax = previewAnnual * 0.22;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#040D1D]">
      {/* Background Solar & Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-solar opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-radial-green opacity-40 pointer-events-none" />

      {/* Decorative Solar Flare */}
      <div className="absolute top-12 right-12 w-64 h-64 bg-[#FFB000]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A] border border-[#1065D8]/40 text-xs font-semibold text-[#20D489] shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#20D489] animate-ping" />
              <span>Soluções de energia • Residências e Empresas</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Descubra{' '}
              <span className="text-gradient-green drop-shadow-[0_0_20px_rgba(32,212,137,0.3)]">
                quanto você pode economizar
              </span>{' '}
              com soluções de energia.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#8FA3B8] leading-relaxed max-w-2xl font-normal">
              Preencha a calculadora e descubra em poucos segundos qual solução pode fazer mais sentido para o seu perfil: assinatura de energia solar, gestão de energia, diagnóstico de consumo ou outras soluções energéticas.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToCalculator}
                className="neon-glow-btn px-8 py-4 rounded-xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Zap className="w-5 h-5 fill-current text-[#040D1D] group-hover:scale-110 transition-transform" />
                <span>Calcular minha economia</span>
                <ArrowRight className="w-5 h-5 text-[#040D1D] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="px-6 py-4 rounded-xl text-base font-semibold text-[#8FA3B8] bg-[#071B3A] hover:bg-[#0B2554] hover:text-white border border-[#1065D8]/30 hover:border-[#1E88FF]/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Entender como funciona</span>
              </button>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-[#8FA3B8] flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#20D489]" />
              <span>Simulação inicial gratuita • Sem instalação obrigatória • Soluções para residências e empresas</span>
            </p>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#1065D8]/20">
              <p className="text-xs font-semibold text-[#8FA3B8] uppercase tracking-wider mb-3">
                Soluções Inteligentes Comercializadoras e Reguladas Comerc
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-white">
                <span className="px-3 py-1.5 rounded-lg bg-[#071B3A] border border-[#1065D8]/30 flex items-center gap-1.5">
                  <SunMedium className="w-3.5 h-3.5 text-[#FFB000]" /> Assinatura Solar
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#071B3A] border border-[#1065D8]/30 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#20D489]" /> Gestão de Energia
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#071B3A] border border-[#1065D8]/30 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#1E88FF]" /> Mercado Livre
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#071B3A] border border-[#1065D8]/30 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FFB000]" /> Diagnóstico de Consumo
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#071B3A] border border-[#1065D8]/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#20D489]" /> Sustentabilidade
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard Preview Widget */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing outline effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1065D8] via-[#20D489] to-[#FFB000] rounded-2xl blur-lg opacity-30 animate-pulse" />

              <div className="relative glass-card p-6 sm:p-7 rounded-2xl border border-[#1E88FF]/40 shadow-2xl space-y-6">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1065D8]/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#20D489] animate-ping" />
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      Simulação Comerc
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#00B86B]/15 text-[#20D489] font-semibold border border-[#00B86B]/30">
                    Pré-Análise
                  </span>
                </div>

                {/* Interactive Slider for Instant Preview */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8FA3B8]">Sua conta média estimada:</span>
                    <span className="font-extrabold text-[#20D489] text-lg">
                      {formatBRL(previewBill)} / mês
                    </span>
                  </div>

                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="500"
                    value={previewBill}
                    onChange={(e) => setPreviewBill(Number(e.target.value))}
                    className="w-full h-2 bg-[#071B3A] rounded-lg appearance-none cursor-pointer accent-[#20D489]"
                  />
                  <div className="flex justify-between text-[11px] text-[#8FA3B8]">
                    <span>R$ 500</span>
                    <span>R$ 5.000</span>
                    <span>R$ 15.000+</span>
                  </div>
                </div>

                {/* Financial Gauge Stats */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#071B3A] border border-[#1065D8]/20">
                    <p className="text-xs text-[#8FA3B8]">Custo Anual Atual</p>
                    <p className="text-base font-extrabold text-white mt-1">
                      {formatBRL(previewAnnual)}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#00B86B]/10 border border-[#20D489]/30">
                    <p className="text-xs text-[#20D489] font-semibold">Economia Potencial/Ano</p>
                    <p className="text-base font-extrabold text-[#20D489] mt-1">
                      ~ {formatBRL(previewSavingsMin)} a {formatBRL(previewSavingsMax)}
                    </p>
                  </div>
                </div>

                {/* Dynamic Indicator Badge */}
                <div className="p-3.5 rounded-xl bg-[#071B3A] border border-[#1065D8]/20 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#FFB000] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">
                      {previewBill >= 5000 ? 'Potencial para Gestão ou Mercado Livre' : 'Oportunidade para Assinatura Solar'}
                    </p>
                    <p className="text-[11px] text-[#8FA3B8] mt-0.5">
                      {previewBill >= 5000
                        ? 'Empresas com fatura mais elevada possuem grande potencial estratégico.'
                        : 'Economize diretamente na conta sem necessidade de instalar placas no local.'}
                    </p>
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  onClick={scrollToCalculator}
                  className="w-full py-3.5 rounded-xl neon-glow-btn text-[#040D1D] font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Zap className="w-4 h-4 fill-current text-[#040D1D]" />
                  <span>Iniciar cálculo detalhado</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
