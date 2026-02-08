import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Gift, Heart } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      id: "ramadan-special", title: "Ramadan Special Package", discount: "25% OFF",
      description: "Experience the spirit of Ramadan at our resort. Enjoy special Iftar and Suhoor dining, spa treatments, and exclusive discounts.",
      validity: "Valid during Ramadan season",
      includes: ["25% discount on room rates", "Complimentary Iftar & Suhoor buffet", "SAR 500 spa credit per stay", "Late checkout until 4 PM"],
      badge: "POPULAR", icon: Gift,
    },
    {
      id: "romantic-getaway", title: "Desert Romance Escape", discount: "Special Package",
      description: "Create unforgettable memories with your loved one. This package includes 2 nights accommodation, romantic dinner, and couples spa.",
      validity: "Valid year-round",
      includes: ["2 nights in Royal Desert Suite", "Private beachside dinner for two", "Couples hammam & massage (90 min)", "Arabic sweets & dates on arrival", "Rose petal room decoration"],
      badge: "ROMANTIC", icon: Heart,
    },
    {
      id: "family-vacation", title: "Family Adventure Deal", discount: "Kids Stay Free",
      description: "Perfect for family getaways! Children under 12 stay free. Includes family activities and dining options.",
      validity: "Valid except peak season",
      includes: ["Kids under 12 stay free", "Complimentary family breakfast", "Access to Kids' Club", "Family pool access", "10% off on dining"],
      badge: "FAMILY", icon: Users,
    },
    {
      id: "early-bird", title: "Early Bird Special", discount: "15% OFF",
      description: "Book 60 days in advance and save 15% on your stay. Perfect for planners who want the best rates.",
      validity: "Book 60+ days in advance",
      includes: ["15% discount on room rates", "Free room upgrade (subject to availability)", "Flexible cancellation up to 7 days", "Welcome Arabic coffee & dates"],
      badge: "SAVE MORE", icon: Calendar,
    },
    {
      id: "extended-stay", title: "Extended Stay Offer", discount: "4th Night Free",
      description: "Stay longer and save more! Book 3 nights and get your 4th night absolutely free. Ideal for exploring Saudi Arabia.",
      validity: "Valid for 4+ night stays",
      includes: ["4th night complimentary", "Daily breakfast included", "Complimentary airport transfers", "10% spa discount"],
      badge: "BEST VALUE", icon: Gift,
    },
    {
      id: "luxury-experience", title: "Royal Experience", discount: "Premium Package",
      description: "Indulge in ultimate luxury with our Presidential Villa stay, including butler service and exclusive dining experiences.",
      validity: "Valid year-round",
      includes: ["3 nights in Presidential Palace Villa", "Dedicated butler service", "Private chef dinner experience", "Unlimited spa treatments", "Luxury car airport transfers"],
      badge: "EXCLUSIVE", icon: Gift,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Exclusive Offers</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">Special packages for your perfect Arabian getaway</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover:shadow-luxury transition-luxury">
                <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <offer.icon size={24} />
                    <span className="font-bold text-xl">{offer.discount}</span>
                  </div>
                  <Badge variant="secondary" className="bg-white text-primary">{offer.badge}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <p className="text-sm font-semibold text-primary mb-4">{offer.validity}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-2">
                      {offer.includes.map((item, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <Link to={`/book-now?offer=${offer.id}`}>Book This Offer</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">Terms & Conditions</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>• All offers are subject to availability and may be withdrawn without prior notice.</p>
            <p>• Offers cannot be combined with other promotions unless specifically stated.</p>
            <p>• Advance booking and full payment may be required for certain packages.</p>
            <p>• Cancellation policies vary by offer. Please review terms before booking.</p>
            <p>• Blackout dates may apply during peak seasons and holidays.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Questions About Our Offers?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Our reservations team is here to help you find the perfect package.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link to="/contact">Contact Us</Link></Button>
            <Button asChild size="lg" variant="outline"><a href="tel:+966126543210">Call: +966 12 654 3210</a></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;