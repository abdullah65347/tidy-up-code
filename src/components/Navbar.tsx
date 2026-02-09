import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, languages } from "@/contexts/LanguageContext";

const Navbar = ({ onQuoteClick }: { onQuoteClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.destinations"), href: "#destinations" },
    { label: t("nav.packages"), href: "#packages" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full heritage-gradient flex items-center justify-center text-white font-display font-bold text-lg">
            M
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            Magadh <span className="text-primary">Explora</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              {languages.find((l) => l.code === language)?.flag}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-muted flex items-center gap-2"
                  >
                    <span>{lang.flag}</span> {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button variant="hero" size="sm" onClick={onQuoteClick}>
            {t("quote.title")}
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium py-2 text-foreground/80 hover:text-primary">
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" onClick={() => { onQuoteClick(); setIsOpen(false); }}>
              {t("quote.title")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
