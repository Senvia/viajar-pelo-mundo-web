import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Plane, Hotel, Car, Shield, Navigation, MapPin, Users, UserCheck } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Compra de Passagens Aéreas",
    description: "Encontramos as melhores opções de voo para seu destino",
    features: ["Pesquisa em múltiplas companhias", "Melhor preço garantido", "Alterações sem taxa extra", "Suporte em português"],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para *compra de passagens aéreas*. Podem me ajudar?"
  },
  {
    icon: Hotel,
    title: "Reservas de Hospedagem",
    description: "Hotéis e acomodações selecionadas para sua estadia",
    features: ["Localizações estratégicas", "Verificados pela nossa equipe", "Cancelamento flexível", "Suporte 24h"],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para *reservas de hospedagem*. Podem me ajudar?"
  },
  {
    icon: Navigation,
    title: "Transfer (Aeroporto / Cidade)",
    description: "Transporte confortável e seguro",
    features: ["Motorista profissional", "Veículo climatizado", "Acompanhamento do voo", "Sinalização personalizada"],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para *transfer aeroporto/cidade*. Podem me ajudar?"
  },
  {
    icon: Shield,
    title: "Seguro Viagem",
    description: "Proteção completa para toda sua viagem",
    features: ["Cobertura médica", "Cancelamento de viagem", "Bagagem extraviada", "Assistência 24h"],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para *seguro viagem*. Podem me ajudar?"
  },
  {
    icon: Car,
    title: "Aluguel de Carro",
    description: "Liberdade total para explorar os destinos",
    features: ["Carros novos", "Seguro incluído", "GPS incluído", "Atendimento português"],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para *aluguel de carro*. Podem me ajudar?"
  },
  {
    icon: MapPin,
    title: "Reservas de Atividades Turísticas",
    description: "Experiências únicas nos melhores destinos",
    features: ["Tours exclusivos", "Ingressos antecipados", "Grupos pequenos", "Guias especializados"],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para *reservas de atividades turísticas*. Podem me ajudar?"
  },
  {
    icon: Users,
    title: "Receptivo",
    description: "Recepção e acompanhamento personalizado",
    features: ["Recepção no aeroporto", "Orientação inicial", "Dicas locais", "Suporte durante a estadia"],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para *serviço de receptivo*. Podem me ajudar?"
  },
  {
    icon: UserCheck,
    title: "Guia Turístico",
    description: "Guias especializados em cada destino",
    features: ["Guias credenciados", "Roteiros personalizados", "Idioma português", "Conhecimento local profundo"],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para *guia turístico*. Podem me ajudar?"
  }
];

const ServicosAvulsos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/a886c0ec-c4fb-4beb-ac44-aebb732c3676.png"
            alt="Serviços Avulsos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              Serviços
              <span className="block text-white">
                Avulsos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Ideal para quem precisa de uma ajuda pontual. Escolha 
              exatamente o que precisa sem compromisso com pacotes completos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Serviços Disponíveis
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha exatamente o que você precisa para sua viagem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-icons flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 text-sm mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-brand-dark hover:bg-brand-dark/90 mt-auto text-white"
                    onClick={() => window.open(`https://wa.me/351911734711?text=${encodeURIComponent(service.whatsappMessage)}`, '_blank')}
                  >
                    Solicitar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Como Funciona a Contratação
              </h2>
              <p className="text-xl text-muted-foreground">
                Processo simples e direto para contratar qualquer serviço
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Escolha o Serviço</h3>
                    <p className="text-muted-foreground">
                      Selecione exatamente o que você precisa da nossa lista de serviços disponíveis
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Solicite Orçamento</h3>
                    <p className="text-muted-foreground">
                      Entre em contato via WhatsApp ou formulário para receber um orçamento personalizado
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Confirme e Pague</h3>
                    <p className="text-muted-foreground">
                      Após aprovação do orçamento, confirmamos o serviço e você efetua o pagamento
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Aproveite</h3>
                    <p className="text-muted-foreground">
                      Seu serviço é executado com toda qualidade e suporte necessário
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 border-brand-blue/20">
                  <h3 className="text-xl font-bold text-secondary mb-4">Contato Direto</h3>
                  <p className="text-muted-foreground mb-6">
                    Fale diretamente com nosso consultor via WhatsApp para receber atendimento personalizado e orçamento imediato.
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://wa.me/351911734711', '_blank')}
                  >
                    WhatsApp: +351 911 734 711
                  </Button>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">Formulário de Contato</h3>
                  <p className="text-muted-foreground mb-6">
                    Prefere enviar uma mensagem detalhada? Use nosso formulário de contato abaixo.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ir para Formulário
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Valores
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Cada serviço tem seu valor específico baseado nas suas necessidades
            </p>
            
            <Card className="p-12 bg-gradient-to-br from-brand-blue/5 to-brand-green/5 border-brand-blue/10 max-w-2xl mx-auto">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-3xl font-bold text-secondary mb-4">
                Solicite um Orçamento Personalizado
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Nossos preços variam de acordo com destino, datas, número de pessoas e especificidades do serviço. 
                Entre em contato para receber um orçamento exato e sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-brand-dark hover:bg-brand-dark/90 px-8 text-white"
                  onClick={() => window.open('https://wa.me/351911734711', '_blank')}
                >
                  Solicitar Orçamento Grátis
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Falar com Consultor
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default ServicosAvulsos;