import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { 
  MapPin, 
  Calendar, 
  Star, 
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const packagesData = [
  {
    id: "portugal-essence",
    name: "Portugal Essence",
    destination: "Porto - Portugal",
    duration: "7 dias e 6 noites",
    price: "3.510 €",
    totalText: "Total para 02 Adultos em quarto duplo",
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
  }
];

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

const PacotesViagens = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/351911734711?text=Olá! Gostaria de saber mais sobre os pacotes de viagem para Portugal.', '_blank');
  };

  const handlePackageDetails = (packageId: string) => {
    navigate(`/servicos/pacotes/${packageId}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/0d6db174-1deb-46b7-8372-803af136d59f.png"
            alt="Pacotes de Viagem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Experiências Premium
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              Pacotes de
              <span className="block text-white">
                Viagem
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              Descubra os encantos da Europa com nossos pacotes cuidadosamente planejados para proporcionar experiências únicas e inesquecíveis
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-brand-dark text-white hover:bg-brand-dark/90 shadow-2xl"
                onClick={() => document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Pacotes Disponíveis
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
                Por Que Escolher Nossos Pacotes?
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

      {/* Packages Available */}
      <section id="pacotes" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Pacotes Disponíveis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha o pacote perfeito para sua próxima aventura europeia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {packagesData.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div 
                    className="h-80 lg:h-auto bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    {pkg.badge && (
                      <Badge className={`absolute top-4 left-4 ${pkg.badgeColor} text-white border-0`}>
                        {pkg.badge}
                      </Badge>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm opacity-90">{pkg.destination}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <CardTitle className="text-2xl mb-3">{pkg.name}</CardTitle>
                        <CardDescription className="text-base">{pkg.description}</CardDescription>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-blue" />
                          <span>{pkg.destination}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-brand-blue" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-secondary mb-3">Destaques inclusos:</h4>
                        <ul className="space-y-1">
                          {pkg.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                          {pkg.highlights.length > 4 && (
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
                          <p className="text-2xl font-bold text-brand-blue">{pkg.price}</p>
                          <p className="text-xs text-muted-foreground">{pkg.totalText}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 bg-brand-dark hover:bg-brand-dark/90 text-white"
                          onClick={() => handlePackageDetails(pkg.id)}
                        >
                          Ver Mais Detalhes
                          <ArrowRight className="w-4 h-4 ml-2" />
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
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Não encontrou o que procura? Podemos criar um pacote personalizado para você.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4"
              onClick={handleWhatsApp}
            >
              Solicitar Pacote Personalizado
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default PacotesViagens;