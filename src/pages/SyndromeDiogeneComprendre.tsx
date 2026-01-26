import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, HelpCircle, Phone, Users, AlertTriangle, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { trackServicePageView, trackCTAClick } from "@/lib/analytics";
import { useEffect } from "react";

const SyndromeDiogeneComprendre = () => {
  useEffect(() => {
    trackServicePageView("Article Syndrome Diogène Comprendre");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Syndrome de Diogène : Comprendre et Accompagner un Proche | Guide 2026</title>
        <meta name="description" content="Guide complet pour comprendre le syndrome de Diogène et accompagner un proche avec empathie. Signes, causes, solutions et démarches d'aide. ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lienproprete34.fr/syndrome-diogene-comprendre-accompagner" />
        <meta property="og:title" content="Syndrome de Diogène : Comprendre et Accompagner un Proche" />
        <meta property="og:description" content="Comment reconnaître le syndrome de Diogène et accompagner un proche en difficulté avec bienveillance et solutions concrètes." />
        <meta property="og:url" content="https://lienproprete34.fr/syndrome-diogene-comprendre-accompagner" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Syndrome de Diogène : Comprendre et Accompagner un Proche",
            description: "Guide complet pour comprendre le syndrome de Diogène, reconnaître les signes d'alerte et accompagner un proche en difficulté avec empathie et professionnalisme.",
            author: {
              "@type": "Organization",
              name: "Lien Propreté 34",
            },
            publisher: {
              "@type": "Organization",
              name: "Lien Propreté 34",
              logo: {
                "@type": "ImageObject",
                url: "https://lienproprete34.fr/logo-lienproprete.png",
              },
            },
            datePublished: "2026-01-26",
            dateModified: "2026-01-26",
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Syndrome de Diogène : Comprendre et Accompagner un Proche</h1>
              <p className="text-xl text-muted-foreground">Un guide bienveillant pour reconnaître les signes et apporter l'aide nécessaire sans jugement</p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Découvrir qu'un proche souffre du <strong>syndrome de Diogène</strong> est souvent bouleversant. Entre incompréhension, inquiétude et sentiment d'impuissance, les familles se retrouvent démunies face à
                cette situation complexe. Ce guide vous aide à <strong>comprendre ce trouble</strong>, à reconnaître les signes d'alerte et surtout à <strong>accompagner votre proche avec empathie</strong> vers les
                solutions adaptées.
              </p>
            </div>

            {/* Bandeau urgence */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-2">Situation d'urgence ?</h3>
                  <p className="text-red-800 mb-3">Si le logement présente un danger immédiat (insalubrité grave, infestation, risque sanitaire), nous intervenons sous 24-48h avec discrétion et empathie.</p>
                  <Button
                    onClick={() => {
                      trackCTAClick("Urgence - Article Comprendre Diogène");
                      window.location.href = "tel:+33788432055";
                    }}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler maintenant : 07 88 43 20 55
                  </Button>
                </div>
              </div>
            </div>

            {/* Table des matières */}
            <div className="bg-secondary rounded-xl p-6 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">📋 Sommaire</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  •{" "}
                  <a href="#definition" className="hover:text-primary hover:underline">
                    Qu'est-ce que le syndrome de Diogène ?
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#signes" className="hover:text-primary hover:underline">
                    Les signes d'alerte à reconnaître
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#causes" className="hover:text-primary hover:underline">
                    Comprendre les causes
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#accompagner" className="hover:text-primary hover:underline">
                    Comment accompagner un proche ?
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#solutions" className="hover:text-primary hover:underline">
                    Les solutions concrètes
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#temoignages" className="hover:text-primary hover:underline">
                    Témoignages de familles
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1 : Définition */}
            <section id="definition" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Qu'est-ce que le syndrome de Diogène ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>syndrome de Diogène</strong> est un trouble comportemental qui se manifeste par <strong>trois caractéristiques principales</strong> :
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-card rounded-xl p-5 shadow-medium">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">1. Accumulation compulsive d'objets</h3>
                  <p className="text-muted-foreground">Conservation excessive d'objets sans valeur apparente (journaux, emballages, déchets), remplissant progressivement tout l'espace de vie.</p>
                </div>

                <div className="bg-card rounded-xl p-5 shadow-medium">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">2. Négligence extrême de l'hygiène</h3>
                  <p className="text-muted-foreground">Abandon progressif de l'entretien du logement et de l'hygiène personnelle, menant à une insalubrité croissante.</p>
                </div>

                <div className="bg-card rounded-xl p-5 shadow-medium">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">3. Isolement social sévère</h3>
                  <p className="text-muted-foreground">Rupture des liens sociaux, refus des visites, déni du problème et opposition à toute aide extérieure.</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">À savoir</h3>
                    <p className="text-blue-800">
                      Le syndrome de Diogène n'est <strong>pas un choix de vie</strong>. C'est une pathologie complexe souvent liée à des troubles psychologiques (dépression, troubles cognitifs, traumatismes). La
                      personne concernée <strong>n'est pas responsable</strong> de son état et a besoin d'un accompagnement bienveillant.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 : Signes d'alerte */}
            <section id="signes" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Les signes d'alerte à reconnaître</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Repérer le syndrome de Diogène tôt permet d'intervenir avant que la situation ne devienne critique. Voici les <strong>signaux d'alarme</strong> les plus fréquents :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-lg font-bold text-card-foreground mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                    Signaux comportementaux
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Refus systématique des visites</li>
                    <li>• Négligence de l'apparence physique</li>
                    <li>• Isolement social progressif</li>
                    <li>• Déni de la situation</li>
                    <li>• Hostilité à l'idée de jeter quoi que ce soit</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-lg font-bold text-card-foreground mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    Signaux environnementaux
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Accumulation visible d'objets</li>
                    <li>• Odeurs nauséabondes persistantes</li>
                    <li>• Présence de nuisibles (rats, cafards)</li>
                    <li>• Absence de chauffage ou d'électricité</li>
                    <li>• Courrier non ouvert qui s'accumule</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-amber-900">
                  <strong>⚠️ Attention :</strong> Ces signes peuvent apparaître progressivement sur plusieurs mois ou années. Plus l'intervention est précoce, plus les chances de rétablissement sont importantes.
                </p>
              </div>
            </section>

            {/* Section 3 : Causes */}
            <section id="causes" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Comprendre les causes</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Le syndrome de Diogène n'apparaît pas sans raison. Plusieurs facteurs peuvent déclencher ou favoriser son développement :</p>

              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Facteurs psychologiques</h3>
                  <p className="text-muted-foreground">Dépression sévère, troubles anxieux, traumatismes non résolus, perte d'un être cher, troubles cognitifs liés à l'âge.</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Facteurs sociaux</h3>
                  <p className="text-muted-foreground">Isolement prolongé, rupture familiale, retraite brutale, veuvage, éloignement géographique des proches.</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Facteurs médicaux</h3>
                  <p className="text-muted-foreground">Début de démence, troubles neurologiques, addictions (alcool, médicaments), maladies chroniques invalidantes.</p>
                </div>
              </div>
            </section>

            {/* Section 4 : Comment accompagner */}
            <section id="accompagner" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Comment accompagner un proche ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'accompagnement d'une personne atteinte du syndrome de Diogène demande <strong>patience, empathie et stratégie</strong>. Voici les étapes à suivre :
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Maintenir le lien sans juger</h3>
                    <p className="text-muted-foreground">
                      Continuez à rendre visite régulièrement, même brièvement. Évitez les reproches ou critiques qui renforceront le déni. Montrez votre présence et votre soutien inconditionnel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Aborder le sujet avec douceur</h3>
                    <p className="text-muted-foreground">
                      Choisissez un moment calme. Exprimez vos inquiétudes en termes de santé et sécurité plutôt que de propreté. Exemple : "Je m'inquiète pour ta santé avec ces moisissures" plutôt que "C'est sale ici".
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Proposer de l'aide concrète</h3>
                    <p className="text-muted-foreground">
                      Ne proposez pas de "tout nettoyer" d'un coup, cela peut être perçu comme une agression. Commencez petit : "Et si on triait ensemble les vieux journaux ?" ou "Je peux t'aider à faire venir quelqu'un
                      ?".
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Faire appel à des professionnels</h3>
                    <p className="text-muted-foreground mb-3">Un médecin traitant, un psychologue, un assistant social ou une entreprise spécialisée peuvent intervenir avec l'expertise et la neutralité nécessaires.</p>
                    <Button
                      onClick={() => {
                        trackCTAClick("Contact - Article Accompagner");
                        window.location.href = "/contact";
                      }}
                      variant="outline"
                      className="mt-2"
                    >
                      Demander un accompagnement
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 : Solutions concrètes */}
            <section id="solutions" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Les solutions concrètes</h2>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Notre approche bienveillante</h3>
                <p className="text-muted-foreground mb-6">
                  Chez Lien Propreté 34, nous accompagnons les familles confrontées au syndrome de Diogène depuis plus de 15 ans. Notre protocole certifié QUALIPROPRE 10403 associe{" "}
                  <strong>expertise technique et humanité</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-5">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-card-foreground mb-2">Discrétion absolue</h4>
                    <p className="text-sm text-muted-foreground">Véhicules banalisés, intervention respectueuse des voisins, confidentialité totale</p>
                  </div>

                  <div className="bg-white rounded-lg p-5">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-card-foreground mb-2">Accompagnement empathique</h4>
                    <p className="text-sm text-muted-foreground">Écoute bienveillante, sans jugement, respect du rythme de la personne</p>
                  </div>

                  <div className="bg-white rounded-lg p-5">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-card-foreground mb-2">Tri respectueux</h4>
                    <p className="text-sm text-muted-foreground">Conservation des souvenirs, papiers importants, objets de valeur sentimentale</p>
                  </div>

                  <div className="bg-white rounded-lg p-5">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-card-foreground mb-2">Réactivité 24-48h</h4>
                    <p className="text-sm text-muted-foreground">Intervention rapide en cas d'urgence, disponibles 7J/7</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link to="/contact">
                  <Button size="lg" onClick={() => trackCTAClick("CTA Principal - Article Accompagner")} className="text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Nous contacter : 07 88 43 20 55
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-3">Devis gratuit sous 12h • Intervention 24-48h • Disponible 7J/7</p>
              </div>
            </section>

            {/* Section 6 : Témoignages */}
            <section id="temoignages" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Témoignages de familles</h2>

              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-medium border-l-4 border-primary">
                  <p className="text-muted-foreground italic mb-4">
                    "Ma mère refusait toute aide depuis des années. L'équipe de Lien Propreté a su trouver les mots justes, sans la brusquer. Ils ont travaillé avec elle pour trier, pas contre elle. Aujourd'hui elle
                    accepte une aide à domicile."
                  </p>
                  <p className="text-sm font-semibold text-primary">— Sophie, Béziers</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium border-l-4 border-primary">
                  <p className="text-muted-foreground italic mb-4">
                    "J'avais honte de la situation de mon père. L'équipe a été d'une discrétion exemplaire, les voisins n'ont rien remarqué. Et surtout, ils n'ont jamais porté de jugement, juste de l'empathie."
                  </p>
                  <p className="text-sm font-semibold text-primary">— Marc, Montpellier</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium border-l-4 border-primary">
                  <p className="text-muted-foreground italic mb-4">
                    "Ils ont retrouvé des photos de famille que nous pensions perdues. Le tri a été fait avec un respect incroyable. Mon oncle a même accepté de les voir revenir pour un suivi."
                  </p>
                  <p className="text-sm font-semibold text-primary">— Famille L., Sète</p>
                </div>
              </div>
            </section>

            {/* CTA Final */}
            <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Vous n'êtes pas seul(e)</h2>
              <p className="text-lg mb-6 opacity-95">Nous accompagnons chaque jour des familles dans votre situation. Un premier échange téléphonique est gratuit et sans engagement.</p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  trackCTAClick("CTA Final - Article Accompagner");
                  window.location.href = "tel:+33788432055";
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Parler à un conseiller : 07 88 43 20 55
              </Button>
            </div>

            {/* Liens vers autres services */}
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Nos services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/nettoyage-diogene" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Nettoyage Diogène</h4>
                  <p className="text-sm text-muted-foreground">Protocole certifié QUALIPROPRE 10403</p>
                </Link>
                <Link to="/prix-nettoyage-diogene-guide-2026" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Guide des Prix</h4>
                  <p className="text-sm text-muted-foreground">Grille tarifaire complète 2026</p>
                </Link>
                <Link to="/aides-financieres-nettoyage-diogene" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Aides Financières</h4>
                  <p className="text-sm text-muted-foreground">APA, PCH, CCAS, Action Logement</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SyndromeDiogeneComprendre;
