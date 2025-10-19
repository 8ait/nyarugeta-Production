import { Button } from "@/components/ui/button";
import { Camera, Sparkles } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src={logo} 
              alt="Nyarugeta Pro Logo" 
              className="w-64 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Headline */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Capturing Your
              <span className="block text-gradient mt-2">Perfect Moments</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Professional photography and media production services for weddings, events, portraits, and more
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
            <Button 
              size="lg" 
              variant="hero" 
              onClick={scrollToBooking}
              className="text-lg px-8 py-6"
            >
              <Camera className="mr-2" />
              Book a Session
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6"
            >
              <Sparkles className="mr-2" />
              View Portfolio
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up delay-400">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Professional Quality</h3>
              <p className="text-sm text-muted-foreground">High-end equipment and expert editing</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Diverse Services</h3>
              <p className="text-sm text-muted-foreground">Weddings, portraits, events, and more</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Quick Delivery</h3>
              <p className="text-sm text-muted-foreground">Fast turnaround on all projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
