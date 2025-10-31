import { Shield, Clock, Eye, Award, ThumbsUp, HeartHandshake, FileCheck, Headphones } from "lucide-react";

interface Guarantee {
  icon: any;
  title: string;
  description: string;
}

const Guarantees = () => {
  const guarantees: Guarantee[] = [
    {
      icon: HeartHandshake,
      title: "Empathie & Respect",
      description: "Accompagnement sans jugement. Nous comprenons la sensibilité de chaque situation et traitons chaque personne avec dignité."
    },
    {
      icon: Eye,
      title: "Discrétion Absolue",
      description: "Véhicules banalisés, intervention discrète, confidentialité totale. Vos voisins ne sauront rien de notre présence."
    },
    {
      icon: Clock,
      title: "Réactivité Garantie",
      description: "Devis sous 12h, intervention possible sous 24-48h. Disponible 7J/7 pour les situations urgentes."
    },
    {
      icon: Award,
      title: "Protocole Certifié",
      description: "Certification QUALIPROPRE 10403. Techniques professionnelles validées pour le nettoyage post-Diogène."
    },
    {
      icon: FileCheck,
      title: "Tarification Transparente",
      description: "Devis détaillé et sans surprise. Pas de frais cachés. Possibilité de valorisation des objets pour réduire le coût."
    },
    {
      icon: Shield,
      title: "Assurance Professionnelle",
      description: "Responsabilité civile professionnelle. Vous êtes protégé en cas de dommage durant l'intervention."
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Client",
      description: "Nous ne partons que lorsque vous êtes satisfait du résultat. Suivi post-intervention si nécessaire."
    },
    {
      icon: Headphones,
      title: "Support Continu",
      description: "Une question après intervention ? Nous restons disponibles. Service client réactif et à l'écoute."
    }
  ];

  return (
    <section className="section-padding bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Nos Engagements Envers Vous</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des garanties solides pour votre tranquillité d'esprit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-card-foreground">
                {guarantee.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-cta rounded-2xl p-8 text-center text-accent-foreground shadow-medium">
          <h3 className="text-2xl font-bold mb-3">
            🛡️ Votre Confiance est Notre Priorité
          </h3>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Plus de 15 ans d'expérience dans l'accompagnement humain et le nettoyage extrême. 
            Des centaines de familles nous ont fait confiance dans l'Hérault.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
