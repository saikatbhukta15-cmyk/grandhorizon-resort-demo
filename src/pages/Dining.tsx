import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Coffee, UtensilsCrossed, Leaf } from "lucide-react";
import diningImage from "@/assets/dining-restaurant.jpg";
import amenityPool from "@/assets/amenity-pool.jpg";

const Dining = () => {
  const menuHighlights = [
    {
      category: "Breakfast",
      icon: Coffee,
      items: ["Traditional Ful Medames & Tamees bread", "Fresh dates, fruits & Arabic pastries", "Shakshuka & made-to-order eggs", "Saudi-style Masoub & Areeka"],
      time: "6:30 AM - 11:00 AM",
    },
    {
      category: "Lunch",
      icon: UtensilsCrossed,
      items: ["Authentic Kabsa & Mandi rice", "Grilled Red Sea seafood", "Middle Eastern mezze platter", "Freshly baked Khubz bread"],
      time: "12:30 PM - 4:00 PM",
    },
    {
      category: "Dinner",
      icon: ChefHat,
      items: ["Fine dining tasting menu", "Lamb Haneeth & Jareesh", "Premium grilled meats & kebabs", "International fusion cuisine"],
      time: "7:00 PM - 11:30 PM",
    },
    {
      category: "Café & Lounge",
      icon: Leaf,
      items: ["Saudi Arabic coffee (Qahwa)", "Premium loose-leaf teas", "Fresh juices & smoothies", "Traditional sweets & Kunafa"],
      time: "Open 24 Hours",
    },
  ];

  const dishes = [
    { name: "Royal Kabsa", image: diningImage },
    { name: "Grilled Red Sea Hammour", image: diningImage },
    { name: "Lamb Mandi", image: diningImage },
    { name: "Kunafa Dessert", image: diningImage },
    { name: "Arabic Mezze", image: diningImage },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={diningImage} alt="Fine Dining at The Grand Horizon" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Authentic Arabian Cuisine</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Savor the finest Saudi and international flavors</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">Al Majlis Restaurant</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience an unforgettable dining journey at Al Majlis, our signature restaurant. With stunning Red Sea views and an elegant Arabian ambiance, we offer authentic Saudi cuisine alongside international favorites.
            </p>
            <p className="text-lg text-muted-foreground">
              Our culinary team combines the finest local spices and ingredients with time-honored recipes to create dishes that celebrate Saudi Arabia's rich culinary heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Dining Options</h2>
            <p className="text-lg text-muted-foreground">From sunrise breakfast to elegant evening dining</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((menu, index) => (
              <Card key={index} className="hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <menu.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{menu.category}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{menu.time}</p>
                  <ul className="space-y-2">
                    {menu.items.map((item, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-display font-bold mb-6">Meet Executive Chef Hassan Al-Qahtani</h2>
              <p className="text-lg text-muted-foreground mb-4">
                With over 18 years of culinary excellence across five-star hotels in Saudi Arabia, UAE, and Europe, Chef Hassan brings his passion for authentic Arabian cuisine to The Grand Horizon Resort.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                His philosophy centers on honoring traditional Saudi recipes while embracing modern presentation techniques, using the freshest local ingredients and premium imported spices.
              </p>
              <p className="text-lg text-muted-foreground italic">
                "Every dish carries the soul of Arabian hospitality. At The Grand Horizon, we serve not just food, but a culinary journey through the Kingdom." — Chef Hassan
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://i.pravatar.cc/600?img=12" alt="Chef Hassan Al-Qahtani" className="rounded-lg shadow-luxury w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Culinary Highlights</h2>
            <p className="text-lg text-muted-foreground">A glimpse of our signature dishes</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dishes.map((dish, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                  <p className="text-white font-display font-semibold text-lg text-center px-4">{dish.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={amenityPool} alt="Private Dining" className="rounded-lg shadow-luxury w-full" loading="lazy" />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Private Dining & Events</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Make your special occasions extraordinary with our private dining experiences. Whether it's a beachside dinner, family celebration, or corporate gathering, our team creates personalized menus and settings tailored to your vision.
              </p>
              <ul className="space-y-3 mb-6">
                {["Beachfront dining under the stars", "Customized halal menus", "Dedicated service team", "Traditional Arabian entertainment available"].map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <span className="text-primary mr-2">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;