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
    image: "/lovable-uploads/30d84693-6080-4631-8243-f1d0abb88cbe.png"
  }
];

const includedServices = [
  {
    title: "Reunião de alinhamento",
    description: "Entendemos seu perfil, objetivos, orçamento e expectativas para criar uma viagem sob medida."
  },
  {
    title: "Pesquisa e seleção personalizada de serviços",
    description: "Cuidamos de cada detalhe: destinos, roteiros, hospedagens, voos, transfers, seguro, chip de internet, passeios e experiências."
  },
  {
    title: "Consultoria em tempo real",
    description: "Acompanhamento durante o processo de decisão, com esclarecimento de dúvidas e ajustes no plano conforme necessário."
  },
  {
    title: "Reservas e confirmações",
    description: "Intermediamos as reservas e orientamos sobre as melhores opções, sempre com foco em segurança, conforto e economia."
  },
  {
    title: "Material visual exclusivo da viagem",
    description: "Entregamos um guia digital organizado com roteiro completo e informações detalhadas."
  },
  {
    title: "Suporte antes e durante a viagem",
    description: "Estaremos disponíveis para apoiar você com qualquer dúvida ou necessidade relacionada ao plano contratado."
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
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              {consultoriaData.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              A consultoria de viagem da Viajar Pelo Mundo é um serviço completo e personalizado que ajuda você a planejar cada detalhe da sua viagem internacional com segurança, economia e conforto.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-gradient-primary text-white hover:opacity-90 shadow-2xl"
                onClick={handleFormLink}
              >
                Solicitar Consultoria
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white backdrop-blur-sm"
                onClick={handleWhatsApp}
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Consultoria Personalizada
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transformamos seus sonhos de viagem em realidade com planejamento inteligente e atendimento humanizado
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Especialidade</h3>
                    <p className="text-muted-foreground">{consultoriaData.specialty}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Duração</h3>
                    <p className="text-muted-foreground">{consultoriaData.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Valor</h3>
                    <p className="text-2xl font-bold text-brand-blue">{consultoriaData.price}</p>
                    <p className="text-sm text-muted-foreground">Valor fixo por consultoria</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant text-lg py-4"
                    onClick={handleFormLink}
                  >
                    Contratar Consultoria
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Benefícios da Nossa Consultoria
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um serviço completo que vai além do planejamento básico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultoriaData.benefits.map((benefit, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              Nossa consultoria abrange todas as etapas do planejamento da sua viagem, com atenção total aos detalhes e foco em transformar seus desejos em uma experiência inesquecível.
            </p>
          </div>

          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-brand-blue">{index + 1}</span>
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
                      backgroundPosition: index === 3 ? 'center top' : 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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
              O Que Está Incluído
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nosso planejamento é completo e personalizado, pensado para garantir praticidade, segurança e experiências únicas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-8">Serviços Inclusos</h3>
              <div className="space-y-6">
                {includedServices.map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-secondary">{service.title}</h4>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary mb-8">Material Visual Exclusivo</h3>
              <div className="space-y-4">
                {materialIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg bg-gradient-primary hover:opacity-90 shadow-elegant"
              onClick={handleFormLink}
            >
              Solicitar Consultoria Agora
            </Button>
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