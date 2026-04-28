import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

// Matilda — voz feminina de alta qualidade compatível com PT-BR
const VOICE_ID = "XrExE9yKIg1WjnnlVkGX";

serve(async (req) => {
  const corsHeaders = buildCorsHeaders(req.headers.get("origin"));

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ELEVENLABS_API_KEY = Deno.env.get("ELEVENLABS_API_KEY");
    if (!ELEVENLABS_API_KEY) {
      return new Response(
        JSON.stringify({ error: "TTS service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return new Response(JSON.stringify({ error: "text is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Truncate to ElevenLabs limit
    const truncatedText = text.slice(0, 5000);

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: truncatedText,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.55,
            similarity_boost: 0.80,
            style: 0.2,
            use_speaker_boost: true,
            speed: 1.0,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error(`ElevenLabs API error: ${response.status}`);
      return new Response(
        JSON.stringify({ error: "TTS provider error" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const audioBuffer = await response.arrayBuffer();

    return new Response(audioBuffer, {
      headers: {
        ...corsHeaders,
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error("TTS error");
    return new Response(
      JSON.stringify({ error: "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
