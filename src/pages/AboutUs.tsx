import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Heart, Target, Eye, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Nossa História
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nós
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Conectando sonhos a experiências inesquecíveis na Europa
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Nossa História
              </h2>
              <p className="text-xl text-muted-foreground">
                Uma jornada que começou com um sonho e se transformou em realidade
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  A <strong>Viajar Pelo Mundo</strong> nasceu de forma orgânica, a partir da vivência pessoal do casal <strong>Vanessa Silva e Max Santos</strong>, que decidiram mudar-se para Portugal em busca de novos caminhos.
                </p>
                <p className="text-lg leading-relaxed">
                  Ao ajudarem amigos e familiares a planejarem suas viagens e mudanças para a Europa, perceberam o quanto o conhecimento, a atenção aos detalhes e o suporte humanizado faziam diferença na experiência dos viajantes.
                </p>
                <p className="text-lg leading-relaxed">
                  O que começou como um favor, rapidamente se transformou em uma paixão — e, mais tarde, em uma empresa sólida, que une propósito, profissionalismo e excelência.
                </p>
              </div>
              
              <div className="space-y-4">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center"
                  style={{ backgroundImage: "url('/lovable-uploads/ad9b424d-c4d1-4387-90df-0789a8a9e0c2.png')" }}
                >
                  <div className="h-full bg-gradient-to-t from-black/30 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-semibold">Vanessa & Max no Porto, Portugal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center"
                  style={{ backgroundImage: "url('/lovable-uploads/b24f0e12-9456-4407-aa14-f00fb5483042.png')" }}
                >
                  <div className="h-full bg-gradient-to-t from-black/30 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-semibold">Explorando destinos europeus</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <p className="text-lg leading-relaxed">
                  Vanessa se especializou como <strong>travel designer</strong>, e juntos, decidiram investir em formações e parcerias com fornecedores confiáveis, construindo uma estrutura de atendimento personalizada e especializada.
                </p>
                <p className="text-lg leading-relaxed">
                  Oficialmente, a <strong>Viajar Pelo Mundo foi fundada em 2023</strong>, em Portugal, com o objetivo de atender famílias que desejam realizar o sonho de viajar para a Europa com planejamento completo e curadoria de experiências.
                </p>
                <div className="bg-brand-blue/10 p-6 rounded-xl">
                  <p className="text-lg leading-relaxed font-medium text-brand-blue">
                    Mais recentemente, a empresa expandiu seu portfólio com o projeto <strong>Portugal Essence</strong>, voltado ao turismo de luxo e experiências sofisticadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Missão, Visão e Valores
              </h2>
              <p className="text-xl text-muted-foreground">
                Os pilares que guiam nossa jornada
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">Propósito</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conectar nosso conhecimento e experiência no setor turístico com acesso aos melhores serviços do mercado, entregando aos nossos clientes um atendimento de excelência, focado em qualidade e personalização.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tornar-nos referência em curadoria de viagens no mercado europeu, sendo reconhecidos pela excelência no atendimento e pelo profundo conhecimento dos destinos que oferecemos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <Target className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">Valores</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trabalhamos com base em princípios cristãos e valores sólidos como confiança, honestidade, excelência e qualidade. Acreditamos que servir com integridade é a melhor forma de honrar nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Card className="p-8 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 border-brand-blue/20 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Users className="h-12 w-12 text-brand-blue" />
                  <h3 className="text-2xl font-bold text-secondary">Nossa Missão</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Proporcionar tranquilidade, segurança e experiências marcantes para quem deseja conhecer Portugal e outros destinos europeus. A Viajar Pelo Mundo mantém como pilares a confiança, honestidade e excelência, servindo famílias, casais e viajantes individuais que desejam viver a Europa de forma segura, prática e encantadora.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90"
                  onClick={() => window.open(`https://wa.me/351911734711?text=${encodeURIComponent('Olá! Gostaria de conhecer mais sobre os serviços da Viajar Pelo Mundo.')}`, '_blank')}
                >
                  Fale Conosco
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portugal Essence */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-brand-green/20 text-brand-green border-brand-green/30">
              Projeto Especial
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Portugal Essence
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nosso projeto voltado ao turismo de luxo, oferecendo experiências sofisticadas, autênticas e inesquecíveis em território português para o público de alto padrão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90"
                onClick={() => window.open(`https://wa.me/351911734711?text=${encodeURIComponent('Olá! Gostaria de conhecer mais sobre o Portugal Essence - turismo de luxo.')}`, '_blank')}
              >
                Conheça o Portugal Essence
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Proposta
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUs;