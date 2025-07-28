import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Plane, Calendar, Shield } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Planeamento Personalizado",
    description: "Viagens sob medida para casais, famílias e viajantes exigentes. Cuidamos de cada detalhe do seu roteiro.",
    features: ["Roteiro exclusivo", "Consultoria especializada", "Suporte 24/7"],
    href: "/servicos/planeamento"
  },
  {
    icon: Plane,
    title: "Passagens & Hospedagem",
    description: "Melhores preços em passagens aéreas e reservas de hospedagem em toda a Europa.",
    features: ["Passagens aéreas", "Hotéis selecionados", "Melhores preços"],
    href: "/servicos/passagens"
  },
  {
    icon: MapPin,
    title: "Atividades Turísticas",
    description: "Experiências únicas e inesquecíveis com guias especializados e atividades exclusivas.",
    features: ["Guia turístico", "Atividades exclusivas", "Experiências autênticas"],
    href: "/servicos/atividades"
  },
  {
    icon: Shield,
    title: "Serviços de Apoio",
    description: "Transfer, seguro viagem, aluguel de carro e todo suporte necessário para sua tranquilidade.",
    features: ["Transfer aeroporto", "Seguro viagem", "Aluguel de carro"],
    href: "/servicos/apoio"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oferecemos uma gama completa de serviços para tornar sua viagem pela Europa 
            uma experiência única e inesquecível
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => window.location.href = service.href}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 shadow-elegant px-8"
            onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;