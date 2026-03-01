import { Button } from "@/components/ui/button";
import { Send, MessageCircle } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
          Pronto para planejar sua <span className="text-primary">próxima viagem</span>?
        </h2>
        <p className="text-foreground/70 dark:text-foreground/80 max-w-lg mx-auto mb-10 text-lg">
          Atendimento rápido, transparente e personalizado. Fale com nossa equipe agora mesmo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <OrcamentoDialog
            trigger={
              <Button variant="hero" className="gap-2">
                <Send className="w-5 h-5" />
                Solicitar Cotação Agora
              </Button>
            }
          />
          <Button
            variant="hero-outline"
            className="gap-2"
            onClick={() => window.open("https://wa.me/5531972391400?text=Ol%C3%A1!%20Gostaria%20de%20planejar%20uma%20viagem.", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
