import { destinations as nordesteDestinations } from "@/pages/DestinosNordeste";
import { destinations as sulDestinations } from "@/pages/DestinosSul";
import { parsePrice, formatPrice } from "@/lib/price-utils";

const allDestinations = [...nordesteDestinations, ...sulDestinations];

/**
 * Busca um destino pelo slug nas listas oficiais (Nordeste + Sul).
 * Use isto em páginas de detalhe para evitar duplicar preços hardcoded.
 */
export function getDestinationBySlug(slug: string) {
  return allDestinations.find((d) => d.slug === slug);
}

/** Retorna o preço formatado de um destino pelo slug, ou "R$ —" se não encontrado. */
export function getDestinationPrice(slug: string): string {
  const dest = getDestinationBySlug(slug);
  if (!dest) return "R$ —";
  return formatPrice(parsePrice(dest.price));
}
