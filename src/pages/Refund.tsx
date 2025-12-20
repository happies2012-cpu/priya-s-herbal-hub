import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Package, RefreshCw, CreditCard, HelpCircle } from "lucide-react";

const Refund = () => {
  const policies = [
    {
      icon: Clock,
      title: "30-Day Return Window",
      description: "You have 30 days from the date of delivery to request a return or refund.",
    },
    {
      icon: Package,
      title: "Original Packaging Required",
      description: "Products must be returned in their original, unopened packaging for full refund.",
    },
    {
      icon: RefreshCw,
      title: "Free Returns",
      description: "We offer free return shipping for all eligible products within India.",
    },
    {
      icon: CreditCard,
      title: "Quick Refunds",
      description: "Refunds are processed within 5-7 business days after we receive your return.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Return Policy</h1>
          <p className="text-xl opacity-90">Your satisfaction is our priority</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {policies.map((policy, index) => (
            <Card key={index} className="text-center hover-lift">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <policy.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{policy.title}</h3>
                <p className="text-sm text-muted-foreground">{policy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Policy */}
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h2>Return Eligibility</h2>
          <p>To be eligible for a return, the following conditions must be met:</p>
          <ul>
            <li>The product must be unused and in the same condition that you received it</li>
            <li>The product must be in its original packaging</li>
            <li>The return request must be made within 30 days of delivery</li>
            <li>You must have a valid proof of purchase (order confirmation or invoice)</li>
          </ul>

          <h2>Non-Returnable Items</h2>
          <p>The following items cannot be returned:</p>
          <ul>
            <li>Opened or used products</li>
            <li>Products without original packaging</li>
            <li>Gift cards</li>
            <li>Downloadable products or digital content</li>
            <li>Products damaged due to misuse</li>
          </ul>

          <h2>Return Process</h2>
          <h3>Step 1: Initiate Return</h3>
          <p>
            Contact our customer service team via email at returns@priyaherbalhub.com or call +91 98765 43210. Provide your order number and reason for return.
          </p>

          <h3>Step 2: Receive Return Authorization</h3>
          <p>
            Our team will review your request and provide a Return Merchandise Authorization (RMA) number within 24-48 hours.
          </p>

          <h3>Step 3: Ship the Product</h3>
          <p>
            Pack the product securely in its original packaging. Include the RMA number on the outside of the package. We will provide a prepaid shipping label for eligible returns.
          </p>

          <h3>Step 4: Receive Refund</h3>
          <p>
            Once we receive and inspect your return, we will process your refund within 5-7 business days. The refund will be credited to your original payment method.
          </p>

          <h2>Refund Methods</h2>
          <table>
            <thead>
              <tr>
                <th>Original Payment Method</th>
                <th>Refund Method</th>
                <th>Processing Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Credit/Debit Card</td>
                <td>Original Card</td>
                <td>5-7 business days</td>
              </tr>
              <tr>
                <td>UPI</td>
                <td>UPI Account</td>
                <td>3-5 business days</td>
              </tr>
              <tr>
                <td>Net Banking</td>
                <td>Bank Account</td>
                <td>5-7 business days</td>
              </tr>
              <tr>
                <td>Cash on Delivery</td>
                <td>Bank Transfer/UPI</td>
                <td>7-10 business days</td>
              </tr>
            </tbody>
          </table>

          <h2>Damaged or Defective Products</h2>
          <p>
            If you receive a damaged or defective product, please contact us immediately with photos of the damage. We will arrange for a replacement or full refund at no additional cost to you.
          </p>

          <h2>Exchange Policy</h2>
          <p>
            We offer exchanges for products of equal or greater value (you pay the difference). To request an exchange, follow the same process as returns and indicate your preference for exchange.
          </p>

          <h2>Cancellation Policy</h2>
          <p>
            Orders can be cancelled before they are shipped. Once an order is shipped, it cannot be cancelled but can be returned following our return process.
          </p>

          <h2>Contact Us</h2>
          <p>For any questions about returns or refunds, please contact:</p>
          <ul>
            <li>Email: returns@priyaherbalhub.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Working Hours: Monday to Saturday, 9 AM to 6 PM IST</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Refund;
