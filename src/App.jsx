import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Service pages
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import WebDesign from "./pages/services/WebDesign";
import AIAgents from "./pages/services/AIAgents";
import DigitalMarketing from "./pages/services/DigitalMarketing";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-slate-800 font-baloo">
      <ScrollToTop />
      <Navbar />

      {/* ✅ ALL ROUTES MUST BE HERE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />

        {/* ✅ SERVICES */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route
  path="/services/web-design"
  element={<WebDesign />}
/>

        <Route path="/services/ai-agents" element={<AIAgents />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

        {/* Optional fallback */}
        <Route path="*" element={<h1 style={{ padding: 100 }}>Page Not Found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
