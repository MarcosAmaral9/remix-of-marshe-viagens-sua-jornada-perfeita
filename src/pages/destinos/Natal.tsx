import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-natal.jpg";

const Natal = () => {
  useSeo({ title: "Pacote Natal | Marshe Viagens - Saindo de BH", description: "Pacote de viagem para Natal, RN. Dunas de Genipabu, Ponta Negra, Pipa e mais. Aéreo, hospedagem e traslados inclusos.", canonical: "https://marsheviagens.com.br/destinos/natal" });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Natal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link to="/destinos/nordeste" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Natal</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Rio Grande do Norte, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Natal, a "Cidade do Sol", é a capital do Rio Grande do Norte e um dos destinos mais procurados do Nordeste. Com mais de 300 dias de sol por ano, dunas impressionantes, praias de água morna e parrachos (recifes de coral), a cidade oferece aventura e relaxamento na medida certa. É porta de entrada para a Praia de Pipa, um dos destinos mais charmosos do Brasil.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Dunas de Genipabu", desc: "Passeio de buggy emocionante pelas dunas com paradas em lagoas de água doce. 'Com emoção ou sem emoção?'" },
                    { name: "Praia de Pipa", desc: "Vila charmosa com praias paradisíacas, falésias, golfinhos e uma vida noturna animada." },
                    { name: "Forte dos Reis Magos", desc: "Fortaleza em forma de estrela construída em 1598, marco fundador da cidade com vista para o rio e o mar." },
                    { name: "Parrachos de Maracajaú", desc: "Recifes de coral a 7 km da costa com piscinas naturais perfeitas para mergulho e snorkeling." },
                    { name: "Lagoa de Pitangui", desc: "Lagoa de água doce cercada por dunas e vegetação, com tirolesa e estrutura de lazer." },
                    { name: "Praia de Ponta Negra", desc: "A praia mais famosa de Natal com o icônico Morro do Careca, bares e restaurantes na orla." },
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
                  Natal faz jus ao apelido de "Cidade do Sol" — faz sol o ano inteiro! A melhor época é de <strong>setembro a fevereiro</strong>, período mais seco com temperaturas entre 28°C e 32°C. De março a julho chove mais, principalmente em junho, mas as chuvas costumam ser rápidas. Para os passeios de mergulho nos parrachos, prefira os meses com menos vento e marés mais baixas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A culinária potiguar é deliciosa e variada. Prove a ginga com tapioca (peixinho frito servido na tapioca), o camarão regional, a carne de sol com queijo coalho e macaxeira frita, e a caldeirada de frutos do mar. Em Ponta Negra, os restaurantes servem pratos com vista para o mar. Não deixe de experimentar a cocada e os sorvetes de frutas tropicais.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Natal</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>8 dias • 21/03/26 a 28/03/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 29°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">R$ 3.640</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                  
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Natal (21/03/26 a 28/03/26)" target="_blank" rel="noopener noreferrer">
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

export default Natal;
