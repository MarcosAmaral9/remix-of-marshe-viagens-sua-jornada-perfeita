import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-32 right-20 w-16 h-16 bg-coral-light rounded-full opacity-60 animate-float" />
      <div className="absolute bottom-40 left-10 w-8 h-8 bg-teal/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm">
              Agência de Viagens em Contagem - MG
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
              Planeje sua viagem
              <br />
              <span className="relative">
                dos sonhos
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 150 2 298 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              {" "}com suporte
              <br />
              especializado
            </h1>

            <p className="text-foreground/70 dark:text-foreground/80 text-lg max-w-lg leading-relaxed">
              Pacotes nacionais e internacionais, passagens aéreas, milhas e hospedagens com atendimento humano antes, durante e depois da sua viagem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <OrcamentoDialog
                trigger={
                  <Button variant="hero" className="gap-2">
                    <Send className="w-5 h-5" />
                    Solicitar Cotação Personalizada
                  </Button>
                }
              />
              <Button
                variant="hero-outline"
                className="gap-2"
                onClick={() => window.open("https://wa.me/5531972391400?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20viagens.", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-foreground/60 dark:text-foreground/70">
              <span className="flex items-center gap-1.5">✅ Atendimento personalizado</span>
              <span className="flex items-center gap-1.5">✅ Suporte completo</span>
              <span className="flex items-center gap-1.5">⭐ Avaliação 5.0</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-coral-light rounded-full -z-10" />
            <img
              alt="Viajante feliz em destino tropical"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl rounded-3xl"
              src="/lovable-uploads/0d4a3a04-daa2-44e3-b803-68c32f0300e9.png"
            />
            <div className="absolute bottom-8 -left-12 bg-background/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-border/50 animate-bounce-soft z-20 flex items-center gap-4">
              <div className="text-primary text-3xl">✈️</div>
              <div>
                <p className="text-2xl font-bold text-primary">+ 60 Destinos</p>
                <p className="text-sm text-muted-foreground">Nacionais e internacionais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
