import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import workflowImage from "@/assets/popos-workflow.jpg";

const Features = () => {
  const softwareIcons = [
    { name: "Steam", icon: "🎮" },
    { name: "CoreCtrl", icon: "⚙️" },
    { name: "Firefox", icon: "🦊" },
    { name: "VS Code", icon: "💻" },
    { name: "Zoom", icon: "📹" },
    { name: "Spotify", icon: "🎵" },
    { name: "VLC", icon: "🎬" },
    { name: "Plex", icon: "📺" },
    { name: "Dropbox", icon: "📦" },
    { name: "MindMap", icon: "🧠" },
    { name: "Blender", icon: "🎨" },
    { name: "OBS", icon: "📺" },
    { name: "ClockWise", icon: "⏰" },
    { name: "Discord", icon: "💬" },
    { name: "Telegram", icon: "📱" }
  ];

  const features = [
    {
      title: "Hybrid Graphics",
      description: "Set phasers to stunning performance. Toggle between battery-saving and high-powered graphics, or launch individual apps on GPU power.",
      image: "🖥️"
    },
    {
      title: "Gaming", 
      description: "Steam, Lutris, and GameHub create an incredible gaming experience in selection and performance. Let your game library roam free on one OS.",
      image: "🎮"
    },
    {
      title: "Do Not Disturb",
      description: "Get rid of any and all notifications for however long you like. Cast out ye heathens, for there is many a work to be done!",
      image: "🔕"
    }
  ];

  return (
    <div className="bg-background">
      {/* Evolving Banner Section */}
      <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6 text-foreground">
            Pop!_OS Is Evolving
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
            COSMIC, our budding desktop environment, brings new features, refinements, core apps, stability, security, and performance to Pop!_OS users everywhere.
          </p>
          <Button variant="outline" className="mb-4">
            Learn more about COSMIC
          </Button>
        </div>
      </section>

      {/* Meet Pop!_OS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            MEET POP!_OS
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-space">
              <img 
                src={workflowImage}
                alt="Pop!_OS Workflow and Customization"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="bg-black/50 text-white rounded-full p-4"
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="bg-pop-yellow text-black px-3 py-1 rounded text-sm font-semibold">
                  POP!_OS
                </div>
                <h3 className="text-xl font-bold mt-2">
                  WORKFLOW &<br />CUSTOMIZATION
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pop!_OS */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-2">FEATURES</p>
            <h2 className="text-4xl font-bold text-foreground">
              WHY POP!_OS?
            </h2>
          </div>

          {/* Workflow Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Workflow</h3>
              <p className="text-muted-foreground mb-6">
                Pop!_OS is designed for fast navigation, easy workspace organization,
                and fluid, convenient workflow. Your operating system should
                encourage discovery, not obstruct it.
              </p>
              <Button variant="outline">
                LEARN MORE
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {/* Workflow screenshots placeholder */}
              <div className="col-span-4 bg-gray-800 rounded-lg p-4 aspect-video">
                <img 
                  src={workflowImage} 
                  alt="Pop!_OS Desktop" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Compatibility Section (icons left, text right) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Icons Column */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-5 gap-4">
                {softwareIcons.map((software) => (
                  <div
                    key={software.name}
                    className="aspect-square bg-white rounded-lg shadow-sm border border-border/40 flex items-center justify-center text-2xl font-medium hover:shadow-md transition-transform hover:-translate-y-1"
                    title={software.name}
                    aria-label={software.name}
                  >
                    {software.icon}
                  </div>
                ))}
              </div>
            </div>
            {/* Text Column */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Compatibility</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Develop software out of the box with a vast array of libraries and tools at your disposal.
                Pop!_OS supports both APT and Flatpak, making it simple to install, remove, and update
                applications. Enjoy broad compatibility with popular development, creative, and productivity
                tools so you can get to work immediately.
              </p>
              <Button variant="outline">
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Security Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Keep Your Computer Secure</h3>
              <p className="text-muted-foreground mb-6">
                Built with security at its core. Full-disk encryption comes standard, keeping
                your data safe from unauthorized access. You're in control of system updates,
                installing them on your schedule to minimize disruptions. Privacy features
                help protect your personal information, while firmware management ensures
                your hardware stays up to date with the latest security patches.
              </p>
            </div>
            <div className="bg-gradient-space rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h4 className="text-white text-xl font-semibold">Security First</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Other Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">
              OTHER FEATURES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-4">{feature.image}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
