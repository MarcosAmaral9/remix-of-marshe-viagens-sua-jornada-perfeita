import { Instagram } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
const Footer = () => {
  const socialLinks = {
    tiktok: "https://www.tiktok.com/@marshe.viagens",
    instagram: "https://www.instagram.com/marsheviagens",
    whatsapp: "https://wa.me/553172391400"
  };
  const footerLinks = {
    empresa: [{
      name: "Sobre",
      href: "#"
    }, {
      name: "Carreiras",
      href: "#"
    }, {
      name: "Parceiros",
      href: "#"
    }],
    contato: [{
      name: "Ajuda/FAQ",
      href: "#"
    }, {
      name: "Imprensa",
      href: "#"
    }, {
      name: "Afiliados",
      href: "#"
    }],
    mais: [{
      name: "Tarifas Especiais",
      href: "#"
    }, {
      name: "Companhias Aéreas",
      href: "#"
    }, {
      name: "Seguros",
      href: "#"
    }]
  };
  return <footer className="bg-muted/50 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold text-foreground">
                Marshe <span className="text-primary">Viagens</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Transformando sonhos em viagens inesquecíveis. 
              Sua próxima aventura começa aqui!
            </p>

            {/* Contact Info */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="font-medium text-foreground">Telefone:</span>
                  <a href="tel:+553172391400" className="hover:text-primary transition-colors">(31) 97239-1400</a>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium text-foreground">E-mail:</span>
                  <a href="mailto:marshe.viagens@gmail.com" className="hover:text-primary transition-colors">marshe.viagens@gmail.com</a>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium text-foreground">Endereço:</span>
                  <span>Rua Dom Geraldo Fernandes Bijos, 375, Santa Helena, Contagem, Minas Gerais</span>
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          

          

          
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Marshe Viagens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;