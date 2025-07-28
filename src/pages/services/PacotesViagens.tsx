import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Plane, Building, CreditCard, Shield, Clock, Users } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Passagens Aéreas",
    description: "Melhores preços e horários para todos os destinos europeus",
    features: ["Voos diretos e conexões", "Melhor custo-benefício", "Flexibilidade de datas", "Seguro viagem incluído"]
  },
  {
    icon: Building,
    title: "Hospedagem",
    description: "Hotéis selecionados e acomodações únicas em toda a Europa",
    features: ["Hotéis 3, 4 e 5 estrelas", "Pousadas boutique", "Apartamentos", "Localização privilegiada"]
  }
];

const benefits = [
  {
    icon: CreditCard,
    title: "Melhores Preços",
    description: "Parcerias exclusivas garantem os melhores valores do mercado"
  },
  {
    icon: Shield,
    title: "Reservas Garantidas",
    description: "Confirmação imediata e proteção total da sua reserva"
  },
  {
    icon: Clock,
    title: "Suporte Contínuo",
    description: "Assistência antes, durante e após sua viagem"
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção exclusiva e dedicada"
  }
];

const destinations = [
  "Lisboa", "Porto", "Barcelona", "Madrid", "Paris", "Londres", 
  "Roma", "Florença", "Amsterdã", "Berlim", "Viena", "Praga"
];

const PassagensHospedagem = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Melhor Custo-Benefício
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Passagens & Hospedagem
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Os melhores preços em passagens aéreas e hospedagem para toda a Europa. 
              Reservas garantidas e suporte completo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Cotação
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

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para sua viagem em um só lugar
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-secondary">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Por que Reservar Conosco?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Principais Destinos
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos voos e hospedagem para todos os principais destinos europeus
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-brand-blue/5 hover:to-brand-green/5">
                <div className="font-semibold text-secondary">{destination}</div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Não encontrou seu destino? Trabalhamos com toda a Europa!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-elegant"
              onClick={() => window.open('https://wa.me/351911734711', '_blank')}
            >
              Consultar Outros Destinos
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Exemplos de Preços
            </h2>
            <p className="text-xl text-muted-foreground">
              Valores aproximados para você ter uma ideia. Solicite uma cotação personalizada!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Portugal → Paris</CardTitle>
                <div className="text-3xl font-bold text-brand-blue mt-4">€89</div>
                <CardDescription>por pessoa, ida e volta</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Voo direto, bagagem incluída
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-brand-blue border-2">
              <CardHeader>
                <Badge className="mx-auto mb-4 bg-brand-blue">Mais Popular</Badge>
                <CardTitle className="text-2xl text-secondary">Hotel 4★ Centro</CardTitle>
                <div className="text-3xl font-bold text-brand-blue mt-4">€85</div>
                <CardDescription>por noite, quarto duplo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Café da manhã incluído, localização premium
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Pacote Completo</CardTitle>
                <div className="text-3xl font-bold text-brand-green mt-4">€299</div>
                <CardDescription>por pessoa, 4 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Voo + hotel + transfer + seguro
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-elegant"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Cotação Personalizada
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default PassagensHospedagem;