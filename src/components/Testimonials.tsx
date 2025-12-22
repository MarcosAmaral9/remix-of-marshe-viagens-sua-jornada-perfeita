import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Vinicius",
    role: "Empresário",
    content: "A Marshe Viagens superou todas as minhas expectativas! O atendimento foi impecável do início ao fim. Minha viagem para Porto Seguro foi inesquecível.",
    rating: 5,
  },
  {
    name: "Thiago",
    role: "Professor",
    content: "Profissionalismo e atenção aos detalhes. Viajei com minha família para Fortaleza e foi tudo perfeito. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Aguida",
    role: "Médica",
    content: "Sempre que preciso viajar, é com a Marshe. O acompanhamento jurídico me deixou muito tranquila durante toda a viagem internacional.",
    rating: 5,
  },
  {
    name: "Laura",
    role: "Arquiteta",
    content: "Melhor agência de viagens que já conheci! Preços justos, pacotes incríveis e suporte 24 horas. Minha lua de mel foi um sonho!",
    rating: 5,
  },
  {
    name: "Marilene",
    role: "Aposentada",
    content: "Na minha idade, precisava de uma agência que entendesse minhas necessidades. A Marshe cuidou de cada detalhe com muito carinho.",
    rating: 5,
  },
  {
    name: "Nelson",
    role: "Engenheiro",
    content: "Viagem corporativa impecável! O suporte da equipe foi fundamental para o sucesso do evento em Houston. Parceria de sucesso!",
    rating: 5,
  },
  {
    name: "Gislene",
    role: "Advogada",
    content: "Profissionais extremamente competentes. O pacote para Salvador foi muito bem organizado e o preço surpreendentemente acessível.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Section Header */}
          <div>
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
              O que nossos
              <br />
              clientes dizem
            </h2>

            <div className="flex gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  {testimonials[currentIndex].name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-20 h-20 text-primary/10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
