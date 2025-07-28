import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, FileText, MapPin, Users } from "lucide-react";

const ModernHero = () => {
  const services = [
    {
      icon: Plane,
      title: "Serviços Avulsos",
      description: "Passagens, hospedagem, transfer e mais",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Consultoria para Imigrantes",
      description: "NIF, NISS, vistos e documentação",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Pacotes de Viagens",
      description: "Portugal Essence e roteiros completos",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Planeamento completo Europa - 250€",
      color: "from-orange-500 to-orange-600"
    }
  ];

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex items-center min-h-screen py-32">
        <div className="max-w-6xl w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 animate-fade-in">
            <Plane className="w-4 h-4" />
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
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed animate-fade-in">
            4 serviços especializados para todas as suas necessidades de viagem e imigração na Europa. 
            Desde serviços pontuais até planeamento completo.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg shadow-elegant font-semibold group"
              onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
            >
              Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/50 text-black bg-white/90 hover:bg-white hover:text-secondary px-8 py-4 text-lg backdrop-blur-sm font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Todos os Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/80">Países Europeus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/80">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
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
    </section>
  );
};

export default ModernHero;