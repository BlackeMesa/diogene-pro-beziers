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

const ZoneInterventionHerault = () => {
  useEffect(() => {
    trackServicePageView('Zone Intervention Hérault');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zone d'Intervention Nettoyage Diogène Hérault (34) | Toutes Villes</title>
        <meta name="description" content="Service de nettoyage Diogène dans tout l'Hérault : Béziers, Montpellier, Sète, Agde, Pézenas... Délai sous 48h. ☎️ 07 88 43 20 55" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNav items={[{ label: "Zone d'Intervention" }]} />

          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nettoyage Diogène dans tout l'Hérault (34)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nous intervenons dans l'ensemble du département de l'Hérault, 7 jours sur 7.
            </p>
          </section>

          <CityList />

          <section className="mt-16 bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Votre ville n'apparaît pas ?</h2>
            <p className="text-xl mb-8 opacity-95">Contactez-nous ! Nous couvrons tout l'Hérault</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('zone_final')}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/contact" onClick={() => trackCTAClick('devis', 'Devis Zone', '/contact')}>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Devis Gratuit
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

export default ZoneInterventionHerault;
