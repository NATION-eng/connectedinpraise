import React, { Suspense, lazy } from "react";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./components/pages/HomePage";

// Code-split other routes to minimize main bundle size and eliminate INP latency
const About = lazy(() => import("./components/sections/About").then((m) => ({ default: m.About })));
const WhyPraise = lazy(() => import("./components/sections/WhyPraise").then((m) => ({ default: m.WhyPraise })));
const JerusalemChoir = lazy(() => import("./components/sections/JerusalemChoir").then((m) => ({ default: m.JerusalemChoir })));
const Gallery = lazy(() => import("./components/sections/Gallery").then((m) => ({ default: m.Gallery })));
const Stories = lazy(() => import("./components/sections/Stories").then((m) => ({ default: m.Stories })));
const Contact = lazy(() => import("./components/sections/Contact").then((m) => ({ default: m.Contact })));
const CallToAction = lazy(() => import("./components/sections/CallToAction").then((m) => ({ default: m.CallToAction })));
const DonatePage = lazy(() => import("./components/pages/DonatePage").then((m) => ({ default: m.DonatePage })));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard").then((m) => ({ default: m.AdminDashboard })));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function AppContent() {
  const { currentPath, navigate } = useNavigation();

  // Full-Page Admin Dashboard Portal
  if (currentPath === "/admin") {
    return (
      <Suspense fallback={<PageFallback />}>
        <AdminDashboard onBackToHome={() => navigate("/")} />
      </Suspense>
    );
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
        <Suspense fallback={<PageFallback />}>
          {renderCurrentPage()}
        </Suspense>
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
