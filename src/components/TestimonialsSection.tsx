import { Star, Quote } from "lucide-react";
import { Helmet } from "react-helmet";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
}

interface TestimonialsSectionProps {
  showSchema?: boolean;
}

const TestimonialsSection = ({ showSchema = true }: TestimonialsSectionProps) => {
  // Structure prête à remplir avec de vrais témoignages
  const testimonials: Testimonial[] = [
    // Exemple de structure - à remplacer par de vrais témoignages
    // {
    //   name: "Mme D.",
    //   location: "Béziers",
    //   rating: 5,
    //   text: "Service exceptionnel, équipe à l'écoute et très discrète. Ils ont su gérer une situation très difficile avec beaucoup d'humanité.",
    //   date: "2024-01"
    // },
  ];

  // Schema markup pour les étoiles dans Google
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Le Lien Propreté 34",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": testimonials.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": testimonial.text,
      "datePublished": testimonial.date
    }))
  };

  // Ne pas afficher la section si pas de témoignages
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <>
      {showSchema && testimonials.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(aggregateRating)}
          </script>
        </Helmet>
      )}
      
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Ils Nous Font Confiance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Témoignages de nos clients dans l'Hérault
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted'}`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-bold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Des centaines de familles nous ont fait confiance dans l'Hérault depuis plus de 15 ans
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
