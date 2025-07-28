import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-elegant border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between py-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-elegant">
            <img 
              src="/lovable-uploads/0b201daa-3ae5-430f-97a8-689420a140ac.png" 
              alt="Viajar Pelo Mundo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}>
              Viajar Pelo Mundo
            </h2>
            <p className={`text-xs transition-colors ${
              isScrolled ? 'text-muted-foreground' : 'text-white/80'
            }`}>
              Especialistas em Viagens Europeias
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')}
            className={`font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Sobre Nós
          </button>
          
          <div className="relative group">
            <button className={`font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1 ${
              isScrolled 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/90 hover:text-white'
            }`}>
              Serviços
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-elegant border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-3">
                <button 
                  onClick={() => window.location.href = '/servicos/planeamento'}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors hover:text-primary"
                >
                  🎯 Planeamento Personalizado
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/passagens'}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors hover:text-primary"
                >
                  ✈️ Passagens & Hospedagem
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/atividades'}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors hover:text-primary"
                >
                  🗺️ Atividades Turísticas
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/apoio'}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors hover:text-primary"
                >
                  🛡️ Serviços de Apoio
                </button>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className={`font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Contacto
          </button>
        </nav>

        {/* CTA Button */}
        <Button 
          className="hidden lg:inline-flex bg-gradient-primary hover:opacity-90 shadow-elegant font-semibold px-6 py-3 transition-all duration-300 hover:scale-105"
          onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
        >
          Consultoria Gratuita
        </Button>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled 
              ? 'text-secondary hover:bg-muted' 
              : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/50 shadow-elegant">
          <div className="container py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Sobre Nós
            </button>
            
            <div className="space-y-3">
              <div className="text-secondary font-semibold">Serviços</div>
              <div className="pl-4 space-y-3">
                <button 
                  onClick={() => window.location.href = '/servicos/planeamento'}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  🎯 Planeamento Personalizado
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/passagens'}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  ✈️ Passagens & Hospedagem
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/atividades'}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  🗺️ Atividades Turísticas
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/apoio'}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  🛡️ Serviços de Apoio
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Contacto
            </button>
            
            <Button 
              className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant font-semibold"
              onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
            >
              Consultoria Gratuita
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;