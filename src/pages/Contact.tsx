import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { trackFormEvent, trackPhoneClick, trackError } from "@/lib/analytics";
import { z } from "zod";
import WhatsAppButton from "@/components/WhatsAppButton";

// Validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Veuillez entrer un numéro de téléphone valide" })
    .max(20, { message: "Numéro de téléphone trop long" }),
  email: z.string()
    .trim()
    .email({ message: "Email invalide" })
    .max(255, { message: "Email trop long" })
    .optional()
    .or(z.literal("")),
  city: z.string()
    .trim()
    .min(2, { message: "Veuillez entrer une ville valide" })
    .max(100, { message: "Ville trop longue" }),
  service: z.string()
    .min(1, { message: "Veuillez sélectionner un service" }),
  urgency: z.string()
    .min(1, { message: "Veuillez indiquer le niveau d'urgence" }),
  message: z.string()
    .trim()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(2000, { message: "Le message ne peut pas dépasser 2000 caractères" })
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    urgency: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        setIsSubmitting(false);
        
        toast({
          title: "Erreur de validation",
          description: "Veuillez vérifier les champs du formulaire.",
          variant: "destructive",
        });
        return;
      }
    }
    
    trackFormEvent('contact', 'submitted', formData);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      trackFormEvent('contact', 'success', formData);

      toast({
        title: "Demande envoyée !",
        description: "Nous vous répondrons sous 12 heures maximum.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        service: "",
        urgency: "",
        message: ""
      });
    } catch (error) {
      trackError('contact_form', error instanceof Error ? error.message : 'Unknown error', formData);
      
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name;
    const newData = {
      ...formData,
      [fieldName]: e.target.value
    };
    setFormData(newData);
    
    // Track field completion
    if (e.target.value && !formData[fieldName as keyof typeof formData]) {
      trackFormEvent('contact', 'field_completed', { field: fieldName });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact - Le Lien Propreté 34 | Devis Gratuit sous 12h</title>
        <meta name="description" content="Contactez Le Lien Propreté 34 pour un devis gratuit. Réponse garantie sous 12h. ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/contact" />
        <meta property="og:url" content="https://lelienproprete34.com/contact" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demande de devis urgent & gratuit
            </h1>
            <p className="text-xl opacity-95">
              Réponse garantie sous <strong>12 heures maximum</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-medium p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                Formulaire de contact
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => {
                      if (!formData.name && !formData.phone && !formData.email) {
                        trackFormEvent('contact', 'started');
                      }
                    }}
                    className={`mt-2 ${errors.name ? "border-destructive" : ""}`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-2 ${errors.phone ? "border-destructive" : ""}`}
                    placeholder="06 XX XX XX XX"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-2 ${errors.email ? "border-destructive" : ""}`}
                    placeholder="votre@email.fr"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="city">Ville / Code Postal *</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className={`mt-2 ${errors.city ? "border-destructive" : ""}`}
                    placeholder="ex: Béziers, 34500"
                  />
                  {errors.city && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="service">Type de Service *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => handleChange(e as any)}
                    className={`mt-2 w-full px-3 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                      errors.service ? "border-destructive" : "border-input"
                    }`}
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="diogene">Nettoyage Syndrome de Diogène</option>
                    <option value="debarras">Débarras Insalubre</option>
                    <option value="both">Les deux services</option>
                    <option value="other">Autre / Renseignement</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="urgency">Niveau d'urgence *</Label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={(e) => handleChange(e as any)}
                    className={`mt-2 w-full px-3 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                      errors.urgency ? "border-destructive" : "border-input"
                    }`}
                  >
                    <option value="">Sélectionnez le niveau d'urgence</option>
                    <option value="urgent">🚨 Très urgent (intervention sous 24h)</option>
                    <option value="quick">⚡ Urgent (sous 48-72h)</option>
                    <option value="normal">📅 Normal (dans la semaine)</option>
                    <option value="planned">🗓️ Planifié (dans le mois)</option>
                  </select>
                  {errors.urgency && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.urgency}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Décrivez votre situation *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-2 min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                    placeholder="Décrivez brièvement la situation (taille du logement, degré d'insalubrité, urgence, etc.)"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold text-lg py-6"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma Demande de Devis"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté concernant votre demande. 
                  Vos données sont traitées de manière confidentielle.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Informations de contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trust/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Téléphone</h4>
                      <a href="tel:+33788432055" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => trackPhoneClick('contact_page')}>
                        07 88 43 20 55
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Disponible 7J/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trust/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Email</h4>
                      <a href="mailto:contact@lelienproprete34.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@lelienproprete34.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Réponse sous 12h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trust/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Zone d'Intervention</h4>
                      <p className="text-muted-foreground">
                        Béziers (34500) et tout l'Hérault<br />
                        Agde, Pézenas, Sérignan, Valras-Plage, Bédarieux...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Horaires</h4>
                      <p className="text-muted-foreground">
                        Lun - Ven : 8h30 - 18h30<br />
                        Sam - Dim : Sur rendez-vous<br />
                        <strong className="text-success">Urgences 7J/7</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-card rounded-2xl shadow-soft p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">Devis Gratuit</strong> sous 12 heures maximum
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">Conseil Personnalisé</strong> adapté à votre situation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">Intervention Rapide</strong> possible sous 48h
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">Discrétion Totale</strong> garantie
                    </span>
                  </li>
                </ul>
              </div>

              {/* Emergency Call */}
              <div className="bg-gradient-cta rounded-2xl p-8 text-center text-accent-foreground shadow-medium">
                <h3 className="text-2xl font-bold mb-2">
                  Situation d'urgence ?
                </h3>
                <p className="mb-4 opacity-95">
                  Appelez-nous directement pour une intervention rapide
                </p>
                <a href="tel:+33788432055" onClick={() => trackPhoneClick('contact_page_emergency')}>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold border-0"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    07 88 43 20 55
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
