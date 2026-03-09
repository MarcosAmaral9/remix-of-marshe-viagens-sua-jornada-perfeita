import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, User, Mail, Phone, MapPin, Users, Calendar, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const DESTINATIONS = [
  "Porto de Galinhas",
  "Maceió",
  "Salvador",
  "Natal",
  "Fortaleza",
  "João Pessoa",
  "Porto Seguro",
  "Cabo Santo Agostinho",
  "Gramado",
  "Foz do Iguaçu",
  "Circuito Madri e Paris com Disneyland",
  "Circuito Lisboa, Madri e Paris com Disneyland",
  "Circuito Itália e Paris com Disneyland",
  "Outro destino",
];

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("E-mail inválido").max(255).optional().or(z.literal("")),
  whatsapp: z
    .string()
    .trim()
    .min(10, "WhatsApp inválido")
    .max(20)
    .regex(/^[\d\s\(\)\-\+]+$/, "Número inválido"),
  destination: z.string().min(1, "Selecione um destino"),
  travelers: z.string().optional(),
  travelDateStart: z.string().optional(),
  travelDateEnd: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export interface LeadCaptureFormProps {
  variant?: "default" | "blog" | "dialog";
  defaultDestination?: string;
  onSuccess?: () => void;
}

const LeadCaptureForm = ({ variant = "default", defaultDestination, onSuccess }: LeadCaptureFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      destination: defaultDestination || "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const travelDate = [data.travelDateStart, data.travelDateEnd].filter(Boolean).join(" a ");

      const { data: result, error } = await supabase.functions.invoke("send-lead-whatsapp", {
        body: {
          name: data.name,
          email: data.email || "",
          whatsapp: data.whatsapp,
          destination: data.destination,
          travelers: data.travelers || "",
          travelDate: travelDate,
        },
      });

      if (error) throw error;
      if (!result?.success) throw new Error(result?.error || "Erro ao enviar");

      window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");

      setSubmitted(true);
      reset();
      toast.success("Mensagem enviada! Você será redirecionado para o WhatsApp.");
      onSuccess?.();
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar. Tente novamente ou contate via WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  const isBlog = variant === "blog";
  const isDialog = variant === "dialog";

  if (isDialog) {
    return (
      <div>
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Mensagem enviada! 🎉</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe recebeu seu contato e em breve estará em contato pelo WhatsApp!
            </p>
            <Button variant="outline" onClick={() => setSubmitted(false)}>
              Enviar outro orçamento
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
            {/* Nome e WhatsApp - sempre visíveis e prioritários */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Nome completo *
              </label>
              <Input {...register("name")} placeholder="Seu nome" className={`h-11 text-base ${errors.name ? "border-destructive" : ""}`} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> WhatsApp *
              </label>
              <Input {...register("whatsapp")} placeholder="(31) 99999-9999" type="tel" className={`h-11 text-base ${errors.whatsapp ? "border-destructive" : ""}`} />
              {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp.message}</p>}
            </div>

            {/* Destino e Pessoas lado a lado */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5 col-span-2 sm:col-span-1">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Destino *
                </label>
                <select
                  {...register("destination")}
                  className={`flex h-11 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    errors.destination ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="">Selecione...</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                {errors.destination && <p className="text-xs text-destructive">{errors.destination.message}</p>}
              </div>
              <div className="space-y-1.5 col-span-2 sm:col-span-1">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" /> Pessoas
                </label>
                <select
                  {...register("travelers")}
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Selecione...</option>
                  <option value="1 pessoa">1 pessoa</option>
                  <option value="2 pessoas">2 pessoas</option>
                  <option value="3-4 pessoas">3-4 pessoas</option>
                  <option value="5-6 pessoas">5-6 pessoas</option>
                  <option value="7+ pessoas">7+ pessoas</option>
                  <option value="Grupo">Grupo / Empresa</option>
                </select>
              </div>
            </div>

            {/* Datas lado a lado */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Ida
                </label>
                <Input {...register("travelDateStart")} type="date" min={new Date().toISOString().split("T")[0]} className="cursor-pointer h-11 text-base" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Volta
                </label>
                <Input {...register("travelDateEnd")} type="date" min={new Date().toISOString().split("T")[0]} className="cursor-pointer h-11 text-base" />
              </div>
            </div>

            {/* E-mail opcional - colapsado visualmente */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> E-mail <span className="text-muted-foreground font-normal text-xs">(opcional)</span>
              </label>
              <Input {...register("email")} placeholder="seu@email.com" type="email" className={`h-11 text-base ${errors.email ? "border-destructive" : ""}`} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col items-center gap-3 pt-1">
              <Button type="submit" disabled={isLoading} className="w-full gap-2 h-12 text-base font-semibold">
                {isLoading ? (<><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>) : (<><Send className="w-5 h-5" /> Solicitar Orçamento via WhatsApp</>)}
              </Button>
              <p className="text-xs text-muted-foreground text-center">🔒 Seus dados são usados apenas para atendimento</p>
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <section
      id={isBlog ? undefined : "orcamento"}
      className={
        isBlog
          ? "py-12 bg-muted/40 border-y border-border"
          : "py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5"
      }
    >
      <div className="container mx-auto px-4">
        <div className={isBlog ? "max-w-3xl mx-auto" : "max-w-4xl mx-auto"}>
          <div className={`text-center mb-10`}>
            {!isBlog && (
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Orçamento Gratuito
              </span>
            )}
            <h2
              className={`font-serif font-bold text-foreground mt-3 ${
                isBlog ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
              }`}
            >
              {isBlog ? "✈️ Quer ir para esse destino?" : "Monte sua Viagem dos Sonhos"}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
              {isBlog
                ? "Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp com as melhores opções para você!"
                : "Preencha o formulário abaixo e nossa equipe entrará em contato pelo WhatsApp com um orçamento personalizado e sem compromisso!"}
            </p>
          </div>

          {submitted ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center shadow-card">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Mensagem enviada! 🎉</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe recebeu seu contato e em breve estará em contato pelo WhatsApp!
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Enviar outro orçamento
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-card"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Nome completo *
                  </label>
                  <Input {...register("name")} placeholder="Seu nome" className={errors.name ? "border-destructive" : ""} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" /> WhatsApp *
                  </label>
                  <Input {...register("whatsapp")} placeholder="(31) 99999-9999" type="tel" className={errors.whatsapp ? "border-destructive" : ""} />
                  {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" /> E-mail <span className="text-muted-foreground font-normal">(opcional)</span>
                  </label>
                  <Input {...register("email")} placeholder="seu@email.com" type="email" className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Destino de interesse *
                  </label>
                  <select
                    {...register("destination")}
                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      errors.destination ? "border-destructive" : "border-input"
                    }`}
                  >
                    <option value="">Selecione um destino...</option>
                    {DESTINATIONS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  {errors.destination && <p className="text-xs text-destructive">{errors.destination.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" /> Quantidade de pessoas
                  </label>
                  <select
                    {...register("travelers")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecione...</option>
                    <option value="1 pessoa">1 pessoa</option>
                    <option value="2 pessoas">2 pessoas</option>
                    <option value="3-4 pessoas">3-4 pessoas</option>
                    <option value="5-6 pessoas">5-6 pessoas</option>
                    <option value="7+ pessoas">7+ pessoas</option>
                    <option value="Grupo">Grupo / Empresa</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> Data de ida
                  </label>
                  <Input {...register("travelDateStart")} type="date" min={new Date().toISOString().split("T")[0]} className="cursor-pointer" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> Data de volta
                  </label>
                  <Input {...register("travelDateEnd")} type="date" min={new Date().toISOString().split("T")[0]} className="cursor-pointer" />
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row items-center gap-4">
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto sm:flex-1 gap-2 h-12 text-base font-semibold">
                  {isLoading ? (<><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>) : (<><Send className="w-5 h-5" /> Solicitar Orçamento via WhatsApp</>)}
                </Button>
                <p className="text-xs text-muted-foreground text-center sm:text-left">🔒 Seus dados são usados apenas para atendimento</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
