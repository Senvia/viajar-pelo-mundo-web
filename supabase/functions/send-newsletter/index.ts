import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendNewsletterRequest {
  campaignId: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { campaignId }: SendNewsletterRequest = await req.json();

    console.log("Sending newsletter for campaign:", campaignId);

    // Buscar dados da campanha
    const { data: campaign, error: campaignError } = await supabase
      .from("newsletter_campaigns")
      .select("*")
      .eq("id", campaignId)
      .single();

    if (campaignError || !campaign) {
      throw new Error("Campanha não encontrada");
    }

    // Buscar inscritos ativos
    const { data: subscribers, error: subscribersError } = await supabase
      .from("newsletter_subscribers")
      .select("email, name")
      .eq("active", true);

    if (subscribersError) {
      throw new Error("Erro ao buscar inscritos");
    }

    if (!subscribers || subscribers.length === 0) {
      throw new Error("Nenhum inscrito ativo encontrado");
    }

    console.log(`Enviando para ${subscribers.length} inscritos`);

    // Enviar emails em lote
    const emailPromises = subscribers.map((subscriber) => {
      const unsubscribeLink = `${supabaseUrl}/unsubscribe?email=${encodeURIComponent(subscriber.email)}`;
      
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            ${campaign.content}
            <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666; text-align: center;">
              ${subscriber.name ? `Olá ${subscriber.name}, você` : "Você"} está recebendo este email porque se inscreveu na nossa newsletter.<br>
              <a href="${unsubscribeLink}" style="color: #666;">Cancelar inscrição</a>
            </p>
          </body>
        </html>
      `;

      return resend.emails.send({
        from: "Viajar para Europa <onboarding@resend.dev>",
        to: [subscriber.email],
        subject: campaign.subject,
        html: htmlContent,
      });
    });

    // Aguardar todos os envios
    const results = await Promise.allSettled(emailPromises);
    const successCount = results.filter((r) => r.status === "fulfilled").length;
    const failedCount = results.filter((r) => r.status === "rejected").length;

    console.log(`Enviados: ${successCount}, Falhas: ${failedCount}`);

    // Atualizar status da campanha
    await supabase
      .from("newsletter_campaigns")
      .update({
        status: "sent",
        sent_at: new Date().toISOString(),
        recipients_count: successCount,
      })
      .eq("id", campaignId);

    return new Response(
      JSON.stringify({
        success: true,
        sent: successCount,
        failed: failedCount,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
