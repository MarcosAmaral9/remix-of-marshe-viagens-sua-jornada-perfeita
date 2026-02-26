import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-salvador.jpg";

const Salvador = () => {
  useSeo({
    title: "Pacote Salvador | Marshe Viagens - Saindo de BH",
    description:
      "Pacote de viagem para Salvador, BA. Pelourinho, Farol da Barra, praias e cultura baiana. Aéreo, hospedagem e traslados inclusos.",
    canonical: "https://marsheviagens.com/destinos/salvador",
  });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Salvador" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link
              to="/destinos/nordeste"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Salvador</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Bahia, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Salvador é a primeira capital do Brasil e uma das cidades mais vibrantes e culturais do país. Com uma
                  mistura única de influências africanas, portuguesas e indígenas, a cidade pulsa com música, dança,
                  religiosidade e uma culinária incomparável. O Pelourinho, Patrimônio da Humanidade, é o coração
                  histórico da cidade, com suas igrejas barrocas e casarões coloniais coloridos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Pelourinho",
                      desc: "Centro histórico Patrimônio da Humanidade com igrejas barrocas, música ao vivo e arquitetura colonial colorida.",
                    },
                    {
                      name: "Elevador Lacerda",
                      desc: "Elevador Art Déco de 1873 que conecta a Cidade Alta à Cidade Baixa com vista panorâmica da Baía de Todos os Santos.",
                    },
                    {
                      name: "Praia do Farol da Barra",
                      desc: "A praia mais famosa de Salvador com o icônico Farol da Barra e pôr do sol espetacular.",
                    },
                    {
                      name: "Igreja do Bonfim",
                      desc: "Igreja histórica famosa pelas fitinhas coloridas do Senhor do Bonfim, tradição da fé baiana.",
                    },
                    {
                      name: "Mercado Modelo",
                      desc: "Maior mercado de artesanato da Bahia com mais de 250 lojas de souvenirs, arte e produtos típicos.",
                    },
                    {
                      name: "Forte de Santo Antônio da Barra",
                      desc: "Forte histórico que abriga o Museu Náutico com exposições sobre a história marítima do Brasil.",
                    },
                  ].map((spot) => (
                    <div key={spot.name} className="bg-muted/50 rounded-xl p-4">
                      <h3 className="font-semibold text-foreground mb-1">{spot.name}</h3>
                      <p className="text-sm text-muted-foreground">{spot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-primary" /> Melhor Época para Viajar
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Salvador tem clima tropical o ano inteiro com temperaturas entre 24°C e 30°C. A melhor época é de{" "}
                  <strong>dezembro a março</strong>, coincidindo com o verão e o Carnaval — a maior festa de rua do
                  mundo. De abril a julho chove mais, mas os preços são mais baixos. O réveillon em Salvador é
                  espetacular, com festas nas praias e shows gratuitos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Salvador é a capital gastronômica do Brasil. O acarajé é o lanche de rua mais famoso — bolinho de
                  feijão frito recheado com vatapá e caruru. Prove também a moqueca baiana (com dendê e leite de coco),
                  o bobó de camarão, o abará e a cocada. Os restaurantes do Pelourinho e da orla servem pratos
                  tradicionais com vista para o mar. A culinária baiana é Patrimônio Cultural do Brasil.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Salvador</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>8 dias • 19/04/26 a 26/04/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 27°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">R$ 1.800</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Salvador (19/04/26 a 26/04/26)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Quer reservar uma data diferente? Entre em contato conosco
                  </p>
                  <OrcamentoDialog defaultDestination="Salvador" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Salvador;
