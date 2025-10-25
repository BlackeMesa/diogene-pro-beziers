import { EstimatorAnswers, PriceRange, SurfaceOption, InsalubrityLevel, AccessibilityLevel } from '@/types/estimator';

const pricingMatrix: {
  [key in SurfaceOption]: {
    [key in InsalubrityLevel]: { min: number; max: number }
  }
} = {
  small: {
    moderate: { min: 1200, max: 2000 },
    medium: { min: 1800, max: 2800 },
    severe: { min: 2500, max: 3500 }
  },
  medium: {
    moderate: { min: 2000, max: 3200 },
    medium: { min: 2800, max: 4200 },
    severe: { min: 3500, max: 5000 }
  },
  large: {
    moderate: { min: 3500, max: 5500 },
    medium: { min: 4500, max: 6500 },
    severe: { min: 5000, max: 8000 }
  },
  xlarge: {
    moderate: { min: 6000, max: 9000 },
    medium: { min: 7000, max: 10000 },
    severe: { min: 8000, max: 12000 }
  }
};

const accessibilityAdjustment: { [key in AccessibilityLevel]: number } = {
  easy: 0,
  medium: 300,
  difficult: 600
};

export function calculateEstimate(answers: EstimatorAnswers): PriceRange {
  const { surface, insalubrity, accessibility } = answers;
  
  const basePrice = pricingMatrix[surface][insalubrity];
  const accessAdd = accessibilityAdjustment[accessibility];
  
  return {
    min: basePrice.min + accessAdd,
    max: basePrice.max + accessAdd
  };
}
