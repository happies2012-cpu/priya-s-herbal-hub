import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Disclaimer = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    
    {/* Hero */}
    <section className="gradient-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
        <p className="text-xl opacity-90">Important information about our products and services</p>
      </div>
    </section>

    <div className="container mx-auto px-4 py-16">
      {/* Important Notice */}
      <Card className="mb-12 border-destructive/50 bg-destructive/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Important Health Notice</h2>
              <p className="text-muted-foreground">
                The products sold through PriyaHerbalHub are nutritional supplements and are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new supplement regimen, especially if you have existing health conditions or are taking medications.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <h2>General Disclaimer</h2>
        <p>
          The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
        </p>

        <h2>Product Disclaimers</h2>
        <h3>Nutritional Supplements</h3>
        <p>
          Our products are nutritional supplements designed to complement a balanced diet and healthy lifestyle. They are NOT medicines and should not be used as a substitute for medical treatment. Results may vary from person to person.
        </p>

        <h3>Weight Management Products</h3>
        <p>
          Weight loss results vary depending on individual factors including starting weight, diet, exercise, and consistency of product use. The testimonials and before/after images on this website are not guarantees of results. A balanced diet and regular exercise are essential for achieving and maintaining weight loss goals.
        </p>

        <h3>Sports Nutrition Products</h3>
        <p>
          Sports nutrition products are designed to support athletic performance and recovery. They should be used as part of a well-balanced diet and exercise program. Consult a healthcare professional before use, especially if you are a competitive athlete subject to drug testing.
        </p>

        <h3>Skincare Products</h3>
        <p>
          Our skincare products are formulated with quality ingredients but may not be suitable for all skin types. We recommend performing a patch test before full application. Discontinue use if irritation occurs.
        </p>

        <h2>Health Disclaimers</h2>
        <h3>Consult Your Healthcare Provider</h3>
        <p>
          Before using any of our products, we recommend consulting with a qualified healthcare professional, especially if you:
        </p>
        <ul>
          <li>Are pregnant or nursing</li>
          <li>Have any medical conditions</li>
          <li>Are taking prescription medications</li>
          <li>Have food allergies or sensitivities</li>
          <li>Are under 18 years of age</li>
        </ul>

        <h3>Allergies and Sensitivities</h3>
        <p>
          Some products may contain allergens including but not limited to soy, milk, gluten, and tree nuts. Please review ingredient lists carefully and consult product labels for complete allergen information.
        </p>

        <h2>Testimonials Disclaimer</h2>
        <p>
          The testimonials displayed on this website are from real customers who have used our products. However, individual results may vary. Testimonials are personal experiences and are not intended to represent or guarantee that anyone will achieve the same or similar results.
        </p>

        <h2>Income Disclaimer</h2>
        <p>
          The business opportunity presented on this website involves becoming an independent distributor. Income potential varies significantly based on individual effort, skill, and market conditions. We make no guarantees of income or success. Most distributors do not earn significant income, and success requires consistent effort and dedication.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites. These links are provided for convenience only and do not signify endorsement. We have no control over the content, privacy policies, or practices of any third-party sites.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          We strive to provide accurate product information, pricing, and availability. However, errors may occur. We reserve the right to correct any errors and update information without prior notice.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, PriyaHerbalHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
        </p>

        <h2>Changes to This Disclaimer</h2>
        <p>
          We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of any changes.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this disclaimer, please contact us at legal@priyaherbalhub.com.
        </p>
      </div>
    </div>

    <Footer />
  </div>
);

export default Disclaimer;
