import { motion } from "framer-motion";
import { Shield, Globe, Heart, Users, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  { icon: Shield, title: "Trusted & Safe", description: "Government registered with verified guides and secure transportation" },
  { icon: Globe, title: "Multi-Language", description: "Tours available in 8 languages with native-speaking guides" },
  { icon: Heart, title: "Authentic Experiences", description: "Curated by local experts who know every hidden gem" },
  { icon: Users, title: "Small Groups", description: "Intimate group sizes for a personalized experience" },
  { icon: Award, title: "Award Winning", description: "Recognized for excellence in heritage tourism" },
  { icon: Clock, title: "Flexible Booking", description: "Free cancellation up to 48 hours before the tour" },
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{t("features.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We go beyond ordinary tours to deliver extraordinary experiences</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl glass-card hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg heritage-gradient flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
