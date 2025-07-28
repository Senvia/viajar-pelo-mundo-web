import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, MapPin, Calendar, Euro } from 'lucide-react';

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
}

const travelContent: MediaContent = {
  src: '/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png',
  background: '/lovable-uploads/50a145af-5d83-420a-814c-8f6f70ed394c.png',
  title: 'Viajar Pelo Mundo',
  date: 'Especialistas em Europa',
  scrollToExpand: 'Role para Descobrir',
};

const ServiceHighlight = ({ icon: Icon, title, description, price, cta, onClick }: {
  icon: any;
  title: string;
  description: string;
  price: string;
  cta: string;
  onClick: () => void;
}) => (
  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
    <div className="text-2xl font-bold text-primary mb-6">{price}</div>
    <Button 
      className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant font-semibold group"
      onClick={onClick}
    >
      {cta}
      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Button>
  </div>
);

const ServiceContent = () => (
  <div className="max-w-7xl mx-auto space-y-16">
    {/* Header */}
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
        <Star className="w-4 h-4" />
        <span className="text-sm font-medium">Serviços Especializados</span>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ServiceHighlight
        icon={MapPin}
        title="Serviços Avulsos"
        description="Passagens, hospedagem, transfer, seguro e tudo que precisa pontualmente."
        price="Orçamento personalizado"
        cta="Solicitar Orçamento"
        onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
      />
      
      <ServiceHighlight
        icon={Calendar}
        title="Consultoria Imigrantes"
        description="NIF, NISS, vistos e toda documentação para morar em Portugal."
        price="Consulte valores"
        cta="Falar com Especialista"
        onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
      />
      
      <ServiceHighlight
        icon={Star}
        title="Pacotes de Viagem"
        description="Portugal Essence - 7 dias/6 noites com experiências únicas no Porto."
        price="3.510€ para 2 adultos"
        cta="Reservar Agora"
        onClick={() => window.open('https://buy.stripe.com/fZufZg77H3La7iY7Fl87K0b', '_blank')}
      />
      
      <ServiceHighlight
        icon={Euro}
        title="Consultoria Europa"
        description="Planeamento completo personalizado com material visual exclusivo."
        price="250€"
        cta="Começar Planeamento"
        onClick={() => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank')}
      />
    </div>

    {/* Detailed Information */}
    <div className="grid lg:grid-cols-2 gap-12 mt-20">
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-secondary">
          Por que escolher a Viajar Pelo Mundo?
        </h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-2">Experiência Comprovada</h4>
              <p className="text-muted-foreground">5 anos no mercado com mais de 500 clientes satisfeitos e 98% de taxa de satisfação.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-2">Especialistas em Europa</h4>
              <p className="text-muted-foreground">Conhecimento profundo de 15+ países europeus com parcerias locais exclusivas.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-2">Suporte 24/7</h4>
              <p className="text-muted-foreground">Acompanhamento antes, durante e depois da viagem com suporte via WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-secondary mb-6">
          Pronto para começar sua jornada?
        </h3>
        
        <p className="text-lg text-muted-foreground mb-8">
          Nossa consultoria inicial é gratuita. Vamos entender suas necessidades 
          e criar a solução perfeita para você.
        </p>
        
        <div className="space-y-4">
          <Button 
            size="lg"
            className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant font-semibold group"
            onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
          >
            Consulta Gratuita no WhatsApp
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="w-full border-2 font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Formulário de Contacto
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const TravelScrollExpansion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={travelContent.src}
        bgImageSrc={travelContent.background}
        title={travelContent.title}
        date={travelContent.date}
        scrollToExpand={travelContent.scrollToExpand}
        textBlend
      >
        <ServiceContent />
      </ScrollExpandMedia>
    </div>
  );
};

export default TravelScrollExpansion;