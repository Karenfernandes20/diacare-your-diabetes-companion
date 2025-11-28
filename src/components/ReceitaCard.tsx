import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, Apple, Sparkles } from "lucide-react";
import { Receita } from "@/types";

interface ReceitaCardProps {
  receita: Receita;
}

export function ReceitaCard({ receita }: ReceitaCardProps) {
  const handleVerReceita = () => {
    alert(`Receita completa:\n\n${receita.nome}\n\nIngredientes:\n${receita.ingredientes.join('\n')}\n\nBenefícios:\n${receita.beneficios.join('\n')}`);
  };

  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-primary/10">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground flex-1">{receita.nome}</h3>
        <Sparkles className="h-5 w-5 text-accent flex-shrink-0" />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {receita.tempo}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1">
          <Apple className="h-3 w-3" />
          {receita.carboidratos}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1">
          <Flame className="h-3 w-3" />
          {receita.calorias}
        </Badge>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold mb-2">Ingredientes principais:</p>
        <p className="text-sm text-muted-foreground">
          {receita.ingredientes.slice(0, 3).join(', ')}...
        </p>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold mb-2">Benefícios:</p>
        <div className="flex flex-wrap gap-1">
          {receita.beneficios.slice(0, 3).map((beneficio, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {beneficio}
            </Badge>
          ))}
        </div>
      </div>

      <Button onClick={handleVerReceita} className="w-full" variant="outline">
        Ver Receita Completa
      </Button>
    </Card>
  );
}
