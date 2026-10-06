import React, { useState, useEffect } from "react";
import { Menu, X, Radio, Calendar, MapPin, ExternalLink, Heart } from "lucide-react";
import { Logo } from "../ui/Logo";
import { LiquidButton } from "../ui/LiquidButton";
import { CustomTikTokEmoji } from "../ui/CustomEmoji";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About APM" },
  { href: "#why-praise", label: "Why Praise" },
  { href: "#choir", label: "Jerusalem Choir" },
  { href: "#experience", label: "Program" },
  { href: "#gallery", label: "Archives" },
  { href: "#stories", label: "Prayer Wall" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL",
  tiktok: "https://www.tiktok.com/@connectedinpraise?_r=1&_t=ZS-99v3wfSwKz",
  facebook: "https://www.facebook.com/profile.php?id=61578565720573",
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
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
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-2.5 sm:py-3.5 px-3 sm:px-6 lg:px-8 pointer-events-none">
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full pointer-events-auto transition-all duration-500 overflow-visible ${
            isScrolled
              ? "bg-[#0E0304]/90 backdrop-blur-2xl border border-primary/35 shadow-[0_12px_45px_rgba(0,0,0,0.85)] ring-1 ring-primary/20"
              : "bg-black/60 backdrop-blur-xl border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
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

          {/* Desktop Nav Items - Perfectly Situated & Spaced */}
          <ul className="hidden xl:flex items-center gap-3 2xl:gap-5 flex-shrink">
            {navLinks.map((link) => (
              <li key={link.href} className="flex-shrink-0">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-montserrat text-xs 2xl:text-[13px] font-bold uppercase tracking-wider text-white/90 hover:text-primary transition-colors duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] relative group py-1 px-1 whitespace-nowrap select-none"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Action Area: Strict Icon-Only Live Stream Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Live Broadcast Button - STRICTLY ICON ONLY, NEVER CLIPPED */}
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Live Broadcast on YouTube"
              title="Watch Live Stream on YouTube"
              className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary/50 bg-primary/15 hover:bg-primary text-primary hover:text-obsidian transition-all duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_15px_rgba(255,200,59,0.3)] hover:shadow-[0_0_25px_rgba(255,200,59,0.6)] hover:scale-105 active:scale-95 flex-shrink-0 group cursor-pointer"
            >
              <Radio className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-primary group-hover:text-obsidian animate-pulse transition-colors duration-500" />
              {/* Subtle Live Dot Ping */}
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 pointer-events-none">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary shadow-sm" />
              </span>
            </a>

            {/* Mobile Hamburger (Visible on < xl screens) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden text-milk p-2 sm:p-2.5 rounded-full bg-primary/15 hover:bg-primary/25 transition-colors border border-primary/40 flex-shrink-0 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 text-primary" />
            </button>
          </div>
        </nav>
      </header>

      {/* Exceptional Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop Scrim */}
        <div
          className="absolute inset-0 bg-[#0E0304]/95 backdrop-blur-3xl"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Ambient Glows inside Drawer */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Drawer Content */}
        <div className="relative h-full flex flex-col justify-between p-5 sm:p-7 overflow-y-auto z-10">
          {/* Drawer Top */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Logo size="nav" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2.5 rounded-full bg-white/5 border border-primary/30 hover:bg-primary/20 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Festival Quick Badge inside Drawer */}
          <div className="mt-4 p-3.5 rounded-2xl bg-black/50 border border-primary/25 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-milk">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Jerusalem Choir ✕ APM</span>
            </div>
            <div className="text-[11px] text-milk/75 mt-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Nov 4–7, 2026 · RSU Convocation Arena</span>
            </div>
          </div>

          {/* Drawer Navigation Links */}
          <ul className="flex flex-col gap-2 my-5">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-montserrat font-extrabold text-lg sm:text-xl text-milk hover:text-primary transition-all duration-300 py-2 px-3 rounded-xl hover:bg-white/5 block uppercase tracking-wide flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-primary/40 text-sm">➔</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Drawer Bottom Actions: Prominent Live Button & Socials */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(255,200,59,0.35)] active:scale-98 transition-transform"
            >
              <Radio className="w-4 h-4 text-obsidian animate-pulse" />
              <span>Watch Live on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 text-obsidian" />
            </a>

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center text-white hover:text-primary transition-colors"
                aria-label="TikTok"
                title="Follow on TikTok"
              >
                <CustomTikTokEmoji className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center text-white hover:text-primary transition-colors font-bold text-sm"
                aria-label="Facebook"
                title="Facebook Page"
              >
                f
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center text-white hover:text-primary transition-colors"
                aria-label="YouTube Channel"
                title="YouTube Channel"
              >
                <Radio className="w-4 h-4 text-primary" />
              </a>
            </div>

            <p className="text-[10px] text-center text-milk/50 pt-1 font-medium">
              Breaking Disability Barriers · Port Harcourt, Nigeria
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
