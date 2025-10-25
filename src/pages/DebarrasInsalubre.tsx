import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingDown, Building2, FileText, Recycle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import TrustBadges from "@/components/TrustBadges";
import CostEstimator from "@/components/CostEstimator";
import { SimulatorHighlight } from "@/components/SimulatorHighlight";
import valuableObjects from "@/assets/valuable-objects.jpg";
import professionalPartnership from "@/assets/professional-partnership.jpg";

const DebarrasInsalubre = () => {
  const clientTypes = [
    {
      icon: Building2,
      title: "Propriétaires & Bailleurs",
      description: "Débarras de logements insalubres entre deux locataires ou après décès. Remise en état complète."
    },
    {
      icon: FileText,
      title: "Agences Immobilières",
      description: "Service rapide pour la libération de biens. Intervention coordonnée avec vos plannings de location."
    },
    {
      icon: Building2,
      title: "Mandataires Judiciaires",
      description: "Évacuation d'archives, meubles et documents. Traçabilité et conformité légale garanties."
    }
  ];

  const pricingFactors = [
    {
      title: "Volume à évacuer",
      description: "Tarif de base entre 20€ et 60€ par m³ selon la nature et l'accessibilité"
    },
    {
      title: "Type de déchets",
      description: "Classification et tri pour optimisation du coût (valorisable vs. déchet ultime)"
    },
    {
      title: "Accessibilité",
      description: "Étage, ascenseur, distance du véhicule - impact sur le temps d'intervention"
    },
    {
      title: "Valorisation possible",
      description: "Objets revendables qui peuvent réduire voire annuler le coût final"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Débarras Insalubre à Béziers | Prix au m³ Transparent
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Débarras de logements très sales, archives et locaux insalubres dans l'Hérault
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-8 py-6 shadow-strong"
                >
                  Devis Gratuit sous 12h
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
                  <TrendingDown className="w-8 h-8 text-success" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Tarification Transparente & Débarras Valorisé
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Notre prix au m³ varie de <strong className="text-primary">20€ à 60€</strong>, mais peut être 
                  réduit ou même annulé grâce à la valorisation d'objets revendables.
                </p>
                
                <div className="bg-accent/10 border-2 border-accent rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <Recycle className="w-10 h-10 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        Débarras Valorisé
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Nous identifions et revendons les objets de valeur (meubles anciens, bibelots, électroménager fonctionnel, etc.). 
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                        Le produit de cette revente vient <span className="text-success">réduire votre facture finale</span>, 
                        parfois jusqu'à zéro euro !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={valuableObjects}
                  alt="Objets valorisables pouvant réduire le coût du débarras"
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pricingFactors.map((factor, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl shadow-soft p-6 hover:shadow-medium transition-shadow"
                >
                  <h4 className="font-bold text-card-foreground mb-2">{factor.title}</h4>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative">
                <img 
                  src={professionalPartnership}
                  alt="Partenariats professionnels avec agences et mandataires"
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Nos Clients Professionnels
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Service adapté aux besoins spécifiques des propriétaires, agences et mandataires
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {clientTypes.map((client, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-medium p-8 hover:shadow-strong transition-all duration-300"
              >
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mb-6">
                  <client.icon className="w-8 h-8 text-trust" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  {client.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Ce Qui Est Inclus dans Notre Service
            </h2>

            <div className="space-y-6">
              <div className="bg-card rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  Débarras Complet du Logement
                </h3>
                <p className="text-muted-foreground ml-9">
                  Évacuation de tous les objets, meubles, électroménager, et déchets. 
                  Tri professionnel et traitement adapté selon la nature des biens.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  Évacuation d'Archives & Documents
                </h3>
                <p className="text-muted-foreground ml-9">
                  Service spécialisé pour les mandataires judiciaires. Destruction confidentielle possible. 
                  Traçabilité complète des documents évacués.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  Nettoyage Sommaire Post-Débarras
                </h3>
                <p className="text-muted-foreground ml-9">
                  Balayage et nettoyage de base après évacuation. Pour un nettoyage approfondi, 
                  voir notre service dédié au nettoyage Diogène.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  Gestion Écologique des Déchets
                </h3>
                <p className="text-muted-foreground ml-9">
                  Tri sélectif et acheminement vers les filières appropriées (recyclage, déchetterie, revente). 
                  Réduction de l'impact environnemental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Situations Typiques d'Intervention
            </h2>

            <div className="space-y-6">
              <div className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <h4 className="font-bold text-card-foreground mb-2">
                  Logement Très Sale après Locataire
                </h4>
                <p className="text-sm text-muted-foreground">
                  Débarras complet d'un appartement ou maison laissé dans un état d'insalubrité. 
                  Remise en état pour nouvelle location rapide.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <h4 className="font-bold text-card-foreground mb-2">
                  Débarras après Décès ou Succession
                </h4>
                <p className="text-sm text-muted-foreground">
                  Vidage de maison avec tri des objets de valeur sentimentale et valorisation du reste. 
                  Accompagnement respectueux des familles.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <h4 className="font-bold text-card-foreground mb-2">
                  Archives d'Entreprise ou Cabinet
                </h4>
                <p className="text-sm text-muted-foreground">
                  Évacuation sécurisée de documents et archives anciennes. Service pour mandataires judiciaires, 
                  notaires, et entreprises en liquidation.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <h4 className="font-bold text-card-foreground mb-2">
                  Cave ou Grenier Encombré
                </h4>
                <p className="text-sm text-muted-foreground">
                  Débarras de combles, caves, garages remplis d'objets accumulés sur des années. 
                  Libération d'espaces de stockage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SimulatorHighlight>
            <CostEstimator variant="debarras" />
          </SimulatorHighlight>
        </div>
      </section>

      <TrustBadges />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-hero text-primary-foreground rounded-2xl p-12 text-center shadow-strong">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'un Devis pour un Débarras Insalubre ?
            </h2>
            <p className="text-xl mb-2 opacity-95">
              Tarif au m³ transparent avec possibilité de débarras valorisé
            </p>
            <p className="text-lg mb-8 opacity-90">
              <strong>Réponse garantie sous 12 heures - Service 7J/7</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-8 py-6 shadow-strong"
                >
                  Demander un Devis Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DebarrasInsalubre;
