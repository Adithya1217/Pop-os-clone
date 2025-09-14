import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Code, Gamepad2, Palette, Rocket, Terminal, Play, MessageCircle, BookOpen, Github } from "lucide-react";
import workflowImage from "@/assets/popos-workflow.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PopOS = () => {
  const tools = [
    {
      name: "Visual Studio Code",
      category: "Development",
      icon: <Code className="h-10 w-10 text-muted-foreground" />,
    },
    {
      name: "Steam",
      category: "Gaming",
      icon: <Gamepad2 className="h-10 w-10 text-muted-foreground" />,
    },
    {
      name: "Blender",
      category: "Creative",
      icon: <Palette className="h-10 w-10 text-muted-foreground" />,
    },
    {
      name: "Docker",
      category: "Development",
      icon: <Rocket className="h-10 w-10 text-muted-foreground" />,
    },
    {
      name: "Terminal",
      category: "System",
      icon: <Terminal className="h-10 w-10 text-muted-foreground" />,
    },
  ];

  const testimonials = [
    {
      name: "Adithya S",
      title: "Software Engineer",
      quote: "Pop!_OS has completely streamlined my development workflow. The auto-tiling and keyboard shortcuts are game-changers for productivity.",
      avatar: "/avatars/01.png",
    },
    {
      name: "S Adithya",
      title: "3D Artist & Designer",
      quote: "The performance on Pop!_OS is incredible. Rendering in Blender is noticeably faster, and the color accuracy on my display is perfect out of the box.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Adi-thya S",
      title: "Data Scientist",
      quote: "I can get right to work without fighting my OS. All my tools, from TensorFlow to RStudio, just work. It’s the perfect Linux distro for scientific computing.",
      avatar: "/avatars/03.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero Section */}
      <section className="relative bg-hero-image bg-cover bg-center py-20 md:py-32">
        {/* Overlay removed per request for no blur/wash */}
        <div className="relative container mx-auto px-6 text-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              Welcome to Pop!_OS.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Unleash your potential on Pop!_OS: an operating system for STEM and creative professionals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-pop-teal hover:bg-pop-teal focus:bg-pop-teal active:bg-pop-teal text-background font-bold text-base h-12 px-8 transition-colors">
                <Download className="mr-2 h-5 w-5" />
                Download Pop!_OS
              </Button>
              <Button size="lg" className="bg-pop-orange hover:bg-pop-orange focus:bg-pop-orange active:bg-pop-orange text-background font-bold text-base h-12 px-8 transition-colors">
                Donate to Pop
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools/Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Your Favorite Tools, Ready to Go.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From coding and designing to gaming and browsing, Pop!_OS provides easy access to the applications you need.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="group flex flex-col items-center justify-center text-center p-4 rounded-lg transition-colors">
                <div className="w-24 h-24 mb-4 bg-muted/40 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                  {/* Replace this with <img src="/path/to/logo.svg" /> */}
                  {tool.icon}
                </div>
                <h3 className="font-semibold text-foreground">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Meet Pop!_OS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              See how our intuitive workflow and powerful customization tools can help you create.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl shadow-black/20">
              <img 
                src={workflowImage}
                alt="Pop!_OS Workflow and Customization"
                className="w-full h-auto opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="bg-black/50 text-white rounded-full h-20 w-20"
                >
                  <Play className="h-10 w-10 fill-white" />
                </Button>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-pop-yellow text-black px-3 py-1 rounded text-sm font-semibold">
                  POP!_OS
                </div>
                <h3 className="text-2xl font-bold mt-2 drop-shadow-md">
                  WORKFLOW & CUSTOMIZATION
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Loved by Professionals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hear from developers, creators, and scientists who use Pop!_OS every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-muted/20 border-border/50">
                <CardContent className="pt-6">
                  <blockquote className="text-lg text-foreground mb-4">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Pop!_OS 22.04 LTS</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
            The installer will automatically select the correct version for your hardware.
          </p>
          <Button size="lg" className="bg-pop-orange text-background font-bold text-lg h-14 px-10">
            <Download className="mr-3 h-6 w-6" />
            Download Pop!_OS
          </Button>
          <p className="text-muted-foreground mt-8">
            Need help? Check the <a href="#" className="text-pop-teal font-semibold">installation guide</a> 
            or <a href="#" className="text-pop-teal font-semibold">system requirements</a>.
          </p>
        </div>
      </section>

      {/* Unleash Your Potential Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Unleash Your Potential
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Pop!_OS is free to download and freeing to use. Get started and take your work to the next level.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pop-teal rounded-full mb-4 flex items-center justify-center shadow-md">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Pop!_OS Docs</h3>
              <p className="text-sm text-muted-foreground">Comprehensive documentation and guides.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pop-orange rounded-full mb-4 flex items-center justify-center shadow-md">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Community Chat</h3>
              <p className="text-sm text-muted-foreground">Get support and discuss with other users.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pop-yellow rounded-full mb-4 flex items-center justify-center shadow-md">
                <Github className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">GitHub</h3>
              <p className="text-sm text-muted-foreground">Contribute to our open source projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopOS;