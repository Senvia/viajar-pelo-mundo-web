import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { 
  MapPin, 
  Calendar, 
  Star, 
  Eye,
  Plane,
  ArrowRight,
  Shield,
  Clock,
  CreditCard,
  Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const packagesData = [
  {
    id: "portugal-essence",
    name: "Portugal Essence",
    destination: "Porto - Portugal",
    duration: "7 dias e 6 noites",
    price: "3.510 €",
    priceNote: "Total para 02 Adultos em quarto duplo",
    image: "/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png",
    highlights: [
      "City Tour privativo pelo Porto",
      "Experiência vinícola no Museu WOW",
      "Workshop de Pastel de Nata",
      "Cruzeiro gourmet ao pôr do sol",
      "Espetáculo de Fado tradicional",
      "Tour pelo Vale do Douro"
    ],
    description: "Uma jornada completa pelos encantos do Porto, combinando cultura, gastronomia e experiências únicas"
  }
  // Novos pacotes serão adicionados aqui
];

const PacotesViagens = () => {
  const navigate = useNavigate();

  const handleViewPackage = (packageId: string) => {
    navigate(`/servicos/pacotes/${packageId}`);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/351911734711?text=Olá! Gostaria de saber mais sobre os pacotes de viagem.', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/0d6db174-1deb-46b7-8372-803af136d59f.png"
            alt="Pacotes de Viagens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              Pacotes de
              <span className="block text-white">
                Viagens
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              Descubra Portugal através de experiências autênticas e inesquecíveis, 
              cuidadosamente curadas para você
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-brand-dark text-white hover:bg-brand-dark/90 shadow-2xl"
                onClick={handleWhatsApp}
              >
                <Plane className="w-5 h-5 mr-2" />
                Explorar Pacotes
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 border-secondary bg-white text-secondary hover:bg-secondary hover:text-white backdrop-blur-sm"
                onClick={handleWhatsApp}
              >
                Falar Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Nossos Pacotes Exclusivos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada pacote é cuidadosamente planejado para oferecer experiências únicas e inesquecíveis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
            {packagesData.map((pkg) => (
              <Card key={pkg.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Package Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-80 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-brand-dark text-white">Destaque</Badge>
                    </div>
                  </div>

                  {/* Package Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4">{pkg.name}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {pkg.description}
                      </p>

                      {/* Package Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-brand-blue" />
                          <span className="text-muted-foreground">{pkg.destination}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-brand-blue" />
                          <span className="text-muted-foreground">{pkg.duration}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-secondary mb-4">Principais experiências incluídas:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {pkg.highlights.slice(0, 6).map((highlight, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-3xl font-bold text-brand-blue">{pkg.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{pkg.priceNote}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      size="lg" 
                      className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white shadow-elegant"
                      onClick={() => handleViewPackage(pkg.id)}
                    >
                      Ver Mais Detalhes
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Por Que Escolher Nossos Pacotes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos mais do que viagens, criamos experiências transformadoras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Experiências Únicas</h3>
              <p className="text-muted-foreground">
                Cada pacote é totalmente personalizado para criar memórias inesquecíveis e autênticas
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Curadoria Especializada</h3>
              <p className="text-muted-foreground">
                Nossa equipe seleciona cuidadosamente cada experiência para garantir qualidade excepcional
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Suporte Completo</h3>
              <p className="text-muted-foreground">
                Assistência completa antes e durante sua viagem para uma experiência sem preocupações
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-brand-blue/5 via-secondary/5 to-brand-dark/5 rounded-3xl p-12 border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Pronto Para Sua Aventura Portuguesa?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos tornar sua viagem a Portugal inesquecível
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-white"
                  onClick={handleWhatsApp}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Especialista
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

      <Contact />
      <Footer />
    </div>
  );
};

export default PacotesViagens;
