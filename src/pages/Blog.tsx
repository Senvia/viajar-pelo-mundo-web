import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const categorySlug = searchParams.get("categoria") || undefined;
  
  const { data, isLoading } = useBlogPosts(page, 6, categorySlug);

  const totalPages = data ? Math.ceil(data.count / 6) : 0;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="light" />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 pt-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Blog Viajar para Europa
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              Dicas, roteiros e tudo que você precisa saber para viajar pela Europa
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
              {/* Posts Column */}
              <div>
                {isLoading ? (
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
                      Nenhum post encontrado.
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

export default Blog;
