import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Plane, Calendar, Shield, ArrowRight, CheckCircle2, Star, Users } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Planeamento Personalizado",
    subtitle: "Viagens sob medida para você",
    description: "Criamos roteiros exclusivos baseados no seu perfil, preferências e orçamento. Cada detalhe é pensado para proporcionar a experiência perfeita.",
    features: [
      "Consultoria especializada 1:1",
      "Roteiro exclusivo e detalhado", 
      "Suporte durante toda a viagem",
      "Flexibilidade total de alterações"
    ],
    image: "/lovable-uploads/604537d9-c3eb-430c-9d01-820b1bec9336.png",
    href: "/servicos/planeamento",
    highlight: true
  },
  {
    icon: Plane,
    title: "Passagens & Hospedagem",
    subtitle: "Melhores preços garantidos",
    description: "Acesso a tarifas especiais e parcerias exclusivas com companhias aéreas e hotéis em toda a Europa.",
    features: [
      "Passagens com melhores preços",
      "Hotéis cuidadosamente selecionados",
      "Upgrades gratuitos quando disponíveis",
      "Cancelamento flexível"
    ],
    image: "/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png",
    href: "/servicos/passagens",
    highlight: false
  },
  {
    icon: MapPin,
    title: "Atividades Turísticas",
    subtitle: "Experiências autênticas",
    description: "Acesso a experiências exclusivas com guias locais especializados e atividades que vão além do turismo comum.",
    features: [
      "Guias locais certificados",
      "Experiências fora do comum",
      "Acesso a locais exclusivos",
      "Grupos pequenos e personalizados"
    ],
    image: "/lovable-uploads/fda1f478-5e7a-4434-8926-5f0330501e3a.png",
    href: "/servicos/atividades",
    highlight: false
  },
  {
    icon: Shield,
    title: "Serviços de Apoio",
    subtitle: "Tranquilidade total",
    description: "Suporte completo com transfer, seguro, aluguel de carro e assistência 24/7 para sua total tranquilidade.",
    features: [
      "Transfer aeroporto incluído",
      "Seguro viagem abrangente",
      "Aluguel de carro com GPS",
      "Suporte 24/7 via WhatsApp"
    ],
    image: "/lovable-uploads/2da541d5-fe43-4e23-bf3e-d0a2793efe31.png",
    href: "/servicos/apoio",
    highlight: false
  }
];

const PremiumServices = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Serviços Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Experiências Europeias Completas
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Da idealização ao retorno, cuidamos de cada aspeto da sua viagem 
            com expertise, dedicação e atenção aos detalhes que fazem a diferença
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 ${
                service.highlight ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 transition-colors duration-500 group-hover:text-white">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-elegant">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-secondary group-hover:text-white transition-colors mb-2">
                        {service.title}
                      </CardTitle>
                      <div className="text-primary group-hover:text-brand-blue font-medium transition-colors">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <CardDescription className="text-muted-foreground group-hover:text-white/90 text-lg leading-relaxed transition-colors">
                    {service.description}
                  </CardDescription>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                        <span className="text-sm font-medium group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-white group-hover:text-secondary group-hover:border-white transition-all duration-300 font-semibold"
                    onClick={() => window.location.href = service.href}
                  >
                    <span>Saber Mais</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </div>

              {/* Highlight indicator */}
              {service.highlight && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-brand-blue text-white text-xs font-semibold rounded-full">
                  Mais Popular
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Clientes Atendidos</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <div className="text-muted-foreground">Países Europeus</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Suporte Ativo</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Consultoria inicial gratuita</span>
          </div>
          
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Pronto para começar a sua aventura europeia?
          </h3>
          
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 shadow-elegant px-8 py-4 text-lg font-semibold group"
            onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
          >
            Solicitar Orçamento Personalizado
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;