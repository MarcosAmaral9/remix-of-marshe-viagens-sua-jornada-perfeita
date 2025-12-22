import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Inscrição realizada com sucesso!");
      setEmail("");
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="relative bg-coral-light rounded-3xl p-8 lg:p-16 overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-20 h-20 bg-primary/10 rounded-full translate-y-1/2" />

          <div className="relative max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-glow">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Inscreva-se para receber novidades, promoções
              <br className="hidden md:block" />
              e ofertas exclusivas da Marshe Viagens
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-8 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
              <Button type="submit" variant="hero" className="h-14 px-8">
                Inscrever
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
