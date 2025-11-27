import { Shield, Clock, Award, Heart } from "lucide-react";
import certificationBadge from "@/assets/certification-badge.png";
import insuranceBadge from "@/assets/insurance-badge.png";
import qualipropreLogo from "@/assets/Qualipropre.png";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Assuré & Certifié",
      description: "Entreprise assurée avec protocole QUALIPROPRE 10403",
      image: qualipropreLogo,
    },
    {
      icon: Clock,
      title: "Devis sous 12h",
      description: "Réponse garantie en moins de 12 heures",
    },
    {
      icon: Award,
      title: "Conformité DASRI",
      description: "Élimination conforme des déchets à risques",
      image: certificationBadge,
    },
    {
      icon: Heart,
      title: "Discrétion Absolue",
      description: "Accompagnement empathique des familles",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Pourquoi Nous Faire Confiance ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise reconnue dans le nettoyage extrême avec les garanties professionnelles nécessaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {badge.image ? (
                  <img 
                    src={badge.image} 
                    alt={badge.title}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                ) : (
                  <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mb-4">
                    <badge.icon className="w-8 h-8 text-trust" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
