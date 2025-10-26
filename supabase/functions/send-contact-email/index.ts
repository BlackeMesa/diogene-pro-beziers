import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.5.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, city, service, message }: ContactEmailRequest = await req.json();
    
    console.log("Processing contact form from:", name);

    // Service type mapping
    const serviceLabels: Record<string, string> = {
      diogene: "Nettoyage Syndrome de Diogène",
      debarras: "Débarras Insalubre",
      both: "Les deux services",
      other: "Autre / Renseignement"
    };

    // Send notification email to business owner
    const ownerEmailResponse = await resend.emails.send({
      from: "Le Lien Propreté 34 <onboarding@resend.dev>",
      to: ["lelienproprete34@gmail.com"],
      subject: `Nouvelle demande de devis - ${name}`,
      html: `
        <h1>Nouvelle Demande de Devis</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Non fourni"}</p>
        <p><strong>Ville:</strong> ${city}</p>
        <p><strong>Service demandé:</strong> ${serviceLabels[service] || service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Répondre sous 12 heures maximum</em></p>
      `,
    });

    console.log("Owner email sent successfully:", ownerEmailResponse);

    // Send confirmation email to client if email provided
    if (email) {
      const clientEmailResponse = await resend.emails.send({
        from: "Le Lien Propreté 34 <onboarding@resend.dev>",
        to: [email],
        subject: "Demande de devis reçue - Réponse sous 12h",
        html: `
          <h1>Merci pour votre demande, ${name}!</h1>
          <p>Nous avons bien reçu votre demande de devis et nous vous répondrons sous <strong>12 heures maximum</strong>.</p>
          <h2>Récapitulatif de votre demande:</h2>
          <p><strong>Service:</strong> ${serviceLabels[service] || service}</p>
          <p><strong>Ville:</strong> ${city}</p>
          <p><strong>Votre message:</strong> ${message}</p>
          <hr>
          <p>En cas d'urgence, vous pouvez nous joindre au <strong>07 88 43 20 55</strong></p>
          <p>Cordialement,<br>L'équipe Le Lien Propreté 34</p>
        `,
      });
      
      console.log("Client confirmation email sent:", clientEmailResponse);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails envoyés avec succès" }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
