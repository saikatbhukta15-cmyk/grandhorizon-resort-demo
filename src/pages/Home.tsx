import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Wifi, Coffee, Dumbbell, Waves, Car } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import heroImage from "@/assets/hero-resort.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import roomGarden from "@/assets/room-garden.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";
import exteriorImage from "@/assets/resort-exterior.jpg";

const Home = () => {
  const featuredRooms = [
    {
      id: "deluxe-suite",
      name: "Deluxe Ocean Suite",
      image: roomDeluxe,
      price: 12000,
      description: "Spacious suite with breathtaking ocean views and modern amenities",
      capacity: 2,
    },
    {
      id: "presidential-villa",
      name: "Presidential Villa",
      image: roomPresidential,
      price: 25000,
      description: "Ultimate luxury with private pool and exclusive services",
      capacity: 4,
    },
    {
      id: "garden-deluxe",
      name: "Garden View Deluxe",
      image: roomGarden,
      price: 9000,
      description: "Elegant room overlooking lush tropical gardens",
      capacity: 2,
    },
  ];

  const testimonials = [
    {
      name: "Priya M.",
      location: "Mumbai",
      rating: 5,
      text: "An unforgettable experience! The rooms, staff, and food were exceptional.",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Rahul S.",
      location: "Delhi",
      rating: 5,
      text: "Perfect getaway destination. The ocean views and amenities exceeded our expectations.",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Anita K.",
      location: "Bangalore",
      rating: 5,
      text: "Luxury redefined! From check-in to check-out, everything was flawless.",
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const amenities = [
    { icon: Waves, name: "Infinity Pool" },
    { icon: Coffee, name: "Luxury Spa" },
    { icon: Dumbbell, name: "Fitness Center" },
    { icon: Wifi, name: "Free Wi-Fi" },
    { icon: Car, name: "Airport Transfer" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="The Grand Horizon Resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Experience Luxury by the Ocean
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Welcome to The Grand Horizon Resort — where comfort meets paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/book-now">Book Your Stay</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
              <Link to="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Booking Bar */}
      <section className="bg-card shadow-luxury -mt-16 relative z-20 mx-4 md:mx-8 lg:mx-16 rounded-lg p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Check-in</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Check-out</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Guests</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button asChild size="lg" className="w-full">
                <Link to="/book-now">Search Availability</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Your Home in Paradise
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nestled along the pristine beaches of Goa, The Grand Horizon Resort offers an unparalleled luxury experience. Our world-class amenities, exceptional service, and breathtaking views create the perfect backdrop for your dream vacation.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're seeking relaxation, adventure, or celebration, our resort provides the ideal setting for unforgettable memories.
              </p>
              <Button asChild size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={exteriorImage}
                alt="Resort Exterior"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Luxury Accommodations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience unparalleled comfort in our elegantly designed rooms and suites
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dining Highlight */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={diningImage}
                alt="Fine Dining"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Culinary Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Indulge in world-class cuisine at our signature restaurant. Our expert chefs craft exquisite dishes using the finest local and international ingredients, creating an unforgettable dining experience.
              </p>
              <Button asChild size="lg">
                <Link to="/dining">Explore Dining</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Strip */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <amenity.icon size={40} className="mb-2" />
                <span className="font-medium">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Guest Experiences
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear what our guests have to say about their stay
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Exclusive Offers
            </h2>
            <p className="text-lg text-muted-foreground">
              Special packages designed for your perfect getaway
            </p>
          </div>
          <Card className="max-w-2xl mx-auto overflow-hidden hover:shadow-luxury transition-luxury">
            <div className="bg-primary text-primary-foreground px-6 py-3">
              <span className="font-bold text-lg">Winter Escape Package</span>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                20% Off Stays in December
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the magic of winter by the sea. Book your December stay now and enjoy exclusive discounts, complimentary breakfast, and spa credits.
              </p>
              <Button asChild size="lg">
                <Link to="/offers#winter-escape">Book Offer</Link>
              </Button>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/offers">View All Offers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Experience Paradise?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and discover why The Grand Horizon Resort is Goa's premier luxury destination.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/book-now">Reserve Your Room</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
