import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Origens permitidas (CORS restrito ao domínio oficial e preview do Lovable)
const ALLOWED_ORIGINS = [
  "https://marsheviagens.com",
  "https://www.marsheviagens.com",
];

function buildCorsHeaders(origin: string | null) {
  let isAllowed = false;
  if (origin) {
    try {
      const host = new URL(origin).hostname;
      isAllowed =
        ALLOWED_ORIGINS.includes(origin) ||
        /\.lovable\.(app|dev)$/.test(host) ||
        /^http:\/\/localhost(:\d+)?$/.test(origin);
    } catch {
      isAllowed = false;
    }
  }
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin! : "https://marsheviagens.com",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

const MARSHE_WHATSAPP = "5531972391400";

// Sanitiza string para evitar injeção em mensagens
function sanitize(input: unknown, maxLen = 200): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[*_`~]/g, "")
    .trim()
    .slice(0, maxLen);
}

serve(async (req) => {
  const corsHeaders = buildCorsHeaders(req.headers.get("origin"));

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const name = sanitize(body.name, 120);
    const email = sanitize(body.email, 160);
    const whatsapp = sanitize(body.whatsapp, 30);
    const destination = sanitize(body.destination, 120);
    const travelers = sanitize(body.travelers, 60);
    const travelDate = sanitize(body.travelDate, 30);

    if (!name || !whatsapp || !destination) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios: nome, whatsapp e destino." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format travel date
    const formattedDate = travelDate
      ? new Date(travelDate + "T00:00:00").toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : "A definir";

    // Build WhatsApp message
    const message = [
      "🌴 *Novo Lead - Marshe Viagens*",
      "",
      `👤 *Nome:* ${name}`,
      `📱 *WhatsApp:* ${whatsapp}`,
      email ? `📧 *E-mail:* ${email}` : null,
      `🏖️ *Destino:* ${destination}`,
      `👥 *Viajantes:* ${travelers || "Não informado"}`,
      `📅 *Data da viagem:* ${formattedDate}`,
      "",
      "✨ _Contato recebido pelo site marsheviagens.com_",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${MARSHE_WHATSAPP}?text=${encodedMessage}`;

    return new Response(
      JSON.stringify({ success: true, whatsappUrl }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing lead");
    return new Response(
      JSON.stringify({ error: "Erro ao processar a solicitação." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
