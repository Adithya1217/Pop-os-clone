import { Button } from "@/components/ui/button";

const Hardware = () => {
  const categories = [
    {
      title: "Laptops",
      description: "High-performance laptops designed to harmonize with their software while tightening security.",
      icon: "💻"
    },
    {
      title: "Desktops", 
      description: "Powerful, quiet handcrafted desktops designed for tinkering and engineered for max performance.",
      icon: "🖥️"
    },
    {
      title: "Workstations",
      description: "Computers designed for intense tasks, offering robust performance and open-source adaptability.",
      icon: "⚡"
    },
    {
      title: "Keyboards",
      description: "Handcrafted mechanical keyboards designed by keyboard enthusiasts for typing at warp speed.",
      icon: "⌨️"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">THE COMPLETE EXPERIENCE</p>
          <h2 className="text-4xl font-bold text-foreground">
            HARDWARE MADE FOR POP!_OS
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-b from-pop-teal/10 to-pop-teal/5 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <div className="text-4xl">{category.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {category.description}
              </p>
              <Button variant="secondary" className="w-full">
                SHOP NOW
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hardware;