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
  FileText,
  Search,
  MessageCircle,
  Settings
} from "lucide-react";

const consultoriaData = {
  name: "Planejamento de Viagem",
  specialty: "Especialista em Europa",
  price: "250€",
  duration: "Processo completo em 4 etapas",
  benefits: [
    "Planejamento inteligente: escolha do melhor período, roteiros otimizados e sugestões exclusivas.",
    "Curadoria completa: passagens aéreas, hospedagens, transfers, passeios, seguros, restaurantes e muito mais.",
    "Atendimento humanizado: ouvimos suas preferências e criamos uma proposta que se encaixa no seu perfil.",
    "Suporte antes, durante e depois da viagem.",
    "Economia de tempo e dinheiro com recomendações confiáveis.",
    "Material visual exclusivo com o passo a passo da viagem (formato PDF ou digital)."
  ]
};

const processSteps = [
  {
    icon: MessageCircle,
    title: "Reunião inicial personalizada",
    description: "Conversa para entender o perfil do viajante, objetivos, expectativas e necessidades específicas da viagem.",
    image: "/lovable-uploads/a1ceb288-0f64-4749-93da-3cf33f43dda4.png"
  },
  {
    icon: Search,
    title: "Elaboração da proposta de viagem",
    description: "Apresentamos um roteiro preliminar com sugestões de destinos, hospedagens, atividades, voos e experiências adaptadas ao seu estilo.",
    image: "/lovable-uploads/c1a024d7-41f3-461a-9faf-b902a53ce7fc.png"
  },
  {
    icon: Settings,
    title: "Confirmação e reserva dos serviços",
    description: "Após aprovação, realizamos as reservas dos produtos e serviços: passagens aéreas, hotéis, transfers, passeios, seguro-viagem, entre outros.",
    image: "/lovable-uploads/e4b4eacc-e341-4457-8695-38235af5f8cf.png"
  },
  {
    icon: FileText,
    title: "Entrega do material visual completo",
    description: "Criamos um guia digital exclusivo com o passo a passo da sua viagem, contendo todas as informações organizadas de forma clara, prática e elegante.",
    image: "/lovable-uploads/6f636353-ae8b-497e-b7cd-3c5bd6a2928f.png"
  }
];

const includedServices = [
  {
    title: "Reunião de alinhamento",
    description: "Entendemos seu perfil, objetivos, orçamento e expectativas para criar uma viagem sob medida.",
    image: "/lovable-uploads/ef7988f2-f6cf-4a8b-bfcb-570ee025bb04.png"
  },
  {
    title: "Pesquisa e seleção personalizada de serviços",
    description: "Cuidamos de cada detalhe: destinos, roteiros, hospedagens, voos, transfers, seguro, chip de internet, passeios e experiências.",
    image: "/lovable-uploads/b98e1a54-f373-4e98-a573-a595c1c7a136.png"
  },
  {
    title: "Acompanhamento em tempo real",
    description: "Acompanhamento durante o processo de decisão, com esclarecimento de dúvidas e ajustes no plano conforme necessário.",
    image: "/lovable-uploads/5df4c253-f819-4e4f-a21c-a865b6ac3605.png"
  },
  {
    title: "Reservas e confirmações",
    description: "Intermediamos as reservas e orientamos sobre as melhores opções, sempre com foco em segurança, conforto e economia.",
    image: "/lovable-uploads/275f0664-9977-493e-8cba-fccf8addb1a3.png"
  },
  {
    title: "Material visual exclusivo da viagem",
    description: "Entregamos um guia digital organizado com roteiro completo e informações detalhadas.",
    image: "/lovable-uploads/6f636353-ae8b-497e-b7cd-3c5bd6a2928f.png"
  },
  {
    title: "Suporte antes e durante a viagem",
    description: "Estaremos disponíveis para apoiar você com qualquer dúvida ou necessidade relacionada ao plano contratado.",
    image: "/lovable-uploads/167e296a-843b-41b6-b556-42ac23882921.png"
  }
];

const materialIncludes = [
  "Roteiro dia a dia",
  "Endereços e horários", 
  "Links úteis e mapas interativos",
  "Sugestões de restaurantes",
  "Atrações e Experiências inclusas na viagem",
  "Documentação necessária e dicas práticas"
];

const formQuestions = [
  "Motivo da Viagem *",
  "Prefere voos diretos ou está disponível para fazer escalas? *",
  "Apenas bagagem de mão ou a completa com a despachada de 23k? *",
  "Qual a idade dos Passageiros? *",
  "As datas da sua viagem são flexíveis ou tem dias específico *",
  "Hotel 5 estrelas, Resort, Airbnb ou Hostel? *",
  "Regime tudo incluído, meia-pensão, ou só pequeno almoço? *",
  "Qual é o orçamento que tem em mente para a viagem completa? *",
  "Quando pretende realizar a compra dos bilhetes? *",
  "Vai visitar só esse destino ou deseja incluir mais algum? *"
];

