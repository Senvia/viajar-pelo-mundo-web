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
  name: "Consultoria de Viagens pelo Mundo",
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
    image: "/lovable-uploads/f8848579-71ad-4fb3-8453-c0afddac6c57.png"
  },
  {
    icon: Search,
    title: "Elaboração da proposta de viagem",
    description: "Apresentamos um roteiro preliminar com sugestões de destinos, hospedagens, atividades, voos e experiências adaptadas ao seu estilo.",
    image: "/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png"
  },
  {
    icon: Settings,
    title: "Confirmação e reserva dos serviços",
    description: "Após aprovação, realizamos as reservas dos produtos e serviços: passagens aéreas, hotéis, transfers, passeios, seguro-viagem, entre outros.",
    image: "/lovable-uploads/a4315f8c-26b9-4bb7-9c20-81a4fd346d2d.png"
  },
  {
    icon: FileText,
    title: "Entrega do material visual completo",
    description: "Criamos um guia digital exclusivo com o passo a passo da sua viagem, contendo todas as informações organizadas de forma clara, prática e elegante.",
    image: "/lovable-uploads/53f3bea9-96f9-4228-b293-01136d266f85.png"
  }
];

const includedServices = [
  "Reunião de alinhamento",
  "Pesquisa e seleção personalizada de serviços",
  "Consultoria em tempo real",
  "Reservas e confirmações",
  "Material visual exclusivo da viagem",
  "Suporte antes e durante a viagem"
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
    window.open('https://wa.me/351911734711?text=Olá! Gostaria de saber mais sobre a Consultoria de Viagens pelo Mundo.', '_blank');
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
            {consultoriaData.specialty}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {consultoriaData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
            A consultoria de viagem da Viajar Pelo Mundo é um serviço completo e personalizado que ajuda você a planejar cada detalhe da sua viagem internacional com segurança, economia e conforto.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg bg-white text-secondary hover:bg-white/90 shadow-2xl"
              onClick={handleFormLink}
            >
              Solicitar Consultoria
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
                    backgroundImage: `url('/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png')`
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
              Nossa consultoria abrange todas as etapas do planejamento da sua viagem
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
                    className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${step.image}')` }}
                    onClick={() => openImageModal(step.image)}
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
              <div className="space-y-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">{service}</span>
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

      {/* Form Questions Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Formulário de Consultoria
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Para oferecer o melhor atendimento, precisamos conhecer suas preferências e necessidades
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Perguntas Importantes</CardTitle>
                <CardDescription className="text-lg">
                  Responda às seguintes questões para que possamos criar sua proposta personalizada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formQuestions.map((question, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-muted/30">
                      <p className="text-muted-foreground font-medium">{question}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button 
                    size="lg" 
                    className="px-10 py-4 text-lg bg-gradient-primary hover:opacity-90 shadow-elegant"
                    onClick={handleFormLink}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Preencher Formulário
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Link: https://agencia.iddas.com.br/so/k8cqdbwp
                  </p>
                </div>
              </CardContent>
            </Card>
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

export default ConsultoriaViagens;