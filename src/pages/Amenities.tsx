import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import poolImage from "@/assets/amenity-pool.jpg";
import spaImage from "@/assets/amenity-spa.jpg";
import gymImage from "@/assets/amenity-gym.jpg";
import beachImage from "@/assets/amenity-beach.jpg";

const Amenities = () => {
  const amenities = [
    {
      title: "Infinity Pool",
      image: poolImage,
      description: "Our stunning infinity pool seamlessly blends with the ocean horizon. Lounge on comfortable sunbeds, enjoy refreshing cocktails from the pool bar, and watch spectacular sunsets.",
      features: [
        "Oceanfront infinity edge",
        "Pool bar & grill",
        "Cabana rentals",
        "Kids' pool area",
        "Towel service",
      ],
      hours: "6:00 AM - 10:00 PM",
    },
    {
      title: "Luxury Spa",
      image: spaImage,
      description: "Rejuvenate your body and mind at our world-class spa. Our expert therapists offer a range of treatments inspired by ancient Ayurvedic traditions and modern wellness practices.",
      features: [
        "Massage therapies",
        "Facial treatments",
        "Body scrubs & wraps",
        "Ayurvedic treatments",
        "Couples' treatment rooms",
      ],
      hours: "9:00 AM - 9:00 PM",
    },
    {
      title: "Fitness Center",
      image: gymImage,
      description: "Maintain your fitness routine in our state-of-the-art gym featuring the latest cardiovascular and strength training equipment, with panoramic ocean views.",
      features: [
        "Latest Technogym equipment",
        "Personal training sessions",
        "Yoga & meditation classes",
        "Complimentary towels & water",
        "Ocean view workout space",
      ],
      hours: "24 Hours",
    },
    {
      title: "Private Beach Access",
      image: beachImage,
      description: "Enjoy exclusive access to our pristine private beach. Soft white sand, crystal-clear waters, and attentive beach service make for the perfect tropical escape.",
      features: [
        "Beach loungers & umbrellas",
        "Water sports equipment",
        "Beach volleyball",
        "Beachside service",
        "Private cabanas",
      ],
      hours: "Sunrise to Sunset",
    },
  ];

  const additionalAmenities = [
    {
      title: "Event & Conference Halls",
      description: "Host successful events in our versatile venues with modern AV equipment and professional catering.",
    },
    {
      title: "Business Center",
      description: "Stay productive with high-speed internet, printing services, and private meeting rooms.",
    },
    {
      title: "Concierge Services",
      description: "Our dedicated team assists with restaurant reservations, tours, and special requests.",
    },
    {
      title: "Free Wi-Fi",
      description: "Complimentary high-speed internet throughout the resort and all rooms.",
    },
    {
      title: "Airport Transfer",
      description: "Convenient shuttle service to and from Goa International Airport.",
    },
    {
      title: "Kids' Club",
      description: "Supervised activities and entertainment for young guests ages 4-12.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            World-Class Amenities
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for an exceptional resort experience
          </p>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-20">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="rounded-lg shadow-luxury w-full h-[400px] object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-4xl font-display font-bold mb-4">
                  {amenity.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {amenity.description}
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Features:</h3>
                  <ul className="space-y-2">
                    {amenity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="inline-block bg-secondary px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium">
                    <span className="text-muted-foreground">Hours: </span>
                    {amenity.hours}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              More ways to enhance your stay
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalAmenities.map((amenity, index) => (
              <Card key={index} className="hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recreation Activities */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Recreation & Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make the most of your stay with our exciting activities and experiences
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Water Sports",
              "Yoga Sessions",
              "Beach Volleyball",
              "Guided Tours",
              "Cooking Classes",
              "Sunset Cruises",
              "Bicycle Rentals",
              "Cultural Shows",
            ].map((activity, index) => (
              <div
                key={index}
                className="text-center p-6 border rounded-lg hover:shadow-card transition-luxury"
              >
                <p className="font-medium">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
