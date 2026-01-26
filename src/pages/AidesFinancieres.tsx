import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, HandCoins, Phone, FileCheck, Heart, CheckCircle, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { trackServicePageView, trackCTAClick } from "@/lib/analytics";
import { useEffect } from "react";

const AidesFinancieres = () => {
  useEffect(() => {
    trackServicePageView("Article Aides Financières");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Aides Financières Nettoyage Diogène 2026 : APA, PCH, CCAS (Hérault)</title>
        <meta name="description" content="Guide complet des aides financières pour le nettoyage Diogène : APA, PCH, CCAS, Action Logement, assurances. Comment les obtenir dans l'Hérault. ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lienproprete34.fr/aides-financieres-nettoyage-diogene" />
        <meta property="og:title" content="Aides Financières Nettoyage Diogène 2026 : Guide Complet" />
        <meta property="og:description" content="Toutes les aides financières disponibles pour financer le nettoyage d'un logement Diogène : montants, conditions, démarches." />
        <meta property="og:url" content="https://lienproprete34.fr/aides-financieres-nettoyage-diogene" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aides Financières pour le Nettoyage Diogène 2026",
            description: "Guide pratique des aides financières disponibles pour financer le nettoyage d'un logement touché par le syndrome de Diogène : APA, PCH, CCAS, Action Logement, caisses de retraite, assurances.",
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
                <HandCoins className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Aides Financières pour le Nettoyage Diogène 2026</h1>
              <p className="text-xl text-muted-foreground">Guide complet des aides disponibles pour financer le nettoyage d'un logement insalubre dans l'Hérault</p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le coût d'un nettoyage Diogène peut représenter un investissement conséquent. Heureusement, <strong>plusieurs aides financières existent</strong> pour vous accompagner. Ce guide vous présente toutes les
                options disponibles en 2026, les conditions d'éligibilité et les démarches à suivre pour <strong>alléger significativement la facture</strong>.
              </p>
            </div>

            {/* Bandeau info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Besoin d'aide pour vos démarches ?</h3>
                  <p className="text-blue-800 mb-3">Nous vous accompagnons dans la constitution de vos dossiers d'aide et fournissons tous les justificatifs nécessaires (devis, factures détaillées).</p>
                  <Button
                    onClick={() => {
                      trackCTAClick("Contact Aides - Article Aides Financières");
                      window.location.href = "tel:+33788432055";
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Être accompagné : 07 88 43 20 55
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
                  <a href="#apa" className="hover:text-primary hover:underline">
                    APA - Allocation Personnalisée d'Autonomie
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#pch" className="hover:text-primary hover:underline">
                    PCH - Prestation de Compensation du Handicap
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#ccas" className="hover:text-primary hover:underline">
                    Aide Sociale du CCAS
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#retraite" className="hover:text-primary hover:underline">
                    Caisses de Retraite
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#action-logement" className="hover:text-primary hover:underline">
                    Action Logement
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#assurances" className="hover:text-primary hover:underline">
                    Assurances
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#succession" className="hover:text-primary hover:underline">
                    Prise en charge Succession
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#demarches" className="hover:text-primary hover:underline">
                    Comment constituer votre dossier
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1 : APA */}
            <section id="apa" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">APA - Allocation Personnalisée d'Autonomie</h2>

              <div className="bg-card rounded-xl p-6 shadow-medium mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Qu'est-ce que l'APA ?</h3>
                    <p className="text-muted-foreground mb-4">
                      L'APA est une aide destinée aux <strong>personnes âgées de 60 ans et plus</strong> en perte d'autonomie (GIR 1 à 4). Elle finance les dépenses nécessaires pour rester à domicile, dont le{" "}
                      <strong>nettoyage et l'aménagement du logement</strong>.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Montant de l'aide</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • <strong>GIR 1 :</strong> jusqu'à 1 955,04 €/mois
                      </li>
                      <li>
                        • <strong>GIR 2 :</strong> jusqu'à 1 584,98 €/mois
                      </li>
                      <li>
                        • <strong>GIR 3 :</strong> jusqu'à 1 143,99 €/mois
                      </li>
                      <li>
                        • <strong>GIR 4 :</strong> jusqu'à 763,32 €/mois
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-green-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Conditions d'éligibilité
                  </h3>
                  <ul className="space-y-1 text-green-800">
                    <li>• Avoir 60 ans ou plus</li>
                    <li>• Être en perte d'autonomie (évaluation GIR par une équipe médico-sociale)</li>
                    <li>• Résider en France de manière stable et régulière</li>
                    <li>• Aucune condition de ressources (mais participation progressive selon revenus)</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-5 shadow-medium">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">Comment en bénéficier pour un nettoyage Diogène ?</h3>
                  <p className="text-muted-foreground mb-3">
                    Le nettoyage du logement peut être intégré au <strong>plan d'aide personnalisé</strong> établi par l'équipe médico-sociale. Il est considéré comme une aide au maintien à domicile, nécessaire pour
                    garantir un environnement sain et sécurisé.
                  </p>
                  <p className="text-sm text-muted-foreground italic">💡 Notre devis détaillé peut être joint au dossier pour justifier le besoin et le montant de la prestation.</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Où demander l'APA ?</h3>
                <p className="text-blue-800">
                  Auprès du <strong>Conseil Départemental de l'Hérault</strong> ou du <strong>CCAS</strong> de votre commune (Béziers, Montpellier, Sète, Agde...). Délai de traitement : environ 2 mois.
                </p>
              </div>
            </section>

            {/* Section 2 : PCH */}
            <section id="pch" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">PCH - Prestation de Compensation du Handicap</h2>

              <div className="bg-card rounded-xl p-6 shadow-medium mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Qu'est-ce que la PCH ?</h3>
                    <p className="text-muted-foreground mb-4">
                      La PCH est une aide destinée aux <strong>personnes en situation de handicap</strong> (physique, mental, psychique, cognitif). Elle finance les besoins liés au handicap, dont l'
                      <strong>aménagement et le nettoyage du logement</strong>.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Montant de l'aide</h3>
                    <p className="text-muted-foreground mb-2">
                      Prise en charge jusqu'à <strong>80% ou 100%</strong> des dépenses selon les ressources, dans la limite de :
                    </p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>
                        • <strong>Aménagement du logement :</strong> jusqu'à 10 000 € sur 10 ans
                      </li>
                      <li>
                        • <strong>Aide humaine :</strong> variable selon besoins
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-green-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Conditions d'éligibilité
                  </h3>
                  <ul className="space-y-1 text-green-800">
                    <li>• Avoir moins de 60 ans (ou entre 60-75 ans si handicap reconnu avant 60 ans)</li>
                    <li>• Résider en France de manière stable et régulière</li>
                    <li>• Présenter une difficulté absolue ou grave et durable pour au moins une activité essentielle</li>
                    <li>• Avoir un taux d'incapacité ≥ 80% (ou entre 50-79% avec difficultés importantes)</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-5 shadow-medium">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">Comment en bénéficier pour un nettoyage Diogène ?</h3>
                  <p className="text-muted-foreground mb-3">
                    Si le syndrome de Diogène est lié à un <strong>trouble psychique ou cognitif reconnu</strong>, le nettoyage peut être financé dans le cadre de l'aménagement du logement ou de l'aide humaine nécessaire
                    au maintien à domicile.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Où demander la PCH ?</h3>
                <p className="text-blue-800">
                  Auprès de la <strong>MDPH (Maison Départementale des Personnes Handicapées) de l'Hérault</strong>. Délai de traitement : 4 à 6 mois en moyenne.
                </p>
              </div>
            </section>

            {/* Section 3 : CCAS */}
            <section id="ccas" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Aide Sociale du CCAS</h2>

              <div className="bg-card rounded-xl p-6 shadow-medium mb-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Qu'est-ce que le CCAS ?</h3>
                <p className="text-muted-foreground mb-4">
                  Le <strong>Centre Communal d'Action Sociale</strong> peut accorder des <strong>aides ponctuelles d'urgence</strong> pour des situations de détresse sociale. Le nettoyage d'un logement insalubre entre
                  dans ce cadre, surtout si la personne est isolée ou en difficulté financière.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-green-900 mb-3">Avantages</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>
                      • <strong>Pas de condition d'âge</strong>
                    </li>
                    <li>• Délai de traitement rapide (quelques semaines)</li>
                    <li>• Aide ponctuelle adaptée à la situation</li>
                    <li>• Accompagnement social possible</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-amber-900 mb-3">Limites</h3>
                  <ul className="space-y-2 text-amber-800">
                    <li>• Montant variable selon communes</li>
                    <li>• Étude des ressources du foyer</li>
                    <li>• Aide non renouvelable systématiquement</li>
                    <li>• Budget limité des CCAS</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 shadow-medium">
                <h3 className="text-lg font-bold text-card-foreground mb-2">Comment en bénéficier ?</h3>
                <p className="text-muted-foreground mb-3">
                  Prendre rendez-vous avec une assistante sociale du CCAS de votre commune (Béziers, Montpellier, Sète, Agde, Lunel...). Présentez votre situation, notre devis, et vos justificatifs de ressources.
                </p>
                <p className="text-sm text-muted-foreground italic">💡 Les CCAS des grandes villes (Montpellier, Béziers) ont généralement plus de moyens.</p>
              </div>
            </section>

            {/* Section 4 : Caisses de retraite */}
            <section id="retraite" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Caisses de Retraite</h2>

              <div className="bg-card rounded-xl p-6 shadow-medium mb-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Aides des caisses de retraite</h3>
                <p className="text-muted-foreground mb-4">
                  La plupart des caisses de retraite proposent des <strong>aides au bien vieillir à domicile</strong>. Le nettoyage d'un logement insalubre peut entrer dans ce cadre si cela permet le maintien à domicile
                  en sécurité.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-card rounded-xl p-5 shadow-medium">
                  <h4 className="font-bold text-card-foreground mb-2">CARSAT</h4>
                  <p className="text-sm text-muted-foreground">Caisse régime général. Aide ponctuelle jusqu'à 3 500 € selon situation.</p>
                </div>

                <div className="bg-card rounded-xl p-5 shadow-medium">
                  <h4 className="font-bold text-card-foreground mb-2">MSA</h4>
                  <p className="text-sm text-muted-foreground">Mutualité Sociale Agricole. Aides aux retraités agricoles.</p>
                </div>

                <div className="bg-card rounded-xl p-5 shadow-medium">
                  <h4 className="font-bold text-card-foreground mb-2">Autres régimes</h4>
                  <p className="text-sm text-muted-foreground">Fonction publique, SNCF, EDF... Contactez votre caisse.</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Comment en bénéficier ?</h3>
                <p className="text-blue-800">
                  Contactez le <strong>service social de votre caisse de retraite</strong>. Demandez une évaluation à domicile. L'assistante sociale pourra débloquer une aide ponctuelle si votre dossier est recevable.
                </p>
              </div>
            </section>

            {/* Section 5 : Action Logement */}
            <section id="action-logement" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Action Logement</h2>

              <div className="bg-card rounded-xl p-6 shadow-medium mb-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Aide à l'adaptation du logement</h3>
                <p className="text-muted-foreground mb-4">
                  Action Logement (ex-1% Logement) propose des <strong>subventions pour l'adaptation et la rénovation</strong> des logements des salariés et retraités du secteur privé.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Montant</h4>
                    <p className="text-muted-foreground">
                      Jusqu'à <strong>5 000 €</strong> de subvention
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Conditions</h4>
                    <p className="text-muted-foreground">Salarié ou retraité du secteur privé</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="text-blue-900">
                  <strong>Démarche :</strong> Créer un compte sur{" "}
                  <a href="https://www.actionlogement.fr" target="_blank" rel="noopener" className="underline">
                    actionlogement.fr
                  </a>{" "}
                  et simuler votre éligibilité. Joindre notre devis détaillé à votre demande.
                </p>
              </div>
            </section>

            {/* Section 6 : Assurances */}
            <section id="assurances" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Assurances</h2>

              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <FileCheck className="w-6 h-6 text-primary mr-2" />
                    Assurance Habitation
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Certains contrats d'assurance habitation incluent une <strong>garantie "frais de remise en état"</strong> ou "nettoyage après sinistre". Si le logement est devenu inhabitable (insalubrité grave,
                    infestation), vérifiez vos conditions générales.
                  </p>
                  <p className="text-sm text-muted-foreground italic">💡 Contactez votre assureur avec notre devis. Certains contrats haut de gamme peuvent prendre en charge tout ou partie du nettoyage.</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <FileCheck className="w-6 h-6 text-primary mr-2" />
                    Assurance Décès / Obsèques
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Dans le cadre d'un <strong>débarras après décès</strong>, l'assurance obsèques du défunt peut inclure une enveloppe pour les frais de remise en état du logement.
                  </p>
                  <Link to="/debarras-apres-deces-guide">
                    <Button variant="outline" size="sm" className="mt-2" onClick={() => trackCTAClick("Lien Débarras Décès - Aides")}>
                      Voir le guide débarras après décès
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 7 : Succession */}
            <section id="succession" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Prise en charge par la Succession</h2>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Débarras après décès</h3>
                <p className="text-muted-foreground mb-4">
                  Les frais de nettoyage et débarras d'un logement après décès peuvent être <strong>déduits de l'actif successoral</strong> avant partage entre les héritiers.
                </p>

                <div className="bg-white rounded-lg p-5 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-card-foreground mb-2">Facture acceptée par les notaires</h4>
                  <p className="text-sm text-muted-foreground">
                    Notre facture détaillée (débarras, nettoyage, désinfection, évacuation) est reconnue par les notaires comme une charge de succession déductible. Les héritiers n'avancent pas les frais personnellement.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground italic">💡 Cette solution est particulièrement intéressante si la succession comprend un bien immobilier ou des liquidités.</p>
              </div>
            </section>

            {/* Section 8 : Comment constituer votre dossier */}
            <section id="demarches" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Comment constituer votre dossier ?</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Demandez un devis détaillé</h3>
                    <p className="text-muted-foreground mb-3">
                      Contactez-nous pour une visite gratuite sur place. Nous établissons un <strong>devis précis et détaillé</strong> (surface, niveau d'insalubrité, prestations incluses). Ce document est indispensable
                      pour toutes vos demandes d'aide.
                    </p>
                    <Button
                      onClick={() => {
                        trackCTAClick("Demander Devis - Article Aides");
                        window.location.href = "/contact";
                      }}
                      variant="outline"
                    >
                      Demander un devis gratuit
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Rassemblez vos justificatifs</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Pièce d'identité</li>
                      <li>• Justificatif de domicile</li>
                      <li>• Avis d'imposition ou de non-imposition</li>
                      <li>• Relevés de ressources (retraite, salaire)</li>
                      <li>• Certificat médical si handicap ou perte d'autonomie</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Déposez vos demandes</h3>
                    <p className="text-muted-foreground">
                      Selon votre situation, faites <strong>plusieurs demandes en parallèle</strong> (APA + CCAS, PCH + caisse de retraite...). Cumuler les aides est souvent possible et permet de couvrir l'intégralité
                      des frais.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Nous fournissons la facture détaillée</h3>
                    <p className="text-muted-foreground">
                      Après intervention, nous vous remettons une <strong>facture détaillée conforme</strong> aux exigences des organismes payeurs (description précise, conformité DASRI, certification QUALIPROPRE).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tableau récapitulatif */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Tableau récapitulatif des aides</h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl overflow-hidden shadow-medium">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-4 text-left font-bold">Aide</th>
                      <th className="p-4 text-left font-bold">Public</th>
                      <th className="p-4 text-left font-bold">Montant</th>
                      <th className="p-4 text-left font-bold">Organisme</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-semibold">APA</td>
                      <td className="p-4 text-sm">+60 ans, GIR 1-4</td>
                      <td className="p-4 text-sm">763€ à 1955€/mois</td>
                      <td className="p-4 text-sm">Conseil Départemental</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">PCH</td>
                      <td className="p-4 text-sm">-60 ans, handicap</td>
                      <td className="p-4 text-sm">80-100% des frais</td>
                      <td className="p-4 text-sm">MDPH</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">CCAS</td>
                      <td className="p-4 text-sm">Tous, selon ressources</td>
                      <td className="p-4 text-sm">Variable</td>
                      <td className="p-4 text-sm">Mairie</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Caisse retraite</td>
                      <td className="p-4 text-sm">Retraités</td>
                      <td className="p-4 text-sm">Jusqu'à 3 500€</td>
                      <td className="p-4 text-sm">CARSAT, MSA...</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Action Logement</td>
                      <td className="p-4 text-sm">Salariés privé</td>
                      <td className="p-4 text-sm">Jusqu'à 5 000€</td>
                      <td className="p-4 text-sm">Action Logement</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Assurances</td>
                      <td className="p-4 text-sm">Selon contrats</td>
                      <td className="p-4 text-sm">Variable</td>
                      <td className="p-4 text-sm">Assureur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Final */}
            <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Nous vous accompagnons dans vos démarches</h2>
              <p className="text-lg mb-6 opacity-95">Devis détaillé pour vos dossiers • Facture conforme aux organismes • Conseils personnalisés</p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  trackCTAClick("CTA Final - Article Aides");
                  window.location.href = "tel:+33788432055";
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Parler à un conseiller : 07 88 43 20 55
              </Button>
              <p className="text-sm mt-4 opacity-90">Devis gratuit sous 12h • Intervention 24-48h</p>
            </div>

            {/* Liens vers autres services */}
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Articles complémentaires</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/prix-nettoyage-diogene-guide-2026" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Guide des Prix 2026</h4>
                  <p className="text-sm text-muted-foreground">Grille tarifaire complète</p>
                </Link>
                <Link to="/syndrome-diogene-comprendre-accompagner" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Comprendre le Syndrome de Diogène</h4>
                  <p className="text-sm text-muted-foreground">Accompagner un proche</p>
                </Link>
                <Link to="/debarras-apres-deces-guide" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Débarras Après Décès</h4>
                  <p className="text-sm text-muted-foreground">Guide complet des démarches</p>
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

export default AidesFinancieres;
