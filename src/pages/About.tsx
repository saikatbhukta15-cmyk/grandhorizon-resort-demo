import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Leaf, Users } from "lucide-react";
import exteriorImage from "@/assets/resort-exterior.jpg";
import heroImage from "@/assets/hero-resort.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Exceptional Hospitality",
      description: "We believe in creating memorable experiences through personalized service and genuine care.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "From accommodations to dining, we maintain the highest standards in everything we offer.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and preserving the natural beauty of Goa.",
    },
    {
      icon: Users,
      title: "Guest-Centric",
      description: "Your comfort and satisfaction are at the heart of everything we do.",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "General Manager",
      description: "With over 20 years in luxury hospitality, Rajesh ensures every guest receives world-class service.",
      image: "https://i.pravatar.cc/300?img=33",
    },
    {
      name: "Priya Sharma",
      role: "Director of Operations",
      description: "Priya oversees daily operations with precision, maintaining our exceptional standards.",
      image: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Chef Vikram Singh",
      role: "Executive Chef",
      description: "Chef Vikram brings culinary excellence, crafting exquisite dishes from local and international cuisine.",
      image: "https://i.pravatar.cc/300?img=12",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About The Grand Horizon Resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Welcome to The Grand Horizon
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Where luxury meets paradise on the shores of Goa
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={exteriorImage}
                alt="Resort History"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2018, The Grand Horizon Resort has quickly established itself as Goa's premier luxury destination. Our vision was simple yet ambitious: to create a haven where discerning travelers can experience the perfect blend of modern luxury and natural beauty.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Nestled along Goa's pristine coastline, our resort spans 15 acres of beautifully landscaped gardens and offers direct access to a private beach. Every detail has been carefully crafted to provide an unparalleled experience.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we proudly serve guests from around the world, offering them a sanctuary of tranquility, exceptional service, and unforgettable memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Our Promise of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars that define our commitment to exceptional hospitality
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Dedicated professionals committed to your exceptional experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-luxury">
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-display font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <Leaf size={48} className="mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold mb-6">
            Committed to Sustainability
          </h2>
          <p className="text-lg mb-6">
            We believe luxury and environmental responsibility go hand in hand. Our resort implements numerous eco-friendly practices including solar energy, water conservation, waste reduction, and support for local communities.
          </p>
          <p className="text-lg">
            By choosing The Grand Horizon Resort, you're supporting sustainable tourism that protects Goa's natural beauty for future generations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
