import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, Zap, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-hvac.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import State from "./State";

const highlights = [
  { icon: ThermometerSun, title: "HVAC Solutions", desc: "Complete heating, ventilation & air conditioning services" },
  { icon: Zap, title: "Electrical Works", desc: "Industrial electrical supply and installation" },
  { icon: Wrench, title: "Repair & Maintenance", desc: "Expert repair for panels, VFDs, PLCs & motors" },
  { icon: Shield, title: "Quality Assured", desc: "Certified professionals, premium materials" },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "24/7", label: "Support Available" },
];

const Index = () => (
  <div>

    {/* Hero Section */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img src={heroImg} alt="HVAC engineering systems" className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms]" />

      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 container-custom section-padding w-full">
        <div className="max-w-2xl animate-fade-up">

          <span className="inline-block px-5 py-2 rounded-full bg-secondary/90 text-secondary-foreground text-sm font-semibold mb-6 shadow-md">
            Trusted HVAC Engineering Partner
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Complete HVAC & <br /> Engineering Solutions
          </h1>

          <p className="text-lg text-white/80 mb-8 max-w-lg">
            From installation to repair — A to Z HVAC Engineering Solution delivers reliable professional services for commercial & industrial facilities.
          </p>

          <div className="flex flex-wrap gap-4">

            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg px-8"
            >
              <Link to="/services">
                Our Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>

          </div>
        </div>
      </div>
    </section>

    {/* Stats Section  state section */}
    <State/>
    {/* Highlights */}
    <section className="section-gradient section-padding">
      <div className="container-custom">

        <SectionHeading
          title="Why Choose Us"
          subtitle="We provide end-to-end HVAC and engineering solutions with certified expertise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="bg-card rounded-2xl p-7 border border-border hover:border-secondary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >

              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-secondary transition-all duration-300">

                <h.icon
                  className="text-accent-foreground group-hover:text-white transition-colors"
                  size={28}
                />

              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {h.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {h.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-20 bg-gradient-to-r from-primary via-primary/90 to-primary overflow-hidden">
  <div className="container-custom text-center relative z-10">
    
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
      Ready to Start Your Project?
    </h2>

    <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
      Get a free consultation and a personalized quote for your HVAC or 
      engineering needs. Our experts are ready to help you build the 
      perfect solution.
    </p>

    <Button
      asChild
      size="lg"
      className="bg-secondary text-secondary-foreground px-10 py-6 text-lg 
      rounded-full shadow-lg hover:scale-105 hover:shadow-2xl 
      transition-all duration-300"
    >
      <Link to="/service-request" className="flex items-center gap-2">
        Request a Service
        <ArrowRight size={20} />
      </Link>
    </Button>

  </div>

  {/* Decorative blur background */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl"></div>
</section>

  </div>
);

export default Index;