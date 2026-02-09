import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const packages = [
  { name: "Buddhist Circuit Explorer", duration: "5 Days", travelers: "2-15", rating: 4.9, price: "₹25,000", description: "Visit Bodh Gaya, Nalanda, Rajgir, and Vaishali — the sacred path of Buddha's enlightenment.", color: "from-saffron-500 to-saffron-600" },
  { name: "Heritage Walk Bihar", duration: "3 Days", travelers: "4-20", rating: 4.8, price: "₹15,000", description: "Explore ancient ruins, museums, and living heritage of Patna and surrounding areas.", color: "from-burgundy-500 to-burgundy-600" },
  { name: "Spiritual Retreat", duration: "7 Days", travelers: "1-10", rating: 5.0, price: "₹35,000", description: "Deep meditation retreat covering all major Buddhist and Jain sites with guided practices.", color: "from-spiritual-500 to-spiritual-600" },
];

const PackagesSection = ({ onQuoteClick }: { onQuoteClick: () => void }) => {
  const { t } = useLanguage();

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{t("packages.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Carefully crafted journeys that bring you closer to Bihar's timeless heritage</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
                <CardHeader>
                  <CardTitle className="font-display text-xl">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {pkg.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {pkg.travelers}</span>
                    <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> {pkg.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-display font-bold text-primary">{pkg.price}</span>
                    <Button variant="hero" size="sm" onClick={onQuoteClick}>
                      Book Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
