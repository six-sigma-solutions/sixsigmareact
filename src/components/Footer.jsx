import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Home, Layers, Info, Code, Smartphone, PenTool, Bot, BarChart3 } from 'lucide-react'
import SocialIcons from './SocialIcons'

function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-8">
        
        {/* Brand + Social */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded overflow-hidden">
              <img src="/img/Six Sigma logo.png" alt="Six Sigma Solutions Logo" className="max-w-full h-auto" />
            </div>
            <span className="font-bold tracking-tight uppercase">Six Sigma Solutions</span>
          </Link>

          <p className="text-slate-400 text-sm italic mb-8">
            Empowering organizations through quality driven training and consulting.
          </p>

          <SocialIcons />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/#home" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Home className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/#services" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Layers className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/#about" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Info className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Mail className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Services
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Code className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>Web Development</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Smartphone className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>Mobile App Development</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <PenTool className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>Web Design & Development</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Bot className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>AI Agents</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <BarChart3 className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>Digital Marketing</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Contact
          </h4>
          <ul className="space-y-5 text-sm">
            <li>
              <a href="tel:+919884590009" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Phone className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span>+91 98845 90009</span>
              </a>
            </li>
            <li>
              <a href="mailto:sixsigmaspvs@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Mail className="w-4 h-4 text-teal transition group-hover:text-white" />
                <span className="break-all">sixsigmaspvs@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/NM5TXdMvArg4puxQ7" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-white transition group">
                <MapPin className="w-4 h-4 text-teal mt-1 transition group-hover:text-white flex-shrink-0" />
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

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-3 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 uppercase tracking-widest font-semibold text-center md:text-left">
        <p>© 2026 Six Sigma Solutions. All rights reserved.</p>
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
  )
}

export default Footer
