import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Car, Shield, Navigation, Phone, Clock, CreditCard } from "lucide-react";

const services = [
  {
    icon: Navigation,
    title: "Transfer Aeroporto",
    description: "Transporte confortável e seguro do aeroporto ao hotel",
    features: ["Motorista profissional", "Veículo climatizado", "Acompanhamento do voo", "Sinalização personalizada"],
    price: "A partir de €25"
  },
  {
    icon: Shield,
    title: "Seguro Viagem",
    description: "Proteção completa para toda a sua viagem",
    features: ["Cobertura médica", "Cancelamento de viagem", "Bagagem extraviada", "Assistência 24h"],
    price: "A partir de €15"
  },
  {
    icon: Car,
    title: "Aluguel de Carro",
    description: "Liberdade total para explorar os destinos",
    features: ["Carros novos", "Seguro incluído", "GPS gratuito", "Atendimento português"],
    price: "A partir de €35/dia"
  },
  {
    icon: Phone,
    title: "Suporte 24/7",
    description: "Assistência completa durante toda a viagem",
    features: ["WhatsApp direto", "Emergências", "Alterações de última hora", "Suporte em português"],
    price: "Incluso em todos os pacotes"
  }
];

const transferOptions = [
  {
    type: "Econômico",
    description: "Transporte compartilhado confortável",
    capacity: "1-3 pessoas",
    price: "€25",
    features: ["Veículo compartilhado", "Ar condicionado", "Bagagem incluída"]
  },
  {
    type: "Privado",
    description: "Transporte exclusivo para seu grupo",
    capacity: "1-4 pessoas",
    price: "€45",
    features: ["Veículo exclusivo", "Motorista dedicado", "Flexibilidade de horário"],
    popular: true
  },
  {
    type: "Premium",
    description: "Transporte de luxo com conforto máximo",
    capacity: "1-3 pessoas",
    price: "€75",
    features: ["Veículo de luxo", "Wi-Fi grátis", "Água e amenidades"]
  }
];

const insurancePlans = [
  {
    plan: "Básico",
    coverage: "€30.000",
    price: "€15",
    features: ["Despesas médicas", "Medicamentos", "Odontologia emergencial"]
  },
  {
    plan: "Completo",
    coverage: "€60.000",
    price: "€25",
    features: ["Tudo do básico", "Cancelamento", "Interrupção de viagem", "Bagagem"],
    popular: true
  },
  {
    plan: "Premium",
    coverage: "€100.000",
    price: "€40",
    features: ["Tudo do completo", "Esportes radicais", "Gestante", "Doenças preexistentes"]
  }
];

const ServicosApoio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Total Tranquilidade
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serviços de Apoio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Transfer, seguro viagem, aluguel de carro e suporte 24/7. 
              Todo o apoio necessário para sua total tranquilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contratar Serviços
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

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Nossos Serviços de Apoio
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para viajar com total segurança e comodidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-lg font-bold text-brand-blue mt-2">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Options */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Opções de Transfer
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha a opção que melhor se adequa às suas necessidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transferOptions.map((option, index) => (
              <Card key={index} className={`text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${option.popular ? 'border-brand-blue border-2' : ''}`}>
                <CardHeader>
                  {option.popular && (
                    <Badge className="mx-auto mb-4 bg-brand-blue">Mais Popular</Badge>
                  )}
                  <CardTitle className="text-2xl text-secondary">{option.type}</CardTitle>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                  <div className="text-3xl font-bold text-brand-blue mt-4">{option.price}</div>
                  <div className="text-sm text-muted-foreground">{option.capacity}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-gradient-primary hover:opacity-90"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Reservar Transfer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Planos de Seguro Viagem
            </h2>
            <p className="text-xl text-muted-foreground">
              Proteção completa para você viajar com total tranquilidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insurancePlans.map((plan, index) => (
              <Card key={index} className={`text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'border-brand-green border-2' : ''}`}>
                <CardHeader>
                  {plan.popular && (
                    <Badge className="mx-auto mb-4 bg-brand-green">Recomendado</Badge>
                  )}
                  <CardTitle className="text-2xl text-secondary">{plan.plan}</CardTitle>
                  <div className="text-lg text-muted-foreground">Cobertura até {plan.coverage}</div>
                  <div className="text-3xl font-bold text-brand-green mt-4">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">por pessoa</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-gradient-primary hover:opacity-90"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contratar Seguro
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Support */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                Por que escolher nossos serviços de apoio?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Disponibilidade 24/7</h3>
                    <p className="text-muted-foreground">
                      Estamos sempre disponíveis para ajudar, independente do fuso horário ou emergência
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Parceiros Confiáveis</h3>
                    <p className="text-muted-foreground">
                      Trabalhamos apenas com as melhores empresas de seguro e transporte da Europa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Preços Justos</h3>
                    <p className="text-muted-foreground">
                      Nossos preços são competitivos e transparentes, sem taxas ocultas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Atendimento em Português</h3>
                    <p className="text-muted-foreground">
                      Toda comunicação é feita em português, facilitando sua experiência
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 border-brand-blue/20">
                <h3 className="text-xl font-bold text-secondary mb-4">Pacote Completo</h3>
                <p className="text-muted-foreground mb-4">
                  Transfer + Seguro + Suporte 24/7 com desconto especial para quem contrata tudo junto.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg line-through text-muted-foreground">€85</div>
                    <div className="text-2xl font-bold text-brand-blue">€65</div>
                  </div>
                  <Badge variant="secondary" className="bg-brand-green text-white">
                    Economize €20
                  </Badge>
                </div>
              </Card>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-elegant"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contratar Pacote Completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default ServicosApoio;