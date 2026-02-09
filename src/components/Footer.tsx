import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full heritage-gradient flex items-center justify-center text-white font-display font-bold text-lg">M</div>
              <span className="font-display text-xl font-bold">Magadh <span className="text-primary">Explora</span></span>
            </div>
            <p className="text-background/70 text-sm">{t("footer.description")}</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {["Home", "Destinations", "Packages", "About Us", "Contact"].map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Popular Tours</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {["Buddhist Circuit", "Heritage Walk", "Spiritual Retreat", "Cultural Tour", "Temple Trail"].map((tour) => (
                <li key={tour}><a href="#" className="hover:text-primary transition-colors">{tour}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Patna, Bihar, India</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@magadhexplora.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-background/50">
          © {new Date().getFullYear()} Magadh Explora. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
