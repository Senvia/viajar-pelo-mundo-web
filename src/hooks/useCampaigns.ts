import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { NewsletterCampaign } from "@/types/Newsletter";
import { useToast } from "@/hooks/use-toast";

export const useCampaigns = () => {
  return useQuery({
    queryKey: ["newsletter-campaigns"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("newsletter_campaigns")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as NewsletterCampaign[];
    },
  });
};

export const useCreateCampaign = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (campaign: { title: string; subject: string; content: string; status: string }) => {
      const { data, error } = await supabase
        .from("newsletter_campaigns")
        .insert([campaign])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsletter-campaigns"] });
      toast({ title: "Campanha criada com sucesso!" });
    },
    onError: (error: Error) => {
      toast({ 
        title: "Erro ao criar campanha", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });
};

export const useUpdateCampaign = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...campaign }: Partial<NewsletterCampaign> & { id: string }) => {
      const { data, error } = await supabase
        .from("newsletter_campaigns")
        .update(campaign)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsletter-campaigns"] });
      toast({ title: "Campanha atualizada!" });
    },
    onError: (error: Error) => {
      toast({ 
        title: "Erro ao atualizar campanha", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });
};

export const useSendCampaign = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (campaignId: string) => {
      const { data, error } = await supabase.functions.invoke("send-newsletter", {
        body: { campaignId },
      });

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsletter-campaigns"] });
      toast({ 
        title: "Newsletter enviada!", 
        description: "Os emails estão sendo enviados aos inscritos." 
      });
    },
    onError: (error: Error) => {
      toast({ 
        title: "Erro ao enviar newsletter", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });
};
