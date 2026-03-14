import { Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  { title: "5 Signs Your HVAC System Needs Immediate Repair", date: "March 5, 2026", excerpt: "Don't ignore these warning signs — they could save you thousands in emergency repairs.", category: "Maintenance" },
  { title: "Understanding VFD Technology for Industrial Applications", date: "February 20, 2026", excerpt: "How variable frequency drives improve energy efficiency and motor control.", category: "Technology" },
  { title: "The Importance of Regular Duct Cleaning", date: "February 10, 2026", excerpt: "Clean ducts mean better air quality and lower energy bills for your facility.", category: "Tips" },
  { title: "Choosing the Right Chiller System for Your Building", date: "January 28, 2026", excerpt: "A guide to selecting the optimal chiller for commercial and industrial spaces.", category: "Guide" },
  { title: "Fire Safety Compliance: What You Need to Know", date: "January 15, 2026", excerpt: "Stay compliant with the latest fire safety codes and regulations.", category: "Safety" },
  { title: "Energy-Efficient HVAC Solutions for 2026", date: "January 5, 2026", excerpt: "Latest innovations in HVAC that can reduce your energy consumption by up to 40%.", category: "Innovation" },
];

const Blog = () => (
  <div>
    <section className="bg-primary section-padding">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Blog</h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">Insights, tips, and updates from the HVAC engineering world.</p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Latest Articles" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-card rounded-xl overflow-hidden hover-lift shadow-sm border border-border group">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">{p.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar size={12} /> {p.date}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.excerpt}</p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
