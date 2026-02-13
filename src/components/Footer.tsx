import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = {
    tiktok: "https://www.tiktok.com/@marshe.viagens",
    instagram: "https://www.instagram.com/marsheviagens",
    whatsapp: "https://wa.me/553172391400"
  };

  return (
    <footer className="bg-muted/50 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold text-foreground">
                Marshe <span className="text-primary">Viagens</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Transformando sonhos em viagens inesquecíveis. 
              Sua próxima aventura começa aqui!
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="font-medium text-foreground">Telefone:</span>
                  <span>(31) 97239-1400</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium text-foreground">E-mail:</span>
                  <span>marshe.viagens@gmail.com</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium text-foreground">Endereço:</span>
                  <span>Rua Dom Geraldo Fernandes Bijos, 375, Santa Helena, Contagem, Minas Gerais</span>
                </p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Links Úteis</h3>
              <div className="space-y-3">
                <Link 
                  to="/sobre" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
                <Link 
                  to="/privacidade" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
                <Link 
                  to="/termos" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Termos e Condições
                </Link>
                <a 
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  TikTok
                </a>
                <a 
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Marshe Viagens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;