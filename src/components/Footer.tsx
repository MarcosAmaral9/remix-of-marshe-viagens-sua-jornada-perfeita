import { Link } from "react-router-dom";
import { Shield, Award } from "lucide-react";

const Footer = () => {
  const socialLinks = {
    tiktok: "https://www.tiktok.com/@marshe.viagens",
    instagram: "https://www.instagram.com/marsheviagens",
    whatsapp: "https://wa.me/5531972391400"
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-secondary-foreground/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold text-secondary-foreground">
                Marshe <span className="text-primary">Viagens</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/70 max-w-sm mb-6">
              Transformando sonhos em viagens inesquecíveis. 
              Sua próxima aventura começa aqui!
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg px-3 py-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs text-secondary-foreground/70">Cadastur Ativo</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg px-3 py-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs text-secondary-foreground/70">Agência Certificada</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10">
              <h3 className="text-lg font-semibold text-secondary-foreground mb-4">Contato</h3>
              <div className="space-y-3 text-secondary-foreground/70">
                <p className="flex items-start gap-2">
                  <span className="font-medium text-secondary-foreground">Telefone:</span>
                  <span>(31) 97239-1400</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium text-secondary-foreground">E-mail:</span>
                  <span>marshe.viagens@gmail.com</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium text-secondary-foreground">Endereço:</span>
                  <span>Rua Dom Geraldo Fernandes Bijos, 375, Santa Helena, Contagem, Minas Gerais</span>
                </p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10">
              <h3 className="text-lg font-semibold text-secondary-foreground mb-4">Links Úteis</h3>
              <div className="space-y-3">
                <Link to="/sobre" className="block text-secondary-foreground/70 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
                <Link to="/privacidade" className="block text-secondary-foreground/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/termos" className="block text-secondary-foreground/70 hover:text-primary transition-colors">
                  Termos e Condições
                </Link>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="block text-secondary-foreground/70 hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="block text-secondary-foreground/70 hover:text-primary transition-colors">
                  TikTok
                </a>
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-secondary-foreground/70 hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-secondary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Marshe Viagens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
