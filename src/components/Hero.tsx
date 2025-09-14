import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-hero-image bg-cover bg-center h-[60vh] flex items-center justify-center">
      {/* Overlay removed as requested */}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
          Welcome to Pop!_OS
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          Unleash your potential on Pop!_OS: an operating system for STEM and
          creative professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-pop-teal text-white font-semibold hover:bg-pop-teal focus:bg-pop-teal active:bg-pop-teal shadow-glow-teal"
          >
            DOWNLOAD
          </Button>
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-pop-orange text-white font-semibold hover:bg-pop-orange focus:bg-pop-orange active:bg-pop-orange shadow-glow-orange"
          >
            DONATE TO POP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;