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
  Users
} from "lucide-react";
import { useState } from "react";

const documents = [
  {
    icon: CreditCard,
    title: "NIF - Número de Identificação Fiscal",
    description: "Similar ao CPF brasileiro, essencial para contratos de trabalho e atividades fiscais em Portugal.",
    image: "/lovable-uploads/b0847cb9-a5a0-4ccc-aeda-4f8c80b11681.png"
  },
  {
    icon: Shield,
    title: "NISS - Número de Identificação da Segurança Social",
    description: "Similar ao INSS brasileiro, necessário para contribuições da aposentadoria e contratos de trabalho.",
    image: "/lovable-uploads/b0847cb9-a5a0-4ccc-aeda-4f8c80b11681.png"
  },
  {
    icon: Heart,
    title: "Utente SNS - Sistema Nacional de Saúde",
    description: "Registro no sistema público de saúde português (similar ao SUS), necessário para consultas médicas.",
    image: "/lovable-uploads/0d43cfec-3a15-4c05-9581-8ebe25e4e9c2.png"
  },
  {
    icon: MapPin,
    title: "Morada Fiscal",
    description: "Enquadramento tributário português. Define que todos os rendimentos serão tributados como residente fiscal.",
    image: "/lovable-uploads/b0847cb9-a5a0-4ccc-aeda-4f8c80b11681.png"
  },
  {
    icon: FileText,
    title: "Vistos e Títulos de Residência",
    description: "Vasta gama de vistos: Trabalho, Procura de Trabalho, Estudante, D2 (empreendedores), Nómada Digital, D7, Golden Visa.",
    image: "/lovable-uploads/870516ce-a5c4-4110-8eab-0797e67cd6d9.png"
  },
  {
    icon: GraduationCap,
    title: "Validação/Equivalência de Estudos",
    description: "Reconhecimento acadêmico necessário para concorrer a oportunidades profissionais qualificadas.",
    image: "/lovable-uploads/870516ce-a5c4-4110-8eab-0797e67cd6d9.png"
  },
  {
    icon: Building2,
    title: "Criação de Empresas",
    description: "Constituição de empresas para expansão de marca ou novos negócios voltados ao mercado europeu.",
    image: "/lovable-uploads/b0847cb9-a5a0-4ccc-aeda-4f8c80b11681.png"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Reunião Inicial Gratuita",
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

const whoCanHire = [
  {
    icon: User,
    title: "Brasileiros em Portugal",
    description: "Já residem em Portugal e precisam regularizar documentação ou obter novos documentos."
  },
  {
    icon: Briefcase,
    title: "Profissionais Qualificados",
    description: "Profissionais com ensino superior que desejam trabalhar em Portugal com reconhecimento acadêmico."
  },
  {
    icon: Users,
    title: "Famílias",
    description: "Famílias completas que desejam imigrar para Portugal com toda documentação em ordem."
  },
  {
    icon: Building2,
    title: "Empreendedores",
    description: "Empresários que desejam expandir negócios ou criar empresas no mercado europeu."
  }
];

const benefits = [
  "Assessoria para visto e documentação",
  "Orientação sobre processo de imigração", 
  "Suporte na procura de habitação",
  "Assistência na abertura de conta bancária",
  "Integração cultural e social",
  "Acompanhamento durante todo o processo",
  "Suporte especializado e personalizado",
  "Orientação sobre direitos e deveres"
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
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Especialistas em Imigração
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consultoria para Imigrantes em Portugal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Suporte completo para quem quer emigrar para Portugal. 
              Desde documentação até integração no novo país, estamos contigo em cada passo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Consultoria Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
              >
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Descrição Completa do Serviço
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A nossa consultoria para imigrantes é um serviço especializado que oferece suporte integral 
              para brasileiros que desejam emigrar para Portugal ou que já se encontram no país e precisam 
              regularizar a sua situação.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Quem Pode Contratar</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Brasileiros que desejam emigrar para Portugal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Imigrantes já em Portugal com documentação pendente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Profissionais qualificados que necessitam validação</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Empreendedores que desejam criar empresas</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Principais Benefícios</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Processo simplificado e orientado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Acompanhamento personalizado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Experiência e conhecimento especializado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Suporte em português do Brasil</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Documentos que Tratamos
            </h2>
            <p className="text-xl text-muted-foreground">
              Acompanhamento completo na obtenção de todos os documentos essenciais para viver legalmente em Portugal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <doc.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {doc.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Etapas do Processo
            </h2>
            <p className="text-xl text-muted-foreground">
              Um processo estruturado e transparente para garantir o sucesso da sua imigração
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {step.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Entre em Contacto Connosco
              </h2>
              <p className="text-xl text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contacto para uma consultoria personalizada
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-4">Formulário de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone/WhatsApp</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+351 9xx xxx xxx" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentStatus">Situação Atual</Label>
                        <select 
                          id="currentStatus"
                          name="currentStatus"
                          value={formData.currentStatus}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md"
                        >
                          <option value="">Selecione...</option>
                          <option value="no-brasil">Ainda no Brasil</option>
                          <option value="em-portugal">Já em Portugal</option>
                          <option value="processo-visto">Em processo de visto</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="documents">Documentos de Interesse</Label>
                      <select 
                        id="documents"
                        name="documents"
                        value={formData.documents}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="">Selecione...</option>
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
                      <Label htmlFor="timeline">Cronograma Desejado</Label>
                      <select 
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="">Selecione...</option>
                        <option value="urgente">Urgente (até 1 mês)</option>
                        <option value="3-meses">Até 3 meses</option>
                        <option value="6-meses">Até 6 meses</option>
                        <option value="flexivel">Flexível</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem Adicional</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-nos mais sobre sua situação e objetivos..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-4">
                      <Button 
                        type="button"
                        size="lg" 
                        className="w-full bg-gradient-primary hover:opacity-90"
                        onClick={handleWhatsAppContact}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Enviar via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contactos Diretos
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <span>WhatsApp: +351 911 734 711</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>Email: contato@viajarpelomundo.pt</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span>Seg-Sex: 9h-18h | Sáb: 9h-13h</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">O que Incluímos</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaImigrantes;