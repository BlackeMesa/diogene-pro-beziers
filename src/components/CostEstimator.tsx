import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, ArrowLeft, Info, CheckCircle, AlertTriangle, Sparkles, Lock } from "lucide-react";
import { EstimatorAnswers, PriceRange, LeadFormData } from "@/types/estimator";
import { calculateEstimate } from "@/lib/pricingCalculator";
import { useToast } from "@/hooks/use-toast";
import { formatLocation, formatSurface, formatInsalubrity, formatAccessibility } from "@/lib/simulatorFormatters";
import { supabase } from "@/integrations/supabase/client";
import { trackSimulatorEvent, trackFormEvent, trackError } from "@/lib/analytics";

interface CostEstimatorProps {
  variant?: "default" | "diogene" | "debarras";
}

const CostEstimator = ({ variant = "default" }: CostEstimatorProps) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Partial<EstimatorAnswers>>({});
  const [result, setResult] = useState<PriceRange | null>(null);
  const [formData, setFormData] = useState<Partial<LeadFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const progress = (step / 4) * 100;

  const handleNext = () => {
    if (step < 4) {
      trackSimulatorEvent("step_completed", {
        step,
        answer: answers[["location", "surface", "insalubrity", "accessibility"][step - 1] as keyof EstimatorAnswers],
      });
      setStep(step + 1);
    } else {
      const estimate = calculateEstimate(answers as EstimatorAnswers);
      setResult(estimate);

      trackSimulatorEvent("result_displayed", {
        surface: answers.surface,
        insalubrity: answers.insalubrity,
        estimated_price_min: estimate.min,
        estimated_price_max: estimate.max,
        conversion_value: estimate.max,
      });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      trackSimulatorEvent("step_back", { from_step: step });
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    trackFormEvent("simulator", "submitted", {
      ...formData,
      estimated_min: result?.min,
      estimated_max: result?.max,
    });

    try {
      const { data, error } = await supabase.functions.invoke("send-quote-request", {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: answers.location,
          surface: answers.surface,
          insalubrity: answers.insalubrity,
          accessibility: answers.accessibility,
          estimatedMin: result?.min,
          estimatedMax: result?.max,
        },
      });

      if (error) throw error;

      trackFormEvent("simulator", "success", {
        conversion_value: result?.max,
        location: answers.location,
        surface: answers.surface,
        insalubrity: answers.insalubrity,
        accessibility: answers.accessibility,
      });

      toast({
        title: "Demande envoyée !",
        description: `Nous avons bien reçu votre demande pour un projet à ${formatLocation(answers.location!)} (${formatSurface(answers.surface!)}). Réponse sous 12h maximum.`,
        duration: 5000,
      });

      // Reset form after successful submission
      setFormData({});
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);

      trackError("simulator_form", error instanceof Error ? error.message : "Unknown error", {
        location: answers.location,
        surface: answers.surface,
      });

      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement au 07 88 43 20 55.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!answers.location;
      case 2:
        return !!answers.surface;
      case 3:
        return !!answers.insalubrity;
      case 4:
        return !!answers.accessibility;
      default:
        return false;
    }
  };

  if (result) {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Résumé des réponses du simulateur */}
        <div className="bg-secondary/50 rounded-xl p-6 mb-6 animate-fade-in">
          <h4 className="font-bold text-card-foreground mb-4 text-center text-lg">📋 Résumé de votre projet</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Localisation :</span>
              <span className="font-semibold text-card-foreground">{formatLocation(answers.location!)}</span>
              <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Surface :</span>
              <span className="font-semibold text-card-foreground">{formatSurface(answers.surface!)}</span>
              <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Insalubrité :</span>
              <span className="font-semibold text-card-foreground">{formatInsalubrity(answers.insalubrity!)}</span>
              <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Accessibilité :</span>
              <span className="font-semibold text-card-foreground">{formatAccessibility(answers.accessibility!)}</span>
              <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
            </div>
          </div>
          <div className="text-center mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setResult(null);
                setStep(1);
              }}
              className="text-xs"
            >
              ← Modifier mes réponses
            </Button>
          </div>
        </div>

        {/* Result Display */}
        <div className="bg-gradient-cta rounded-2xl p-8 md:p-12 text-center shadow-strong mb-8 animate-scale-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Votre estimation : {result.min.toLocaleString()}€ à {result.max.toLocaleString()}€
          </h3>
          <p className="text-accent-foreground/90 text-lg mb-2">(Nettoyage + Décontamination)</p>
        </div>

        {/* Disclaimers */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border-l-4 border-accent rounded-xl p-6 shadow-soft">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-card-foreground mb-2">Important</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cette estimation ne prend pas en compte le coût exact du <strong>Débarras</strong> (facturé au m³, soit 20€ à 60€/m³) ni l'évacuation des <strong>Déchets à Risques Infectieux (DASRI)</strong>.
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
        <div className="bg-card rounded-2xl shadow-strong p-8 md:p-12 border-2 border-primary/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">Obtenez votre Devis Ferme sous 12h</h3>
            <p className="text-sm text-muted-foreground mb-2">Gratuit • Confidentiel • Sans engagement</p>
            <p className="text-xs text-muted-foreground bg-accent/5 inline-block px-3 py-1 rounded-full">
              💡 Vos informations seront envoyées avec <strong>votre estimation personnalisée</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champs cachés pour inclure les réponses du simulateur */}
            <input type="hidden" name="simulator_location" value={answers.location} />
            <input type="hidden" name="simulator_surface" value={answers.surface} />
            <input type="hidden" name="simulator_insalubrity" value={answers.insalubrity} />
            <input type="hidden" name="simulator_accessibility" value={answers.accessibility} />
            <input type="hidden" name="estimated_price_min" value={result.min} />
            <input type="hidden" name="estimated_price_max" value={result.max} />
            <div>
              <Label htmlFor="name">Nom complet *</Label>
              <Input id="name" type="text" placeholder="Jean Dupont" required value={formData.name || ""} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-2" />
            </div>

            <div>
              <Label htmlFor="phone">Téléphone *</Label>
              <Input id="phone" type="tel" placeholder="06 12 34 56 78" required value={formData.phone || ""} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-2" />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="jean.dupont@example.com" required value={formData.email || ""} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-2" />
            </div>

            <div>
              <Label htmlFor="photos">Photos du logement (Optionnel mais recommandé)</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 hover:border-primary transition-colors">
                <Input id="photos" type="file" accept="image/*" multiple onChange={(e) => setFormData({ ...formData, photos: e.target.files })} className="cursor-pointer" />
                <p className="text-sm text-muted-foreground mt-3 text-center">Jusqu'à 3 photos • JPG, PNG • Max 10 Mo par photo</p>
              </div>
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg py-6">
              {isSubmitting ? "Envoi en cours..." : "Je demande mon Devis Ferme (Gratuit)"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Vos données sont sécurisées et confidentielles
              </p>
            </div>
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
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Localisation du projet ?</h3>
            <Select value={answers.location} onValueChange={(value) => setAnswers({ ...answers, location: value as any })}>
              <SelectTrigger className="w-full h-12 text-lg">
                <SelectValue placeholder="Sélectionnez votre ville" />
              </SelectTrigger>
              <SelectContent>
                {/* Hérault (34) */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted">Hérault (34) - Intervention 24h</div>
                <SelectItem value="beziers">Béziers (34500)</SelectItem>
                <SelectItem value="montpellier">Montpellier (34000)</SelectItem>
                <SelectItem value="sete">Sète (34200)</SelectItem>
                <SelectItem value="agde">Agde (34300)</SelectItem>
                <SelectItem value="pezenas">Pézenas (34120)</SelectItem>
                <SelectItem value="other_herault">Autre ville Hérault (34)</SelectItem>

                {/* Aude (11) */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted mt-2">Aude (11) - Intervention 24-48h</div>
                <SelectItem value="narbonne">Narbonne (11100) - 24h</SelectItem>
                <SelectItem value="carcassonne">Carcassonne (11000) - 48h</SelectItem>
                <SelectItem value="lezignan">Lézignan-Corbières (11200)</SelectItem>
                <SelectItem value="limoux">Limoux (11300) - 48h</SelectItem>
                <SelectItem value="castelnaudary">Castelnaudary (11400) - 48h</SelectItem>
                <SelectItem value="port_la_nouvelle">Port-la-Nouvelle (11210)</SelectItem>
                <SelectItem value="other_aude">Autre ville Aude (11)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Surface totale approximative ?</h3>
            <RadioGroup value={answers.surface} onValueChange={(value) => setAnswers({ ...answers, surface: value as any })} className="space-y-4">
              {[
                { value: "small", label: "Moins de 30 m²" },
                { value: "medium", label: "30 à 50 m²" },
                { value: "large", label: "50 à 100 m²" },
                { value: "xlarge", label: "Plus de 100 m²" },
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
              <h3 className="text-2xl font-bold text-card-foreground">Niveau d'insalubrité estimé ?</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-5 h-5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">Évaluez l'état général du logement selon la présence de déchets, odeurs, nuisibles, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup value={answers.insalubrity} onValueChange={(value) => setAnswers({ ...answers, insalubrity: value as any })} className="space-y-4">
              {[
                {
                  value: "moderate",
                  label: "Modéré",
                  desc: "Saleté générale, encombrants légers",
                },
                {
                  value: "medium",
                  label: "Moyen",
                  desc: "Déchets, fortes odeurs, besoin de désinfection",
                },
                {
                  value: "severe",
                  label: "Sévère",
                  desc: "Nuisibles, moisissures étendues, risques biologiques / cas Diogène complexe",
                },
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
            <h3 className="text-2xl font-bold text-card-foreground mb-6">L'accès au logement est-il facile ?</h3>
            <RadioGroup value={answers.accessibility} onValueChange={(value) => setAnswers({ ...answers, accessibility: value as any })} className="space-y-4">
              {[
                { value: "easy", label: "RDC / Maison de plain-pied", desc: "Accès facile" },
                { value: "medium", label: "Appartement avec Ascenseur", desc: "Accès moyen (+300€)" },
                { value: "difficult", label: "Appartement sans Ascenseur", desc: "Accès difficile (+600€)" },
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
        <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3 mt-8 pt-8 border-t border-border">
          {step > 1 ? (
            <Button variant="outline" onClick={handleBack} className="px-4 sm:px-6 w-full sm:w-auto">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Retour
            </Button>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Button onClick={handleNext} disabled={!canProceed()} className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-4 sm:px-8 w-full sm:w-auto">
            {step === 4 ? "Voir le résultat" : "Suivant"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
