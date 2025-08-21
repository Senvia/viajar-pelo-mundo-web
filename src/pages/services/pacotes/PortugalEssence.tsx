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
  CheckCircle,
  Phone,
  Heart,
  Shield,
  Clock,
  CreditCard,
  Plane,
  Eye,
  Sparkles,
  X,
  Car,
  Camera,
  Wine,
  Music,
  Palette,
  Building
} from "lucide-react";

const packageData = {
  name: "Portugal Essence",
  destination: "Porto - Portugal",
  duration: "7 dias e 6 noites", 
  price: "3.510 €",
  totalText: "Total para 02 Adultos em quarto duplo",
  bookingLink: "https://agencia.iddas.com.br/so/k8cqdbwp",
  image: "/lovable-uploads/89d275a3-14eb-4066-a880-e885f17c2dd0.png",
  description: "Uma jornada completa pelos encantos do Porto, combinando cultura, gastronomia e experiências únicas",
  highlights: [
    "Hospedagem em hotel 4 estrelas no centro do Porto",
    "City Tour pelo Porto com guia em português", 
    "Experiência gastronómica com prova de vinhos",
    "Cruzeiro gourmet ao pôr do sol",
    "Espetáculo de Fado e Folclore com jantar",
    "Workshop de azulejos portugueses"
  ],
  badge: "Mais Popular",
  badgeColor: "bg-green-500"
};

const benefits = [
  {
    icon: CheckCircle,
    title: "Experiências Autênticas", 
    description: "Vivências únicas que conectam você com a cultura local portuguesa"
  },
  {
    icon: Star,
    title: "Qualidade Premium",
    description: "Serviços de alta qualidade com acomodações e experiências selecionadas"
  },
  {
    icon: Phone,
    title: "Suporte 24h",
    description: "Atendimento completo em português durante toda a sua viagem"
  }
];

const faqData = [
  {
    question: "O que está incluído no pacote?",
    answer: "O pacote inclui hospedagem com café da manhã, transfers, city tour, experiências gastronômicas, cruzeiro, show de Fado, workshop de azulejos, day spa e seguro viagem."
  },
  {
    question: "Posso personalizar o roteiro?",
    answer: "Sim! Nossos pacotes são flexíveis e podem ser personalizados de acordo com suas preferências e interesses específicos."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Oferecemos diferentes formas de pagamento, incluindo parcelamento. Entre em contato conosco para conhecer as opções disponíveis."
  },
  {
    question: "O que acontece em caso de cancelamento?",
    answer: "Temos políticas de cancelamento flexíveis. O seguro viagem incluído cobre diversas situações imprevistas."
  },
  {
    question: "Vocês oferecem suporte durante a viagem?",
    answer: "Sim! Oferecemos suporte 24h em português durante toda a sua estadia, garantindo tranquilidade total."
  }
];

const experiences = [
  {
    icon: Car,
    title: "City Tour Histórico",
    description: "Explore os encantos do Porto com nosso city tour exclusivo, visitando os principais pontos turísticos da cidade.",
    image: "/lovable-uploads/c2187682-7e3d-4df9-93f1-cbb52d3d3dec.png"
  },
  {
    icon: Wine,
    title: "Mundo do Vinho",
    description: "Mergulhe na rica tradição vinícola portuguesa no Museu WOW e desfrute de degustações exclusivas.",
    image: "/lovable-uploads/a4315f8c-26b9-4bb7-9c20-81a4fd346d2d.png"
  },
  {
    icon: Music,
    title: "Cruzeiro e Fado",
    description: "Viva a alma portuguesa através de suas tradições mais autênticas em experiências únicas.",
    image: "/lovable-uploads/24778b1c-f658-4c3b-8681-1404aa6fecba.png"
  },
  {
    icon: Palette,
    title: "Workshop Cultural", 
    description: "Aprenda a arte dos azulejos portugueses e relaxe com tratamentos de spa exclusivos.",
    image: "/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png"
  }
];

