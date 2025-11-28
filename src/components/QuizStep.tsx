import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface QuizStepProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  onNext: () => void;
  onPrev?: () => void;
  nextLabel?: string;
  canProceed?: boolean;
}

export function QuizStep({
  currentStep,
  totalSteps,
  title,
  subtitle,
  children,
  onNext,
  onPrev,
  nextLabel = "Continuar",
  canProceed = true
}: QuizStepProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-hero py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Passo {currentStep} de {totalSteps}
            </span>
            <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-8 shadow-large">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>

          <div className="mb-8">{children}</div>

          <div className="flex justify-between gap-4">
            {onPrev ? (
              <Button onClick={onPrev} variant="outline" size="lg">
                <ChevronLeft className="mr-2 h-5 w-5" />
                Voltar
              </Button>
            ) : (
              <div />
            )}
            <Button 
              onClick={onNext} 
              disabled={!canProceed}
              size="lg"
              className="ml-auto"
            >
              {nextLabel}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
