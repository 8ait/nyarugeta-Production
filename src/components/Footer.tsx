import { Instagram, Mail, Phone, MapPin, Facebook, AtSign, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Logo and About */}
          <div className="space-y-4">
            <img src={logo} alt="Nyarugeta Pro" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              Professional photography and media production services capturing life's most precious moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>65 Benjamina Drive, Redbank Plains QLD 4301</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:0401017065" className="hover:text-primary transition-colors">0401 017 065</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:christian.nyarugeta@yahoo.com" className="hover:text-primary transition-colors">christian.nyarugeta@yahoo.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Instagram className="w-4 h-4 text-primary" />
                <a href="https://www.instagram.com/nyarugeta_production" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Facebook className="w-4 h-4 text-primary" />
                <a href="https://www.facebook.com/chris.black.31945" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <AtSign className="w-4 h-4 text-primary" />
                <a href="https://www.threads.com/@nyarugeta_production?xmt=AQF0eEn3UezOKKlOOwmwDTZkNWM7g8no-IyDZIpHNT0_q1A" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Threads</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Youtube className="w-4 h-4 text-primary" />
                <a href="https://www.youtube.com/@chrisnyarugeta8814" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              🕘 Open from 9:00 AM
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nyarugeta Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
