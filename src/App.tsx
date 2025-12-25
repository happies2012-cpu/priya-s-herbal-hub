import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CompareProvider } from "./contexts/CompareContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ReviewProvider } from "./contexts/ReviewContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import Login from "./pages/Login";
import GoalPage from "./pages/GoalPage";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <CompareProvider>
              <ReviewProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:slug" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/goals/:type" element={<GoalPage />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/distributor-login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Analytics />
                </BrowserRouter>
              </ReviewProvider>
            </CompareProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
