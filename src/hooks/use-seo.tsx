import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export const useSeo = ({ title, description, canonical }: SeoProps) => {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    return () => {
      // Reset on unmount
      document.title = "Marshe Viagens - Agência de Viagens em Minas Gerais";
    };
  }, [title, description, canonical]);
};
