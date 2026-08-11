import React, { useState } from 'react';
import {
  CalculatorFormData,
  ClientType,
  PropertyType,
  PropertyOwnership,
  RoofAvailability,
  SolarStatus,
  MainObjective,
  Timeframe,
  PreferredContactTime,
  BRAZILIAN_STATES,
} from '../types';
import {
  formatWhatsApp,
  formatDocument,
  formatCurrencyInput,
  computeDiagnostic,
} from '../utils/calculator';
import { ResultPanel } from './ResultPanel';
import { Zap, ShieldCheck, User, Building2, DollarSign, Home, CheckSquare, Sparkles } from 'lucide-react';

export const EnergyCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorFormData>({
    fullName: '',
    whatsapp: '',
    email: '',
    clientType: 'Empresa / CNPJ',
    documentNumber: '',
    city: '',
    state: 'SP',
    monthlyBill: 'R$ 2.500,00',
    propertyType: 'Comércio',
    ownership: 'Próprio',
    roofAvailability: 'Sim',
    landAvailability: 'Não',
    hasSolarPanels: 'Estou pesquisando',
    mainObjective: 'Reduzir minha conta de energia',
    timeframe: 'O quanto antes',
    preferredContactTime: 'Qualquer horário',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loadingStepText, setLoadingStepText] = useState('Analisando seu perfil energético...');
  const [diagnosticResult, setDiagnosticResult] = useState<ReturnType<typeof computeDiagnostic> | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Calculate Form Completion Progress (0 to 100%)
  const calculateProgress = () => {
    const fields: (keyof CalculatorFormData)[] = [
      'fullName',
      'whatsapp',
      'email',
      'clientType',
      'documentNumber',
      'city',
      'state',
      'monthlyBill',
      'propertyType',
      'ownership',
      'roofAvailability',
      'hasSolarPanels',
      'mainObjective',
      'timeframe',
      'preferredContactTime',
    ];
    const filledCount = fields.filter((f) => String(formData[f]).trim().length > 0).length;
    return Math.round((filledCount / fields.length) * 100);
  };

  const handleInputChange = (field: keyof CalculatorFormData, value: string) => {
    setValidationError(null);

    if (field === 'whatsapp') {
      value = formatWhatsApp(value);
    } else if (field === 'documentNumber') {
      value = formatDocument(value, formData.clientType);
    } else if (field === 'monthlyBill') {
      value = formatCurrencyInput(value);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClientTypeChange = (newType: ClientType) => {
    setFormData((prev) => ({
      ...prev,
      clientType: newType,
      documentNumber: '', // Reset document mask on type change
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setValidationError('Por favor, informe seu nome completo.');
      return;
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 14) {
      setValidationError('Por favor, informe um WhatsApp válido com DDD.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Por favor, informe um e-mail válido.');
      return;
    }
    if (!formData.monthlyBill.trim()) {
      setValidationError('Por favor, informe o valor médio da conta de energia.');
      return;
    }

    setIsLoading(true);
    setLoadingStepText('Validando dados e localização...');

    setTimeout(() => {
      setLoadingStepText('Calculando potencial de economia...');
    }, 600);

    setTimeout(() => {
      setLoadingStepText('Mapeando soluções energéticas Comerc...');
    }, 1200);

    setTimeout(() => {
      const result = computeDiagnostic(formData);
      setDiagnosticResult(result);
      setIsLoading(false);

      // Smooth scroll to diagnostic panel
      setTimeout(() => {
        const el = document.getElementById('painel-resultado');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1800);
  };

  const progress = calculateProgress();

  return (
    <section id="calculadora" className="py-20 bg-[#071B3A] relative overflow-hidden border-t border-b border-[#1065D8]/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial-green opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-[#00B86B]/15 border border-[#20D489]/30 text-xs font-bold text-[#20D489] tracking-wider uppercase">
            Calculadora de Economia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Simule seu <span className="text-gradient-green">potencial de economia</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8FA3B8]">
            Responda algumas perguntas e receba um diagnóstico inicial para entender qual solução de energia pode fazer sentido para você.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#1E88FF]/30 shadow-2xl relative">
          {/* Progress Header */}
          <div className="mb-8 p-4 rounded-2xl bg-[#040D1D] border border-[#1065D8]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00B86B]/15 border border-[#20D489]/30 flex items-center justify-center text-[#20D489]">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-[#8FA3B8] uppercase font-bold">Progresso do Diagnóstico</p>
                <p className="text-sm font-extrabold text-white">{progress}% Preenchido</p>
              </div>
            </div>

            <div className="w-full sm:w-64 bg-[#071B3A] h-3 rounded-full overflow-hidden border border-[#1065D8]/20">
              <div
                className="bg-gradient-to-r from-[#1065D8] via-[#00B86B] to-[#20D489] h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Validation Error Banner */}
          {validationError && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* SECTION 1: Dados Pessoais & Contato */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#20D489] mb-4 flex items-center gap-2 border-b border-[#1065D8]/20 pb-2">
                <User className="w-4 h-4" /> 1. Dados de Contato
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 1. Nome Completo */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] focus:ring-1 focus:ring-[#20D489] text-white text-sm outline-none transition-all placeholder:text-[#8FA3B8]/40"
                  />
                </div>

                {/* 2. WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="text"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] focus:ring-1 focus:ring-[#20D489] text-white text-sm outline-none transition-all placeholder:text-[#8FA3B8]/40"
                  />
                </div>

                {/* 3. E-mail */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] focus:ring-1 focus:ring-[#20D489] text-white text-sm outline-none transition-all placeholder:text-[#8FA3B8]/40"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: Perfil do Cliente & Localização */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#20D489] mb-4 flex items-center gap-2 border-b border-[#1065D8]/20 pb-2">
                <Building2 className="w-4 h-4" /> 2. Tipo de Cliente & Localização
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 4. Tipo de cliente */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Tipo de Cliente *
                  </label>
                  <select
                    value={formData.clientType}
                    onChange={(e) => handleClientTypeChange(e.target.value as ClientType)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] focus:ring-1 focus:ring-[#20D489] text-white text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Pessoa Física / Residência">Pessoa Física / Residência</option>
                    <option value="Empresa / CNPJ">Empresa / CNPJ</option>
                    <option value="Condomínio">Condomínio</option>
                    <option value="Produtor rural">Produtor rural</option>
                    <option value="Comércio">Comércio</option>
                    <option value="Indústria">Indústria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                {/* 5. CPF ou CNPJ */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    {formData.clientType === 'Pessoa Física / Residência' ? 'CPF' : 'CNPJ'}
                  </label>
                  <input
                    type="text"
                    value={formData.documentNumber}
                    onChange={(e) => handleInputChange('documentNumber', e.target.value)}
                    placeholder={
                      formData.clientType === 'Pessoa Física / Residência'
                        ? '000.000.000-00'
                        : '00.000.000/0000-00'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] focus:ring-1 focus:ring-[#20D489] text-white text-sm outline-none transition-all placeholder:text-[#8FA3B8]/40"
                  />
                </div>

                {/* 6 & 7. Cidade e Estado */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Sua cidade"
                      className="w-full px-3 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                      UF *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full px-2 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none cursor-pointer"
                    >
                      {BRAZILIAN_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: Consumo & Tipo de Imóvel */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#20D489] mb-4 flex items-center gap-2 border-b border-[#1065D8]/20 pb-2">
                <DollarSign className="w-4 h-4" /> 3. Consumo Mensal & Imóvel
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 8. Valor médio da conta de energia */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Valor Mando Média da Conta de Energia *
                  </label>
                  <input
                    type="text"
                    value={formData.monthlyBill}
                    onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
                    placeholder="Ex.: R$ 2.500,00"
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#20D489]/50 focus:border-[#20D489] focus:ring-1 focus:ring-[#20D489] text-[#20D489] font-bold text-base outline-none transition-all placeholder:text-[#8FA3B8]/40"
                  />
                </div>

                {/* 9. Tipo de imóvel/operação */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Tipo de Imóvel/Operação *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value as PropertyType)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none cursor-pointer"
                  >
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Comércio">Comércio</option>
                    <option value="Clínica">Clínica</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Mercado">Mercado</option>
                    <option value="Hotel/Pousada">Hotel/Pousada</option>
                    <option value="Galpão">Galpão</option>
                    <option value="Indústria">Indústria</option>
                    <option value="Escola">Escola</option>
                    <option value="Igreja">Igreja</option>
                    <option value="Condomínio">Condomínio</option>
                    <option value="Fazenda/Rural">Fazenda/Rural</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                {/* 10. Imóvel próprio ou alugado */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    O imóvel é próprio ou alugado? *
                  </label>
                  <select
                    value={formData.ownership}
                    onChange={(e) => handleInputChange('ownership', e.target.value as PropertyOwnership)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none cursor-pointer"
                  >
                    <option value="Próprio">Próprio</option>
                    <option value="Alugado">Alugado</option>
                    <option value="Financiado">Financiado</option>
                    <option value="Não sei / preciso avaliar">Não sei / preciso avaliar</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 4: Estrutura & Uso prévio de Energia Solar */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#20D489] mb-4 flex items-center gap-2 border-b border-[#1065D8]/20 pb-2">
                <Home className="w-4 h-4" /> 4. Estrutura Física & Conhecimento Solar
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 11. Telhado disponível */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Você possui telhado disponível? *
                  </label>
                  <select
                    value={formData.roofAvailability}
                    onChange={(e) => handleInputChange('roofAvailability', e.target.value as RoofAvailability)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none cursor-pointer"
                  >
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                    <option value="Moro em apartamento">Moro em apartamento</option>
                    <option value="Não sei informar">Não sei informar</option>
                  </select>
                </div>

                {/* 12. Já usa ou já pesquisou energia solar? */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Você já usa ou já pesquisou energia solar? *
                  </label>
                  <select
                    value={formData.hasSolarPanels}
                    onChange={(e) => handleInputChange('hasSolarPanels', e.target.value as SolarStatus)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none cursor-pointer"
                  >
                    <option value="Estou pesquisando">Estou pesquisando</option>
                    <option value="Já uso">Já uso</option>
                    <option value="Já fiz orçamento">Já fiz orçamento</option>
                    <option value="Nunca pesquisei">Nunca pesquisei</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 5: Objetivo, Prazo & Horário */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#20D489] mb-4 flex items-center gap-2 border-b border-[#1065D8]/20 pb-2">
                <CheckSquare className="w-4 h-4" /> 5. Objetivo & Preferências
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 13. Qual seu principal objetivo? */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Qual seu principal objetivo? *
                  </label>
                  <select
                    value={formData.mainObjective}
                    onChange={(e) => handleInputChange('mainObjective', e.target.value as MainObjective)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none cursor-pointer"
                  >
                    <option value="Reduzir minha conta de energia">Reduzir minha conta de energia</option>
                    <option value="Economizar sem instalar placas">Economizar sem instalar placas</option>
                    <option value="Avaliar assinatura de energia solar">Avaliar assinatura de energia solar</option>
                    <option value="Entender soluções para minha empresa">Entender soluções para minha empresa</option>
                    <option value="Avaliar mercado livre de energia">Avaliar mercado livre de energia</option>
                    <option value="Fazer diagnóstico energético">Fazer diagnóstico energético</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                {/* 14. Prazo de interesse */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Prazo de interesse *
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => handleInputChange('timeframe', e.target.value as Timeframe)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none cursor-pointer"
                  >
                    <option value="O quanto antes">O quanto antes</option>
                    <option value="Nos próximos 30 dias">Nos próximos 30 dias</option>
                    <option value="Em até 3 meses">Em até 3 meses</option>
                    <option value="Só pesquisando">Só pesquisando</option>
                  </select>
                </div>

                {/* 15. Melhor horário para contato */}
                <div>
                  <label className="block text-xs font-semibold text-[#8FA3B8] mb-1.5">
                    Melhor horário para contato *
                  </label>
                  <select
                    value={formData.preferredContactTime}
                    onChange={(e) => handleInputChange('preferredContactTime', e.target.value as PreferredContactTime)}
                    className="w-full px-4 py-3 rounded-xl bg-[#040D1D] border border-[#1065D8]/30 focus:border-[#20D489] text-white text-sm outline-none cursor-pointer"
                  >
                    <option value="Qualquer horário">Qualquer horário</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-10 py-4 rounded-xl neon-glow-btn text-base sm:text-lg font-black inline-flex items-center justify-center gap-3 cursor-pointer shadow-xl disabled:opacity-50"
              >
                <Sparkles className="w-5 h-5 fill-current text-[#040D1D]" />
                <span>Ver meu diagnóstico energético</span>
              </button>
              <p className="text-xs text-[#8FA3B8]/70 mt-3">
                Simulação inicial gratuita • Soluções para residências e empresas • Atendimento consultivo
              </p>
            </div>
          </form>

          {/* Loading Modal / Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-[#040D1D]/95 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center p-6 z-30 animate-in fade-in duration-300">
              <div className="relative w-20 h-20 mb-6">
                <div className="w-full h-full rounded-full border-4 border-[#1065D8]/30 border-t-[#20D489] animate-spin" />
                <Zap className="w-8 h-8 text-[#20D489] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                Gerando Diagnóstico Comercial Comerc
              </h3>
              <p className="text-sm text-[#20D489] font-semibold animate-pulse text-center">
                {loadingStepText}
              </p>
            </div>
          )}
        </div>

        {/* Display Diagnosis Results when calculated */}
        {diagnosticResult && (
          <div id="painel-resultado" className="mt-16">
            <ResultPanel result={diagnosticResult} />
          </div>
        )}
      </div>
    </section>
  );
};
