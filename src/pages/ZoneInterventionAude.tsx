import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CityList from "@/components/CityList";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

const ZoneInterventionAude = () => {
  useEffect(() => {
    trackServicePageView("Zone Intervention Aude");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zone d'Intervention Nettoyage Diogène Aude (11) | Toutes Villes</title>
        <meta name="description" content="Service de nettoyage Diogène dans l'Aude : Narbonne, Carcassonne, Lézignan-Corbières, Limoux... Délai 24-48h. ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lienproprete34.fr/zone-intervention-aude" />
        <meta property="og:url" content="https://lienproprete34.fr/zone-intervention-aude" />
        <meta property="og:title" content="Nettoyage Diogène Aude (11) - Toutes Villes | Lien Propreté 34" />
        <meta property="og:description" content="Intervention dans tout l'Aude pour nettoyage syndrome de Diogène. Équipe professionnelle, discrète et réactive. Devis gratuit." />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNav items={[{ label: "Zone d'Intervention Aude" }]} />

          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nettoyage Diogène dans l'Aude (11)</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">Basés à Béziers (34), nous intervenons dans l'ensemble du département de l'Aude.</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <span className="font-semibold">Délai d'intervention :</span> 24h pour Narbonne et communes proches, 48h pour le reste du département. Disponible 7J/7.
            </p>
          </section>

          <CityList department="aude" />

          <section className="mt-16 bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Votre ville n'apparaît pas ?</h2>
            <p className="text-xl mb-8 opacity-95">Contactez-nous ! Nous couvrons toute l'Aude (11)</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick("zone_aude_final")}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/contact" onClick={() => trackCTAClick("devis", "Devis Zone Aude", "/contact")}>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Devis gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ZoneInterventionAude;
