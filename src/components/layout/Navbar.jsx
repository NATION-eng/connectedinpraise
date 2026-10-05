import React, { useState, useEffect } from "react";
import { Radio, Menu, X, Eye, ExternalLink } from "lucide-react";
import { Logo } from "../ui/Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About APM", href: "#about" },
  { label: "Why Praise", href: "#why-praise" },
  { label: "Jerusalem Choir", href: "#choir" },
  { label: "Program", href: "#experience" },
  { label: "Archives", href: "#gallery" },
  { label: "Prayer Wall", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL",
  facebook: "https://www.facebook.com/profile.php?id=61578565720573",
  tiktok: "https://www.tiktok.com/@connectedinpraise?_r=1&_t=ZS-99v3wfSwKz",
};

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-2xl shadow-black/80 py-2.5 sm:py-3 border-b border-gold/20"
            : "bg-gradient-to-b from-maroon-deep/95 via-maroon-deep/70 to-transparent py-4 sm:py-5"
        }`}
      >
        <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with 2026 Badge */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label="Connected in Praise 2026 Home"
          >
            <Logo size="nav" />
            <span className="hidden sm:inline-block ml-1.5 text-[11px] font-extrabold text-gold-bright tracking-wider px-2 py-0.5 rounded-full border border-gold/40 bg-gold/15 shadow-sm">
              2026
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-bold text-ivory/80 hover:text-gold-bright transition-colors duration-200 relative group py-1 tracking-wide"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Action Area: Contrast Toggle + Watch Live CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className="hidden md:flex items-center gap-1.5 text-xs font-bold text-ivory/70 hover:text-gold-bright transition-colors px-3 py-1.5 rounded-full border border-gold/25 hover:border-gold/60 bg-black/20"
              aria-label="Toggle High Contrast Mode"
              title="Toggle High Contrast Mode"
            >
              <Eye className="w-3.5 h-3.5 text-gold-bright" />
              <span>{isHighContrast ? "Normal Mode" : "Contrast"}</span>
            </button>

            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg group"
            >
              <Radio className="w-3.5 h-3.5 text-maroon-deep animate-pulse" />
              <span>Watch Live</span>
              <ExternalLink className="w-3 h-3 text-maroon-deep/70 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-ivory p-2 rounded-xl bg-gold/10 hover:bg-gold/20 transition-colors border border-gold/20"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6 text-gold-bright" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-maroon-deep/98 backdrop-blur-2xl"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
          {/* Drawer Top */}
          <div className="flex items-center justify-between pb-4 border-b border-gold/20">
            <div className="flex items-center gap-2">
              <Logo size="nav" />
              <span className="text-xs font-black text-gold-bright px-2 py-0.5 rounded-full border border-gold/40 bg-gold/20">
                2026
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-ivory p-2 rounded-full glass border border-gold/30 hover:bg-gold/20"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gold-bright" />
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="flex flex-col items-center gap-5 my-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-display font-extrabold text-ivory hover:text-gold-bright transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Drawer Footer Actions */}
          <div className="flex flex-col items-center gap-4 pt-6 border-t border-gold/20">
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full text-center py-3.5 flex items-center justify-center gap-2 text-sm font-extrabold"
            >
              <Radio className="w-4 h-4" />
              <span>Watch Live on YouTube</span>
            </a>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-ivory/80 hover:text-gold-bright"
              >
                TikTok
              </a>
              <span className="text-gold/40">•</span>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-ivory/80 hover:text-gold-bright"
              >
                Facebook
              </a>
              <span className="text-gold/40">•</span>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-ivory/80 hover:text-gold-bright"
              >
                YouTube
              </a>
            </div>

            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className="flex items-center gap-2 text-xs font-bold text-ivory/70 hover:text-gold-bright mt-2"
            >
              <Eye className="w-4 h-4 text-gold-bright" />
              <span>Toggle High Contrast</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
