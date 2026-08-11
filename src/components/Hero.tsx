import React, { useState } from 'react';
import { Zap, ArrowRight, ShieldCheck, BarChart3, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';
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
  const previewSavingsMin = previewAnnual * 0.15;
  const previewSavingsMax = previewAnnual * 0.25;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#05070a]">
      {/* Background Solar & Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-solar opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-radial-green opacity-40 pointer-events-none" />

      {/* Decorative Solar Orange Flare */}
      <div className="absolute top-12 right-12 w-64 h-64 bg-[#ff8a00]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0f14] border border-[#00d084]/30 text-xs font-semibold text-[#00ff9d] shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-ping" />
              <span>Diagnóstico energético inteligente • Brasil</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Veja quanto dinheiro sua empresa pode estar{' '}
              <span className="text-gradient-green drop-shadow-[0_0_20px_rgba(0,255,157,0.3)]">
                perdendo com energia.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#b8c0cc] leading-relaxed max-w-2xl font-normal">
              Preencha a calculadora e descubra em poucos segundos se existe potencial de economia com energia solar, assinatura energética ou diagnóstico de consumo.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToCalculator}
                className="neon-glow-btn px-8 py-4 rounded-xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Zap className="w-5 h-5 fill-current text-[#05070a] group-hover:scale-110 transition-transform" />
                <span>Calcular minha economia agora</span>
                <ArrowRight className="w-5 h-5 text-[#05070a] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="px-6 py-4 rounded-xl text-base font-semibold text-[#b8c0cc] bg-[#0b0f14] hover:bg-[#1a1f27] hover:text-white border border-[#00d084]/20 hover:border-[#00ff9d]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Entender como funciona</span>
              </button>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-[#b8c0cc]/70 flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#00ff9d]" />
              <span>Sem compromisso. Diagnóstico inicial gratuito. Atendimento pelo WhatsApp.</span>
            </p>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#00d084]/15">
              <p className="text-xs font-semibold text-[#b8c0cc] uppercase tracking-wider mb-3">
                Metodologia Validada Legacy
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#f7f8fa]">
                <span className="px-3 py-1.5 rounded-lg bg-[#0b0f14] border border-[#00d084]/20 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#00ff9d]" /> Tráfego Pago
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0b0f14] border border-[#00d084]/20 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#ff8a00]" /> Calculadora de Economia
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0b0f14] border border-[#00d084]/20 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#00ff9d]" /> Leads Qualificados
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0b0f14] border border-[#00d084]/20 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ffc247]" /> Funil Validado
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0b0f14] border border-[#00d084]/20 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00ff9d]" /> Análise Consultiva
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard Preview Widget */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing outline effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00d084] via-[#00ff9d] to-[#ff8a00] rounded-2xl blur-lg opacity-30 animate-pulse" />

              <div className="relative glass-card p-6 sm:p-7 rounded-2xl border border-[#00ff9d]/30 shadow-2xl space-y-6">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#00d084]/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#00ff9d] animate-ping" />
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      Simulação Energética
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#ff8a00]/10 text-[#ff8a00] font-semibold border border-[#ff8a00]/30">
                    Pré-Análise
                  </span>
                </div>

                {/* Interactive Slider for Instant Preview */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#b8c0cc]">Sua conta média estimada:</span>
                    <span className="font-extrabold text-[#00ff9d] text-lg">
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
                    className="w-full h-2 bg-[#1a1f27] rounded-lg appearance-none cursor-pointer accent-[#00ff9d]"
                  />
                  <div className="flex justify-between text-[11px] text-[#b8c0cc]/60">
                    <span>R$ 500</span>
                    <span>R$ 5.000</span>
                    <span>R$ 15.000+</span>
                  </div>
                </div>

                {/* Financial Gauge Stats */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#0b0f14] border border-[#00d084]/20">
                    <p className="text-xs text-[#b8c0cc]">Custo Anual Atual</p>
                    <p className="text-base font-extrabold text-white mt-1">
                      {formatBRL(previewAnnual)}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#00d084]/10 border border-[#00ff9d]/30">
                    <p className="text-xs text-[#00ff9d] font-semibold">Economia Potencial/Ano</p>
                    <p className="text-base font-extrabold text-[#00ff9d] mt-1">
                      ~ {formatBRL(previewSavingsMin)} a {formatBRL(previewSavingsMax)}
                    </p>
                  </div>
                </div>

                {/* Dynamic Indicator Badge */}
                <div className="p-3.5 rounded-xl bg-[#0b0f14] border border-[#00d084]/20 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#ff8a00] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">
                      {previewBill >= 5000 ? 'Prioridade Comercial Estratégica' : 'Potencial Identificado'}
                    </p>
                    <p className="text-[11px] text-[#b8c0cc] mt-0.5">
                      {previewBill >= 5000
                        ? 'Alto volume de gasto mensal. Recomenda-se diagnóstico energético completo.'
                        : 'Existe oportunidade viável de redução no orçamento anual.'}
                    </p>
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  onClick={scrollToCalculator}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00d084] to-[#00ff9d] text-[#05070a] font-extrabold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00d084]/20 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-current text-[#05070a]" />
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
