import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cpu, HardDrive, Monitor } from "lucide-react";

const Laptops = () => {
  const laptopModels = [
    {
      name: "Oryx Pro",
      price: "$1,499",
      description: "High-performance laptop for developers and creators",
      features: ["Intel Core i7", "32GB RAM", "1TB NVMe SSD", "NVIDIA RTX 4060"],
      image: "/placeholder.svg"
    },
    {
      name: "Galago Pro", 
      price: "$899",
      description: "Ultra-portable laptop with all-day battery life",
      features: ["Intel Core i5", "16GB RAM", "500GB NVMe SSD", "Intel Iris Xe"],
      image: "/placeholder.svg"
    },
    {
      name: "Serval WS",
      price: "$2,299", 
      description: "Mobile workstation for intensive computing",
      features: ["Intel Core i9", "64GB RAM", "2TB NVMe SSD", "NVIDIA RTX 4080"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Pop!_OS Laptops
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-8">
            Powerful laptops designed for developers, creators, and professionals. 
            Pre-installed with Pop!_OS for the ultimate Linux experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-primary" size="lg">
              Shop Now
            </Button>
            <Button variant="hero-secondary" size="lg">
              Compare Models
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose System76 Laptops?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-muted-foreground">Latest Intel processors and professional graphics cards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <HardDrive className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Storage</h3>
              <p className="text-muted-foreground">NVMe SSDs for lightning-fast boot and load times</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brilliant Displays</h3>
              <p className="text-muted-foreground">High-resolution screens with excellent color accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Laptop Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {laptopModels.map((laptop, index) => (
              <Card key={index} className="border-border transition-all">
                <CardHeader>
                  <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                    <Monitor className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle>{laptop.name}</CardTitle>
                    <Badge variant="secondary">{laptop.price}</Badge>
                  </div>
                  <CardDescription>{laptop.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {laptop.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-pop-teal" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Configure & Buy</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laptops;