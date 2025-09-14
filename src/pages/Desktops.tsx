import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cpu, Zap, Wrench } from "lucide-react";

const Desktops = () => {
  const desktopModels = [
    {
      name: "Thelio",
      price: "$1,299",
      description: "Flagship desktop with exceptional performance and upgrade path",
      features: ["AMD Ryzen 7", "32GB RAM", "1TB NVMe SSD", "NVIDIA RTX 4070"],
      image: "/placeholder.svg"
    },
    {
      name: "Meerkat",
      price: "$599",
      description: "Compact desktop perfect for office work and media",
      features: ["Intel NUC", "16GB RAM", "500GB NVMe SSD", "Intel UHD Graphics"],
      image: "/placeholder.svg"
    },
    {
      name: "Thelio Mega",
      price: "$3,999",
      description: "Ultimate workstation for demanding professional workflows",
      features: ["AMD Threadripper", "128GB RAM", "4TB NVMe SSD", "NVIDIA RTX 4090"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Pop!_OS Desktops
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-8">
            Premium desktop computers built for power users, developers, and creative professionals. 
            Engineered for performance with Pop!_OS pre-installed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-primary" size="lg">
              Build Your Desktop
            </Button>
            <Button variant="hero-secondary" size="lg">
              View Specs
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Desktop Excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maximum Power</h3>
              <p className="text-muted-foreground">Latest AMD and Intel processors for unmatched performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">NVMe storage and high-speed RAM for instant responsiveness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Upgrades</h3>
              <p className="text-muted-foreground">Tool-free design for simple component upgrades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Desktop Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {desktopModels.map((desktop, index) => (
              <Card key={index} className="border-border transition-all">
                <CardHeader>
                  <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                    <Cpu className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle>{desktop.name}</CardTitle>
                    <Badge variant="secondary">{desktop.price}</Badge>
                  </div>
                  <CardDescription>{desktop.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {desktop.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-pop-teal" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Customize & Order</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktops;