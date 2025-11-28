import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizStep } from "@/components/QuizStep";
import { Medicamento } from "@/types";
import { Plus, X } from "lucide-react";

interface QuizStep4Props {
  medicamentos: Medicamento[];
  onUpdateMedicamento: (id: string, updates: Partial<Medicamento>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function QuizStep4({
  medicamentos,
  onUpdateMedicamento,
  onNext,
  onPrev
}: QuizStep4Props) {
  if (medicamentos.length === 0) {
    onNext();
    return null;
  }

  const addHorario = (medId: string) => {
    const med = medicamentos.find(m => m.id === medId);
    const horarios = med?.horarios || [];
    onUpdateMedicamento(medId, { horarios: [...horarios, ''] });
  };

  const updateHorario = (medId: string, index: number, value: string) => {
    const med = medicamentos.find(m => m.id === medId);
    if (!med) return;
    const horarios = [...(med.horarios || [])];
    horarios[index] = value;
    onUpdateMedicamento(medId, { horarios });
  };

  const removeHorario = (medId: string, index: number) => {
    const med = medicamentos.find(m => m.id === medId);
    if (!med) return;
    const horarios = [...(med.horarios || [])];
    horarios.splice(index, 1);
    onUpdateMedicamento(medId, { horarios });
  };

  return (
    <QuizStep
      currentStep={4}
      totalSteps={6}
      title="Configuração de Doses"
      subtitle="Configure as doses e horários dos seus medicamentos"
      onNext={onNext}
      onPrev={onPrev}
      canProceed={true}
    >
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {medicamentos.map((med) => (
          <Card key={med.id} className="p-4">
            <h3 className="font-bold mb-4">{med.nome}</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor={`dose-${med.id}`}>Dosagem</Label>
                <Input
                  id={`dose-${med.id}`}
                  value={med.dose || ''}
                  onChange={(e) => onUpdateMedicamento(med.id, { dose: e.target.value })}
                  placeholder="Ex: 10mg, 2 comprimidos, 0.5ml"
                  className="mt-2"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Horários</Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => addHorario(med.id)}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Adicionar Horário
                  </Button>
                </div>
                <div className="space-y-2">
                  {(med.horarios || []).map((horario, idx) => (
                    <div key={idx} className="flex gap-2">
                      <Input
                        type="time"
                        value={horario}
                        onChange={(e) => updateHorario(med.id, idx, e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeHorario(med.id, idx)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {(!med.horarios || med.horarios.length === 0) && (
                    <p className="text-sm text-muted-foreground">
                      Nenhum horário configurado
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </QuizStep>
  );
}
