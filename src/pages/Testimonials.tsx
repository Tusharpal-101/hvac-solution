import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Factory Manager",
    text: "A to Z HVAC did an exceptional job with our entire factory HVAC system. Professional, on-time, and within budget.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Hospital Administrator",
    text: "Their ducting and insulation work was top-notch. The air quality in our facility improved dramatically.",
    rating: 5,
  },
  {
    name: "Amit Gupta",
    role: "Mall Operations Head",
    text: "Reliable fire pipe work and great after-service support. Highly recommend for large-scale projects.",
    rating: 5,
  },
  {
    name: "Suresh Yadav",
    role: "Plant Engineer",
    text: "Quick VFD repair saved us from costly downtime. Their technicians are very knowledgeable.",
    rating: 5,
  },
  {
    name: "Neha Singh",
    role: "Office Manager",
    text: "From electrical supply to installation — seamless experience. They truly offer A to Z solutions!",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Building Contractor",
    text: "We've partnered with them on multiple projects. Consistent quality and professional conduct every time.",
    rating: 5,
  },
];

const Testimonials = () => (
  <div>
    
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-primary via-primary/90 to-primary section-padding text-center">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Testimonials
        </h1>
        <p className="text-white/70 max-w-xl mx-auto text-lg">
          What our clients say about working with us.
        </p>
      </div>
    </section>

    {/* Reviews Section */}
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          title="Client Reviews"
          subtitle="Trusted by industries across India."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-card/80 backdrop-blur-lg border border-border 
              rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 
              transition-all duration-300 relative"
            >
              
              {/* Quote Icon */}
              <Quote
                className="text-accent-foreground/20 absolute top-5 right-5 group-hover:scale-110 transition"
                size={34}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400 group-hover:scale-110 transition"
                    size={18}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm mb-6 italic leading-relaxed">
                "{t.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {t.role}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;