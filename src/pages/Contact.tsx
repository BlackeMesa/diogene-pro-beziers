import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
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
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demande de Devis Urgent & Gratuit
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
                Formulaire de Contact
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
                    className="mt-2"
                    placeholder="Votre nom"
                  />
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
                    className="mt-2"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="votre@email.fr"
                  />
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
                    className="mt-2"
                    placeholder="ex: Béziers, 34500"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Type de Service *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => handleChange(e as any)}
                    className="mt-2 w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="diogene">Nettoyage Syndrome de Diogène</option>
                    <option value="debarras">Débarras Insalubre</option>
                    <option value="both">Les deux services</option>
                    <option value="other">Autre / Renseignement</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Décrivez votre situation *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[120px]"
                    placeholder="Décrivez brièvement la situation (taille du logement, degré d'insalubrité, urgence, etc.)"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold text-lg py-6"
                >
                  Envoyer ma Demande de Devis
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
                  Informations de Contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trust/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Téléphone</h4>
                      <a href="tel:+33000000000" className="text-muted-foreground hover:text-primary transition-colors">
                        [Votre Numéro de Téléphone]
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
                      <a href="mailto:contact@exemple.fr" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@exemple.fr
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
                  Pourquoi Nous Contacter ?
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
                  Situation d'Urgence ?
                </h3>
                <p className="mb-4 opacity-95">
                  Appelez-nous directement pour une intervention rapide
                </p>
                <a href="tel:+33000000000">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold border-0"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Appel d'Urgence 7J/7
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
