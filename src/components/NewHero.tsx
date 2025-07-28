import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Star } from "lucide-react";

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with brand colors overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `var(--gradient-hero), url('https://images.unsplash.com/photo-1469474968028-56623f02e42d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8">
            <Star className="w-4 h-4 text-brand-green fill-current" />
            Especialistas em Viagens Europeias
            <Star className="w-4 h-4 text-brand-green fill-current" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Descubra o
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Mundo Conosco
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformamos seus sonhos de viagem em realidade com consultoria especializada e pacotes únicos para a Europa e além.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green">500+</div>
              <div className="text-white/80">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green">15+</div>
              <div className="text-white/80">Países Visitados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green">5★</div>
              <div className="text-white/80">Avaliação Média</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg shadow-elegant transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
            >
              Marcar Consultoria Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-brand-dark hover:bg-white hover:text-brand-dark backdrop-blur-sm font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Ver Nossos Serviços
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-green" />
              Consultoria Personalizada
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-brand-green" />
              Atendimento 24/7
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-green" />
              Suporte Durante a Viagem
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;