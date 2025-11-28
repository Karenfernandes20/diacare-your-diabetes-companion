export interface Medicamento {
  id: string;
  nome: string;
  dose?: string;
  horarios?: string[];
}

export interface UserProfile {
  nome: string;
  idade: number;
  genero: string;
  tiposDiabetes: string[];
  peso: number;
  altura: number;
  tempodiagnostico: string;
  medicamentos: Medicamento[];
  metaGlicoseJejum: number;
  metaGlicosePosPrandial: number;
  objetivosAlimentares: string[];
  nivelAtividade: string;
  isPremium: boolean;
  premiumExpiresAt?: Date;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface Receita {
  id: string;
  nome: string;
  turno: 'manha' | 'tarde' | 'noite';
  tempo: string;
  carboidratos: string;
  calorias: string;
  ingredientes: string[];
  beneficios: string[];
  modoPreparo?: string[];
}

export interface MedicamentoDisponivel {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
}
