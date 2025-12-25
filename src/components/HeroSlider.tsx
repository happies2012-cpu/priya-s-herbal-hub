import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import priyaLogo from "@/assets/priya-logo.png";
import nutritionBanner from "@/assets/nutrition-banner.jpg";
import heroFitness from "@/assets/hero-fitness.png";
import heroHealthyFood from "@/assets/hero-healthy-food.png";
import heroPriya from "@/assets/hero-priya.png";

const slides = [
  {
    id: 1,
    badge: "Transform Your Life Today",
    title: "A Weight-Loss Program For",
    highlight: "Life",
    description: "Discover premium herbal nutrition products designed to help you achieve your health goals naturally.",
    cta1: { text: "Explore Products", link: "/products" },
    cta2: { text: "Free Consultation", link: "/contact" },
    image: nutritionBanner,
  },
  {
    id: 2,
    badge: "Premium Nutrition",
    title: "Fuel Your Fitness",
    highlight: "Journey",
    description: "High-quality protein supplements and sports nutrition for peak performance and faster recovery.",
    cta1: { text: "Shop Sports Nutrition", link: "/products?category=sports" },
    cta2: { text: "View Goals", link: "/goals/fitness" },
    image: heroFitness,
  },
  {
    id: 3,
    badge: "Healthy Eating",
    title: "Nourish Your Body",
    highlight: "Naturally",
    description: "Premium plant-based nutrition and wholesome ingredients for complete daily wellness and vitality.",
    cta1: { text: "Shop Nutrition", link: "/products?category=daily-nutrition" },
    cta2: { text: "Learn More", link: "/resources" },
    image: heroHealthyFood,
  },
  {
    id: 4,
    badge: "Natural Beauty",
    title: "Glow From",
    highlight: "Within",
    description: "Nourish your skin with our herbal skincare collection. Natural ingredients for radiant, healthy skin.",
    cta1: { text: "Shop Skincare", link: "/products?category=skincare" },
    cta2: { text: "See Results", link: "/testimonials" },
    image: heroPriya,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 dark:from-background/98 dark:via-background/90 dark:to-background/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <Badge
            className={`mb-4 bg-primary/20 text-primary border-none transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {slide.badge}
          </Badge>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-500 delay-100 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {slide.title} <span className="text-primary">{slide.highlight}</span>
          </h1>
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-xl transition-all duration-500 delay-200 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {slide.description}
          </p>
          <div
            className={`flex flex-wrap gap-4 transition-all duration-500 delay-300 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <Button asChild size="lg" className="text-lg px-8 btn-glow">
              <Link to={slide.cta1.link}>
                {slide.cta1.text} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link to={slide.cta2.link}>{slide.cta2.text}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Logo */}
      <div className="absolute bottom-20 right-10 hidden lg:block opacity-30 animate-pulse">
        <img src={priyaLogo} alt="PriyaHerbalHub" className="w-40 h-auto" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-3 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
