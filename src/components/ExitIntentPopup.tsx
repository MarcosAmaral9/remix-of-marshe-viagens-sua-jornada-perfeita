import { useState, useEffect, useCallback } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X, Gift } from "lucide-react";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem("exit_popup_shown")) {
      setOpen(true);
      sessionStorage.setItem("exit_popup_shown", "true");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 5000); // só ativa após 5s na página

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md rounded-2xl p-0 overflow-hidden border-none">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-br from-primary to-primary/80 p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-serif text-white">
              Espere! Tem um presente pra você 🎁
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/90 text-base mt-2">
              Receba grátis nosso <strong className="text-white">Guia Completo de Milhas</strong> e aprenda a viajar pagando muito menos.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>

        <div className="p-6 space-y-4 bg-card">
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Como acumular milhas sem gastar mais
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Melhores programas de fidelidade
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Dicas exclusivas para economizar até 60%
            </li>
          </ul>

          <Button
            asChild
            className="w-full"
            variant="hero"
          >
            <a href="#lead-magnet" onClick={() => setOpen(false)}>
              Quero o Guia Grátis
            </a>
          </Button>

          <button
            onClick={() => setOpen(false)}
            className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Não, obrigado
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExitIntentPopup;
