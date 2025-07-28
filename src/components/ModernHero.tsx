import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Globe, Award } from "lucide-react";

const ModernHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ 
            backgroundImage: `url('/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png')`,
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(50,183,234,0.2)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(78,201,166,0.2)_0%,transparent_50%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container flex items-center min-h-screen py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 animate-fade-in">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Especialistas Certificados em Turismo Europeu</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-fade-in">
            Transformamos o seu{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                sonho de viagem
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards]" />
            </span>{" "}
            em realidade
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in">
            Curadoria personalizada de viagens pela Europa. Experiências únicas, 
            autênticas e inesquecíveis com o suporte de especialistas locais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg shadow-elegant font-semibold group"
              onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
            >
              Iniciar Minha Viagem
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/50 text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg backdrop-blur-sm font-semibold"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Destinos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3 mx-auto">
                <Users className="w-6 h-6 text-brand-blue" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Clientes Satisfeitos</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3 mx-auto">
                <Globe className="w-6 h-6 text-brand-green" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/80">Países Europeus</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3 mx-auto">
                <Star className="w-6 h-6 text-brand-blue" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/80">Taxa de Satisfação</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3 mx-auto">
                <Award className="w-6 h-6 text-brand-green" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">5</div>
              <div className="text-sm text-white/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-brand-blue/20 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/4 left-20 w-16 h-16 bg-brand-green/20 rounded-full animate-pulse hidden lg:block" />
    </section>
  );
};

export default ModernHero;