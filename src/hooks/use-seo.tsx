import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

const DEFAULT_TITLE = "Marshe Viagens - Agência de Viagens em Minas Gerais | Pacotes, Passagens e Hospedagens";
const DEFAULT_DESC = "Marshe Viagens - Agência de viagens em Contagem, MG. Pacotes para Porto Seguro, Fortaleza, Salvador, Gramado e mais.";
const DEFAULT_IMAGE = "https://marsheviagens.com/og-image.jpg?v=3";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [attrName, attrVal] = selector.replace("meta[", "").replace("]", "").split("=");
    el.setAttribute(attrName.trim(), attrVal.replace(/"/g, "").trim());
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export const useSeo = ({ title, description, canonical, image }: SeoProps) => {
  useEffect(() => {
    const img = image || DEFAULT_IMAGE;
    const url = canonical || "https://marsheviagens.com/";

    // Título da aba
    document.title = title;

    // Meta description
    setMeta('meta[name="description"]', "content", description);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", img);

    // Twitter
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:url"]', "content", url);
    setMeta('meta[name="twitter:image"]', "content", img);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', "content", DEFAULT_DESC);
      setMeta('meta[property="og:title"]', "content", "Marshe Viagens - Agência de Viagens em Contagem, MG");
      setMeta('meta[property="og:description"]', "content", DEFAULT_DESC);
      setMeta('meta[property="og:url"]', "content", "https://marsheviagens.com/");
      setMeta('meta[property="og:image"]', "content", DEFAULT_IMAGE);
    };
  }, [title, description, canonical, image]);
};
