import React, { useState } from 'react';
import { Zap, ArrowRight, ShieldCheck, BarChart3, TrendingUp, Sparkles, AlertCircle, Building, SunMedium } from 'lucide-react';
import { formatBRL } from '../utils/calculator';

export const Hero: React.FC = () => {
  const [previewBill, setPreviewBill] = useState(1000);

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
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-white">
      {/* Background Solar & Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-solar opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-radial-green opacity-50 pointer-events-none" />

      {/* Decorative Flare */}
      <div className="absolute top-12 right-12 w-64 h-64 bg-[#004415]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6EE] border border-[#9EDBB9] text-xs font-bold text-[#004415] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#004415] animate-ping" />
              <span>Comerc Energia • Soluções Inteligentes</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Descubra quanto você pode{' '}
              <span className="text-gradient-green drop-shadow-sm">
                economizar
              </span>{' '}
              com energia.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#334155] leading-relaxed max-w-2xl font-normal">
              Responda algumas perguntas e veja qual solução da Comerc pode fazer sentido para seu perfil: residência, empresa, assinatura solar ou diagnóstico energético.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={scrollToCalculator}
                className="neon-glow-btn px-7 py-3.5 rounded-xl text-base sm:text-lg font-bold flex items-center justify-center gap-2.5 cursor-pointer group shadow-lg"
              >
                <Zap className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" />
                <span>Calcular minha economia</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="px-6 py-3.5 rounded-xl text-base font-bold text-[#0F172A] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Ver como funciona</span>
              </button>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-[#475569] flex items-center gap-2 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#004415] shrink-0" />
              <span>Simulação inicial gratuita • Para residências e empresas • Sem compromisso</span>
            </p>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#0F172A] font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1.5 shadow-sm">
                  <SunMedium className="w-3.5 h-3.5 text-amber-600" /> Assinatura Solar
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1.5 shadow-sm">
                  <BarChart3 className="w-3.5 h-3.5 text-[#004415]" /> Gestão de Energia
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1.5 shadow-sm">
                  <Building className="w-3.5 h-3.5 text-[#004415]" /> Mercado Livre
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1.5 shadow-sm">
                  <Zap className="w-3.5 h-3.5 text-amber-600" /> Diagnóstico Energético
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard Preview Widget */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing outline effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#004415] via-[#006322] to-[#004415] rounded-2xl blur-md opacity-20 animate-pulse" />

              <div className="relative glass-card p-6 rounded-2xl border border-slate-200 shadow-xl space-y-5 bg-white">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#004415] animate-ping" />
                    <h3 className="text-base font-bold text-[#0F172A] tracking-wide">
                      Simulação Rápida
                    </h3>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded bg-[#E8F6EE] text-[#004415] font-bold border border-[#9EDBB9]">
                    Comerc Energia
                  </span>
                </div>

                {/* Interactive Slider for Instant Preview */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#475569] font-medium">Conta mensal estimada:</span>
                    <span className="font-extrabold text-[#004415] text-base sm:text-lg">
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
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#004415]"
                  />
                  <div className="flex justify-between text-[11px] text-[#64748B] font-medium">
                    <span>R$ 500</span>
                    <span>R$ 5.000</span>
                    <span>R$ 15.000+</span>
                  </div>
                </div>

                {/* Financial Gauge Stats */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[11px] text-[#64748B] font-medium">Custo Anual Estimado</p>
                    <p className="text-base font-extrabold text-[#0F172A] mt-0.5">
                      {formatBRL(previewAnnual)}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[11px] text-[#004415] font-bold">Resultado após simulação</p>
                    <p className="text-[11px] text-[#475569] mt-0.5 font-medium leading-tight">
                      Informe seus dados para receber uma análise inicial.
                    </p>
                  </div>
                </div>

                {/* Dynamic Indicator Badge */}
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">
                      Solução Indicada: {previewBill >= 5000 ? 'Gestão / Mercado Livre' : 'Assinatura Solar sem Placas'}
                    </p>
                    <p className="text-[11px] text-[#475569] mt-0.5">
                      {previewBill >= 5000
                        ? 'Ideal para empresas com demanda contratada expressiva.'
                        : 'Economia direta na conta sem instalação de equipamentos.'}
                    </p>
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  onClick={scrollToCalculator}
                  className="w-full py-3 rounded-xl neon-glow-btn text-white font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Zap className="w-4 h-4 fill-current text-white" />
                  <span>Iniciar cálculo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
