import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Dining", path: "/dining" },
    { name: "Amenities", path: "/amenities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-luxury",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              The Grand Horizon
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-luxury hover:text-primary",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="ml-4">
              <Link to="/book-now">Book Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-4 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium transition-luxury hover:text-primary",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="w-full">
              <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
