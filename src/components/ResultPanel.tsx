import React, { useState } from 'react';
import { DiagnosticResult } from '../types';
import { formatBRL } from '../utils/calculator';
import { CheckCircle, MessageSquare, AlertCircle, TrendingUp, ShieldCheck, Zap, Copy, Check } from 'lucide-react';

interface ResultPanelProps {
  result: DiagnosticResult;
}

export const ResultPanel: React.FC<ResultPanelProps> = ({ result }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(result.whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-[#00ff9d]/50 shadow-[0_0_50px_rgba(0,255,157,0.2)] space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#00d084]/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#00d084]/20 border border-[#00ff9d] flex items-center justify-center text-[#00ff9d] shadow-lg shadow-[#00ff9d]/20">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase text-[#00ff9d] tracking-widest px-2.5 py-0.5 rounded bg-[#00d084]/10 border border-[#00d084]/30">
              Diagnóstico Inicial Gerado
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              Análise Energética de {result.leadName}
            </h3>
          </div>
        </div>

        <div className="px-4 py-2 rounded-xl bg-[#05070a] border border-[#00d084]/30 text-right">
          <p className="text-[11px] text-[#b8c0cc] uppercase font-bold">Classificação do Perfil</p>
          <p className="text-sm font-black text-[#00ff9d]">{result.leadPriorityClass}</p>
        </div>
      </div>

      {/* Main KPI Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* KPI 1: Monthly Bill */}
        <div className="p-5 rounded-2xl bg-[#05070a] border border-[#00d084]/20 space-y-1">
          <p className="text-xs text-[#b8c0cc] uppercase font-semibold">Conta Média Mensal</p>
          <p className="text-2xl font-extrabold text-white">{formatBRL(result.monthlyBillValue)}</p>
          <p className="text-[11px] text-[#b8c0cc]/70">Ref.: {result.clientType}</p>
        </div>

        {/* KPI 2: Annual Expense */}
        <div className="p-5 rounded-2xl bg-[#05070a] border border-[#ff8a00]/30 space-y-1">
          <p className="text-xs text-[#ff8a00] uppercase font-semibold">Despesa Anual Estimada</p>
          <p className="text-2xl font-extrabold text-[#ff8a00]">{formatBRL(result.annualExpense)}</p>
          <p className="text-[11px] text-[#b8c0cc]/70">Valor acumulado em 12 meses</p>
        </div>

        {/* KPI 3: Priority Score Gauge */}
        <div className="p-5 rounded-2xl bg-[#05070a] border border-[#00ff9d]/30 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-[#b8c0cc]">
            <span>Prioridade Comercial</span>
            <span className="text-[#00ff9d]">{result.priorityScorePercent}%</span>
          </div>
          <div className="w-full bg-[#1a1f27] h-3 rounded-full overflow-hidden border border-[#00d084]/20">
            <div
              className="bg-gradient-to-r from-[#00d084] to-[#00ff9d] h-full transition-all duration-500"
              style={{ width: `${result.priorityScorePercent}%` }}
            />
          </div>
          <p className="text-[11px] text-[#b8c0cc]/80">
            Apto para atendimento consultivo direto.
          </p>
        </div>
      </div>

      {/* Illustrative Savings Scenarios */}
      <div className="p-6 rounded-2xl bg-[#05070a]/80 border border-[#00d084]/25 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#00ff9d]" />
            <h4 className="text-base font-extrabold text-white">
              Cenários Ilustrativos de Potencial de Redução Anual
            </h4>
          </div>
          <span className="text-[11px] text-[#b8c0cc] italic hidden sm:inline">
            *Estimativa inicial sujeita à análise técnica
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0b0f14] border border-[#00d084]/20 text-center space-y-1">
            <p className="text-xs text-[#b8c0cc]">Conservador (10%)</p>
            <p className="text-lg font-bold text-white">
              {formatBRL(result.savingsConservative)} / ano
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#00d084]/10 border border-[#00ff9d]/40 text-center space-y-1 shadow-md">
            <p className="text-xs text-[#00ff9d] font-bold">Moderado (15%)</p>
            <p className="text-xl font-extrabold text-[#00ff9d]">
              {formatBRL(result.savingsModerate)} / ano
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#ff8a00]/10 border border-[#ff8a00]/30 text-center space-y-1">
            <p className="text-xs text-[#ff8a00] font-bold">Otimista (20%)</p>
            <p className="text-lg font-bold text-[#ffc247]">
              {formatBRL(result.savingsOptimistic)} / ano
            </p>
          </div>
        </div>
      </div>

      {/* Indicated Solution Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b0f14] to-[#05070a] border border-[#00ff9d]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#00ff9d] fill-current" />
            <span className="text-xs font-extrabold text-[#00ff9d] uppercase tracking-wider">
              Solução Indicada Inicial
            </span>
          </div>
          <h4 className="text-xl font-black text-white">{result.solutionTitle}</h4>
          <p className="text-sm text-[#b8c0cc] leading-relaxed">{result.solutionDescription}</p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <a
            href={result.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 rounded-xl neon-glow-btn text-base font-black flex items-center justify-center gap-3 cursor-pointer shadow-xl"
          >
            <MessageSquare className="w-5 h-5 fill-current text-[#05070a]" />
            <span>Enviar meus dados para o WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Compliance Disclaimer */}
      <div className="p-4 rounded-xl bg-[#05070a] border border-[#00d084]/15 flex items-start gap-3 text-xs text-[#b8c0cc]/80">
        <ShieldCheck className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-white">Importante e Transparência Legacy:</p>
          <p>
            Esta simulação entrega um diagnóstico inicial com base nas informações prestadas. A economia real e a viabilidade da solução contratada dependem da análise detalhada da fatura de energia, tarifas da concessionária local e inspeção comercial.
          </p>
        </div>
      </div>

      {/* Pre-formatted Message Transparency Toggle */}
      <div className="pt-2">
        <div className="flex items-center justify-between text-xs text-[#b8c0cc] mb-2">
          <span>Resumo dos dados que serão enviados no WhatsApp (+55 84 99617-7978):</span>
          <button
            onClick={handleCopyMessage}
            className="flex items-center gap-1 text-[#00ff9d] hover:underline cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado!' : 'Copiar texto'}</span>
          </button>
        </div>
        <pre className="p-4 rounded-xl bg-[#05070a] border border-[#00d084]/15 text-[11px] text-[#b8c0cc]/80 font-mono overflow-x-auto whitespace-pre-wrap max-h-40 scrollbar-thin">
          {result.whatsappMessage}
        </pre>
      </div>
    </div>
  );
};
