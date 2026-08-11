import React from 'react';
import { DiagnosticResult } from '../types';
import { formatBRL } from '../utils/calculator';
import { Zap, MessageSquare, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

interface ResultPanelProps {
  result: DiagnosticResult;
}

export const ResultPanel: React.FC<ResultPanelProps> = ({ result }) => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-[#00B86B]/40 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom duration-500 bg-white">
      {/* Background Solar Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial-green opacity-40 pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
            Diagnóstico Gerado com Sucesso
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2">
            Resultado da Simulação de {result.leadName}
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold text-[#64748B]">Classificação: </span>
          <span className="text-xs font-extrabold text-[#059669] uppercase">{result.leadPriorityClass}</span>
        </div>
      </div>

      {/* Financial Estimates Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
          <p className="text-xs text-[#64748B] font-semibold uppercase tracking-wider">Despesa Anual com Energia</p>
          <p className="text-2xl font-black text-[#0F172A]">{formatBRL(result.annualExpense)}</p>
          <p className="text-[11px] text-[#64748B]">Custo acumulado estimado em 12 meses</p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
          <p className="text-xs text-[#059669] font-bold uppercase tracking-wider">Economia Anual Potencial (Estimada)</p>
          <p className="text-2xl font-black text-[#059669]">
            {formatBRL(result.savingsConservative)} a {formatBRL(result.savingsOptimistic)}
          </p>
          <p className="text-[11px] text-[#059669]/90 font-medium">Faixa estimada de redução conforme solução</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
          <p className="text-xs text-[#64748B] font-semibold uppercase tracking-wider">Grau de Adequação Energética</p>
          <p className="text-2xl font-black text-amber-600">{result.priorityScorePercent}%</p>
          <p className="text-[11px] text-[#64748B]">Potencial de viabilidade técnica/comercial</p>
        </div>
      </div>

      {/* Indicated Solution Card */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-emerald-200 space-y-3 mb-8">
        <div className="flex items-center gap-2.5">
          <Zap className="w-5 h-5 text-[#00B86B] fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
            Solução Comerc Indicada
          </span>
        </div>

        <h4 className="text-xl font-extrabold text-[#0F172A]">
          {result.solutionTitle}
        </h4>

        <p className="text-sm text-[#475569] leading-relaxed">
          {result.solutionDescription}
        </p>

        <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#059669]">
          <CheckCircle2 className="w-4 h-4" />
          <span>Direcionamento ideal com base no perfil e valor de conta informado</span>
        </div>
      </div>

      {/* Action CTA: Send data via WhatsApp */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-slate-50 to-emerald-50 border border-emerald-200 text-center space-y-6">
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1">
            Próximo Passo: Atendimento Consultivo Comerc
          </h4>
          <p className="text-xs sm:text-sm text-[#475569] max-w-2xl mx-auto">
            Ao clicar no botão abaixo, seus dados preenchidos serão formatados em uma mensagem no WhatsApp para você dar continuidade com nossa equipe.
          </p>
        </div>

        <a
          href={result.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="neon-glow-btn px-8 py-4 rounded-xl text-base sm:text-lg font-black inline-flex items-center justify-center gap-3 cursor-pointer shadow-xl transition-all hover:scale-105"
        >
          <MessageSquare className="w-6 h-6 fill-current text-white" />
          <span>Enviar meus dados para a Comerc</span>
          <ArrowRight className="w-5 h-5 text-white" />
        </a>

        {/* Disclaimer */}
        <div className="flex items-start justify-center gap-2 text-[11px] text-[#64748B] max-w-2xl mx-auto text-left sm:text-center pt-2 font-medium">
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            Esta é uma simulação inicial. A solução final depende da análise do perfil de consumo, disponibilidade na região e condições comerciais aplicáveis.
          </span>
        </div>
      </div>
    </div>
  );
};
