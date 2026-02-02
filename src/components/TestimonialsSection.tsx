import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  rating: number;
  text: string;
  author: string;
  location: string;
  service: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    text: "Une équipe professionnelle et empathique. Ils ont su gérer la situation de ma mère avec beaucoup de respect et de discrétion. Le logement est méconnaissable. Merci infiniment.",
    author: "Mme D.",
    location: "Béziers",
    service: "Nettoyage diogène",
    date: "Octobre 2025",
  },
  {
    rating: 5,
    text: "Intervention rapide et efficace. Le devis a été respecté à la lettre, aucune surprise. Je recommande sans hésiter pour leur professionnalisme et leur humanité.",
    author: "M. P.",
    location: "Montpellier",
    service: "Débarras insalubre",
    date: "Septembre 2025",
  },
  {
    rating: 5,
    text: "Nous étions dépassés par la situation. Leur accompagnement a été précieux, sans aucun jugement. Les voisins n'ont rien remarqué grâce à leur discrétion. Un grand merci à toute l'équipe.",
    author: "Famille L.",
    location: "Sète",
    service: "Nettoyage diogène",
    date: "Novembre 2025",
  },
  {
    rating: 5,
    text: "Service impeccable du début à la fin. Équipe à l'écoute, réactive et très professionnelle. Le résultat dépasse nos attentes. Nous avons enfin pu retrouver un logement sain.",
    author: "M. et Mme R.",
    location: "Agde",
    service: "Débarras + désinfection",
    date: "Décembre 2025",
  },
];

const TestimonialsSection = () => {
  const averageRating = 4.9;
  const totalReviews = 127;

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/50 via-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ils nous font confiance</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">{averageRating}/5</span>
          </div>
          <p className="text-muted-foreground">Basé sur {totalReviews} avis clients vérifiés</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-strong transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-card-foreground leading-relaxed mb-4 italic">"{testimonial.text}"</p>

                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <p className="font-semibold text-primary">{testimonial.author}</p>
                          <p className="text-muted-foreground">{testimonial.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-muted-foreground">{testimonial.service}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">💚 Tous les témoignages sont authentiques et anonymisés pour respecter la confidentialité de nos clients</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
