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
  const [isAdminPage, setIsAdminPage] = useState(
    () => window.location.hash === "#admin" || window.location.pathname === "/admin"
  );

  const navigateToAdmin = () => {
    window.location.hash = "#admin";
    setIsAdminPage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    window.history.pushState(null, "", window.location.pathname.replace(/\/admin$/, "") || "/");
    window.location.hash = "";
    setIsAdminPage(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync hash, popstate, and keyboard shortcut
  useEffect(() => {
    const handleSync = () => {
      const isHashAdmin = window.location.hash === "#admin";
      const isPathAdmin = window.location.pathname === "/admin";
      setIsAdminPage(isHashAdmin || isPathAdmin);
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setIsAdminPage((prev) => {
          if (prev) {
            window.location.hash = "";
            return false;
          } else {
            window.location.hash = "#admin";
            return true;
          }
        });
      }
    };

    window.addEventListener("hashchange", handleSync);
    window.addEventListener("popstate", handleSync);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("hashchange", handleSync);
      window.removeEventListener("popstate", handleSync);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // When on the Admin Page, render the dedicated Full-Page Admin Dashboard
  if (isAdminPage) {
    return <AdminDashboard onBackToHome={navigateToHome} />;
  }

  // Public Connected in Praise 2026 Concert Experience
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

      {/* Footer with Full-Page Admin Navigation Link */}
      <Footer onOpenAdmin={navigateToAdmin} />
    </div>
  );
}
