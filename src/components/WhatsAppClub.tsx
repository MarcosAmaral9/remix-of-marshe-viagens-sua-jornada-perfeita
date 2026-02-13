import { QRCodeSVG } from "qrcode.react";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppClub = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/GkDtzLywfKOAMmASHQB5Vg";

  return (
    <section id="grupo-whatsapp" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 lg:p-16 overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-20 h-20 bg-white/10 rounded-full translate-y-1/2" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
                Junte-se ao Clube do Viajante
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Entre no nosso grupo exclusivo do WhatsApp e receba em primeira mão:
              </p>
              <ul className="text-white/80 space-y-2 mb-8 text-left max-w-md mx-auto lg:mx-0">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Promoções exclusivas e oportunidades imperdíveis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Dicas de viagem e destinos secretos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Pacotes com preços especiais para membros
                </li>
              </ul>

              <Button
                asChild
                className="bg-white text-green-600 hover:bg-white/90 font-bold px-8 py-6 text-lg"
              >
                <a href={whatsappGroupLink} target="_blank" rel="noopener noreferrer">
                  Entrar no Grupo
                </a>
              </Button>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <QRCodeSVG
                  value={whatsappGroupLink}
                  size={200}
                  level="H"
                  includeMargin={false}
                  bgColor="#ffffff"
                  fgColor="#16a34a"
                />
              </div>
              <p className="text-white/80 mt-4 text-sm text-center">
                Escaneie o QR Code para entrar
              </p>
              <p className="text-white font-semibold mt-1 text-center">
                Clube do Viajante - MARSHE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppClub;
