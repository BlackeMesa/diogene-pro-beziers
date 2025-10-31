import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { trackServicePageView, trackPhoneClick, trackCTAClick } from "@/lib/analytics";

const FAQ = () => {
  useEffect(() => {
    trackServicePageView('FAQ Complète');
  }, []);

  const generalFAQs = [
    {
      question: "Qu'est-ce que le syndrome de Diogène ?",
      answer: "Le syndrome de Diogène est un trouble comportemental qui se caractérise par une accumulation compulsive d'objets, une négligence extrême de l'hygiène personnelle et du logement, et un isolement social progressif. Il touche principalement les personnes âgées mais peut concerner toute personne en situation de détresse psychologique."
    },
    {
      question: "Comment reconnaître les signes du syndrome de Diogène ?",
      answer: "Les signes incluent : accumulation massive d'objets (y compris déchets), négligence de l'hygiène, refus d'aide extérieure, isolement social, logement insalubre avec odeurs nauséabondes, présence de nuisibles, négligence de soi-même. Si vous observez plusieurs de ces signes chez un proche, il est important d'agir avec bienveillance."
    },
    {
      question: "Intervenez-vous dans toute l'Hérault ?",
      answer: "Oui, nous couvrons l'intégralité du département de l'Hérault : Montpellier, Béziers, Sète, Agde, Lunel, Frontignan, Mauguio, Lattes, Castelnau-le-Lez, et toutes les communes du département. Nos délais d'intervention sont de 24-48h maximum partout dans l'Hérault."
    },
    {
      question: "Êtes-vous disponibles en urgence ?",
      answer: "Oui, nous proposons un service d'urgence 24h/24 et 7j/7. En cas de situation critique (décès, mise en danger, expulsion imminente), nous pouvons intervenir dans les 24h suivant votre appel. Contactez-nous au 07 88 43 20 55."
    },
    {
      question: "L'intervention est-elle vraiment confidentielle ?",
      answer: "Absolument. La confidentialité est notre priorité. Nous utilisons des véhicules banalisés sans logo si vous le souhaitez, nos équipes sont formées à la discrétion, et nous signons un accord de confidentialité. Votre situation et votre identité restent strictement confidentielles."
    }
  ];

  const serviceFAQs = [
    {
      question: "Comment se déroule une intervention ?",
      answer: "1) Prise de contact et évaluation gratuite sur place. 2) Devis détaillé sous 12h. 3) Planification de l'intervention selon vos disponibilités. 4) Débarras, tri et protection des objets de valeur. 5) Nettoyage et désinfection approfondie. 6) Traitement anti-nuisibles si nécessaire. 7) État des lieux final et remise du logement propre."
    },
    {
      question: "Dois-je être présent pendant l'intervention ?",
      answer: "Non, ce n'est pas obligatoire. Beaucoup de nos clients préfèrent nous confier les clés et découvrir le résultat une fois terminé. D'autres souhaitent être présents pour superviser ou participer au tri. Nous nous adaptons totalement à votre préférence."
    },
    {
      question: "Que faites-vous des objets et déchets évacués ?",
      answer: "Nous trions systématiquement : les objets de valeur sont mis de côté, les objets réutilisables sont donnés à des associations caritatives, les déchets sont évacués vers les centres de traitement agréés. Nous vous fournissons les bordereaux de suivi des déchets (BSD) obligatoires."
    },
    {
      question: "Gérez-vous les nuisibles (rats, cafards, punaises) ?",
      answer: "Oui, nous effectuons un traitement anti-nuisibles complet si nécessaire : dératisation, désinsectisation, traitement des punaises de lit. Nous utilisons des produits professionnels certifiés et sûrs. Le traitement est inclus dans nos interventions complètes."
    },
    {
      question: "Combien de temps dure une intervention ?",
      answer: "Cela dépend de la surface et du niveau d'encombrement : Studio/T1 : 1-2 jours. T2/T3 : 2-4 jours. T4+ ou maison : 3-7 jours. Nous vous donnons une estimation précise lors de l'évaluation gratuite sur place."
    },
    {
      question: "Puis-je conserver certains objets ?",
      answer: "Absolument. Nous trions avec vous ou selon vos consignes précises. Les objets de valeur, papiers administratifs, souvenirs et effets personnels sont systématiquement mis de côté et protégés. Vous décidez de tout ce qui doit être conservé."
    },
    {
      question: "Nettoyez-vous aussi les extérieurs (jardin, garage, cave) ?",
      answer: "Oui, nous intervenons sur toutes les dépendances : jardins encombrés, garages, caves, greniers, balcons. Nous évacuons tout type d'encombrement extérieur et pouvons aussi traiter la végétation envahissante."
    }
  ];

  const pricingFAQs = [
    {
      question: "Le devis est-il gratuit et sans engagement ?",
      answer: "Oui, totalement. L'évaluation sur place et le devis détaillé sont 100% gratuits et sans aucun engagement. Nous nous déplaçons partout dans l'Hérault pour évaluer votre projet. Vous recevez le devis sous 12h maximum après la visite."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon la surface, le niveau d'encombrement et les prestations. Fourchette indicative : Studio/T1 : 800-2500€. T2/T3 : 2000-5000€. T4+ : 4000-10000€. Le devis personnalisé gratuit vous donnera le prix exact de votre projet."
    },
    {
      question: "Y a-t-il des frais cachés ou suppléments ?",
      answer: "Non, aucun. Notre devis détaille l'intégralité des coûts : débarras, tri, nettoyage, désinfection, traitement nuisibles, évacuation, déplacement. Le prix indiqué est le prix final, sans surprise."
    },
    {
      question: "Puis-je payer en plusieurs fois ?",
      answer: "Oui, nous proposons des facilités de paiement échelonné adaptées à votre situation financière. Nous acceptons aussi les paiements par chèque, virement, espèces. Parlons-en lors du devis pour trouver une solution qui vous convient."
    },
    {
      question: "Existe-t-il des aides financières ?",
      answer: "Oui, plusieurs aides peuvent financer tout ou partie de l'intervention : APA (Allocation Personnalisée d'Autonomie), PCH (Prestation de Compensation du Handicap), aides des caisses de retraite, Action Logement, fonds d'aide départementaux. Nous pouvons vous orienter et vous aider dans vos démarches."
    },
    {
      question: "Acceptez-vous les paiements par assurance ou succession ?",
      answer: "Oui, nous travaillons régulièrement avec des assurances, notaires et gestionnaires de succession. Nous fournissons tous les justificatifs nécessaires et pouvons facturer directement l'organisme payeur selon les cas."
    }
  ];

  const psychologicalFAQs = [
    {
      question: "Comment aborder le sujet avec la personne concernée ?",
      answer: "Approchez avec bienveillance et sans jugement. Évitez les mots 'sale', 'dégoûtant'. Proposez votre aide concrète plutôt que de critiquer. Exemple : 'Je vois que tu as du mal en ce moment, je peux t'aider à ranger ?' plutôt que 'C'est une décharge ici'. Proposez un accompagnement professionnel si la personne est réceptive."
    },
    {
      question: "Travaillez-vous avec des psychologues ou travailleurs sociaux ?",
      answer: "Nous collaborons avec des professionnels de santé et du secteur social. Nous pouvons coordonner l'intervention avec un suivi psychologique, une assistante sociale, un tuteur. Notre approche est globale et humaine."
    },
    {
      question: "La personne refuse toute aide, que faire ?",
      answer: "Le refus est fréquent dans le syndrome de Diogène. Options : solliciter un proche ou professionnel de confiance pour médiation, contacter les services sociaux de votre commune, en cas de danger immédiat (sanitaire, sécurité), contacter le maire qui peut engager une procédure. Nous pouvons vous orienter vers les bons interlocuteurs."
    },
    {
      question: "Faut-il un accord médical ou légal pour intervenir ?",
      answer: "Si la personne est consentante : aucune formalité. Si la personne refuse mais il y a danger : une décision de justice ou l'intervention des services sociaux peut être nécessaire. Si la personne est sous tutelle/curatelle : accord du tuteur/curateur requis. Nous vous conseillons selon votre situation."
    }
  ];

  const technicalFAQs = [
    {
      question: "Quels équipements et protections utilisez-vous ?",
      answer: "Nos équipes utilisent des EPI complets : combinaisons jetables, masques FFP3, gants renforcés, sur-chaussures. Nous utilisons du matériel professionnel : aspirateurs HEPA, nettoyeurs haute pression, désinfectants professionnels certifiés. Tout notre matériel est aux normes sanitaires."
    },
    {
      question: "Êtes-vous assurés ?",
      answer: "Oui, nous sommes couverts par une assurance responsabilité civile professionnelle et décennale. Nous vous fournissons une attestation d'assurance à jour avant chaque intervention. Vos biens et votre logement sont protégés."
    },
    {
      question: "Avez-vous des certifications ?",
      answer: "Nous sommes certifiés et formés pour les interventions en milieux insalubres. Nos techniciens suivent des formations continues sur les protocoles sanitaires, la gestion des déchets dangereux, et l'approche psychologique des situations de syndrome de Diogène."
    },
    {
      question: "Que faire si des dégâts sont découverts (moisissures, canalisations) ?",
      answer: "Nous effectuons un état des lieux détaillé avant/après. Si nous découvrons des dégâts structurels, nous vous alertons immédiatement. Nous pouvons vous orienter vers des entreprises partenaires (plombier, électricien, traitement humidité) pour les réparations complémentaires."
    },
    {
      question: "Traitez-vous les odeurs tenaces ?",
      answer: "Oui, nous utilisons un protocole complet d'élimination des odeurs : nettoyage en profondeur avec détergents enzymatiques, désinfection, traitement par nébulisation d'agents neutralisants, et si nécessaire, traitement par ozone ou générateur d'hydroxyle. Les odeurs sont éliminées définitivement."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Questions fréquentes sur le nettoyage Diogène | Le Lien Propreté 34</title>
        <meta name="description" content="Toutes vos questions sur le nettoyage syndrome de Diogène dans l'Hérault : tarifs, déroulement, confidentialité, aides financières. Réponses d'experts." />
        <link rel="canonical" href="https://lelienproprete34.com/faq" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <BreadcrumbNav 
            items={[
              { label: 'FAQ' }
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Questions fréquentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Toutes les réponses à vos questions sur nos services de nettoyage syndrome de Diogène 
              et débarras insalubre dans l'Hérault
            </p>
          </section>

          <FAQSection 
            items={generalFAQs} 
            title="Questions générales" 
            showSchema={true}
          />

          <FAQSection 
            items={serviceFAQs} 
            title="Déroulement des interventions" 
            showSchema={false}
          />

          <FAQSection 
            items={pricingFAQs} 
            title="Tarifs et paiement" 
            showSchema={false}
          />

          <FAQSection 
            items={psychologicalFAQs} 
            title="Aspect psychologique et humain" 
            showSchema={false}
          />

          <FAQSection 
            items={technicalFAQs} 
            title="Aspects techniques" 
            showSchema={false}
          />

          {/* CTA Final */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Contactez-nous pour une réponse personnalisée sous 2h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('faq_final_cta')}>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis FAQ', '/contact')}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;
