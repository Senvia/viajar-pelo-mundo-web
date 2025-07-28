import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Camera, MapPin, Users, Clock, Star, Heart } from "lucide-react";

const activities = [
  {
    icon: Camera,
    title: "Tours Guiados",
    description: "Passeios com guias especializados locais",
    features: ["Guias certificados", "Grupos pequenos", "Roteiros exclusivos", "Idioma português"]
  },
  {
    icon: MapPin,
    title: "Experiências Locais",
    description: "Vivências autênticas da cultura local",
    features: ["Culinária típica", "Artesanato local", "Tradições regionais", "Encontros com locais"]
  },
  {
    icon: Users,
    title: "Atividades em Grupo",
    description: "Experiências compartilhadas inesquecíveis",
    features: ["Workshops", "Aulas de culinária", "Degustações", "Festivais locais"]
  },
  {
    icon: Clock,
    title: "Tours Privados",
    description: "Experiências exclusivas para você e sua família",
    features: ["Roteiro personalizado", "Horário flexível", "Atenção exclusiva", "Transporte incluso"]
  }
];

const destinations = [
  {
    city: "Paris",
    activities: ["Torre Eiffel VIP", "Louvre sem filas", "Cruzeiro no Sena", "Montmartre"],
    price: "€45"
  },
  {
    city: "Roma",
    activities: ["Coliseu underground", "Vaticano exclusivo", "Trastevere food tour", "Via Apia"],
    price: "€52"
  },
  {
    city: "Barcelona",
    activities: ["Sagrada Família", "Park Güell", "Tapas tour", "Flamenco show"],
    price: "€38"
  },
  {
    city: "Amsterdam",
    activities: ["Canais de barco", "Museu Van Gogh", "Jordaan district", "Bike tour"],
    price: "€42"
  }
];

const AtividadesTuristicas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Experiências Únicas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atividades Turísticas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Experiências autênticas e inesquecíveis com guias especializados. 
              Descubra a Europa além dos pontos turísticos tradicionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Atividades
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-white text-black bg-white/90 hover:bg-white hover:text-secondary"
                onClick={() => window.open('https://wa.me/351911734711', '_blank')}
              >
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Activities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Tipos de Atividades
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos uma ampla variedade de experiências para todos os gostos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <activity.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {activity.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-brand-green fill-brand-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Destinos Populares
            </h2>
            <p className="text-xl text-muted-foreground">
              Atividades especiais nos principais destinos europeus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-secondary">{destination.city}</CardTitle>
                    <Badge variant="secondary" className="bg-brand-blue text-white">
                      A partir de {destination.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {destination.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                        <Heart className="h-4 w-4 text-brand-green" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-primary hover:opacity-90"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver Atividades em {destination.city}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                O que está incluído nas nossas atividades
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Guias Especializados</h3>
                    <p className="text-muted-foreground">
                      Guias locais certificados que falam português e conhecem todos os segredos da cidade
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Acesso Prioritário</h3>
                    <p className="text-muted-foreground">
                      Evite filas e tenha acesso prioritário aos principais pontos turísticos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Camera className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Momentos Únicos</h3>
                    <p className="text-muted-foreground">
                      Experiências autênticas que você não encontrará em outros lugares
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Flexibilidade Total</h3>
                    <p className="text-muted-foreground">
                      Horários flexíveis e possibilidade de personalizar o roteiro
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 border-brand-blue/20">
                <h3 className="text-xl font-bold text-secondary mb-4">Pacote Família</h3>
                <p className="text-muted-foreground mb-4">
                  Atividades pensadas para toda a família, com entretenimento para crianças e adultos.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-brand-blue">€25/criança</div>
                  <Badge variant="secondary">Desconto 50%</Badge>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-brand-green/10 to-brand-blue/10 border-brand-green/20">
                <h3 className="text-xl font-bold text-secondary mb-4">Experiência Premium</h3>
                <p className="text-muted-foreground mb-4">
                  Tours privados exclusivos com transporte de luxo e acesso VIP.
                </p>
                <div className="text-2xl font-bold text-brand-green">A partir de €150</div>
              </Card>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-elegant"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Reservar Atividade
                </Button>
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

export default AtividadesTuristicas;