import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  variant?: 'default' | 'light';
}

const Header = ({ variant = 'default' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force scrolled state for light variant
  const shouldShowLightStyle = variant === 'light' || isScrolled;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // Altura aproximada do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowLightStyle 
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
              shouldShowLightStyle ? 'text-secondary' : 'text-white'
            }`}>
              Viajar Pelo Mundo
            </h2>
            <p className={`text-xs transition-colors ${
              shouldShowLightStyle ? 'text-muted-foreground' : 'text-white/80'
            }`}>
              Especialistas em Viagens
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => window.location.href = '/sobre-nos'}
            className={`font-medium transition-all duration-300 hover:scale-105 ${
              shouldShowLightStyle 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Sobre Nós
          </button>
          
          <div className="relative group">
            <button className={`font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1 ${
              shouldShowLightStyle 
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
                  onClick={() => window.location.href = '/servicos/consultoria-viagens'}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors hover:text-primary"
                >
                  Planejamento de Viagem
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/avulsos'}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors hover:text-primary"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/pacotes'}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors hover:text-primary"
                >
                  Pacotes de Viagens
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/imigrantes'}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors hover:text-primary"
                >
                  Consultoria para Imigrantes
                </button>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className={`font-medium transition-all duration-300 hover:scale-105 ${
              shouldShowLightStyle 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Contacto
          </button>
          
          <button 
            onClick={() => window.location.href = '/blog'}
            className={`text-base font-medium transition-all duration-300 hover:scale-110 ${
              shouldShowLightStyle 
                ? 'text-secondary hover:text-primary' 
                : 'text-white hover:text-primary'
            }`}
          >
            Blog
          </button>
        </nav>

        {/* CTA Button & Admin Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            className="bg-gradient-icons shadow-elegant font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 hover:opacity-90 text-white"
            onClick={() => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank')}
          >
            Marcar Consultoria
          </Button>

          {user && isAdmin ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={`rounded-full transition-colors ${
                    shouldShowLightStyle 
                      ? 'hover:bg-muted' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  <User className={`h-5 w-5 ${shouldShowLightStyle ? 'text-secondary' : 'text-white'}`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => window.location.href = '/admin/dashboard'}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => window.location.href = '/admin/login'}
            >
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            shouldShowLightStyle 
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
              onClick={() => window.location.href = '/sobre-nos'}
              className="block w-full text-left font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Sobre Nós
            </button>
            
            <div className="space-y-3">
              <div className="text-secondary font-semibold">Serviços</div>
              <div className="pl-4 space-y-3">
                <button 
                  onClick={() => window.location.href = '/servicos/consultoria-viagens'}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  Planejamento de Viagem
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/avulsos'}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/pacotes'}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  Pacotes de Viagens
                </button>
                <button 
                  onClick={() => window.location.href = '/servicos/imigrantes'}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  Consultoria para Imigrantes
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Contacto
            </button>
            
            <button 
              onClick={() => window.location.href = '/blog'}
              className="block w-full text-left font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Blog
            </button>
            
            <Button 
              className="w-full bg-gradient-icons shadow-elegant font-semibold hover:opacity-90 text-white"
              onClick={() => window.open('https://agencia.iddas.com.br/so/k8cqdbwp', '_blank')}
            >
              Marcar Consultoria
            </Button>

            {user && isAdmin ? (
              <div className="pt-4 border-t border-border/50">
                <Button 
                  variant="outline"
                  className="w-full mb-2"
                  onClick={() => window.location.href = '/admin/dashboard'}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={signOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline"
                size="sm"
                className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.href = '/admin/login'}
              >
                <User className="mr-2 h-4 w-4" />
                Entrar
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;