import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mic2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const podcastSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  topic: z.string().trim().min(1, "Topic is required").max(200, "Topic must be less than 200 characters"),
  details: z.string().trim().min(1, "Details are required").max(1000, "Details must be less than 1000 characters"),
});

interface PodcastInterestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PodcastInterestForm = ({ open, onOpenChange }: PodcastInterestFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = podcastSchema.parse(formData);
      setIsSubmitting(true);

      const message = `*Podcast Interest*%0A%0A*Name:* ${encodeURIComponent(validated.name)}%0A*Email:* ${encodeURIComponent(validated.email)}%0A*Phone:* ${encodeURIComponent(validated.phone)}%0A*Topic:* ${encodeURIComponent(validated.topic)}%0A*Details:* ${encodeURIComponent(validated.details)}`;
      
      const whatsappUrl = `https://wa.me/250788446161?text=${message}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Opening WhatsApp",
        description: "Your podcast interest is being sent via WhatsApp.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        details: "",
      });
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Mic2 className="w-6 h-6 text-primary" />
            <DialogTitle>Express Interest in Our Podcast</DialogTitle>
          </div>
          <DialogDescription>
            Share your story, expertise, or passion. We'd love to feature you on our podcast!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              maxLength={100}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              maxLength={255}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+250 XXX XXX XXX"
              maxLength={20}
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Topic/Expertise *</Label>
            <Input
              id="topic"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              placeholder="What would you like to discuss?"
              maxLength={200}
            />
            {errors.topic && <p className="text-sm text-destructive">{errors.topic}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Tell Us More *</Label>
            <Textarea
              id="details"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Share your story or what makes you passionate about this topic..."
              rows={4}
              maxLength={1000}
            />
            {errors.details && <p className="text-sm text-destructive">{errors.details}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            <Mic2 className="w-4 h-4 mr-2" />
            {isSubmitting ? "Submitting..." : "Submit Interest"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PodcastInterestForm;
