import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

interface ShareWhatsAppButtonProps {
  title: string;
  /** Extra detail line, e.g. "A partir de R$ 3.000 saindo de BH" or "Leia no blog Marshe". */
  highlight?: string;
  /** Override URL — defaults to current page. */
  url?: string;
  className?: string;
  /** Hint shown to the user when "kind" is "destino" vs "artigo". */
  kind?: "destino" | "artigo";
  fullWidth?: boolean;
}

/**
 * Compartilhar via WhatsApp.
 * - Mobile: usa `wa.me` (abre o app instalado quando disponível, fallback para WhatsApp Web).
 * - Desktop: usa `https://wa.me` que oferece "Continuar no WhatsApp Web".
 * - Quando o navegador suporta a Web Share API e está em mobile, tenta abrir o seletor nativo
 *   (que inclui WhatsApp e outros apps), com fallback para `wa.me`.
 */
const ShareWhatsAppButton = ({
  title,
  highlight,
  url,
  className,
  kind = "destino",
  fullWidth = true,
}: ShareWhatsAppButtonProps) => {
  const handleClick = async () => {
    const pageUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const emoji = kind === "destino" ? "✈️" : "📖";
    const intro = kind === "destino" ? "Confira esse destino na Marshe Viagens" : "Leia esse artigo no blog da Marshe Viagens";
    const message = highlight
      ? `${emoji} *${title}*\n${highlight}\n\n${intro}: ${pageUrl}`
      : `${emoji} *${title}*\n\n${intro}: ${pageUrl}`;

    const isMobile =
      typeof navigator !== "undefined" &&
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

    // Try Web Share API on mobile (lets user pick WhatsApp from native sheet)
    if (isMobile && typeof navigator !== "undefined" && (navigator as any).share) {
      try {
        await (navigator as any).share({
          title,
          text: message,
          url: pageUrl,
        });
        return;
      } catch {
        // user cancelled or unsupported — fall through to wa.me
      }
    }

    // wa.me works on both mobile (opens app) and desktop (opens WhatsApp Web)
    const waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const win = window.open(waUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      // popup blocked — copy link as fallback
      try {
        await navigator.clipboard.writeText(`${message}`);
        toast.success("Link copiado! Cole no WhatsApp.");
      } catch {
        toast.error("Não foi possível abrir o WhatsApp. Copie o link manualmente.");
      }
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={handleClick}
      className={`${fullWidth ? "w-full" : ""} gap-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white dark:border-green-500 dark:text-green-400 dark:hover:bg-green-600 dark:hover:text-white ${className || ""}`}
    >
      <Share2 className="w-4 h-4" />
      Compartilhar pelo WhatsApp
    </Button>
  );
};

export default ShareWhatsAppButton;
