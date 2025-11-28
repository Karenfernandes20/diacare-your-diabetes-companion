import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuizStep } from "@/components/QuizStep";
import { Check } from "lucide-react";

interface QuizStep5Props {
  metaGlicoseJejum: number;
  setMetaGlicoseJejum: (value: number) => void;
  metaGlicosePosPrandial: number;
  setMetaGlicosePosPrandial: (value: number) => void;
  objetivosAlimentares: string[];
  onToggleObjetivo: (objetivo: string) => void;
  nivelAtividade: string;
  setNivelAtividade: (value: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const objetivosDisponiveis = [
  'Perder peso',
  'Controlar glicose',
  'Ganhar massa muscular',
  'Melhorar energia',
  'Reduzir colesterol',
  'Melhorar sono'
];

const niveisAtividade = ['Sedentário', 'Leve', 'Moderado', 'Intenso'];

export function QuizStep5({
  metaGlicoseJejum,
  setMetaGlicoseJejum,
  metaGlicosePosPrandial,
  setMetaGlicosePosPrandial,
  objetivosAlimentares,
  onToggleObjetivo,
  nivelAtividade,
  setNivelAtividade,
  onNext,
  onPrev
}: QuizStep5Props) {
  const canProceed = objetivosAlimentares.length > 0 && nivelAtividade;

  return (
    <QuizStep
      currentStep={5}
      totalSteps={6}
      title="Objetivos e Metas"
      subtitle="Defina suas metas para um plano personalizado"
      onNext={onNext}
      onPrev={onPrev}
      canProceed={!!canProceed}
    >
      <div className="space-y-6">
        <Card className="p-4 bg-muted/50">
          <Label className="text-base font-semibold">Meta de Glicose em Jejum</Label>
          <div className="flex items-center justify-between mt-2 mb-3">
            <span className="text-2xl font-bold text-primary">{metaGlicoseJejum} mg/dL</span>
          </div>
          <Slider
            value={[metaGlicoseJejum]}
            onValueChange={([value]) => setMetaGlicoseJejum(value)}
            min={70}
            max={130}
            step={5}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Recomendado: 70-100 mg/dL
          </p>
        </Card>

        <Card className="p-4 bg-muted/50">
          <Label className="text-base font-semibold">Meta de Glicose Pós-Prandial</Label>
          <div className="flex items-center justify-between mt-2 mb-3">
            <span className="text-2xl font-bold text-primary">{metaGlicosePosPrandial} mg/dL</span>
          </div>
          <Slider
            value={[metaGlicosePosPrandial]}
            onValueChange={([value]) => setMetaGlicosePosPrandial(value)}
            min={100}
            max={180}
            step={5}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Recomendado: até 140 mg/dL (2h após refeição)
          </p>
        </Card>

        <div>
          <Label className="text-base font-semibold mb-3 block">Objetivos Alimentares</Label>
          <div className="grid grid-cols-2 gap-2">
            {objetivosDisponiveis.map((obj) => (
              <Button
                key={obj}
                variant={objetivosAlimentares.includes(obj) ? "default" : "outline"}
                onClick={() => onToggleObjetivo(obj)}
                className="justify-start"
              >
                {objetivosAlimentares.includes(obj) && (
                  <Check className="h-4 w-4 mr-2" />
                )}
                {obj}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Selecione um ou mais objetivos
          </p>
        </div>

        <div>
          <Label className="text-base font-semibold mb-3 block">Nível de Atividade Física</Label>
          <div className="grid grid-cols-2 gap-2">
            {niveisAtividade.map((nivel) => (
              <Button
                key={nivel}
                variant={nivelAtividade === nivel ? "default" : "outline"}
                onClick={() => setNivelAtividade(nivel)}
              >
                {nivel}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </QuizStep>
  );
}
