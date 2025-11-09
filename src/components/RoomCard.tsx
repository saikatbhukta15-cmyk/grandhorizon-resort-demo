import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Wifi, Coffee, Waves } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  capacity: number;
}

const RoomCard = ({ id, name, image, price, description, capacity }: RoomCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-luxury transition-luxury">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-display font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users size={16} />
            <span>{capacity} Guests</span>
          </div>
          <div className="flex items-center space-x-1">
            <Wifi size={16} />
            <span>Free Wi-Fi</span>
          </div>
          <div className="flex items-center space-x-1">
            <Waves size={16} />
            <span>Ocean View</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-3xl font-display font-bold text-primary">
              ₹{price.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">per night</p>
          </div>
          <div className="flex space-x-2">
            <Button asChild variant="outline">
              <Link to={`/rooms/${id}`}>View Details</Link>
            </Button>
            <Button asChild>
              <Link to="/book-now">Book Now</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
