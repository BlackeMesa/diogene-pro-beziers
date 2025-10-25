import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight, ArrowLeft, Info, CheckCircle, AlertTriangle, Sparkles } from 'lucide-react';
import { EstimatorAnswers, PriceRange, LeadFormData } from '@/types/estimator';
import { calculateEstimate } from '@/lib/pricingCalculator';
import { useToast } from '@/hooks/use-toast';

interface CostEstimatorProps {
  variant?: 'default' | 'diogene' | 'debarras';
}

const CostEstimator = ({ variant = 'default' }: CostEstimatorProps) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Partial<EstimatorAnswers>>({});
  const [result, setResult] = useState<PriceRange | null>(null);
  const [formData, setFormData] = useState<Partial<LeadFormData>>({});
  const { toast } = useToast();

  const progress = (step / 4) * 100;

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      const estimate = calculateEstimate(answers as EstimatorAnswers);
      setResult(estimate);
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'simulator_result_displayed', {
          surface: answers.surface,
          insalubrity: answers.insalubrity,
          estimated_price_min: estimate.min,
          estimated_price_max: estimate.max
        });
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quote_request_submitted', {
        conversion_value: result?.max,
        location: answers.location
      });
    }

    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons sous 12 heures maximum.",
    });
  };

  const canProceed = () => {
    switch (step) {
      case 1: return !!answers.location;
      case 2: return !!answers.surface;
      case 3: return !!answers.insalubrity;
      case 4: return !!answers.accessibility;
      default: return false;
    }
  };

  if (result) {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Result Display */}
        <div className="bg-gradient-cta rounded-2xl p-8 md:p-12 text-center shadow-strong mb-8 animate-scale-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Votre estimation : {result.min.toLocaleString()}€ à {result.max.toLocaleString()}€
          </h3>
          <p className="text-accent-foreground/90 text-lg mb-2">
            (Nettoyage + Décontamination)
          </p>
        </div>

        {/* Disclaimers */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border-l-4 border-accent rounded-xl p-6 shadow-soft">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-card-foreground mb-2">Important</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cette estimation ne prend pas en compte le coût exact du <strong>Débarras</strong> (facturé au m³, soit 20€ à 60€/m³) 
                  ni l'évacuation des <strong>Déchets à Risques Infectieux (DASRI)</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-success/10 border-l-4 border-success rounded-xl p-6 shadow-soft">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-success flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-card-foreground mb-2">Point Clé : Débarras Valorisé</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Grâce à notre service de <strong>revente d'objets</strong>, le coût de l'enlèvement peut être 
                  <strong> réduit voire annulé</strong> si les biens récupérés couvrent les frais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div className="bg-card rounded-2xl shadow-strong p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2 text-center">
            Obtenez votre Devis Ferme et Définitif sous 12 heures
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Gratuit et sans engagement
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jean Dupont"
                required
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="06 12 34 56 78"
                required
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="jean.dupont@example.com"
                required
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="photos">Photos du logement (Optionnel mais recommandé)</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 hover:border-primary transition-colors">
                <Input
                  id="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setFormData({ ...formData, photos: e.target.files })}
                  className="cursor-pointer"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Jusqu'à 3 photos • JPG, PNG • Max 10 Mo par photo
                </p>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg py-6"
            >
              Je demande mon Devis Ferme et Confidentiel (Gratuit)
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-primary">Étape {step}/4</span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% complété</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Questions */}
      <div className="bg-card rounded-2xl shadow-strong p-8 md:p-12 animate-fade-in">
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Localisation du projet ?
            </h3>
            <Select
              value={answers.location}
              onValueChange={(value) => setAnswers({ ...answers, location: value as any })}
            >
              <SelectTrigger className="w-full h-12 text-lg">
                <SelectValue placeholder="Sélectionnez votre ville" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beziers">Béziers (34500)</SelectItem>
                <SelectItem value="agde">Agde (34300)</SelectItem>
                <SelectItem value="pezenas">Pézenas (34120)</SelectItem>
                <SelectItem value="other">Autre ville Hérault (34)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Surface totale approximative ?
            </h3>
            <RadioGroup
              value={answers.surface}
              onValueChange={(value) => setAnswers({ ...answers, surface: value as any })}
              className="space-y-4"
            >
              {[
                { value: 'small', label: 'Moins de 30 m²' },
                { value: 'medium', label: '30 à 50 m²' },
                { value: 'large', label: '50 à 100 m²' },
                { value: 'xlarge', label: 'Plus de 100 m²' }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-4 border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer text-lg">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="text-2xl font-bold text-card-foreground">
                Niveau d'insalubrité estimé ?
              </h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-5 h-5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">
                      Évaluez l'état général du logement selon la présence de déchets, odeurs, nuisibles, etc.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup
              value={answers.insalubrity}
              onValueChange={(value) => setAnswers({ ...answers, insalubrity: value as any })}
              className="space-y-4"
            >
              {[
                { 
                  value: 'moderate', 
                  label: 'Modéré', 
                  desc: 'Saleté générale, encombrants légers' 
                },
                { 
                  value: 'medium', 
                  label: 'Moyen', 
                  desc: 'Déchets, fortes odeurs, besoin de désinfection' 
                },
                { 
                  value: 'severe', 
                  label: 'Sévère', 
                  desc: 'Nuisibles, moisissures étendues, risques biologiques / cas Diogène complexe' 
                }
              ].map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="font-semibold text-lg text-card-foreground">{option.label}</div>
                    <div className="text-sm text-muted-foreground mt-1">{option.desc}</div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              L'accès au logement est-il facile ?
            </h3>
            <RadioGroup
              value={answers.accessibility}
              onValueChange={(value) => setAnswers({ ...answers, accessibility: value as any })}
              className="space-y-4"
            >
              {[
                { value: 'easy', label: 'RDC / Maison de plain-pied', desc: 'Accès facile' },
                { value: 'medium', label: 'Appartement avec Ascenseur', desc: 'Accès moyen (+300€)' },
                { value: 'difficult', label: 'Appartement sans Ascenseur', desc: 'Accès difficile (+600€)' }
              ].map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="font-semibold text-lg text-card-foreground">{option.label}</div>
                    <div className="text-sm text-muted-foreground mt-1">{option.desc}</div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-border">
          {step > 1 ? (
            <Button
              variant="outline"
              onClick={handleBack}
              className="px-6"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Retour
            </Button>
          ) : (
            <div />
          )}
          
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8"
          >
            {step === 4 ? 'Voir le résultat' : 'Suivant'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
