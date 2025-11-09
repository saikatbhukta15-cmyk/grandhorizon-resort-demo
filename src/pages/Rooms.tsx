import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import roomGarden from "@/assets/room-garden.jpg";

const Rooms = () => {
  const [filter, setFilter] = useState("all");

  const rooms = [
    {
      id: "deluxe-suite",
      name: "Deluxe Ocean Suite",
      image: roomDeluxe,
      price: 12000,
      description: "Spacious suite with breathtaking ocean views and modern amenities",
      capacity: 2,
      category: "luxury",
    },
    {
      id: "presidential-villa",
      name: "Presidential Villa",
      image: roomPresidential,
      price: 25000,
      description: "Ultimate luxury with private pool and exclusive services",
      capacity: 4,
      category: "luxury",
    },
    {
      id: "garden-deluxe",
      name: "Garden View Deluxe",
      image: roomGarden,
      price: 9000,
      description: "Elegant room overlooking lush tropical gardens",
      capacity: 2,
      category: "garden",
    },
    {
      id: "ocean-view-premium",
      name: "Ocean View Premium",
      image: roomDeluxe,
      price: 11000,
      description: "Premium room with stunning panoramic ocean views",
      capacity: 2,
      category: "ocean",
    },
    {
      id: "family-suite",
      name: "Family Suite",
      image: roomGarden,
      price: 15000,
      description: "Spacious suite perfect for families with connecting rooms",
      capacity: 4,
      category: "family",
    },
    {
      id: "luxury-penthouse",
      name: "Luxury Penthouse",
      image: roomPresidential,
      price: 30000,
      description: "Top-floor penthouse with private terrace and panoramic views",
      capacity: 4,
      category: "luxury",
    },
  ];

  const filteredRooms = filter === "all" 
    ? rooms 
    : rooms.filter(room => room.category === filter);

  const filters = [
    { id: "all", label: "All Rooms" },
    { id: "luxury", label: "Luxury" },
    { id: "family", label: "Family" },
    { id: "ocean", label: "Ocean View" },
    { id: "garden", label: "Garden View" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Luxury Accommodations
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled comfort in our elegantly designed rooms and suites
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((item) => (
              <Button
                key={item.id}
                variant={filter === item.id ? "default" : "outline"}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is here to help you find the perfect accommodation for your stay. 
            Contact us and we'll be happy to assist you.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
