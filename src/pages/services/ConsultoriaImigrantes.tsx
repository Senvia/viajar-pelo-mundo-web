import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  FileText, 
  CreditCard, 
  Building2, 
  GraduationCap, 
  MapPin, 
  Heart, 
  Clock,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  User,
  Briefcase,
  Users,
  ArrowRight,
  Star
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: CreditCard,
    title: "NIF - Número de Identificação Fiscal",
    description: "Similar ao CPF brasileiro, essencial para contratos de trabalho e atividades fiscais em Portugal."
  },
  {
    icon: Shield,
    title: "NISS - Número de Identificação da Segurança Social", 
    description: "Similar ao INSS brasileiro, necessário para contribuições da aposentadoria e contratos de trabalho."
  },
  {
    icon: Heart,
    title: "Utente SNS - Sistema Nacional de Saúde",
    description: "Registro no sistema público de saúde português (similar ao SUS), necessário para consultas médicas."
  },
  {
    icon: MapPin,
    title: "Morada Fiscal",
    description: "Enquadramento tributário português. Define que todos os rendimentos serão tributados como residente fiscal."
  },
  {
    icon: FileText,
    title: "Vistos e Títulos de Residência",
    description: "Vasta gama de vistos: Trabalho, Procura de Trabalho, Estudante, D2, Nómada Digital, D7, Golden Visa."
  },
  {
    icon: GraduationCap,
    title: "Validação/Equivalência de Estudos",
    description: "Reconhecimento acadêmico necessário para concorrer a oportunidades profissionais qualificadas."
  },
  {
    icon: Building2,
    title: "Criação de Empresas",
    description: "Constituição de empresas para expansão de marca ou novos negócios voltados ao mercado europeu."
  }
];

const processSteps = [
  {
    step: 1,
    title: "Reunião Inicial",
    description: "Análise do seu perfil, objetivos e documentação atual. Definição da estratégia personalizada.",
    duration: "45-60 minutos"
  },
  {
    step: 2,
    title: "Avaliação e Planeamento",
    description: "Elaboração do plano de ação detalhado com cronograma e lista de documentos necessários.",
    duration: "3-5 dias úteis"
  },
  {
    step: 3,
    title: "Preparação de Documentos",
    description: "Orientação na preparação, tradução e apostilamento de toda documentação necessária.",
    duration: "2-4 semanas"
  },
  {
    step: 4,
    title: "Submissão e Acompanhamento",
    description: "Submissão de pedidos junto às entidades portuguesas e acompanhamento de todo o processo.",
    duration: "Variável por documento"
  },
  {
    step: 5,
    title: "Suporte Pós-Aprovação",
    description: "Orientação para os primeiros passos em Portugal e integração completa no sistema português.",
    duration: "Suporte contínuo"
  }
];

const benefits = [
  "Assessoria para visto e documentação",
  "Orientação sobre processo de imigração", 
  "Suporte na procura de habitação",
  "Assistência na abertura de conta bancária",
  "Integração cultural e social",
  "Acompanhamento durante todo o processo"
];

const ConsultoriaImigrantes = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentStatus: "",
    documents: "",
    timeline: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Olá! Tenho interesse na Consultoria para Imigrantes em Portugal.

*Meus dados:*
Nome: ${formData.name || 'A preencher'}
Email: ${formData.email || 'A preencher'}
Telefone: ${formData.phone || 'A preencher'}
Situação atual: ${formData.currentStatus || 'A preencher'}
Documentos necessários: ${formData.documents || 'A preencher'}
Cronograma desejado: ${formData.timeline || 'A preencher'}

