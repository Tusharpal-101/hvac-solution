import { CheckCircle, Award, Users, Target } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-hvac.jpg";

const values = [
  { icon: Award, title: "Excellence", desc: "We maintain the highest standards in every project." },
  { icon: Users, title: "Client Focus", desc: "Your satisfaction drives everything we do." },
  { icon: Target, title: "Precision", desc: "Accurate, reliable, and efficient engineering." },
];

const About = () => (
  <div>
   <section
  className="relative section-padding text-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/about-bg.jpg')"
  }}
>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative container-custom text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
      About Us
    </h1>

    <p className="text-white/80 max-w-xl mx-auto">
      Learn more about our HVAC engineering expertise and our commitment
      to delivering quality industrial solutions.
    </p>
  </div>

</section>

    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src={aboutImg} alt="HVAC engineer at work" className="w-full h-80 object-cover" />
        </div>
        <div>
          <SectionHeading title="Who We Are" center={false} />
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">A to Z HVAC Engineering Solution</strong> is a trusted name in HVAC, electrical, plumbing, and industrial engineering services based in Ghaziabad, India.
          </p>
          <p className="text-muted-foreground mb-6">
            With over 15 years of experience, we specialize in end-to-end solutions — from supply and installation to repair and maintenance of HVAC systems, panels, VFDs, PLCs, servo motors, and more.
          </p>
          <div className="space-y-3">
            {["Certified & experienced engineers", "ISO-standard quality practices", "On-time project delivery", "24/7 emergency support"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-secondary shrink-0" size={20} />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-gradient section-padding">
      <div className="container-custom">
        <SectionHeading title="Our Values" subtitle="The principles that guide every project we undertake." />
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-6 text-center hover-lift shadow-sm">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-accent-foreground" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
