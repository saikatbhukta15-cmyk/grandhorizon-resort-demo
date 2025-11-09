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
      id: "winter-escape",
      title: "Winter Escape Package",
      discount: "20% OFF",
      description: "Experience the magic of winter by the sea. Enjoy 20% off on room bookings for December stays, including complimentary breakfast and spa credits.",
      validity: "Valid: December 1-31, 2025",
      includes: [
        "20% discount on room rates",
        "Complimentary daily breakfast for two",
        "₹2,000 spa credit per stay",
        "Late checkout (subject to availability)",
      ],
      badge: "POPULAR",
      icon: Gift,
    },
    {
      id: "romantic-getaway",
      title: "Romantic Getaway",
      discount: "Special Package",
      description: "Create unforgettable memories with your loved one. This package includes 2 nights accommodation, romantic dinner, and couples spa treatment.",
      validity: "Valid year-round",
      includes: [
        "2 nights in Deluxe Ocean Suite",
        "Romantic beachside dinner for two",
        "Couples massage (90 minutes)",
        "Champagne and chocolates on arrival",
        "Rose petal decoration",
      ],
      badge: "ROMANTIC",
      icon: Heart,
    },
    {
      id: "family-vacation",
      title: "Family Vacation Deal",
      discount: "Kids Stay Free",
      description: "Perfect for family getaways! Children under 12 stay free when using existing bedding. Includes family-friendly activities and dining.",
      validity: "Valid except peak season",
      includes: [
        "Kids under 12 stay free",
        "Complimentary breakfast for family",
        "Access to Kids' Club activities",
        "Family pool access",
        "10% off on F&B",
      ],
      badge: "FAMILY",
      icon: Users,
    },
    {
      id: "early-bird",
      title: "Early Bird Special",
      discount: "15% OFF",
      description: "Book 60 days in advance and save 15% on your stay. Perfect for planners who want the best rates and guaranteed availability.",
      validity: "Book 60+ days in advance",
      includes: [
        "15% discount on room rates",
        "Free room upgrade (subject to availability)",
        "Flexible cancellation up to 7 days",
        "Welcome drink on arrival",
      ],
      badge: "SAVE MORE",
      icon: Calendar,
    },
    {
      id: "extended-stay",
      title: "Extended Stay Offer",
      discount: "4th Night Free",
      description: "Stay longer and save more! Book 3 nights and get your 4th night absolutely free. Ideal for exploring Goa at a leisurely pace.",
      validity: "Valid for 4+ night stays",
      includes: [
        "4th night complimentary",
        "Daily breakfast included",
        "Complimentary airport transfers",
        "10% spa discount",
      ],
      badge: "BEST VALUE",
      icon: Gift,
    },
    {
      id: "luxury-escape",
      title: "Luxury Experience",
      discount: "Premium Package",
      description: "Indulge in ultimate luxury with our Presidential Villa stay, including butler service, private pool, and exclusive dining experiences.",
      validity: "Valid year-round",
      includes: [
        "3 nights in Presidential Villa",
        "Dedicated butler service",
        "Private chef dinner experience",
        "Unlimited spa treatments",
        "Luxury car airport transfers",
      ],
      badge: "EXCLUSIVE",
      icon: Gift,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Exclusive Offers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Special packages designed for your perfect getaway
          </p>
        </div>
      </section>

      {/* Offers Grid */}
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
                  <Badge variant="secondary" className="bg-white text-primary">
                    {offer.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary mb-2">
                      {offer.validity}
                    </p>
                  </div>

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

      {/* Terms Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">
            Terms & Conditions
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              • All offers are subject to availability and may be withdrawn or modified without prior notice.
            </p>
            <p>
              • Offers cannot be combined with other promotions or discounts unless specifically stated.
            </p>
            <p>
              • Advance booking and full payment may be required for certain packages.
            </p>
            <p>
              • Cancellation policies vary by offer. Please review specific package terms before booking.
            </p>
            <p>
              • Blackout dates may apply during peak seasons and holidays.
            </p>
            <p>
              • For detailed terms and conditions, please contact our reservations team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Have Questions About Our Offers?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our reservations team is here to help you find the perfect package for your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+919876543210">Call: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
