import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const weddingPackages = [
    {
      name: "WEDDING PREMIUM FULL PACKAGE",
      subtitle: "VIDEO & PHOTO",
      price: "A$4,500",
      duration: "14 hrs 45 mins",
      features: [
        "All-day shoot",
        "Unlimited photos",
        "Choice of photoshoot location",
      ],
      popular: true,
    },
    {
      name: "WEDDING PREMIUM PACKAGE",
      subtitle: "VIDEO PACKAGE",
      price: "A$3,000",
      duration: "14 hrs",
      features: [
        "10-minute wedding video highlights",
        "Full wedding video edited",
        "Posted to our social media",
      ],
      popular: false,
    },
    {
      name: "WEDDING PHOTO",
      subtitle: "PHOTO PACKAGE",
      price: "A$1,500",
      duration: "14 hrs",
      features: [
        "Unlimited photos",
        "Any location of your choice",
      ],
      popular: false,
    },
  ];

  const specialOccasions = [
    {
      name: "ENGAGEMENT VIDEO & PHOTO PACKAGE",
      price: "A$2,700",
      duration: "7 hrs",
      features: [
        "Unlimited photos",
        "Full 3-hour video (super edited)",
      ],
    },
    {
      name: "BIRTHDAY PACKAGE",
      price: "A$2,000",
      duration: "6 hrs",
      features: [
        "Video and photo coverage",
        "2-hour edited video",
        "Unlimited photos",
      ],
    },
  ];

  const photoSessions = [
    {
      name: "FAMILY PHOTO",
      price: "A$500",
      duration: "3 hrs",
      features: [
        "20 edited photos",
        "2 outfit changes",
      ],
    },
    {
      name: "OUTDOOR SHOOTS",
      price: "A$450",
      duration: "2 hrs 30 mins",
      features: [
        "12 edited photos",
        "3 outfit changes",
        "Any location in Brisbane",
      ],
    },
    {
      name: "COUPLE PHOTO SHOOTS",
      price: "A$400",
      duration: "3 hrs",
      features: [
        "12 edited photos",
        "2 outfit changes",
      ],
    },
    {
      name: "STUDIO PHOTO SHOOTS",
      price: "A$300",
      duration: "3 hrs",
      features: [
        "12 edited pictures",
        "3 outfit changes",
      ],
    },
    {
      name: "MATERNITY PHOTO SHOOTS",
      price: "A$300",
      duration: "3 hrs",
      features: [
        "3 outfit changes",
        "12 edited photos",
      ],
    },
    {
      name: "SOCCER PHOTOS",
      price: "A$250",
      duration: "2 hrs",
      features: [
        "Unlimited photos",
      ],
    },
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  const renderPackageCard = (pkg: any, index: number) => (
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
      <CardHeader className="text-center pb-6 pt-8">
        <CardTitle className="text-xl font-bold mb-2">
          {pkg.name}
        </CardTitle>
        {pkg.subtitle && (
          <CardDescription className="text-xs uppercase tracking-wide">
            {pkg.subtitle}
          </CardDescription>
        )}
        <div className="mt-4">
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {pkg.price}
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            {pkg.duration}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={scrollToBooking}
          className="w-full"
          variant={pkg.popular ? "default" : "outline"}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Packages & Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your special occasion
          </p>
        </div>

        {/* Wedding Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Wedding Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weddingPackages.map((pkg, index) => renderPackageCard(pkg, index))}
          </div>
        </div>

        {/* Special Occasions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Special Occasions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialOccasions.map((pkg, index) => renderPackageCard(pkg, index))}
          </div>
        </div>

        {/* Photo Sessions */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Photo Sessions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {photoSessions.map((pkg, index) => renderPackageCard(pkg, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
