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
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
          <div className="w-full sm:w-48 h-48 sm:h-32 relative overflow-hidden rounded-lg sm:flex-shrink-0">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="flex-1 flex flex-col">
            {post.blog_categories && (
              <Badge 
                className="mb-2 w-fit"
                style={{ backgroundColor: post.blog_categories.color }}
              >
                {post.blog_categories.name}
              </Badge>
            )}
            
            <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
              {post.title}
            </h3>
            
            <p className="text-muted-foreground mb-3 line-clamp-2 text-sm flex-1">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground mt-auto">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>
                  {format(new Date(post.published_at || post.created_at), "dd MMM yyyy", { locale: ptBR })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author_name}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
