import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const serviceTypes = [
  "HVAC Installation", "Electrical Supply", "Plumbing Work", "Pump & Motor Repair",
  "Ducting & Insulation", "Fire Pipe Work", "Chiller Line Work", "Panel Repair",
  "VFD Repair", "PLC Repair", "AC Drive Repair", "Servo Motor Repair", "Other",
];

const ServiceRequest = () => {

  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [showPopup, setShowPopup] = useState(false); // ✅ popup state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      address: form.address.value,
      service: service,
      message: form.message.value,
    };

    emailjs.send(
      "service_5l553np",
      "template_1uu6is8",
      data,
      "GfA4-xyXY5SchymfT"
    )
    .then(() => {
      toast.success("Service request submitted! We'll contact you shortly.");
      form.reset();
      setService("");
      setShowPopup(true); // ✅ popup show
    })
    .catch(() => {
      toast.error("Failed to submit request. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });

  };

  return (
    <div>

      <section className="bg-primary section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Service Request
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Tell us about your requirements and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-2xl">

          <SectionHeading
            title="Submit a Request"
            subtitle="Fill in the details below and our team will reach out within 24 hours."
          />

          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-card rounded-xl p-8 shadow-sm border border-border"
          >

            <div className="grid sm:grid-cols-2 gap-4">

              <Input
                name="name"
                placeholder="Full Name"
                required
              />

              <Input
                name="phone"
                placeholder="Phone Number"
                type="tel"
                required
              />

            </div>

            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              required
            />

            <Input
              name="address"
              placeholder="Service Address"
              required
            />

            <Select
              value={service}
              onValueChange={setService}
              required
            >

              <SelectTrigger>
                <SelectValue placeholder="Select Service Type" />
              </SelectTrigger>

              <SelectContent>

                {serviceTypes.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}

              </SelectContent>

            </Select>

            <Textarea
              name="message"
              placeholder="Describe your requirements..."
              rows={5}
              required
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading text-lg"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </Button>

          </form>

        </div>
      </section>

      {/* ✅ Popup after submission */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm text-center shadow-lg">
            <h2 className="text-xl font-bold mb-2">Request Submitted!</h2>
            <p className="mb-4">Thank you for your request. Our team will contact you soon.</p>
            <Button
              onClick={() => setShowPopup(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Close
            </Button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ServiceRequest;