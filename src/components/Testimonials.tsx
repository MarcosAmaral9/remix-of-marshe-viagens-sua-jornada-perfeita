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
  {
    name: "Roberto",
    role: "Contador",
    content: "Viajei para Maceió com minha esposa e ficamos encantados. A Marshe cuidou de tudo: voo, hotel, passeios. Nota 10!",
    rating: 5,
  },
  {
    name: "Camila",
    role: "Designer",
    content: "Fiz minha primeira viagem internacional com a Marshe e foi incrível. O circuito pela Europa superou qualquer expectativa que eu tinha.",
    rating: 5,
  },
  {
    name: "Fernando",
    role: "Dentista",
    content: "Levei toda a família para Gramado no inverno. A organização foi perfeita, cada detalhe pensado para o conforto das crianças.",
    rating: 5,
  },
  {
    name: "Patrícia",
    role: "Farmacêutica",
    content: "O atendimento pelo WhatsApp é super rápido. Em menos de 24h já tinha um roteiro completo para João Pessoa. Amei!",
    rating: 5,
  },
  {
    name: "Carlos",
    role: "Administrador",
    content: "Já viajei 3 vezes com a Marshe e cada experiência foi melhor que a anterior. Foz do Iguaçu foi a viagem mais marcante da minha vida.",
    rating: 5,
  },
  {
    name: "Juliana",
    role: "Nutricionista",
    content: "Porto de Galinhas foi um sonho realizado! As piscinas naturais são lindas e o hotel que a Marshe escolheu era perfeito.",
    rating: 5,
  },
  {
    name: "Marcos",
    role: "Empresário",
    content: "Contratei o pacote para Natal e fiquei impressionado com o custo-benefício. Passeio de buggy nas dunas foi sensacional!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Professora",
    content: "Viagem de formatura dos meus alunos para Cabo Santo Agostinho. A Marshe organizou tudo com segurança e profissionalismo.",
    rating: 5,
  },
  {
    name: "Ricardo",
    role: "Advogado",
    content: "O seguro viagem que a Marshe indicou me salvou quando tive um imprevisto no exterior. Suporte completo e atencioso!",
    rating: 5,
  },
  {
    name: "Beatriz",
    role: "Psicóloga",
    content: "Minha viagem para Salvador foi cultural e relaxante ao mesmo tempo. O Pelourinho é incrível e a equipe da Marshe montou um roteiro perfeito.",
    rating: 5,
  },
  {
    name: "Eduardo",
    role: "Engenheiro Civil",
    content: "Organizei minha despedida de solteiro com a Marshe. O cruzeiro foi uma experiência única! Serviço impecável como sempre.",
    rating: 5,
  },
  {
    name: "Renata",
    role: "Jornalista",
    content: "Como viajo muito a trabalho, valorizo praticidade. A Marshe resolve tudo de forma rápida e eficiente. Minha agência favorita!",
    rating: 5,
  },
  {
    name: "André",
    role: "Médico",
    content: "Levei meus pais idosos para uma viagem especial em Gramado. A Marshe pensou em acessibilidade, conforto e tudo mais. Emocionante!",
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

  // Show dots in groups for better mobile UX
  const totalDots = testimonials.length;
  const dotsPerGroup = 5;
  const currentGroup = Math.floor(currentIndex / dotsPerGroup);
  const totalGroups = Math.ceil(totalDots / dotsPerGroup);

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
            <p className="text-muted-foreground mt-2 text-sm">
              {currentIndex + 1} de {testimonials.length} depoimentos
            </p>

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

            <div className="flex flex-wrap gap-1.5 mt-6 max-w-xs">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? "bg-primary scale-125" 
                      : "bg-border hover:bg-primary/40"
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
