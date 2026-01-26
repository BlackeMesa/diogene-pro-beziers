import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import heroCleaningTeam from "@/assets/hero-cleaning-team.jpg";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

const NettoyageDiogeneNarbonne = () => {
  useEffect(() => {
    trackServicePageView("Nettoyage Diogène Narbonne");
  }, []);

  const quartiers = ["Centre-Ville", "Narbonne-Plage", "Bourg", "Razimbaud", "Saint-Jean-Saint-Pierre", "Les Berges du Canal", "L'Alaric"];

  const villesProches = ["Gruissan", "Port-la-Nouvelle", "Leucate", "Coursan", "Vinassan", "Narbonne-Plage", "Bages", "Sigean"];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nettoyage Diogène Narbonne 7j/7 | Lien Propreté 34</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Narbonne (11). Intervention discrète sous 24h depuis Béziers. Devis gratuit ☎️ 07 88 43 20 55" />
        <meta property="og:title" content="Nettoyage Diogène Narbonne - Lien Propreté 34" />
        <meta property="og:description" content="Accompagnement professionnel et humain pour le nettoyage syndrome de Diogène à Narbonne. À 30 min de notre base à Béziers." />
        <meta property="og:url" content="https://lienproprete34.fr/nettoyage-diogene-narbonne" />
        <link rel="canonical" href="https://lienproprete34.fr/nettoyage-diogene-narbonne" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Lien Propreté 34 - Nettoyage Diogène Narbonne",
            image: heroCleaningTeam,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Narbonne",
              postalCode: "11100",
              addressRegion: "Occitanie",
              addressCountry: "FR",
            },
            telephone: "+33788432055",
            priceRange: "800€-8000€",
            areaServed: "Narbonne et agglomération",
            openingHours: "Mo-Su 00:00-23:59",
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNav items={[{ label: "Nettoyage Diogène", path: "/nettoyage-diogene" }, { label: "Narbonne" }]} />

          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nettoyage syndrome de Diogène à Narbonne (11)</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Basés à Béziers (à seulement 30 min de Narbonne), nous intervenons rapidement dans toute l'agglomération narbonnaise pour un accompagnement humain et respectueux. Protocole certifié QUALIPROPRE 10403.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick("narbonne_hero")}>
                    <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto">
                      <Phone className="mr-2 w-5 h-5" />
                      07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick("devis", "Devis Gratuit Narbonne", "/contact")}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Devis Gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Intervention sous 24h</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Devis gratuit sous 12h</span>
                  </div>
                </div>
              </div>
              <div>
                <img src={heroCleaningTeam} alt="Équipe de nettoyage professionnelle à Narbonne" className="rounded-2xl shadow-strong w-full" />
              </div>
            </div>
          </section>

          <TrustBadges />

          {/* Quartiers Couverts */}
          <section className="py-16 bg-secondary rounded-2xl px-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Tous les Secteurs de Narbonne Couverts</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">Nous intervenons dans l'ensemble des quartiers de Narbonne et dans toute l'agglomération du Grand Narbonne.</p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Quartiers de Narbonne :</h3>
                  <div className="flex flex-wrap gap-2">
                    {quartiers.map((quartier, index) => (
                      <span key={index} className="px-3 py-1 bg-card rounded-full text-sm font-medium text-card-foreground shadow-soft">
                        {quartier}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Villes proches :</h3>
                  <div className="flex flex-wrap gap-2">
                    {villesProches.map((ville, index) => (
                      <span key={index} className="px-3 py-1 bg-card rounded-full text-sm font-medium text-card-foreground shadow-soft">
                        {ville}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Et toutes les communes du Grand Narbonne</p>
              <div className="mt-6 p-4 bg-accent/10 rounded-xl border-l-4 border-accent">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-card-foreground">Nous intervenons aussi dans l'Aude :</strong>{" "}
                  <Link to="/nettoyage-diogene-carcassonne" className="text-primary hover:underline font-medium">
                    Carcassonne
                  </Link>
                  ,{" "}
                  <Link to="/nettoyage-diogene-lezignan" className="text-primary hover:underline font-medium">
                    Lézignan-Corbières
                  </Link>
                  ,{" "}
                  <Link to="/nettoyage-diogene-limoux" className="text-primary hover:underline font-medium">
                    Limoux
                  </Link>{" "}
                  et{" "}
                  <Link to="/zone-intervention-aude" className="text-primary hover:underline font-semibold">
                    toutes les communes de l'Aude (11)
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Pourquoi Nous Choisir */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Pourquoi nous choisir à Narbonne ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Proximité géographique</h3>
                <p className="text-muted-foreground">Depuis Béziers, nous sommes à 30 minutes de Narbonne via l'A9. Réactivité maximale avec intervention possible sous 24h.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Connaissance de la région</h3>
                <p className="text-muted-foreground">Nous connaissons parfaitement Narbonne et le Narbonnais : accès, déchetteries, services sociaux locaux.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Discrétion absolue</h3>
                <p className="text-muted-foreground">Véhicules banalisés, intervention sans enseigne. Respect total de votre vie privée et confidentialité garantie.</p>
              </div>
            </div>
          </section>

          {/* Délais d'Intervention */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Délais d'intervention à Narbonne</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">24h</div>
                  <p className="text-lg">Intervention rapide sur Narbonne et agglomération</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">30 min</div>
                  <p className="text-lg">Temps de trajet depuis Béziers via A9</p>
                </div>
              </div>
              <a href="tel:+33788432055" onClick={() => trackPhoneClick("narbonne_delais")}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant - 07 88 43 20 55
                </Button>
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Questions fréquentes - Narbonne</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Intervenez-vous dans tous les quartiers de Narbonne ?</h3>
                <p className="text-muted-foreground">Oui, nous couvrons l'intégralité de Narbonne : centre-ville, Narbonne-Plage, et tous les quartiers, sans exception.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Quel est le délai d'intervention à Narbonne ?</h3>
                <p className="text-muted-foreground">Nous intervenons sous 24h à Narbonne. Pour une urgence, nous pouvons nous déplacer le jour même si nécessaire.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Y a-t-il des frais de déplacement depuis Béziers ?</h3>
                <p className="text-muted-foreground">Un forfait de déplacement modéré s'applique (environ 50€), bien inférieur aux tarifs d'entreprises plus éloignées. Devis transparent.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Comment se déroule l'évaluation à Narbonne ?</h3>
                <p className="text-muted-foreground">Nous nous déplaçons gratuitement à votre domicile à Narbonne pour évaluer la situation. Un devis détaillé vous est remis sous 12h.</p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Besoin d'aide à Narbonne ?</h2>
            <p className="text-xl text-muted-foreground mb-8">Contactez-nous dès maintenant pour un accompagnement professionnel et humain</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick("narbonne_final_cta")}>
                <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/prix-nettoyage-diogene-herault" onClick={() => trackCTAClick("pricing", "Voir les Tarifs", "/prix-nettoyage-diogene-herault")}>
                <Button size="lg" variant="outline">
                  Voir les Tarifs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Liens vers autres villes */}
          <section className="mt-12 p-6 bg-card rounded-xl border border-border">
            <h3 className="text-lg font-bold text-card-foreground mb-4 text-center">Nous intervenons aussi dans l'Aude et l'Hérault</h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <Link to="/nettoyage-diogene-carcassonne" className="px-3 py-1 bg-secondary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Carcassonne
              </Link>
              <Link to="/nettoyage-diogene-lezignan" className="px-3 py-1 bg-secondary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Lézignan
              </Link>
              <Link to="/nettoyage-diogene-beziers" className="px-3 py-1 bg-secondary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Béziers
              </Link>
              <Link to="/nettoyage-diogene-montpellier" className="px-3 py-1 bg-secondary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Montpellier
              </Link>
              <Link to="/zone-intervention-aude" className="px-3 py-1 bg-primary text-primary-foreground rounded-full font-medium">
                → Toutes les villes Aude
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NettoyageDiogeneNarbonne;
