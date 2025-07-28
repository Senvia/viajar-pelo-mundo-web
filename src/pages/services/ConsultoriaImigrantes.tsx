import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Calendar, Clock, MapPin, Users, Heart, Star } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Roteiro Personalizado",
    description: "Criamos um roteiro exclusivo baseado nos seus interesses, tempo disponível e orçamento"
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Assistência completa durante toda a viagem, estamos sempre disponíveis"
  },
  {
    icon: MapPin,
    title: "Destinos Exclusivos",
    description: "Acesso a lugares únicos e experiências autênticas na Europa"
  },
  {
    icon: Users,
    title: "Para Todos os Perfis",
    description: "Especialistas em casais, famílias e viajantes exigentes"
  }
];

const benefits = [
  "Consultoria gratuita inicial",
  "Roteiro detalhado dia a dia",
  "Reservas confirmadas",
  "Documentação completa",
  "App exclusivo com sua viagem",
  "Suporte durante toda a viagem",
  "Contatos locais de emergência",
  "Dicas e recomendações exclusivas"
];

const PlaneamentoPersonalizado = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Serviço Premium
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planeamento Personalizado de Viagem
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Transformamos seus sonhos em um roteiro detalhado e personalizado. 
              Cada viagem é única, assim como você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-secondary"
                onClick={() => window.open('https://wa.me/351911734711', '_blank')}
              >
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Um processo simples e eficiente para criar sua viagem dos sonhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Consultoria Gratuita</h3>
              <p className="text-muted-foreground">
                Conversa inicial para entender seus sonhos, preferências e orçamento
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Criação do Roteiro</h3>
              <p className="text-muted-foreground">
                Desenvolvimento de um roteiro personalizado com todas as reservas
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Viagem dos Sonhos</h3>
              <p className="text-muted-foreground">
                Aproveite sua viagem com total tranquilidade e nosso suporte 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Por que Escolher Nosso Planeamento?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                O que está incluído no seu planeamento
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                      <Star className="h-3 w-3 text-white fill-white" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-elegant"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar Meu Planeamento
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 border-brand-blue/20">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="h-8 w-8 text-brand-blue" />
                  <h3 className="text-xl font-bold text-secondary">Para Casais</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Roteiros românticos com experiências únicas para momentos inesquecíveis a dois.
                </p>
                <div className="text-2xl font-bold text-brand-blue">A partir de €299</div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-brand-green/10 to-brand-blue/10 border-brand-green/20">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-8 w-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-secondary">Para Famílias</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Viagens pensadas para todas as idades com atividades divertidas e educativas.
                </p>
                <div className="text-2xl font-bold text-brand-green">A partir de €399</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default PlaneamentoPersonalizado;