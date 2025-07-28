import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-secondary">Viajar Pelo Mundo</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre Nós</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Viajar Pelo Mundo
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Transformamos o seu sonho de viagem em realidade
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Nossa História</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Conheça nossa missão e valores
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#testimonials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Depoimentos</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            O que nossos clientes dizem
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/servicos/planeamento" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Planeamento Personalizado</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Viagens sob medida para você
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/servicos/passagens" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Passagens & Hospedagem</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Reservas e melhores preços
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/servicos/atividades" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Atividades Turísticas</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Experiências inesquecíveis
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/servicos/apoio" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Serviços de Apoio</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Transfer, seguro e mais
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button 
            className="bg-gradient-primary hover:opacity-90 shadow-elegant"
            onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
          >
            Agendar Consultoria
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-muted-foreground">Sobre Nós</h3>
              <div className="pl-4 space-y-2">
                <a href="#about" className="block text-sm hover:text-primary">Nossa História</a>
                <a href="#testimonials" className="block text-sm hover:text-primary">Depoimentos</a>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-muted-foreground">Serviços</h3>
              <div className="pl-4 space-y-2">
                <a href="/servicos/planeamento" className="block text-sm hover:text-primary">Planeamento Personalizado</a>
                <a href="/servicos/passagens" className="block text-sm hover:text-primary">Passagens & Hospedagem</a>
                <a href="/servicos/atividades" className="block text-sm hover:text-primary">Atividades Turísticas</a>
                <a href="/servicos/apoio" className="block text-sm hover:text-primary">Serviços de Apoio</a>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-primary hover:opacity-90"
              onClick={() => window.open('https://wa.me/message/YNHNAUM2BAAHD1', '_blank')}
            >
              Agendar Consultoria
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;