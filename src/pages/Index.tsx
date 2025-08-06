import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import AIVisionSection from "@/components/AIVisionSection";
import PipelineVisualization from "@/components/PipelineVisualization";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CardSection />
      <AIVisionSection />
      <PipelineVisualization />
    </div>
  );
};

export default Index;