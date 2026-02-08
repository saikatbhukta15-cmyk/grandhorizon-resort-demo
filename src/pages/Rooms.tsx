import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import roomGarden from "@/assets/room-garden.jpg";
import heroImage from "@/assets/hero-resort.jpg";

const Rooms = () => {
  const [filter, setFilter] = useState("all");

  const rooms = [
    { id: "deluxe-suite", name: "Royal Desert Suite", image: roomDeluxe, price: 1800, description: "Luxurious suite with stunning desert views and authentic Arabian décor", capacity: 2, category: "luxury" },
    { id: "presidential-villa", name: "Presidential Palace Villa", image: roomPresidential, price: 4500, description: "Ultimate opulence with private pool, marble floors and Red Sea views", capacity: 4, category: "luxury" },
    { id: "garden-deluxe", name: "Oasis Garden Room", image: roomGarden, price: 1200, description: "Serene retreat overlooking lush Arabian gardens and courtyard fountains", capacity: 2, category: "garden" },
    { id: "sea-view-premium", name: "Red Sea Premium Suite", image: roomDeluxe, price: 1600, description: "Premium suite with panoramic views of the stunning Red Sea coastline", capacity: 2, category: "sea" },
    { id: "family-suite", name: "Family Heritage Suite", image: roomGarden, price: 2200, description: "Spacious suite perfect for families with connecting rooms and kids' area", capacity: 4, category: "family" },
    { id: "luxury-penthouse", name: "Royal Penthouse", image: roomPresidential, price: 6000, description: "Top-floor penthouse with private terrace, majlis lounge and butler service", capacity: 4, category: "luxury" },
  ];

  const filteredRooms = filter === "all" ? rooms : rooms.filter(room => room.category === filter);

  const filters = [
    { id: "all", label: "All Rooms" },
    { id: "luxury", label: "Luxury" },
    { id: "family", label: "Family" },
    { id: "sea", label: "Sea View" },
    { id: "garden", label: "Garden View" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury Accommodations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Royal Accommodations</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Experience unparalleled Arabian comfort in our elegantly designed rooms and suites</p>
        </div>
      </section>

      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((item) => (
              <Button key={item.id} variant={filter === item.id ? "default" : "outline"} onClick={() => setFilter(item.id)}>{item.label}</Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (<RoomCard key={room.id} {...room} />))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Our concierge team is here to help you find the perfect accommodation for your Arabian getaway.</p>
          <Button asChild size="lg"><a href="/contact">Contact Us</a></Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;