import { MapPin } from "lucide-react";

interface CityZone {
  zone: string;
  cities: string[];
}

const CityList = () => {
  const zones: CityZone[] = [
    {
      zone: "Bassin de Thau",
      cities: ["Sète", "Frontignan", "Balaruc-les-Bains", "Mèze", "Marseillan"]
    },
    {
      zone: "Biterrois",
      cities: ["Béziers", "Sérignan", "Valras-Plage", "Vendres", "Capestang"]
    },
    {
      zone: "Agglomération d'Agde",
      cities: ["Agde", "Cap d'Agde", "Vias", "Portiragnes"]
    },
    {
      zone: "Cœur d'Hérault",
      cities: ["Pézenas", "Montagnac", "Alignan-du-Vent", "Florensac"]
    },
    {
      zone: "Montpellier Méditerranée Métropole",
      cities: ["Montpellier", "Lattes", "Pérols", "Castelnau-le-Lez", "Palavas-les-Flots"]
    },
    {
      zone: "Haute Vallée de l'Orb",
      cities: ["Bédarieux", "Lamalou-les-Bains", "Le Bousquet-d'Orb"]
    },
    {
      zone: "Nord Hérault",
      cities: ["Lodève", "Clermont-l'Hérault", "Gignac"]
    }
  ];

  return (
    <div className="space-y-8">
      {zones.map((zone, index) => (
        <div key={index} className="bg-card rounded-xl p-6 shadow-medium">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-primary">{zone.zone}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {zone.cities.map((city, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityList;
