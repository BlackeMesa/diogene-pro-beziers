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
      slug: "/prix-nettoyage-diogene-guide-2025",
      title: "Guide complet des prix nettoyage Diogène 2025",
      excerpt: "Découvrez tous les tarifs détaillés pour le nettoyage d'un logement touché par le syndrome de Diogène dans l'Hérault. Prix au m², aides financières disponibles et conseils pratiques.",
      date: "Novembre 2024",
      readTime: "8 min",
      category: "Tarifs & Aides"
    },
    {
      slug: "/appartement-tres-sale-que-faire",
      title: "Appartement très sale : que faire ? Guide complet",
      excerpt: "Vous êtes confronté à un appartement très sale ou insalubre ? Découvrez les solutions, démarches et professionnels pour vous aider à retrouver un logement sain.",
      date: "Octobre 2024",
      readTime: "6 min",
      category: "Conseils Pratiques"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog & Conseils - Le Lien Propreté 34 | Nettoyage Diogène Hérault</title>
        <meta 
          name="description" 
          content="Conseils, guides et informations sur le nettoyage Diogène, tarifs, aides financières et solutions pour logements insalubres dans l'Hérault." 
        />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Conseils
            </h1>
            <p className="text-xl opacity-95">
              Guides pratiques, conseils d'experts et informations utiles sur le nettoyage Diogène et le débarras insalubre
            </p>
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
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-card-foreground mb-3 hover:text-primary transition-colors">
                      <Link to={article.slug}>{article.title}</Link>
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
