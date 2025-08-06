import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="min-h-screen bg-hero-gradient flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight tracking-tight px-8 py-4">
            Frontier K-12 Education Data For{" "}
            <span className="block">Foundation Model Labs</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">k12data works with the world's leading foundation model labs and enterprises to provide high quality and complexity data, unlocking model improvements and new capabilities</p>
        
        <div className="flex justify-center">
          <Button variant="hero" size="xl" className="min-w-48">
            Schedule a Call →
          </Button>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/10 to-transparent" />
    </section>;
};
export default HeroSection;