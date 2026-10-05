import React from "react";
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

export default function App() {
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
