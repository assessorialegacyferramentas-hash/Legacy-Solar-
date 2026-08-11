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
  const isCpf = clientType === 'Pessoa Física / CPF';

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

// Diagnostic Engine Logic
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

  // Solution Indication Logic according to prompt section 9
  let solutionTitle = '';
  let solutionDescription = '';

  if (data.clientType === 'Empresa de energia solar') {
    solutionTitle = 'Funil de vendas para empresa solar';
    solutionDescription = 'Sua empresa pode estruturar uma operação de aquisição com tráfego pago, calculadora energética e leads qualificados.';
  } else if (data.hasSolarPanels === 'Sim') {
    solutionTitle = 'Manutenção, limpeza ou diagnóstico de performance';
    solutionDescription = 'Você já tem um sistema solar. O próximo passo pode ser avaliar se ele está performando corretamente.';
  } else if (data.landAvailability === 'Sim' || data.landAvailability === 'Tenho área rural' || data.landAvailability === 'Tenho terreno urbano') {
    solutionTitle = 'Análise de terreno para oportunidade solar';
    solutionDescription = 'Seu terreno pode ter potencial para parceria, locação ou projeto energético, dependendo da viabilidade técnica.';
  } else if (data.roofAvailability === 'Sim, telhado grande' && (data.clientType === 'Empresa / CNPJ' || data.clientType === 'Condomínio' || data.clientType === 'Produtor rural') && monthlyBillValue >= 2000) {
    solutionTitle = 'Diagnóstico energético empresarial';
    solutionDescription = 'Sua empresa pode ter oportunidade de reduzir custos com instalação própria, assinatura solar ou estrutura energética personalizada.';
  } else if (data.ownership === 'Próprio' && (data.roofAvailability.startsWith('Sim')) && monthlyBillValue >= 800) {
    solutionTitle = 'Instalação solar própria';
    solutionDescription = 'Seu perfil pode ser adequado para avaliar um sistema próprio de energia solar.';
  } else if (data.ownership === 'Alugado' || data.roofAvailability === 'Moro em apartamento' || data.roofAvailability === 'Não tenho telhado' || data.mainObjective === 'Economizar sem instalar placas' || data.mainObjective === 'Avaliar assinatura solar') {
    solutionTitle = 'Assinatura solar';
    solutionDescription = 'Você pode avaliar alternativas para economizar sem instalar placas no imóvel e sem obra.';
  } else {
    solutionTitle = 'Diagnóstico energético inicial';
    solutionDescription = 'Antes de decidir, o ideal é entender seu perfil de consumo e descobrir qual rota faz mais sentido.';
  }

  // Construct structured WhatsApp message
  const documentTypeLabel = data.clientType === 'Pessoa Física / CPF' ? 'CPF' : 'CNPJ';
  const docText = data.documentNumber ? `${documentTypeLabel}: ${data.documentNumber}` : `${documentTypeLabel}: Não informado`;

  const messageText = `Olá! Fiz minha simulação de economia energética no site da Legacy Renewable Energy e gostaria de receber uma análise completa.

Nome: ${data.fullName}
WhatsApp: ${data.whatsapp}
E-mail: ${data.email}
Tipo de cliente: ${data.clientType}
${docText}
Cidade/UF: ${data.city} - ${data.state}
Conta média de energia: R$ ${formatBRL(monthlyBillValue).replace('R$', '').trim()}
Despesa anual estimada: R$ ${formatBRL(annualExpense).replace('R$', '').trim()}
Tipo de imóvel/operação: ${data.propertyType}
Imóvel: ${data.ownership}
Telhado disponível: ${data.roofAvailability}
Terreno disponível: ${data.landAvailability}
Já possui placas solares: ${data.hasSolarPanels}
Principal objetivo: ${data.mainObjective}
Prazo de interesse: ${data.timeframe}
Solução indicada: ${solutionTitle}

Quero continuar a análise com a equipe da Legacy.`;

  const whatsappPhone = '5584996177978';
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(messageText)}`;

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
