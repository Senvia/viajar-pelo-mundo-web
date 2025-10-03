import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/Blog";
import { useToast } from "@/hooks/use-toast";

export const useBlogPosts = (page = 1, limit = 6, categorySlug?: string, publishedOnly = true) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  return useQuery({
    queryKey: ["blog-posts", page, limit, categorySlug, publishedOnly],
    queryFn: async () => {
      let query = supabase
        .from("blog_posts")
        .select("*, blog_categories(*)", { count: "exact" })
        .order("published_at", { ascending: false, nullsFirst: false })
        .order("created_at", { ascending: false })
        .range(from, to);

      if (publishedOnly) {
        query = query.eq("published", true);
      }

      if (categorySlug) {
        const { data: category } = await supabase
          .from("blog_categories")
          .select("id")
          .eq("slug", categorySlug)
          .single();
        
        if (category) {
          query = query.eq("category_id", category.id);
        }
      }

      const { data, error, count } = await query;

      if (error) throw error;
      return { posts: data as BlogPost[], count: count || 0 };
    },
  });
};

export const useBlogPost = (slug: string) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*, blog_categories(*)")
        .eq("slug", slug)
        .single();

      if (error) throw error;

      // Increment views
      if (data) {
        await supabase
          .from("blog_posts")
          .update({ views_count: (data.views_count || 0) + 1 })
          .eq("id", data.id);
      }

      return data as BlogPost;
    },
  });
};

export const useBlogPostById = (id: string) => {
  return useQuery({
    queryKey: ["blog-post-by-id", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*, blog_categories(*)")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!id,
  });
};

export const useMostReadPosts = (limit = 5) => {
  return useQuery({
    queryKey: ["most-read-posts", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, slug, title, featured_image, views_count")
        .eq("published", true)
        .order("views_count", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data;
    },
  });
};

export const useCreateBlogPost = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'views_count' | 'blog_categories'>) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .insert([post as any])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      toast({ title: "Post criado com sucesso!" });
    },
    onError: () => {
      toast({ title: "Erro ao criar post", variant: "destructive" });
    },
  });
};

export const useUpdateBlogPost = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...post }: Partial<BlogPost> & { id: string }) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .update(post)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      queryClient.invalidateQueries({ queryKey: ["blog-post"] });
      toast({ title: "Post atualizado com sucesso!" });
    },
    onError: () => {
      toast({ title: "Erro ao atualizar post", variant: "destructive" });
    },
  });
};

export const useDeleteBlogPost = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      toast({ title: "Post excluído com sucesso!" });
    },
    onError: () => {
      toast({ title: "Erro ao excluir post", variant: "destructive" });
    },
  });
};

export const usePublishBlogPost = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .update({ 
          published: true,
          published_at: new Date().toISOString()
        })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      toast({ title: "Post publicado com sucesso!" });
    },
    onError: () => {
      toast({ title: "Erro ao publicar post", variant: "destructive" });
    },
  });
};
