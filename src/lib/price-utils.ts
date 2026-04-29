/**
 * Utilitários de preço para o site Marshe Viagens.
 *
 * Faz parse robusto de strings BRL como:
 *   "R$ 2.319"
 *   "R$ 12.600,00"
 *   "R$ 1.838,50"
 *   "1842"
 *   "R$ 1 200,00"   (espaço como separador de milhar)
 *   "R$1.000.000,99"
 *
 * Rejeita entradas inválidas retornando NaN para que callers possam filtrar.
 */

/**
 * Converte uma string de preço em BRL para número.
 * Retorna NaN se a string não contiver um valor numérico válido.
 */
export function parsePrice(input: unknown): number {
  if (typeof input === "number" && Number.isFinite(input)) return input;
  if (typeof input !== "string") return NaN;

  // Remove tudo que não for dígito, vírgula, ponto ou sinal de menos
  const cleaned = input.replace(/[^\d,.\-]/g, "").trim();
  if (!cleaned) return NaN;

  const lastComma = cleaned.lastIndexOf(",");
  const lastDot = cleaned.lastIndexOf(".");

  let normalized: string;

  if (lastComma === -1 && lastDot === -1) {
    // Somente dígitos
    normalized = cleaned;
  } else if (lastComma > lastDot) {
    // Vírgula é o separador decimal (padrão pt-BR). Pontos = milhar.
    normalized = cleaned.replace(/\./g, "").replace(",", ".");
  } else {
    // Ponto é o separador decimal (padrão en-US). Vírgulas = milhar.
    normalized = cleaned.replace(/,/g, "");
  }

  const num = parseFloat(normalized);
  return Number.isFinite(num) && num >= 0 ? num : NaN;
}

/**
 * Formata um número como preço em BRL, ex: 2319 -> "R$ 2.319".
 * Use `withCents` para forçar duas casas decimais.
 */
export function formatPrice(value: number, withCents = false): string {
  if (!Number.isFinite(value)) return "R$ —";
  return `R$ ${value.toLocaleString("pt-BR", {
    minimumFractionDigits: withCents ? 2 : 0,
    maximumFractionDigits: withCents ? 2 : 0,
  })}`;
}

/** Retorna o menor preço válido de uma lista de itens, dado um seletor. */
export function getMinPrice<T>(items: T[], selector: (item: T) => string | number): number {
  const values = items.map(selector).map(parsePrice).filter((n) => Number.isFinite(n));
  return values.length ? Math.min(...values) : NaN;
}

/** Retorna o maior preço válido de uma lista de itens. */
export function getMaxPrice<T>(items: T[], selector: (item: T) => string | number): number {
  const values = items.map(selector).map(parsePrice).filter((n) => Number.isFinite(n));
  return values.length ? Math.max(...values) : NaN;
}

/** Ordena uma lista do menor para o maior preço (ascendente), sem mutar o array original. */
export function sortByPriceAsc<T>(items: T[], selector: (item: T) => string | number): T[] {
  return [...items].sort((a, b) => {
    const pa = parsePrice(selector(a));
    const pb = parsePrice(selector(b));
    if (!Number.isFinite(pa)) return 1;
    if (!Number.isFinite(pb)) return -1;
    return pa - pb;
  });
}

/** Retorna a faixa de preços formatada, ex: "R$ 2.319 – R$ 3.600". */
export function formatPriceRange<T>(items: T[], selector: (item: T) => string | number): string {
  const min = getMinPrice(items, selector);
  const max = getMaxPrice(items, selector);
  if (!Number.isFinite(min)) return "R$ —";
  if (min === max) return formatPrice(min);
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}
