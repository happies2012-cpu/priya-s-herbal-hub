import { Link } from "react-router-dom";
import { DollarSign, Clock, Users, TrendingUp, Shield, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Business = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Unlimited Income Potential",
      description: "Your earnings grow with your efforts. No caps, no limits on what you can achieve.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work when you want, where you want. Perfect for busy lifestyles and work-life balance.",
    },
    {
      icon: Users,
      title: "Comprehensive Training",
      description: "Access world-class training, mentorship, and ongoing support to ensure your success.",
    },
    {
      icon: TrendingUp,
      title: "Proven Business Model",
      description: "Join a 15+ year established company with a track record of distributor success.",
    },
    {
      icon: Shield,
      title: "Low Start-up Costs",
      description: "Start your business with minimal investment and no inventory requirements.",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Earn incentives, bonuses, and recognition as you achieve your business goals.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Join Our Community",
      description: "Sign up as a distributor and gain instant access to our product catalog and business tools.",
    },
    {
      number: "02",
      title: "Get Trained",
      description: "Complete our comprehensive training program to learn about products, sales, and business building.",
    },
    {
      number: "03",
      title: "Build Your Business",
      description: "Start sharing products, building your customer base, and recruiting your own team.",
    },
    {
      number: "04",
      title: "Achieve Success",
      description: "Reach your income goals while helping others achieve their wellness and business dreams.",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Senior Distributor",
      quote: "PriyaHerbalHub gave me the freedom to work from home while earning a full-time income. Best decision ever!",
      achievement: "Earned $85K in Year One",
    },
    {
      name: "David Kim",
      role: "Gold Leader",
      quote: "The training and support are incredible. I went from zero experience to building a thriving wellness business.",
      achievement: "Built Team of 50+ Distributors",
    },
    {
      name: "Sarah Thompson",
      role: "Diamond Distributor",
      quote: "Not only did I transform my own health, but I'm now helping hundreds of others while earning six figures.",
      achievement: "Six-Figure Annual Income",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Wellness Business</h1>
            <p className="text-xl opacity-90 mb-8">
              Build a thriving business helping others achieve their health goals while creating financial freedom for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="btn-glow text-lg px-8">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                <Link to="/distributor-login">Existing Distributor Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Active Distributors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">90+</div>
              <div className="text-muted-foreground">Countries Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground">Paid in Commissions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PriyaHerbalHub?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a proven business opportunity with unparalleled support and earning potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to launch your wellness business
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-bounce">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from distributors who've transformed their lives with PriyaHerbalHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-center">{testimonial.name}</CardTitle>
                  <CardDescription className="text-center">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic text-center">"{testimonial.quote}"</p>
                  <div className="text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      ⭐ {testimonial.achievement}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of successful distributors building financial freedom while making a positive impact on lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="btn-glow text-lg px-8">
                <Link to="/contact">
                  Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                <Link to="/resources">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;