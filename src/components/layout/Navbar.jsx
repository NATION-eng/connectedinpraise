import React, { useState, useEffect } from "react";
import { Radio, Menu, X, Sun, Eye } from "lucide-react";
import { Logo } from "../ui/Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About APM", href: "#about" },
  { label: "Why Praise", href: "#why-praise" },
  { label: "Jerusalem Choir", href: "#choir" },
  { label: "Schedule", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stories & Prayer", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", isHighContrast);
  }, [isHighContrast]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass shadow-lg shadow-black/50 py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group"
            aria-label="Connected in Praise 2026 Home"
          >
            <Logo size="nav" />
            <span className="ml-1 text-[10px] md:text-xs text-gold-bright font-bold tracking-widest px-2 py-0.5 rounded-full border border-gold/30 bg-gold/10">
              2026
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-ivory/70 hover:text-gold-bright transition-colors duration-300 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Actions & Accessibility */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className="hidden md:flex items-center gap-1.5 text-xs text-ivory/60 hover:text-gold-bright transition-colors px-3 py-1.5 rounded-full border border-gold/20 hover:border-gold/50"
              aria-label="Toggle High Contrast Mode"
              title="Toggle High Contrast Mode"
            >
              <Eye className="w-3.5 h-3.5 text-gold-bright" />
              <span>{isHighContrast ? "Normal" : "High Contrast"}</span>
            </button>

            <a
              href="https://youtube.com/@connectedinpraise"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 btn-gold text-xs md:text-sm px-5 py-2.5"
            >
              <Radio className="w-4 h-4 text-maroon-deep animate-pulse" />
              <span>Watch Live</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-ivory p-2 rounded-lg hover:bg-gold/10 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6 text-gold-bright" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-maroon-deep/95 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <Logo size="nav" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-ivory p-2 rounded-full hover:bg-gold/10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gold-bright" />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-5 my-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-display font-bold text-ivory hover:text-gold-bright transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4 pt-6 border-t border-gold/20">
            <a
              href="https://youtube.com/@connectedinpraise"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full text-center py-3 flex items-center justify-center gap-2"
            >
              <Radio className="w-4 h-4" />
              <span>Watch Live on YouTube</span>
            </a>
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className="flex items-center gap-2 text-sm text-ivory/70 hover:text-gold-bright"
            >
              <Eye className="w-4 h-4 text-gold-bright" />
              <span>Toggle Contrast</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
