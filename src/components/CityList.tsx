import { MapPin } from "lucide-react";

interface CityZone {
  zone: string;
  cities: string[];
  department?: string;
}

interface CityListProps {
  department?: "herault" | "aude" | "all";
}

const CityList = ({ department = "all" }: CityListProps) => {
  const allZones: CityZone[] = [
    // Zones Hérault (34)
    {
      zone: "Bassin de Thau",
      cities: ["Sète", "Frontignan", "Balaruc-les-Bains", "Mèze", "Marseillan"],
      department: "herault",
    },
    {
      zone: "Biterrois",
      cities: ["Béziers", "Sérignan", "Valras-Plage", "Vendres", "Capestang"],
      department: "herault",
    },
    {
      zone: "Agglomération d'Agde",
      cities: ["Agde", "Cap d'Agde", "Vias", "Portiragnes"],
      department: "herault",
    },
    {
      zone: "Cœur d'Hérault",
      cities: ["Pézenas", "Montagnac", "Alignan-du-Vent", "Florensac"],
      department: "herault",
    },
    {
      zone: "Montpellier Méditerranée Métropole",
      cities: ["Montpellier", "Lattes", "Pérols", "Castelnau-le-Lez", "Palavas-les-Flots"],
      department: "herault",
    },
    {
      zone: "Haute Vallée de l'Orb",
      cities: ["Bédarieux", "Lamalou-les-Bains", "Le Bousquet-d'Orb"],
      department: "herault",
    },
    {
      zone: "Nord Hérault",
      cities: ["Lodève", "Clermont-l'Hérault", "Gignac"],
      department: "herault",
    },
    // Zones Aude (11)
    {
      zone: "Narbonnais",
      cities: ["Narbonne", "Gruissan", "Leucate", "Coursan", "Port-la-Nouvelle"],
      department: "aude",
    },
    {
      zone: "Carcassonnais",
      cities: ["Carcassonne", "Trèbes", "Capendu", "Pennautier", "Villemoustaussou"],
      department: "aude",
    },
    {
      zone: "Corbières",
      cities: ["Lézignan-Corbières", "Fabrezan", "Lagrasse", "Durban-Corbières"],
      department: "aude",
    },
    {
      zone: "Haute Vallée de l'Aude",
      cities: ["Limoux", "Couiza", "Quillan", "Espéraza"],
      department: "aude",
    },
    {
      zone: "Lauragais Audois",
      cities: ["Castelnaudary", "Bram", "Alzonne"],
      department: "aude",
    },
  ];

  const zones = department === "all" ? allZones : allZones.filter((z) => z.department === department);

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
              <span key={idx} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
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
