import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    name: "Celestina Rodrigues",
    quote: "Quero agradecer toda a atenção recebida da agência Viajar Pelo Mundo foi uma experiência maravilhosa. Tudo que precisei foi feito com excelência, cada detalhe desde a cotação dentro do preço esperado, check in, vôo, programação e passeios, até acomodação. Viajar e conhecer lugares novos é ótimo, mas ser atendido e tratado como família tornou a viagem inesquecível um verdadeiro sonho. Parabéns Viajar Pelo Mundo vocês são incríveis.",
    designation: "Cliente Satisfeita",
    src: "/lovable-uploads/f64ae3f8-469d-4622-94b1-53e6d5ec29dc.png"
  },
  {
    name: "Laura Simões",
    quote: "Foi incrível! Quero agradecer todo seu compromisso com minha viagem e comigo! Deu tudo certo e não sei como teria sido sem sua ajuda! Parabéns pelo trabalho incrível!",
    designation: "Viajante Feliz",
    src: "/lovable-uploads/5beeea5c-5169-4c30-9a57-b58da3e4980a.png"
  },
  {
    name: "Alicia Arioli",
    quote: "O trabalho de vocês é sensacional. Desde o início, todo o suporte e atenção fizeram a diferença. A ajuda que me deram durante a viagem foi muito boa. O valor cobrado foi super justo e condizente com todo o apoio que recebi. Eu gostei tanto que já indiquei vocês pra outras pessoas. Obrigado por tudo, vocês realmente fazem um trabalho incrível!",
    designation: "Recomenda a Agência",
    src: "/lovable-uploads/cdfe011c-797b-4d1c-9adc-99a7888a1f21.png"
  },
  {
    name: "Lauro Batista Sarmento",
    quote: "Todos os meses eu viajo a trabalho, e durante muito tempo fiz por conta própria, até receber um orçamento muito melhor, diversos auxílios antes e durante a viagem e perceber que não há nada melhor do que contar com a ajuda profissional da equipa da viajar pelo mundo! Além de simpáticos e solícitos... O Max e a Vanessa entregam sempre um serviço muito superior ao mercado e ao que contratamos. Já são mais de 8 meses viajando com a assessoria deles e já tenho as próximas 2 planeadas com eles tbm. Super recomendo!!!",
    designation: "Viajante Corporativo",
    src: "/lovable-uploads/57fb62cd-5b0b-4d82-8416-2ced892d5736.png"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Histórias reais de viajantes que transformaram seus sonhos em realidade conosco
          </p>
        </div>
        
        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "hsl(var(--secondary))",
              designation: "hsl(var(--muted-foreground))",
              testimony: "hsl(var(--foreground))",
              arrowBackground: "hsl(var(--primary))",
              arrowForeground: "hsl(var(--primary-foreground))",
              arrowHoverBackground: "hsl(var(--primary)/0.8)",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "18px",
            }}
          />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para criar sua própria história de viagem?
          </p>
          <a 
            href="https://wa.me/message/YNHNAUM2BAAHD1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-lg hover:bg-brand-dark/90 transition-opacity shadow-elegant"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;