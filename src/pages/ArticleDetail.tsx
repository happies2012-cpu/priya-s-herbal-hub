import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const articles = [
  {
    slug: "10-superfoods-boost-immunity",
    title: "10 Superfoods to Boost Your Immunity Naturally",
    category: "Nutrition",
    author: "Dr. Priya Sharma",
    date: "November 25, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    excerpt: "Discover the power of nature's finest ingredients for a stronger immune system.",
    content: `
      <p>In today's fast-paced world, maintaining a strong immune system is more important than ever. Nature has provided us with incredible foods that can help strengthen our body's natural defenses.</p>

      <h2>1. Turmeric - The Golden Spice</h2>
      <p>Turmeric contains curcumin, a powerful anti-inflammatory compound that has been used in Ayurvedic medicine for centuries. Adding turmeric to your daily diet can help reduce inflammation and boost immune function.</p>

      <h2>2. Ginger - Nature's Medicine</h2>
      <p>Ginger is packed with antioxidants and has powerful anti-inflammatory properties. It can help reduce nausea, fight infections, and support overall immune health.</p>

      <h2>3. Citrus Fruits</h2>
      <p>Oranges, lemons, and grapefruits are rich in Vitamin C, which is essential for immune function. Regular consumption can help your body fight off infections more effectively.</p>

      <h2>4. Spinach</h2>
      <p>This leafy green is packed with vitamins A, C, and E, as well as antioxidants and beta carotene. These nutrients support immune system function and help protect cells from damage.</p>

      <h2>5. Almonds</h2>
      <p>Rich in Vitamin E, almonds are excellent for maintaining a healthy immune system. Just a handful a day provides your recommended daily intake of this powerful antioxidant.</p>

      <h2>6. Yogurt</h2>
      <p>Probiotic-rich yogurt helps maintain gut health, which is crucial for immune function. Look for yogurts with live and active cultures for maximum benefit.</p>

      <h2>7. Garlic</h2>
      <p>Garlic has been used for centuries to fight infections. It contains allicin, a compound that gives garlic its immune-boosting properties.</p>

      <h2>8. Green Tea</h2>
      <p>Packed with antioxidants and amino acids, green tea can enhance immune function and protect against oxidative stress.</p>

      <h2>9. Papaya</h2>
      <p>This tropical fruit contains papain, an enzyme with anti-inflammatory effects. It's also rich in Vitamin C and potassium.</p>

      <h2>10. Sunflower Seeds</h2>
      <p>These seeds are full of nutrients including Vitamin E, phosphorus, and magnesium, all of which support immune health.</p>

      <h2>Conclusion</h2>
      <p>Incorporating these superfoods into your daily diet can significantly boost your immune system. Remember, a balanced diet combined with regular exercise and adequate sleep is the foundation of good health.</p>
    `,
    relatedProducts: ["formula-1-shake-vanilla", "herbal-tea-concentrate", "aloe-concentrate"],
  },
  {
    slug: "sustainable-weight-management",
    title: "The Science Behind Sustainable Weight Management",
    category: "Weight Loss",
    author: "Dr. Rajesh Kumar",
    date: "November 22, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    excerpt: "Learn evidence-based strategies for long-term weight loss success.",
    content: `
      <p>Weight management is not about quick fixes or crash diets. It's about understanding the science behind how our bodies work and making sustainable lifestyle changes.</p>

      <h2>Understanding Your Metabolism</h2>
      <p>Your metabolism is the process by which your body converts food into energy. Factors like age, muscle mass, and activity level all affect your metabolic rate.</p>

      <h2>The Role of Protein</h2>
      <p>Protein is essential for maintaining muscle mass during weight loss. Adequate protein intake helps preserve lean tissue and keeps you feeling fuller longer.</p>

      <h2>Caloric Balance</h2>
      <p>Weight management ultimately comes down to the balance between calories consumed and calories burned. Creating a moderate caloric deficit is key to sustainable weight loss.</p>

      <h2>The Importance of Exercise</h2>
      <p>Regular physical activity not only burns calories but also builds muscle, which increases your resting metabolic rate. Aim for a combination of cardio and strength training.</p>

      <h2>Sleep and Stress</h2>
      <p>Poor sleep and chronic stress can disrupt hormones that regulate hunger and metabolism. Prioritizing rest and stress management is crucial for weight management success.</p>

      <h2>Meal Replacement Strategy</h2>
      <p>Nutritionally balanced meal replacements can be an effective tool for controlling calorie intake while ensuring you get essential nutrients.</p>

      <h2>Conclusion</h2>
      <p>Sustainable weight management requires a holistic approach that includes proper nutrition, regular exercise, adequate sleep, and stress management. Focus on progress, not perfection.</p>
    `,
    relatedProducts: ["formula-1-shake-chocolate", "total-control", "cell-u-loss"],
  },
  {
    slug: "pre-post-workout-nutrition",
    title: "Pre and Post-Workout Nutrition Guide",
    category: "Fitness",
    author: "Coach Amit Joshi",
    date: "November 20, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    excerpt: "Optimize your performance with proper nutrition timing and choices.",
    content: `
      <p>What you eat before and after your workout can significantly impact your performance, recovery, and results. Here's your complete guide to workout nutrition.</p>

      <h2>Pre-Workout Nutrition</h2>
      <p>Eating the right foods before exercise provides your muscles with the fuel they need for optimal performance.</p>

      <h3>Timing</h3>
      <p>Eat a balanced meal 2-3 hours before your workout, or a smaller snack 30-60 minutes before if you're short on time.</p>

      <h3>What to Eat</h3>
      <p>Focus on carbohydrates for energy and moderate protein. Good options include oatmeal with banana, whole grain toast with peanut butter, or a protein shake.</p>

      <h2>During Workout</h2>
      <p>For workouts lasting over an hour, consider consuming easily digestible carbs and electrolytes to maintain energy and hydration.</p>

      <h2>Post-Workout Nutrition</h2>
      <p>After exercise, your muscles are primed to absorb nutrients for recovery and growth.</p>

      <h3>The Anabolic Window</h3>
      <p>While the timing window is more flexible than once thought, consuming protein and carbs within a few hours of exercise supports optimal recovery.</p>

      <h3>Protein for Recovery</h3>
      <p>Aim for 20-40 grams of high-quality protein after your workout to stimulate muscle protein synthesis.</p>

      <h2>Hydration</h2>
      <p>Proper hydration before, during, and after exercise is essential for performance and recovery. Drink water throughout the day and consider electrolyte drinks for intense sessions.</p>
    `,
    relatedProducts: ["herbalife24-rebuild-strength", "herbalife24-hydrate", "protein-drink-mix"],
  },
];

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/resources">Back to Resources</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((p) =>
    article.relatedProducts?.includes(p.slug)
  );

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <Button variant="ghost" asChild className="mb-4">
                <Link to="/resources">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
                </Link>
              </Button>

              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Article Content */}
          <article
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {relatedProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover-lift">
                    <Link to={`/products/${product.slug}`}>
                      <div className="aspect-square bg-muted">
                        <img
                          src={product.mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-4">
                      <Link to={`/products/${product.slug}`}>
                        <h3 className="font-medium hover:text-primary line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-lg font-bold text-primary mt-2">
                        ₹{product.price.toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-12" />

          {/* Other Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherArticles.map((a) => (
                <Card key={a.slug} className="overflow-hidden hover-lift">
                  <Link to={`/resources/${a.slug}`}>
                    <div className="aspect-video">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {a.category}
                    </Badge>
                    <Link to={`/resources/${a.slug}`}>
                      <h3 className="font-semibold hover:text-primary line-clamp-2">
                        {a.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                      <BookOpen className="h-3 w-3" />
                      {a.readTime}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
