import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredSlugs = [
  "economizar-viagem-nordeste-dicas",
  "guia-completo-fortaleza-ce",
  "documentos-necessarios-viagem-nacional",
];

const featuredPosts = featuredSlugs
  .map((slug) => blogPosts.find((p) => p.slug === slug))
  .filter(Boolean) as typeof blogPosts;

const displayPosts = featuredPosts.length >= 3
  ? featuredPosts
  : blogPosts.slice(0, 3);

const BlogPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Conteúdo que Prende
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Dicas e Guias para <span className="text-primary">Viajar Melhor</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {post.categoryLabel}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 font-serif">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ler artigo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/blog">
              Ver todos os posts <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
