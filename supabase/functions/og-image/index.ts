// Generates a 1200x630 PNG OG image with title + highlight, on the Marshe brand background.
// Public endpoint (no JWT) — used by social crawlers (WhatsApp, Facebook, X, LinkedIn).
// @ts-ignore deno esm import
import { Resvg, initWasm } from "https://esm.sh/@resvg/resvg-wasm@2.6.2";

let wasmReady: Promise<void> | null = null;
async function ensureWasm() {
  if (!wasmReady) {
    wasmReady = (async () => {
      const wasm = await fetch(
        "https://unpkg.com/@resvg/resvg-wasm@2.6.2/index_bg.wasm",
      ).then((r) => r.arrayBuffer());
      await initWasm(wasm);
    })();
  }
  return wasmReady;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Word-wrap to a given max chars per line
function wrap(text: string, maxChars: number, maxLines: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const tentative = current ? current + " " + w : w;
    if (tentative.length > maxChars && current) {
      lines.push(current);
      current = w;
      if (lines.length === maxLines - 1) break;
    } else {
      current = tentative;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  if (lines.length === maxLines && words.join(" ").length > lines.join(" ").length) {
    const last = lines[maxLines - 1];
    lines[maxLines - 1] = last.slice(0, Math.max(0, maxChars - 1)).trimEnd() + "…";
  }
  return lines;
}

function buildSvg(title: string, highlight: string, kind: string) {
  const t = escapeXml(title.slice(0, 140));
  const h = escapeXml(highlight.slice(0, 90));
  const k = escapeXml(kind.toUpperCase());

  const titleLines = wrap(t, 22, 3);
  const lineHeight = 84;
  const titleStartY = 240;
  const titleTspans = titleLines
    .map((l, i) => `<tspan x="80" y="${titleStartY + i * lineHeight}">${l}</tspan>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#bfe0f5"/>
      <stop offset="55%" stop-color="#7ec3ee"/>
      <stop offset="100%" stop-color="#1e6fa8"/>
    </linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.04"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Soft globe accent (right side) -->
  <circle cx="1020" cy="320" r="220" fill="#1976d2" opacity="0.18"/>
  <circle cx="1020" cy="320" r="170" fill="#2e7d32" opacity="0.22"/>

  <!-- Plane silhouette -->
  <g transform="translate(880,140) rotate(-20)" fill="#ffffff" opacity="0.95">
    <path d="M0,30 L120,15 L180,0 L200,5 L195,25 L150,40 L130,55 L60,70 L40,55 L0,55 Z"/>
    <rect x="60" y="55" width="35" height="14" rx="3"/>
  </g>

  <!-- Frosted card behind text -->
  <rect x="60" y="90" width="780" height="460" rx="32" fill="url(#card)" stroke="#ffffff" stroke-opacity="0.25" stroke-width="2"/>

  <!-- Kind / category pill -->
  <g transform="translate(80,130)">
    <rect width="${Math.max(140, k.length * 14 + 40)}" height="44" rx="22" fill="#ffffff" fill-opacity="0.92"/>
    <text x="${Math.max(140, k.length * 14 + 40) / 2}" y="29" text-anchor="middle"
      font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="18" fill="#1e6fa8" letter-spacing="2">${k}</text>
  </g>

  <!-- Title -->
  <text font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="72" fill="#0a2540">
    <tspan x="80" y="${titleStartY}">${titleTspans.replace(/<tspan x="80" dy="0">/, "")}</tspan>
  </text>

  <!-- Highlight -->
  <text x="80" y="500" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="600" font-size="32" fill="#0a2540" opacity="0.85">${h}</text>

  <!-- Brand bar -->
  <rect x="0" y="586" width="1200" height="44" fill="#0a2540"/>
  <text x="80" y="616" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="22" fill="#ffffff" letter-spacing="3">MARSHE VIAGENS</text>
  <text x="1120" y="616" text-anchor="end" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="500" font-size="20" fill="#ffffff" opacity="0.85">marsheviagens.com</text>
</svg>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const title = (url.searchParams.get("title") || "Marshe Viagens").trim();
    const highlight = (url.searchParams.get("highlight") || "Sua próxima aventura começa aqui").trim();
    const kind = (url.searchParams.get("kind") || "Marshe").trim();

    await ensureWasm();
    const svg = buildSvg(title, highlight, kind);
    const resvg = new Resvg(svg, {
      fitTo: { mode: "width", value: 1200 },
      font: { loadSystemFonts: false },
    });
    const png = resvg.render().asPng();

    return new Response(png, {
      headers: {
        ...corsHeaders,
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable",
      },
    });
  } catch (e) {
    console.error("og-image error", e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
