import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Info, Euro, Heart, Shield, AlertTriangle, Quote, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PricingTable from "@/components/PricingTable";
import CostEstimator from "@/components/CostEstimator";
import { SimulatorHighlight } from "@/components/SimulatorHighlight";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect, useState } from "react";
// Image hero
import chambrePropre from "@/assets/image/chambre_totalement_nettoyé.jpg";
import ChatPromoBanner from "@/components/ChatPromoBanner";

const PrixNettoyageDiogene = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const temoignages = [
    {
      texte: "J'avais peur du prix, mais l'estimation était exacte au centime près. Et avec l'aide de l'APA, on n'a payé que 40% de la facture. Merci pour votre honnêteté.",
      auteur: "Famille D.",
      ville: "Montpellier",
      details: "T3, intervention à 2 100€",
      note: 5,
    },
    {
      texte: "Le devis était clair et détaillé. Pas de mauvaise surprise à la fin. L'équipe a même trouvé des objets de valeur qui ont réduit la facture de 300€.",
      auteur: "Michel R.",
      ville: "Béziers",
      details: "T2, intervention à 1 450€",
      note: 5,
    },
    {
      texte: "Ma mère était hospitalisée et je devais vider son appartement rapidement. Le prix était correct et ils ont été d'une grande humanité. Je recommande.",
      auteur: "Sophie M.",
      ville: "Sète",
      details: "Studio, intervention à 950€",
      note: 5,
    },
    {
      texte: "Après le décès de mon père, je ne savais pas par où commencer. Leur devis gratuit m'a permis de voir clair. Le prix final était exactement celui annoncé.",
      auteur: "Jean-Pierre L.",
      ville: "Agde",
      details: "Maison, intervention à 4 800€",
      note: 5,
    },
    {
      texte: "J'ai comparé 3 devis. Lien Propreté n'était pas le moins cher, mais le seul à tout détailler. Au final, les autres avaient des frais cachés. Eux, zéro.",
      auteur: "Caroline B.",
      ville: "Narbonne",
      details: "T4, intervention à 3 600€",
      note: 5,
    },
  ];

  useEffect(() => {
    trackServicePageView("Prix Nettoyage Diogène");
  }, []);

  // Auto-rotation du carrousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % temoignages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [temoignages.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % temoignages.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + temoignages.length) % temoignages.length);
  };

  const facteurs = [
    {
      title: "Niveau d'insalubrité",
      description: "Échelle de 1 (modéré) à 5 (sévère). Plus le niveau est élevé, plus l'intervention nécessite de temps et de ressources.",
    },
    {
      title: "Surface en m²",
      description: "La taille du logement influence directement le volume de débarras et le temps de nettoyage nécessaire.",
    },
    {
      title: "Volume d'objets à évacuer",
      description: "Nombre de m³ à débarrasser. Certains objets de valeur peuvent être valorisés pour réduire le coût.",
    },
    {
      title: "Accès au logement",
      description: "Étage, présence d'ascenseur, distance du stationnement. L'accessibilité impacte la logistique.",
    },
    {
      title: "Désinfection nécessaire",
      description: "Traitement anti-bactérien, désodorisation, traitement des nuisibles si présence d'infestation.",
    },
  ];

  const aides = [
    {
      title: "Assurance Habitation",
      description: "Certaines polices couvrent partiellement le nettoyage en cas de sinistre ou situation exceptionnelle.",
    },
    {
      title: "APA (Allocation Personnalisée d'Autonomie)",
      description: "Pour les personnes âgées dépendantes, l'APA peut financer tout ou partie de l'intervention.",
    },
    {
      title: "Aide Sociale des Communes",
      description: "Le CCAS peut accorder des aides exceptionnelles selon situation financière et familiale.",
    },
    {
      title: "Prise en Charge Succession",
      description: "Dans le cadre d'une succession, les frais peuvent être imputés sur l'actif successoral.",
    },
  ];

  const exemplesReels = [
    {
      type: "T2 à Agde",
      niveau: "Modéré",
      niveauColor: "text-green-600",
      detail: "Débarras 15m³ + nettoyage + désinfection",
      prix: "1 250€",
    },
    {
      type: "T3 à Béziers",
      niveau: "Sévère",
      niveauColor: "text-red-600",
      detail: "Débarras 40m³ + désinfection + dératisation",
      prix: "2 200€",
    },
    {
      type: "Maison à Pézenas",
      niveau: "Moyen",
      niveauColor: "text-yellow-600",
      detail: "Succession - Débarras complet + remise en état",
      prix: "3 500€",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Prix Nettoyage Diogène Hérault (34) | Tarifs 2026 & Devis gratuit</title>
        <meta name="description" content="Tarifs transparents pour nettoyage Diogène dans l'Hérault. Simulateur en ligne + Devis gratuit sous 12h. À partir de 800€. ☎️ 07 56 87 57 07" />
        <meta property="og:title" content="Prix Nettoyage Diogène Hérault - Tarifs 2026" />
        <meta property="og:description" content="Découvrez nos tarifs transparents pour le nettoyage syndrome de Diogène dans l'Hérault." />
        <meta property="og:url" content="https://lienproprete34.fr/prix-nettoyage-diogene-herault" />
        <link rel="canonical" href="https://lienproprete34.fr/prix-nettoyage-diogene-herault" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Nettoyage syndrome de Diogène",
            provider: {
              "@type": "LocalBusiness",
              name: "Lien Propreté 34",
            },
            areaServed: "Hérault (34)",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "800",
              highPrice: "8000",
              priceCurrency: "EUR",
            },
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingCTA />

      {/* Hero Section avec image de fond */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <img src={chambrePropre} alt="Résultat après nettoyage Diogène" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <BreadcrumbNav items={[{ label: "Tarifs Nettoyage Diogène" }]} />

          <div className="text-center mt-8">
            <div className="max-w-3xl mx-auto text-primary-foreground">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
                <Euro className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tarifs transparents - nettoyage Diogène Hérault</h1>
              <p className="text-xl mb-8 leading-relaxed opacity-95">
                Chez Lien Propreté 34, nous croyons en la transparence totale. Découvrez nos grilles tarifaires et utilisez notre simulateur pour estimer votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#simulator" onClick={() => trackCTAClick("scroll_to_simulator", "Simulateur Prix Hero")}>
                  <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                    Simulateur de prix gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="tel:+33788432055" onClick={() => trackPhoneClick("prix_hero")}>
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Phone className="mr-2 w-4 h-4" />
                    07 56 87 57 07
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Témoignages Prix - Carrousel */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Ce que disent nos clients sur les prix</h2>
            <div className="max-w-3xl mx-auto relative">
              {/* Carrousel */}
              <div className="bg-card rounded-2xl shadow-medium p-8 border border-border relative overflow-hidden min-h-[280px]">
                <Quote className="absolute top-4 left-4 w-10 h-10 text-accent/20" />

                {/* Contenu du témoignage */}
                <div className="text-center transition-opacity duration-300">
                  <p className="text-lg md:text-xl text-card-foreground italic mb-6 leading-relaxed">"{temoignages[currentTestimonial].texte}"</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex text-yellow-500">
                      {Array.from({ length: temoignages[currentTestimonial].note }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">{temoignages[currentTestimonial].auteur}</span> — {temoignages[currentTestimonial].ville}
                  </p>
                  <p className="text-sm text-accent font-medium mt-1">({temoignages[currentTestimonial].details})</p>
                </div>

                {/* Boutons navigation */}
                <button onClick={prevTestimonial} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Témoignage précédent">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button onClick={nextTestimonial} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Témoignage suivant">
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>

              {/* Indicateurs de position */}
              <div className="flex justify-center gap-2 mt-4">
                {temoignages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentTestimonial ? "bg-accent w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    aria-label={`Voir témoignage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Exemples Concrets */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Exemples d'interventions réelles</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">Voici quelques exemples anonymisés d'interventions récentes pour vous donner une idée concrète des coûts.</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {exemplesReels.map((exemple, index) => (
                <div key={index} className="bg-card rounded-xl shadow-medium p-6 border border-border text-center">
                  <h3 className="font-bold text-lg text-primary mb-1">{exemple.type}</h3>
                  <span className={`text-sm font-medium ${exemple.niveauColor}`}>Niveau {exemple.niveau}</span>
                  <p className="text-muted-foreground text-sm mt-3 mb-4">{exemple.detail}</p>
                  <div className="text-3xl font-bold text-accent">{exemple.prix}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a href="#simulator" onClick={() => trackCTAClick("scroll_to_simulator", "Simulateur après exemples")}>
                <Button variant="outline" className="font-semibold whitespace-normal">
                  Votre situation ressemble à un de ces cas ? Simulez votre prix →
                </Button>
              </a>
            </div>
          </section>
          {/* Chat Promo - Vers le haut */}
          <div className="max-w-2xl mx-auto mb-12">
            <ChatPromoBanner variant="highlight" />
          </div>
          {/* Grille Tarifaire */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Grille tarifaire indicative 2026</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">Ces tarifs sont indicatifs et varient selon le niveau d'insalubrité, l'accessibilité et les prestations nécessaires.</p>
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

          {/* Coût de l'inaction */}
          <section className="mb-16">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-red-800">Ce que coûte l'inaction</h2>
              </div>
              <p className="text-center text-red-700 mb-8">Reporter l'intervention peut avoir des conséquences financières bien plus lourdes :</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                  <div className="text-3xl font-bold text-red-600 mb-2">30 000€</div>
                  <p className="text-sm text-muted-foreground">Amende maximale pour insalubrité (Art. L1331-22 CSP)</p>
                </div>
                <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                  <div className="text-3xl font-bold text-red-600 mb-2">-15 à -40%</div>
                  <p className="text-sm text-muted-foreground">Perte de valeur du bien immobilier</p>
                </div>
                <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                  <div className="text-3xl font-bold text-red-600 mb-2">6-12 mois</div>
                  <p className="text-sm text-muted-foreground">Procédure d'expulsion en cas de non-action</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="tel:+33788432055" onClick={() => trackPhoneClick("cout_inaction")}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
                    <Phone className="mr-2 w-4 h-4" />
                    Agir maintenant : 07 56 87 57 07
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Facteurs de Prix */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Qu'est-ce qui influence le prix ?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {facteurs.map((facteur, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-medium border border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-card-foreground">{facteur.title}</h3>
                      <p className="text-muted-foreground text-sm">{facteur.description}</p>
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
                <h2 className="text-3xl font-bold text-primary">Aides financières possibles</h2>
              </div>
              <p className="text-center text-muted-foreground mb-8 text-lg">Vous n'êtes pas seul(e). Plusieurs dispositifs peuvent vous aider à financer l'intervention.</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {aides.map((aide, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-medium">
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">{aide.title}</h3>
                    <p className="text-muted-foreground text-sm">{aide.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 border border-accent rounded-xl p-6 text-center">
                <p className="text-card-foreground font-medium">💡 Nous pouvons vous accompagner dans vos démarches administratives pour obtenir ces aides.</p>
              </div>
              <div className="text-center mt-6">
                <Link to="/aides-financieres" onClick={() => trackCTAClick("aides", "Voir toutes les aides", "/aides-financieres")}>
                  <Button variant="outline" className="font-semibold">
                    Vérifier mon éligibilité aux aides →
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Garantie Prix Ferme */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Notre garantie prix ferme</h3>
                  <p className="text-muted-foreground">Un engagement écrit, pas juste des paroles</p>
                </div>
              </div>
              <div className="space-y-3 ml-0 md:ml-18">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <p className="text-card-foreground">
                    <strong>Le devis signé = le prix final.</strong> Pas de surprise à la fin des travaux.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <p className="text-card-foreground">
                    <strong>Si on découvre plus de travail</strong> que prévu, c'est pour nous. Pas pour vous.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <p className="text-card-foreground">
                    <strong>Paiement après intervention</strong> uniquement quand vous êtes satisfait.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Prix */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Questions fréquentes sur les prix</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Le devis est-il gratuit et sans engagement ?</h3>
                <p className="text-muted-foreground">Oui, absolument. L'évaluation et le devis sont 100% gratuits et sans aucun engagement. Vous recevez un devis détaillé sous 12h maximum.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Puis-je payer en plusieurs fois ?</h3>
                <p className="text-muted-foreground">Oui, nous proposons des facilités de paiement échelonné selon votre situation. Parlons-en lors du devis.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Y a-t-il des frais cachés ?</h3>
                <p className="text-muted-foreground">Non, aucun. Le devis détaille l'intégralité des coûts : débarras, nettoyage, désinfection, évacuation. Pas de mauvaise surprise.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Que se passe-t-il si le volume est sous-estimé ?</h3>
                <p className="text-muted-foreground">Nous faisons toujours une évaluation précise sur place. Si toutefois un écart apparaît, nous vous informons immédiatement et ajustons le devis avec votre accord.</p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Obtenez votre devis personnalisé gratuit</h2>
            <p className="text-xl mb-8 opacity-95">Réponse garantie sous 12h - 7 jours sur 7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" onClick={() => trackCTAClick("devis", "Demander Devis Prix Final", "/contact")}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+33788432055" onClick={() => trackPhoneClick("prix_final_cta")}>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="mr-2 w-5 h-5" />
                  07 56 87 57 07
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
