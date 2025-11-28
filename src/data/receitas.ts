import { Receita } from "@/types";

export const receitasDatabase: Receita[] = [
  // Café da Manhã
  {
    id: 'cdb1',
    nome: 'Panqueca de Aveia com Frutas Vermelhas',
    turno: 'manha',
    tempo: '15 min',
    carboidratos: '32g',
    calorias: '245 kcal',
    ingredientes: ['50g aveia em flocos', '1 ovo', '100ml leite desnatado', '1 banana pequena', '100g frutas vermelhas', 'Canela a gosto'],
    beneficios: ['Rico em fibras', 'Índice glicêmico baixo', 'Antioxidantes naturais', 'Fonte de proteína']
  },
  {
    id: 'cdb2',
    nome: 'Omelete de Claras com Espinafre e Queijo',
    turno: 'manha',
    tempo: '10 min',
    carboidratos: '8g',
    calorias: '180 kcal',
    ingredientes: ['3 claras de ovo', '1 gema', '1 xícara de espinafre picado', '30g queijo cottage', 'Tomate cereja', 'Orégano'],
    beneficios: ['Alto teor proteico', 'Baixo em carboidratos', 'Rico em vitaminas', 'Ajuda na saciedade']
  },
  {
    id: 'cdb3',
    nome: 'Mingau de Quinoa com Canela',
    turno: 'manha',
    tempo: '20 min',
    carboidratos: '38g',
    calorias: '220 kcal',
    ingredientes: ['50g quinoa em flocos', '200ml leite de amêndoas sem açúcar', 'Canela em pó', '1 colher de chia', 'Adoçante natural'],
    beneficios: ['Proteína completa', 'Digestão lenta', 'Rico em magnésio', 'Sem glúten']
  },
  {
    id: 'cdb4',
    nome: 'Iogurte Grego com Granola Caseira',
    turno: 'manha',
    tempo: '5 min',
    carboidratos: '28g',
    calorias: '265 kcal',
    ingredientes: ['150g iogurte grego natural', '30g granola sem açúcar', '1 maçã pequena picada', 'Canela', 'Nozes picadas'],
    beneficios: ['Probióticos naturais', 'Alta proteína', 'Fibras', 'Ômega-3']
  },
  
  // Almoço
  {
    id: 'alm1',
    nome: 'Salmão Grelhado com Quinoa e Brócolis',
    turno: 'tarde',
    tempo: '30 min',
    carboidratos: '42g',
    calorias: '485 kcal',
    ingredientes: ['150g filé de salmão', '80g quinoa cozida', '150g brócolis no vapor', 'Limão', 'Azeite extra virgem', 'Alho e ervas'],
    beneficios: ['Ômega-3', 'Proteína de alta qualidade', 'Antioxidantes', 'Baixo índice glicêmico']
  },
  {
    id: 'alm2',
    nome: 'Frango ao Curry com Arroz Integral',
    turno: 'tarde',
    tempo: '35 min',
    carboidratos: '45g',
    calorias: '420 kcal',
    ingredientes: ['150g peito de frango', '80g arroz integral', 'Curry em pó', 'Leite de coco light', 'Cebola e alho', 'Couve-flor'],
    beneficios: ['Alto teor proteico', 'Fibras do arroz integral', 'Especiarias anti-inflamatórias', 'Saciedade prolongada']
  },
  {
    id: 'alm3',
    nome: 'Carne Magra com Batata Doce e Salada',
    turno: 'tarde',
    tempo: '40 min',
    carboidratos: '38g',
    calorias: '445 kcal',
    ingredientes: ['150g patinho grelhado', '120g batata doce assada', 'Alface', 'Tomate', 'Pepino', 'Azeite e vinagre balsâmico'],
    beneficios: ['Ferro heme', 'Carboidrato de baixo IG', 'Vitaminas A e C', 'Proteína completa']
  },
  {
    id: 'alm4',
    nome: 'Filé de Peixe com Purê de Couve-flor',
    turno: 'tarde',
    tempo: '25 min',
    carboidratos: '18g',
    calorias: '320 kcal',
    ingredientes: ['180g filé de tilápia', '200g couve-flor', 'Alho e cebola', 'Limão', 'Salsa fresca', 'Azeite'],
    beneficios: ['Baixo carboidrato', 'Alta proteína', 'Rico em fósforo', 'Leve e nutritivo']
  },
  
  // Jantar
  {
    id: 'jan1',
    nome: 'Sopa de Lentilha com Legumes',
    turno: 'noite',
    tempo: '40 min',
    carboidratos: '35g',
    calorias: '285 kcal',
    ingredientes: ['100g lentilha', 'Cenoura', 'Aipo', 'Cebola', 'Alho', 'Tomate', 'Caldo de legumes', 'Cominho'],
    beneficios: ['Rico em fibras', 'Proteína vegetal', 'Digestão fácil', 'Baixo índice glicêmico']
  },
  {
    id: 'jan2',
    nome: 'Omelete de Forno com Vegetais',
    turno: 'noite',
    tempo: '30 min',
    carboidratos: '12g',
    calorias: '240 kcal',
    ingredientes: ['3 ovos', 'Espinafre', 'Tomate', 'Cebola', 'Pimentão', 'Queijo minas light', 'Orégano'],
    beneficios: ['Alto teor proteico', 'Baixo carboidrato', 'Vitaminas do complexo B', 'Leve para digestão']
  },
  {
    id: 'jan3',
    nome: 'Peito de Peru com Abobrinha Recheada',
    turno: 'noite',
    tempo: '35 min',
    carboidratos: '15g',
    calorias: '295 kcal',
    ingredientes: ['150g peito de peru', '2 abobrinhas médias', 'Ricota', 'Tomate', 'Manjericão', 'Alho'],
    beneficios: ['Proteína magra', 'Baixo em gorduras', 'Rico em potássio', 'Saciedade']
  },
  {
    id: 'jan4',
    nome: 'Salada Completa com Grão-de-Bico',
    turno: 'noite',
    tempo: '15 min',
    carboidratos: '32g',
    calorias: '310 kcal',
    ingredientes: ['100g grão-de-bico cozido', 'Alface', 'Rúcula', 'Tomate cereja', 'Pepino', 'Cenoura ralada', 'Azeite', 'Limão'],
    beneficios: ['Proteína vegetal', 'Fibras', 'Antioxidantes', 'Digestão leve']
  },
  {
    id: 'jan5',
    nome: 'Wrap Integral de Frango',
    turno: 'noite',
    tempo: '20 min',
    carboidratos: '28g',
    calorias: '340 kcal',
    ingredientes: ['1 tortilha integral', '100g frango desfiado', 'Alface', 'Tomate', 'Iogurte natural', 'Cenoura ralada'],
    beneficios: ['Equilibrado em macronutrientes', 'Fácil digestão', 'Prático', 'Fonte de fibras']
  }
];
