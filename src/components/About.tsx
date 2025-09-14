import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Github } from "lucide-react";
import teamImage from "@/assets/system76-team.jpg";

const About = () => {
  return (
    <div className="bg-background">
      {/* About System76 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-2">Proud Advocates for Open Source</p>
            <h2 className="text-4xl font-bold text-foreground">
              ABOUT SYSTEM76
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Built for User Freedom</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Pop!_OS is engineered and designed in-house by System76, the US computer
                manufacturer. From our factory in Colorado, we craft open source software,
                repairable computers, and airtight firmware—with the aim of empowering
                users' ambitions on the best-quality product we can muster.
              </p>
              <Button variant="outline">
                OUR MISSION
              </Button>
            </div>
            <div className="relative">
              <img 
                src={teamImage}
                alt="System76 team working in factory"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unleash Your Potential */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            UNLEASH YOUR POTENTIAL
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pop!_OS is free to download, and freeing to use. Get started with this powerful OS
            and take to the stars.
          </p>
          <Button variant="secondary" size="lg" className="mb-12">
            DOWNLOAD
          </Button>
          
          {/* Quick links */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Pop Docs</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive documentation and guides
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Pop! Chat</h3>
              <p className="text-sm text-muted-foreground">
                Community support and discussions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-yellow rounded-full mx-auto mb-4 flex items-center justify-center shadow-md ring-1 ring-black/10">
                <Github className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">GitHub</h3>
              <p className="text-sm text-muted-foreground">
                Open source development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;