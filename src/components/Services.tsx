import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Plane, MapPin, Shield, Check } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Planeamento Personalizado",
    description: "Viagens sob medida para casais, famílias e viajantes exigentes. Cuidamos de cada detalhe do seu roteiro para garantir uma experiência única e inesquecível.",
    features: [
      "Roteiro exclusivo personalizado",
      "Consultoria especializada 1:1",
      "Suporte 24/7 durante a viagem",
      "Reservas em restaurantes exclusivos",
      "Atividades adaptadas ao seu perfil"
    ],
    price: "A partir de €299",
    image: "/lovable-uploads/c2187682-7e3d-4df9-93f1-cbb52d3d3dec.png",
    href: "/servicos/planeamento"
  },
  {
    icon: Plane,
    title: "Passagens & Hospedagem",
    description: "Encontramos as melhores ofertas em passagens aéreas e hospedagem em toda a Europa. Trabalhamos com parceiros de confiança para garantir os melhores preços.",
    features: [
      "Passagens aéreas com melhores preços",
      "Hotéis selecionados e verificados",
      "Flexibilidade de cancelamento",
      "Programa de fidelidade",
      "Seguro viagem incluído"
    ],
    price: "Preços competitivos",
    image: "/lovable-uploads/f6e46f42-cc4f-42a3-8ff4-db6fd6fb97b8.png",
    href: "/servicos/passagens"
  },
  {
    icon: MapPin,
    title: "Atividades Turísticas",
    description: "Experiências únicas e autênticas com guias especializados. Descubra os segredos mais bem guardados de cada destino europeu.",
    features: [
      "Guias turísticos especializados",
      "Atividades exclusivas e autênticas",
      "Tours privados personalizados",
      "Experiências gastronómicas locais",
      "Acesso a locais únicos"
    ],
    price: "A partir de €89",
    image: "/lovable-uploads/d473c4c5-98ec-4c93-ac26-d2dc26c06c80.png",
    href: "/servicos/atividades"
  },
  {
    icon: Shield,
    title: "Serviços de Apoio",
    description: "Todo o suporte necessário para sua tranquilidade durante a viagem. Transfer, seguro, aluguel de carro e assistência completa.",
    features: [
      "Transfer aeroporto-hotel",
      "Seguro viagem completo",
      "Aluguel de carro",
      "Assistência em emergências",
      "Suporte multilíngue"
    ],
    price: "Serviços complementares",
    image: "/lovable-uploads/c23fafcc-27fe-4e3a-b4aa-8061a9acfa1a.png",
    href: "/servicos/apoio"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oferecemos uma gama completa de serviços para tornar sua viagem pela Europa 
            uma experiência única e inesquecível
          </p>
        </div>
        
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {service.price}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="bg-gradient-primary hover:opacity-90 shadow-elegant px-8"
                      onClick={() => window.location.href = service.href}
                    >
                      Saiba Mais
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
                    >
                      Contactar Agora
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Card className="overflow-hidden border-0 shadow-card">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Card className="inline-block p-8 bg-gradient-primary text-white border-0">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para sua próxima aventura?
            </h3>
            <p className="text-white/90 mb-6">
              Entre em contacto connosco e comece a planear a viagem dos seus sonhos
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
            >
              Solicitar Orçamento Gratuito
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;