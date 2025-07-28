import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Celestina Rodrigues",
    avatar: "/lovable-uploads/ff15d855-f57f-4c4c-a478-37dee547efc0.png",
    rating: 5,
    content: "Quero agradecer toda a atenção recebida da agência Viajar Pelo Mundo foi uma experiência maravilhosa. Tudo que precisei foi feito com excelência, cada detalhe desde a cotação dentro do preço esperado, check in, vôo, programação e passeios, até acomodação. Viajar e conhecer lugares novos é ótimo, mas ser atendido e tratado como família tornou a viagem inesquecível um verdadeiro sonho. Parabéns Viajar Pelo Mundo vocês são incríveis."
  },
  {
    name: "Laura Simões",
    avatar: "/lovable-uploads/16fafa5b-4057-4f8a-829f-4ca313a17056.png",
    rating: 5,
    content: "Foi incrível! Quero agradecer todo seu compromisso com minha viagem e comigo! Deu tudo certo e não sei como teria sido sem sua ajuda! Parabéns pelo trabalho incrível!"
  },
  {
    name: "Alicia Arioli",
    avatar: "/lovable-uploads/08186e99-7aa2-431a-a20a-7661b8bd507e.png",
    rating: 5,
    content: "O trabalho de vocês é sensacional. Desde o início, todo o suporte e atenção fizeram a diferença. A ajuda que me deram durante a viagem foi muito boa. O valor cobrado foi super justo e condizente com todo o apoio que recebi. Eu gostei tanto que já indiquei vocês pra outras pessoas. Obrigado por tudo, vocês realmente fazem um trabalho incrível! 🙌"
  },
  {
    name: "Lauro Batista Sarmento",
    avatar: "/lovable-uploads/84033495-958a-4c27-93f2-33f630f23230.png",
    rating: 5,
    content: "Todos os meses eu viajo a trabalho, e durante muito tempo fiz por conta própria, até receber um orçamento muito melhor, diversos auxílios antes e durante a viagem e perceber que não há nada melhor do que contar com a ajuda profissional da equipa da viajar pelo mundo! Além de simpáticos e solícitos... O Max e a Vanessa entregam sempre um serviço muito superior ao mercado e ao que contratamos. Já são mais de 8 meses viajando com a assessoria deles e já tenho as próximas 2 planeadas com eles tbm. Super recomendo!!!"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para criar sua própria história de viagem?
          </p>
          <a 
            href="https://wa.me/message/YNHNAUM2BAAHD1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity shadow-elegant"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;