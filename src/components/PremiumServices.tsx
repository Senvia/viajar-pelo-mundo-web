import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plane, 
  FileText, 
  MapPin, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Phone,
  Car,
  Shield,
  Calendar,
  Home,
  CreditCard,
  Globe
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Serviços",
    subtitle: "Ideal para quem precisa de ajuda pontual",
    description: "Serviços individuais para completar sua viagem com qualidade e os melhores preços do mercado.",
    features: [
      "Compra de Passagens aéreas",
      "Reservas de Hospedagem", 
      "Transfer (aeroporto/cidade)",
      "Seguro viagem",
      "Aluguel de carro",
      "Reservas de atividades turísticas",
      "Receptivo",
      "Guia Turístico"
    ],
    image: "/lovable-uploads/604537d9-c3eb-430c-9d01-820b1bec9336.png",
    price: "Orçamento personalizado",
    cta: "Solicitar Orçamento",
    ctaAction: () => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank'),
    highlight: false
  },
  {
    icon: FileText,
    title: "Consultoria para Imigrantes",
    subtitle: "Especialistas em Portugal",
    description: "Apoio completo para quem deseja morar, trabalhar ou investir em Portugal com toda documentação necessária.",
    features: [
      "NIF (Número de Identificação Fiscal)",
      "NISS (Segurança Social)",
      "Utente SNS (Sistema Nacional de Saúde)",
      "Morada Fiscal",
      "Vistos (trabalho, estudo, investidor)",
      "Validação de estudos",
      "Criação de empresas",
      "Acompanhamento completo"
    ],
    image: "/lovable-uploads/50a145af-5d83-420a-814c-8f6f70ed394c.png",
    price: "Consulte valores",
    cta: "Falar com Especialista",
    ctaAction: () => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank'),
    highlight: true
  },
  {
    icon: MapPin,
    title: "Pacotes de Viagens",
    subtitle: "Portugal Essence - 7 dias/6 noites",
    description: "Experiência completa no Porto com atividades exclusivas, gastronomia e cultura portuguesa autêntica.",
    features: [
      "Traslado em carro executivo",
      "City Tour Porto (Privativo)",
      "Museu WOW + Workshop Pastel de Nata",
      "Cruzeiro Gourmet ao Pôr do Sol",
      "Experiência Gastronómica com Vinhos",
      "Espetáculo de Fado com Jantar",
      "Tour Vale do Douro completo",
      "Workshop Pintura de Azulejos"
    ],
    image: "/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png",
    price: "3.510€ para 2 adultos",
    cta: "Reservar Agora",
    ctaAction: () => window.open('https://buy.stripe.com/fZufZg77H3La7iY7Fl87K0b', '_blank'),
    highlight: false
  },
  {
    icon: Users,
    title: "Consultoria Especializada Europa",
    subtitle: "Planeamento completo personalizado",
    description: "Consultoria completa de viagem com material visual exclusivo e suporte total para sua experiência na Europa.",
    features: [
      "Reunião de alinhamento personalizada",
      "Pesquisa e seleção de serviços",
      "Roteiro dia a dia detalhado",
      "Material visual exclusivo (PDF)",
      "Consultoria em tempo real",
      "Intermediação de reservas",
      "Suporte antes e durante viagem",
      "Mapas e links interativos"
    ],
    image: "/lovable-uploads/2da541d5-fe43-4e23-bf3e-d0a2793efe31.png",
    price: "250€",
    cta: "Começar Planeamento",
    ctaAction: () => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank'),
    highlight: false
  }
];

const PremiumServices = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">4 Serviços Especializados</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Todos os Serviços para sua Viagem e Imigração
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Da ajuda pontual ao planeamento completo, temos a solução ideal para cada necessidade. 
            Especialistas em Europa com 5 anos de experiência e mais de 500 clientes satisfeitos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 ${
                service.highlight ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <CardHeader className="p-0">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-icons flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-elegant">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <CardTitle className="text-2xl lg:text-3xl text-secondary group-hover:text-white transition-colors mb-2">
                            {service.title}
                          </CardTitle>
                          <div className="text-primary group-hover:text-brand-blue font-medium transition-colors">
                            {service.subtitle}
                          </div>
                        </div>

                        {/* Highlight indicator */}
                        {service.highlight && (
                          <div className="px-3 py-1 bg-brand-blue text-white text-xs font-semibold rounded-full">
                            Mais Procurado
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <CardDescription className="text-muted-foreground group-hover:text-white/90 text-lg leading-relaxed transition-colors">
                        {service.description}
                      </CardDescription>

                      {/* Price */}
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-primary group-hover:text-white transition-colors">
                          {service.price}
                        </div>
                        {service.title === "Pacotes de Viagens" && (
                          <div className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                            Quarto duplo completo
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <Button 
                        size="lg"
                        className="bg-brand-dark hover:bg-brand-dark/90 shadow-elegant font-semibold group/btn text-white"
                        onClick={service.ctaAction}
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </div>

                  {/* Right Content - Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-secondary group-hover:text-white transition-colors mb-4">
                      O que está incluído:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium group-hover:text-white transition-colors leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Oferecemos soluções personalizadas para todas as necessidades. 
              Entre em contacto connosco para um atendimento especializado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-dark hover:bg-brand-dark/90 shadow-elegant px-8 py-4 text-lg font-semibold group text-white"
                onClick={() => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank')}
              >
                <Phone className="mr-2 w-5 h-5" />
                Falar no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = 120;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Formulário de Contacto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;