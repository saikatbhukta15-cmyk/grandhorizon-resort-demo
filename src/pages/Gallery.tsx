import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import roomGarden from "@/assets/room-garden.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";
import poolImage from "@/assets/amenity-pool.jpg";
import spaImage from "@/assets/amenity-spa.jpg";
import gymImage from "@/assets/amenity-gym.jpg";
import beachImage from "@/assets/amenity-beach.jpg";
import exteriorImage from "@/assets/resort-exterior.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, alt: "Grand Arabian Entrance", category: "Resort" },
    { src: exteriorImage, alt: "Resort Exterior at Dusk", category: "Resort" },
    { src: roomDeluxe, alt: "Royal Desert Suite", category: "Rooms" },
    { src: roomPresidential, alt: "Presidential Palace Villa", category: "Rooms" },
    { src: roomGarden, alt: "Oasis Garden Room", category: "Rooms" },
    { src: poolImage, alt: "Desert Infinity Pool", category: "Amenities" },
    { src: beachImage, alt: "Private Red Sea Beach", category: "Amenities" },
    { src: spaImage, alt: "Arabian Hammam Spa", category: "Amenities" },
    { src: gymImage, alt: "Fitness Center", category: "Amenities" },
    { src: diningImage, alt: "Al Majlis Restaurant", category: "Dining" },
    { src: poolImage, alt: "Pool at Sunset", category: "Resort" },
    { src: beachImage, alt: "Red Sea Paradise", category: "Resort" },
    { src: roomDeluxe, alt: "Desert View Suite", category: "Rooms" },
    { src: diningImage, alt: "Arabian Feast", category: "Dining" },
    { src: spaImage, alt: "Hammam Treatment", category: "Amenities" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Photo Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Discover the beauty and elegance of The Grand Horizon Resort</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]" onClick={() => setSelectedImage(image.src)}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-luxury">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-display font-semibold text-lg">{image.alt}</p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-luxury" aria-label="Close">
              <X size={32} />
            </button>
            {selectedImage && <img src={selectedImage} alt="Gallery image" className="max-w-full max-h-full object-contain" />}
          </div>
        </DialogContent>
      </Dialog>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Experience It Yourself</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">These images only capture a glimpse of what awaits you. Book your stay and create your own unforgettable Arabian memories.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;