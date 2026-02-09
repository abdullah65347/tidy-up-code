import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const DynamicPackageBuilder = ({ onQuoteClick }: { onQuoteClick: () => void }) => {
  const { t } = useLanguage();
  const [duration, setDuration] = useState([5]);
  const [travelers, setTravelers] = useState([2]);

  const basePrice = 5000;
  const estimatedPrice = basePrice * (duration[0] ?? 5) * (travelers[0] ?? 2) * 0.85;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">{t("builder.title")}</h2>
          <p className="text-muted-foreground text-center mb-10">Customize your perfect Bihar heritage tour</p>

          <div className="glass-card rounded-2xl p-8 space-y-8">
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-medium text-sm">Duration</label>
                <span className="text-sm font-semibold text-primary">{duration[0]} days</span>
              </div>
              <Slider value={duration} onValueChange={setDuration} min={1} max={14} step={1} />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="font-medium text-sm">Travelers</label>
                <span className="text-sm font-semibold text-primary">{travelers[0]} people</span>
              </div>
              <Slider value={travelers} onValueChange={setTravelers} min={1} max={20} step={1} />
            </div>

            <div className="border-t border-border pt-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Estimated Price</p>
              <p className="text-4xl font-display font-bold text-primary">₹{estimatedPrice.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">per person, all inclusive</p>
            </div>

            <Button variant="hero" size="lg" className="w-full" onClick={onQuoteClick}>
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicPackageBuilder;
