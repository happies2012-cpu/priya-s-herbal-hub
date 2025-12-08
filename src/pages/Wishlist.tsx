import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">My Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Save items you love for later</p>
            <Button asChild><Link to="/products">Browse Products</Link></Button>
          </div>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <Button variant="outline" onClick={clearWishlist}>Clear All</Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlist.map(product => (
                <Card key={product.id} className="overflow-hidden">
                  <Link to={`/products/${product.slug}`}>
                    <div className="aspect-square bg-muted">
                      <img src={product.mainImage} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <h3 className="font-semibold line-clamp-2 mb-2">{product.name}</h3>
                    <p className="text-xl font-bold text-primary mb-4">₹{product.price.toLocaleString()}</p>
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm" onClick={() => addToCart(product)}>
                        <ShoppingCart className="w-4 h-4 mr-1" /> Add to Cart
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => removeFromWishlist(product.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
