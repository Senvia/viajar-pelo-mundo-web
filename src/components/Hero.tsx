import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transformamos o seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              sonho de viagem
            </span>{" "}
            em realidade
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Especialistas em consultoria de viagens personalizadas na Europa. 
            Oferecemos experiências únicas, seguras e inesquecíveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg shadow-elegant"
              onClick={() => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank')}
            >
              Agendar Consultoria Gratuita
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-black bg-white/90 hover:bg-white hover:text-secondary px-8 py-4 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conhecer Serviços
            </Button>
          </div>
          
          <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">500+</div>
                <div className="text-sm text-white/80">Viagens Realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-green">15+</div>
                <div className="text-sm text-white/80">Países na Europa</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">98%</div>
                <div className="text-sm text-white/80">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;