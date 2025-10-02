import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Contact = () => {
  const handleContactClick = () => {
    window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pronto para planejar sua próxima aventura? Estamos aqui para ajudar!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-icons flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-secondary">WhatsApp</p>
                  <a 
                    href="https://wa.me/351911734711" 
                    className="text-muted-foreground hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +351 911 734 711
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-icons flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-secondary">Email</p>
                  <a 
                    href="mailto:viajarparaeuropaoficial@gmail.com" 
                    className="text-muted-foreground hover:text-primary"
                  >
                    viajarparaeuropaoficial@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-icons flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-secondary">Localização</p>
                  <a 
                    href="https://g.co/kgs/WCoEWnF" 
                    className="text-muted-foreground hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portugal
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-icons flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-secondary">Instagram</p>
                  <div className="space-y-1">
                    <a 
                      href="https://www.instagram.com/viajarparaeuropa/" 
                      className="block text-muted-foreground hover:text-primary text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @viajarparaeuropa
                    </a>
                    <a 
                      href="https://www.instagram.com/travelagency_viajarpelomundo/" 
                      className="block text-muted-foreground hover:text-primary text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @travelagency_viajarpelomundo
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Primeira Consulta */}
          <Card className="shadow-card bg-brand-dark text-white flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Primeira Consulta</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center">
              <p className="text-white/90 text-lg mb-8">
                Agende uma conversa sem compromisso para planejarmos sua viagem dos sonhos
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full"
                onClick={handleContactClick}
              >
                Agendar Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;