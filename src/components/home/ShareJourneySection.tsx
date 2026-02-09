import { motion } from "framer-motion";
import { Camera, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ShareJourneySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("share.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Share your Bihar heritage experience with #MagadhExplora and inspire fellow travelers</p>
          <Button variant="hero" size="lg">
            <Share2 className="w-5 h-5" /> Share on Social Media
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShareJourneySection;
