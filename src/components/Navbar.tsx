import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
];

const moreLinks = [
  { to: "/service-request", label: "Service Request" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b shadow-sm">

      <div className="container-custom flex items-center justify-between h-16 px-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold">AZ</span>
          </div>

          <div className="hidden sm:block">
            <span className="font-bold text-lg text-gray-800">A to Z HVAC</span>
            <span className="block text-xs text-gray-500">Engineering Solution</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-2">

          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition
              ${
                location.pathname === link.to
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >

            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              More <ChevronDown size={16} />
            </button>

            {moreOpen && (
              <div className="absolute top-10 right-0 w-48 bg-white shadow-lg rounded-lg border p-2 animate-fade-in">

                {moreLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {link.label}
                  </Link>
                ))}

              </div>
            )}

          </div>

        </div>

        {/* Phone */}
        <div className="hidden md:flex items-center gap-3">

          <a
            href="tel:+917302531042"
            className="flex items-center gap-1 text-sm font-semibold text-primary"
          >
            <Phone size={16} /> +91 7302531042
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden bg-white border-t shadow-md">

          <div className="px-4 py-4 space-y-2">

            {[...mainLinks, ...moreLinks].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded text-sm hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+917302531042"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary"
            >
              <Phone size={16} /> +91 7302531042
            </a>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;