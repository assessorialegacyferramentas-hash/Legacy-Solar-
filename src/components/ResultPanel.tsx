import React from 'react';
import { DiagnosticResult } from '../types';
import { formatBRL } from '../utils/calculator';
import { Zap, MessageSquare, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

interface ResultPanelProps {
  result: DiagnosticResult;
}

export const ResultPanel: React.FC<ResultPanelProps> = ({ result }) => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-[#20D489]/50 shadow-[0_0_50px_rgba(32,212,137,0.15)] relative overflow-hidden animate-in fade-in slide-in-from-bottom duration-500">
      {/* Background Solar Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial-green opacity-40 pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1065D8]/20">
        <div>
          <span className="px-3 py-1 rounded-full bg-[#00B86B]/15 border border-[#20D489]/30 text-xs font-bold text-[#20D489] uppercase tracking-wider">
            Diagnóstico Gerado com Sucesso
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Resultado da Simulação de {result.leadName}
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-[#040D1D] px-4 py-2 rounded-xl border border-[#1065D8]/30">
          <Sparkles className="w-4 h-4 text-[#FFB000]" />
          <span className="text-xs font-bold text-[#8FA3B8]">Classificação: </span>
          <span className="text-xs font-extrabold text-[#20D489] uppercase">{result.leadPriorityClass}</span>
        </div>
      </div>

      {/* Financial Estimates Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
        <div className="p-5 rounded-2xl bg-[#040D1D] border border-[#1065D8]/20 space-y-1">
          <p className="text-xs text-[#8FA3B8] font-medium uppercase tracking-wider">Despesa Anual com Energia</p>
          <p className="text-2xl font-black text-white">{formatBRL(result.annualExpense)}</p>
          <p className="text-[11px] text-[#8FA3B8]">Custo acumulado estimado em 12 meses</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#00B86B]/10 border border-[#20D489]/40 space-y-1">
          <p className="text-xs text-[#20D489] font-bold uppercase tracking-wider">Economia Anual Potencial (Estimada)</p>
          <p className="text-2xl font-black text-[#20D489]">
            {formatBRL(result.savingsConservative)} a {formatBRL(result.savingsOptimistic)}
          </p>
          <p className="text-[11px] text-[#20D489]/80 font-medium">Faixa estimada de redução conforme solução</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#040D1D] border border-[#1065D8]/20 space-y-1">
          <p className="text-xs text-[#8FA3B8] font-medium uppercase tracking-wider">Grau de Adequação Energética</p>
          <p className="text-2xl font-black text-[#FFB000]">{result.priorityScorePercent}%</p>
          <p className="text-[11px] text-[#8FA3B8]">Potencial de viabilidade técnica/comercial</p>
        </div>
      </div>

      {/* Indicated Solution Card */}
      <div className="p-6 rounded-2xl bg-[#071B3A] border border-[#20D489]/30 space-y-3 mb-8">
        <div className="flex items-center gap-2.5">
          <Zap className="w-5 h-5 text-[#20D489] fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#20D489]">
            Solução Comerc Indicada
          </span>
        </div>

        <h4 className="text-xl font-extrabold text-white">
          {result.solutionTitle}
        </h4>

        <p className="text-sm text-[#8FA3B8] leading-relaxed">
          {result.solutionDescription}
        </p>

        <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[#20D489]">
          <CheckCircle2 className="w-4 h-4" />
          <span>Direcionamento ideal com base no perfil e valor de conta informado</span>
        </div>
      </div>

      {/* Action CTA: Send data via WhatsApp */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#00B86B]/20 via-[#071B3A] to-[#1065D8]/20 border border-[#20D489]/40 text-center space-y-6">
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
            Próximo Passo: Atendimento Consultivo Comerc
          </h4>
          <p className="text-xs sm:text-sm text-[#8FA3B8] max-w-2xl mx-auto">
            Ao clicar no botão abaixo, seus dados preenchidos serão formatados em uma mensagem no WhatsApp para você dar continuidade com nossa equipe.
          </p>
        </div>

        <a
          href={result.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="neon-glow-btn px-8 py-4 rounded-xl text-base sm:text-lg font-black inline-flex items-center justify-center gap-3 cursor-pointer shadow-2xl transition-all hover:scale-105"
        >
          <MessageSquare className="w-6 h-6 fill-current text-[#040D1D]" />
          <span>Enviar meus dados para a Comerc</span>
          <ArrowRight className="w-5 h-5 text-[#040D1D]" />
        </a>

        {/* Disclaimer */}
        <div className="flex items-start justify-center gap-2 text-[11px] text-[#8FA3B8]/80 max-w-2xl mx-auto text-left sm:text-center pt-2">
          <AlertTriangle className="w-4 h-4 text-[#FFB000] shrink-0 mt-0.5" />
          <span>
            Esta é uma simulação inicial. A solução final depende da análise do perfil de consumo, disponibilidade na região e condições comerciais aplicáveis.
          </span>
        </div>
      </div>
    </div>
  );
};