const ConsultoriaViagens = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleWhatsApp = () => {
    window.open('https://wa.me/351911734711?text=Olá! Gostaria de saber mais sobre o Planejamento de Viagem.', '_blank');
  };

  const handleFormLink = () => {
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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/0d6db174-1deb-46b7-8372-803af136d59f.png"
            alt="Planejamento de Viagem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              {consultoriaData.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              O planejamento de viagem personalizado da Viajar Pelo Mundo é um serviço completo que ajuda você a organizar cada detalhe da sua viagem internacional com segurança, economia e conforto.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Planejamento Personalizado
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transformamos seus sonhos de viagem em realidade com planejamento inteligente e atendimento humanizado
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Especialidade</h3>
                    <p className="text-muted-foreground">{consultoriaData.specialty}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Duração</h3>
                    <p className="text-muted-foreground">{consultoriaData.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Valor</h3>
                    <p className="text-2xl font-bold text-brand-blue">{consultoriaData.price}</p>
                    <p className="text-sm text-muted-foreground">Valor fixo por planejamento</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-lg py-4 text-white"
                    onClick={handleFormLink}
                  >
                    Contratar Planejamento
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/lovable-uploads/89d275a3-14eb-4066-a880-e885f17c2dd0.png')`
                  }}
                >
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-semibold">Planejamento Personalizado</p>
                    <p className="text-white/80">Cada detalhe pensado para você</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Process Steps Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Processo em 4 Etapas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nosso planejamento personalizado abrange todas as etapas da sua viagem, com atenção total aos detalhes e foco em transformar seus desejos em uma experiência inesquecível.
            </p>
          </div>

          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-secondary">{index + 1}</span>
                      <h3 className="text-2xl font-bold text-secondary">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div 
                    className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover animate-fade-in hover:scale-105 transition-transform duration-300"
                    style={{ 
                      backgroundImage: `url('${step.image}')`,
                      backgroundPosition: index === 3 ? 'center center' : 'center'
                    }}
                  >
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Serviços Inclusos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nosso planejamento é completo e personalizado, pensado para garantir praticidade, segurança e experiências únicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedServices.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-card group">
                <div 
                  className="h-48 bg-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ 
                    backgroundImage: `url('${service.image}')`,
                    backgroundPosition: index === 4 ? 'center center' : 'center'
                  }}
                />
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-secondary mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-white"
              onClick={handleFormLink}
            >
              Solicitar Planejamento Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Material Visual Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Material Visual Exclusivo e Personalizado
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Receba um guia digital completo com todas as informações da sua viagem
            </p>
          </div>

          {/* Other Materials Grid */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {materialIncludes.map((item, index) => (
                <Card key={index} className="p-6 border-0 shadow-card hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-2">{item}</h4>
                      <p className="text-muted-foreground text-sm">Informações detalhadas e organizadas para sua comodidade</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Map Section */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Mapa Personalizado Exclusivo
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada cliente recebe um mapa interativo único com pontos turísticos, restaurantes 
                e atividades selecionados especialmente para o seu perfil de viagem.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1zLOUvdHVdu_E_VjaSEbvOfx1YDuFZlo&ehbc=2E312F"
                      width="100%"
                      height="100%"
                      className="absolute inset-0 rounded-t-lg"
                      loading="lazy"
                      title="Mapa Personalizado - Exemplo"
                    ></iframe>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-brand-blue" />
                      <span className="font-semibold text-brand-dark">Mapa Exemplo</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      size="sm"
                      className="bg-white/90 text-brand-dark hover:bg-white backdrop-blur-sm shadow-lg"
                      onClick={() => window.open('https://www.google.com/maps/d/u/1/viewer?mid=1zLOUvdHVdu_E_VjaSEbvOfx1YDuFZlo&ll=0%2C0&z=11', '_blank')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Mapa Completo
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-icons flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-secondary mb-2">Pontos Turísticos</h4>
                      <p className="text-sm text-muted-foreground">Atrações selecionadas para seu perfil</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-icons flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-secondary mb-2">Restaurantes</h4>
                      <p className="text-sm text-muted-foreground">Experiências gastronômicas únicas</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-icons flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-secondary mb-2">Atividades</h4>
                      <p className="text-sm text-muted-foreground">Experiências personalizadas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Guide Examples Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Exemplos do Nosso Guia Personalizado
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Veja como criamos guias detalhados com informações completas sobre cada destino, 
                horários, instruções e dicas exclusivas para sua viagem.
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Guide Example 1 */}
                <Card className="overflow-hidden border-0 shadow-2xl group">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/1737d0e2-b2d9-4c03-909b-166064c8edc8.png"
                      alt="Exemplo de Guia Personalizado - Pontos Turísticos Londres"
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-white text-sm font-medium">Pontos Turísticos</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-secondary mb-3">Guia de Atrações</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Informações detalhadas sobre pontos turísticos, horários de funcionamento, 
                      dicas de visitação e instruções de como chegar a cada local.
                    </p>
                  </CardContent>
                </Card>

                {/* Guide Example 2 */}
                <Card className="overflow-hidden border-0 shadow-2xl group">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/6bbc7e8b-c2ac-4038-a2ae-3916b7715155.png"
                      alt="Exemplo de Guia Personalizado - Experiências e Atividades Londres"
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-white text-sm font-medium">Experiências Únicas</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-secondary mb-3">Atividades Especiais</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Experiências exclusivas com instruções completas, pontos de encontro, 
                      horários e todas as informações necessárias para aproveitar ao máximo.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground italic">
                  * Exemplos reais de guias criados para nossos clientes
                </p>
              </div>
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

      
      <Footer />
    </div>
  );
};

export default ConsultoriaViagens;