import { CheckCircle, Users, Award, Clock } from "lucide-react";

const StatsCounter = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Interventions réalisées",
      description: "Depuis 15 ans dans l'Hérault"
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "Satisfaction client",
      description: "Note moyenne sur 127 avis"
    },
    {
      icon: Clock,
      value: "24-48h",
      label: "Délai d'intervention",
      description: "Disponible 7J/7"
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Discrétion garantie",
      description: "Confidentialité absolue"
    }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1 opacity-95">
                  {stat.label}
                </div>
                <div className="text-sm opacity-75">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
