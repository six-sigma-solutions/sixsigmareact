import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/', hash: '#home' },
  { name: 'Services', path: '/', hash: '#services' },
  { name: 'About', path: '/', hash: '#about' },
  { name: 'FAQ', path: '/', hash: '#faq' },
  { name: 'Contact', path: '/contact', hash: '' },
]

function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'faq']
      const scrollY = window.scrollY

      if (scrollY < 200) {
        setActiveSection('home')
        return
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const offsetTop = element.offsetTop - 140
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const isActive = (link) => {
    if (link.path === '/contact') {
      return location.pathname === '/contact'
    }
    if (location.pathname === '/' && link.hash) {
      return activeSection === link.hash.replace('#', '')
    }
    return false
  }

  const handleNavClick = (link) => {
    setMobileMenuOpen(false)
    if (link.hash && location.pathname === '/') {
      const element = document.querySelector(link.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center rounded">
            <img src="/img/Six Sigma logo.png" alt="Six Sigma Solutions Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-navy tracking-tight uppercase">Six Sigma Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.hash ? `${link.path}${link.hash}` : link.path}
              onClick={() => handleNavClick(link)}
              className={`nav-link ${isActive(link) ? 'active' : ''}`}
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                to={link.hash ? `${link.path}${link.hash}` : link.path}
                onClick={() => handleNavClick(link)}
                className={`nav-link text-slate-600 font-semibold ${isActive(link) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
