import { Package, Cpu, CircuitBoard, Cog, Snowflake, Wind, Zap, Droplets } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { icon: Snowflake, name: "HVAC Units", desc: "Industrial chillers, AHUs, fan coil units, and split systems." },
  { icon: CircuitBoard, name: "Electrical Panels", desc: "MCC, PCC, APFC panels and distribution boards." },
  { icon: Cpu, name: "VFD & AC Drives", desc: "Variable frequency drives for motor speed control." },
  { icon: Cog, name: "Pumps & Motors", desc: "Centrifugal, submersible, and industrial motors." },
  { icon: Wind, name: "Ducting Materials", desc: "GI ducts, flex ducts, insulation materials." },
  { icon: Zap, name: "Electrical Supplies", desc: "Cables, switchgear, MCBs, and accessories." },
  { icon: Droplets, name: "Plumbing Supplies", desc: "Pipes, fittings, valves, and fixtures." },
  { icon: Package, name: "Fire Safety Equipment", desc: "Fire pipes, sprinklers, and safety accessories." },
];

const Products = () => (
  <div>
    <section className="bg-primary section-padding">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Products</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">Quality industrial products for all engineering needs.</p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Product Catalog" subtitle="We supply premium-quality equipment from trusted brands." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-card rounded-xl p-6 hover-lift shadow-sm border border-border group text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                <p.icon className="text-accent-foreground group-hover:text-secondary-foreground transition-colors" size={30} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
