import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <StatsSection />
      <FinalSection />
    </div>
  );
};

export default Index;
