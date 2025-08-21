import { Plane, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/0b201daa-3ae5-430f-97a8-689420a140ac.png" 
                  alt="Viajar Pelo Mundo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold">Viajar Pelo Mundo</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Transformamos o seu sonho de viagem em realidade. Especialistas em consultoria 
              de viagens personalizadas na Europa.
            </p>
            <div className="text-xs text-secondary-foreground/60">
              Cadastur: 46.600.374/0001-49<br />
              RNAVT 3301
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-brand-blue transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/sobre-nos" className="hover:text-brand-blue transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/servicos/imigrantes" className="hover:text-brand-blue transition-colors">
                  Consultoria para Imigrantes
                </a>
              </li>
              <li>
                <a href="/servicos/pacotes" className="hover:text-brand-blue transition-colors">
                  Pacotes de Viagens
                </a>
              </li>
              <li>
                <a href="/servicos/consultoria-europa" className="hover:text-brand-blue transition-colors">
                  Planejamento de Viagem
                </a>
              </li>
              <li>
                <a href="/servicos/avulsos" className="hover:text-brand-blue transition-colors">
                  Serviços Avulsos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-blue" />
                <a 
                  href="https://wa.me/351911734711" 
                  className="hover:text-brand-blue transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +351 911 734 711
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-blue" />
                <a 
                  href="mailto:viajarparaeuropaoficial@gmail.com" 
                  className="hover:text-brand-blue transition-colors"
                >
                  viajarparaeuropaoficial@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-blue" />
                <span>Portugal</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-brand-blue" />
                <div className="space-y-1">
                  <a 
                    href="https://www.instagram.com/viajarparaeuropa/" 
                    className="block hover:text-brand-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @viajarparaeuropa
                  </a>
                  <a 
                    href="https://www.instagram.com/travelagency_viajarpelomundo/" 
                    className="block hover:text-brand-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @travelagency_viajarpelomundo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 Viajar Pelo Mundo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-brand-blue transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors">
                Política de Cancelamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;