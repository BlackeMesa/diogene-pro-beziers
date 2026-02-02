import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const Blog = () => {
  const articles: BlogArticle[] = [
    {
      slug: "/syndrome-diogene-comprendre-accompagner",
      title: "Syndrome de Diogène : comprendre et accompagner un proche",
      excerpt: "Guide complet pour comprendre le syndrome de Diogène, reconnaître les signes d'alerte et accompagner un proche en difficulté avec empathie et solutions concrètes.",
      date: "Janvier 2026",
      readTime: "10 min",
      category: "Conseils Pratiques",
    },
    {
      slug: "/debarras-apres-deces-guide",
      title: "Débarras après décès : guide complet des démarches",
      excerpt: "Toutes les étapes pour organiser le débarras d'un logement après un décès : démarches administratives, tri des biens, valorisation, nettoyage et remise en état.",
      date: "Janvier 2026",
      readTime: "12 min",
      category: "Conseils Pratiques",
    },
    {
      slug: "/prix-nettoyage-diogene-guide-2026",
      title: "Guide complet des prix nettoyage Diogène 2026",
      excerpt: "Découvrez tous les tarifs détaillés pour le nettoyage d'un logement touché par le syndrome de Diogène dans l'Hérault. Prix au m², aides financières disponibles et conseils pratiques.",
      date: "Janvier 2026",
      readTime: "8 min",
      category: "Tarifs & Aides",
    },
    {
      slug: "/aides-financieres-nettoyage-diogene",
      title: "Aides financières pour le nettoyage Diogène en 2026",
      excerpt: "Guide complet des aides disponibles pour financer le nettoyage d'un logement Diogène : APA, PCH, CCAS, Action Logement, caisses de retraite, assurances. Démarches et montants.",
      date: "Janvier 2026",
      readTime: "9 min",
      category: "Tarifs & Aides",
    },
    {
      slug: "/temoignage-nettoyage-diogene-beziers",
      title: "Témoignage : comment nous avons aidé une famille à Béziers",
      excerpt: "L'histoire vraie de Sophie et l'accompagnement de sa mère dans la sortie du syndrome de Diogène. Une intervention empathique de 11 jours qui a changé leur vie.",
      date: "Janvier 2026",
      readTime: "7 min",
      category: "Témoignages",
    },
    {
      slug: "/appartement-tres-sale-que-faire",
      title: "Appartement très sale : que faire ? Guide complet",
      excerpt: "Vous êtes confronté à un appartement très sale ou insalubre ? Découvrez les solutions, démarches et professionnels pour vous aider à retrouver un logement sain.",
      date: "Novembre 2025",
      readTime: "6 min",
      category: "Conseils Pratiques",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog & Conseils - Lien Propreté 34 | Nettoyage Diogène Hérault</title>
        <meta name="description" content="Conseils, guides et informations sur le nettoyage Diogène, tarifs, aides financières et solutions pour logements insalubres dans l'Hérault." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Conseils</h1>
            <p className="text-xl opacity-95">Guides pratiques, conseils d'experts et informations utiles sur le nettoyage Diogène et le débarras insalubre</p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Card key={article.slug} className="hover:shadow-strong transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{article.category}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-card-foreground mb-3 hover:text-primary transition-colors">
                      <Link to={article.slug}>{article.title}</Link>
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    <Link to={article.slug}>
                      <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        Lire l'article
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bloc de liens internes */}
            <div className="mt-16 p-8 bg-secondary rounded-xl text-center">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Nos services dans l'Hérault</h3>
              <p className="text-muted-foreground mb-6">Découvrez nos prestations professionnelles pour le nettoyage extrême et le débarras.</p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Link to="/nettoyage-diogene" className="px-4 py-2 bg-card rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft">
                  Nettoyage Diogène
                </Link>
                <Link to="/debarras-insalubre" className="px-4 py-2 bg-card rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft">
                  Débarras insalubre
                </Link>
                <Link to="/nettoyage-urgence-24h-herault" className="px-4 py-2 bg-card rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft">
                  🚨 Urgence 24h
                </Link>
                <Link to="/faq" className="px-4 py-2 bg-card rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft">
                  FAQ
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Intervention à{" "}
                <Link to="/nettoyage-diogene-beziers" className="text-primary hover:underline">
                  Béziers
                </Link>
                ,{" "}
                <Link to="/nettoyage-diogene-montpellier" className="text-primary hover:underline">
                  Montpellier
                </Link>
                ,{" "}
                <Link to="/nettoyage-diogene-sete" className="text-primary hover:underline">
                  Sète
                </Link>{" "}
                et{" "}
                <Link to="/zone-intervention-herault" className="text-primary hover:underline font-medium">
                  tout l'Hérault
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
