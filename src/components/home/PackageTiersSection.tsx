import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Gem, ArrowRight } from "lucide-react";

const tiers = [
  { name: "Essential", icon: Sparkles, price: "₹12,000", features: ["3-day guided tour", "Standard accommodation", "Local transport", "English guide"], color: "border-primary" },
  { name: "Premium", icon: Crown, price: "₹28,000", features: ["5-day comprehensive tour", "4-star accommodation", "Private vehicle", "Multi-language guide", "Meals included"], color: "border-burgundy-500", popular: true },
  { name: "Luxury", icon: Gem, price: "₹55,000", features: ["7-day exclusive tour", "5-star accommodation", "Luxury vehicle", "Personal guide", "All meals & spa", "Helicopter ride"], color: "border-spiritual-500" },
];

const PackageTiersSection = ({ onQuoteClick }: { onQuoteClick: () => void }) => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Choose Your Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">From budget-friendly to luxurious — we have the perfect tier for every traveler</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div key={tier.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
            <Card className={`h-full relative ${tier.popular ? "border-2 " + tier.color + " shadow-xl scale-105" : ""}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full heritage-gradient text-white text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6 pt-8 text-center space-y-6">
                <tier.icon className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
                <div className="text-3xl font-display font-bold text-primary">{tier.price}<span className="text-sm text-muted-foreground font-normal">/person</span></div>
                <ul className="space-y-2 text-sm text-left">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button variant={tier.popular ? "hero" : "outline"} className="w-full" onClick={onQuoteClick}>
                  Select Plan <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PackageTiersSection;
