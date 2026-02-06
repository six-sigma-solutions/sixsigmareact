import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Services
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import WebDesign from "./pages/services/WebDesign";
import AIAgents from "./pages/services/AIAgents";
import DigitalMarketing from "./pages/services/DigitalMarketing";

/* ================= SCROLL TO TOP / HASH ================= */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

/* ================= APP ================= */
function App() {
  const location = useLocation();
  const aosInitialized = useRef(false);
  const [loading, setLoading] = useState(false);
  const prevPath = useRef(location.pathname);

  /* ===== AOS (StrictMode safe) ===== */
  useEffect(() => {
    if (!aosInitialized.current) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });
      aosInitialized.current = true;
    } else {
      AOS.refresh();
    }
  }, [location.pathname]);

  /* ===== SMART LOADER (FIXED) ===== */
  useEffect(() => {
    let isMounted = true;

    const isHashNavigation =
      location.pathname === "/" && location.hash;

    const isSameRoute =
      prevPath.current === location.pathname;

    // ❌ Skip loader for hash navigation & same-route jumps
    if (isHashNavigation || isSameRoute) {
      prevPath.current = location.pathname;
      setLoading(false);
      return;
    }

    prevPath.current = location.pathname;
    setLoading(true);

    const waitForImages = () =>
      Promise.all(
        Array.from(document.images).map(
          (img) =>
            img.complete ||
            new Promise((res) => {
              img.onload = img.onerror = res;
            })
        )
      );

    const waitForFonts = () =>
      document.fonts ? document.fonts.ready : Promise.resolve();

    Promise.all([
      waitForImages(),
      waitForFonts(),
      new Promise((res) => setTimeout(res, 500)), // smooth delay
    ]).then(() => {
      if (isMounted) setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [location.pathname, location.hash]);

  if (loading) return <Loader />;

  return (
    <div className="bg-white text-slate-800 font-baloo min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <div className="flex-grow">
        <Routes>
          {/* MAIN */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />

          {/* SERVICES */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/ai-agents" element={<AIAgents />} />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
                <div>
                  <h1 className="text-5xl font-bold text-navy mb-4">404</h1>
                  <p className="text-slate-500 mb-6">
                    The page you are looking for does not exist.
                  </p>
                  <a
                    href="/"
                    className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
