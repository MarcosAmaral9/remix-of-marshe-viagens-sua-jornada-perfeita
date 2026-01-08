import { Target, Eye, Heart } from "lucide-react";

const MissionVisionValues = () => {
  const items = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Proporcionar experiências de viagem inesquecíveis, conectando pessoas aos destinos mais encantadores do Brasil com atendimento personalizado, segurança e o melhor custo-benefício.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser referência nacional em turismo, reconhecida pela excelência no atendimento e pela capacidade de transformar sonhos de viagem em memórias para toda a vida.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Transparência em todas as relações, compromisso com a satisfação do cliente, paixão por viajar, respeito às comunidades locais e sustentabilidade no turismo.",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Nossa Essência
          </h2>
          <p className="text-muted-foreground mt-4">
            Conheça os pilares que guiam a Marshe Viagens em cada jornada
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
