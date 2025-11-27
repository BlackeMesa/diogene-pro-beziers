import { Shield, CheckCircle } from "lucide-react";
import qualipropreLogo from "@/assets/Qualipropre.png";
import ccasLogo from "@/assets/ccas.png";
import dasriLogo from "@/assets/dasri.png";
import insuranceBadge from "@/assets/insurance-badge.png";

const PartnersSection = () => {
  const certifications = [
    {
      image: qualipropreLogo,
      title: "QUALIPROPRE 10403",
      description: "Protocole certifié pour nettoyage et désinfection"
    },
    {
      image: insuranceBadge,
      title: "RC Pro Assurée",
      description: "Responsabilité Civile Professionnelle à jour"
    },
    {
      image: ccasLogo,
      title: "Partenaire CCAS",
      description: "Agréé centres d'action sociale de l'Hérault"
    },
    {
      image: dasriLogo,
      title: "DASRI Agréé",
      description: "Traitement conforme des déchets infectieux"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Certifications & Agréments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous respectons les normes les plus strictes pour garantir votre sécurité et la qualité de nos interventions
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-24 mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-card-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Assurance à jour 2025
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              15+ ans d'expérience
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Formation continue équipes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
