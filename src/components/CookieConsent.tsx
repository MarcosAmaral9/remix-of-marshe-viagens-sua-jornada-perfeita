import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay to prevent flash
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true,
      analytics: true,
      advertising: true,
      preferences: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true,
      analytics: false,
      advertising: false,
      preferences: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  🍪 Aviso de Cookies
                </h3>
                <button 
                  onClick={acceptEssential}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e anúncios, 
                e analisar nosso tráfego. Ao clicar em "Aceitar Todos", você consente com o uso de 
                todos os cookies. Este site utiliza Google Analytics e Google AdSense.
              </p>

              {showDetails && (
                <div className="mb-4 p-4 bg-muted/50 rounded-lg text-sm space-y-3">
                  <div>
                    <strong className="text-foreground">Cookies Essenciais:</strong>
                    <span className="text-muted-foreground"> Necessários para o funcionamento básico do site.</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Cookies de Análise (Google Analytics):</strong>
                    <span className="text-muted-foreground"> Nos ajudam a entender como você usa o site.</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Cookies de Publicidade (Google AdSense):</strong>
                    <span className="text-muted-foreground"> Usados para exibir anúncios personalizados.</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Cookies de Preferências:</strong>
                    <span className="text-muted-foreground"> Guardam suas configurações (ex: tema).</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button onClick={acceptAll} variant="default" className="w-full sm:w-auto">
                  Aceitar Todos
                </Button>
                <Button onClick={acceptEssential} variant="outline" className="w-full sm:w-auto">
                  Apenas Essenciais
                </Button>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm text-primary hover:underline text-center sm:text-left"
                >
                  {showDetails ? "Ocultar detalhes" : "Ver detalhes"}
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                Ao continuar navegando, você aceita nossa{" "}
                <Link to="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>{" "}
                e{" "}
                <Link to="/termos" className="text-primary hover:underline">
                  Termos e Condições
                </Link>.
                {" "}Este site está em conformidade com a LGPD e o TCF (Transparency and Consent Framework) da IAB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
