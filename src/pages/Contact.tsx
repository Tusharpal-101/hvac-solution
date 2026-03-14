import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 7302531042", href: "tel:+917302531042" },
  { icon: Mail, label: "Email", value: "brotherspal498@gmail.com", href: "mailto:brotherspal498@gmail.com" },
  { icon: MapPin, label: "Address", value: "181 Santi Bhavan, Hapur Road, Modinagar, Ghaziabad 201204" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
];

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };

    emailjs.send(
      "service_5l553np",
      "template_3do0ozu",
      formData,
      "GfA4-xyXY5SchymfT"
    )
    .then(() => {
      setSuccess(true);
      form.reset();
    })
    .catch(() => {
      alert("Failed to send message. Try again.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>

      {/* SUCCESS POPUP */}

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

          <div className="bg-white rounded-xl p-8 text-center max-w-sm w-full shadow-xl">

            <CheckCircle className="mx-auto text-green-500 mb-4" size={60} />

            <h2 className="text-2xl font-bold mb-2">
              Message Sent Successfully
            </h2>

            <p className="text-gray-600 mb-6">
              Thank you for contacting us.  
              Our team will get back to you shortly.
            </p>

            <Button
              onClick={() => setSuccess(false)}
              className="w-full"
            >
              Back to Contact Form
            </Button>

          </div>

        </div>
      )}

      <section className="bg-primary section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Get in touch for a free consultation or quote.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <SectionHeading title="Get In Touch" center={false} />

              <div className="space-y-6 mb-8">

                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <c.icon className="text-accent-foreground" size={22} />
                    </div>

                    <div>
                      <p className="font-heading font-bold text-foreground">{c.label}</p>

                      {c.href ? (
                        <a href={c.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{c.value}</p>
                      )}

                    </div>

                  </div>
                ))}

              </div>

              <div className="rounded-xl overflow-hidden border border-border h-64">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.8!2d77.58!3d28.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ5JzQ4LjAiTiA3N8KwMzQnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="A to Z HVAC Location"
                />

              </div>

            </div>

            <div>

              <SectionHeading title="Send a Message" center={false} />

              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-card rounded-xl p-8 shadow-sm border border-border"
              >

                <Input name="name" placeholder="Your Name" required />

                <Input name="phone" placeholder="Phone Number" type="tel" required />

                <Input name="email" placeholder="Email Address" type="email" required />

                <Textarea name="message" placeholder="Your Message..." rows={5} required />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading text-lg"
                  disabled={loading}
                >

                  {loading ? "Sending..." : "Send Message"}

                </Button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;