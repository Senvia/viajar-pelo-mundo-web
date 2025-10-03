import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { 
  MapPin, 
  Calendar, 
  Star, 
  Users, 
  Car, 
  Camera, 
  Wine, 
  Music, 
  Utensils, 
  Palette,
  Heart,
  Shield,
  Clock,
  CreditCard,
  Phone,
  CheckCircle,
  Plane,
  Eye,
  Sparkles,
  X
} from "lucide-react";

const packageData = {
  name: "Portugal Essence",
  destination: "Porto - Portugal",
  duration: "7 dias e 6 noites",
  price: "3.510 €",
  priceNote: "Total para 02 Adultos em quarto duplo",
  bookingLink: "https://buy.stripe.com/fZufZg77H3La7iY7Fl87K0b",
  highlights: [
    "Traslado confortável em carro executivo até o hotel",
    "City Tour: Porto (Privativo)",
    "Museu da experiência do Vinho – WOW",
    "Workshop Pastel de Nata no Porto - 2h",
    "Cruzeiro Gourmet ao Pôr do Sol (Partilhado) - 2h",
    "Experiência Gastronómica com Prova de Vinhos - 3h",
    "Espetáculo de Fado e Folclore com Jantar Tradicional - 2h30",
    "Tour Compartilhado no Vale do Douro - 9h",
    "Workshop Privativo de Pintura de Azulejos - 2h",
    "Relaxar na piscina, na sauna e na sauna a vapor - 1h"
  ],
  services: [
    "Consultoria de viagem personalizada (roteiro completo e exclusivo)",
    "Hospedagens selecionadas com padrão 4 e 5 estrelas",
    "Transfers privados e confortáveis",
    "Experiências gastronômicas, culturais e sensoriais",
    "Atividades turísticas privadas ou em pequenos grupos",
    "Suporte antes e durante a viagem"
  ]
};

const faqData = [
  {
    question: "Quais são os serviços inclusos nos pacotes do Portugal Essence?",
    answer: packageData.services
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: [
      "Transferência bancária (Portugal e Brasil)",
      "Cartão de crédito (com possibilidade de parcelamento via plataformas parceiras)",
      "MBWay (para clientes em Portugal)"
    ]
  },
  {
    question: "Com quanto tempo de antecedência devo contratar?",
    answer: "Recomendamos contratar com pelo menos 60 dias de antecedência para garantir as melhores opções de hospedagem, experiências e preços. Para viagens em alta temporada, sugerimos 90 dias ou mais."
  },
  {
    question: "Posso fazer alterações no roteiro depois de contratado?",
    answer: "Sim. Alterações pontuais são permitidas até 30 dias antes da viagem, sujeitas à disponibilidade e possíveis diferenças de valores. Após esse prazo, faremos o possível para ajustar, mas algumas modificações podem não ser viáveis."
  },
  {
    question: "Qual é a política de cancelamento?",
    answer: [
      "Até 45 dias antes da viagem: reembolso parcial (exceto taxas administrativas e reservas não reembolsáveis)",
      "Menos de 30 dias: possíveis multas ou retenção total em serviços já contratados",
      "Para casos de força maior, analisamos individualmente com nossos parceiros",
      "Sempre detalhamos essas condições no momento do contrato."
    ]
  },
  {
    question: "Existe contrato formal?",
    answer: "Sim. Trabalhamos com um contrato simples e claro, que garante segurança para ambas as partes e descreve tudo o que está incluso, as responsabilidades, prazos e valores."
  },
  {
    question: "Os pacotes são personalizados ou padronizados?",
    answer: "Totalmente personalizados. Nenhuma viagem é igual à outra. Criamos o pacote com base no perfil, desejos, ritmo e orçamento de cada cliente."
  },
  {
    question: "Terei suporte durante a viagem?",
    answer: "Sim. Oferecemos suporte via WhatsApp e e-mail durante a sua estadia, para eventuais dúvidas ou necessidades relacionadas ao planejamento contratado."
  },
  {
    question: "E se eu quiser incluir passagem aérea?",
    answer: "Também podemos cuidar da emissão da sua passagem aérea, oferecendo as melhores opções disponíveis no mercado, com transparência e flexibilidade."
  }
];

