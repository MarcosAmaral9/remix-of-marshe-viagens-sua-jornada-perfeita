import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Loader2, BookOpen, Plane, CreditCard } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  { icon: BookOpen, text: "Como acumular milhas rapidamente" },
  { icon: Plane, text: "Melhores programas de fidelidade" },
  { icon: CreditCard, text: "Dicas de cartões que mais pontuam" },
];

const LeadMagnet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp) {
      toast.error("Preencha nome e WhatsApp.");
      return;
    }
    setIsLoading(true);

    const msg = encodeURIComponent(
      `Olá! Gostaria de receber o Guia Gratuito de Milhas.\n\nNome: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}`
    );
    window.open(`https://wa.me/5531972391400?text=${msg}`, "_blank");
    setSubmitted(true);
    setIsLoading(false);
    toast.success("Redirecionando para o WhatsApp!");
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual side */}
          <div className="text-center lg:text-left">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
              <Gift className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Guia Gratuito: Como Economizar em Viagens Usando Milhas
            </h2>
            <p className="text-foreground/70 dark:text-foreground/80 mb-6">
              Aprenda estratégias práticas para pagar menos e viajar melhor. Receba nosso guia exclusivo gratuitamente.
            </p>

            {/* Ebook benefits */}
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div>
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card text-center">
                <p className="text-card-foreground text-lg font-semibold mb-2">Obrigado! 🎉</p>
                <p className="text-muted-foreground">Nossa equipe enviará o guia pelo WhatsApp em instantes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card space-y-4">
                <p className="text-card-foreground font-semibold text-lg mb-2">Receba o guia grátis</p>
                <Input
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="text-card-foreground"
                />
                <Input
                  placeholder="E-mail (opcional)"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="text-card-foreground"
                />
                <Input
                  placeholder="WhatsApp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  required
                  className="text-card-foreground"
                />
                <Button type="submit" disabled={isLoading} className="w-full gap-2 h-12 text-base font-semibold">
                  {isLoading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                  ) : (
                    <><Gift className="w-5 h-5" /> Receber Guia Gratuitamente</>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">🔒 Seus dados estão protegidos. Sem spam.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
