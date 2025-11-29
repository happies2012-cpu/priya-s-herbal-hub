import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const productsByType = [
    { category: "Shakes & Smoothies", icon: "🥤", count: 12, products: ["Formula 1 Shake", "Protein Drink Mix", "PDM Powder"] },
    { category: "Teas & Beverages", icon: "🍵", count: 8, products: ["Herbal Tea Concentrate", "Aloe Drink", "Energy Tea"] },
    { category: "Vitamins & Supplements", icon: "💊", count: 15, products: ["Multivitamin Complex", "Omega-3", "Probiotic Plus"] },
    { category: "Skin Care", icon: "✨", count: 10, products: ["Herbal Aloe Gel", "Radiant C Serum", "Night Recovery"] },
    { category: "Body & Hair Care", icon: "🧴", count: 7, products: ["Body Wash", "Shampoo", "Hair Conditioner"] },
  ];

  const productsByNeed = [
    { category: "Healthy Weight", icon: "⚖️", count: 18, description: "Meal replacements and supplements for weight management" },
    { category: "Protein Boosters", icon: "💪", count: 10, description: "High-quality protein supplements for muscle building" },
    { category: "Sports Performance", icon: "🏃", count: 12, description: "Pre and post-workout nutrition for athletes" },
    { category: "Daily Nutrition", icon: "🥗", count: 20, description: "Essential vitamins and minerals for overall health" },
    { category: "Immune Support", icon: "🛡️", count: 8, description: "Boost your body's natural defense system" },
    { category: "Stress & Sleep", icon: "😌", count: 6, description: "Natural solutions for relaxation and better sleep" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg opacity-90">
              Explore our comprehensive range of premium herbal nutrition products designed to support your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="type" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="type" className="text-lg">Browse by Type</TabsTrigger>
              <TabsTrigger value="need" className="text-lg">Browse by Need</TabsTrigger>
            </TabsList>

            <TabsContent value="type" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsByType.map((category, index) => (
                  <Card key={index} className="hover-lift cursor-pointer group">
                    <CardHeader>
                      <div className="text-5xl mb-4">{category.icon}</div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                      <CardDescription>{category.count} Products</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {category.products.map((product, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {product}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        View All
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="need" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsByNeed.map((category, index) => (
                  <Card key={index} className="hover-lift cursor-pointer group">
                    <CardHeader>
                      <div className="text-5xl mb-4">{category.icon}</div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                      <CardDescription>{category.count} Products</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        Explore Solutions
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our wellness consultants are here to help you find the perfect products for your goals.
            </p>
            <Button asChild size="lg" className="btn-glow">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;