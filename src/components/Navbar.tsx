import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productsByType = [
    { name: "Shakes & Smoothies", href: "/products/shakes" },
    { name: "Teas & Beverages", href: "/products/teas" },
    { name: "Vitamins & Supplements", href: "/products/vitamins" },
    { name: "Skin Care", href: "/products/skincare" },
    { name: "Body & Hair Care", href: "/products/bodycare" },
  ];

  const productsByNeed = [
    { name: "Healthy Weight", href: "/products/weight" },
    { name: "Protein Boosters", href: "/products/protein" },
    { name: "Sports Performance", href: "/products/performance" },
    { name: "Daily Nutrition", href: "/products/nutrition" },
    { name: "Immune Support", href: "/products/immune" },
    { name: "Stress & Sleep", href: "/products/wellness" },
  ];

  const goals = [
    { name: "Healthy Weight", href: "/goals/weight" },
    { name: "Fitness & Performance", href: "/goals/fitness" },
    { name: "Daily Nutrition & Health", href: "/goals/nutrition" },
    { name: "Skin & Body Care", href: "/goals/skincare" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-bounce group-hover:scale-110">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-primary">PriyaHerbalHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Achieve Your Goals */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-primary transition-smooth">
                    Achieve Your Goals
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {goals.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Products */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-primary transition-smooth">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-4 p-4">
                      <div>
                        <h3 className="mb-2 text-sm font-semibold text-muted-foreground">By Type</h3>
                        <ul className="space-y-2">
                          {productsByType.map((item) => (
                            <li key={item.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.href}
                                  className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium">{item.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-2 text-sm font-semibold text-muted-foreground">By Need</h3>
                        <ul className="space-y-2">
                          {productsByNeed.map((item) => (
                            <li key={item.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.href}
                                  className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium">{item.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Other Menu Items */}
                <NavigationMenuItem>
                  <Link to="/resources" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Wellness Resources
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/business" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Business Opportunity
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild variant="default" className="hidden lg:inline-flex btn-glow">
              <Link to="/distributor-login">Distributor Login</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fade-in">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wellness Resources
            </Link>
            <Link
              to="/business"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Business Opportunity
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-4">
              <Link to="/distributor-login" onClick={() => setMobileMenuOpen(false)}>
                Distributor Login
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;