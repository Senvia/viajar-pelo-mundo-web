import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useParams, useNavigate } from "react-router-dom";
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
  X,
  ArrowLeft
} from "lucide-react";

// Mock data - in real app this would come from API/database
const packagesDatabase = {
  "portugal-essence": {
    name: "Portugal Essence",
    destination: "Porto - Portugal",
    duration: "7 dias e 6 noites",
    price: "3.510 €",
    priceNote: "Total para 02 Adultos em quarto duplo",
    description: "Uma jornada completa pelos encantos do Porto, combinando cultura, gastronomia e experiências únicas",
    heroImage: "/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png",
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
    ],
    experiences: [
      {
        icon: Car,
        title: "Transfer Executivo",
        description: "Traslado confortável em carro executivo do aeroporto até o hotel",
        image: "/lovable-uploads/d473c4c5-98ec-4c93-ac26-d2dc26c06c80.png"
      },
      {
        icon: Eye,
        title: "City Tour Privativo",
        description: "Explore os principais pontos turísticos do Porto com guia especializado",
        image: "/lovable-uploads/b98e1a54-f373-4e98-a573-a595c1c7a136.png"
      },
      {
        icon: Wine,
        title: "Experiência WOW",
        description: "Museu da experiência do Vinho com degustação e aprendizado",
        image: "/lovable-uploads/c23fafcc-27fe-4e3a-b4aa-8061a9acfa1a.png"
      },
      {
        icon: Utensils,
        title: "Workshop Pastel de Nata",
        description: "Aprenda a fazer o famoso doce português em aula prática",
        image: "/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png"
      }
    ]
  },
  "lisboa-imperial": {
    name: "Lisboa Imperial",
    destination: "Lisboa - Portugal",
    duration: "5 dias e 4 noites",
    price: "2.850 €",
    priceNote: "Total para 02 Adultos em quarto duplo",
    description: "Descubra a majestosa capital portuguesa com suas tradições milenares, arquitetura deslumbrante e gastronomia única",
    heroImage: "/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png",
    highlights: [
      "Tour pelos bairros históricos",
      "Visita ao Mosteiro dos Jerónimos", 
      "Experiência gastronômica em Belém",
      "Passeio de elétrico tradicional",
      "Espetáculo de Fado em Alfama",
      "Excursão a Sintra e Cascais"
    ],
    services: [
      "Consultoria de viagem personalizada",
      "Hospedagens centrais selecionadas",
      "Transfers incluídos",
      "Experiências culturais autênticas",
      "Guias especializados",
      "Suporte completo"
    ],
    experiences: [
      {
        icon: Camera,
        title: "Bairros Históricos",
        description: "Explore Alfama, Bairro Alto e Chiado com suas histórias fascinantes",
        image: "/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png"
      },
      {
        icon: Heart,
        title: "Mosteiro dos Jerónimos",
        description: "Visite este patrimônio mundial da UNESCO em Belém",
        image: "/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png"
      },
      {
        icon: Music,
        title: "Fado Autêntico",
        description: "Experimente o melhor do fado tradicional português",
        image: "/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png"
      },
      {
        icon: Sparkles,
        title: "Sintra Mágica",
        description: "Descubra os palácios e jardins encantados de Sintra",
        image: "/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png"
      }
    ]
  }
};

const faqData = [
  {
    question: "Quais são os serviços inclusos nos pacotes?",
    answer: [
      "Consultoria de viagem personalizada (roteiro completo e exclusivo)",
      "Hospedagens selecionadas com padrão 4 e 5 estrelas", 
      "Transfers privados e confortáveis",
      "Experiências gastronômicas, culturais e sensoriais",
      "Atividades turísticas privadas ou em pequenos grupos",
      "Suporte antes e durante a viagem"
    ]
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
    answer: "Sim. Oferecemos suporte via WhatsApp durante toda a viagem para esclarecer dúvidas, resolver imprevistos ou simplesmente receber suas fotos e comentários sobre as experiências."
  }
];

const PackageDetails = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get package data based on ID
  const packageData = packageId ? packagesDatabase[packageId as keyof typeof packagesDatabase] : null;

  // If package not found, show error
  if (!packageData) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Pacote não encontrado</h1>
          <p className="text-muted-foreground mb-8">O pacote que você está procurando não existe ou foi removido.</p>
          <Button onClick={() => navigate('/servicos/pacotes')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos Pacotes
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de saber mais sobre o pacote "${packageData.name}" (${packageData.destination}).`;
    window.open(`https://wa.me/351911734711?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={packageData.heroImage}
            alt={packageData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/servicos/pacotes')}
              className="mb-8 text-white/90 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Pacotes
            </Button>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
              {packageData.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              {packageData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-white text-secondary hover:bg-white/90 shadow-2xl font-semibold"
                onClick={handleWhatsApp}
              >
                <Plane className="w-5 h-5 mr-2" />
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
                {packageData.description}
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
                    className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white shadow-elegant"
                    onClick={handleWhatsApp}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Reserva
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={packageData.heroImage}
                  alt={packageData.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                O que está incluído
              </h2>
              <p className="text-xl text-muted-foreground">
                Tudo o que você precisa para uma experiência inesquecível
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packageData.highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-icons flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary group-hover:text-primary transition-colors">
                          {highlight}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Experiences */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Experiências Detalhadas
              </h2>
              <p className="text-xl text-muted-foreground">
                Cada momento da sua viagem foi cuidadosamente planejado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {packageData.experiences.map((experience, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      onClick={() => openImageModal(experience.image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-icons flex items-center justify-center">
                        <experience.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">{experience.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Serviços Incluídos
              </h2>
              <p className="text-xl text-muted-foreground">
                Suporte completo para sua tranquilidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packageData.services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-gradient-icons flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-medium text-secondary">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Esclarecemos as dúvidas mais comuns sobre nossos pacotes
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {Array.isArray(faq.answer) ? (
                      <ul className="space-y-2">
                        {faq.answer.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-brand-dark/5 via-secondary/5 to-brand-blue/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Pronto para viver o {packageData.name}?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e comece a planejar sua viagem dos sonhos para {packageData.destination}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-white"
                  onClick={handleWhatsApp}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Reservar Este Pacote
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Shield className="w-5 h-5 text-brand-blue" />
                  <span>Reserva Garantida</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-brand-blue" />
                  <span>Suporte 24/7</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <CreditCard className="w-5 h-5 text-brand-blue" />
                  <span>Pagamento Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white z-10"
              onClick={closeImageModal}
            >
              <X className="w-6 h-6" />
            </Button>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-lg"
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