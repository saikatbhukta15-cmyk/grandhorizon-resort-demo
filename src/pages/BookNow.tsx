import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, BedDouble, CreditCard } from "lucide-react";
import { toast } from "sonner";

const BookNow = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    checkIn: "", checkOut: "", guests: "2", roomType: "deluxe-suite", specialRequests: "",
  });

  const roomTypes = [
    { id: "deluxe-suite", name: "Royal Desert Suite", price: 1800 },
    { id: "presidential-villa", name: "Presidential Palace Villa", price: 4500 },
    { id: "garden-deluxe", name: "Oasis Garden Room", price: 1200 },
    { id: "sea-view-premium", name: "Red Sea Premium Suite", price: 1600 },
    { id: "family-suite", name: "Family Heritage Suite", price: 2200 },
    { id: "luxury-penthouse", name: "Royal Penthouse", price: 6000 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your reservation! Our team will confirm shortly via email.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "2", roomType: "deluxe-suite", specialRequests: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedRoom = roomTypes.find((room) => room.id === formData.roomType);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Book Your Stay</h1>
          <p className="text-xl text-muted-foreground">Complete the form below to reserve your Arabian luxury escape</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-display font-bold mb-6 flex items-center"><Users className="mr-2" />Guest Information</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name *</label>
                          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Mohammed" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Al-Rashid" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="mohammed@example.com" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+966 50 123 4567" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-display font-bold mb-6 flex items-center"><Calendar className="mr-2" />Reservation Details</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="checkIn" className="block text-sm font-medium mb-2">Check-in Date *</label>
                          <Input id="checkIn" name="checkIn" type="date" value={formData.checkIn} onChange={handleChange} required />
                        </div>
                        <div>
                          <label htmlFor="checkOut" className="block text-sm font-medium mb-2">Check-out Date *</label>
                          <Input id="checkOut" name="checkOut" type="date" value={formData.checkOut} onChange={handleChange} required />
                        </div>
                        <div>
                          <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests *</label>
                          <select id="guests" name="guests" value={formData.guests} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5+ Guests</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="roomType" className="block text-sm font-medium mb-2">Room Type *</label>
                          <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                            {roomTypes.map((room) => (
                              <option key={room.id} value={room.id}>{room.name} - SAR {room.price.toLocaleString()}/night</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">Special Requests</label>
                      <Textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={4} placeholder="Any special requirements or preferences..." />
                    </div>

                    <Button type="submit" size="lg" className="w-full">Confirm Reservation</Button>
                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our terms and conditions. Our team will contact you within 24 hours to confirm your booking.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-luxury">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-6 flex items-center"><CreditCard className="mr-2" />Booking Summary</h3>
                  {selectedRoom && (
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start justify-between pb-4 border-b">
                        <div>
                          <h4 className="font-semibold mb-1 flex items-center"><BedDouble size={18} className="mr-2" />{selectedRoom.name}</h4>
                          <p className="text-sm text-muted-foreground">{formData.guests} Guest(s)</p>
                        </div>
                        <p className="font-semibold text-primary">SAR {selectedRoom.price.toLocaleString()}/night</p>
                      </div>
                      {formData.checkIn && formData.checkOut && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Check-in</span><span className="font-medium">{formData.checkIn}</span></div>
                          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Check-out</span><span className="font-medium">{formData.checkOut}</span></div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="bg-secondary p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold mb-3">What's Included</h4>
                    <ul className="space-y-2 text-sm">
                      {["Daily breakfast for all guests", "High-speed Wi-Fi", "Access to all resort amenities", "24-hour concierge service", "Complimentary valet parking"].map((item, i) => (
                        <li key={i} className="flex items-center"><span className="text-primary mr-2">✓</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground text-center"><strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before check-in</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookNow;