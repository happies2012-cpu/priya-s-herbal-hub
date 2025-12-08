import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    story: "I lost 12 kgs in 4 months with Formula 1 shakes! The vanilla flavor is amazing and keeps me full. My energy levels are through the roof!",
    weightLost: "12 kg",
    duration: "4 months",
    productsUsed: ["Formula 1 Shake", "Herbal Tea"]
  },
  {
    id: "2",
    name: "Rahul Verma",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    story: "As an athlete, the Herbalife24 sports line has transformed my performance. Better recovery, more endurance, and I feel stronger than ever!",
    productsUsed: ["H24 Rebuild Strength", "CR7 Drive"]
  },
  {
    id: "3",
    name: "Anita Desai",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    story: "The skin care range has done wonders for my complexion. My dark spots are gone and my skin glows naturally. So happy I found PriyaHerbalHub!",
    productsUsed: ["Radiant C Booster", "Eye Cream"]
  },
  {
    id: "4",
    name: "Vikram Singh",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    rating: 5,
    story: "I was skeptical at first, but after 3 months of using the nutrition products, my cholesterol levels improved significantly. My doctor is impressed!",
    productsUsed: ["Omega-3", "Multivitamin"]
  },
  {
    id: "5",
    name: "Sneha Reddy",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    rating: 5,
    story: "Post-pregnancy weight was my biggest concern. With personalized guidance and Formula 1, I'm back to my pre-pregnancy weight in just 5 months!",
    weightLost: "15 kg",
    duration: "5 months",
    productsUsed: ["Formula 1 Shake", "Protein Bar"]
  },
  {
    id: "6",
    name: "Amit Patel",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    rating: 5,
    story: "Started as a customer, now I'm a successful distributor! The business opportunity changed my life. Earning while helping others get healthy!",
    productsUsed: ["Complete Product Range"]
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((currentIndex + 1) % testimonials.length);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people, real results. See how our products have transformed lives.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, idx) => (
              <Card key={`${testimonial.id}-${idx}`} className="hover-lift">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 line-clamp-4">"{testimonial.story}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className={`w-4 h-4 ${i <= testimonial.rating ? "fill-primary text-primary" : "text-muted"}`} />
                    ))}
                  </div>
                  {testimonial.weightLost && (
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm font-semibold text-primary">
                        Lost {testimonial.weightLost} in {testimonial.duration}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Single Card */}
          <div className="md:hidden">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6">"{testimonials[currentIndex].story}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
