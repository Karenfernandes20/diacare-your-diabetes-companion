import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Heart, MessageSquare, Bell, FileText, Trophy, Star, ArrowRight, User, LogIn } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";

interface LandingPageProps {
  onStartQuiz: () => void;
  onLogin?: () => void;
  onSignup?: () => void;
}

export function LandingPage({ onStartQuiz, onLogin, onSignup }: LandingPageProps) {
  const scrollToTestimonials = () => {
    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
  };

  const processarPagamento = () => {
    try {
      window.open('https://mpago.la/31acHuz', '_blank');
    } catch (error) {
      alert('Por favor, abra o link manualmente: https://mpago.la/31acHuz');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header/Navbar */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Gliccare</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={onLogin} className="gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button onClick={onSignup} className="gap-2">
              <User className="h-4 w-4" />
              Cadastrar
            </Button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Star className="h-4 w-4 mr-1 fill-primary" />
            Mais de 50.000 diabéticos confiam no Gliccare
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Controle seu Diabetes<br />com Inteligência
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receitas personalizadas, controle de glicose e assistente IA médica 24h.
            Tudo em um só lugar para você viver melhor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onStartQuiz} className="shadow-medium">
              Começar Avaliação Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToTestimonials}>
              Ver Depoimentos
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Funcionalidades Completas</h2>
          <p className="text-center text-muted-foreground mb-12">
            Tudo que você precisa para gerenciar sua diabetes
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Activity}
              title="Controle de Glicose"
              description="Registre e acompanhe seus níveis de glicemia com gráficos intuitivos e alertas personalizados."
            />
            <FeatureCard
              icon={Heart}
              title="Receitas Personalizadas"
              description="Mais de 200 receitas adaptadas ao seu perfil, necessidades e preferências alimentares."
            />
            <FeatureCard
              icon={MessageSquare}
              title="IA Médica 24h"
              description="Tire dúvidas e receba orientações personalizadas a qualquer momento com nossa assistente inteligente."
              badge={
                <Badge className="bg-accent text-accent-foreground">NOVO!</Badge>
              }
            />
            <FeatureCard
              icon={Bell}
              title="Lembretes Inteligentes"
              description="Nunca esqueça medicamentos, medições ou refeições com notificações no momento certo."
            />
            <FeatureCard
              icon={FileText}
              title="Relatórios Médicos"
              description="Gere relatórios completos para compartilhar com seu médico em consultas."
            />
            <FeatureCard
              icon={Trophy}
              title="Gamificação e Metas"
              description="Alcance objetivos, ganhe conquistas e mantenha-se motivado na sua jornada."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Planos para Você</h2>
          <p className="text-center text-muted-foreground mb-12">
            Escolha o plano ideal para suas necessidades
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              title="Plano Gratuito"
              price="R$ 0"
              features={[
                "Registro básico de glicose",
                "10 receitas por mês",
                "Lembretes de medicamentos",
                "Gráficos simples",
                "Suporte por email"
              ]}
              onSelect={onStartQuiz}
            />
            <PricingCard
              title="Plano Premium"
              price="R$ 19,90"
              period="mês"
              isPopular
              isPremium
              badge="7 dias grátis"
              features={[
                "Tudo do plano gratuito",
                "Receitas ilimitadas personalizadas",
                "Assistente IA médica 24h",
                "Relatórios médicos completos",
                "Análises avançadas e insights",
                "Suporte prioritário"
              ]}
              onSelect={processarPagamento}
            />
            <PricingCard
              title="Plano Platinum"
              price="R$ 49,90"
              period="mês"
              isPremium
              badge="Mais Completo"
              features={[
                "Tudo do plano Premium",
                "Acompanhamento nutricional",
                "Consultas com especialistas",
                "Planos de exercícios personalizados",
                "Integração com smartwatches",
                "Suporte VIP 24h",
                "Análises preditivas avançadas"
              ]}
              onSelect={processarPagamento}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">O Que Dizem Nossos Usuários</h2>
          <p className="text-center text-muted-foreground mb-12">
            Histórias reais de transformação
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Maria Silva"
              role="Tipo 2 há 5 anos"
              content="O Gliccare mudou completamente minha rotina! As receitas são deliciosas e minha hemoglobina glicada melhorou significativamente."
              rating={5}
            />
            <TestimonialCard
              name="João Santos"
              role="Tipo 1 há 12 anos"
              content="A assistente IA é incrível! Sempre que tenho dúvidas, recebo respostas rápidas e precisas. Não vivo sem!"
              rating={5}
            />
            <TestimonialCard
              name="Ana Costa"
              role="Pré-diabetes"
              content="Consegui controlar minha glicose e perder peso com as orientações do app. Recomendo para todos!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Gliccare</h3>
              <p className="text-sm text-muted-foreground">
                Seu parceiro no controle do diabetes
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Depoimentos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Sobre Nós</li>
                <li>Blog</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacidade</li>
                <li>Termos de Uso</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Gliccare. Todos os direitos reservados.</p>
            <p className="mt-2">
              Este app não substitui consultas médicas. Sempre consulte seu médico.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
