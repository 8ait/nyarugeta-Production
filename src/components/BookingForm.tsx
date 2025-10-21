import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Send } from "lucide-react";

const eventServices = {
  wedding: [
    "Wedding Premium Full Package (Video & Photo) - A$4,500",
    "Wedding Premium Package (Video) - A$3,000",
    "Wedding Photo Package - A$1,500"
  ],
  engagement: [
    "Engagement Video & Photo Package - A$2,700"
  ],
  birthday: [
    "Birthday Package (Video & Photo) - A$2,000"
  ],
  family: [
    "Family Photo - A$500"
  ],
  outdoor: [
    "Outdoor Shoots - A$450"
  ],
  couple: [
    "Couple Photo Shoots - A$400"
  ],
  studio: [
    "Studio Photo Shoots - A$300"
  ],
  maternity: [
    "Maternity Photo Shoots - A$300"
  ],
  soccer: [
    "Soccer Photos - A$250"
  ]
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  eventType: z.string().min(1, "Please select an event type"),
  services: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BookingForm = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      services: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Booking submitted:", data);
    toast.success("Booking request submitted!", {
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
    setSelectedEvent("");
  };

  const handleEventTypeChange = (value: string) => {
    setSelectedEvent(value);
    form.setValue("eventType", value);
    form.setValue("services", ""); // Reset services when event type changes
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-gradient">Session</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's create something beautiful together. Fill out the form below to get started.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type *</FormLabel>
                      <Select onValueChange={handleEventTypeChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-popover z-50">
                          <SelectItem value="wedding">Wedding Packages</SelectItem>
                          <SelectItem value="engagement">Engagement</SelectItem>
                          <SelectItem value="birthday">Birthday</SelectItem>
                          <SelectItem value="family">Family Photo</SelectItem>
                          <SelectItem value="outdoor">Outdoor Shoots</SelectItem>
                          <SelectItem value="couple">Couple Photo Shoots</SelectItem>
                          <SelectItem value="studio">Studio Photo Shoots</SelectItem>
                          <SelectItem value="maternity">Maternity Photo Shoots</SelectItem>
                          <SelectItem value="soccer">Soccer Photos</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} disabled={!selectedEvent}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-popover z-50">
                          {selectedEvent && eventServices[selectedEvent as keyof typeof eventServices]?.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Date *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input type="date" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about your event, special requirements, or any questions you have..."
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" variant="hero" className="w-full">
                <Send className="mr-2" />
                Submit Booking Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
