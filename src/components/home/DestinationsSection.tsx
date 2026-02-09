import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const destinations = [
  { name: "Bodh Gaya", description: "Where Buddha attained enlightenment under the Bodhi Tree", rating: 4.9, type: "UNESCO World Heritage" },
  { name: "Nalanda", description: "Ruins of the ancient world's greatest university", rating: 4.8, type: "Archaeological Wonder" },
  { name: "Rajgir", description: "Ancient capital surrounded by five hills with hot springs", rating: 4.7, type: "Spiritual Retreat" },
  { name: "Vaishali", description: "Birthplace of Lord Mahavira and Buddha's last sermon site", rating: 4.6, type: "Historical Landmark" },
  { name: "Pawapuri", description: "Sacred Jain pilgrimage site where Lord Mahavira attained Nirvana", rating: 4.5, type: "Jain Heritage" },
  { name: "Vikramshila", description: "Ruins of the great Buddhist monastery and learning center", rating: 4.4, type: "Buddhist Heritage" },
];

const DestinationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="destinations" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{t("destinations.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Journey through the spiritual heartland of India</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div key={dest.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                <div className="h-48 heritage-gradient flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold">{dest.name}</h3>
                    <span className="flex items-center gap-1 text-sm"><Star className="w-3.5 h-3.5 text-primary fill-primary" /> {dest.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{dest.description}</p>
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{dest.type}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
