import { Award, Globe, Heart, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import brandIcon from "@/assets/priya-brand-icon.svg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Wellness First",
      description: "We prioritize your health and wellbeing above all else, offering only the highest quality products.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Operating in 90+ countries, we're committed to making wellness accessible to everyone.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our thriving community of distributors and customers supports each other's success.",
    },
    {
      icon: Award,
      title: "Science-Backed",
      description: "All our products are developed using the latest nutritional science and research.",
    },
  ];

  const team = [
    { name: "Dr. Sarah Chen", role: "Chief Nutritionist", specialty: "Clinical Nutrition" },
    { name: "Dr. Michael Torres", role: "Wellness Director", specialty: "Sports Medicine" },
    { name: "Dr. Priya Sharma", role: "Research Lead", specialty: "Herbal Medicine" },
    { name: "Dr. James Wilson", role: "Product Development", specialty: "Food Science" },
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Started with a vision to transform lives through herbal nutrition" },
    { year: "2012", event: "Global Expansion", description: "Reached 50 countries worldwide" },
    { year: "2018", event: "50,000 Customers", description: "Celebrated serving our 50,000th customer" },
    { year: "2024", event: "Innovation Award", description: "Recognized for excellence in herbal nutrition science" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PriyaHerbalHub</h1>
            <p className="text-xl opacity-90">
              For over 15 years, we've been committed to helping people achieve their wellness goals through premium herbal nutrition and personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At PriyaHerbalHub, we believe everyone deserves access to premium wellness products and the support needed to achieve their health goals. Our mission is to empower individuals worldwide to take control of their health through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Target className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Premium Quality Products</h3>
                    <p className="text-muted-foreground">Science-backed herbal nutrition formulated with the finest ingredients</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Support</h3>
                    <p className="text-muted-foreground">Expert guidance and community backing every step of your journey</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Sustainable Success</h3>
                    <p className="text-muted-foreground">Long-term solutions that create lasting lifestyle changes</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img src={brandIcon} alt="PriyaHerbalHub Brand" className="w-full max-w-md mx-auto animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="pt-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform lives through wellness
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2 group-hover:scale-125 transition-bounce"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the nutrition and wellness experts dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;