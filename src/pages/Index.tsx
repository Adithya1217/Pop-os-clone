import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Hardware from "@/components/Hardware";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Hardware />
      <Testimonials />
      <About />
    </div>
  );
};

export default Index;
