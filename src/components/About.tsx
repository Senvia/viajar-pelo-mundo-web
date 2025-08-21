import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Confiança",
    description: "Construímos relacionamentos duradouros baseados na transparência e honestidade"
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Selecionamos apenas os melhores parceiros e serviços para nossos clientes"
  },
  {
    icon: Shield,
    title: "Excelência",
    description: "Buscamos sempre superar expectativas em cada detalhe da viagem"
  },
  {
    icon: Users,
    title: "Honestidade",
    description: "Transparência total em preços, condições e recomendações de viagem"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Sobre a Viajar Pelo Mundo
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A Viajar Pelo Mundo é uma agência de turismo especializada em consultoria de viagens 
                personalizadas na Europa, com sede em Portugal. Atuamos com casais, famílias e 
                viajantes exigentes, oferecendo uma experiência única, segura e inesquecível em cada destino.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conectamos conhecimento, qualidade e os melhores serviços disponíveis no mercado 
                europeu para transformar sonhos em realidade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-green/10 border border-brand-blue/20">
                <h3 className="font-bold text-secondary mb-2">Nossa Missão</h3>
                <p className="text-sm text-muted-foreground">
                  Facilitar a vida do viajante moderno oferecendo um planeamento completo e exclusivo 
                  para que aproveite ao máximo cada momento da viagem com tranquilidade e segurança.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-gradient-to-br from-brand-green/10 to-brand-blue/10 border border-brand-green/20">
                <h3 className="font-bold text-secondary mb-2">Nossa Visão</h3>
                <p className="text-sm text-muted-foreground">
                  Ser referência no mercado europeu como especialistas em consultoria de viagens, 
                  reconhecidos pela excelência, confiança e atendimento personalizado.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary text-center mb-8">
              Nossos Valores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-icons flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-secondary mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center pt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
                <Shield className="h-4 w-4 text-brand-blue" />
                <span>Cadastur: 46.600.374/0001-49 | RNAVT 3301</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;