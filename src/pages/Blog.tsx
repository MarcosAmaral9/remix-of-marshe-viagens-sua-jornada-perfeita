import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { blogPosts, categories } from "@/data/blogPosts";
import { Calendar, Clock, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "todos" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Blog Marshe Viagens
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4">
              Guias, Dicas e Roteiros de <span className="text-primary">Viagem</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              Conteúdo completo para planejar sua próxima viagem. Guias de destinos, dicas práticas e roteiros detalhados para você aproveitar ao máximo.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.value}
                    variant={activeCategory === cat.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat.value)}
                    className="rounded-full"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Nenhum post encontrado.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-48 overflow-hidden bg-primary/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-30">✈️</span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                          {post.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("pt-BR")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
