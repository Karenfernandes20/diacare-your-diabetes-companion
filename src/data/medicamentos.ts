import { MedicamentoDisponivel } from "@/types";

export const medicamentosDisponiveis: MedicamentoDisponivel[] = [
  // Insulinas de Ação Rápida
  { id: 'humalog', nome: 'Humalog', categoria: 'Insulina de Ação Rápida', descricao: 'Insulina lispro' },
  { id: 'novorapid', nome: 'NovoRapid', categoria: 'Insulina de Ação Rápida', descricao: 'Insulina asparte' },
  { id: 'apidra', nome: 'Apidra', categoria: 'Insulina de Ação Rápida', descricao: 'Insulina glulisina' },
  
  // Insulinas de Ação Intermediária
  { id: 'nph', nome: 'NPH', categoria: 'Insulina de Ação Intermediária', descricao: 'Insulina humana NPH' },
  { id: 'humulin_n', nome: 'Humulin N', categoria: 'Insulina de Ação Intermediária', descricao: 'Insulina humana NPH' },
  
  // Insulinas de Ação Prolongada
  { id: 'lantus', nome: 'Lantus', categoria: 'Insulina de Ação Prolongada', descricao: 'Insulina glargina' },
  { id: 'levemir', nome: 'Levemir', categoria: 'Insulina de Ação Prolongada', descricao: 'Insulina detemir' },
  { id: 'tresiba', nome: 'Tresiba', categoria: 'Insulina de Ação Prolongada', descricao: 'Insulina degludeca' },
  { id: 'toujeo', nome: 'Toujeo', categoria: 'Insulina de Ação Prolongada', descricao: 'Insulina glargina concentrada' },
  
  // Insulinas Mistas/Bifásicas
  { id: 'novomix', nome: 'NovoMix', categoria: 'Insulina Mista', descricao: 'Insulina asparte bifásica' },
  { id: 'humalog_mix', nome: 'Humalog Mix', categoria: 'Insulina Mista', descricao: 'Insulina lispro bifásica' },
  
  // Biguanidas
  { id: 'metformina', nome: 'Metformina', categoria: 'Biguanida', descricao: 'Reduz produção de glicose no fígado' },
  { id: 'glifage', nome: 'Glifage', categoria: 'Biguanida', descricao: 'Cloridrato de metformina' },
  
  // Sulfonilureias
  { id: 'glibenclamida', nome: 'Glibenclamida', categoria: 'Sulfonilureia', descricao: 'Estimula liberação de insulina' },
  { id: 'gliclazida', nome: 'Gliclazida', categoria: 'Sulfonilureia', descricao: 'Estimula liberação de insulina' },
  { id: 'glimepirida', nome: 'Glimepirida', categoria: 'Sulfonilureia', descricao: 'Estimula liberação de insulina' },
  
  // Inibidores da DPP-4
  { id: 'januvia', nome: 'Januvia', categoria: 'Inibidor DPP-4', descricao: 'Sitagliptina' },
  { id: 'galvus', nome: 'Galvus', categoria: 'Inibidor DPP-4', descricao: 'Vildagliptina' },
  { id: 'onglyza', nome: 'Onglyza', categoria: 'Inibidor DPP-4', descricao: 'Saxagliptina' },
  { id: 'trajenta', nome: 'Trajenta', categoria: 'Inibidor DPP-4', descricao: 'Linagliptina' },
  
  // Inibidores SGLT2
  { id: 'jardiance', nome: 'Jardiance', categoria: 'Inibidor SGLT2', descricao: 'Empagliflozina' },
  { id: 'forxiga', nome: 'Forxiga', categoria: 'Inibidor SGLT2', descricao: 'Dapagliflozina' },
  { id: 'invokana', nome: 'Invokana', categoria: 'Inibidor SGLT2', descricao: 'Canagliflozina' },
  
  // Agonistas GLP-1
  { id: 'victoza', nome: 'Victoza', categoria: 'Agonista GLP-1', descricao: 'Liraglutida' },
  { id: 'trulicity', nome: 'Trulicity', categoria: 'Agonista GLP-1', descricao: 'Dulaglutida' },
  { id: 'ozempic', nome: 'Ozempic', categoria: 'Agonista GLP-1', descricao: 'Semaglutida' },
  { id: 'byetta', nome: 'Byetta', categoria: 'Agonista GLP-1', descricao: 'Exenatida' },
  
  // Tiazolidinedionas
  { id: 'pioglitazona', nome: 'Pioglitazona', categoria: 'Tiazolidinediona', descricao: 'Melhora sensibilidade à insulina' },
  
  // Inibidores da Alfa-Glicosidase
  { id: 'acarbose', nome: 'Acarbose', categoria: 'Inibidor Alfa-Glicosidase', descricao: 'Reduz absorção de carboidratos' },
];
