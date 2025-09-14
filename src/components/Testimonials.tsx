import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Stuart L",
      quote: "My favorite thing about Pop!_OS is that it literally gets out of your way and I can get so much work done without any problems. My favorite feature has to be the docker and the sweet animations!"
    },
    {
      name: "Sarah M",
      quote: "The workflow customization in Pop!_OS is incredible. As a developer, I can set up my environment exactly how I need it."
    },
    {
      name: "Alex K", 
      quote: "Gaming on Pop!_OS has been a game-changer. Steam and other games run smoothly, and the hybrid graphics support is fantastic."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-hero-image bg-cover bg-center">
      {/* Dark overlay for readability (no blur) */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-8">
            TESTIMONIALS
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_4px_30px_-5px_rgba(0,0,0,0.6)] rounded-md p-10 md:p-14">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-6 tracking-wide">{testimonials[currentTestimonial].name}</h3>
              <blockquote className="text-lg leading-relaxed max-w-3xl mx-auto italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;