import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuizStep } from "@/components/QuizStep";
import { Medicamento } from "@/types";
import { Crown, Sparkles, Check } from "lucide-react";

interface QuizStep6Props {
  nome: string;
  tiposDiabetes: string[];
  medicamentos: Medicamento[];
  objetivosAlimentares: string[];
  onComplete: () => void;
  onPrev: () => void;
}

export function QuizStep6({
  nome,
  tiposDiabetes,
  medicamentos,
  objetivosAlimentares,
  onComplete,
  onPrev
}: QuizStep6Props) {
  return (
    <QuizStep
      currentStep={6}
      totalSteps={6}
      title={`Parabéns, ${nome}!`}
      subtitle="Seu perfil está completo"
      onNext={onComplete}
      onPrev={onPrev}
      nextLabel="Ativar Meu Plano Premium 🎉"
      canProceed={true}
    >
      <div className="space-y-6">
        <Card className="p-6 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Crown className="h-12 w-12 opacity-20" />
          </div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Crown className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Oferta Especial</h3>
            </div>
            <p className="text-xl font-semibold mb-2">
              14 Dias de Premium GRÁTIS
            </p>
            <p className="text-sm opacity-90">
              Acesso completo a todas as funcionalidades premium para começar sua jornada!
            </p>
          </div>
        </Card>

        <div>
          <h3 className="font-bold text-lg mb-3">Resumo do Seu Perfil</h3>
          <div className="space-y-3">
            <Card className="p-4">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Tipo de Diabetes</p>
              <div className="flex flex-wrap gap-2">
                {tiposDiabetes.map((tipo) => (
                  <Badge key={tipo} variant="secondary">{tipo}</Badge>
                ))}
              </div>
            </Card>

            {medicamentos.length > 0 && (
              <Card className="p-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Medicamentos ({medicamentos.length})
                </p>
                <div className="flex flex-wrap gap-2">
                  {medicamentos.slice(0, 3).map((med) => (
                    <Badge key={med.id} variant="outline">{med.nome}</Badge>
                  ))}
                  {medicamentos.length > 3 && (
                    <Badge variant="outline">+{medicamentos.length - 3} mais</Badge>
                  )}
                </div>
              </Card>
            )}

            <Card className="p-4">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Objetivos
              </p>
              <div className="flex flex-wrap gap-2">
                {objetivosAlimentares.map((obj) => (
                  <Badge key={obj} variant="secondary">{obj}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">O que você vai receber:</h3>
              <ul className="space-y-2">
                {[
                  'Receitas personalizadas ilimitadas',
                  'Assistente IA médica 24h',
                  'Relatórios detalhados',
                  'Análises avançadas',
                  'Suporte prioritário'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Após 14 dias, apenas R$ 19,90/mês. Cancele quando quiser.
          </p>
        </Card>
      </div>
    </QuizStep>
  );
}
