import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wifi, 
  Coffee, 
  Tv, 
  Wind, 
  Bath, 
  Users, 
  BedDouble, 
  Waves,
  Check
} from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import roomGarden from "@/assets/room-garden.jpg";

const RoomDetails = () => {
  const { roomId } = useParams();

  const roomData: Record<string, any> = {
    "deluxe-suite": {
      name: "Deluxe Ocean Suite",
      images: [roomDeluxe, roomPresidential, roomGarden],
      price: 12000,
      description: "Experience luxury redefined in our Deluxe Ocean Suite. This spacious 450 sq ft suite features floor-to-ceiling windows offering breathtaking views of the Arabian Sea. The elegant interior combines modern design with comfortable furnishings, creating the perfect retreat for your Goa getaway.",
      capacity: 2,
      size: "450 sq ft",
      bedType: "King-size bed",
    },
    "presidential-villa": {
      name: "Presidential Villa",
      images: [roomPresidential, roomDeluxe, roomGarden],
      price: 25000,
      description: "Indulge in the ultimate luxury experience at our Presidential Villa. Spanning 1200 sq ft, this exclusive villa features a private infinity pool, spacious living areas, and panoramic ocean views. Perfect for those seeking the finest in resort accommodation.",
      capacity: 4,
      size: "1200 sq ft",
      bedType: "2 King-size beds",
    },
    "garden-deluxe": {
      name: "Garden View Deluxe",
      images: [roomGarden, roomDeluxe, roomPresidential],
      price: 9000,
      description: "Surrounded by lush tropical gardens, our Garden View Deluxe room offers a serene escape. The 400 sq ft room features a private balcony overlooking beautifully landscaped grounds, providing a peaceful sanctuary for relaxation.",
      capacity: 2,
      size: "400 sq ft",
      bedType: "King-size bed",
    },
  };

  const room = roomData[roomId || "deluxe-suite"] || roomData["deluxe-suite"];

  const amenities = [
    { icon: Wifi, label: "High-speed Wi-Fi" },
    { icon: Coffee, label: "Coffee & Tea Maker" },
    { icon: Tv, label: "55\" Smart TV" },
    { icon: Wind, label: "Climate Control" },
    { icon: Bath, label: "Luxury Bathroom" },
    { icon: Users, label: `Accommodates ${room.capacity}` },
    { icon: BedDouble, label: room.bedType },
    { icon: Waves, label: "Ocean View" },
  ];

  const features = [
    "24-hour room service",
    "Daily housekeeping",
    "Complimentary breakfast",
    "Mini bar",
    "In-room safe",
    "Premium toiletries",
    "Bathrobes & slippers",
    "Pillow menu",
    "Turndown service",
    "Laundry service",
    "Concierge assistance",
    "Bluetooth speaker",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="md:col-span-2">
              <img
                src={room.images[0]}
                alt={room.name}
                className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-luxury"
              />
            </div>
            {room.images.slice(1).map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${room.name} ${index + 2}`}
                className="w-full h-[300px] object-cover rounded-lg shadow-card"
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {room.name}
              </h1>
              
              <div className="flex items-center space-x-6 text-muted-foreground mb-6">
                <span className="flex items-center">
                  <BedDouble size={20} className="mr-2" />
                  {room.size}
                </span>
                <span className="flex items-center">
                  <Users size={20} className="mr-2" />
                  Up to {room.capacity} guests
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                {room.description}
              </p>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  Room Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-card transition-luxury"
                    >
                      <amenity.icon size={24} className="text-primary mb-2" />
                      <span className="text-sm">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">
                  Included Services
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-luxury">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-4xl font-display font-bold text-primary mb-2">
                      ₹{room.price.toLocaleString()}
                    </p>
                    <p className="text-muted-foreground">per night</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Check-in
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Check-out
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Guests
                      </label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        {room.capacity > 2 && <option>3 Guests</option>}
                        {room.capacity > 3 && <option>4 Guests</option>}
                      </select>
                    </div>
                  </div>

                  <Button asChild size="lg" className="w-full mb-4">
                    <Link to="/book-now">Book Now</Link>
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Free cancellation up to 24 hours before check-in</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RoomDetails;
