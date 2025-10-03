import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { NewsletterSubscriber } from "@/types/Blog";
import { useToast } from "@/hooks/use-toast";

export const useNewsletterSubscribers = () => {
  return useQuery({
    queryKey: ["newsletter-subscribers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .order("subscribed_at", { ascending: false });

      if (error) throw error;
      return data as NewsletterSubscriber[];
    },
  });
};

export const useSubscribeNewsletter = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ email, name }: { email: string; name?: string }) => {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email, name: name || null }])
        .select()
        .single();

      if (error) {
        if (error.code === "23505") {
          throw new Error("Este email já está cadastrado!");
        }
        throw error;
      }
      return data;
    },
    onSuccess: () => {
      toast({ 
        title: "Inscrição realizada!", 
        description: "Você receberá nossas novidades em breve." 
      });
    },
    onError: (error: Error) => {
      toast({ 
        title: "Erro ao se inscrever", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });
};

export const useToggleNewsletterSubscriber = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, active }: { id: string; active: boolean }) => {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .update({ active })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsletter-subscribers"] });
      toast({ title: "Status atualizado com sucesso!" });
    },
    onError: () => {
      toast({ title: "Erro ao atualizar status", variant: "destructive" });
    },
  });
};
