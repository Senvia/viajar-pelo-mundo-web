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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/lovable-uploads/ad9b424d-c4d1-4387-90df-0789a8a9e0c2.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  ✨ Nossa Jornada
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Sobre 
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent block">
                    Nós
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Uma história de <strong>paixão</strong>, <strong>experiência</strong> e <strong>dedicação</strong> 
                  em transformar sonhos de viagem em realidade.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fundada com Propósito</h3>
                    <p className="text-white/80">Em 2023, em Portugal</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Vanessa & Max Santos</h3>
                    <p className="text-white/80">Especialistas em viagens europeias</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-brand-blue hover:bg-white/90 shadow-elegant font-semibold px-8 py-4 text-lg"
                  onClick={() => document.getElementById('nossa-historia')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Descobrir Nossa História
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg"
                  onClick={() => window.open(`https://wa.me/351911734711?text=${encodeURIComponent('Olá! Gostaria de conhecer mais sobre os serviços da Viajar Pelo Mundo.')}`, '_blank')}
                >
                  Falar Conosco
                </Button>
              </div>
            </div>
            
            <div className="relative lg:block hidden">
              <div className="relative">
                <div 
                  className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500"
                  style={{ backgroundImage: "url('/lovable-uploads/b24f0e12-9456-4407-aa14-f00fb5483042.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-72 h-80 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/lovable-uploads/ad9b424d-c4d1-4387-90df-0789a8a9e0c2.png')" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                  <span className="text-2xl">✈️</span>
                </div>
                
                <div className="absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-brand-green/20 backdrop-blur-sm flex items-center justify-center animate-bounce">
                  <span className="text-xl">🌍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Deslize para conhecer</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section id="nossa-historia" className="py-20">
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