import { Receita } from "@/types";
import { receitasDatabase } from "@/data/receitas";

export function getReceitasPorTurno(turno: string, quantidade: number): Receita[] {
  const receitasDoTurno = receitasDatabase.filter(r => r.turno === turno);
  const shuffled = [...receitasDoTurno].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, quantidade);
}
