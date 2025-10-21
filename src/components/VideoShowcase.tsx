import { Button } from "@/components/ui/button";
import { Mic2, Youtube } from "lucide-react";

const VideoShowcase = () => {
  const handlePodcastInterest = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Youtube className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Video Work & Podcast</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out our latest video work on YouTube. We capture your special moments with professional videography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9atGKyq9hfw?start=2760"
              title="Nyarugeta Production Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/axHDorxO_zs?start=236"
              title="Nyarugeta Production Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zA-wR70ap4o?start=105"
              title="Nyarugeta Production Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AmCBidZeP8g"
              title="Nyarugeta Production Video 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg max-w-3xl mx-auto text-center border">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mic2 className="w-10 h-10 text-primary" />
            <h3 className="text-2xl font-bold">We Also Do Podcasts!</h3>
          </div>
          <p className="text-muted-foreground mb-6 text-lg">
            Interested in being featured on our podcast? Share your story, expertise, or passion with our audience. 
            We'd love to hear from you!
          </p>
          <Button 
            size="lg" 
            onClick={handlePodcastInterest}
            className="gap-2"
          >
            <Mic2 className="w-5 h-5" />
            Express Interest in Our Podcast
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
