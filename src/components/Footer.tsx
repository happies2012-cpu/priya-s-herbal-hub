import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-primary">PriyaHerbalHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transform your life with premium herbal nutrition and wellness products. Join thousands who've achieved their health goals with us.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/shakes" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Shakes & Smoothies</Link></li>
              <li><Link to="/products/teas" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Teas & Beverages</Link></li>
              <li><Link to="/products/vitamins" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Vitamins & Supplements</Link></li>
              <li><Link to="/products/skincare" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Skin Care</Link></li>
              <li><Link to="/products/bodycare" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Body & Hair Care</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/business" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Business Opportunity</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Wellness Resources</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Contact Us</Link></li>
              <li><Link to="/distributor-login" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Distributor Login</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>123 Wellness Ave, Health City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@priyaherbalhub.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to Newsletter</h4>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button size="sm" className="btn-glow">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PriyaHerbalHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;