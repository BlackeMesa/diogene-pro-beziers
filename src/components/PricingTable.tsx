import { CheckCircle, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PriceLevel {
  level: "modéré" | "moyen" | "sévère";
  price: number;
  color: string;
  bgColor: string;
}

interface PriceRange {
  surface: string;
  surfaceRange: string;
  levels: PriceLevel[];
  median: string;
  includes: string[];
}

const PricingTable = () => {
  const priceRanges: PriceRange[] = [
    {
      surface: "Studio / T1",
      surfaceRange: "< 30 m²",
      levels: [
        { level: "modéré", price: 800, color: "text-green-600", bgColor: "bg-green-500" },
        { level: "moyen", price: 1150, color: "text-yellow-600", bgColor: "bg-yellow-500" },
        { level: "sévère", price: 1500, color: "text-red-600", bgColor: "bg-red-500" },
      ],
      median: "950 - 1 200€",
      includes: ["Débarras complet", "Nettoyage approfondi", "Désinfection", "Évacuation déchets"],
    },
    {
      surface: "T2 / T3",
      surfaceRange: "30-60 m²",
      levels: [
        { level: "modéré", price: 1500, color: "text-green-600", bgColor: "bg-green-500" },
        { level: "moyen", price: 2200, color: "text-yellow-600", bgColor: "bg-yellow-500" },
        { level: "sévère", price: 3500, color: "text-red-600", bgColor: "bg-red-500" },
      ],
      median: "1 800 - 2 400€",
      includes: ["Débarras complet", "Nettoyage approfondi", "Désinfection", "Évacuation déchets", "Traitement anti-odeurs"],
    },
    {
      surface: "T4+ / Maison",
      surfaceRange: "60-100 m²",
      levels: [
        { level: "modéré", price: 3500, color: "text-green-600", bgColor: "bg-green-500" },
        { level: "moyen", price: 5500, color: "text-yellow-600", bgColor: "bg-yellow-500" },
        { level: "sévère", price: 8000, color: "text-red-600", bgColor: "bg-red-500" },
      ],
      median: "4 000 - 6 000€",
      includes: ["Débarras complet", "Nettoyage approfondi", "Désinfection", "Évacuation déchets", "Traitement anti-odeurs", "Remise en état"],
    },
    {
      surface: "Grande Maison",
      surfaceRange: "> 100 m²",
      levels: [
        { level: "modéré", price: 6000, color: "text-green-600", bgColor: "bg-green-500" },
        { level: "moyen", price: 9000, color: "text-yellow-600", bgColor: "bg-yellow-500" },
        { level: "sévère", price: 15000, color: "text-red-600", bgColor: "bg-red-500" },
      ],
      median: "Sur devis",
      includes: ["Évaluation gratuite sur place", "Devis détaillé sous 12h", "Intervention adaptée", "Accompagnement complet"],
    },
  ];

  const levelDescriptions = {
    modéré: "Accumulation récente, logement accessible, pas de nuisibles",
    moyen: "Accumulation importante, odeurs présentes, accès difficile",
    sévère: "Logement impraticable, nuisibles, risque sanitaire élevé",
  };

  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Légende des niveaux */}
        <div className="bg-secondary/50 rounded-xl p-4 md:p-6">
          <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Comprendre les niveaux d'insalubrité
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium text-green-700">Modéré</span>
                <p className="text-sm text-muted-foreground">{levelDescriptions.modéré}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium text-yellow-700">Moyen</span>
                <p className="text-sm text-muted-foreground">{levelDescriptions.moyen}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-red-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium text-red-700">Sévère</span>
                <p className="text-sm text-muted-foreground">{levelDescriptions.sévère}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grille de prix */}
        <div className="grid md:grid-cols-2 gap-6">
          {priceRanges.map((range, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-medium hover:shadow-strong transition-all p-6 border border-border"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary">{range.surface}</h3>
                <span className="text-sm text-muted-foreground">{range.surfaceRange}</span>
              </div>

              {/* Échelle de prix visuelle */}
              <div className="mb-4">
                <div className="flex justify-between items-end mb-2">
                  {range.levels.map((level, idx) => (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <div className="text-center cursor-help flex-1">
                          <div className={`text-lg font-bold ${level.color}`}>
                            {level.price.toLocaleString("fr-FR")}€
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">{level.level}</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-[200px]">{levelDescriptions[level.level]}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                {/* Barre de progression */}
                <div className="h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 opacity-80" />
              </div>

              {/* Prix médian */}
              <div className="bg-accent/10 rounded-lg p-3 mb-4 text-center">
                <span className="text-sm text-muted-foreground">La plupart des interventions : </span>
                <span className="font-bold text-accent">{range.median}</span>
              </div>

              {/* Prestations incluses */}
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
      </div>
    </TooltipProvider>
  );
};

export default PricingTable;
