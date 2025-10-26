import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import TrustBadges from "@/components/TrustBadges";
import CostEstimator from "@/components/CostEstimator";
import { SimulatorHighlight } from "@/components/SimulatorHighlight";
import cleanResult from "@/assets/clean-result.jpg";
import heraultMap from "@/assets/herault-service-area.jpg";

const Index = () => {
  const services = [
    {
      title: "Nettoyage Syndrome de Diogène",
      description: "Un accompagnement humain avant tout. Nous vous aidons à retrouver un espace de vie sain avec respect et discrétion. Protocole certifié QUALIPROPRE 10403.",
      link: "/nettoyage-diogene",
      features: [
        "Accompagnement sans jugement",
        "Protocole certifié et respectueux",
        "Désinfection complète du logement",
        "Soutien aux familles à chaque étape"
      ]
    },
    {
      title: "Débarras de Logement Insalubre",
      description: "Nous redonnons vie à votre bien avec un service de débarras transparent. Tarif au m³ optimisé, avec possibilité de valorisation pour réduire vos coûts.",
      link: "/debarras-insalubre",
      features: [
        "Tarification claire et honnête",
        "Valorisation d'objets possible",
        "Intervention rapide et discrète",
        "Disponible 7J/7 dans l'Hérault"
      ]
    }
  ];

  const zones = [
    "Béziers", "Agde", "Pézenas", "Sérignan", "Valras-Plage", 
    "Bédarieux", "Capestang", "Marseillan", "Vias", "Et tout l'Hérault (34)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95 z-0" />
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 object-cover"
            onEnded={(e) => {
              const video = e.currentTarget;
              video.currentTime = video.duration - 0.1;
              video.pause();
            }}
          >
            <source src="/videos/debarras-diogene.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Le Lien Propreté 34 - Votre Partenaire de Confiance
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-95 leading-relaxed">
              Accompagnement Humain & Nettoyage Extrême dans l'Hérault
            </p>
            <p className="text-lg mb-8 opacity-90 font-semibold">
              Devis Garanti sous 12 heures - Discrétion absolue
            </p>
            
            {/* Primary CTA - Estimateur */}
            <div className="mb-6">
              <a href="#simulator">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-xl px-12 py-8 shadow-strong hover:scale-105 transition-transform"
                >
                  🎯 Estimez Votre Projet Gratuitement
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </a>
              <p className="text-sm mt-3 opacity-90 font-medium">
                ⚡ Résultat immédiat en 30 secondes
              </p>
            </div>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6"
                >
                  Parlons de Votre Situation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+33788432055">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Accompagnement humain</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Discrétion absolue</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Cost Estimator Section - MOVED UP */}
      <section id="simulator" className="py-20 bg-gradient-to-br from-secondary via-background to-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <SimulatorHighlight>
            <CostEstimator />
          </SimulatorHighlight>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nos Services dans l'Hérault
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Le Lien Propreté 34 vous accompagne avec humanité dans les situations de nettoyage extrême. Parce qu'un nouveau départ mérite respect et professionnalisme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link}>
                    <Button 
                      className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold"
                    >
                      Découvrir ce service
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-trust/10 rounded-full mb-6">
                  <MapPin className="w-8 h-8 text-trust" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Votre Partenaire Local dans l'Hérault
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nous intervenons à Béziers et dans tout le département (34), 7 jours sur 7. Proximité et réactivité pour vous accompagner quand vous en avez besoin.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {zones.map((zone, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-card rounded-full text-sm font-medium text-card-foreground shadow-soft"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92589.14892346982!2d3.1582677!3d43.344687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1ab5dc0a7e645%3A0x405d44d6f4e97e0!2sB%C3%A9ziers!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl shadow-strong"
                  title="Carte de la zone d'intervention à Béziers et l'Hérault"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Le Lien : Notre Engagement Humain et Professionnel
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nous créons un lien de confiance avec vous. Au-delà du nettoyage extrême et de la désinfection, 
                  nous vous accompagnons avec respect vers un nouveau départ. Notre protocole certifié QUALIPROPRE 10403 
                  garantit un résultat impeccable, sans jamais oublier l'humain derrière chaque situation.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-card-foreground block">Protocole Certifié QUALIPROPRE</span>
                      <span className="text-sm text-muted-foreground">Nettoyage et désinfection conformes aux normes 10403</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-card-foreground block">Expertise Technique</span>
                      <span className="text-sm text-muted-foreground">Équipement professionnel pour les situations les plus difficiles</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-card-foreground block">Accompagnement Humain</span>
                      <span className="text-sm text-muted-foreground">Soutien et écoute à chaque étape, sans jugement</span>
                    </div>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold">
                    Parlons de Votre Projet
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={cleanResult}
                  alt="Résultat après nettoyage professionnel"
                  className="rounded-2xl shadow-strong w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-strong">
                  <div className="text-3xl font-bold">Le Lien</div>
                  <div className="text-sm font-medium">Confiance & Respect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous Avez Besoin d'Aide ?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Nous sommes là pour vous accompagner avec humanité et professionnalisme, 7 jours sur 7
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-8 py-6 shadow-strong"
              >
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+33788432055">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6"
              >
                <Phone className="mr-2 w-5 h-5" />
                07 88 43 20 55
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
