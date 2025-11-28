import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { QuizStep } from "@/components/QuizStep";
import { Medicamento } from "@/types";
import { medicamentosDisponiveis } from "@/data/medicamentos";
import { Plus, X } from "lucide-react";

interface QuizStep3Props {
  medicamentos: Medicamento[];
  onAddMedicamento: (med: Medicamento) => void;
  onRemoveMedicamento: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function QuizStep3({
  medicamentos,
  onAddMedicamento,
  onRemoveMedicamento,
  onNext,
  onPrev
}: QuizStep3Props) {
  const categorias = Array.from(new Set(medicamentosDisponiveis.map(m => m.categoria)));

  const isSelecionado = (id: string) => medicamentos.some(m => m.id === id);

  const toggleMedicamento = (medDisp: typeof medicamentosDisponiveis[0]) => {
    if (isSelecionado(medDisp.id)) {
      onRemoveMedicamento(medDisp.id);
    } else {
      onAddMedicamento({
        id: medDisp.id,
        nome: medDisp.nome
      });
    }
  };

  return (
    <QuizStep
      currentStep={3}
      totalSteps={6}
      title="Seus Medicamentos"
      subtitle="Selecione os medicamentos que você utiliza atualmente"
      onNext={onNext}
      onPrev={onPrev}
      nextLabel={medicamentos.length > 0 ? "Configurar Doses" : "Pular Esta Etapa"}
      canProceed={true}
    >
      <div className="space-y-6">
        {medicamentos.length > 0 && (
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-sm font-semibold mb-3">Medicamentos Selecionados:</p>
            <div className="flex flex-wrap gap-2">
              {medicamentos.map((med) => (
                <Badge key={med.id} className="flex items-center gap-2 py-2 px-3">
                  {med.nome}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={() => onRemoveMedicamento(med.id)}
                  />
                </Badge>
              ))}
            </div>
          </Card>
        )}

        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {categorias.map((categoria) => {
            const medsCategoria = medicamentosDisponiveis.filter(m => m.categoria === categoria);
            return (
              <div key={categoria}>
                <h3 className="font-semibold mb-2 text-sm text-muted-foreground">{categoria}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {medsCategoria.map((med) => (
                    <Button
                      key={med.id}
                      variant={isSelecionado(med.id) ? "default" : "outline"}
                      className="justify-start text-left h-auto py-3"
                      onClick={() => toggleMedicamento(med)}
                    >
                      <div className="flex items-start gap-2 w-full">
                        {isSelecionado(med.id) ? (
                          <X className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Plus className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{med.nome}</p>
                          <p className="text-xs opacity-80 truncate">{med.descricao}</p>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </QuizStep>
  );
}
