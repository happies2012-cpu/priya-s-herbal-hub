import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCompare } from "@/contexts/CompareContext";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { 
  ShoppingCart, Heart, Star, Minus, Plus, Check, ChevronLeft,
  Truck, Shield, RotateCcw, Share2, GitCompare, ChevronRight
} from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const { addToCompare, isInCompare } = useCompare();
  const product = getProductBySlug(slug || "");
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button asChild><Link to="/products">Browse All Products</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);
  const isFavorite = isInWishlist(product.id);
  const isComparing = isInCompare(product.id);

  const handleAddToCart = () => addToCart(product, quantity);
  const toggleWishlist = () => isFavorite ? removeFromWishlist(product.id) : addToWishlist(product);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border relative group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-destructive text-lg px-3 py-1">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="uppercase">{product.type}</Badge>
                <Badge variant="secondary" className="uppercase">{product.category}</Badge>
                {product.inStock ? (
                  <Badge variant="default" className="gap-1 bg-green-600"><Check className="w-3 h-3" /> In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`} />
                  ))}
                  <span className="ml-2 font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 1 && (
              <div>
                <Label className="text-sm font-medium mb-2 block">Flavor / Variant</Label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, idx) => (
                    <Button
                      key={variant}
                      variant={selectedVariant === idx ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedVariant(idx)}
                    >
                      {variant}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button className="flex-1 h-12 text-lg" onClick={handleAddToCart} disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12" onClick={toggleWishlist}>
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : ""}`} />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12" onClick={() => addToCompare(product)}>
                <GitCompare className={`h-5 w-5 ${isComparing ? "text-primary" : ""}`} />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center space-y-2">
                <Truck className="w-8 h-8 mx-auto text-primary" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Orders over ₹2000</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="w-8 h-8 mx-auto text-primary" />
                <p className="text-sm font-medium">100% Authentic</p>
                <p className="text-xs text-muted-foreground">Quality guaranteed</p>
              </div>
              <div className="text-center space-y-2">
                <RotateCcw className="w-8 h-8 mx-auto text-primary" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">Money back guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="usage">How to Use</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card><CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Key Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="secondary">{ingredient}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent></Card>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-6">
              <Card><CardContent className="pt-6">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent></Card>
            </TabsContent>
            
            <TabsContent value="nutrition" className="mt-6">
              <Card><CardContent className="pt-6">
                {product.nutritionFacts.length > 0 ? (
                  <>
                    <div className="mb-6 pb-4 border-b">
                      <p className="font-semibold">Serving Size: {product.servingSize}</p>
                      {product.servingsPerContainer > 0 && (
                        <p className="text-sm text-muted-foreground">Servings Per Container: {product.servingsPerContainer}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      {product.nutritionFacts.map((fact, index) => (
                        <div key={index} className="flex justify-between py-2 border-b last:border-0">
                          <span className="font-medium">{fact.name}</span>
                          <div className="flex gap-4">
                            <span className="text-muted-foreground">{fact.amount}</span>
                            {fact.dailyValue && <span className="text-muted-foreground w-16 text-right">{fact.dailyValue}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground">Nutrition information not applicable for this product.</p>
                )}
              </CardContent></Card>
            </TabsContent>
            
            <TabsContent value="usage" className="mt-6">
              <Card><CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.howToUse}</p>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <ReviewSection productId={product.id} productRating={product.rating} reviewCount={product.reviewCount} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/products/${relatedProduct.slug}`} className="group">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img src={relatedProduct.mainImage} alt={relatedProduct.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 uppercase text-xs">{relatedProduct.type}</Badge>
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{relatedProduct.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-primary">₹{relatedProduct.price.toLocaleString()}</span>
                        {relatedProduct.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">₹{relatedProduct.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

const Label = ({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={`text-sm font-medium ${className || ""}`} {...props}>{children}</label>
);

export default ProductDetail;
