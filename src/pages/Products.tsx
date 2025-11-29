import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our most popular wellness solutions</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 8).map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all">
                <Link to={`/products/${product.slug}`}>
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="uppercase text-xs">
                      {product.type}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <Link to={`/products/${product.slug}`}>
                    <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <Link to={`/products/${product.slug}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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