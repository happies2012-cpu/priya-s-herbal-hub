import { useParams, Link } from "react-router-dom";
import { ArrowRight, Target, Zap, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const goalData: Record<string, { title: string; description: string; icon: any; products: string[] }> = {
  weight: {
    title: "Healthy Weight",
    description: "Achieve your weight management goals with our scientifically-formulated nutrition programs.",
    icon: Target,
    products: ["weight-management", "protein"]
  },
  fitness: {
    title: "Fitness & Performance",
    description: "Enhance your athletic performance with premium sports nutrition products.",
    icon: Zap,
    products: ["sports", "protein"]
  },
  nutrition: {
    title: "Daily Nutrition & Health",
    description: "Support your daily wellness with essential vitamins and supplements.",
    icon: Heart,
    products: ["daily-nutrition", "immune", "digestive"]
  },
  skincare: {
    title: "Skin & Body Care",
    description: "Nourish your skin and body with our herbal beauty collection.",
    icon: Sparkles,
    products: ["skincare", "bodycare"]
  }
};

const GoalPage = () => {
  const { type } = useParams<{ type: string }>();
  const goal = goalData[type || ""] || goalData.weight;
  const Icon = goal.icon;
  
  const relevantProducts = products.filter(p => goal.products.includes(p.category)).slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{goal.title}</h1>
            </div>
            <p className="text-xl opacity-90 mb-8">{goal.description}</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/products">Shop Products <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recommended Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relevantProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/products/${product.slug}`}>
                  <div className="aspect-square bg-muted">
                    <img src={product.mainImage} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link to={`/products/${product.slug}`}>
                    <h3 className="font-semibold line-clamp-2 hover:text-primary">{product.name}</h3>
                  </Link>
                  <p className="text-xl font-bold text-primary mt-2">₹{product.price.toLocaleString()}</p>
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

export default GoalPage;
