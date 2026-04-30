import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AdSense from "@/components/AdSense";
import AudioNarrator from "@/components/AudioNarrator";
import { blogPosts } from "@/data/blogPosts";
import { useSeo } from "@/hooks/use-seo";

const POSTS_PER_PAGE = 9;
import { ArrowLeft, Calendar, Clock, Tag, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useSeo({
    title: post ? `${post.title} | Marshe Viagens Blog` : "Blog | Marshe Viagens",
    description: post?.metaDescription || "",
    canonical: post ? `https://marsheviagens.com/blog/${post.slug}` : undefined,
    ogParams: post
      ? {
          title: post.title,
          highlight: `${post.categoryLabel} • ${post.readTime} de leitura`,
          kind: "Blog",
        }
      : undefined,
  });

  if (!post) return <Navigate to="/blog" replace />;

  // 1 post de cada categoria (excluindo o atual), ordenado por data mais recente
  const categories = ["guias", "dicas", "roteiros"] as const;
  const relatedPosts = categories
    .map((cat) =>
      blogPosts
        .filter((p) => p.slug !== post.slug && p.category === cat)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
    )
    .filter(Boolean) as typeof blogPosts;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // Plain text for TTS narration (strip markdown)
  const narratorText = `${post.title}. ${post.content
    .replace(/#{1,3} /g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/- /g, "")
    .replace(/\n\n+/g, ". ")
    .replace(/\n/g, " ")
    .trim()}`;

  // Split content into sections for ad insertion
  const htmlContent = markdownToHtml(post.content);
  const sections = htmlContent.split(/<h2>/);
  const firstHalf = sections.slice(0, Math.ceil(sections.length / 2)).join("<h2>");
  const secondHalf = "<h2>" + sections.slice(Math.ceil(sections.length / 2)).join("<h2>");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <article>
          {/* Header */}
          <section className="relative py-12 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
            <div className="container mx-auto px-4 max-w-4xl">
              {(() => {
                const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                const postIndex = sortedPosts.findIndex((p) => p.slug === post.slug);
                const page = Math.floor(postIndex / POSTS_PER_PAGE) + 1;
                const to = page > 1 ? `/blog?page=${page}` : "/blog";
                return (
                  <Link to={to} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4" /> Voltar ao blog
                  </Link>
                );
              })()}

              <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                {post.categoryLabel}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="mt-6 rounded-2xl overflow-hidden max-h-96">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime} de leitura</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Ad after header */}
          <div className="container mx-auto px-4 max-w-4xl">
            <AdSense slot="1234567890" format="horizontal" />
          </div>

          {/* Content with mid-article ad */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Audio Narrator + Share row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
                <div className="flex-1">
                  <AudioNarrator text={narratorText} title={post.title} articleSlug={post.slug} />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 shrink-0"
                  onClick={async () => {
                    const url = window.location.href;
                    if (navigator.share) {
                      try {
                        await navigator.share({ title: post.title, text: post.excerpt, url });
                      } catch (e) { /* cancelled */ }
                    } else {
                      await navigator.clipboard.writeText(url);
                      toast.success("Link copiado!");
                    }
                  }}
                >
                  <Share2 className="w-4 h-4" /> Compartilhar
                </Button>
              </div>

              {/* First half of content */}
              <div
                className="prose prose-lg max-w-none dark:prose-invert
                  prose-headings:font-serif prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground prose-li:text-muted-foreground
                  prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: firstHalf }}
              />

              {/* Contextual mid-article CTA */}
              <div className="my-10 p-6 bg-primary/5 border border-primary/20 rounded-xl flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1">
                  <p className="font-serif font-bold text-foreground text-lg mb-1">
                    💡 Quer conhecer esse destino?
                  </p>
                  <p className="text-muted-foreground text-sm">
                    A Marshe monta pacotes personalizados com aéreo, hospedagem e traslados saindo de BH.
                  </p>
                </div>
                <Button asChild variant="hero" size="sm" className="shrink-0">
                  <a href="https://wa.me/5531972391400?text=Ol%C3%A1!%20Vi%20o%20artigo%20e%20quero%20um%20pacote." target="_blank" rel="noopener noreferrer">
                    Solicitar Cotação
                  </a>
                </Button>
              </div>

              {/* Mid-article ad */}
              <AdSense slot="2345678901" format="rectangle" />

              {/* Second half of content */}
              {sections.length > 1 && (
                <div
                  className="prose prose-lg max-w-none dark:prose-invert
                    prose-headings:font-serif prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground prose-li:text-muted-foreground
                    prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: secondHalf }}
                />
              )}

              {/* CTA */}
              <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Pronto para sua próxima viagem?
                </h3>
                <p className="text-muted-foreground mb-6">
                  A Marshe Viagens tem pacotes completos saindo de Belo Horizonte com aéreo, hospedagem e traslados.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="hero">
                    <Link to="/destinos">Ver Destinos</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://wa.me/5531972391400" target="_blank" rel="noopener noreferrer">
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Ad before related posts */}
          <div className="container mx-auto px-4 max-w-4xl">
            <AdSense slot="3456789012" format="horizontal" />
          </div>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <section className="py-12 lg:py-16 bg-muted/30">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Posts Relacionados</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-40 overflow-hidden bg-primary/10">
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                            {rp.categoryLabel}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">{rp.title}</h3>
                        <span className="text-xs text-muted-foreground">{rp.readTime} de leitura</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.metaDescription,
              image: post.image,
              author: { "@type": "Organization", name: post.author },
              datePublished: post.date,
              publisher: {
                "@type": "Organization",
                name: "Marshe Viagens",
                url: "https://marsheviagens.com",
              },
              mainEntityOfPage: shareUrl,
            }),
          }}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])/gm, (match) => match ? `<p>${match}` : match)
    .replace(/\n/g, '<br/>');
}

export default BlogPost;
