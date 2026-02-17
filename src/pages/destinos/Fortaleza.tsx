import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-fortaleza.jpg";

const Fortaleza = () => {
  useSeo({ title: "Pacote Fortaleza | Marshe Viagens - Saindo de BH", description: "Pacote de viagem para Fortaleza saindo de Belo Horizonte com aéreo, hospedagem e traslados. Beach Park, Praia do Futuro e mais.", canonical: "https://marsheviagens.com.br/destinos/fortaleza" });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Fortaleza" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link to="/destinos/nordeste" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Fortaleza</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Ceará, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fortaleza é a capital do Ceará e uma das cidades mais vibrantes do Nordeste brasileiro. Com 34 km de praias urbanas, uma vida noturna agitada, culinária rica e o famoso humor cearense, a cidade oferece uma experiência completa para todos os perfis de viajante. É também porta de entrada para destinos paradisíacos como Jericoacoara, Canoa Quebrada e Cumbuco.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Beach Park", desc: "Maior parque aquático da América Latina, com tobogãs radicais e piscinas temáticas para toda família." },
                    { name: "Praia do Futuro", desc: "A praia mais badalada de Fortaleza, com barracas famosas, shows ao vivo e frutos do mar frescos." },
                    { name: "Jericoacoara", desc: "Vila paradisíaca com dunas, lagoas cristalinas e pôr do sol na Duna do Pôr do Sol, a 300 km de Fortaleza." },
                    { name: "Canoa Quebrada", desc: "Praia com falésias coloridas, passeios de buggy e vida noturna animada na Broadway." },
                    { name: "Centro Dragão do Mar", desc: "Complexo cultural com museus, teatro, cinema e espaços para shows e exposições artísticas." },
                    { name: "Mercado Central", desc: "Mais de 500 lojas com artesanato, redes, cachaças, castanhas e souvenirs típicos do Ceará." },
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
                  Fortaleza tem sol o ano inteiro, com temperaturas médias entre 26°C e 31°C. A melhor época para visitar é de <strong>julho a dezembro</strong>, período com menos chuvas e ventos ideais para esportes náuticos. O segundo semestre é perfeito para quem quer curtir as praias sem preocupação com chuvas. O Carnaval e o réveillon são épocas festivas com muita animação.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A culinária cearense é uma das mais saborosas do Brasil. Não deixe de provar o caranguejo, a lagosta, o baião de dois, a carne de sol com manteiga de garrafa e o peixe na brasa. Na Praia do Futuro, as barracas servem porções generosas de camarão e frutos do mar. Para sobremesa, experimente a tapioca com coco e o rapadura.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Fortaleza</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>6 dias • 19/04/26 a 25/04/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 29°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">R$ 4.100</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                  
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Fortaleza (19/04/26 a 25/04/26)" target="_blank" rel="noopener noreferrer">
                    Reservar pelo WhatsApp
                  </a>
                </Button>
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

export default Fortaleza;
