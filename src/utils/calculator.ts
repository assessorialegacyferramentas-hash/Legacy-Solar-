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
  const isCpf = clientType === 'Pessoa Física / Residencial' || clientType === 'Pessoa Física / Residência';

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

  // Solution Indication Logic according to prompt rules:
  let solutionTitle = '';
  let solutionDescription = '';

  const isB2B =
    data.clientType === 'Empresa / CNPJ' ||
    data.clientType === 'Comércio' ||
    data.clientType === 'Indústria' ||
    data.clientType === 'Condomínio' ||
    data.clientType === 'Produtor rural';

  if (
    data.clientType === 'Pessoa Física / Residencial' &&
    data.propertyType === 'Casa'
  ) {
    solutionTitle = 'Energia solar por assinatura ou solução residencial';
    solutionDescription = 'Sua residência pode avaliar a solução ideal de energia solar para gerar economia na conta de luz.';
  } else if (
    data.propertyType === 'Apartamento' ||
    data.ownership === 'Alugado'
  ) {
    solutionTitle = 'Assinatura solar';
    solutionDescription = 'Seu imóvel tem perfil ideal para assinatura solar, que garante economia diretamente na conta de energia sem necessidade de obras ou instalação de placas.';
  } else if (monthlyBillValue > 5000) {
    solutionTitle = 'Gestão de Energia / Mercado Livre';
    solutionDescription = 'Para faturas acima de R$ 5.000, sua operação pode se beneficiar de migração para o Mercado Livre de Energia ou gestão energética consultiva Comercial.';
  } else if (isB2B) {
    solutionTitle = 'Solução empresarial de energia';
    solutionDescription = 'Sua empresa ou estabelecimento possui potencial para reduzir custos fixos com soluções energéticas personalizadas da Comerc.';
  } else {
    solutionTitle = 'Diagnóstico energético inicial';
    solutionDescription = 'Sua solicitação passará por uma análise inicial do perfil de consumo para mapear a melhor alternativa energética.';
  }

  // Construct structured WhatsApp message for Comerc Energia
  const isCpfType = data.clientType === 'Pessoa Física / Residencial';
  const docLabel = isCpfType ? 'CPF' : 'CPF/CNPJ';
  const docText = data.documentNumber ? data.documentNumber : 'Não informado';

  const messageText = `Olá! Fiz uma simulação de economia energética no site da Comerc Energia e gostaria de continuar minha análise.

Nome: ${data.fullName}
WhatsApp: ${data.whatsapp}
E-mail: ${data.email}
Tipo de cliente: ${data.clientType}
${docLabel}: ${docText}
Cidade/UF: ${data.city} - ${data.state}
Conta média de energia: ${data.monthlyBill}
Despesa anual estimada: R$ ${formatBRL(annualExpense).replace('R$', '').trim()}
Tipo de imóvel/operação: ${data.propertyType}
Imóvel: ${data.ownership}
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
