import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  { name: "Sarah Chen", country: "Singapore", text: "The Buddhist Circuit tour was life-changing. Our guide's knowledge of Bodh Gaya's history was extraordinary.", rating: 5 },
  { name: "Takeshi Yamamoto", country: "Japan", text: "As a Buddhist scholar, I was deeply moved by the authenticity and depth of this tour. Highly recommended.", rating: 5 },
  { name: "Priya Sharma", country: "India", text: "Magadh Explora showed me a side of Bihar I never knew existed. The heritage walk was magical!", rating: 5 },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{t("testimonials.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl glass-card"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/80 mb-4 italic">"{item.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
