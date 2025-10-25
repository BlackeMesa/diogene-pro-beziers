import { LocationOption, SurfaceOption, InsalubrityLevel, AccessibilityLevel } from '@/types/estimator';

export function formatLocation(location: LocationOption): string {
  const locations: Record<LocationOption, string> = {
    beziers: 'Béziers',
    agde: 'Agde',
    pezenas: 'Pézenas',
    other: 'Autre ville (Hérault)'
  };
  return locations[location];
}

export function formatSurface(surface: SurfaceOption): string {
  const surfaces: Record<SurfaceOption, string> = {
    small: 'Moins de 30 m²',
    medium: '30 à 50 m²',
    large: '50 à 100 m²',
    xlarge: 'Plus de 100 m²'
  };
  return surfaces[surface];
}

export function formatInsalubrity(insalubrity: InsalubrityLevel): string {
  const levels: Record<InsalubrityLevel, string> = {
    moderate: 'Niveau Modéré',
    medium: 'Niveau Moyen',
    severe: 'Niveau Sévère'
  };
  return levels[insalubrity];
}

export function formatAccessibility(accessibility: AccessibilityLevel): string {
  const accessibilities: Record<AccessibilityLevel, string> = {
    easy: 'Facile (RDC/Plain-pied)',
    medium: 'Moyen (Avec ascenseur)',
    difficult: 'Difficile (Sans ascenseur)'
  };
  return accessibilities[accessibility];
}
