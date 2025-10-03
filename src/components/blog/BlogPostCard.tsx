import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { BlogPost } from "@/types/Blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          {post.blog_categories && (
            <Badge 
              className="mb-3"
              style={{ backgroundColor: post.blog_categories.color }}
            >
              {post.blog_categories.name}
            </Badge>
          )}
          
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {format(new Date(post.published_at || post.created_at), "dd MMM yyyy", { locale: ptBR })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author_name}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
