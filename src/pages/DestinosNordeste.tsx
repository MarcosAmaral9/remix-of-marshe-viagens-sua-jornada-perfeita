import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import caboSantoAgostinhoImg from "@/assets/dest-cabo-santo-agostinho.jpg";
import fortalezaImg from "@/assets/dest-fortaleza.jpg";
import joaoPessoaImg from "@/assets/dest-joao-pessoa.jpg";
import maceioImg from "@/assets/dest-maceio.jpg";
import natalImg from "@/assets/dest-natal.jpg";
import portoGalinhasImg from "@/assets/dest-porto-de-galinhas.jpg";
import portoSeguroImg from "@/assets/dest-porto-seguro.jpg";
import salvadorImg from "@/assets/dest-salvador.jpg";

const destinations = [
  { name: "Cabo de Santo Agostinho", location: "Pernambuco", price: "R$ 2.650", duration: "8 dias", dates: "16/05/26 a 23/05/26", image: caboSantoAgostinhoImg, slug: "cabo-de-santo-agostinho", highlights: ["Praia de Calhetas", "Piscinas naturais", "Forte Castelo do Mar"] },
  { name: "Fortaleza", location: "Ceará", price: "R$ 4.100", duration: "6 dias", dates: "19/04/26 a 25/04/26", image: fortalezaImg, slug: "fortaleza", highlights: ["Beach Park", "Praia do Futuro", "Jericoacoara"] },
  { name: "João Pessoa", location: "Paraíba", price: "R$ 3.200", duration: "8 dias", dates: "29/03/26 a 05/04/26", image: joaoPessoaImg, slug: "joao-pessoa", highlights: ["Ponta do Seixas", "Praia de Tambaba", "Centro Histórico"] },
  { name: "Maceió", location: "Alagoas", price: "R$ 3.250", duration: "8 dias", dates: "13/06/26 a 20/06/26", image: maceioImg, slug: "maceio", highlights: ["Praia do Francês", "Piscinas de Pajuçara", "São Miguel dos Milagres"] },
  { name: "Natal", location: "Rio Grande do Norte", price: "R$ 3.640", duration: "8 dias", dates: "21/03/26 a 28/03/26", image: natalImg, slug: "natal", highlights: ["Dunas de Genipabu", "Praia de Pipa", "Forte dos Reis Magos"] },
  { name: "Porto de Galinhas", location: "Pernambuco", price: "R$ 2.319", duration: "8 dias", dates: "16/05/26 a 23/05/26", image: portoGalinhasImg, slug: "porto-de-galinhas", highlights: ["Piscinas naturais", "Praia de Muro Alto", "Passeio de jangada"] },
  { name: "Porto Seguro", location: "Bahia", price: "R$ 1.838", duration: "4 dias", dates: "04/05/26 a 08/05/26", image: portoSeguroImg, slug: "porto-seguro", highlights: ["Passarela do Álcool", "Arraial d'Ajuda", "Trancoso"] },
  { name: "Salvador", location: "Bahia", price: "R$ 2.750", duration: "8 dias", dates: "04/03/26 a 11/03/26", image: salvadorImg, slug: "salvador", highlights: ["Pelourinho", "Elevador Lacerda", "Praia do Farol da Barra"] },
];

const DestinosNordeste = () => {
  useSeo({
    title: "Pacotes Aéreos Nordeste | Marshe Viagens - Saindo de BH",
    description: "Pacotes de viagem para o Nordeste saindo de Belo Horizonte. Porto Seguro, Fortaleza, Salvador, Maceió, Natal e mais com aéreo, hospedagem e traslados.",
    canonical: "https://marsheviagens.com.br/destinos/nordeste",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <Link to="/#destinos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Voltar aos destinos
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Pacotes Aéreos — <span className="text-primary">Nordeste</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              Descubra as praias mais deslumbrantes do Brasil. Pacotes completos com aéreo, hospedagem com café da manhã e traslados.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <Link
                  key={dest.name}
                  to={`/destinos/${dest.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={dest.image} alt={`Pacote de viagem para ${dest.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <h2 className="text-2xl font-bold">{dest.name}</h2>
                      <div className="flex items-center gap-1 text-sm opacity-90">
                        <MapPin className="w-4 h-4" /> {dest.location}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" /> {dest.duration} • {dest.dates}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.highlights.map((h) => (
                        <span key={h} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{h}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <span className="text-xs text-muted-foreground">a partir de</span>
                        <p className="text-xl font-bold text-primary">{dest.price}</p>
                        <span className="text-xs text-muted-foreground">por pessoa</span>
                      </div>
                      <span className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Ver detalhes <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default DestinosNordeste;