const PortugalEssence = () => {
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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/0d6db174-1deb-46b7-8372-803af136d59f.png"
            alt="Portugal Essence - Pacotes de Viagem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Experiência Premium
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              {packageData.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              {packageData.description}
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Por Que Escolher Este Pacote?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experiências cuidadosamente planejadas para criar memórias inesquecíveis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-icons flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Card - Like the Original */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div 
                  className="h-80 lg:h-auto bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${packageData.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  {packageData.badge && (
                    <Badge className={`absolute top-4 left-4 ${packageData.badgeColor} text-white border-0`}>
                      {packageData.badge}
                    </Badge>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">{packageData.destination}</p>
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-2xl mb-3">{packageData.name}</CardTitle>
                      <CardDescription className="text-base">{packageData.description}</CardDescription>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-blue" />
                        <span>{packageData.destination}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-blue" />
                        <span>{packageData.duration}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Destaques inclusos:</h4>
                      <ul className="space-y-1">
                        {packageData.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                        {packageData.highlights.length > 4 && (
                          <li className="flex items-center gap-2 text-sm">
                            <Sparkles className="w-4 h-4 text-brand-blue" />
                            <span className="text-brand-blue font-medium">E muito mais...</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-brand-blue">{packageData.price}</p>
                        <p className="text-xs text-muted-foreground">{packageData.totalText}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-brand-dark hover:bg-brand-dark/90 text-white"
                        onClick={handleBooking}
                      >
                        Reservar Agora
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={handleWhatsApp}
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Visão Geral do Pacote
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Uma experiência completa e inesquecível no coração do Porto
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
                    <p className="text-3xl font-bold text-brand-blue">{packageData.price}</p>
                    <p className="text-sm text-muted-foreground">{packageData.totalText}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-lg py-4 text-white"
                    onClick={handleBooking}
                  >
                    Reservar Agora
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('/lovable-uploads/89d275a3-14eb-4066-a880-e885f17c2dd0.png')`
                  }}
                  onClick={() => openImageModal('/lovable-uploads/89d275a3-14eb-4066-a880-e885f17c2dd0.png')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
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

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              O Que Está Incluído
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experiências únicas e serviços de qualidade para uma viagem inesquecível
            </p>
          </div>

          <div className="space-y-20">
            {/* City Tour */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">City Tour Histórico</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Explore os encantos do Porto com nosso city tour exclusivo, visitando os principais pontos turísticos da cidade histórica.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Roteiro pelos principais pontos turísticos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Guia especializado em português</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Transporte confortável e climatizado</span>
                  </li>
                </ul>
              </div>
              <div>
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('/lovable-uploads/c2187682-7e3d-4df9-93f1-cbb52d3d3dec.png')` }}
                  onClick={() => openImageModal('/lovable-uploads/c2187682-7e3d-4df9-93f1-cbb52d3d3dec.png')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Wine Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="rounded-xl overflow-hidden shadow-xl h-40 bg-cover bg-center animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('/lovable-uploads/a4315f8c-26b9-4bb7-9c20-81a4fd346d2d.png')` }}
                    onClick={() => openImageModal('/lovable-uploads/a4315f8c-26b9-4bb7-9c20-81a4fd346d2d.png')}
                  ></div>
                  <div 
                    className="rounded-xl overflow-hidden shadow-xl h-40 bg-cover bg-center animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('/lovable-uploads/fd90411d-9be1-4bb9-b299-e133b37d4565.png')` }}
                    onClick={() => openImageModal('/lovable-uploads/fd90411d-9be1-4bb9-b299-e133b37d4565.png')}
                  ></div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
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
            </div>

            {/* Cruzeiro e Fado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('/lovable-uploads/24778b1c-f658-4c3b-8681-1404aa6fecba.png')` }}
                  onClick={() => openImageModal('/lovable-uploads/24778b1c-f658-4c3b-8681-1404aa6fecba.png')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
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
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Experiências Culturais</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mergulhe na cultura portuguesa através de workshops práticos e momentos de relaxamento únicos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Workshop de Azulejos Portugueses - 2h</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                    <span className="text-muted-foreground">Day Spa com Tratamentos Relaxantes - 3h</span>
                  </li>
                </ul>
              </div>
              <div className="order-first lg:order-last">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png')` }}
                  onClick={() => openImageModal('/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Galeria de Momentos Únicos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vislumbre alguns dos momentos especiais que você viverá nesta experiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div 
                  className="h-48 bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url('${experience.image}')` }}
                  onClick={() => openImageModal(experience.image)}
                >
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <experience.icon className="w-6 h-6 mb-2" />
                      <h3 className="font-semibold">{experience.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Esclareça suas dúvidas sobre o pacote Portugal Essence
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Viver o Portugal Essence?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Reserve agora sua experiência única no Porto e crie memórias inesquecíveis
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-white text-brand-dark hover:bg-white/90 shadow-2xl"
                onClick={handleBooking}
              >
                Reservar Pacote Completo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-brand-dark backdrop-blur-sm"
                onClick={handleWhatsApp}
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img 
              src={selectedImage} 
              alt="Imagem ampliada" 
              className="w-full h-full object-contain rounded-lg"
            />
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}

      <Contact />
      <Footer />
    </div>
  );
};

export default PortugalEssence;