import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import heroCleaningTeam from "@/assets/lezignan-city.webp";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

// Images humaines
import technicienIntervention from "@/assets/image/homme_nettoyant_sol_chambre_encombre.jpg";
import chambrePropre from "@/assets/image/chambre_totalement_nettoyé.jpg";

const NettoyageDiogeneLezignan = () => {
  useEffect(() => {
    trackServicePageView("Nettoyage Diogène Lézignan-Corbières");
  }, []);

  const quartiers = ["Centre-Ville", "La Promenade", "Les Hautes Garrigues", "Quartier de la Gare", "Cité Bourgade"];

  const villesProches = ["Fabrezan", "Lagrasse", "Durban-Corbières", "Ornaisons", "Saint-André-de-Roquelongue", "Homps", "Luc-sur-Orbieu"];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nettoyage Diogène Lézignan-Corbières 7j/7 | Lien Propreté 34</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Lézignan-Corbières (11). Intervention discrète sous 48h depuis Béziers. Devis gratuit ☎️ 07 56 87 57 07" />
        <meta property="og:title" content="Nettoyage Diogène Lézignan-Corbières - Lien Propreté 34" />
        <meta property="og:description" content="Accompagnement professionnel et humain pour le nettoyage syndrome de Diogène à Lézignan-Corbières." />
        <meta property="og:url" content="https://lienproprete34.fr/nettoyage-diogene-lezignan" />
        <link rel="canonical" href="https://lienproprete34.fr/nettoyage-diogene-lezignan" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Lien Propreté 34 - Nettoyage Diogène Lézignan-Corbières",
            image: heroCleaningTeam,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lézignan-Corbières",
              postalCode: "11200",
              addressRegion: "Occitanie",
              addressCountry: "FR",
            },
            telephone: "+33788432055",
            priceRange: "800€-8000€",
            areaServed: "Lézignan-Corbières et Corbières",
            openingHours: "Mo-Su 00:00-23:59",
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNav items={[{ label: "Nettoyage Diogène", path: "/nettoyage-diogene" }, { label: "Lézignan-Corbières" }]} />

          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nettoyage syndrome de Diogène à Lézignan-Corbières (11)</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Basés à Béziers (à 40 minutes de Lézignan), nous intervenons dans toute la région des Corbières pour un accompagnement humain et respectueux. Protocole certifié QUALIPROPRE 10403.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick("lezignan_hero")}>
                    <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto">
                      <Phone className="mr-2 w-5 h-5" />
                      07 56 87 57 07
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick("devis", "Devis gratuit Lézignan", "/contact")}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Devis gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Intervention sous 48h</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Devis gratuit sous 12h</span>
                  </div>
                </div>
              </div>
              <div>
                <img src={heroCleaningTeam} alt="Technicien Lien Propreté 34 en intervention à Lézignan-Corbières" className="rounded-2xl shadow-strong w-full object-cover h-80" loading="lazy" />
              </div>
            </div>
          </section>

          <TrustBadges />

          {/* Quartiers Couverts */}
          <section className="py-16 bg-secondary rounded-2xl px-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Lézignan et Région des Corbières</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">Nous intervenons dans l'ensemble de Lézignan-Corbières et dans toute la région des Corbières.</p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Quartiers de Lézignan :</h3>
                  <div className="flex flex-wrap gap-2">
                    {quartiers.map((quartier, index) => (
                      <span key={index} className="px-3 py-1 bg-card rounded-full text-sm font-medium text-card-foreground shadow-soft">
                        {quartier}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Villages des Corbières :</h3>
                  <div className="flex flex-wrap gap-2">
                    {villesProches.map((ville, index) => (
                      <span key={index} className="px-3 py-1 bg-card rounded-full text-sm font-medium text-card-foreground shadow-soft">
                        {ville}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-xl border-l-4 border-accent">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-card-foreground">Nous intervenons aussi dans l'Aude :</strong>{" "}
                  <Link to="/nettoyage-diogene-narbonne" className="text-primary hover:underline font-medium">
                    Narbonne
                  </Link>
                  ,{" "}
                  <Link to="/nettoyage-diogene-carcassonne" className="text-primary hover:underline font-medium">
                    Carcassonne
                  </Link>
                  ,{" "}
                  <Link to="/nettoyage-diogene-limoux" className="text-primary hover:underline font-medium">
                    Limoux
                  </Link>{" "}
                  et{" "}
                  <Link to="/zone-intervention-aude" className="text-primary hover:underline font-semibold">
                    toute l'Aude
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Pourquoi Nous Choisir */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Pourquoi nous choisir à Lézignan-Corbières ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Proximité Béziers-Lézignan</h3>
                <p className="text-muted-foreground">À 40 minutes de Béziers, nous intervenons rapidement dans toute la région des Corbières.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Connaissance régionale</h3>
                <p className="text-muted-foreground">Nous connaissons bien les Corbières : accès aux villages, infrastructures locales.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Discrétion absolue</h3>
                <p className="text-muted-foreground">Véhicules banalisés, respect total de votre vie privée dans les petites communes.</p>
              </div>
            </div>
          </section>

          {/* Délais d'Intervention */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Délais d'intervention à Lézignan-Corbières</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">48h</div>
                  <p className="text-lg">Intervention sur Lézignan et Corbières</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">40 min</div>
                  <p className="text-lg">Temps de trajet depuis Béziers</p>
                </div>
              </div>
              <a href="tel:+33788432055" onClick={() => trackPhoneClick("lezignan_delais")}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant - 07 56 87 57 07
                </Button>
              </a>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Besoin d'aide à Lézignan-Corbières ?</h2>
            <p className="text-xl text-muted-foreground mb-8">Contactez-nous pour un accompagnement professionnel et humain</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick("lezignan_final_cta")}>
                <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 56 87 57 07
                </Button>
              </a>
              <Link to="/prix-nettoyage-diogene-herault" onClick={() => trackCTAClick("pricing", "Voir les tarifs", "/prix-nettoyage-diogene-herault")}>
                <Button size="lg" variant="outline">
                  Voir les tarifs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Liens vers autres villes */}
          <section className="mt-12 p-6 bg-card rounded-xl border border-border">
            <h3 className="text-lg font-bold text-card-foreground mb-4 text-center">Nous intervenons aussi dans l'Aude et l'Hérault</h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <Link to="/nettoyage-diogene-narbonne" className="px-3 py-1 bg-secondary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Narbonne
              </Link>
              <Link to="/nettoyage-diogene-carcassonne" className="px-3 py-1 bg-secondary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Carcassonne
              </Link>
              <Link to="/nettoyage-diogene-beziers" className="px-3 py-1 bg-secondary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Béziers
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

export default NettoyageDiogeneLezignan;
