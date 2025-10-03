import { Link } from "react-router-dom";
import { useBlogAds } from "@/hooks/useBlogAds";
import { useBlogCategories } from "@/hooks/useBlogCategories";
import { useMostReadPosts } from "@/hooks/useBlogPosts";
import { BlogNewsletterForm } from "./BlogNewsletterForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as Icons from "lucide-react";

export const BlogSidebar = () => {
  const { data: topAd } = useBlogAds('top');
  const { data: middleAd } = useBlogAds('middle');
  const { data: categories } = useBlogCategories();
  const { data: mostReadPosts } = useMostReadPosts();

  return (
    <aside className="space-y-6">
      {/* Anúncio Topo */}
      {topAd && topAd[0] && (
        <a 
          href={topAd[0].link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={topAd[0].image}
            alt={topAd[0].title}
            className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{ width: '300px', height: '250px', objectFit: 'cover' }}
          />
        </a>
      )}

      {/* Anúncio Meio */}
      {middleAd && middleAd[0] && (
        <a 
          href={middleAd[0].link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={middleAd[0].image}
            alt={middleAd[0].title}
            className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{ width: '300px', height: '250px', objectFit: 'cover' }}
          />
        </a>
      )}

      {/* Categorias */}
      <Card>
        <CardHeader>
          <CardTitle>Categorias</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories?.map((category) => {
            const IconComponent = (Icons as any)[category.icon] || Icons.FolderOpen;
            return (
              <Link
                key={category.id}
                to={`/blog/categoria/${category.slug}`}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors"
              >
                <IconComponent 
                  className="h-5 w-5" 
                  style={{ color: category.color }}
                />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card>
        <CardHeader>
          <CardTitle>Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Receba nossas novidades e dicas de viagem diretamente no seu email!
          </p>
          <BlogNewsletterForm />
        </CardContent>
      </Card>

      {/* Posts Mais Lidos */}
      <Card>
        <CardHeader>
          <CardTitle>Mais Lidos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mostReadPosts?.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="flex gap-3 hover:bg-accent p-2 rounded-md transition-colors"
            >
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium text-sm line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <Badge variant="secondary" className="text-xs">
                  {post.views_count} visualizações
                </Badge>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
};
