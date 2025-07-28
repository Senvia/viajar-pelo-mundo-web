import { useState, useEffect } from "react";

const TravelGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png",
      title: "Paris, França",
      description: "Torre Eiffel e arquitetura histórica"
    },
    {
      src: "/lovable-uploads/50a145af-5d83-420a-814c-8f6f70ed394c.png",
      title: "Londres, Inglaterra", 
      description: "Big Ben e o charme britânico"
    },
    {
      src: "/lovable-uploads/fda1f478-5e7a-4434-8926-5f0330501e3a.png",
      title: "Ruas Coloridas da Europa",
      description: "Arte e cultura vibrante"
    },
    {
      src: "/lovable-uploads/2da541d5-fe43-4e23-bf3e-d0a2793efe31.png",
      title: "Momentos Inesquecíveis",
      description: "Vivências autênticas"
    },
    {
      src: "/lovable-uploads/878dda6e-16ac-446d-bb74-dec63248b020.png",
      title: "Experiências Únicas",
      description: "Aventuras personalizadas"
    }
  ];

  const travelItems = [
    {
      src: "/lovable-uploads/604537d9-c3eb-430c-9d01-820b1bec9336.png",
      title: "Planeamento Completo"
    },
    {
      src: "/lovable-uploads/5df4c253-f819-4e4f-a21c-a865b6ac3605.png", 
      title: "Tudo Organizado"
    },
    {
      src: "/lovable-uploads/00cb83f8-4b51-4af0-9af8-9ccbcd3b0df3.png",
      title: "Experiências Gastronómicas"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Descubra a Europa Connosco
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Uma curadoria visual dos destinos mais deslumbrantes e experiências 
            autênticas que esperam por si na Europa
          </p>
        </div>

        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Featured Image - Larger */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl shadow-elegant">
            <div className="aspect-[16/10] relative">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {images[currentImageIndex].title}
                </h3>
                <p className="text-lg text-white/90">
                  {images[currentImageIndex].description}
                </p>
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Travel Items Grid */}
          <div className="space-y-6">
            {travelItems.map((item, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gallery - Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'ring-4 ring-primary scale-105' 
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-primary/20' 
                    : 'bg-black/20 group-hover:bg-black/10'
                }`} />
                
                {/* Title overlay for mobile */}
                <div className="absolute bottom-2 left-2 right-2 md:hidden">
                  <div className="text-white text-xs font-medium truncate">
                    {image.title}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para criar suas próprias memórias europeias?
          </p>
          <button 
            onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-elegant hover:scale-105 font-semibold"
          >
            Planeie a Sua Viagem
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelGallery;