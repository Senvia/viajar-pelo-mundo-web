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
  src: '/lovable-uploads/8fa3f1b7-114d-4719-9e3d-1a1b2f9f5451.png',
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
    <div className="w-16 h-16 bg-gradient-icons rounded-2xl flex items-center justify-center mb-6 shadow-lg">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
    <div className="text-2xl font-bold text-primary mb-6">{price}</div>
    <Button 
      className="w-full bg-brand-dark hover:bg-brand-dark/90 shadow-elegant font-semibold group text-white"
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
        onClick={() => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank')}
      />
      
      <ServiceHighlight
        icon={Calendar}
        title="Consultoria Imigrantes"
        description="NIF, NISS, vistos e toda documentação para morar em Portugal."
        price="Consulte valores"
        cta="Falar com Especialista"
        onClick={() => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank')}
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
        title="Planejamento de Viagem"
        description="Planeamento completo personalizado com material visual exclusivo. Especialista em Europa com processo dividido em 4 etapas."
        price="250€"
        cta="Começar Planeamento"
        onClick={() => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank')}
      />
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