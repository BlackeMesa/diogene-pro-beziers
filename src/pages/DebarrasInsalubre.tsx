import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingDown, Building2, FileText, Recycle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import TrustBadges from "@/components/TrustBadges";
import CostEstimator from "@/components/CostEstimator";
import { SimulatorHighlight } from "@/components/SimulatorHighlight";
import valuableObjects from "@/assets/valuable-objects.jpg";
import professionalPartnership from "@/assets/professional-partnership.jpg";
import { trackServicePageView, trackCTAClick } from "@/lib/analytics";
import { useEffect } from "react";
// Images humaines
import technicienCuisine from "@/assets/image/homme_nettoyant_cuisine.jpg";
import chambrePropre from "@/assets/image/chambre_totalement_nettoyé.jpg";
import murDegrade from "@/assets/image/mur_dégradé.png";

const DebarrasInsalubre = () => {
  useEffect(() => {
    trackServicePageView("Débarras Insalubre");
  }, []);

  const clientTypes = [
    {
      icon: Building2,
      title: "Propriétaires et Bailleurs",
      description: "Débarras insalubre de logements entre deux locataires ou après décès. Nous redonnons vie à votre bien avec respect et professionnalisme.",
    },
    {
      icon: FileText,
      title: "Agences immobilières",
      description: "Service rapide et fiable pour libérer vos biens. Nous coordonnons nos interventions avec vos plannings de location. Partenaire de confiance dans l'Hérault.",
    },
    {
      icon: Building2,
      title: "Mandataires judiciaires",
      description: "Évacuation sécurisée d'archives, meubles et documents. Traçabilité complète et conformité légale garanties. Un service de confiance.",
    },
  ];

  const pricingFactors = [
    {
      title: "Volume à évacuer",
      description: "Tarif de base entre 20€ et 60€ par m³ selon la nature et l'accessibilité",
    },
    {
      title: "Type de déchets",
      description: "Classification et tri pour optimisation du coût (valorisable vs. déchet ultime)",
    },
    {
      title: "Accessibilité",
      description: "Étage, ascenseur, distance du véhicule - impact sur le temps d'intervention",
    },
    {
      title: "Valorisation possible",
      description: "Objets revendables qui peuvent réduire voire annuler le coût final",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Débarras insalubre Béziers | Tarif transparent au m³</title>
        <meta name="description" content="Débarras logement insalubre dans l'Hérault. Tarif clair au m³, valorisation possible. Devis gratuit sous 12h ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lienproprete34.fr/debarras-insalubre" />
        <meta property="og:url" content="https://lienproprete34.fr/debarras-insalubre" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      {/* Hero Section avec image de fond */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <img src={technicienCuisine} alt="Technicien en intervention débarras insalubre" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Débarras de logement insalubre à Béziers - Tarification transparente</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">Lien Propreté 34 : Débarras respectueux et valorisé dans l'Hérault. Prix au m³ clair et honnête.</p>

            {/* Primary CTA - Estimateur */}
            <div className="mb-6">
              <a href="#simulator" onClick={() => trackCTAClick("scroll_to_simulator", "Estimez Votre Projet - Débarras Hero", "#simulator")}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-xl px-12 py-8 shadow-strong hover:scale-105 transition-transform">
                  🎯 Estimez votre projet
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </a>
              <p className="text-sm mt-3 opacity-90 font-medium">⚡ Résultat immédiat en 30 secondes</p>
            </div>

            {/* Secondary CTA */}
            <div>
              <Link to="/contact" onClick={() => trackCTAClick("devis", "Devis gratuit - Débarras", "/contact")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6"
                >
                  Devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
                  <TrendingDown className="w-8 h-8 text-success" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Prix transparent et débarras valorisé</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Chez Lien Propreté 34, pas de surprise. Notre tarif au m³ varie de <strong className="text-primary">20€ à 60€</strong>
                  selon la situation. Et bonne nouvelle : nous pouvons réduire, voire annuler ce coût grâce à la valorisation d'objets.
                </p>

                <div className="bg-accent/10 border-2 border-accent rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <Recycle className="w-10 h-10 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3">Le débarras valorisé : une solution gagnante</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Nous identifions les objets de valeur (meubles anciens, bibelots, électroménager fonctionnel...) et les revendons pour vous. Ce n'est pas du recyclage standard, c'est une vraie démarche de
                        valorisation.
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                        Le produit de cette revente vient <span className="text-success">réduire directement votre facture</span>. Parfois, votre débarras ne vous coûte rien !
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img src={valuableObjects} alt="Objets valorisables pouvant réduire le coût du débarras" className="rounded-2xl shadow-strong w-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="bg-card rounded-xl shadow-soft p-6 hover:shadow-medium transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">{factor.title}</h4>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative">
                <img src={professionalPartnership} alt="Partenariats professionnels avec agences et mandataires" className="rounded-2xl shadow-strong w-full" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos partenaires professionnels dans l'Hérault</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nous adaptons notre service aux besoins spécifiques de chaque client : propriétaires, agences immobilières, mandataires judiciaires. Réactivité et fiabilité garanties.
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {clientTypes.map((client, index) => (
                <div key={index} className="bg-card rounded-2xl shadow-medium p-8 hover:shadow-strong transition-all duration-300">
                  <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mb-6">
                    <client.icon className="w-8 h-8 text-trust" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">{client.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Ce qui est inclus dans notre service de débarras</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  Débarras complet du logement
                </h3>
                <p className="text-muted-foreground ml-9">Évacuation complète de tous les objets, meubles, électroménager et déchets. Tri professionnel et traitement adapté selon la nature des biens, avec respect.</p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  Évacuation d'Archives et Documents
                </h3>
                <p className="text-muted-foreground ml-9">Service spécialisé pour mandataires judiciaires. Destruction confidentielle possible. Traçabilité complète et sécurisée des documents évacués.</p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  Nettoyage sommaire post-débarras
                </h3>
                <p className="text-muted-foreground ml-9">Balayage et nettoyage de base après évacuation. Pour un nettoyage extrême et une désinfection complète, découvrez notre service dédié au syndrome de Diogène.</p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  Gestion écologique des déchets
                </h3>
                <p className="text-muted-foreground ml-9">
                  Tri sélectif et acheminement vers les filières appropriées (recyclage, déchetterie, valorisation). Nous réduisons l'impact environnemental tout en optimisant vos coûts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Situations d'intervention : nous sommes là pour vous</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <h4 className="font-bold text-card-foreground mb-2">Logement insalubre après un locataire</h4>
                <p className="text-sm text-muted-foreground">
                  Débarras complet d'un appartement ou maison très sale. Nous redonnons vie à votre bien pour une nouvelle location rapide. Intervention discrète dans l'Hérault.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <h4 className="font-bold text-card-foreground mb-2">Débarras après décès ou succession</h4>
                <p className="text-sm text-muted-foreground">
                  Vidage de maison avec tri respectueux des objets de valeur sentimentale et valorisation du reste. Nous accompagnons les familles avec empathie dans ces moments difficiles.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <h4 className="font-bold text-card-foreground mb-2">Archives d'entreprise ou de cabinet</h4>
                <p className="text-sm text-muted-foreground">Évacuation sécurisée de documents et archives anciennes. Service professionnel pour mandataires judiciaires, notaires et entreprises. Traçabilité garantie.</p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <h4 className="font-bold text-card-foreground mb-2">Cave ou grenier encombré</h4>
                <p className="text-sm text-muted-foreground">Débarras de combles, caves, garages remplis d'objets accumulés sur des années. Libération d'espaces de stockage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator Section */}
      <section id="simulator" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SimulatorHighlight>
            <CostEstimator variant="debarras" />
          </SimulatorHighlight>
        </div>
      </section>

      <TrustBadges />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-hero text-primary-foreground rounded-2xl p-12 text-center shadow-strong">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Un débarras insalubre dans l'Hérault ?</h2>
            <p className="text-xl mb-2 opacity-95">Lien Propreté 34 : Tarif au m³ transparent avec débarras valorisé</p>
            <p className="text-lg mb-8 opacity-90">
              <strong>Devis sous 12 heures - Disponible 7J/7 à Béziers et dans tout le 34</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" onClick={() => trackCTAClick("devis", "Demander un Devis - Débarras Final", "/contact")}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-8 py-6 shadow-strong">
                  Demander un devis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 p-6 bg-accent/10 rounded-xl border-l-4 border-accent max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-card-foreground">Nos services complémentaires :</strong>
              <br />
              <Link to="/nettoyage-diogene" className="text-primary hover:underline font-medium">
                Nettoyage syndrome de Diogène
              </Link>{" "}
              •{" "}
              <Link to="/nettoyage-urgence-24h-herault" className="text-primary hover:underline font-medium">
                Urgence 24h
              </Link>{" "}
              •{" "}
              <Link to="/prix-nettoyage-diogene-herault" className="text-primary hover:underline font-medium">
                Nos tarifs
              </Link>
            </p>
            <p className="text-sm text-center mt-2">
              <strong className="text-card-foreground">Zones d'intervention :</strong>{" "}
              <Link to="/nettoyage-diogene-beziers" className="text-primary hover:underline">
                Béziers
              </Link>{" "}
              •{" "}
              <Link to="/nettoyage-diogene-montpellier" className="text-primary hover:underline">
                Montpellier
              </Link>{" "}
              •{" "}
              <Link to="/nettoyage-diogene-sete" className="text-primary hover:underline">
                Sète
              </Link>{" "}
              •{" "}
              <Link to="/zone-intervention-herault" className="text-primary hover:underline font-medium">
                Toutes nos villes
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DebarrasInsalubre;
