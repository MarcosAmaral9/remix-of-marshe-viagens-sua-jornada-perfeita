import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const MARSHE_WHATSAPP = "5531972391400";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, whatsapp, destination, travelers, travelDate } = await req.json();

    // Validate required fields
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
      "✨ _Contato recebido pelo site marsheviagens.com.br_",
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
    console.error("Error processing lead:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
