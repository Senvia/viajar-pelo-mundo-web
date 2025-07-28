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
    description: "Portugal Essence - 7 dias e 6 noites no Porto. Pacote completo com experiências únicas e inesquecíveis na cidade mais charmosa de Portugal.",
    features: [
      "Traslado confortável em carro executivo até o hotel",
      "City Tour Porto (Privativo) + Museu da experiência do Vinho – WOW",
      "Workshop Pastel de Nata no Porto - 2h",
      "Cruzeiro Gourmet ao Pôr do Sol (Partilhado) - 2h",
      "Experiência Gastronómica com Prova de Vinhos - 3h",
      "Espetáculo de Fado e Folclore com Jantar Tradicional - 2h30",
      "Tour Compartilhado no Vale do Douro - 9h",
      "Workshop Privativo de Pintura de Azulejos - 2h",
      "Relaxar na piscina, na sauna e na sauna a vapor - 1h"
    ],
    price: "",
    image: "/lovable-uploads/f6e46f42-cc4f-42a3-8ff4-db6fd6fb97b8.png",
    href: "/servicos/pacotes"
  },
  {
    icon: Calendar,
    title: "Consultoria de Viagens pelo Mundo",
    description: "Especialista em Europa. A consultoria de viagem da Viajar Pelo Mundo é um serviço completo e personalizado que ajuda você a planejar cada detalhe da sua viagem internacional com segurança, economia e conforto.",
    features: [
      "Planejamento inteligente: escolha do melhor período, roteiros otimizados e sugestões exclusivas",
      "Curadoria completa: passagens aéreas, hospedagens, transfers, passeios, seguros, restaurantes e muito mais",
      "Atendimento humanizado: ouvimos suas preferências e criamos uma proposta que se encaixa no seu perfil",
      "Suporte antes, durante e depois da viagem",
      "Economia de tempo e dinheiro com recomendações confiáveis",
      "Material visual exclusivo com o passo a passo da viagem (formato PDF ou digital)"
    ],
    price: "250€",
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