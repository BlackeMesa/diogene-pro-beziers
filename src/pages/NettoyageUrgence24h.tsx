import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, AlertCircle, Clock, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import UrgencyBanner from "@/components/UrgencyBanner";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

const NettoyageUrgence24h = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Urgence 24h');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nettoyage Urgence 24h Hérault | Intervention Rapide Diogène (34)</title>
        <meta name="description" content="Besoin d'un nettoyage en urgence dans l'Hérault ? Intervention sous 24h, 7j/7. Décès, expulsion, urgence sanitaire. ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-urgence-24h-herault" />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-urgence-24h-herault" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNav items={[{ label: "Urgence 24h" }]} />

          <section className="mb-12">
            <UrgencyBanner />
          </section>

          <section className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Besoin d'un nettoyage en urgence ?<br />On intervient en 24h
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Disponible 7j/7, même les week-ends et jours fériés, pour les situations qui ne peuvent pas attendre.
            </p>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Situations d'urgence gérées</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Décès dans le logement",
                "Expulsion imminente",
                "Visite des services sociaux prévue",
                "Vente immobilière urgente",
                "Retour d'hospitalisation",
                "Infestation grave (insectes/rongeurs)"
              ].map((situation, i) => (
                <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-medium">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-card-foreground font-medium">{situation}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Notre protocole d'urgence</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Phone, title: "Appel", desc: "Évaluation téléphonique en 15 min" },
                { icon: Clock, title: "Devis Express", desc: "Tarif communiqué par téléphone" },
                { icon: AlertCircle, title: "Intervention", desc: "Sous 24h maximum" },
                { icon: CheckCircle, title: "Disponible", desc: "7j/7 même férié" }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-card-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chaque minute compte</h2>
            <p className="text-xl mb-8 opacity-95">Appelez-nous maintenant pour une intervention rapide</p>
            <a href="tel:+33788432055" onClick={() => trackPhoneClick('urgence_final')}>
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-xl px-12 py-8">
                <Phone className="mr-2 w-6 h-6" />
                07 88 43 20 55 - URGENCE
              </Button>
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NettoyageUrgence24h;
