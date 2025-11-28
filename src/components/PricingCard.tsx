import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  isPremium?: boolean;
  onSelect: () => void;
  badge?: string;
}

export function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  isPopular, 
  isPremium,
  onSelect,
  badge
}: PricingCardProps) {
  return (
    <Card className={`p-8 relative ${isPopular ? 'border-primary border-2 shadow-large scale-105' : 'shadow-soft'} transition-all duration-300 hover:shadow-medium`}>
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
          {badge || "Mais Popular"}
        </Badge>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {period && <span className="text-muted-foreground">/{period}</span>}
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        onClick={onSelect}
        variant={isPremium ? "default" : "outline"}
        className="w-full"
        size="lg"
      >
        {isPremium ? "Começar Agora" : "Continuar Grátis"}
      </Button>
    </Card>
  );
}
