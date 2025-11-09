import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-display font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <p className="mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p>
                At The Grand Horizon Resort, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Payment and billing information</li>
                <li>Reservation details and preferences</li>
                <li>Communication preferences</li>
                <li>Feedback and correspondence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your reservations and provide our services</li>
                <li>Communicate with you about your stay</li>
                <li>Send promotional offers and updates (with your consent)</li>
                <li>Improve our services and guest experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or serving you, as long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Cookies and Tracking
              </h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. Some features of our website may not function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="pl-6">
                <p>The Grand Horizon Resort</p>
                <p>Beach Road, Goa, India</p>
                <p>Email: info@grandhorizonresort.in</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
