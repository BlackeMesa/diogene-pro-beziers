import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.5.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  location: string;
  surface: string;
  insalubrity: string;
  accessibility: string;
  estimatedMin: number;
  estimatedMax: number;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received quote request:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      name, 
      phone, 
      email, 
      location, 
      surface, 
      insalubrity, 
      accessibility,
      estimatedMin,
      estimatedMax
    }: QuoteRequest = await req.json();
    
    console.log("Processing quote request from:", name);

    // Location labels
    const locationLabels: Record<string, string> = {
      beziers: "Béziers (34500)",
      agde: "Agde (34300)",
      pezenas: "Pézenas (34120)",
      other: "Autre ville Hérault (34)"
    };

    // Surface labels
    const surfaceLabels: Record<string, string> = {
      small: "Moins de 30 m²",
      medium: "30 à 50 m²",
      large: "50 à 100 m²",
      xlarge: "Plus de 100 m²"
    };

    // Insalubrity labels
    const insalubrityLabels: Record<string, string> = {
      moderate: "Modéré",
      medium: "Moyen",
      severe: "Sévère"
    };

    // Accessibility labels
    const accessibilityLabels: Record<string, string> = {
      easy: "RDC / Maison de plain-pied",
      medium: "Appartement avec Ascenseur",
      difficult: "Appartement sans Ascenseur"
    };

    // Send notification email to business owner
    const ownerEmailResponse = await resend.emails.send({
      from: "Le Lien Propreté 34 <contact@lelienproprete34.com>",
      to: ["contact@lelienproprete34.com"],
      subject: `🎯 Nouvelle demande de devis (Simulateur) - ${name}`,
      html: `
        <h1>Nouvelle Demande de Devis via Simulateur</h1>
        
        <h2>Informations Contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <h2>Estimation Personnalisée</h2>
        <p style="font-size: 18px; color: #2563eb;"><strong>${estimatedMin.toLocaleString()}€ à ${estimatedMax.toLocaleString()}€</strong></p>
        
        <h2>Détails du Projet</h2>
        <p><strong>Localisation:</strong> ${locationLabels[location] || location}</p>
        <p><strong>Surface:</strong> ${surfaceLabels[surface] || surface}</p>
        <p><strong>Niveau d'insalubrité:</strong> ${insalubrityLabels[insalubrity] || insalubrity}</p>
        <p><strong>Accessibilité:</strong> ${accessibilityLabels[accessibility] || accessibility}</p>
        
        <hr>
        <p><em>Cette demande provient du simulateur de coût. Répondre sous 12 heures maximum.</em></p>
      `,
    });

    console.log("Owner email sent successfully:", ownerEmailResponse);

    // Send confirmation email to client
    const clientEmailResponse = await resend.emails.send({
      from: "Le Lien Propreté 34 <contact@lelienproprete34.com>",
      to: [email],
      subject: `Votre estimation personnalisée - Réponse sous 12h`,
      html: `
        <h1>Merci ${name} !</h1>
        <p>Nous avons bien reçu votre demande de devis et nous vous répondrons sous <strong>12 heures maximum</strong>.</p>
        
        <h2>Votre Estimation Personnalisée</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="font-size: 24px; color: #2563eb; margin: 0;">
            <strong>${estimatedMin.toLocaleString()}€ à ${estimatedMax.toLocaleString()}€</strong>
          </p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280;">
            (Nettoyage + Décontamination)
          </p>
        </div>
        
        <h2>Récapitulatif de votre projet</h2>
        <ul>
          <li><strong>Localisation:</strong> ${locationLabels[location] || location}</li>
          <li><strong>Surface:</strong> ${surfaceLabels[surface] || surface}</li>
          <li><strong>Niveau d'insalubrité:</strong> ${insalubrityLabels[insalubrity] || insalubrity}</li>
          <li><strong>Accessibilité:</strong> ${accessibilityLabels[accessibility] || accessibility}</li>
        </ul>
        
        <p style="background-color: #fef3c7; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b;">
          <strong>⚠️ Important:</strong> Cette estimation ne prend pas en compte le coût exact du Débarras 
          (facturé au m³) ni l'évacuation des Déchets à Risques Infectieux (DASRI).
        </p>
        
        <hr>
        <p>En cas d'urgence, vous pouvez nous joindre au <strong>07 88 43 20 55</strong></p>
        <p>Cordialement,<br>L'équipe Le Lien Propreté 34</p>
      `,
    });
    
    console.log("Client confirmation email sent:", clientEmailResponse);

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
    console.error("Error in send-quote-request function:", error);
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
