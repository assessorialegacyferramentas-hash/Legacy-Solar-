import { CalculatorFormData, DiagnosticResult } from '../types';

// Mask WhatsApp as (99) 99999-9999
export function formatWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

// Mask CPF / CNPJ dynamically
export function formatDocument(value: string, clientType: string): string {
  const digits = value.replace(/\D/g, '');
  const isCpf = clientType === 'Pessoa Física / Residência';

  if (isCpf) {
    const cpfDigits = digits.slice(0, 11);
    if (cpfDigits.length <= 3) return cpfDigits;
    if (cpfDigits.length <= 6) return `${cpfDigits.slice(0, 3)}.${cpfDigits.slice(3)}`;
    if (cpfDigits.length <= 9) return `${cpfDigits.slice(0, 3)}.${cpfDigits.slice(3, 6)}.${cpfDigits.slice(6)}`;
    return `${cpfDigits.slice(0, 3)}.${cpfDigits.slice(3, 6)}.${cpfDigits.slice(6, 9)}-${cpfDigits.slice(9)}`;
  } else {
    const cnpjDigits = digits.slice(0, 14);
    if (cnpjDigits.length <= 2) return cnpjDigits;
    if (cnpjDigits.length <= 5) return `${cnpjDigits.slice(0, 2)}.${cnpjDigits.slice(2)}`;
    if (cnpjDigits.length <= 8) return `${cnpjDigits.slice(0, 2)}.${cnpjDigits.slice(2, 5)}.${cnpjDigits.slice(5)}`;
    if (cnpjDigits.length <= 12) return `${cnpjDigits.slice(0, 2)}.${cnpjDigits.slice(2, 5)}.${cnpjDigits.slice(5, 8)}/${cnpjDigits.slice(8)}`;
    return `${cnpjDigits.slice(0, 2)}.${cnpjDigits.slice(2, 5)}.${cnpjDigits.slice(5, 8)}/${cnpjDigits.slice(8, 12)}-${cnpjDigits.slice(12)}`;
  }
}

// Format Currency
export function formatCurrencyInput(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  const numberVal = parseInt(digits, 10) / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(numberVal);
}

// Parse Raw Number from Currency
export function parseCurrencyValue(value: string): number {
  const digits = value.replace(/\D/g, '');
  if (!digits) return 0;
  return parseInt(digits, 10) / 100;
}

// Format number into BRL currency string
export function formatBRL(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Diagnostic Engine Logic for Comerc Energia
export function computeDiagnostic(data: CalculatorFormData): DiagnosticResult {
  const monthlyBillValue = parseCurrencyValue(data.monthlyBill);
  const annualExpense = monthlyBillValue * 12;

  // Potential savings (illustrative scenarios compliant with prompt guidelines)
  const savingsConservative = annualExpense * 0.10;
  const savingsModerate = annualExpense * 0.15;
  const savingsOptimistic = annualExpense * 0.20;

  // Classify Lead Priority
  let leadPriorityClass: DiagnosticResult['leadPriorityClass'] = 'Perfil inicial';
  let priorityScorePercent = 35;

  if (monthlyBillValue <= 300) {
    leadPriorityClass = 'Perfil inicial';
    priorityScorePercent = 35;
  } else if (monthlyBillValue <= 800) {
    leadPriorityClass = 'Potencial moderado';
    priorityScorePercent = 55;
  } else if (monthlyBillValue <= 2000) {
    leadPriorityClass = 'Bom potencial';
    priorityScorePercent = 75;
  } else if (monthlyBillValue <= 5000) {
    leadPriorityClass = 'Alto potencial';
    priorityScorePercent = 90;
  } else {
    leadPriorityClass = 'Prioridade comercial';
    priorityScorePercent = 98;
  }

  // Solution Indication Logic according to prompt section 9 (Comerc Energia)
  let solutionTitle = '';
  let solutionDescription = '';

  const isB2B = data.clientType === 'Empresa / CNPJ' || data.clientType === 'Comércio' || data.clientType === 'Indústria' || data.clientType === 'Condomínio';

  if (isB2B && monthlyBillValue >= 5000) {
    solutionTitle = 'Gestão de Energia / Mercado Livre';
    solutionDescription = 'Sua operação pode exigir uma análise mais estratégica, considerando gestão de energia, perfil de consumo e possíveis alternativas no mercado de energia.';
  } else if (isB2B && monthlyBillValue >= 2000) {
    solutionTitle = 'Soluções de Energia para Empresas';
    solutionDescription = 'Sua empresa pode ter potencial para uma análise energética mais completa, considerando perfil de consumo, gestão de energia e soluções para redução de custos.';
  } else if (
    data.ownership === 'Alugado' ||
    data.roofAvailability === 'Moro em apartamento' ||
    data.roofAvailability === 'Não' ||
    data.mainObjective === 'Economizar sem instalar placas' ||
    data.mainObjective === 'Avaliar assinatura de energia solar'
  ) {
    solutionTitle = 'Assinatura de Energia Solar';
    solutionDescription = 'Seu perfil pode combinar com uma solução de assinatura de energia solar, que permite avaliar economia sem necessidade de instalação de placas no imóvel.';
  } else if (data.mainObjective === 'Fazer diagnóstico energético') {
    solutionTitle = 'Diagnóstico Energético Completo';
    solutionDescription = 'Antes de escolher uma solução, o ideal é entender seu perfil de consumo e avaliar qual alternativa energética faz mais sentido.';
  } else if (data.clientType === 'Pessoa Física / Residência') {
    solutionTitle = 'Energia Solar por Assinatura';
    solutionDescription = 'Você pode avaliar uma solução de energia solar por assinatura, sem obra e sem instalação no local de consumo.';
  } else {
    solutionTitle = 'Atendimento Consultivo Comerc';
    solutionDescription = 'Seu perfil precisa de uma avaliação consultiva para entender qual solução de energia da Comerc pode gerar mais valor.';
  }

  // Construct structured WhatsApp message for Comerc Energia
  const documentTypeLabel = data.clientType === 'Pessoa Física / Residência' ? 'CPF' : 'CPF/CNPJ';
  const docText = data.documentNumber ? `${data.documentNumber}` : 'Não informado';

  const messageText = `Olá! Fiz uma simulação de economia energética no site da Comerc Energia e gostaria de continuar minha análise.

Nome: ${data.fullName}
WhatsApp: ${data.whatsapp}
E-mail: ${data.email}
Tipo de cliente: ${data.clientType}
${documentTypeLabel}: ${docText}
Cidade/UF: ${data.city} - ${data.state}
Conta média de energia: ${data.monthlyBill}
Despesa anual estimada: R$ ${formatBRL(annualExpense).replace('R$', '').trim()}
Tipo de imóvel/operação: ${data.propertyType}
Imóvel: ${data.ownership}
Telhado disponível: ${data.roofAvailability}
Já usa ou pesquisou energia solar: ${data.hasSolarPanels}
Principal objetivo: ${data.mainObjective}
Prazo de interesse: ${data.timeframe}
Solução indicada: ${solutionTitle}

Quero receber uma análise consultiva para entender qual solução de energia faz mais sentido para meu perfil.`;

  const COMERC_WHATSAPP_NUMBER = '5584996177978';
  const whatsappUrl = `https://wa.me/${COMERC_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

  return {
    leadName: data.fullName,
    clientType: data.clientType,
    monthlyBillValue,
    annualExpense,
    savingsConservative,
    savingsModerate,
    savingsOptimistic,
    leadPriorityClass,
    priorityScorePercent,
    solutionTitle,
    solutionDescription,
    whatsappMessage: messageText,
    whatsappUrl,
  };
}
