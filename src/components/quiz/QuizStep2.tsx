import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { QuizStep } from "@/components/QuizStep";

interface QuizStep2Props {
  peso: string;
  setPeso: (value: string) => void;
  altura: string;
  setAltura: (value: string) => void;
  tempodiagnostico: string;
  setTempodiagnostico: (value: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function QuizStep2({
  peso,
  setPeso,
  altura,
  setAltura,
  tempodiagnostico,
  setTempodiagnostico,
  onNext,
  onPrev
}: QuizStep2Props) {
  const canProceed = peso && altura && tempodiagnostico;

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    if (p && a) {
      return (p / (a * a)).toFixed(1);
    }
    return null;
  };

  const imc = calcularIMC();

  return (
    <QuizStep
      currentStep={2}
      totalSteps={6}
      title="Medidas Físicas e Histórico"
      subtitle="Essas informações ajudam a personalizar suas recomendações"
      onNext={onNext}
      onPrev={onPrev}
      canProceed={!!canProceed}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="peso">Peso (kg)</Label>
            <Input
              id="peso"
              type="number"
              step="0.1"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Ex: 75.5"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="altura">Altura (cm)</Label>
            <Input
              id="altura"
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Ex: 170"
              className="mt-2"
            />
          </div>
        </div>

        {imc && (
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-sm font-semibold mb-1">Seu IMC calculado:</p>
            <p className="text-2xl font-bold text-primary">{imc}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {parseFloat(imc) < 18.5 && "Abaixo do peso"}
              {parseFloat(imc) >= 18.5 && parseFloat(imc) < 25 && "Peso normal"}
              {parseFloat(imc) >= 25 && parseFloat(imc) < 30 && "Sobrepeso"}
              {parseFloat(imc) >= 30 && "Obesidade"}
            </p>
          </Card>
        )}

        <div>
          <Label htmlFor="tempo">Há quanto tempo foi diagnosticado?</Label>
          <Input
            id="tempo"
            value={tempodiagnostico}
            onChange={(e) => setTempodiagnostico(e.target.value)}
            placeholder="Ex: 5 anos, 2 meses, recentemente"
            className="mt-2"
          />
        </div>
      </div>
    </QuizStep>
  );
}
