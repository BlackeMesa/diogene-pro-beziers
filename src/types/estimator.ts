export type SurfaceOption = 'small' | 'medium' | 'large' | 'xlarge';
export type InsalubrityLevel = 'moderate' | 'medium' | 'severe';
export type AccessibilityLevel = 'easy' | 'medium' | 'difficult';
export type LocationOption = 'beziers' | 'agde' | 'pezenas' | 'other';

export interface EstimatorAnswers {
  location: LocationOption;
  surface: SurfaceOption;
  insalubrity: InsalubrityLevel;
  accessibility: AccessibilityLevel;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  photos: FileList | null;
}
