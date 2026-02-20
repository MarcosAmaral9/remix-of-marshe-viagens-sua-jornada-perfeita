import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Info, Shield, FileText } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Destinos", href: "#destinos" },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "Orçamento", href: "#orcamento" },
    { name: "Grupo WhatsApp", href: "#grupo-whatsapp" },
  ];

  const infoLinks = [
    { name: "Sobre Nós", href: "/sobre", icon: Info },
    { name: "Política de Privacidade", href: "/privacidade", icon: Shield },
    { name: "Termos e Condições", href: "/termos", icon: FileText },
  ];

  const handleScrollLink = (href: string) => {
    if (isHomePage) {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${href}`;
    }
  };

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
              navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                )
              )
            ) : (
              <>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  Início
                </Link>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  Blog
                </Link>
              </>
            )}
          </nav>

          {/* CTA Button, Info Menu and Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            {/* Info Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground px-2"
                >
                  <Menu className="w-4 h-4" />
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                {infoLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link
                      to={link.href}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <link.icon className="w-4 h-4 text-primary" />
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />

            <Button
              variant="hero"
              size="sm"
              className="px-6 py-2 h-auto"
              onClick={() => {
                if (isHomePage) {
                  document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#orcamento";
                }
              }}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Info Dropdown Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <Menu className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                {infoLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link
                      to={link.href}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <link.icon className="w-4 h-4 text-primary" />
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
                navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                )
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </Link>
                  <Link
                    to="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </>
              )}
              <Button
                variant="hero"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (isHomePage) {
                    document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#orcamento";
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
