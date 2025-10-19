import wedding1 from "@/assets/wedding-1.jpeg";
import wedding2 from "@/assets/wedding-2.jpeg";
import portrait1 from "@/assets/portrait-1.jpeg";
import portrait2 from "@/assets/portrait-2.jpeg";
import maternity1 from "@/assets/maternity-1.jpeg";
import maternity2 from "@/assets/maternity-2.jpeg";
import kids1 from "@/assets/kids-1.jpeg";

const portfolioItems = [
  { image: wedding1, category: "Wedding", title: "Elegant Bridal Portrait" },
  { image: portrait1, category: "Portrait", title: "Professional Headshot" },
  { image: maternity1, category: "Maternity", title: "Expecting Joy" },
  { image: wedding2, category: "Wedding", title: "Celebration Moments" },
  { image: portrait2, category: "Portrait", title: "Studio Portrait" },
  { image: maternity2, category: "Maternity", title: "Motherhood Journey" },
  { image: kids1, category: "Kids", title: "Childhood Wonder" }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into our work capturing life's beautiful moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-muted cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-xs font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
