import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TravelInteractiveBentoGallery = () => {
  const travelMediaItems = [
    {
      id: 1,
      type: "image",
      title: "Portugal Essence",
      desc: "7 dias no Porto com experiências únicas",
      url: "/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png",
      span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-3",
    },
    {
      id: 2,
      type: "image",
      title: "Londres Clássica",
      desc: "Big Ben e charme britânico",
      url: "/lovable-uploads/50a145af-5d83-420a-814c-8f6f70ed394c.png",
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Planeamento Completo",
      desc: "Consultoria especializada",
      url: "/lovable-uploads/604537d9-c3eb-430c-9d01-820b1bec9336.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Experiências Únicas",
      desc: "Momentos inesquecíveis na Europa",
      url: "/lovable-uploads/2da541d5-fe43-4e23-bf3e-d0a2793efe31.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "Ruas Coloridas",
      desc: "Arte e cultura vibrante europeia",
      url: "/lovable-uploads/fda1f478-5e7a-4434-8926-5f0330501e3a.png",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "Viagem dos Sonhos",
      desc: "Aventuras personalizadas",
      url: "/lovable-uploads/878dda6e-16ac-446d-bb74-dec63248b020.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 7,
      type: "image",
      title: "Preparação da Viagem",
      desc: "Tudo organizado nos detalhes",
      url: "/lovable-uploads/5df4c253-f819-4e4f-a21c-a865b6ac3605.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 8,
      type: "image",
      title: "Gastronomia Local",
      desc: "Sabores autênticos da Europa",
      url: "/lovable-uploads/00cb83f8-4b51-4af0-9af8-9ccbcd3b0df3.png",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <InteractiveBentoGallery
          mediaItems={travelMediaItems}
          title="Galeria de Destinos e Experiências"
          description="Explore nossa consultoria visual de viagens pela Europa. Clique, arraste e descubra."
        />
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">
              Pronto para criar sua própria galeria de memórias?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada imagem representa uma experiência real de nossos clientes. 
              Sua próxima viagem pode estar nesta galeria.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-dark hover:bg-brand-dark/90 shadow-elegant px-8 py-4 text-lg font-semibold group text-white"
                onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
              >
                Planejar Minha Viagem
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Todos os Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInteractiveBentoGallery;