import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { QuizStep } from "@/components/QuizStep";

interface QuizStep1Props {
  nome: string;
  setNome: (value: string) => void;
  idade: string;
  setIdade: (value: string) => void;
  genero: string;
  setGenero: (value: string) => void;
  tiposDiabetes: string[];
  setTiposDiabetes: (value: string[]) => void;
  onNext: () => void;
}

export function QuizStep1({
  nome,
  setNome,
  idade,
  setIdade,
  genero,
  setGenero,
  tiposDiabetes,
  setTiposDiabetes,
  onNext
}: QuizStep1Props) {
  const toggleTipo = (tipo: string) => {
    setTiposDiabetes(
      tiposDiabetes.includes(tipo)
        ? tiposDiabetes.filter(t => t !== tipo)
        : [...tiposDiabetes, tipo]
    );
  };

  const canProceed = nome && idade && genero && tiposDiabetes.length > 0;

  return (
    <QuizStep
      currentStep={1}
      totalSteps={6}
      title="Informações Básicas"
      subtitle="Vamos conhecer você melhor"
      onNext={onNext}
      canProceed={canProceed}
    >
      <div className="space-y-6">
        <div>
          <Label htmlFor="nome">Nome Completo</Label>
          <Input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            className="mt-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="idade">Idade</Label>
            <Input
              id="idade"
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Ex: 45"
              className="mt-2"
            />
          </div>
          <div>
            <Label>Gênero</Label>
            <div className="flex gap-2 mt-2">
              {['Masculino', 'Feminino', 'Outro'].map((gen) => (
                <Button
                  key={gen}
                  variant={genero === gen ? "default" : "outline"}
                  onClick={() => setGenero(gen)}
                  className="flex-1"
                >
                  {gen}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Label>Tipo de Diabetes</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {['Tipo 1', 'Tipo 2', 'Gestacional', 'Pré-diabetes'].map((tipo) => (
              <Button
                key={tipo}
                variant={tiposDiabetes.includes(tipo) ? "default" : "outline"}
                onClick={() => toggleTipo(tipo)}
              >
                {tipo}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Você pode selecionar mais de uma opção
          </p>
        </div>
      </div>
    </QuizStep>
  );
}
