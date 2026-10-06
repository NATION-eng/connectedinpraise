import React from "react";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./components/pages/HomePage";
import { About } from "./components/sections/About";
import { WhyPraise } from "./components/sections/WhyPraise";
import { JerusalemChoir } from "./components/sections/JerusalemChoir";
import { Gallery } from "./components/sections/Gallery";
import { Stories } from "./components/sections/Stories";
import { Contact } from "./components/sections/Contact";
import { CallToAction } from "./components/sections/CallToAction";
import { DonatePage } from "./components/pages/DonatePage";
import { AdminDashboard } from "./components/admin/AdminDashboard";

function AppContent() {
  const { currentPath, navigate } = useNavigation();

  // Full-Page Admin Dashboard Portal
  if (currentPath === "/admin") {
    return <AdminDashboard onBackToHome={() => navigate("/")} />;
  }

  // Render individual page based on current route
  const renderCurrentPage = () => {
    switch (currentPath) {
      case "/about":
        return <About />;
      case "/why-praise":
        return <WhyPraise />;
      case "/choir":
        return <JerusalemChoir />;
      case "/gallery":
        return <Gallery />;
      case "/stories":
        return <Stories />;
      case "/contact":
        return (
          <>
            <Contact />
            <CallToAction />
          </>
        );
      case "/donate":
        return <DonatePage />;
      case "/":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-maroon-deep text-ivory selection:bg-gold-bright selection:text-maroon-deep flex flex-col justify-between">
      {/* Skip to Content Accessibility Anchor */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[150] focus:px-4 focus:py-2 focus:bg-gold-bright focus:text-maroon-deep focus:font-bold focus:rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Persistent Navigation Header */}
      <Navbar />

      {/* Main Page View */}
      <main id="main-content" className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
