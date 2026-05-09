import { Link } from "react-router-dom";
import { Shield, Award } from "lucide-react";

const Footer = () => {
  const socialLinks = {
    tiktok: "https://www.tiktok.com/@marshe.viagens",
    instagram: "https://www.instagram.com/marsheviagens",
    whatsapp: "https://wa.me/5531972391400"
  };

  return (
    <footer className="bg-gradient-premium text-white pt-20 pb-8 border-t-4 border-gold">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl tracking-wide text-white">
                Marshe <span className="text-gold">Viagens</span>
              </span>
            </Link>
            <p className="font-script text-2xl text-gold mb-2 leading-tight">
              Sua próxima aventura começa aqui
            </p>
            <p className="text-white/70 max-w-sm mb-6">
              Transformando sonhos em viagens inesquecíveis.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 bg-white/5 border border-gold/20 rounded-lg px-3 py-2">
                <Shield className="w-4 h-4 text-gold" />
                <span className="text-xs text-white/75">Cadastur Ativo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-gold/20 rounded-lg px-3 py-2">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-xs text-white/75">Agência Certificada</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 rounded-xl p-6 border border-gold/20">
              <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
              <div className="space-y-3 text-white/75">
                <p className="flex items-start gap-2">
                  <span className="font-medium text-white">Telefone:</span>
                  <span>(31) 97239-1400</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium text-white">E-mail:</span>
                  <span>marshe.viagens@gmail.com</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium text-white">Endereço:</span>
                  <span>Rua Dom Geraldo Fernandes Bijos, 375, Santa Helena, Contagem, Minas Gerais</span>
                </p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 rounded-xl p-6 border border-gold/20">
              <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
              <div className="space-y-3">
                <Link to="/sobre" className="block text-white/75 hover:text-gold transition-colors">
                  Sobre Nós
                </Link>
                <Link to="/privacidade" className="block text-white/75 hover:text-gold transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/termos" className="block text-white/75 hover:text-gold transition-colors">
                  Termos e Condições
                </Link>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="block text-white/75 hover:text-gold transition-colors">
                  Instagram
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="block text-white/75 hover:text-gold transition-colors">
                  TikTok
                </a>
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-white/75 hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Marshe Viagens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
