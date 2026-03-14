import { MapPin, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const openings = [
  { title: "HVAC Service Engineer", location: "Ghaziabad", type: "Full-time", experience: "3-5 years" },
  { title: "Electrical Technician", location: "Ghaziabad", type: "Full-time", experience: "2-4 years" },
  { title: "Plumbing Supervisor", location: "Ghaziabad", type: "Full-time", experience: "5+ years" },
  { title: "PLC/VFD Repair Specialist", location: "Ghaziabad", type: "Full-time", experience: "3-5 years" },
];

const Careers = () => (
  <div>
    <section className="bg-primary section-padding">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Careers</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">Join our team and grow your engineering career.</p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <SectionHeading title="Open Positions" subtitle="We're always looking for skilled professionals. Send your resume to brotherspal498@gmail.com" />
        <div className="space-y-4">
          {openings.map((o) => (
            <div key={o.title} className="bg-card rounded-xl p-6 border border-border hover-lift shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">{o.title}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {o.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {o.type}</span>
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {o.experience}</span>
                </div>
              </div>
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0">
                <a href="mailto:brotherspal498@gmail.com?subject=Application: ${o.title}">Apply Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Careers;
