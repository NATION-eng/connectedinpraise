import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { StatsBar } from "./components/sections/StatsBar";
import { About } from "./components/sections/About";
import { WhyPraise } from "./components/sections/WhyPraise";
import { JerusalemChoir } from "./components/sections/JerusalemChoir";
import { Experience } from "./components/sections/Experience";
import { Gallery } from "./components/sections/Gallery";
import { Stories } from "./components/sections/Stories";
import { Contact } from "./components/sections/Contact";
import { CallToAction } from "./components/sections/CallToAction";
import { Footer } from "./components/layout/Footer";
import { AdminDashboard } from "./components/admin/AdminDashboard";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Allow opening Admin via #admin hash or Ctrl+Shift+A shortcut
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#admin") {
        setIsAdminOpen(true);
      }
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };

    window.addEventListener("hashchange", handleHash);
    window.addEventListener("keydown", handleKeyDown);
    if (window.location.hash === "#admin") {
      setIsAdminOpen(true);
    }

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-maroon-deep text-ivory selection:bg-gold-bright selection:text-maroon-deep">
      {/* Skip to Content Link for Accessibility (WCAG 2.1) */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[150] focus:px-4 focus:py-2 focus:bg-gold-bright focus:text-maroon-deep focus:font-bold focus:rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Persistent Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <StatsBar />
        <About />
        <WhyPraise />
        <JerusalemChoir />
        <Experience />
        <Gallery />
        <Stories />
        <Contact />
        <CallToAction />
      </main>

      {/* Footer with Admin Access Link */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Secure Admin Dashboard Modal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => {
          setIsAdminOpen(false);
          if (window.location.hash === "#admin") {
            window.history.pushState(null, "", window.location.pathname);
          }
        }}
      />
    </div>
  );
}
