import React, { useState, useEffect } from "react";
import { Radio, Menu, X, ExternalLink } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className={`max-w-6xl mx-auto flex items-center justify-between flex-nowrap gap-3 sm:gap-6 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 rounded-full pointer-events-auto transition-all duration-500 overflow-hidden ${
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

          {/* Desktop Nav Items - Clean, Perfectly Situated & Centered */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            {navLinks.map((link) => (
              <li key={link.href} className="flex-shrink-0">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-montserrat text-xs xl:text-[13px] font-bold uppercase tracking-wider text-white/90 hover:text-primary transition-colors duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] relative group py-1 whitespace-nowrap select-none"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Action Area: Live Radio Icon Button & Mobile Drawer Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Live Broadcast Button - Icon Only, Perfectly Situating the Nav */}
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Live Broadcast on YouTube"
              title="Watch Live on YouTube"
              className="relative group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-primary bg-primary/10 hover:bg-primary text-primary hover:text-obsidian transition-all duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_20px_rgba(255,200,59,0.35)] hover:shadow-[0_0_30px_rgba(255,200,59,0.6)] hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-obsidian animate-pulse transition-colors duration-500 delay-150" />
              {/* Subtle Live Dot Ping */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
              </span>
            </a>

            {/* Mobile Hamburger (Visible on < lg screens) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-milk p-2 sm:p-2.5 rounded-full bg-primary/15 hover:bg-primary/25 transition-colors border border-primary/40 flex-shrink-0 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 text-primary" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
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
