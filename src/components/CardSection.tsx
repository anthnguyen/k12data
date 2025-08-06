import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardSection = () => {
  const cards = [
    {
      title: "Comprehensive Data Coverage",
      description: "K-12 curriculum spanning all subjects and grade levels with complete educational content mapping"
    },
    {
      title: "AI-Powered Validation", 
      description: "95%+ accuracy through dual AI and expert review processes ensuring data integrity"
    },
    {
      title: "Production-Ready Formats",
      description: "Industry-standard JSON, CSV, API endpoints optimized for immediate deployment"
    },
    {
      title: "Advanced Processing",
      description: "OCR, LaTeX conversion, visual content preservation with cutting-edge technology"
    },
    {
      title: "Expert Quality Assurance",
      description: "Certified educators and subject matter experts validate every data point"
    },
    {
      title: "Flexible Integration",
      description: "Custom solutions with ongoing technical support and seamless system integration"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className="military-card group relative overflow-hidden border-0 h-full min-h-[280px]"
              style={{
                background: `radial-gradient(ellipse 400px 300px at 30% 40%, hsl(0 0% 12%) 0%, hsl(0 0% 4%) 40%, transparent 80%),
                            radial-gradient(ellipse 300px 200px at 70% 60%, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 35%, transparent 70%),
                            linear-gradient(135deg, hsl(0 0% 2%) 0%, hsl(0 0% 4%) 25%, hsl(0 0% 6%) 50%, hsl(0 0% 4%) 75%, hsl(0 0% 8%) 100%)`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 3px rgba(0,0,0,0.3)',
                border: '1px solid rgba(150,150,150,0.15)',
                borderRadius: '12px',
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              
              <CardHeader className="pb-4">
                <CardTitle 
                  className="text-xl font-medium tracking-wide"
                  style={{ color: '#ffffff' }}
                >
                  {card.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;