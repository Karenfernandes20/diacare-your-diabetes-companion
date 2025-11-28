import { UserProfile } from "@/types";

export function getAIResponse(message: string, userProfile: UserProfile): string {
  const msgLower = message.toLowerCase();

  // Respostas baseadas em contexto do perfil
  if (msgLower.includes('glicose') || msgLower.includes('açúcar') || msgLower.includes('controlar')) {
    return `Olá ${userProfile.nome}! Para controlar melhor sua glicose com ${userProfile.tiposDiabetes.join(' e ')}, recomendo:\n\n✓ Manter glicemia em jejum próxima a ${userProfile.metaGlicoseJejum}mg/dL\n✓ Glicemia pós-prandial até ${userProfile.metaGlicosePosPrandial}mg/dL\n✓ Seguir horários dos medicamentos rigorosamente\n✓ Distribuir carboidratos ao longo do dia\n✓ Praticar atividades físicas (${userProfile.nivelAtividade})\n\nLembre-se: pequenas mudanças fazem grande diferença! 💪`;
  }

  if (msgLower.includes('medicamento') || msgLower.includes('remédio') || msgLower.includes('insulina')) {
    const meds = userProfile.medicamentos.map(m => `${m.nome} (${m.dose || 'dose a definir'})`).join(', ');
    return `${userProfile.nome}, seus medicamentos atuais são:\n\n${meds}\n\n⏰ É fundamental seguir os horários prescritos!\n\n🔔 Ative os lembretes no app para não esquecer nenhuma dose.\n\nSe tiver dúvidas sobre ajustes, consulte seu médico.`;
  }

  if (msgLower.includes('hipoglicemia') || msgLower.includes('hipo')) {
    return `⚠️ Sintomas de hipoglicemia incluem:\n• Tremores e suor frio\n• Tontura e confusão\n• Fome súbita\n• Palpitações\n\n🆘 O que fazer:\n1. Meça sua glicemia imediatamente\n2. Consuma 15g de carboidrato rápido (suco, mel, balas)\n3. Aguarde 15 minutos e meça novamente\n4. Se necessário, repita o processo\n\nEm caso de hipoglicemia grave, procure ajuda médica! 🏥`;
  }

  if (msgLower.includes('alimentação') || msgLower.includes('comida') || msgLower.includes('receita')) {
    const objetivos = userProfile.objetivosAlimentares.join(', ');
    return `🍽️ Seus objetivos alimentares incluem: ${objetivos}\n\nRecomendações personalizadas:\n✓ Prefira carboidratos complexos (aveia, quinoa, batata doce)\n✓ Inclua proteínas magras em todas as refeições\n✓ Aumente consumo de fibras (vegetais, legumes)\n✓ Hidrate-se bem (2-3L água/dia)\n\n📱 Confira nossas receitas Premium personalizadas para suas metas!`;
  }

  if (msgLower.includes('exercício') || msgLower.includes('atividade') || msgLower.includes('físic')) {
    return `🏃‍♂️ Atividade física é fundamental!\n\nPara seu nível (${userProfile.nivelAtividade}):\n✓ Comece devagar e aumente gradualmente\n✓ Prefira exercícios aeróbicos (caminhada, natação)\n✓ Meça glicemia antes e depois do treino\n✓ Tenha sempre carboidrato de rápida absorção\n\n⚠️ Se glicemia < 100mg/dL, consuma um lanche antes do exercício!\n\n💪 Exercícios regulares melhoram sensibilidade à insulina!`;
  }

  if (msgLower.includes('peso') || msgLower.includes('imc') || msgLower.includes('emagrecer')) {
    const imc = (userProfile.peso / ((userProfile.altura / 100) ** 2)).toFixed(1);
    return `📊 Seu IMC atual: ${imc}\n\nDicas para gestão de peso:\n✓ Foco em alimentação balanceada\n✓ Evite dietas restritivas extremas\n✓ Combine dieta + exercícios\n✓ Durma bem (7-9h por noite)\n✓ Controle o estresse\n\n🎯 Perda de 5-10% do peso já traz benefícios significativos no controle glicêmico!\n\nConsulte um nutricionista para plano personalizado.`;
  }

  // Resposta padrão
  return `Olá ${userProfile.nome}! 👋\n\nSou sua assistente de diabetes especializada em ${userProfile.tiposDiabetes.join(' e ')}.\n\nPosso ajudar com:\n• Controle de glicemia\n• Informações sobre medicamentos\n• Orientações alimentares\n• Dicas de exercícios\n• Gestão de hipoglicemia\n\nComo posso te ajudar hoje? 💚`;
}
