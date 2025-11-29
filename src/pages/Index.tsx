import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Zap, Shield, Star, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-wellness.jpg";
import nutritionBanner from "@/assets/nutrition-banner.jpg";
import brandIcon from "@/assets/priya-brand-icon.svg";

const Index = () => {
  const goals = [
    {
      icon: Target,
      title: "Healthy Weight",
      description: "Achieve and maintain your ideal weight with our scientifically-formulated nutrition programs.",
      link: "/goals/weight",
    },
    {
      icon: Zap,
      title: "Fitness & Performance",
      description: "Boost your athletic performance and recovery with premium sports nutrition.",
      link: "/goals/fitness",
    },
    {
      icon: Heart,
      title: "Daily Nutrition & Health",
      description: "Support your overall wellness with essential vitamins and daily nutrition.",
      link: "/goals/nutrition",
    },
    {
      icon: Shield,
      title: "Skin & Body Care",
      description: "Nourish your skin and body with herbal-based beauty and care products.",
      link: "/goals/skincare",
    },
  ];

  const services = [
    {
      title: "Personalized Nutrition",
      description: "Customized meal plans and supplement recommendations tailored to your unique health goals.",
      icon: "🥗",
    },
    {
      title: "Expert Guidance",
      description: "Work with certified nutritionists and wellness coaches for ongoing support.",
      icon: "👨‍⚕️",
    },
    {
      title: "Premium Products",
      description: "High-quality herbal supplements and nutrition products backed by science.",
      icon: "🌿",
    },
    {
      title: "Community Support",
      description: "Join a thriving community of health-conscious individuals on the same journey.",
      icon: "👥",
    },
  ];

  const products = [
    {
      name: "Protein Shakes",
      category: "Weight Management",
      image: "🥤",
      description: "Delicious, nutrient-rich shakes for meal replacement and muscle recovery",
    },
    {
      name: "Herbal Teas",
      category: "Energy & Wellness",
      image: "🍵",
      description: "Energizing botanical blends to boost metabolism and mental clarity",
    },
    {
      name: "Multivitamins",
      category: "Daily Health",
      image: "💊",
      description: "Complete daily nutrition to fill gaps in your diet",
    },
    {
      name: "Skin Care Line",
      category: "Beauty & Care",
      image: "✨",
      description: "Natural herbal formulations for radiant, healthy skin",
    },
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Happy Customers" },
    { icon: Award, value: "15+", label: "Years of Excellence" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Wellness Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="text-sm font-medium text-primary-foreground">🌿 Transform Your Life Today</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up text-balance">
              A Weight-Loss Program For <span className="text-accent">Life</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Discover premium herbal nutrition products and personalized wellness programs designed to help you achieve your health goals naturally and sustainably.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow text-lg px-8">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm text-lg px-8">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Brand Icon */}
        <div className="absolute bottom-10 right-10 hidden lg:block opacity-20 animate-float">
          <img src={brandIcon} alt="PriyaHerbalHub" className="w-32 h-32" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achieve Your Goals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whatever your wellness journey looks like, we have the right products and support to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <Card key={index} className="hover-lift group cursor-pointer">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-bounce">
                    <goal.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{goal.description}</CardDescription>
                  <Link to={goal.link} className="text-primary hover:text-primary/80 font-medium inline-flex items-center group">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Diet & Nutrition Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide comprehensive wellness solutions combining premium products with personalized support to ensure your success.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 btn-glow">
                <Link to="/resources">
                  View All Resources <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={nutritionBanner}
                alt="Nutrition Services"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-strong max-w-xs">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm">Natural & Herbal Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular herbal nutrition and wellness products, trusted by thousands worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover-lift overflow-hidden group">
                <div className="h-48 bg-gradient-accent flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <CardHeader>
                  <div className="text-sm text-primary font-medium mb-1">{product.category}</div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="btn-glow">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Opportunity CTA */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Wellness Business Today
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of successful distributors building their own wellness business with PriyaHerbalHub. Enjoy flexible hours, unlimited income potential, and the satisfaction of helping others achieve their health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="btn-glow">
                <Link to="/business">
                  Learn About Opportunity <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;