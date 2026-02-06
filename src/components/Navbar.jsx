import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", to: "/#home", id: "home" },
  { name: "Services", to: "/#services", id: "services" },
  { name: "About", to: "/#about", id: "about" },
  { name: "FAQ", to: "/#faq", id: "faq" },
  { name: "Contact", to: "/contact", id: null },
];

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const ticking = useRef(false);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  /* Scroll spy (homepage only) */
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "services", "about", "faq"];

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (scrollY < 200) {
          setActiveSection("home");
          ticking.current = false;
          return;
        }

        for (const id of sections) {
          const el = document.getElementById(id);
          if (!el) continue;

          const offsetTop = el.offsetTop - 140;
          const offsetBottom = offsetTop + el.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (link) => {
    if (link.to === "/contact") {
      return location.pathname === "/contact";
    }
    return location.pathname === "/" && activeSection === link.id;
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center rounded">
            <img
              src="/img/Six Sigma logo.png"
              alt="Six Sigma Solutions Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-navy tracking-tight uppercase">
            Six Sigma Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`nav-link ${isActive(link) ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="hidden lg:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-bold transition">
            Contact Us
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`nav-link text-slate-600 font-semibold ${
                  isActive(link) ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
