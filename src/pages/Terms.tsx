import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-muted-foreground">Last updated: December 2024</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
        <p>By accessing PriyaHerbalHub, you agree to be bound by these terms of service and all applicable laws.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Products and Pricing</h2>
        <p>All prices are in INR. We reserve the right to modify prices without prior notice. Products are subject to availability.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping and Returns</h2>
        <p>We offer free shipping on orders over ₹2,000. Returns accepted within 30 days of purchase for unused products.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p>PriyaHerbalHub is not liable for any indirect, incidental, or consequential damages arising from product use.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Terms;
