import { Star, CheckCircle } from "lucide-react";

const testimonials = [
  {
    content: "Fechei minha viagem internacional com total segurança e suporte. Atendimento rápido e transparente.",
    name: "Vinicius",
    role: "Empresário",
  },
  {
    content: "Economizei usando milhas e ainda tive todo acompanhamento durante a viagem. Recomendo demais!",
    name: "Aguida",
    role: "Médica",
  },
  {
    content: "Melhor agência de viagens que já conheci! Preços justos, pacotes incríveis e suporte 24 horas.",
    name: "Laura",
    role: "Arquiteta",
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Mais de <span className="text-primary">500 viajantes</span> já confiaram na Marshe Viagens
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                ))}
              </div>
              <blockquote className="text-card-foreground leading-relaxed mb-6">
                "{t.content}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
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
