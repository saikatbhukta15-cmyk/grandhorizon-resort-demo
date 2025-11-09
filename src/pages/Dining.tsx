import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Coffee, Wine, UtensilsCrossed } from "lucide-react";
import diningImage from "@/assets/dining-restaurant.jpg";
import amenityPool from "@/assets/amenity-pool.jpg";

const Dining = () => {
  const menuHighlights = [
    {
      category: "Breakfast",
      icon: Coffee,
      items: [
        "Continental & Indian buffet",
        "Fresh tropical fruits",
        "Made-to-order omelets",
        "Artisan breads & pastries",
      ],
      time: "7:00 AM - 11:00 AM",
    },
    {
      category: "Lunch",
      icon: UtensilsCrossed,
      items: [
        "Grilled seafood specialties",
        "Goan curry selections",
        "International salad bar",
        "Wood-fired pizzas",
      ],
      time: "12:30 PM - 3:30 PM",
    },
    {
      category: "Dinner",
      icon: ChefHat,
      items: [
        "Fine dining tasting menu",
        "Fresh catch of the day",
        "Premium steaks & grills",
        "Vegetarian specialties",
      ],
      time: "7:00 PM - 11:00 PM",
    },
    {
      category: "Bar & Lounge",
      icon: Wine,
      items: [
        "Signature cocktails",
        "Premium wines & spirits",
        "Craft beers",
        "Non-alcoholic mocktails",
      ],
      time: "5:00 PM - 1:00 AM",
    },
  ];

  const dishes = [
    { name: "Goan Fish Curry", image: diningImage },
    { name: "Grilled Lobster", image: diningImage },
    { name: "Wagyu Beef", image: diningImage },
    { name: "Truffle Pasta", image: diningImage },
    { name: "Mango Cheesecake", image: diningImage },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={diningImage}
            alt="Fine Dining at The Grand Horizon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Culinary Excellence
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Savor world-class cuisine crafted by our expert chefs
          </p>
        </div>
      </section>

      {/* Restaurant Intro */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Signature Restaurant
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience an unforgettable dining journey at Horizon's Edge, our flagship restaurant. 
              With stunning ocean views and an elegant ambiance, we offer a perfect setting for 
              breakfast, lunch, and fine dining experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              Our culinary team combines the finest local ingredients with international techniques 
              to create dishes that celebrate both Goan flavors and global cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Dining Options
            </h2>
            <p className="text-lg text-muted-foreground">
              From sunrise breakfast to elegant evening dining
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((menu, index) => (
              <Card key={index} className="hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <menu.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {menu.category}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{menu.time}</p>
                  <ul className="space-y-2">
                    {menu.items.map((item, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-display font-bold mb-6">
                Meet Executive Chef Vikram Singh
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                With over 15 years of culinary excellence across Michelin-starred restaurants in Europe and Asia, Chef Vikram brings his passion and expertise to The Grand Horizon Resort.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                His philosophy centers on using the freshest local ingredients, sustainable practices, and innovative techniques to create memorable dining experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                "Every dish tells a story. At The Grand Horizon, we celebrate the rich culinary heritage of Goa while embracing global flavors." - Chef Vikram
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://i.pravatar.cc/600?img=12"
                alt="Chef Vikram Singh"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dish Gallery */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Culinary Highlights
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse of our signature dishes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dishes.map((dish, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                  <p className="text-white font-display font-semibold text-lg text-center px-4">
                    {dish.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={amenityPool}
                alt="Private Dining"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Private Dining & Events
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Make your special occasions extraordinary with our private dining experiences. 
                Whether it's a romantic beachside dinner, a family celebration, or a corporate event, 
                our team creates personalized menus and settings tailored to your vision.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Beachfront dining under the stars
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Customized menus for dietary preferences
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Dedicated service team
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Live music arrangements available
                </li>
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
