import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Plane, MapPin, Shield, Check } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Consultoria para Imigrantes",
    description: "Suporte completo para quem quer emigrar para a Europa. Desde documentação até integração no novo país, estamos contigo em cada passo.",
    features: [
      "Assessoria para visto e documentação",
      "Orientação sobre processo de imigração",
      "Suporte na procura de habitação",
      "Assistência na abertura de conta bancária",
      "Integração cultural e social"
    ],
    price: "",
    image: "/lovable-uploads/c2187682-7e3d-4df9-93f1-cbb52d3d3dec.png",
    href: "/servicos/imigrantes"
  },
  {
    icon: MapPin,
    title: "Pacotes de Viagens",
    description: "Pacotes completos para descobrir o melhor da Europa. Roteiros cuidadosamente planeados com as melhores experiências em cada destino.",
    features: [
      "Roteiros completos e organizados",
      "Hospedagem em hotéis selecionados",
      "Passagens aéreas incluídas",
      "Guia turístico especializado",
      "Atividades e experiências únicas"
    ],
    price: "",
    image: "/lovable-uploads/f6e46f42-cc4f-42a3-8ff4-db6fd6fb97b8.png",
    href: "/servicos/pacotes"
  },
  {
    icon: Calendar,
    title: "Consultoria Especializada Europa",
    description: "Consultoria especializada para negócios, estudos ou investimentos na Europa. Orientação profissional para decisões importantes.",
    features: [
      "Consultoria para negócios na Europa",
      "Orientação para estudos no exterior",
      "Assessoria para investimentos",
      "Networking profissional",
      "Acompanhamento personalizado"
    ],
    price: "",
    image: "/lovable-uploads/d473c4c5-98ec-4c93-ac26-d2dc26c06c80.png",
    href: "/servicos/consultoria-europa"
  },
  {
    icon: Plane,
    title: "Serviços Avulsos",
    description: "Serviços individuais para necessidades específicas. Transfer, seguro viagem, reservas de hotéis e muito mais.",
    features: [
      "Transfer aeroporto-hotel",
      "Seguro viagem personalizado",
      "Reservas de hotéis e restaurantes",
      "Aluguel de carro",
      "Assistência 24/7 durante a viagem"
    ],
    price: "",
    image: "/lovable-uploads/c23fafcc-27fe-4e3a-b4aa-8061a9acfa1a.png",
    href: "/servicos/avulsos"
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
        
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Card className="overflow-hidden border-0 shadow-card h-full">
                  <CardContent className="p-0 h-full">
                    <div className="aspect-[16/10] overflow-hidden h-full min-h-[400px]">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Content */}
              <div className={`space-y-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      size="lg"
                      className="bg-gradient-primary hover:opacity-90 shadow-elegant px-10 py-6 text-lg font-semibold"
                      onClick={() => window.location.href = service.href}
                    >
                      Saiba Mais
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="px-10 py-6 text-lg font-semibold border-2"
                      onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
                    >
                      Contactar Agora
                    </Button>
                  </div>
                </div>
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