import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Calendar, ArrowRight } from "lucide-react";

const tours = [
  { name: "Chhath Puja Special", date: "Nov 2025", description: "Experience Bihar's iconic sun worship festival with guided rituals and celebrations", badge: "Festival" },
  { name: "Monsoon Heritage Trail", date: "Jul–Sep", description: "Explore rain-kissed ruins and lush green landscapes of ancient Bihar", badge: "Seasonal" },
  { name: "New Year Meditation Retreat", date: "Dec 31–Jan 7", description: "Welcome the new year with a transformative meditation retreat at Bodh Gaya", badge: "Special" },
];

const SpecialToursSection = ({ onQuoteClick }: { onQuoteClick: () => void }) => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Special Tours</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Limited-time experiences tied to festivals, seasons, and exclusive events</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {tours.map((tour, i) => (
          <motion.div key={tour.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
            <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-40 spiritual-gradient flex items-center justify-center relative">
                <Flame className="w-12 h-12 text-white/40" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">{tour.badge}</span>
              </div>
              <CardContent className="p-5 space-y-3">
                <h3 className="font-display text-lg font-semibold">{tour.name}</h3>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground"><Calendar className="w-4 h-4" /> {tour.date}</p>
                <p className="text-sm text-muted-foreground">{tour.description}</p>
                <Button variant="outline" size="sm" className="w-full" onClick={onQuoteClick}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialToursSection;
