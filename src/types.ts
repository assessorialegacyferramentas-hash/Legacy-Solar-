export type ClientType =
  | 'Pessoa Física / Residência'
  | 'Empresa / CNPJ'
  | 'Condomínio'
  | 'Produtor rural'
  | 'Comércio'
  | 'Indústria'
  | 'Outro';

export type PropertyType =
  | 'Casa'
  | 'Apartamento'
  | 'Comércio'
  | 'Clínica'
  | 'Restaurante'
  | 'Mercado'
  | 'Hotel/Pousada'
  | 'Galpão'
  | 'Indústria'
  | 'Escola'
  | 'Igreja'
  | 'Condomínio'
  | 'Fazenda/Rural'
  | 'Outro';

export type PropertyOwnership =
  | 'Próprio'
  | 'Alugado'
  | 'Financiado'
  | 'Não sei / preciso avaliar';

export type RoofAvailability =
  | 'Sim'
  | 'Não'
  | 'Moro em apartamento'
  | 'Não sei informar';

export type LandAvailability =
  | 'Sim'
  | 'Não'
  | 'Talvez'
  | 'Tenho área rural'
  | 'Tenho terreno urbano';

export type SolarStatus =
  | 'Já uso'
  | 'Já fiz orçamento'
  | 'Estou pesquisando'
  | 'Nunca pesquisei';

export type MainObjective =
  | 'Reduzir minha conta de energia'
  | 'Economizar sem instalar placas'
  | 'Avaliar assinatura de energia solar'
  | 'Entender soluções para minha empresa'
  | 'Avaliar mercado livre de energia'
  | 'Fazer diagnóstico energético'
  | 'Outro';

export type Timeframe =
  | 'O quanto antes'
  | 'Nos próximos 30 dias'
  | 'Em até 3 meses'
  | 'Só pesquisando';

export type PreferredContactTime =
  | 'Manhã'
  | 'Tarde'
  | 'Noite'
  | 'Qualquer horário';

export interface CalculatorFormData {
  fullName: string;
  whatsapp: string;
  email: string;
  clientType: ClientType;
  documentNumber: string; // CPF or CNPJ
  city: string;
  state: string;
  monthlyBill: string;
  propertyType: PropertyType;
  ownership: PropertyOwnership;
  roofAvailability: RoofAvailability;
  landAvailability: LandAvailability;
  hasSolarPanels: SolarStatus;
  mainObjective: MainObjective;
  timeframe: Timeframe;
  preferredContactTime: PreferredContactTime;
}

export interface DiagnosticResult {
  leadName: string;
  clientType: ClientType;
  monthlyBillValue: number;
  annualExpense: number;
  savingsConservative: number;
  savingsModerate: number;
  savingsOptimistic: number;
  leadPriorityClass: 'Perfil inicial' | 'Potencial moderado' | 'Bom potencial' | 'Alto potencial' | 'Prioridade comercial';
  priorityScorePercent: number;
  solutionTitle: string;
  solutionDescription: string;
  whatsappMessage: string;
  whatsappUrl: string;
}

export const BRAZILIAN_STATES = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];
