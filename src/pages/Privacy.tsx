import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-muted-foreground">Last updated: December 2024</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p>We collect information you provide directly, including name, email, shipping address, and payment information when you make a purchase.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>We use your information to process orders, communicate with you, improve our services, and send promotional materials (with your consent).</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>For privacy concerns, contact us at privacy@priyaherbalhub.com</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Privacy;
