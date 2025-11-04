import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Shield, Users, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import TrustBadges from "@/components/TrustBadges";
import CostEstimator from "@/components/CostEstimator";
import { SimulatorHighlight } from "@/components/SimulatorHighlight";
import empathyImage from "@/assets/empathy-support.jpg";
import protocolImage from "@/assets/professional-protocol.jpg";
import { trackServicePageView, trackCTAClick } from "@/lib/analytics";
import { useEffect } from "react";

const NettoyageDiogene = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène');
  }, []);

  const processSteps = [
    {
      number: "01",
      title: "Écoute et Évaluation",
      description: "Première rencontre en toute confidentialité. Nous prenons le temps de comprendre votre situation et évaluons ensemble l'ampleur du projet. Devis détaillé sous 12h."
    },
    {
      number: "02",
      title: "Tri Respectueux",
      description: "Tri méthodique avec respect des souvenirs et de l'histoire des lieux. Nous identifions les objets de valeur et procédons au débarras avec humanité."
    },
    {
      number: "03",
      title: "Nettoyage en Profondeur",
      description: "Décontamination complète avec des produits professionnels. Traitement des surfaces, élimination des sources de contamination dans le respect des protocoles."
    },
    {
      number: "04",
      title: "Désinfection Certifiée",
      description: "Désinfection finale conforme QUALIPROPRE 10403. Élimination DASRI selon les normes. Votre espace retrouve sa dignité."
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
      <Helmet>
        <title>Nettoyage Diogène Hérault | Accompagnement Humain 7j/7</title>
        <meta name="description" content="Nettoyage syndrome de Diogène dans l'Hérault. Protocole QUALIPROPRE 10403. Intervention discrète. Devis sous 12h ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene" />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene" />
      </Helmet>
      
      <Navigation />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nettoyage Syndrome de Diogène à Béziers - Accompagnement Humain
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Le Lien Propreté 34 vous accompagne avec respect et discrétion. Protocole certifié QUALIPROPRE 10403.
            </p>
            
            {/* Primary CTA - Estimateur */}
            <div className="mb-6">
              <a href="#simulator" onClick={() => trackCTAClick('scroll_to_simulator', 'Estimez Votre Projet - Diogène Hero', '#simulator')}>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-xl px-12 py-8 shadow-strong hover:scale-105 transition-transform"
                >
                  🎯 Estimez Votre Projet
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </a>
              <p className="text-sm mt-3 opacity-90 font-medium">
                ⚡ Résultat immédiat en 30 secondes
              </p>
            </div>

            {/* Secondary CTA */}
            <div>
              <Link to="/contact" onClick={() => trackCTAClick('devis', 'Parlons de Votre Situation - Diogène', '/contact')}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6"
                >
                  Parlons de votre situation
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
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-trust/10 rounded-full mb-6">
                  <Heart className="w-8 h-8 text-trust" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Comprendre le syndrome de Diogène avec humanité
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Le syndrome de Diogène touche des personnes en grande souffrance. Accumulation compulsive, 
                  négligence extrême de l'hygiène... Derrière chaque situation, il y a une personne qui mérite respect et dignité. 
                  C'est pourquoi nous avons créé Le Lien Propreté 34.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src={empathyImage}
                  alt="Accompagnement empathique et soutien des familles"
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-medium p-8 mb-12">
                <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-accent mr-3" />
                  Signes caractéristiques
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
                  Le Lien : notre approche empathique
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous ne sommes pas de simples techniciens. Nous créons un <strong>lien de confiance</strong> avec vous 
                  et vos proches. Chaque intervention se fait dans le <strong>respect absolu</strong>, la <strong>discrétion</strong> 
                  et le <strong>non-jugement</strong>. Notre mission : vous accompagner vers un nouveau départ.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous collaborons avec les familles, les services sociaux et les professionnels de santé 
                  pour apporter une solution globale et humaine, adaptée à votre situation unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative">
                <img 
                  src={protocolImage}
                  alt="Équipe professionnelle en tenue de protection avec équipements certifiés"
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Notre protocole certifié : la propreté avec humanité
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Un processus en 4 étapes conforme aux normes QUALIPROPRE 10403. L'expertise technique 
                  au service de l'humain, pour un résultat professionnel et un accompagnement bienveillant.
                </p>
              </div>
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
                    Conformité DASRI & Certification QUALIPROPRE 10403
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Au-delà de notre engagement humain, nous garantissons une <strong>expertise technique irréprochable</strong>. 
                    Nous respectons scrupuleusement les protocoles d'élimination des DASRI (Déchets d'Activités de Soins à Risques Infectieux). 
                    Notre certification QUALIPROPRE 10403 assure un nettoyage extrême conforme aux normes les plus strictes.
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
              Le Lien avec les familles : vous n'êtes pas seuls
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Faire appel à un service de nettoyage pour le syndrome de Diogène est une décision difficile. 
              Nous le comprenons. C'est pourquoi nous vous accompagnons avec une écoute authentique et un soutien à chaque étape.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h4 className="font-bold text-card-foreground mb-3">Écoute bienveillante</h4>
                <p className="text-sm text-muted-foreground">
                  Discussion confidentielle et sans jugement. Nous prenons le temps de comprendre votre situation pour vous proposer une solution adaptée.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h4 className="font-bold text-card-foreground mb-3">Discrétion totale garantie</h4>
                <p className="text-sm text-muted-foreground">
                  Intervention discrète : aucun marquage visible sur nos véhicules ou équipements. Votre intimité est respectée.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h4 className="font-bold text-card-foreground mb-3">Accompagnement personnalisé</h4>
                <p className="text-sm text-muted-foreground">
                  Suivi humain jusqu'à la fin du processus, avec possibilité d'accompagnement post-intervention pour assurer votre sérénité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator Section */}
      <section id="simulator" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SimulatorHighlight>
            <CostEstimator variant="diogene" />
          </SimulatorHighlight>
        </div>
      </section>

      <TrustBadges />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-hero text-primary-foreground rounded-2xl p-12 text-center shadow-strong">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Une situation de Diogène dans l'Hérault ?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Le Lien Propreté 34 vous apporte une solution professionnelle et humaine à Béziers et dans tout le département.<br />
              <strong>Devis garanti sous 12 heures - Discrétion absolue</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" onClick={() => trackCTAClick('devis', 'Parlons de Votre Situation - Diogène Final', '/contact')}>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-8 py-6 shadow-strong"
                >
                  Parlons de Votre Situation
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
