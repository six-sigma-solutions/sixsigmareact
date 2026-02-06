import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Home,
  Layers,
  Info,
  Code,
  Smartphone,
  PenTool,
  Bot,
  BarChart3,
} from "lucide-react";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-8">

        {/* ================= BRAND ================= */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded overflow-hidden">
              <img
                src="/img/Six Sigma logo.png"
                alt="Six Sigma Solutions Logo"
                className="max-w-full h-auto"
              />
            </div>
            <span className="font-bold tracking-tight uppercase">
              Six Sigma Solutions
            </span>
          </Link>

          <p className="text-slate-400 text-sm italic mb-8">
            Empowering organizations through quality driven training and consulting.
          </p>

          <SocialIcons />
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#home" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Home className="w-4 h-4 text-teal group-hover:text-white" />
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Layers className="w-4 h-4 text-teal group-hover:text-white" />
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Info className="w-4 h-4 text-teal group-hover:text-white" />
                About Us
              </a>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Mail className="w-4 h-4 text-teal group-hover:text-white" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Services
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/services/web-development" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Code className="w-4 h-4 text-teal group-hover:text-white" />
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/services/mobile-app-development" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Smartphone className="w-4 h-4 text-teal group-hover:text-white" />
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link to="/services/web-design" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <PenTool className="w-4 h-4 text-teal group-hover:text-white" />
                Web Design & Development
              </Link>
            </li>
            <li>
              <Link to="/services/ai-agents" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Bot className="w-4 h-4 text-teal group-hover:text-white" />
                AI Agents
              </Link>
            </li>
            <li>
              <Link to="/services/digital-marketing" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <BarChart3 className="w-4 h-4 text-teal group-hover:text-white" />
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Contact
          </h4>
          <ul className="space-y-5 text-sm">
            <li>
              <a
                href="tel:+919884590009"
                aria-label="Call Six Sigma Solutions"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition group"
              >
                <Phone className="w-4 h-4 text-teal group-hover:text-white" />
                +91 98845 90009
              </a>
            </li>
            <li>
              <a
                href="mailto:sixsigmaspvs@gmail.com"
                aria-label="Email Six Sigma Solutions"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition group"
              >
                <Mail className="w-4 h-4 text-teal group-hover:text-white" />
                <span className="break-all">sixsigmaspvs@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/NM5TXdMvArg4puxQ7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Six Sigma Solutions Location"
                className="flex items-start gap-3 text-slate-400 hover:text-white transition group"
              >
                <MapPin className="w-4 h-4 text-teal mt-1 group-hover:text-white flex-shrink-0" />
                <span className="leading-relaxed">
                  Six Sigma Solutions<br />
                  NKC Towers, 1st Floor,<br />
                  Opp Govt. Engineering College,<br />
                  Salem – 636011,<br />
                  Tamil Nadu, India
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="max-w-7xl mx-auto px-3 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 uppercase tracking-widest font-semibold text-center md:text-left">
        <p>© {new Date().getFullYear()} Six Sigma Solutions. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