const experiences = [
  {
    icon: Car,
    title: "Traslado Executivo",
    description: "Conforto desde a chegada",
    image: "/lovable-uploads/f8848579-71ad-4fb3-8453-c0afddac6c57.png"
  },
  {
    icon: Wine,
    title: "Experiência Vinícola",
    description: "Degustação e cultura do vinho",
    image: "/lovable-uploads/a4315f8c-26b9-4bb7-9c20-81a4fd346d2d.png"
  },
  {
    icon: Utensils,
    title: "Gastronomia Autêntica",
    description: "Sabores tradicionais portugueses",
    image: "/lovable-uploads/fd90411d-9be1-4bb9-b299-e133b37d4565.png"
  },
  {
    icon: Music,
    title: "Fado & Folclore",
    description: "Tradição musical portuguesa",
    image: "/lovable-uploads/be5d15c6-c61c-4d63-8fe7-99cb929a0c66.png"
  },
  {
    icon: Palette,
    title: "Arte dos Azulejos",
    description: "Workshop de pintura tradicional",
    image: "/lovable-uploads/53f3bea9-96f9-4228-b293-01136d266f85.png"
  },
  {
    icon: Heart,
    title: "Relaxamento & Bem-estar",
    description: "Momentos de descanso",
    image: "/lovable-uploads/167e296a-843b-41b6-b556-42ac23882921.png"
  }
];

