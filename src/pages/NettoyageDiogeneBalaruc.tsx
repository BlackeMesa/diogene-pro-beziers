import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import { FAQSection } from "@/components/FAQSection";
import balarucCity from "@/assets/balaruc-city.jpg";

const NettoyageDiogeneBalaruc = () => {
  const phoneNumber = "07 49 66 03 62";

  const faqItems = [
    {
      question: "Intervenez-vous dans les résidences thermales de Balaruc ?",
      answer: "Oui, nous intervenons dans tous les types d'habitations à Balaruc-les-Bains, y compris les résidences de curistes et les logements temporaires. Nous comprenons les enjeux spécifiques de cette commune thermale."
    },
    {
      question: "Quel est le délai d'intervention à Balaruc-les-Bains ?",
      answer: "Depuis Béziers, nous pouvons être à Balaruc en 40-45 minutes. Pour les interventions urgentes, nous organisons une mobilisation rapide, souvent dans la journée."
    },
    {
      question: "Travaillez-vous avec les établissements de santé locaux ?",
      answer: "Oui, nous collaborons avec les services sociaux et les établissements de soins de Balaruc-les-Bains. Nous comprenons que certaines situations nécessitent une coordination avec le secteur médico-social."
    },
    {
      question: "Combien coûte un nettoyage Diogène à Balaruc-les-Bains ?",
      answer: "Le coût varie selon la surface et le niveau d'encombrement. Pour un logement à Balaruc, comptez entre 2 000€ et 7 000€. Nous établissons un devis gratuit après évaluation sur place."
    },
    {
      question: "Gérez-vous les situations sensibles liées à l'isolement ?",
      answer: "Absolument. À Balaruc, nous sommes conscients que certaines personnes isolées ou âgées peuvent se trouver en situation de syndrome de Diogène. Nous intervenons avec empathie et discrétion, en lien avec les services compétents."
    }
  ];

  const neighborhoods = [
    "Centre thermal",
    "Les Thermes",
    "Port de Balaruc",
    "Avenue des Thermes",
    "Quartier des Horts",
    "Route de Sète",
    "Les Garrigues",
    "Bord de l'Étang"
  ];

  const nearbyCities = [
    "Balaruc-le-Vieux",
    "Frontignan",
    "Sète",
    "Gigean",
    "Poussan",
    "Montbazin",
    "Bouzigues"
  ];

  return (
    <>
      <Helmet>
        <title>Nettoyage Syndrome de Diogène à Balaruc-les-Bains (34540) | Intervention Bassin de Thau</title>
        <meta name="description" content="Service spécialisé de nettoyage syndrome de Diogène à Balaruc-les-Bains. Équipe discrète et professionnelle. Intervention rapide dans la station thermale. Devis gratuit." />
        <meta name="keywords" content="nettoyage diogène Balaruc, syndrome Diogène 34540, débarras insalubre Balaruc-les-Bains, nettoyage extrême station thermale" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-balaruc-les-bains" />
        
        <meta property="og:title" content="Nettoyage Syndrome de Diogène à Balaruc-les-Bains | Le Lien Propreté" />
        <meta property="og:description" content="Experts du nettoyage de syndrome de Diogène à Balaruc-les-Bains. Intervention discrète et professionnelle dans toute la commune." />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene-balaruc-les-bains" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Nettoyage Syndrome de Diogène",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Le Lien Propreté",
              "telephone": "07 49 66 03 62",
              "areaServed": {
                "@type": "City",
                "name": "Balaruc-les-Bains",
                "postalCode": "34540"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Balaruc-les-Bains",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Balaruc-les-Bains",
                "postalCode": "34540",
                "addressRegion": "Hérault",
                "addressCountry": "FR"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${balarucCity})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
            </div>
            
            <div className="container-custom relative z-10 text-center text-white px-4">
              <BreadcrumbNav 
                items={[
                  { label: "Accueil", path: "/" },
                  { label: "Zone d'intervention", path: "/zone-intervention-herault" },
                  { label: "Balaruc-les-Bains" }
                ]}
              />
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">
                Nettoyage Syndrome de Diogène<br />
                <span className="text-accent">à Balaruc-les-Bains (34540)</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/95 animate-fade-in-up animation-delay-200">
                Intervention rapide et discrète dans la station thermale
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-glow"
                  asChild
                >
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {phoneNumber}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/contact">Devis gratuit</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-8 bg-card">
            <TrustBadges />
          </section>

          {/* Quartiers Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Intervention dans tous les quartiers de Balaruc-les-Bains
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {neighborhoods.map((neighborhood, index) => (
                  <div 
                    key={index}
                    className="bg-card p-4 rounded-lg text-center shadow-soft hover:shadow-medium transition-all"
                  >
                    <p className="font-semibold text-card-foreground">{neighborhood}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Votre quartier n'est pas listé ? Nous intervenons dans toute la commune de Balaruc-les-Bains.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    Appelez-nous au {phoneNumber}
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Balaruc Specific Section */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Pourquoi choisir Le Lien Propreté à Balaruc-les-Bains ?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Compréhension du contexte thermal</h3>
                  <p className="text-muted-foreground">
                    Balaruc-les-Bains accueille de nombreux curistes et personnes en situation de fragilité. Nous intervenons avec une sensibilité particulière aux enjeux sociaux et sanitaires de cette commune.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Coordination avec le réseau local</h3>
                  <p className="text-muted-foreground">
                    Nous travaillons en étroite collaboration avec les services sociaux, le CCAS et les structures de soins de Balaruc pour assurer un accompagnement global et adapté à chaque situation.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Intervention respectueuse</h3>
                  <p className="text-muted-foreground">
                    Nous comprenons que le syndrome de Diogène touche souvent des personnes vulnérables. Notre approche est empathique, discrète et respectueuse de la dignité de chacun.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Nous intervenons aussi aux alentours de Balaruc-les-Bains
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {nearbyCities.map((city, index) => (
                  <div 
                    key={index}
                    className="bg-card p-4 rounded-lg text-center shadow-soft hover:shadow-medium transition-all"
                  >
                    <p className="text-card-foreground">{city}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <FAQSection items={faqItems} />
            </div>
          </section>

          {/* CTA Final */}
          <section className="section-padding bg-primary text-white">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'une intervention à Balaruc-les-Bains ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Notre équipe est à votre écoute pour une intervention rapide et discrète
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                  asChild
                >
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {phoneNumber}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
                  asChild
                >
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NettoyageDiogeneBalaruc;
