import { useState } from "react";
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
      {
        text: "City Tour privativo pelo Porto",
        image: "/lovable-uploads/d473c4c5-98ec-4c93-ac26-d2dc26c06c80.png"
      },
      {
        text: "Experiência vinícola no Museu WOW",
        image: "/lovable-uploads/b98e1a54-f373-4e98-a573-a595c1c7a136.png"
      },
      {
        text: "Workshop de Pastel de Nata",
        image: "/lovable-uploads/c23fafcc-27fe-4e3a-b4aa-8061a9acfa1a.png"
      },
      {
        text: "Cruzeiro gourmet ao pôr do sol",
        image: "/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png"
      },
      {
        text: "Espetáculo de Fado tradicional",
        image: "/lovable-uploads/25dd2392-9644-42fa-88e9-bbdd6b07c1c3.png"
      },
      {
        text: "Tour pelo Vale do Douro",
        image: "/lovable-uploads/ef7988f2-f6cf-4a8b-bfcb-570ee025bb04.png"
      }
    ],
    description: "Uma jornada completa pelos encantos do Porto, combinando cultura, gastronomia e experiências únicas"
  },
  {
    id: "lisboa-imperial",
    name: "Lisboa Imperial",
    destination: "Lisboa - Portugal",
    duration: "5 dias e 4 noites",
    price: "2.850 €",
    priceNote: "Total para 02 Adultos em quarto duplo",
    image: "/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png",
    highlights: [
      {
        text: "Tour pelos bairros históricos",
        image: "/lovable-uploads/a886c0ec-c4fb-4beb-ac44-aebb732c3676.png"
      },
      {
        text: "Visita ao Mosteiro dos Jerónimos",
        image: "/lovable-uploads/89d275a3-14eb-4066-a880-e885f17c2dd0.png"
      },
      {
        text: "Experiência gastronômica em Belém",
        image: "/lovable-uploads/604537d9-c3eb-430c-9d01-820b1bec9336.png"
      },
      {
        text: "Passeio de elétrico tradicional",
        image: "/lovable-uploads/167e296a-843b-41b6-b556-42ac23882921.png"
      },
      {
        text: "Espetáculo de Fado em Alfama",
        image: "/lovable-uploads/95d11633-6490-46ce-a33b-b0a82aced13e.png"
      },
      {
        text: "Excursão a Sintra e Cascais",
        image: "/lovable-uploads/f66305b1-a495-44b6-9ca9-f94713bf3c3f.png"
      }
    ],
    description: "Descubra a majestosa capital portuguesa com suas tradições milenares, arquitetura deslumbrante e gastronomia única"
  }
];

const PacotesViagens = () => {
  const navigate = useNavigate();
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: string]: number}>({});

  const handleViewPackage = (packageId: string) => {
    navigate(`/servicos/pacotes/${packageId}`);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/351911734711?text=Olá! Gostaria de saber mais sobre os pacotes de viagem.', '_blank');
  };

  const setCurrentImageIndex = (packageId: string, index: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [packageId]: index
    }));
  };

  const getCurrentImageIndex = (packageId: string) => {
    return currentImageIndexes[packageId] || 0;
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
                <Phone className="w-5 h-5 mr-2" />
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

          <div className="space-y-12 max-w-7xl mx-auto">
            {packagesData.map((pkg, index) => (
              <Card key={pkg.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Package Content - Always Left */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between bg-white">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-3">{pkg.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Package Details */}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-blue" />
                          <span className="text-sm text-muted-foreground">{pkg.destination}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-brand-blue" />
                          <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                        </div>
                      </div>

                      {/* Highlights - Interactive Gallery */}
                      <div>
                        <h4 className="font-semibold text-secondary mb-3">Principais experiências:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {pkg.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                            <div 
                              key={highlightIndex} 
                              className={`flex items-center gap-2 cursor-pointer transition-all duration-300 p-2 rounded-lg text-sm ${
                                getCurrentImageIndex(pkg.id) === highlightIndex 
                                  ? 'bg-primary/10 text-primary font-medium' 
                                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                              }`}
                              onClick={() => setCurrentImageIndex(pkg.id, highlightIndex)}
                            >
                              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                getCurrentImageIndex(pkg.id) === highlightIndex 
                                  ? 'bg-primary' 
                                  : 'bg-muted-foreground/40'
                              }`} />
                              <span>{highlight.text}</span>
                            </div>
                          ))}
                          {pkg.highlights.length > 3 && (
                            <p className="text-xs text-brand-blue ml-4">+ {pkg.highlights.length - 3} mais experiências</p>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="bg-gradient-to-r from-brand-blue/5 to-primary/5 rounded-lg p-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-brand-blue">{pkg.price}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{pkg.priceNote}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
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

                  {/* Package Gallery - Always Right */}
                  <div className="relative overflow-hidden">
                    <div className="relative h-64 lg:h-72">
                      <img 
                        src={pkg.highlights[getCurrentImageIndex(pkg.id)]?.image || pkg.image}
                        alt={pkg.highlights[getCurrentImageIndex(pkg.id)]?.text || pkg.name}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      
                      {/* Navigation Dots - Smaller and cleaner */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                        {pkg.highlights.slice(0, 4).map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => setCurrentImageIndex(pkg.id, dotIndex)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              getCurrentImageIndex(pkg.id) === dotIndex 
                                ? 'bg-white w-4' 
                                : 'bg-white/60 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Experience Title Overlay - Smaller */}
                      <div className="absolute bottom-4 left-4 right-16">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                          <p className="text-xs font-medium text-secondary truncate">
                            {pkg.highlights[getCurrentImageIndex(pkg.id)]?.text}
                          </p>
                        </div>
                      </div>
                    </div>
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
