import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-maceio.jpg";

const Maceio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Maceió" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link to="/destinos/nordeste" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Maceió</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Alagoas, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Maceió, capital de Alagoas, é conhecida como o "Caribe Brasileiro" por suas águas cristalinas em tons de verde e azul. A cidade oferece praias urbanas deslumbrantes, piscinas naturais acessíveis por jangada e o charmoso litoral norte com vilarejos como São Miguel dos Milagres e Maragogi, que formam a famosa Costa dos Corais — a segunda maior barreira de corais do mundo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Praia do Francês", desc: "Praia com recifes naturais que formam piscinas de água calma, perfeita para banho e snorkeling." },
                    { name: "Piscinas de Pajuçara", desc: "Acessíveis de jangada na maré baixa, as piscinas naturais abrigam peixes coloridos e corais." },
                    { name: "São Miguel dos Milagres", desc: "Paraíso preservado com praias desertas, águas cristalinas e piscinas naturais de tirar o fôlego." },
                    { name: "Maragogi", desc: "As 'Galés de Maragogi' são piscinas naturais com visibilidade de até 50 metros de profundidade." },
                    { name: "Praia de Ipioca", desc: "Praia tranquila com coqueiros, ideal para relaxar longe das multidões." },
                    { name: "Mirante de São Gonçalo", desc: "Vista panorâmica da lagoa Mundaú e da cidade, especialmente bonito ao entardecer." },
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
                  A melhor época para visitar Maceió é de <strong>setembro a março</strong>, quando o sol predomina e as chuvas são raras. As temperaturas variam entre 25°C e 32°C praticamente o ano todo. De abril a agosto, a cidade recebe mais chuvas, mas a temperatura continua agradável. Para aproveitar as piscinas naturais, prefira a maré baixa — consulte a tábua de marés antes de agendar os passeios.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Maceió é um paraíso gastronômico. Prove o sururu (molusco típico da lagoa Mundaú), a moqueca alagoana, o peixe frito com pirão e os mariscos frescos servidos à beira-mar. O tapioca com queijo coalho e coco é um lanche imperdível. Para sobremesa, experimente o bolo de goma e os doces de frutas regionais.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Maceió</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>8 dias • 13/06/26 a 20/06/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 27°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">R$ 3.250</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                  
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Maceió (13/06/26 a 20/06/26)" target="_blank" rel="noopener noreferrer">
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

export default Maceio;
