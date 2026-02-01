import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Destinos", href: "#destinos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
    { name: "Grupo WhatsApp", href: "#grupo-whatsapp" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-foreground">
              Marshe <span className="text-primary">Viagens</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))
            ) : (
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Voltar ao Início
              </Link>
            )}
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="hero" 
              size="sm" 
              className="px-6 py-2 h-auto"
              onClick={() => {
                if (isHomePage) {
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contato';
                }
              }}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {isHomePage ? (
                navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))
              ) : (
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Voltar ao Início
                </Link>
              )}
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (isHomePage) {
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contato';
                  }
                }}
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
