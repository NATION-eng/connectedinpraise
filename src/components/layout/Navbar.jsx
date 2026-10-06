import React, { useState, useEffect } from "react";
import { Radio, Menu, X, Eye, ExternalLink } from "lucide-react";
import { Logo } from "../ui/Logo";
import { LiquidButton } from "../ui/LiquidButton";
import { CustomTikTokEmoji } from "../ui/CustomEmoji";

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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 sm:py-4 px-3 sm:px-6 lg:px-8 pointer-events-none"
      >
        <nav
          className={`max-w-6xl mx-auto flex items-center justify-between flex-nowrap gap-3 sm:gap-4 px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 rounded-full pointer-events-auto transition-all duration-500 overflow-hidden ${
            isScrolled
              ? "bg-[#0D0404]/90 backdrop-blur-2xl border border-primary/35 shadow-[0_12px_45px_rgba(0,0,0,0.85)] ring-1 ring-primary/20"
              : "bg-black/55 backdrop-blur-xl border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
          }`}
        >
          {/* Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center group flex-shrink-0 cursor-pointer"
            aria-label="CIP 2026 Home"
          >
            <Logo size="nav" />
          </a>

          {/* Desktop Nav Items - Clean & Perfectly Spaced */}
          <ul className="hidden lg:flex items-center gap-3.5 xl:gap-5 flex-shrink-0">
            {navLinks.map((link) => (
              <li key={link.href} className="flex-shrink-0">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-montserrat text-xs xl:text-[13px] font-bold uppercase tracking-wider text-white/90 hover:text-primary transition-colors duration-200 relative group py-1 whitespace-nowrap select-none"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Action Area: Contrast Toggle + FTLOM Liquid CTA */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-primary transition-colors px-2.5 py-1.5 rounded-full border border-primary/30 hover:border-primary bg-black/50 flex-shrink-0 cursor-pointer select-none"
              aria-label="Toggle High Contrast Mode"
              title="Toggle High Contrast Mode"
            >
              <Eye className={`w-3.5 h-3.5 ${isHighContrast ? "text-secondary" : "text-primary"}`} />
              <span className="whitespace-nowrap">{isHighContrast ? "Contrast: On" : "Contrast"}</span>
            </button>

            {/* Signature Liquid Fill Button */}
            <LiquidButton
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="!px-4 sm:!px-6 !py-1.5 sm:!py-2 !text-xs sm:!text-[13px] flex-shrink-0 shadow-lg"
            >
              <Radio className="w-3.5 h-3.5 text-primary group-hover:text-obsidian animate-pulse flex-shrink-0" />
              <span>Watch Live</span>
            </LiquidButton>

            {/* Mobile Hamburger (Visible on < lg screens) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-white p-2 rounded-full bg-primary/15 hover:bg-primary/25 transition-colors border border-primary/30 flex-shrink-0 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 text-primary" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-obsidian/95 backdrop-blur-2xl"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
          {/* Drawer Top */}
          <div className="flex items-center justify-between pb-4 border-b border-primary/20">
            <Logo size="nav" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2.5 rounded-full bg-black/50 border border-primary/30 hover:bg-primary/20 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="flex flex-col items-center gap-4 my-8">
            {navLinks.map((link, idx) => (
              <li key={link.href} className="w-full text-center">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-montserrat font-extrabold text-xl sm:text-2xl text-white hover:text-primary transition-colors py-2 block uppercase tracking-wide"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Drawer Bottom Actions */}
          <div className="space-y-4 pt-4 border-t border-primary/20">
            <LiquidButton
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full !py-3.5 text-center justify-center"
            >
              <Radio className="w-4 h-4 text-primary group-hover:text-obsidian animate-pulse" />
              <span>Watch Live on YouTube</span>
            </LiquidButton>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-black/60 border border-primary/30 flex items-center justify-center text-white hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <CustomTikTokEmoji className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-black/60 border border-primary/30 flex items-center justify-center text-white hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
