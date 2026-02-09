import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import HeroSection from "@/components/home/HeroSection";
import PackagesSection from "@/components/home/PackagesSection";
import PackageTiersSection from "@/components/home/PackageTiersSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import SpecialToursSection from "@/components/home/SpecialToursSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ShareJourneySection from "@/components/home/ShareJourneySection";
import DynamicPackageBuilder from "@/components/home/DynamicPackageBuilder";

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={openQuote} />
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
      <HeroSection onQuoteClick={openQuote} />
      <PackagesSection onQuoteClick={openQuote} />
      <PackageTiersSection onQuoteClick={openQuote} />
      <DestinationsSection />
      <FeaturesSection />
      <SpecialToursSection onQuoteClick={openQuote} />
      <DynamicPackageBuilder onQuoteClick={openQuote} />
      <TestimonialsSection />
      <CTASection onQuoteClick={openQuote} />
      <ShareJourneySection />
      <Footer />
    </div>
  );
};

export default Index;
