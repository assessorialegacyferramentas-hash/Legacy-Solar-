export type ClientType =
  | 'Pessoa Física / CPF'
  | 'Empresa / CNPJ'
  | 'Condomínio'
  | 'Produtor rural'
  | 'Empresa de energia solar';

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
  | 'Terreno'
  | 'Outro';

export type PropertyOwnership =
  | 'Próprio'
  | 'Alugado'
  | 'Financiado'
  | 'Não sei / preciso avaliar';

export type RoofAvailability =
  | 'Sim, telhado pequeno'
  | 'Sim, telhado médio'
  | 'Sim, telhado grande'
  | 'Não tenho telhado'
  | 'Moro em apartamento'
  | 'Não sei informar';

export type LandAvailability =
  | 'Sim'
  | 'Não'
  | 'Talvez'
  | 'Tenho área rural'
  | 'Tenho terreno urbano';

export type SolarStatus =
  | 'Sim'
  | 'Não'
  | 'Já tive orçamento'
  | 'Estou pesquisando';

export type MainObjective =
  | 'Reduzir conta de energia'
  | 'Instalar sistema próprio'
  | 'Economizar sem instalar placas'
  | 'Avaliar assinatura solar'
  | 'Fazer diagnóstico energético'
  | 'Gerar renda com terreno ou telhado'
  | 'Fazer manutenção em sistema existente'
  | 'Captar leads para minha empresa solar';

export type Timeframe =
  | 'O quanto antes'
  | 'Nos próximos 30 dias'
  | 'Em até 3 meses'
  | 'Ainda estou pesquisando';

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
  monthlyBill: string; // formatted currency string or raw
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
  monthlyBillValue: number; // numeric
  annualExpense: number; // numeric = monthlyBillValue * 12
  savingsConservative: number; // 10%
  savingsModerate: number; // 15%
  savingsOptimistic: number; // 20%
  leadPriorityClass: 'Perfil inicial' | 'Potencial moderado' | 'Bom potencial' | 'Alto potencial' | 'Prioridade comercial';
  priorityScorePercent: number; // 0 to 100
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
