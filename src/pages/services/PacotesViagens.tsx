import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { usePackages } from "@/hooks/usePackages";
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
import { useState } from "react";

const PacotesViagens = () => {
  const navigate = useNavigate();
  const { packages, loading } = usePackages();
  const [activeGalleryImages, setActiveGalleryImages] = useState<{[key: string]: number}>({});

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
            {loading ? (
              <div className="text-center py-12">
                <div className="text-lg">Carregando pacotes...</div>
              </div>
            ) : packages.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Nenhum pacote disponível
                </h3>
                <p className="text-muted-foreground">
                  Os pacotes de viagem serão exibidos aqui quando estiverem disponíveis.
                </p>
              </div>
            ) : (
              packages.map((pkg, index) => (
                <Card key={pkg.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 w-full max-h-[800px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] lg:h-[800px]">
                    {/* Package Content - Always Left */}
                    <div className="p-8 lg:p-12 flex flex-col justify-between bg-white">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">{pkg.name}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {pkg.description}
                          </p>
                        </div>

                        {/* Package Details */}
                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-icons flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Destino</p>
                              <p className="font-semibold text-secondary">{pkg.destination}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-icons flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Duração</p>
                              <p className="font-semibold text-secondary">{pkg.duration}</p>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-semibold text-secondary mb-4">Principais experiências incluídas:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {pkg.highlights?.map((highlight, highlightIndex) => (
                              <div key={highlightIndex} className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-brand-blue mt-1 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="bg-muted/30 rounded-lg p-4">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-3xl font-bold text-brand-blue">{pkg.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{pkg.price_note}</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8">
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
                    <div className="relative overflow-hidden h-full">
                      <img 
                        src={pkg.package_experiences?.[activeGalleryImages[pkg.id] || 0]?.image || pkg.main_image || pkg.hero_image}
                        alt={pkg.package_experiences?.[activeGalleryImages[pkg.id] || 0]?.title || pkg.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      {/* Gallery Navigation Dots */}
                      {pkg.package_experiences && pkg.package_experiences.length > 0 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <div className="flex space-x-2">
                            {pkg.package_experiences.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => setActiveGalleryImages(prev => ({
                                  ...prev,
                                  [pkg.id]: imgIndex
                                }))}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  (activeGalleryImages[pkg.id] || 0) === imgIndex 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/50 hover:bg-white/70'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-white/90 text-secondary backdrop-blur-sm">Pacote Exclusivo</Badge>
                      </div>
                      
                      {/* Experience Label */}
                      <div className="absolute bottom-12 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-xs font-medium text-brand-blue">
                            {pkg.package_experiences?.[activeGalleryImages[pkg.id] || 0]?.title || 'Experiência Única'}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-muted-foreground">📍 {pkg.destination}</p>
                            <p className="text-xs text-muted-foreground">⏱️ {pkg.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
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
