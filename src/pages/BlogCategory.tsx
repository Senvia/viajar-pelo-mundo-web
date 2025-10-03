import { useState } from "react";
import { useParams, useSearchParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useBlogCategory } from "@/hooks/useBlogCategories";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import * as Icons from "lucide-react";

const BlogCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  
  const { data: category, isLoading: categoryLoading, error } = useBlogCategory(slug || "");
  const { data, isLoading: postsLoading } = useBlogPosts(page, 6, slug);

  if (error) {
    return <Navigate to="/blog" replace />;
  }

  const totalPages = data ? Math.ceil(data.count / 6) : 0;
  const IconComponent = category ? (Icons as any)[category.icon] || Icons.FolderOpen : Icons.FolderOpen;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="py-16"
          style={{ 
            background: category ? `linear-gradient(135deg, ${category.color}15, ${category.color}05)` : undefined 
          }}
        >
          <div className="container mx-auto px-4 text-center">
            {categoryLoading ? (
              <>
                <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                <Skeleton className="h-12 w-64 mx-auto mb-4" />
                <Skeleton className="h-6 w-96 mx-auto" />
              </>
            ) : category ? (
              <>
                <IconComponent 
                  className="h-16 w-16 mx-auto mb-4" 
                  style={{ color: category.color }}
                />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {category.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  Explore todos os posts sobre {category.name.toLowerCase()}
                </p>
              </>
            ) : null}
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
              {/* Posts Column */}
              <div>
                {postsLoading ? (
                  <div className="space-y-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-4">
                        <Skeleton className="h-64 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    ))}
                  </div>
                ) : data && data.posts.length > 0 ? (
                  <>
                    <div className="space-y-8">
                      {data.posts.map((post) => (
                        <BlogPostCard key={post.id} post={post} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="mt-12">
                        <Pagination>
                          <PaginationContent>
                            {page > 1 && (
                              <PaginationItem>
                                <PaginationPrevious
                                  onClick={() => handlePageChange(page - 1)}
                                  className="cursor-pointer"
                                />
                              </PaginationItem>
                            )}
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                              <PaginationItem key={pageNum}>
                                <PaginationLink
                                  onClick={() => handlePageChange(pageNum)}
                                  isActive={pageNum === page}
                                  className="cursor-pointer"
                                >
                                  {pageNum}
                                </PaginationLink>
                              </PaginationItem>
                            ))}

                            {page < totalPages && (
                              <PaginationItem>
                                <PaginationNext
                                  onClick={() => handlePageChange(page + 1)}
                                  className="cursor-pointer"
                                />
                              </PaginationItem>
                            )}
                          </PaginationContent>
                        </Pagination>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-muted-foreground">
                      Nenhum post encontrado nesta categoria.
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <BlogSidebar />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogCategory;
