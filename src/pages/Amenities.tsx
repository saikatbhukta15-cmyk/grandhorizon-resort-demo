import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import poolImage from "@/assets/amenity-pool.jpg";
import spaImage from "@/assets/amenity-spa.jpg";
import gymImage from "@/assets/amenity-gym.jpg";
import beachImage from "@/assets/amenity-beach.jpg";
import heroImage from "@/assets/hero-resort.jpg";

const Amenities = () => {
  const amenities = [
    {
      title: "Infinity Pool",
      image: poolImage,
      description: "Our stunning infinity pool seamlessly blends with the desert horizon. Lounge on comfortable sunbeds, enjoy refreshing beverages from the pool bar, and watch spectacular Arabian sunsets.",
      features: ["Desert-view infinity edge", "Pool bar & lounge", "Private cabana rentals", "Kids' splash pool area", "Towel & refreshment service"],
      hours: "6:00 AM - 10:00 PM",
    },
    {
      title: "Arabian Hammam & Spa",
      image: spaImage,
      description: "Rejuvenate your body and mind at our world-class hammam and spa. Our expert therapists offer treatments inspired by ancient Arabian wellness traditions combined with modern techniques.",
      features: ["Traditional hammam experience", "Arabic oil massage therapies", "Gold facial treatments", "Body scrubs with Dead Sea minerals", "Couples' treatment suites"],
      hours: "9:00 AM - 10:00 PM",
    },
    {
      title: "Fitness Center",
      image: gymImage,
      description: "Maintain your fitness routine in our state-of-the-art gym featuring the latest equipment with panoramic desert views through arched windows.",
      features: ["Latest Technogym equipment", "Personal training sessions", "Yoga & meditation classes", "Complimentary towels & water", "Desert view workout space"],
      hours: "24 Hours",
    },
    {
      title: "Private Red Sea Beach",
      image: beachImage,
      description: "Enjoy exclusive access to our pristine private beach on the Red Sea. White sand, turquoise waters, and luxury cabanas with Arabic-style canopies make for the perfect escape.",
      features: ["Beach loungers & luxury cabanas", "Diving & snorkeling gear", "Jet ski & water sports", "Beachside service", "Sunset dhow cruise booking"],
      hours: "Sunrise to Sunset",
    },
  ];

  const additionalAmenities = [
    { title: "Event & Banquet Halls", description: "Host grand celebrations in our ornate venues with state-of-the-art AV and professional catering." },
    { title: "Business Center", description: "Stay productive with high-speed internet, meeting rooms, and video conferencing facilities." },
    { title: "Concierge Services", description: "Our dedicated team assists with restaurant reservations, tours, and Hajj/Umrah arrangements." },
    { title: "Free Wi-Fi", description: "Complimentary high-speed internet throughout the resort and all rooms." },
    { title: "Airport Transfer", description: "Luxury vehicle service to and from King Abdulaziz International Airport." },
    { title: "Kids' Club", description: "Supervised activities and entertainment for young guests ages 4-12." },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="World-Class Amenities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">World-Class Amenities</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Everything you need for an exceptional Arabian resort experience</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto space-y-20">
          {amenities.map((amenity, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center`}>
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img src={amenity.image} alt={amenity.title} className="rounded-lg shadow-luxury w-full h-[400px] object-cover" loading="lazy" />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-4xl font-display font-bold mb-4">{amenity.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{amenity.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Features:</h3>
                  <ul className="space-y-2">
                    {amenity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <span className="text-primary mr-2">✓</span>{feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="inline-block bg-secondary px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium"><span className="text-muted-foreground">Hours: </span>{amenity.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">More ways to enhance your stay</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalAmenities.map((amenity, index) => (
              <Card key={index} className="hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Recreation & Activities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Make the most of your stay with our exciting activities</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {["Scuba Diving", "Desert Safari", "Snorkeling Tours", "Guided City Tours", "Arabic Cooking Classes", "Sunset Dhow Cruise", "Camel Riding", "Cultural Heritage Walks"].map((activity, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-card transition-luxury">
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