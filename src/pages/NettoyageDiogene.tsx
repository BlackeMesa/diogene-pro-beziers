import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Shield, Users, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import TrustBadges from "@/components/TrustBadges";

const NettoyageDiogene = () => {
  const processSteps = [
    {
      number: "01",
      title: "Évaluation Initiale",
      description: "Visite du site et évaluation de l'ampleur du travail. Établissement d'un devis détaillé sous 12h maximum."
    },
    {
      number: "02",
      title: "Tri & Débarras",
      description: "Tri méthodique des objets avec respect des souvenirs et valorisation possible. Débarras professionnel."
    },
    {
      number: "03",
      title: "Décontamination",
      description: "Nettoyage en profondeur avec produits professionnels. Traitement des surfaces et élimination des sources de contamination."
    },
    {
      number: "04",
      title: "Désinfection Complète",
      description: "Désinfection finale conforme au protocole QUALIPROPRE 10403. Élimination DASRI respectant les normes."
    }
  ];

  const symptoms = [
    "Accumulation excessive d'objets",
    "Refus de se séparer de possessions",
    "Insalubrité du logement",
    "Isolement social progressif",
    "Négligence de l'hygiène personnelle",
    "Déni du problème par la personne"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Spécialiste Nettoyage Syndrome de Diogène à Béziers (34)
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Protocole complet : Débarras, Nettoyage, Désinfection conforme QUALIPROPRE 10403
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-8 py-6 shadow-strong"
                >
                  Demande de Devis Urgent
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-trust/10 rounded-full mb-6">
                <Heart className="w-8 h-8 text-trust" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Comprendre le Syndrome de Diogène
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le syndrome de Diogène est un trouble du comportement caractérisé par une négligence extrême 
                de l'hygiène personnelle et domestique, associée à une accumulation compulsive d'objets.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-medium p-8 mb-12">
              <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-accent mr-3" />
                Signes Caractéristiques
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Notre Approche Empathique
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous comprenons que derrière chaque situation se trouve une personne en souffrance et une famille 
                en détresse. Notre équipe est formée pour intervenir avec <strong>discrétion</strong>, 
                <strong> respect</strong> et <strong>professionnalisme</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous travaillons en collaboration avec les familles, les services sociaux et les professionnels 
                de santé pour apporter une solution globale et durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Notre Protocole de Nettoyage Certifié
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un processus en 4 étapes conforme aux normes QUALIPROPRE 10403 pour garantir 
              un résultat professionnel et durable
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-medium p-8 hover:shadow-strong transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent-foreground">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-card-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-strong p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center">
                    <Shield className="w-12 h-12 text-success" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                    Conformité DASRI et Protocole 10403
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nous respectons scrupuleusement les protocoles d'<strong>élimination des Déchets d'Activités 
                    de Soins à Risques Infectieux (DASRI)</strong>. Notre certification QUALIPROPRE 10403 garantit 
                    une intervention conforme aux normes les plus strictes.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-semibold">
                      Certification 10403
                    </span>
                    <span className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-semibold">
                      Conformité DASRI
                    </span>
                    <span className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-semibold">
                      Équipe Formée
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Support */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-trust/10 rounded-full mb-6">
              <Users className="w-8 h-8 text-trust" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Accompagnement des Familles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nous comprenons que faire appel à un service de nettoyage dans ces circonstances est une décision 
              difficile. Notre équipe est là pour vous soutenir à chaque étape :
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h4 className="font-bold text-card-foreground mb-3">Écoute & Conseil</h4>
                <p className="text-sm text-muted-foreground">
                  Discussion confidentielle pour comprendre votre situation et vous proposer la meilleure solution
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h4 className="font-bold text-card-foreground mb-3">Discrétion Totale</h4>
                <p className="text-sm text-muted-foreground">
                  Intervention discrète sans marquage visible sur nos véhicules ou équipements
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h4 className="font-bold text-card-foreground mb-3">Suivi Personnalisé</h4>
                <p className="text-sm text-muted-foreground">
                  Accompagnement jusqu'à la fin du processus avec possibilité de suivi post-intervention
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-hero text-primary-foreground rounded-2xl p-12 text-center shadow-strong">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'Aide pour une Situation de Diogène ?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Notre équipe vous apporte une solution professionnelle et humaine.<br />
              <strong>Devis garanti sous 12 heures</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-8 py-6 shadow-strong"
                >
                  Demander un Devis Urgent
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NettoyageDiogene;
