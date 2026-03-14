import { Zap, Droplets, Cog, ThermometerSun, Wind, Flame, Snowflake, CircuitBoard, Cpu, Activity, Settings, RotateCcw } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Zap, title: "Electrical Items Supply", desc: "Complete range of industrial electrical components and accessories for all your project needs." },
  { icon: Droplets, title: "Plumbing Work", desc: "Professional plumbing installation, maintenance, and repair for commercial and industrial facilities." },
  { icon: Cog, title: "Pump & Motor Repair", desc: "Expert diagnosis and repair of all types of pumps and motors to minimize downtime." },
  { icon: ThermometerSun, title: "HVAC Installation", desc: "Full HVAC system design, installation, and commissioning for optimal climate control." },
  { icon: Wind, title: "Ducting & Insulation", desc: "Custom ductwork fabrication and insulation services for efficient air distribution." },
  { icon: Flame, title: "Fire Pipe Work", desc: "Fire protection piping systems — installation, testing, and compliance certification." },
  { icon: Snowflake, title: "Chiller Line Work", desc: "Chilled water piping systems for industrial cooling applications." },
  { icon: CircuitBoard, title: "Panel Repair", desc: "Electrical panel troubleshooting, repair, and upgrades for reliable power distribution." },
  { icon: Cpu, title: "VFD Repair", desc: "Variable frequency drive repair and programming for motor control efficiency." },
  { icon: Activity, title: "PLC Repair", desc: "PLC diagnostics, programming, and repair for automation systems." },
  { icon: Settings, title: "AC Drive Repair", desc: "AC drive repair and maintenance to keep your industrial processes running." },
  { icon: RotateCcw, title: "Servo Motor Repair", desc: "Precision servo motor repair and calibration for high-accuracy applications." },
];

const Services = () => (
  <div>
    <section className="bg-primary section-padding">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Comprehensive HVAC and engineering services — from supply to repair.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title="What We Offer" subtitle="End-to-end engineering services tailored to your industrial needs." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 hover-lift shadow-sm group border border-border"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
                <s.icon className="text-accent-foreground group-hover:text-secondary-foreground transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
