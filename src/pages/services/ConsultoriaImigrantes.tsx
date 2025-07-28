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
  Briefcase
} from "lucide-react";
import { useState } from "react";

const documents = [
  {
    icon: CreditCard,
    title: "NIF - Número de Identificação Fiscal",
    description: "Similar ao CPF brasileiro, essencial para contratos de trabalho e atividades fiscais em Portugal.",
    importance: "Obrigatório para trabalhar"
  },
  {
    icon: Shield,
    title: "NISS - Número de Identificação da Segurança Social",
    description: "Similar ao INSS brasileiro, necessário para contribuições da aposentadoria e contratos de trabalho.",
    importance: "Essencial para trabalho"
  },
  {
    icon: Heart,
    title: "Utente SNS - Sistema Nacional de Saúde",
    description: "Registro no sistema público de saúde português (similar ao SUS), necessário para consultas médicas.",
    importance: "Acesso à saúde pública"
  },
  {
    icon: MapPin,
    title: "Morada Fiscal",
    description: "Enquadramento tributário português. Define que todos os rendimentos serão tributados como residente fiscal.",
    importance: "Residência fiscal"
  },
  {
    icon: FileText,
    title: "Vistos e Títulos de Residência",
    description: "Vasta gama de vistos: Trabalho, Procura de Trabalho, Estudante, D2 (empreendedores), Nómada Digital, D7, Golden Visa.",
    importance: "Legalização da estadia"
  },
  {
    icon: GraduationCap,
    title: "Validação/Equivalência de Estudos",
    description: "Reconhecimento acadêmico necessário para concorrer a oportunidades profissionais qualificadas.",
    importance: "Reconhecimento profissional"
  },
  {
    icon: Building2,
    title: "Criação de Empresas",
    description: "Constituição de empresas para expansão de marca ou novos negócios voltados ao mercado europeu.",
    importance: "Empreendedorismo"
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
    icon: Heart,
    title: "Famílias",
    description: "Famílias completas que desejam imigrar para Portugal com toda documentação em ordem."
  },
  {
    icon: Building2,
    title: "Empreendedores",
    description: "Empresários que desejam expandir negócios ou criar empresas no mercado europeu."
  }
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

      {/* Who Can Hire */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quem Pode Contratar Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground">
              Atendemos diferentes perfis de imigrantes com soluções personalizadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoCanHire.map((profile, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <profile.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{profile.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {profile.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
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
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <doc.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {doc.importance}
                      </Badge>
                    </div>
                  </div>
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
              Como Funciona o Processo
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

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Valores e Formas de Orçamento
            </h2>
            <p className="text-xl text-muted-foreground">
              Preços transparentes e opções flexíveis para cada necessidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-2 border-primary/20">
              <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-1 text-sm">
                Mais Popular
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2">Pacote Completo</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">€799</div>
                <CardDescription>Todos os documentos principais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {["NIF", "NISS", "Utente SNS", "Morada Fiscal", "Consultoria inicial gratuita", "Acompanhamento durante 6 meses"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Escolher Pacote
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Documentos Avulsos</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">€150-€300</div>
                <CardDescription>Por documento individual</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {["Escolha específica de documentos", "Processo individualizado", "Consultoria incluída", "Suporte durante o processo"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Serviços Premium</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">€1.200+</div>
                <CardDescription>Criação de empresas e vistos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {["Visto de trabalho/investimento", "Criação de empresa", "Validação de estudos", "Acompanhamento VIP", "Suporte 24/7"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Consultar Valores
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30">
              <h3 className="text-xl font-bold mb-2">Consultoria Inicial Gratuita</h3>
              <p className="text-muted-foreground mb-4">
                Avaliação completa do seu caso sem compromisso
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90"
                onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
              >
                Agendar Consultoria Gratuita
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
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
                        <option value="pacote-completo">Pacote Completo</option>
                        <option value="nif-niss">NIF e NISS</option>
                        <option value="utente-sns">Utente SNS</option>
                        <option value="visto-trabalho">Visto de Trabalho</option>
                        <option value="criacao-empresa">Criação de Empresa</option>
                        <option value="validacao-estudos">Validação de Estudos</option>
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
                      <Button 
                        type="button"
                        variant="outline" 
                        size="lg" 
                        className="w-full"
                        onClick={() => window.location.href = `mailto:contato@exemplo.com?subject=Consultoria Imigrantes&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nSituação: ${formData.currentStatus}\nDocumentos: ${formData.documents}\nCronograma: ${formData.timeline}\nMensagem: ${formData.message}`)}`}
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Enviar por Email
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                  <h3 className="text-xl font-bold mb-4">Por que Escolher-nos?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Experiência Comprovada:</strong> Mais de 500 clientes atendidos com sucesso
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Processo Transparente:</strong> Acompanhamento em tempo real de todo o processo
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Suporte Especializado:</strong> Equipa especializada em imigração para Portugal
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Garantia de Resultado:</strong> Não cobramos se não conseguirmos o documento
                      </div>
                    </div>
                  </div>
                </Card>

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