Mensagem adicional: ${formData.message || 'Gostaria de mais informações sobre os serviços.'}`;

    const whatsappUrl = `https://wa.me/message/YNHNAUM2BAAHD1?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Portugal Background */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/a5952301-3880-45c6-8585-347c21c37432.png"
            alt="Portugal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Especialistas em Imigração
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              Consultoria para
              <span className="block text-white">
                Imigrantes em Portugal
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              Suporte completo para quem quer emigrar para Portugal. 
              Desde documentação até integração no novo país, estamos contigo em cada passo da tua jornada.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-primary text-white hover:bg-primary/90 shadow-2xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Passport Image */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Quem Somos e
                  <span className="block text-primary">O Que Fazemos</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Somos especialistas em imigração para Portugal, oferecendo suporte integral 
                  para brasileiros que desejam emigrar ou que já se encontram no país e precisam 
                  regularizar a sua situação.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Quem Pode Contratar</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Brasileiros que desejam emigrar</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Imigrantes já em Portugal</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Profissionais qualificados</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Empreendedores</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Nossos Diferenciais</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-muted-foreground">Processo simplificado</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-muted-foreground">Acompanhamento personalizado</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-muted-foreground">Experiência especializada</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-muted-foreground">Suporte em português</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/870516ce-a5c4-4110-8eab-0797e67cd6d9.png"
                  alt="Documentação"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Documentos que Tratamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acompanhamento completo na obtenção de todos os documentos essenciais 
              para viver legalmente em Portugal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps with Finance Image */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10">
          <img 
            src="/lovable-uploads/b0847cb9-a5a0-4ccc-aeda-4f8c80b11681.png"
            alt="Processo"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Como Funciona
              <span className="block text-primary">Nosso Processo</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              Um processo estruturado e transparente para garantir o sucesso da sua imigração
            </p>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-8 items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  <Card className="flex-1 border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {step.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with SNS Image */}
      <section id="contact" className="py-32 bg-gradient-to-br from-primary/5 via-transparent to-muted/30">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vamos Conversar Sobre
              <span className="block text-primary">Teu Projeto</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Preenche o formulário e entraremos em contacto para uma consultoria personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8 border-0 shadow-2xl">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-3xl mb-4">Formulário de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-lg">Nome Completo *</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Teu nome completo" 
                          className="mt-2 h-12"
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-lg">Email *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="teu@email.com" 
                          className="mt-2 h-12"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-lg">Telefone/WhatsApp</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+351 9xx xxx xxx" 
                          className="mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentStatus" className="text-lg">Situação Atual</Label>
                        <select 
                          id="currentStatus"
                          name="currentStatus"
                          value={formData.currentStatus}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md mt-2"
                        >
                          <option value="">Seleciona...</option>
                          <option value="no-brasil">Ainda no Brasil</option>
                          <option value="em-portugal">Já em Portugal</option>
                          <option value="processo-visto">Em processo de visto</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="documents" className="text-lg">Documentos de Interesse</Label>
                      <select 
                        id="documents"
                        name="documents"
                        value={formData.documents}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md mt-2"
                      >
                        <option value="">Seleciona...</option>
                        <option value="nif-niss">NIF e NISS</option>
                        <option value="utente-sns">Utente SNS</option>
                        <option value="morada-fiscal">Morada Fiscal</option>
                        <option value="visto-trabalho">Visto de Trabalho</option>
                        <option value="criacao-empresa">Criação de Empresa</option>
                        <option value="validacao-estudos">Validação de Estudos</option>
                        <option value="todos">Todos os documentos</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-lg">Mensagem</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conta-nos mais sobre a tua situação e objetivos..."
                        rows={4}
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="button"
                      size="lg" 
                      className="w-full h-14 text-lg bg-gradient-primary hover:opacity-90 shadow-xl"
                      onClick={handleWhatsAppContact}
                    >
                      <MessageCircle className="mr-3 h-6 w-6" />
                      Enviar via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/0d43cfec-3a15-4c05-9581-8ebe25e4e9c2.png"
                  alt="SNS Portugal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <Card className="p-6 border-0 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  Contactos Diretos
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <span className="text-lg">+351 911 734 711</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-lg">contato@viajarpelomundo.pt</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>Seg-Sex: 9h-18h | Sáb: 9h-13h</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaImigrantes;