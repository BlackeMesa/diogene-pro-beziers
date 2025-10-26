import { CheckCircle } from "lucide-react";

interface PriceRange {
  surface: string;
  price: string;
  includes: string[];
}

const PricingTable = () => {
  const priceRanges: PriceRange[] = [
    {
      surface: "Studio / T1 (< 30 m²)",
      price: "800 - 1 500 €",
      includes: ["Débarras complet", "Nettoyage approfondi", "Désinfection", "Évacuation déchets"]
    },
    {
      surface: "T2 / T3 (30-60 m²)",
      price: "1 500 - 3 500 €",
      includes: ["Débarras complet", "Nettoyage approfondi", "Désinfection", "Évacuation déchets", "Traitement anti-odeurs"]
    },
    {
      surface: "T4+ / Maison (60-100 m²)",
      price: "3 500 - 8 000 €",
      includes: ["Débarras complet", "Nettoyage approfondi", "Désinfection", "Évacuation déchets", "Traitement anti-odeurs", "Remise en état"]
    },
    {
      surface: "Grande Maison (> 100 m²)",
      price: "Sur devis personnalisé",
      includes: ["Évaluation gratuite sur place", "Devis détaillé sous 12h", "Intervention adaptée", "Accompagnement complet"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {priceRanges.map((range, index) => (
        <div 
          key={index}
          className="bg-card rounded-xl shadow-medium hover:shadow-strong transition-all p-6 border border-border"
        >
          <h3 className="text-xl font-bold text-primary mb-2">{range.surface}</h3>
          <div className="text-3xl font-bold text-accent mb-4">{range.price}</div>
          <ul className="space-y-2">
            {range.includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
