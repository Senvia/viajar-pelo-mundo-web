import { useState } from "react";
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
    question: "💳 Quais são as formas de pagamento aceitas?",
    answer: [
      "Transferência bancária (Portugal e Brasil)",
      "Cartão de crédito (com possibilidade de parcelamento via plataformas parceiras)",
      "MBWay (para clientes em Portugal)"
    ]
  },
  {
    question: "🕓 Com quanto tempo de antecedência devo contratar?",
    answer: "Recomendamos contratar com pelo menos 60 dias de antecedência para garantir as melhores opções de hospedagem, experiências e preços. Para viagens em alta temporada, sugerimos 90 dias ou mais."
  },
  {
    question: "🔁 Posso fazer alterações no roteiro depois de contratado?",
    answer: "Sim. Alterações pontuais são permitidas até 30 dias antes da viagem, sujeitas à disponibilidade e possíveis diferenças de valores. Após esse prazo, faremos o possível para ajustar, mas algumas modificações podem não ser viáveis."
  },
  {
    question: "❌ Qual é a política de cancelamento?",
    answer: [
      "Até 45 dias antes da viagem: reembolso parcial (exceto taxas administrativas e reservas não reembolsáveis)",
      "Menos de 30 dias: possíveis multas ou retenção total em serviços já contratados",
      "Para casos de força maior, analisamos individualmente com nossos parceiros",
      "Sempre detalhamos essas condições no momento do contrato."
    ]
  },
  {
    question: "✍️ Existe contrato formal?",
    answer: "Sim. Trabalhamos com um contrato simples e claro, que garante segurança para ambas as partes e descreve tudo o que está incluso, as responsabilidades, prazos e valores."
  },
  {
    question: "👨‍👩‍👧‍👦 Os pacotes são personalizados ou padronizados?",
    answer: "Totalmente personalizados. Nenhuma viagem é igual à outra. Criamos o pacote com base no perfil, desejos, ritmo e orçamento de cada cliente."
  },
  {
    question: "📱 Terei suporte durante a viagem?",
    answer: "Sim. Oferecemos suporte via WhatsApp e e-mail durante a sua estadia, para eventuais dúvidas ou necessidades relacionadas ao planejamento contratado."
  },
  {
    question: "✈️ E se eu quiser incluir passagem aérea?",
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

const PacotesViagens = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleBooking = () => {
    window.open(packageData.bookingLink, '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/351911734711?text=Olá! Gostaria de saber mais sobre o pacote Portugal Essence.', '_blank');
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/0d6db174-1deb-46b7-8372-803af136d59f.png')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            Experiência Exclusiva
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Pacotes de Viagens
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
            Descubra Portugal através de experiências autênticas e inesquecíveis, 
            cuidadosamente curadas para você
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg bg-white text-secondary hover:bg-white/90 shadow-2xl"
              onClick={handleBooking}
            >
              Reservar Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 py-4 text-lg border-white text-black bg-white/90 hover:bg-white hover:text-secondary shadow-2xl"
              onClick={handleWhatsApp}
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar Conosco
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
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
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Destino</h3>
                    <p className="text-muted-foreground">{packageData.destination}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Duração</h3>
                    <p className="text-muted-foreground">{packageData.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
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
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant text-lg py-4"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* City Tour Porto */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in"
                  style={{ backgroundImage: `url('/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
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
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Wine className="w-6 h-6 text-white" />
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
                  className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in"
                  style={{ backgroundImage: `url('/lovable-uploads/24778b1c-f658-4c3b-8681-1404aa6fecba.png')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Tradições Portuguesas</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Viva a alma portuguesa através de suas tradições mais autênticas: um cruzeiro romântico ao pôr do sol e uma noite inesquecível de Fado.
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

            {/* Workshops e Relaxamento */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Arte & Bem-estar</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Conecte-se com as tradições artísticas portuguesas e desfrute de momentos de puro relaxamento em instalações de primeira classe.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Workshop Pastel de Nata no Porto - 2h</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Workshop Privativo de Pintura de Azulejos - 2h</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Relaxar na piscina, sauna e sauna a vapor - 1h</span>
                  </li>
                </ul>
              </div>
              <div className="order-first lg:order-last">
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
            </div>

            {/* Vale do Douro */}
            <div className="text-center">
              <div 
                className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center relative mx-auto max-w-4xl animate-fade-in"
                style={{ backgroundImage: `url('/lovable-uploads/bb268a1f-b8df-4ffd-85bc-09600d379e96.png')` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Tour Compartilhado no Vale do Douro</h3>
                    <p className="text-xl mb-6">9 horas de paisagens deslumbrantes e vinhos excepcionais</p>
                    <div className="flex justify-center gap-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Paisagens UNESCO</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Vinícolas tradicionais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Almoço incluso</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Unique Moments Gallery */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary animate-pulse" />
          <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Momentos Únicos te Esperam
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada experiência foi cuidadosamente selecionada para criar memórias inesquecíveis da sua viagem a Portugal
            </p>
          </div>
          
          {/* Main Featured Image */}
          <div className="mb-12">
            <div 
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
              onClick={() => openImageModal("/lovable-uploads/f66305b1-a495-44b6-9ca9-f94713bf3c3f.png")}
            >
              <img 
                src="/lovable-uploads/f66305b1-a495-44b6-9ca9-f94713bf3c3f.png" 
                alt="Passeio no Douro com vista do Porto"
                className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-3 transform group-hover:translate-y-[-4px] transition-transform duration-500">
                  Passeio no Douro
                </h3>
                <p className="text-lg opacity-90 transform group-hover:translate-y-[-4px] transition-transform duration-500 delay-100">
                  Navegue pelas águas históricas do Rio Douro com vista privilegiada do Porto
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                image: "/lovable-uploads/0fb3e923-766d-4f0c-8a72-31c3a2c77eab.png", 
                title: "Vale do Douro", 
                description: "Paisagens de vinhedos com degustação a dois",
                category: "Paisagens"
              },
              { 
                image: "/lovable-uploads/eb7ea28f-22ea-4c21-9f85-981a3c261019.png", 
                title: "Adega Tradicional", 
                description: "Experiência gastronômica com prova de vinhos",
                category: "Gastronomia"
              },
              { 
                image: "/lovable-uploads/de092f0d-8ba9-43c2-ac2e-81ad4450902e.png", 
                title: "Culinária Portuguesa", 
                description: "Sabores autênticos da gastronomia local",
                category: "Gastronomia"
              },
              { 
                image: "/lovable-uploads/969e2439-8547-4f1c-887b-8468ce91c64b.png", 
                title: "Francesinha Tradicional", 
                description: "O prato mais icônico do Porto",
                category: "Gastronomia"
              },
              { 
                image: "/lovable-uploads/95d11633-6490-46ce-a33b-b0a82aced13e.png", 
                title: "Workshop de Azulejos", 
                description: "Aprenda a arte tradicional portuguesa",
                category: "Cultura"
              },
              { 
                image: "/lovable-uploads/0a001f1d-01e3-458e-b5c3-9c931257c30a.png", 
                title: "Espetáculo de Fado", 
                description: "Música e cultura portuguesa autêntica",
                category: "Cultura"
              }
            ].map((moment, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => openImageModal(moment.image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {moment.category}
                    </span>
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={moment.image} 
                      alt={moment.title}
                      className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Hover overlay with icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {moment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {moment.description}
                    </p>
                    
                    {/* Animated underline */}
                    <div className="mt-4 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Sparkles className="w-5 h-5" />
              <span>Viva cada momento dessa experiência única</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Tire todas as suas dúvidas sobre nossos pacotes
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {Array.isArray(faq.answer) ? (
                      <ul className="space-y-2">
                        {faq.answer.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto Para Sua Aventura Portuguesa?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Reserve agora e garante sua experiência única em Portugal. 
            Nossa equipe está pronta para tornar sua viagem inesquecível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-10 py-4 text-lg"
              onClick={handleBooking}
            >
              Reservar Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 py-4 text-lg border-white text-black bg-white/90 hover:bg-white hover:text-secondary"
              onClick={handleWhatsApp}
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6" />
              <span>Reserva Garantida</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CreditCard className="w-6 h-6" />
              <span>Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-5xl max-h-full">
            <button 
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Contact />
      <Footer />
    </div>
  );
};

export default PacotesViagens;