import { Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const counters = [
  { target: 1200, label: "Viajantes Atendidos", suffix: "+" },
  { target: 60, label: "Destinos Disponíveis", suffix: "+" },
  { target: 3, label: "Anos de Experiência", suffix: "+" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return count;
}

const CounterItem = ({ target, label, suffix, inView }: { target: number; label: string; suffix: string; inView: boolean }) => {
  const count = useCountUp(target, inView);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-primary font-serif">
        {count.toLocaleString("pt-BR")}{suffix}
      </p>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </div>
  );
};

const SocialProof = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Mais de <span className="text-primary">1200 viajantes</span> já confiaram na Marshe Viagens
          </h2>
        </div>

        {/* Animated Counters */}
        <div ref={ref} className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {counters.map((c) => (
            <CounterItem key={c.label} {...c} inView={inView} />
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                Depoimentos
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-4">
                O que nossos
                <br />
                clientes dizem
              </h3>

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

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
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

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                  ))}
                </div>

                <blockquote className="text-foreground text-lg leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 text-primary/10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-sm text-foreground/70 dark:text-foreground/80">
          <span className="flex items-center gap-2">
            <span className="text-yellow text-lg">⭐⭐⭐⭐⭐</span> Avaliação média 5.0
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" /> Atendimento personalizado
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" /> Suporte completo
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
