import { Calculator, CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface SimulatorHighlightProps {
  children: ReactNode;
}

export function SimulatorHighlight({ children }: SimulatorHighlightProps) {
  return (
    <div className="relative">
      {/* Badge "Outil Exclusif" */}
      <div className="absolute -top-4 right-4 md:right-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10 animate-fade-in">
        ⚡ Outil Exclusif
      </div>
      
      {/* Bordure avec gradient et ombre forte */}
      <div className="border-4 border-accent/20 rounded-3xl p-1 md:p-2 shadow-strong bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="bg-background rounded-2xl p-4 md:p-8">
          {/* En-tête du simulateur */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Estimez Votre Coût en 30 Secondes
            </h2>
            <div className="flex justify-center items-center gap-3 md:gap-6 flex-wrap text-sm md:text-base">
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Gratuit</span>
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Sans engagement</span>
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Résultat immédiat</span>
              </span>
            </div>
          </div>
          
          {/* Contenu du simulateur */}
          {children}
        </div>
      </div>
    </div>
  );
}
