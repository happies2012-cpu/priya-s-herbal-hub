import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@priyaherbalhub.com", "support@priyaherbalhub.com"],
      description: "24/7 Support",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Wellness Avenue", "Health City, HC 12345"],
      description: "Visit by appointment",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9am - 6pm", "Sat: 10am - 4pm"],
      description: "Closed on Sundays",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg opacity-90">
              Have questions about our products or business opportunity? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                  <p className="text-xs text-primary mt-2">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <label className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" required />
                    <span className="text-sm text-muted-foreground">
                      I agree to receive communications from PriyaHerbalHub about products, services, and business opportunities.
                    </span>
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full btn-glow">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Free Wellness Consultation</CardTitle>
                  <CardDescription>
                    Schedule a complimentary consultation with our wellness experts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our certified nutritionists and wellness consultants are available to help you:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>Choose the right products for your goals</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>Create a personalized wellness plan</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>Learn about business opportunities</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>Get answers to product questions</span>
                    </li>
                  </ul>
                  <Button className="w-full btn-glow">Book Consultation</Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Become a Distributor</CardTitle>
                  <CardDescription>
                    Interested in the business opportunity?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Join thousands of successful distributors building their wellness business. Learn how you can:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>Earn unlimited income potential</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>Work flexible hours from anywhere</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>Access comprehensive training</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>Join a supportive community</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium gradient-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">24/7 Customer Support</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Our dedicated support team is always here to assist you with any questions or concerns.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">support@priyaherbalhub.com</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;