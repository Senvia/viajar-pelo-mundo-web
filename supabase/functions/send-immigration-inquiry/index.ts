import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  name: string;
  email: string;
  phone: string;
  status: string;
  documents: string;
  timeline: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: InquiryRequest = await req.json();
    console.log("Received inquiry from:", data.email);

    // Email para a agência
    const agencyEmail = await resend.emails.send({
      from: "Consultoria Imigrantes <onboarding@resend.dev>",
      to: ["viajarparaeuropaoficial@gmail.com"],
      subject: "🆕 Nova Consulta - Consultoria para Imigrantes",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3b82f6; }
              .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; }
              .value { color: #334155; }
              .footer { margin-top: 20px; padding: 20px; text-align: center; color: #64748b; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">📧 Nova Consulta Recebida</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Consultoria para Imigrantes em Portugal</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nome</div>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value">${data.email}</div>
                </div>
                <div class="field">
                  <div class="label">📱 Telefone</div>
                  <div class="value">${data.phone}</div>
                </div>
                <div class="field">
                  <div class="label">🌍 Status Atual em Portugal</div>
                  <div class="value">${data.status}</div>
                </div>
                <div class="field">
                  <div class="label">📄 Documentos de Interesse</div>
                  <div class="value">${data.documents}</div>
                </div>
                <div class="field">
                  <div class="label">⏱️ Timeline Desejado</div>
                  <div class="value">${data.timeline}</div>
                </div>
                ${data.message ? `
                <div class="field">
                  <div class="label">💬 Mensagem</div>
                  <div class="value">${data.message}</div>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>Este email foi gerado automaticamente pelo formulário de consultoria.</p>
                <p><strong>Contacto:</strong> +351 911 734 711 | viajarparaeuropaoficial@gmail.com</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Agency email sent:", agencyEmail);

    // Email de confirmação para o cliente
    const clientEmail = await resend.emails.send({
      from: "Viajar para Europa <onboarding@resend.dev>",
      to: [data.email],
      subject: "✅ Recebemos a sua consulta!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .success-icon { font-size: 48px; margin-bottom: 10px; }
              .summary { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #3b82f6; }
              .cta { background: #1e40af; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
              .contact-info { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
              .footer { margin-top: 20px; padding: 20px; text-align: center; color: #64748b; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="success-icon">✅</div>
                <h1 style="margin: 0; font-size: 24px;">Consulta Recebida com Sucesso!</h1>
              </div>
              <div class="content">
                <p style="font-size: 16px;">Olá <strong>${data.name}</strong>,</p>
                <p>Muito obrigado pelo seu interesse nos nossos serviços de consultoria para imigrantes em Portugal!</p>
                <p>Recebemos a sua consulta e a nossa equipa irá analisá-la com atenção. Entraremos em contacto consigo nas próximas 24-48 horas.</p>
                
                <div class="summary">
                  <h3 style="margin-top: 0; color: #1e40af;">📋 Resumo da Sua Consulta</h3>
                  <p><strong>Status:</strong> ${data.status}</p>
                  <p><strong>Documentos:</strong> ${data.documents}</p>
                  <p><strong>Timeline:</strong> ${data.timeline}</p>
                </div>

                <div class="contact-info">
                  <h3 style="margin-top: 0; color: #1e40af;">📞 Precisa de Ajuda Imediata?</h3>
                  <p><strong>Telefone:</strong> +351 911 734 711</p>
                  <p><strong>Email:</strong> viajarparaeuropaoficial@gmail.com</p>
                  <p><strong>Instagram:</strong> @viajarparaeuropa</p>
                  <a href="https://agencia.iddas.com.br/so/k8cqdbwp" class="cta">💬 Falar no WhatsApp</a>
                </div>

                <p style="margin-top: 30px; color: #64748b; font-size: 14px;"><em>Próximos Passos:</em> A nossa equipa irá revisar os seus dados e preparar uma proposta personalizada para a sua situação.</p>
              </div>
              <div class="footer">
                <p><strong>Viajar para Europa</strong></p>
                <p>Especialistas em consultoria para imigrantes em Portugal</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Client confirmation email sent:", clientEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Consulta enviada com sucesso!" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-immigration-inquiry:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Erro ao enviar consulta" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
