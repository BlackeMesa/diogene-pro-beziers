import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Info, Euro, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PricingTable from "@/components/PricingTable";
import CostEstimator from "@/components/CostEstimator";
import { SimulatorHighlight } from "@/components/SimulatorHighlight";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

const PrixNettoyageDiogene = () => {
  useEffect(() => {
    trackServicePageView('Prix Nettoyage Diogène');
  }, []);

  const facteurs = [
    {
      title: "Niveau d'insalubrité",
      description: "Échelle de 1 (modéré) à 5 (sévère). Plus le niveau est élevé, plus l'intervention nécessite de temps et de ressources."
    },
    {
      title: "Surface en m²",
      description: "La taille du logement influence directement le volume de débarras et le temps de nettoyage nécessaire."
    },
    {
      title: "Volume d'objets à évacuer",
      description: "Nombre de m³ à débarrasser. Certains objets de valeur peuvent être valorisés pour réduire le coût."
    },
    {
      title: "Accès au logement",
      description: "Étage, présence d'ascenseur, distance du stationnement. L'accessibilité impacte la logistique."
    },
    {
      title: "Désinfection nécessaire",
      description: "Traitement anti-bactérien, désodorisation, traitement des nuisibles si présence d'infestation."
    }
  ];

  const aides = [
    {
      title: "Assurance Habitation",
      description: "Certaines polices couvrent partiellement le nettoyage en cas de sinistre ou situation exceptionnelle."
    },
    {
      title: "APA (Allocation Personnalisée d'Autonomie)",
      description: "Pour les personnes âgées dépendantes, l'APA peut financer tout ou partie de l'intervention."
    },
    {
      title: "Aide Sociale des Communes",
      description: "Le CCAS peut accorder des aides exceptionnelles selon situation financière et familiale."
    },
    {
      title: "Prise en Charge Succession",
      description: "Dans le cadre d'une succession, les frais peuvent être imputés sur l'actif successoral."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Prix Nettoyage Diogène Hérault (34) | Tarifs 2025 & Devis Gratuit</title>
        <meta name="description" content="Tarifs transparents pour nettoyage Diogène dans l'Hérault. Simulateur en ligne + devis gratuit sous 12h. À partir de 800€. ☎️ 07 88 43 20 55" />
        <meta property="og:title" content="Prix Nettoyage Diogène Hérault - Tarifs 2025" />
        <meta property="og:description" content="Découvrez nos tarifs transparents pour le nettoyage syndrome de Diogène dans l'Hérault." />
        <meta property="og:url" content="https://lelienproprete34.com/prix-nettoyage-diogene-herault" />
        <link rel="canonical" href="https://www.lelienproprete34.fr/prix-nettoyage-diogene-herault" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Nettoyage Syndrome de Diogène",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Le Lien Propreté 34"
            },
            "areaServed": "Hérault (34)",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "800",
              "highPrice": "8000",
              "priceCurrency": "EUR"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNav 
            items={[
              { label: "Tarifs Nettoyage Diogène" }
            ]} 
          />

          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Euro className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Tarifs transparents - nettoyage Diogène Hérault
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Chez Le Lien Propreté 34, nous croyons en la transparence totale. 
                Découvrez nos grilles tarifaires et utilisez notre simulateur pour estimer votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#simulator" onClick={() => trackCTAClick('scroll_to_simulator', 'Simulateur Prix Hero')}>
                  <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold">
                    Simulateur de prix gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="tel:+33788432055" onClick={() => trackPhoneClick('prix_hero')}>
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 w-4 h-4" />
                    07 88 43 20 55
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Grille Tarifaire */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Grille tarifaire indicative 2025
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ces tarifs sont indicatifs et varient selon le niveau d'insalubrité, 
              l'accessibilité et les prestations nécessaires.
            </p>
            <PricingTable />
          </section>

          {/* Simulateur */}
          <section id="simulator" className="py-16 bg-gradient-to-br from-secondary via-background to-secondary rounded-2xl mb-16 scroll-mt-20">
            <div className="container mx-auto px-4">
              <SimulatorHighlight>
                <CostEstimator />
              </SimulatorHighlight>
            </div>
          </section>

          {/* Facteurs de Prix */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Qu'est-ce qui influence le prix ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {facteurs.map((facteur, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-medium border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-card-foreground">
                        {facteur.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {facteur.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Aides Financières */}
          <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <Heart className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-primary">
                  Aides financières possibles
                </h2>
              </div>
              <p className="text-center text-muted-foreground mb-8 text-lg">
                Vous n'êtes pas seul(e). Plusieurs dispositifs peuvent vous aider à financer l'intervention.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {aides.map((aide, index) => (
                  <div 
                    key={index}
                    className="bg-card p-6 rounded-xl shadow-medium"
                  >
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">
                      {aide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {aide.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 border border-accent rounded-xl p-6 text-center">
                <p className="text-card-foreground font-medium">
                  💡 Nous pouvons vous accompagner dans vos démarches administratives pour obtenir ces aides.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Prix */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Questions fréquentes sur les prix
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Le devis est-il gratuit et sans engagement ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, absolument. L'évaluation et le devis sont 100% gratuits et sans aucun engagement. 
                  Vous recevez un devis détaillé sous 12h maximum.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Puis-je payer en plusieurs fois ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, nous proposons des facilités de paiement échelonné selon votre situation. 
                  Parlons-en lors du devis.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Y a-t-il des frais cachés ?
                </h3>
                <p className="text-muted-foreground">
                  Non, aucun. Le devis détaille l'intégralité des coûts : débarras, nettoyage, 
                  désinfection, évacuation. Pas de mauvaise surprise.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Que se passe-t-il si le volume est sous-estimé ?
                </h3>
                <p className="text-muted-foreground">
                  Nous faisons toujours une évaluation précise sur place. Si toutefois un écart apparaît, 
                  nous vous informons immédiatement et ajustons le devis avec votre accord.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Obtenez votre devis personnalisé gratuit
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Réponse garantie sous 12h - 7 jours sur 7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis Prix Final', '/contact')}>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold"
                >
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('prix_final_cta')}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrixNettoyageDiogene;
