import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-custom section-padding !py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-heading font-bold text-lg">AZ</span>
            </div>
            <div>
              <span className="font-heading font-bold text-lg leading-none">A to Z HVAC</span>
              <span className="block text-xs opacity-70 leading-none">Engineering Solution</span>
            </div>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Complete HVAC engineering solutions — from installation to repair. Trusted by industries across India.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-secondary">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Services", "Projects", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-secondary">Services</h4>
          <div className="space-y-2 text-sm opacity-70">
            {["HVAC Installation", "Electrical Supply", "Plumbing Work", "Panel Repair"].map((s) => (
              <p key={s}>{s}</p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-secondary">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:+917302531042" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Phone size={14} /> +91 7302531042
            </a>
            <a href="mailto:brotherspal498@gmail.com" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Mail size={14} /> brotherspal498@gmail.com
            </a>
            <div className="flex items-start gap-2 opacity-70">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>181 Santi Bhavan, Hapur Road, Modinagar, Ghaziabad 201204</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} A to Z HVAC Engineering Solution. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
