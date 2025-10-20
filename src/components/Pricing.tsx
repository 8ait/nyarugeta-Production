import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "STANDARD PACKAGE",
      subtitle: "VIDEO AND PHOTO",
      price: "$4,000",
      breakdown: "Video: $2,500 | Photo: $1,500",
      features: [
        "Unlimited photos and 50 Photoshop edited",
        "13 hours shooting",
        "2 videographers",
        "Full wedding video",
        "1 way of delivering by link",
      ],
      popular: false,
    },
    {
      name: "PREMIUM PACKAGE",
      subtitle: "VIDEO AND PHOTO",
      price: "$4,500",
      breakdown: "Video: $3,000 | Photo: $1,500",
      features: [
        "Unlimited photos and 50 edited in Photoshop",
        "15 hours shooting",
        "4 cameras onboard",
        "3 videographers and 1 photographer",
        "5 minutes highlights",
        "Full wedding video and post it on our YouTube platform",
        "Fast and 2 way delivery: by link and flash",
      ],
      popular: true,
    },
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your special day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-2">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-sm uppercase tracking-wide">
                  {pkg.subtitle}
                </CardDescription>
                <div className="mt-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {pkg.breakdown}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToBooking}
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Book This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
