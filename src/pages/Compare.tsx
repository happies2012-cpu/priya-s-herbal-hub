import { Link } from "react-router-dom";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCompare } from "@/contexts/CompareContext";
import { useCart } from "@/contexts/CartContext";

const Compare = () => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Compare Products</h1>
          {compareList.length > 0 && (
            <Button variant="outline" onClick={clearCompare}>Clear All</Button>
          )}
        </div>

        {compareList.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">Add products to compare (up to 4)</p>
            <Button asChild><Link to="/products">Browse Products</Link></Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-border p-4 bg-muted text-left">Feature</th>
                  {compareList.map(product => (
                    <th key={product.id} className="border border-border p-4 bg-muted min-w-[250px]">
                      <div className="relative">
                        <Button
                          variant="ghost" size="icon"
                          className="absolute -top-2 -right-2"
                          onClick={() => removeFromCompare(product.id)}
                        ><X className="w-4 h-4" /></Button>
                        <img src={product.mainImage} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
                        <Link to={`/products/${product.slug}`} className="font-semibold hover:text-primary">
                          {product.name}
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-4 font-medium">Price</td>
                  {compareList.map(p => (
                    <td key={p.id} className="border border-border p-4 text-center">
                      <span className="text-xl font-bold text-primary">₹{p.price.toLocaleString()}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">Category</td>
                  {compareList.map(p => (
                    <td key={p.id} className="border border-border p-4 text-center">
                      <Badge>{p.category}</Badge>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">Rating</td>
                  {compareList.map(p => (
                    <td key={p.id} className="border border-border p-4 text-center">
                      {p.rating} / 5 ({p.reviewCount} reviews)
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">Serving Size</td>
                  {compareList.map(p => (
                    <td key={p.id} className="border border-border p-4 text-center">{p.servingSize}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">Benefits</td>
                  {compareList.map(p => (
                    <td key={p.id} className="border border-border p-4">
                      <ul className="text-sm space-y-1">
                        {p.benefits.slice(0, 3).map((b, i) => <li key={i}>• {b}</li>)}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">Action</td>
                  {compareList.map(p => (
                    <td key={p.id} className="border border-border p-4 text-center">
                      <Button onClick={() => addToCart(p)}>
                        <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
