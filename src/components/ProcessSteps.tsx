import { Phone, Calendar, FileSearch, Truck, Sparkles, CheckCircle } from "lucide-react";

interface Step {
  icon: any;
  title: string;
  description: string;
  badge?: string;
}

const ProcessSteps = () => {
  const steps: Step[] = [
    {
      icon: Phone,
      title: "1. Premier Contact",
      description: "Vous nous appelez ou remplissez le formulaire. Nous écoutons votre situation sans jugement et répondons à toutes vos questions.",
      badge: "Gratuit",
    },
    {
      icon: Calendar,
      title: "2. Visite Gratuite",
      description: "Un technicien se déplace chez vous pour évaluer la situation. Visite discrète, véhicule banalisé. Nous établissons un devis détaillé sur place.",
      badge: "Sous 48h",
    },
    {
      icon: FileSearch,
      title: "3. Devis Personnalisé",
      description: "Vous recevez un devis transparent avec le détail des prestations. Tarification claire au m³ ou au forfait selon votre situation.",
      badge: "Sans engagement",
    },
    {
      icon: Truck,
      title: "4. Intervention",
      description: "Notre équipe intervient aux dates convenues. Nous gérons le tri, le débarras, et la valorisation possible des objets pour réduire les coûts.",
      badge: "Discrétion totale",
    },
    {
      icon: Sparkles,
      title: "5. Nettoyage & Désinfection",
      description: "Nettoyage en profondeur selon le protocole QUALIPROPRE 10403. Traitement des odeurs, désinfection complète, remise en état du logement.",
      badge: "Certifié",
    },
    {
      icon: CheckCircle,
      title: "6. Contrôle Final",
      description: "Vérification avec vous du résultat. Nous ne partons que lorsque vous êtes satisfait. Suivi post-intervention si besoin.",
      badge: "Garantie satisfait",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Comment se déroule une intervention ?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all relative">
              {step.badge && <div className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-soft">{step.badge}</div>}

              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-card-foreground">{step.title}</h3>

              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-secondary/50 rounded-xl p-8">
          <p className="text-lg text-card-foreground font-semibold mb-2">💡 À chaque étape, vous êtes accompagné et informé</p>
          <p className="text-muted-foreground">Notre priorité : votre tranquillité d'esprit et votre satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
