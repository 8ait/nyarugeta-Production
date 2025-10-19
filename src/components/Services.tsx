import { Heart, Camera, Baby, Cake, Briefcase, Users } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capture every precious moment of your special day with our comprehensive wedding packages",
    color: "text-primary"
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description: "Professional headshots and personal portraits that showcase your unique personality",
    color: "text-accent"
  },
  {
    icon: Baby,
    title: "Maternity Shoots",
    description: "Beautiful and intimate photography celebrating the journey to motherhood",
    color: "text-primary"
  },
  {
    icon: Cake,
    title: "Kids Photography",
    description: "Fun and creative photo sessions that capture the joy and innocence of childhood",
    color: "text-accent"
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional coverage of your business events, conferences, and team gatherings",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Event Photography",
    description: "Complete documentation of parties, celebrations, and special occasions",
    color: "text-accent"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From intimate portraits to grand celebrations, we bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.2)] hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
