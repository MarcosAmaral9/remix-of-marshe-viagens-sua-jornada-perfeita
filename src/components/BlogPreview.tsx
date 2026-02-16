import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const latestPosts = blogPosts.slice(0, 3);

const BlogPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % latestPosts.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const post = latestPosts[activeIndex];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Blog Marshe Viagens
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Dicas e Guias para sua <span className="text-primary">Próxima Viagem</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Conteúdo completo para planejar sua viagem com segurança e economia.
          </p>
        </div>

        {/* Featured post card */}
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/blog/${post.slug}`}
            className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-80 overflow-hidden">
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
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3 mb-3">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="text-primary font-medium text-sm group-hover:underline">
                  Ler artigo completo →
                </span>
              </div>
            </div>
          </Link>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {latestPosts.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ver post ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
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
