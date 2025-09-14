import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cpu, Server, Zap } from "lucide-react";

const Workstations = () => {
  const workstations = [
    {
      name: "Thelio Major",
      price: "$4,999",
      description: "Professional workstation for intensive computing tasks",
      features: ["AMD Threadripper PRO", "128GB ECC RAM", "Multiple GPUs", "Enterprise Support"],
      badge: "Most Popular"
    },
    {
      name: "Bonobo WS", 
      price: "$2,799",
      description: "Mobile workstation with desktop-class performance",
      features: ["Intel Xeon", "64GB RAM", "NVIDIA Quadro RTX", "17.3\" 4K Display"],
      badge: "Portable"
    },
    {
      name: "Serval Pro WS",
      price: "$3,499", 
      description: "Compact workstation for creative professionals",
      features: ["Intel Core i9", "64GB RAM", "NVIDIA RTX A4000", "Thunderbolt 4"],
      badge: "Creative"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Professional Workstations
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-8">
            Enterprise-grade workstations engineered for demanding professional workflows. 
            Built with certified components and backed by professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-primary" size="lg">
              Configure Workstation
            </Button>
            <Button variant="hero-secondary" size="lg">
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Professionals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Engineering & CAD</h3>
              <p className="text-muted-foreground">Complex 3D modeling, simulations, and engineering workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Science & AI</h3>
              <p className="text-muted-foreground">Machine learning, data analysis, and scientific computing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
              <p className="text-muted-foreground">Video editing, 3D rendering, and multimedia production</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Workstation Models</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {workstations.map((workstation, index) => (
              <Card key={index} className="border-border transition-all relative">
                {workstation.badge && (
                  <Badge className="absolute -top-2 left-4 bg-pop-orange text-white">
                    {workstation.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                    <Server className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl">{workstation.name}</CardTitle>
                    <span className="text-2xl font-bold text-pop-teal">{workstation.price}</span>
                  </div>
                  <CardDescription className="text-base">
                    {workstation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {workstation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-pop-teal" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <Button className="w-full">Configure & Price</Button>
                    <Button variant="outline" className="w-full">
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional-grade support and services for mission-critical workloads
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Round-the-clock technical assistance</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">On-Site Service</h4>
              <p className="text-sm text-muted-foreground">Field engineer visits when needed</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Custom Configs</h4>
              <p className="text-sm text-muted-foreground">Tailored specifications for your needs</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Bulk Pricing</h4>
              <p className="text-sm text-muted-foreground">Volume discounts for large orders</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workstations;