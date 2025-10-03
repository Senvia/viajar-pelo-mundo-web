import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, Share2, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || "");

  if (error) {
    return <Navigate to="/blog" replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-96 w-full mb-8" />
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/2 mb-8" />
            <Skeleton className="h-64 w-full" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) return null;

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="light" />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="w-full h-96 relative overflow-hidden">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <article className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Content */}
            <div className="bg-background rounded-lg shadow-lg p-8">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-primary">Blog</Link>
                {post.blog_categories && (
                  <>
                    <span>/</span>
                    <Link 
                      to={`/blog/categoria/${post.blog_categories.slug}`}
                      className="hover:text-primary"
                    >
                      {post.blog_categories.name}
                    </Link>
                  </>
                )}
              </div>

              {/* Category Badge */}
              {post.blog_categories && (
                <Badge 
                  className="mb-4"
                  style={{ backgroundColor: post.blog_categories.color }}
                >
                  {post.blog_categories.name}
                </Badge>
              )}

              {/* Title */}
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {format(new Date(post.published_at || post.created_at), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author_name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={sharePost}
                  className="ml-auto"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Back Button */}
              <div className="mt-12 pt-6 border-t">
                <Link to="/blog">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para o blog
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
