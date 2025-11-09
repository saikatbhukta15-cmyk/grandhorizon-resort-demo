import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              The Grand Horizon
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Luxury. Comfort. Serenity.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-luxury"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-luxury"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-luxury"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-luxury"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="text-gray-300 hover:text-primary transition-luxury"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/dining"
                  className="text-gray-300 hover:text-primary transition-luxury"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-primary transition-luxury"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-luxury"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/book-now"
                  className="text-gray-300 hover:text-primary transition-luxury"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>The Grand Horizon Resort</li>
              <li>Beach Road, Goa, India</li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary transition-luxury"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@grandhorizonresort.in"
                  className="hover:text-primary transition-luxury"
                >
                  info@grandhorizonresort.in
                </a>
              </li>
              <li className="pt-2">24/7 Customer Service</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button size="icon" variant="secondary">
                <Mail size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} The Grand Horizon Resort. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-primary transition-luxury"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
