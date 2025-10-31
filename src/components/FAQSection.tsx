import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  showSchema?: boolean;
}

export function FAQSection({ items, title = "Questions fréquentes", showSchema = true }: FAQSectionProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      {showSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>
      )}
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-medium border-none px-6"
              >
                <AccordionTrigger className="text-left font-bold text-card-foreground hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