const PackageDetails = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBooking = () => {
    window.open(packageData.bookingLink, '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank');
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Wine Experience Background */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/0d6db174-1deb-46b7-8372-803af136d59f.png"
            alt="Portugal Essence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              {packageData.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              Uma jornada completa pelos encantos do Porto, combinando cultura, 
              gastronomia e experiências únicas
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-brand-dark text-white hover:bg-brand-dark/90 shadow-2xl"
                onClick={handleBooking}
              >
                Reservar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 border-secondary bg-white text-secondary hover:bg-secondary hover:text-white backdrop-blur-sm"
                onClick={handleWhatsApp}
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                {packageData.name}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Uma jornada completa pelos encantos do Porto, combinando cultura, 
                gastronomia e experiências únicas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Destino</h3>
                    <p className="text-muted-foreground">{packageData.destination}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Duração</h3>
                    <p className="text-muted-foreground">{packageData.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Preço</h3>
                    <p className="text-2xl font-bold text-brand-blue">{packageData.price}</p>
                    <p className="text-sm text-muted-foreground">{packageData.priceNote}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-lg py-4 text-white"
                    onClick={handleBooking}
                  >
                    Reservar Este Pacote
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png')`
                  }}
                >
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-semibold">Porto Autêntico</p>
                    <p className="text-white/80">Descobrindo as belezas da cidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant What's Included Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              O Que Está Incluído
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada experiência foi cuidadosamente selecionada para criar memórias inesquecíveis
            </p>
          </div>

          <div className="space-y-20">
            {/* Traslado Executivo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Traslado de Luxo</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chegue ao seu destino com conforto e elegância. Nosso serviço de traslado em carro executivo garante que sua experiência comece da melhor forma possível.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Carro executivo confortável</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Motorista profissional</span>
                  </li>
                </ul>
              </div>
              <div className="order-first lg:order-last">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in"
                  style={{ backgroundImage: `url('/lovable-uploads/f8848579-71ad-4fb3-8453-c0afddac6c57.png')` }}
                >
                </div>
              </div>
            </div>

            {/* City Tour Porto */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in"
                  style={{ backgroundImage: `url('/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">City Tour Privativo</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Descubra os segredos do Porto em um tour exclusivo e personalizado. Das casas coloridas da Ribeira às majestosas pontes sobre o Douro.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Guia local especializado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Tour personalizado</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experiência Vinícola */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Wine className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Mundo do Vinho</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mergulhe na rica tradição vinícola portuguesa no Museu WOW e desfrute de degustações exclusivas com harmonizações gastronômicas únicas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Museu da experiência do Vinho – WOW</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Experiência Gastronómica com Prova de Vinhos - 3h</span>
                  </li>
                </ul>
              </div>
              <div className="order-first lg:order-last">
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="rounded-xl overflow-hidden shadow-xl h-40 bg-cover bg-center animate-fade-in"
                    style={{ backgroundImage: `url('/lovable-uploads/a4315f8c-26b9-4bb7-9c20-81a4fd346d2d.png')` }}
                  ></div>
                  <div 
                    className="rounded-xl overflow-hidden shadow-xl h-40 bg-cover bg-center animate-fade-in"
                    style={{ backgroundImage: `url('/lovable-uploads/fd90411d-9be1-4bb9-b299-e133b37d4565.png')` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Cruzeiro e Fado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in"
                  style={{ backgroundImage: `url('/lovable-uploads/24778b1c-f658-4c3b-8681-1404aa6fecba.png')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Fado & Cruzeiro</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Viva a alma portuguesa através do Fado e desfrute de um cruzeiro gourmet ao pôr do sol no majestoso Rio Douro.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Cruzeiro Gourmet ao Pôr do Sol - 2h</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Espetáculo de Fado e Folclore com Jantar - 2h30</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vale do Douro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Vale do Douro</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Descubra a beleza única do Vale do Douro, Patrimônio Mundial da UNESCO, em um tour completo pelas vinhas em socalcos e quintas tradicionais.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Tour Compartilhado no Vale do Douro - 9h</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Visita às quintas tradicionais</span>
                  </li>
                </ul>
              </div>
              <div className="order-first lg:order-last">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in"
                  style={{ backgroundImage: `url('/lovable-uploads/ef7988f2-f6cf-4a8b-bfcb-570ee025bb04.png')` }}
                >
                </div>
              </div>
            </div>

            {/* Workshops e Experiências Culturais */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="rounded-xl overflow-hidden shadow-xl h-40 bg-cover bg-center animate-fade-in"
                    style={{ backgroundImage: `url('/lovable-uploads/53f3bea9-96f9-4228-b293-01136d266f85.png')` }}
                  ></div>
                  <div 
                    className="rounded-xl overflow-hidden shadow-xl h-40 bg-cover bg-center animate-fade-in"
                    style={{ backgroundImage: `url('/lovable-uploads/167e296a-843b-41b6-b556-42ac23882921.png')` }}
                  ></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Experiências Culturais</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mergulhe na cultura portuguesa através de workshops únicos e momentos de relaxamento em ambiente de luxo.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Workshop Pastel de Nata - 2h</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Workshop de Pintura de Azulejos - 2h</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Spa & Bem-estar - 1h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Galeria de Experiências
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada momento foi pensado para proporcionar experiências autênticas e memoráveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <Card 
                  key={index} 
                  className="group cursor-pointer hover:shadow-elegant transition-all duration-300 bg-card border-border/50 hover:border-border"
                  onClick={() => openImageModal(experience.image)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-icons flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {experience.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Por Que Escolher Nossos Pacotes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos mais do que viagens, criamos experiências transformadoras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Segurança Total</h3>
              <p className="text-muted-foreground">
                Contratos claros, parceiros confiáveis e suporte completo antes e durante sua viagem
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Experiências Únicas</h3>
              <p className="text-muted-foreground">
                Cada pacote é totalmente personalizado para criar memórias inesquecíveis e autênticas
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Suporte 24/7</h3>
              <p className="text-muted-foreground">
                Assistência completa via WhatsApp e e-mail durante toda sua estadia
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Esclarecemos suas principais dúvidas sobre nossos pacotes de viagem
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-card border border-border/50 rounded-lg px-6 hover:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pt-2">
                    {Array.isArray(faq.answer) ? (
                      <ul className="space-y-2">
                        {faq.answer.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed">{faq.answer}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-brand-blue/5 via-secondary/5 to-brand-dark/5 rounded-3xl p-12 border border-border/50">
              <Sparkles className="w-16 h-16 text-brand-blue mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Pronto para Viver o Portugal Essence?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Reserve agora seu pacote completo e descubra Portugal de uma forma única e inesquecível
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-white"
                  onClick={handleBooking}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Reservar Por {packageData.price}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={handleWhatsApp}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Tirar Dúvidas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Experiência" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <Contact />
      <Footer />
    </div>
  );
};

export default PackageDetails;