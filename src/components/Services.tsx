import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Plane, MapPin, Shield, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Calendar,
    title: "Planejamento de Viagem",
    description: "Especialista em Europa. A consultoria de viagem da Viajar Pelo Mundo é um serviço completo e personalizado que ajuda você a planejar cada detalhe da sua viagem internacional com segurança, economia e conforto.",
    features: [
      "Planejamento inteligente: escolha do melhor período, roteiros otimizados e sugestões exclusivas",
      "Consultoria completa: passagens aéreas, hospedagens, transfers, passeios, seguros, restaurantes e muito mais",
      "Atendimento humanizado: ouvimos suas preferências e criamos uma proposta que se encaixa no seu perfil",
      "Suporte antes, durante e depois da viagem",
      "Economia de tempo e dinheiro com recomendações confiáveis",
      "Material visual exclusivo com o passo a passo da viagem (formato PDF ou digital)"
    ],
    images: [
      "/lovable-uploads/d473c4c5-98ec-4c93-ac26-d2dc26c06c80.png",
      "/lovable-uploads/b98e1a54-f373-4e98-a573-a595c1c7a136.png",
      "/lovable-uploads/c23fafcc-27fe-4e3a-b4aa-8061a9acfa1a.png",
      "/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png",
      "/lovable-uploads/25dd2392-9644-42fa-88e9-bbdd6b07c1c3.png",
      "/lovable-uploads/ef7988f2-f6cf-4a8b-bfcb-570ee025bb04.png"
    ],
    price: "250€",
    href: "/servicos/consultoria-viagens"
  },
  {
    icon: Plane,
    title: "Serviços Avulsos",
    description: "Serviços individuais para necessidades específicas. Transfer, seguro viagem, reservas de hotéis e muito mais.",
    features: [
      "Passagens aéreas",
      "Transfer aeroporto-hotel",
      "Seguro viagem personalizado",
      "Reservas de hotéis e restaurantes",
      "Aluguel de carro",
      "Assistência 24/7 durante a viagem"
    ],
    images: [
      "/lovable-uploads/a886c0ec-c4fb-4beb-ac44-aebb732c3676.png",
      "/lovable-uploads/89d275a3-14eb-4066-a880-e885f17c2dd0.png",
      "/lovable-uploads/604537d9-c3eb-430c-9d01-820b1bec9336.png",
      "/lovable-uploads/167e296a-843b-41b6-b556-42ac23882921.png",
      "/lovable-uploads/95d11633-6490-46ce-a33b-b0a82aced13e.png",
      "/lovable-uploads/f66305b1-a495-44b6-9ca9-f94713bf3c3f.png"
    ],
    price: "",
    href: "/servicos/avulsos"
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
    images: [
      "/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png",
      "/lovable-uploads/f8848579-71ad-4fb3-8453-c0afddac6c57.png",
      "/lovable-uploads/fd90411d-9be1-4bb9-b299-e133b37d4565.png",
      "/lovable-uploads/30d84693-6080-4631-8243-f1d0abb88cbe.png",
      "/lovable-uploads/bb268a1f-b8df-4ffd-85bc-09600d379e96.png",
      "/lovable-uploads/ff15d855-f57f-4c4c-a478-37dee547efc0.png",
      "/lovable-uploads/0fb3e923-766d-4f0c-8a72-31c3a2c77eab.png",
      "/lovable-uploads/f64ae3f8-469d-4622-94b1-53e6d5ec29dc.png",
      "/lovable-uploads/c1a024d7-41f3-461a-9faf-b902a53ce7fc.png"
    ],
    price: "",
    href: "/servicos/pacotes"
  },
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
    images: [
      "/lovable-uploads/c2187682-7e3d-4df9-93f1-cbb52d3d3dec.png",
      "/lovable-uploads/0c03bd11-fb39-4c81-bf6f-1eea1e3b0a3b.png",
      "/lovable-uploads/57fb62cd-5b0b-4d82-8416-2ced892d5736.png",
      "/lovable-uploads/8fa3f1b7-114d-4719-9e3d-1a1b2f9f5451.png",
      "/lovable-uploads/5df4c253-f819-4e4f-a21c-a865b6ac3605.png"
    ],
    price: "",
    href: "/servicos/imigrantes"
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
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Card className="inline-block p-8 bg-brand-dark text-white border-0">
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
              Solicitar Orçamento
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
    }`}>
      {/* Content */}
      <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
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
            {service.features.map((feature: string, featureIndex: number) => (
              <li 
                key={featureIndex} 
                className={`flex items-center gap-3 cursor-pointer transition-all duration-300 p-2 rounded-lg ${
                  currentImageIndex === featureIndex 
                    ? 'bg-primary/10 border-l-4 border-primary' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setCurrentImageIndex(featureIndex)}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  currentImageIndex === featureIndex 
                    ? 'bg-primary text-white' 
                    : 'bg-green-100 dark:bg-green-900/30'
                }`}>
                  <Check className={`w-3 h-3 ${
                    currentImageIndex === featureIndex 
                      ? 'text-white' 
                      : 'text-green-600 dark:text-green-400'
                  }`} />
                </div>
                <span className={`transition-colors ${
                  currentImageIndex === featureIndex 
                    ? 'text-primary font-medium' 
                    : 'text-foreground'
                }`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
        <Card className="overflow-hidden border-0 shadow-card relative group">
          <CardContent className="p-0">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={service.images[currentImageIndex]}
                alt={`${service.title} - ${service.features[currentImageIndex]}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {service.images.map((_: any, imgIndex: number) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === imgIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
              
              {/* Feature Label */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                {currentImageIndex + 1} / {service.images.length}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;