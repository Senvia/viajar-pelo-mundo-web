import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BlogAd } from "@/types/Blog";
import { useToast } from "@/hooks/use-toast";

export const useBlogAds = (position?: 'top' | 'middle') => {
  return useQuery({
    queryKey: ["blog-ads", position],
    queryFn: async () => {
      let query = supabase
        .from("blog_ads")
        .select("*")
        .eq("active", true);

      if (position) {
        query = query.eq("position", position);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as BlogAd[];
    },
  });
};

export const useAllBlogAds = () => {
  return useQuery({
    queryKey: ["all-blog-ads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_ads")
        .select("*")
        .order("position", { ascending: true });

      if (error) throw error;
      return data as BlogAd[];
    },
  });
};

export const useUpdateBlogAd = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...ad }: Partial<BlogAd> & { id: string }) => {
      const { data, error } = await supabase
        .from("blog_ads")
        .update(ad)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-ads"] });
      queryClient.invalidateQueries({ queryKey: ["all-blog-ads"] });
      toast({ title: "Anúncio atualizado com sucesso!" });
    },
    onError: () => {
      toast({ title: "Erro ao atualizar anúncio", variant: "destructive" });
    },
  });
};

export const useCreateBlogAd = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (ad: Omit<BlogAd, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from("blog_ads")
        .insert([ad as any])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-ads"] });
      queryClient.invalidateQueries({ queryKey: ["all-blog-ads"] });
      toast({ title: "Anúncio criado com sucesso!" });
    },
    onError: () => {
      toast({ title: "Erro ao criar anúncio", variant: "destructive" });
    },
  });
};
