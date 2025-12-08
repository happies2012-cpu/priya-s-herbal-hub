import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  { q: "What is Formula 1 Nutritional Shake?", a: "Formula 1 is a healthy meal replacement shake with 17g protein, fiber, and 21 vitamins and minerals." },
  { q: "How do I use the products for weight loss?", a: "Replace 1-2 meals daily with Formula 1 shake, drink herbal tea for metabolism, and maintain a balanced diet." },
  { q: "Are the products safe?", a: "Yes, all products are scientifically formulated, tested for quality, and manufactured in GMP-certified facilities." },
  { q: "Can I become a distributor?", a: "Yes! Visit our Business Opportunity page to learn about becoming an independent distributor." },
  { q: "What is the return policy?", a: "We offer a 30-day money-back guarantee on all products. Contact customer service for returns." },
  { q: "How long until I see results?", a: "Results vary, but many customers report feeling more energetic within 1-2 weeks of consistent use." },
  { q: "Are products suitable for vegetarians?", a: "Many products are vegetarian-friendly. Check individual product pages for dietary information." },
  { q: "Do you ship internationally?", a: "Currently we ship within India. International shipping options coming soon." },
  { q: "How do I track my order?", a: "Once shipped, you'll receive a tracking number via email to monitor your delivery." },
  { q: "Can I use products while pregnant?", a: "Consult your healthcare provider before using any supplements during pregnancy or nursing." }
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    <Footer />
  </div>
);

export default FAQ;
