import { LocationOption, SurfaceOption, InsalubrityLevel, AccessibilityLevel } from "@/types/estimator";

export function formatLocation(location: LocationOption): string {
  const locations: Record<LocationOption, string> = {
    // Hérault (34)
    beziers: "Béziers (34)",
    montpellier: "Montpellier (34)",
    sete: "Sète (34)",
    agde: "Agde (34)",
    pezenas: "Pézenas (34)",
    other_herault: "Autre ville Hérault (34)",
    // Aude (11)
    narbonne: "Narbonne (11)",
    carcassonne: "Carcassonne (11)",
    lezignan: "Lézignan-Corbières (11)",
    limoux: "Limoux (11)",
    castelnaudary: "Castelnaudary (11)",
    port_la_nouvelle: "Port-la-Nouvelle (11)",
    other_aude: "Autre ville Aude (11)",
  };
  return locations[location];
}

export function formatSurface(surface: SurfaceOption): string {
  const surfaces: Record<SurfaceOption, string> = {
    small: "Moins de 30 m²",
    medium: "30 à 50 m²",
    large: "50 à 100 m²",
    xlarge: "Plus de 100 m²",
  };
  return surfaces[surface];
}

export function formatInsalubrity(insalubrity: InsalubrityLevel): string {
  const levels: Record<InsalubrityLevel, string> = {
    moderate: "Niveau Modéré",
    medium: "Niveau Moyen",
    severe: "Niveau Sévère",
  };
  return levels[insalubrity];
}

export function formatAccessibility(accessibility: AccessibilityLevel): string {
  const accessibilities: Record<AccessibilityLevel, string> = {
    easy: "Facile (RDC/Plain-pied)",
    medium: "Moyen (Avec ascenseur)",
    difficult: "Difficile (Sans ascenseur)",
  };
  return accessibilities[accessibility];
}
