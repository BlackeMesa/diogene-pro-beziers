import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Shield, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import empathyImage from "@/assets/empathy-support.jpg";
import professionalImage from "@/assets/professional-protocol.jpg";
import partnershipImage from "@/assets/professional-partnership.jpg";

const About = () => {
  const phoneNumber = "07 49 66 03 62";

  const values = [
    {
      icon: Heart,
      title: "Empathie & Respect",
      description: "Nous comprenons que chaque situation est unique et délicate. Notre approche est basée sur l'écoute, le non-jugement et le respect absolu de la dignité de chacun."
    },
    {
      icon: Shield,
      title: "Discrétion Totale",
      description: "Confidentialité garantie à chaque étape. Nos véhicules sont banalisés, nos interventions discrètes, et vos données sont traitées en toute confidentialité."
    },
    {
      icon: Award,
      title: "Professionnalisme",
      description: "Protocole certifié QUALIPROPRE 10403. Notre équipe est formée aux techniques spécifiques du nettoyage post-syndrome de Diogène et débarras insalubre."
    },
    {
      icon: Users,
      title: "Accompagnement Global",
      description: "Nous travaillons en collaboration avec les services sociaux, les familles et les professionnels de santé pour un accompagnement complet et adapté."
    }
  ];

  const whyChooseUs = [
    "Plus de 15 ans d'expérience dans le nettoyage extrême",
    "Équipe formée et sensibilisée aux situations complexes",
    "Intervention rapide : disponible sous 24-48h",
    "Tarification transparente et devis gratuit sous 12h",
    "Matériel professionnel et produits adaptés",
    "Assurance responsabilité civile professionnelle",
    "Présence locale dans tout l'Hérault (34)",
    "Service 7J/7 pour les situations d'urgence"
  ];

  return (
    <>
      <Helmet>
        <title>À Propos - Le Lien Propreté 34 | Experts Nettoyage Diogène Hérault</title>
        <meta name="description" content="Découvrez Le Lien Propreté 34, votre expert en nettoyage syndrome de Diogène dans l'Hérault. Équipe professionnelle, empathique et discrète depuis plus de 15 ans." />
        <meta name="keywords" content="à propos, entreprise nettoyage diogène, expert débarras insalubre Hérault, équipe professionnelle Béziers" />
        <link rel="canonical" href="https://lelienproprete34.com/a-propos" />
        
        <meta property="og:title" content="À Propos - Le Lien Propreté 34 | Experts Nettoyage Diogène" />
        <meta property="og:description" content="Une équipe professionnelle et empathique à votre service dans l'Hérault pour le nettoyage de syndrome de Diogène et débarras insalubre." />
        <meta property="og:url" content="https://lelienproprete34.com/a-propos" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">
                  À Propos de <span className="text-accent">Le Lien Propreté 34</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/95 animate-fade-in-up animation-delay-200">
                  Plus qu'une entreprise de nettoyage, un partenaire humain pour vous accompagner dans les moments difficiles
                </p>
              </div>
            </div>
          </section>

          {/* Notre Histoire */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="section-title mb-6">Notre Histoire</h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      <strong className="text-card-foreground">Le Lien Propreté 34</strong> est né d'une conviction profonde : 
                      le nettoyage de logements insalubres ne peut se faire sans empathie et respect des personnes.
                    </p>
                    <p>
                      Fort de <strong className="text-card-foreground">plus de 15 ans d'expérience</strong> dans le nettoyage 
                      extrême et le débarras, nous avons développé une expertise unique dans l'accompagnement des personnes 
                      souffrant du syndrome de Diogène et de leurs familles.
                    </p>
                    <p>
                      Basés à <strong className="text-card-foreground">Béziers</strong>, nous intervenons dans tout le 
                      département de l'Hérault avec la même exigence de qualité et de discrétion. Notre approche combine 
                      professionnalisme technique et sensibilité humaine.
                    </p>
                    <p>
                      Nous travaillons en étroite collaboration avec les services sociaux, les CCAS, les assistantes sociales 
                      et les professionnels de santé pour offrir un accompagnement global et respectueux.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={empathyImage} 
                    alt="Équipe empathique Le Lien Propreté 34" 
                    className="rounded-2xl shadow-strong"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Nos Valeurs */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">Nos Valeurs Fondamentales</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-card-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Notre Expertise */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                  <img 
                    src={professionalImage} 
                    alt="Protocole professionnel certifié" 
                    className="rounded-2xl shadow-strong"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="section-title mb-6">Notre Expertise Reconnue</h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Notre équipe est formée aux <strong className="text-card-foreground">techniques spécifiques</strong> 
                      du nettoyage post-syndrome de Diogène, avec une certification <strong className="text-card-foreground">QUALIPROPRE 10403</strong>.
                    </p>
                    <p>
                      Nous utilisons du matériel professionnel adapté et des produits spécifiques pour traiter :
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                        <span>Les situations d'encombrement extrême</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                        <span>Les contaminations bactériologiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                        <span>Les odeurs tenaces et l'insalubrité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                        <span>La désinfection complète des logements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi Nous Choisir */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="section-title mb-6">Pourquoi Nous Choisir ?</h2>
                  <div className="space-y-3">
                    {whyChooseUs.map((reason, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={partnershipImage} 
                    alt="Partenariat professionnel" 
                    className="rounded-2xl shadow-strong"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Zone d'intervention */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="section-title text-center mb-6">Notre Zone d'Intervention</h2>
              <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Basés à Béziers, nous intervenons rapidement dans tout l'Hérault (34)
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {["Béziers", "Montpellier", "Sète", "Agde", "Lunel", "Frontignan", "Pézenas", "Mèze", "Marseillan", "Balaruc-les-Bains", "Pézenas", "Et toute l'Hérault"].map((city, index) => (
                  <div 
                    key={index}
                    className="bg-card p-3 rounded-lg text-center shadow-soft hover:shadow-medium transition-all"
                  >
                    <p className="font-semibold text-card-foreground">{city}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link to="/zone-intervention-herault">
                  <Button variant="outline" size="lg">
                    Voir toutes nos zones d'intervention
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="section-padding bg-primary text-white">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Une Question ? Besoin d'Aide ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Notre équipe est à votre écoute pour répondre à vos questions et vous proposer une solution adaptée
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
                  <Link to="/contact">Demander un devis gratuit</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default About;
