import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wifi, Coffee, Dumbbell, Waves, Car, MapPin, Compass } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import heroImage from "@/assets/hero-resort.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import roomGarden from "@/assets/room-garden.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";
import exteriorImage from "@/assets/resort-exterior.jpg";
import beachImage from "@/assets/amenity-beach.jpg";

const Home = () => {
  const featuredRooms = [
    { id: "deluxe-suite", name: "Royal Desert Suite", image: roomDeluxe, price: 1800, description: "Luxurious suite with stunning desert views and authentic Arabian décor", capacity: 2 },
    { id: "presidential-villa", name: "Presidential Palace Villa", image: roomPresidential, price: 4500, description: "Ultimate opulence with private pool and panoramic Red Sea views", capacity: 4 },
    { id: "garden-deluxe", name: "Oasis Garden Room", image: roomGarden, price: 1200, description: "Serene retreat overlooking lush Arabian gardens and fountains", capacity: 2 },
  ];

  const testimonials = [
    { name: "Abdullah M.", location: "Riyadh", rating: 5, text: "An extraordinary experience! The hospitality, rooms, and dining were world-class. True Arabian luxury.", image: "https://i.pravatar.cc/150?img=33" },
    { name: "Fatima A.", location: "Dubai", rating: 5, text: "Perfect getaway by the Red Sea. The resort exceeded all expectations. Will definitely return!", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Mohammed K.", location: "Jeddah", rating: 5, text: "From the grand entrance to the smallest detail — pure elegance. The best resort in Saudi Arabia.", image: "https://i.pravatar.cc/150?img=12" },
  ];

  const amenities = [
    { icon: Waves, name: "Infinity Pool" },
    { icon: Coffee, name: "Arabian Spa" },
    { icon: Dumbbell, name: "Fitness Center" },
    { icon: Wifi, name: "Free Wi-Fi" },
    { icon: Car, name: "Airport Transfer" },
  ];

  const bestPlaces = [
    { name: "Al-Balad Historic District", description: "UNESCO World Heritage old town with traditional architecture", icon: MapPin },
    { name: "Red Sea Coral Reefs", description: "World-class diving and snorkeling spots just minutes away", icon: Compass },
    { name: "King Fahd Fountain", description: "The world's tallest fountain, an iconic Jeddah landmark", icon: MapPin },
    { name: "Desert Safari Adventures", description: "Thrilling dune bashing and Bedouin camp experiences", icon: Compass },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="The Grand Horizon Resort - Luxury Arabian Resort" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Experience Arabian Luxury
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Welcome to The Grand Horizon Resort — where tradition meets paradise on the Red Sea
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
              <input type="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Check-out</label>
              <input type="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
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
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Your Gateway to Arabian Paradise</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nestled along Jeddah's stunning Red Sea coastline, The Grand Horizon Resort offers an unparalleled luxury experience inspired by the rich heritage of Saudi Arabia. Our world-class amenities, authentic Arabian hospitality, and breathtaking views create the perfect backdrop for your dream vacation.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're seeking relaxation, cultural exploration, or celebration, our resort provides the ideal setting for unforgettable memories in the heart of the Kingdom.
              </p>
              <Button asChild size="lg"><Link to="/about">Learn More</Link></Button>
            </div>
            <div className="order-1 md:order-2">
              <img src={exteriorImage} alt="Resort Exterior" className="rounded-lg shadow-luxury w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Royal Accommodations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Experience unparalleled comfort in our elegantly designed rooms and suites</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (<RoomCard key={room.id} {...room} />))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline"><Link to="/rooms">View All Rooms</Link></Button>
          </div>
        </div>
      </section>

      {/* Best Places to Visit */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Best Places to Explore</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover the wonders of Jeddah and Saudi Arabia from our resort</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestPlaces.map((place, index) => (
              <Card key={index} className="hover:shadow-luxury transition-luxury text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <place.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{place.name}</h3>
                  <p className="text-sm text-muted-foreground">{place.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Highlight */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={diningImage} alt="Fine Dining" className="rounded-lg shadow-luxury w-full" loading="lazy" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Authentic Arabian Cuisine</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Indulge in world-class Saudi and international cuisine at our signature restaurant. Our expert chefs craft exquisite dishes using the finest local spices and ingredients, from traditional Kabsa to modern Arabian fusion.
              </p>
              <Button asChild size="lg"><Link to="/dining">Explore Dining</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beach & Activities */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Red Sea Adventures</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore the crystal-clear waters of the Red Sea with world-class diving, snorkeling, and water sports. Our private beach offers the perfect escape with luxury cabanas and attentive service.
              </p>
              <Button asChild size="lg"><Link to="/amenities">Explore Activities</Link></Button>
            </div>
            <div>
              <img src={beachImage} alt="Red Sea Beach" className="rounded-lg shadow-luxury w-full" loading="lazy" />
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Guest Experiences</h2>
            <p className="text-lg text-muted-foreground">Hear what our guests have to say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <Card key={index} className="hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mr-4" loading="lazy" />
                    <div>
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, i) => (<Star key={i} size={16} className="fill-primary text-primary" />))}
                  </div>
                  <p className="text-muted-foreground italic">"{t.text}"</p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Exclusive Offers</h2>
            <p className="text-lg text-muted-foreground">Special packages designed for your perfect Arabian getaway</p>
          </div>
          <Card className="max-w-2xl mx-auto overflow-hidden hover:shadow-luxury transition-luxury">
            <div className="bg-primary text-primary-foreground px-6 py-3">
              <span className="font-bold text-lg">Ramadan Special Package</span>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">25% Off Stays During Ramadan</h3>
              <p className="text-muted-foreground mb-6">
                Experience the spirit of Ramadan at our resort. Enjoy special Iftar and Suhoor dining experiences, spa treatments, and exclusive discounts on your stay.
              </p>
              <Button asChild size="lg"><Link to="/offers#ramadan-special">Book Offer</Link></Button>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg"><Link to="/offers">View All Offers</Link></Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Experience Arabian Paradise?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Book your stay today and discover why The Grand Horizon Resort is Saudi Arabia's premier luxury destination.</p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8"><Link to="/book-now">Reserve Your Room</Link></Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;