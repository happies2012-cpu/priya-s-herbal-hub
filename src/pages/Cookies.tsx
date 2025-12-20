import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <h1>Cookie Policy</h1>
        <p className="lead">Last updated: December 2024</p>

        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
        </p>

        <h2>How We Use Cookies</h2>
        <p>PriyaHerbalHub uses cookies for the following purposes:</p>

        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
        </p>
        <ul>
          <li>Session management</li>
          <li>Shopping cart functionality</li>
          <li>User authentication</li>
          <li>Security features</li>
        </ul>

        <h3>Preference Cookies</h3>
        <p>
          These cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language or region.
        </p>
        <ul>
          <li>Language preferences</li>
          <li>Theme settings (dark/light mode)</li>
          <li>Regional preferences</li>
        </ul>

        <h3>Analytics Cookies</h3>
        <p>
          We use analytics cookies to understand how visitors interact with our website. This helps us improve our site and services.
        </p>
        <ul>
          <li>Google Analytics</li>
          <li>Page view statistics</li>
          <li>Traffic sources</li>
          <li>User behavior patterns</li>
        </ul>

        <h3>Marketing Cookies</h3>
        <p>
          These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
        </p>
        <ul>
          <li>Facebook Pixel</li>
          <li>Google Ads</li>
          <li>Retargeting campaigns</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. You can:
        </p>
        <ul>
          <li>View cookies stored on your computer</li>
          <li>Delete cookies</li>
          <li>Block cookies from being set</li>
          <li>Set preferences for certain websites</li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. The third-party service providers include:
        </p>
        <ul>
          <li>Google (Analytics & Ads)</li>
          <li>Facebook</li>
          <li>Payment processors</li>
          <li>Social media platforms</li>
        </ul>

        <h2>Cookie Retention</h2>
        <p>
          Different cookies have different retention periods:
        </p>
        <ul>
          <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
          <li><strong>Persistent cookies:</strong> Remain until their expiration date or until deleted</li>
          <li><strong>Analytics cookies:</strong> Typically retained for 2 years</li>
        </ul>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at:
        </p>
        <ul>
          <li>Email: privacy@priyaherbalhub.com</li>
          <li>Phone: +91 98765 43210</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
);

export default Cookies;
