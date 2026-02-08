import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Coffee, Tv, Wind, Bath, Users, BedDouble, Waves, Check } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import roomGarden from "@/assets/room-garden.jpg";

const RoomDetails = () => {
  const { roomId } = useParams();

  const roomData: Record<string, any> = {
    "deluxe-suite": {
      name: "Royal Desert Suite",
      images: [roomDeluxe, roomPresidential, roomGarden],
      price: 1800,
      description: "Experience luxury redefined in our Royal Desert Suite. This spacious 55 sq m suite features floor-to-ceiling windows offering breathtaking desert and Red Sea views. The elegant interior combines traditional Arabian design with modern comfort, featuring handcrafted Islamic geometric patterns and premium furnishings.",
      capacity: 2, size: "55 sq m", bedType: "King-size bed",
    },
    "presidential-villa": {
      name: "Presidential Palace Villa",
      images: [roomPresidential, roomDeluxe, roomGarden],
      price: 4500,
      description: "Indulge in ultimate opulence at our Presidential Palace Villa. Spanning 120 sq m, this exclusive villa features a private infinity pool, spacious majlis lounge, marble floors, and panoramic Red Sea views. Dedicated butler service ensures every need is exceeded.",
      capacity: 4, size: "120 sq m", bedType: "2 King-size beds",
    },
    "garden-deluxe": {
      name: "Oasis Garden Room",
      images: [roomGarden, roomDeluxe, roomPresidential],
      price: 1200,
      description: "Surrounded by lush Arabian gardens and courtyard fountains, our Oasis Garden Room offers a serene escape. The 42 sq m room features a private balcony overlooking beautifully landscaped grounds with traditional Islamic garden design.",
      capacity: 2, size: "42 sq m", bedType: "King-size bed",
    },
  };

  const room = roomData[roomId || "deluxe-suite"] || roomData["deluxe-suite"];

  const amenities = [
    { icon: Wifi, label: "High-speed Wi-Fi" },
    { icon: Coffee, label: "Arabic Coffee Station" },
    { icon: Tv, label: "65\" Smart TV" },
    { icon: Wind, label: "Climate Control" },
    { icon: Bath, label: "Marble Bathroom" },
    { icon: Users, label: `Accommodates ${room.capacity}` },
    { icon: BedDouble, label: room.bedType },
    { icon: Waves, label: "Red Sea View" },
  ];

  const features = [
    "24-hour room service", "Daily housekeeping", "Complimentary breakfast buffet",
    "Arabic coffee & dates welcome", "In-room safe", "Premium Amouage toiletries",
    "Bathrobes & slippers", "Pillow menu", "Turndown service",
    "Laundry & pressing service", "Dedicated concierge", "Prayer mat & Qibla direction",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="md:col-span-2">
              <img src={room.images[0]} alt={room.name} className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-luxury" />
            </div>
            {room.images.slice(1).map((image: string, index: number) => (
              <img key={index} src={image} alt={`${room.name} ${index + 2}`} className="w-full h-[300px] object-cover rounded-lg shadow-card" loading="lazy" />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{room.name}</h1>
              <div className="flex items-center space-x-6 text-muted-foreground mb-6">
                <span className="flex items-center"><BedDouble size={20} className="mr-2" />{room.size}</span>
                <span className="flex items-center"><Users size={20} className="mr-2" />Up to {room.capacity} guests</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8">{room.description}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4">Room Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-card transition-luxury">
                      <amenity.icon size={24} className="text-primary mb-2" />
                      <span className="text-sm">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Included Services</h2>
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

            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-luxury">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-4xl font-display font-bold text-primary mb-2">SAR {room.price.toLocaleString()}</p>
                    <p className="text-muted-foreground">per night</p>
                  </div>
                  <div className="space-y-4 mb-6">
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
                        {room.capacity > 2 && <option>3 Guests</option>}
                        {room.capacity > 3 && <option>4 Guests</option>}
                      </select>
                    </div>
                  </div>
                  <Button asChild size="lg" className="w-full mb-4"><Link to="/book-now">Book Now</Link></Button>
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