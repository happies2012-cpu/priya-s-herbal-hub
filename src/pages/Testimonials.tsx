import { Star, Quote, TrendingUp, Heart, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    rating: 5,
    goal: "Weight Loss",
    goalIcon: Target,
    achievement: "Lost 15kg in 4 months",
    story: "After trying many diets without success, I discovered PriyaHerbalHub. The Formula 1 shake became my morning ritual. Combined with the Herbal Tea Concentrate, I finally achieved my dream weight. The energy boost was incredible!",
    product: "Formula 1 Nutritional Shake",
    verified: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    rating: 5,
    goal: "Fitness",
    goalIcon: Zap,
    achievement: "Gained 8kg lean muscle",
    story: "As a fitness enthusiast, I was skeptical about supplements. But the Herbalife24 line changed everything. The protein quality is outstanding, and my recovery time has improved dramatically. I recommend this to everyone at my gym.",
    product: "Herbalife24 Rebuild Strength",
    verified: true,
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad, Gujarat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    rating: 5,
    goal: "Daily Nutrition",
    goalIcon: Heart,
    achievement: "Improved energy & immunity",
    story: "Being a working mother, I struggled to maintain proper nutrition. The daily supplements from PriyaHerbalHub filled all my nutritional gaps. I feel more energetic, and my immunity has never been better. My whole family now uses these products!",
    product: "Formula 2 Multivitamin",
    verified: true,
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    rating: 5,
    goal: "Weight Loss",
    goalIcon: Target,
    achievement: "Lost 20kg in 6 months",
    story: "At 42, I thought weight loss was impossible. My coach introduced me to the complete weight management program. The personalized guidance combined with quality products helped me lose 20kg. I feel 20 years younger!",
    product: "Total Control",
    verified: true,
  },
  {
    id: 5,
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    rating: 5,
    goal: "Skin Care",
    goalIcon: Heart,
    achievement: "Glowing skin in 30 days",
    story: "I struggled with dull skin for years. The Collagen Skin Booster and Aloe products transformed my skin completely. Friends keep asking about my skincare routine. It's simple - just PriyaHerbalHub products!",
    product: "Collagen Skin Booster",
    verified: true,
  },
  {
    id: 6,
    name: "Amit Joshi",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    rating: 5,
    goal: "Fitness",
    goalIcon: Zap,
    achievement: "Marathon ready in 3 months",
    story: "Training for my first marathon seemed daunting. The Herbalife24 products became my training partners. The Hydrate helped during long runs, and CR7 Drive kept me going. I completed my first marathon with flying colors!",
    product: "Herbalife24 Hydrate",
    verified: true,
  },
  {
    id: 7,
    name: "Kavitha Nair",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200",
    rating: 5,
    goal: "Daily Nutrition",
    goalIcon: Heart,
    achievement: "Better digestion & health",
    story: "Digestive issues plagued me for years. The Active Fiber Complex and Aloe Concentrate changed my life. My digestion is perfect now, and I feel lighter and more active. Thank you PriyaHerbalHub!",
    product: "Active Fiber Complex",
    verified: true,
  },
  {
    id: 8,
    name: "Mohammed Ali",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    rating: 5,
    goal: "Weight Loss",
    goalIcon: Target,
    achievement: "Lost 12kg naturally",
    story: "Working in IT meant long hours and unhealthy eating. The meal replacement shakes were perfect for my busy schedule. I lost weight without feeling hungry or tired. The convenience is unmatched!",
    product: "Formula 1 Express Bar",
    verified: true,
  },
];

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "95%", label: "Success Rate" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "15+", label: "Years of Excellence" },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 border-none">Real Stories, Real Results</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover how thousands of people have transformed their lives with PriyaHerbalHub products.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1 text-sm">
                        <testimonial.goalIcon className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{testimonial.goal}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <TrendingUp className="h-5 w-5" />
                      {testimonial.achievement}
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground pl-6 italic">
                      "{testimonial.story}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-muted-foreground">
                      Product: <span className="font-medium text-foreground">{testimonial.product}</span>
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/products">Shop Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their lives with our products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products">Shop Products</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
