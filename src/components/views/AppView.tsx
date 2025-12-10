import { useState } from "react";
import { UserProfile, Receita } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReceitaCard } from "@/components/ReceitaCard";
import { getReceitasPorTurno } from "@/utils/receitasHelper";
import { 
  Activity, 
  MessageSquare, 
  UtensilsCrossed, 
  Pill, 
  Crown, 
  Sparkles,
  RefreshCw,
  LogOut 
} from "lucide-react";

interface AppViewProps {
  userProfile: UserProfile;
  onOpenChat: () => void;
  onLogout?: () => void;
}

type TabType = 'dashboard' | 'receitas' | 'glicose' | 'medicamentos';

export function AppView({ userProfile, onOpenChat, onLogout }: AppViewProps) {
  const [currentTab, setCurrentTab] = useState<TabType>('dashboard');
  
  const [receitasManha, setReceitasManha] = useState<Receita[]>(getReceitasPorTurno('manha', 3));
  const [receitasTarde, setReceitasTarde] = useState<Receita[]>(getReceitasPorTurno('tarde', 3));
  const [receitasNoite, setReceitasNoite] = useState<Receita[]>(getReceitasPorTurno('noite', 3));

  const atualizarReceitas = (turno: 'manha' | 'tarde' | 'noite') => {
    const novasReceitas = getReceitasPorTurno(turno, 3);
    if (turno === 'manha') setReceitasManha(novasReceitas);
    if (turno === 'tarde') setReceitasTarde(novasReceitas);
    if (turno === 'noite') setReceitasNoite(novasReceitas);
  };

  const diasRestantesPremium = userProfile.premiumExpiresAt 
    ? Math.ceil((userProfile.premiumExpiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-white border-b shadow-soft sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Gliccare</h1>
              <p className="text-sm text-muted-foreground">Olá, {userProfile.nome}!</p>
            </div>
            <div className="flex items-center gap-2">
              {userProfile.isPremium && (
                <Badge className="bg-accent text-accent-foreground">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
              <Button onClick={onOpenChat} size="lg" className="shadow-medium">
                <MessageSquare className="h-5 w-5 mr-2" />
                IA Médica
              </Button>
              {onLogout && (
                <Button onClick={onLogout} variant="outline" size="icon">
                  <LogOut className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {[
              { id: 'dashboard', label: 'Início', icon: Activity },
              { id: 'receitas', label: 'Receitas', icon: UtensilsCrossed },
              { id: 'glicose', label: 'Glicose', icon: Activity },
              { id: 'medicamentos', label: 'Medicamentos', icon: Pill },
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={currentTab === id ? 'default' : 'ghost'}
                onClick={() => setCurrentTab(id as TabType)}
                className="flex-shrink-0"
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {currentTab === 'dashboard' && (
          <div className="space-y-6">
            {userProfile.isPremium && diasRestantesPremium > 0 && (
              <Card className="p-6 bg-gradient-primary text-white">
                <div className="flex items-center gap-3">
                  <Crown className="h-8 w-8" />
                  <div>
                    <h2 className="text-xl font-bold">Plano Premium Ativo!</h2>
                    <p className="text-sm opacity-90">
                      Você tem {diasRestantesPremium} dias grátis restantes. Aproveite todos os recursos!
                    </p>
                  </div>
                </div>
              </Card>
            )}

            <div>
              <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Gliccare</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card 
                  className="p-6 cursor-pointer hover:shadow-medium transition-all"
                  onClick={() => setCurrentTab('glicose')}
                >
                  <Activity className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Controle de Glicose</h3>
                  <p className="text-sm text-muted-foreground">
                    Registre e monitore seus níveis de glicemia
                  </p>
                </Card>

                <Card 
                  className="p-6 cursor-pointer hover:shadow-medium transition-all"
                  onClick={() => setCurrentTab('receitas')}
                >
                  <UtensilsCrossed className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Receitas Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    200+ receitas personalizadas para você
                  </p>
                </Card>

                <Card 
                  className="p-6 cursor-pointer hover:shadow-medium transition-all"
                  onClick={onOpenChat}
                >
                  <MessageSquare className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Assistente IA</h3>
                  <p className="text-sm text-muted-foreground">
                    Tire dúvidas 24h com nossa IA médica
                  </p>
                </Card>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'receitas' && (
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-bold">Receitas Premium</h2>
                <Crown className="h-6 w-6 text-accent" />
              </div>
              <p className="text-muted-foreground">
                Personalizadas para seus objetivos: {userProfile.objetivosAlimentares.join(', ')}
              </p>
            </div>

            {/* Café da Manhã */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">☀️ Café da Manhã</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => atualizarReceitas('manha')}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Atualizar 3 Opções
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {receitasManha.map((receita) => (
                  <ReceitaCard key={receita.id} receita={receita} />
                ))}
              </div>
            </div>

            {/* Almoço */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">🌤️ Almoço</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => atualizarReceitas('tarde')}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Atualizar 3 Opções
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {receitasTarde.map((receita) => (
                  <ReceitaCard key={receita.id} receita={receita} />
                ))}
              </div>
            </div>

            {/* Jantar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">🌙 Jantar</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => atualizarReceitas('noite')}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Atualizar 3 Opções
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {receitasNoite.map((receita) => (
                  <ReceitaCard key={receita.id} receita={receita} />
                ))}
              </div>
            </div>

            <Card className="p-8 text-center bg-gradient-card">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quer Mais Receitas?</h3>
              <p className="text-muted-foreground mb-4">
                Acesse nossa biblioteca completa com mais de 200 receitas personalizadas
              </p>
              <Button size="lg">
                Ver Biblioteca Completa Premium
              </Button>
            </Card>
          </div>
        )}

        {currentTab === 'glicose' && (
          <Card className="p-8 text-center">
            <Activity className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Controle de Glicose</h2>
            <p className="text-muted-foreground">
              Funcionalidade em desenvolvimento. Em breve você poderá registrar e visualizar seus níveis de glicemia.
            </p>
          </Card>
        )}

        {currentTab === 'medicamentos' && (
          <Card className="p-8 text-center">
            <Pill className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Gerenciamento de Medicamentos</h2>
            <p className="text-muted-foreground">
              Funcionalidade em desenvolvimento. Em breve você poderá gerenciar seus medicamentos e receber lembretes.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
