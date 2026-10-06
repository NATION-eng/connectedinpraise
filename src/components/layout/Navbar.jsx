import React, { useState, useEffect } from "react";
import { Menu, X, Radio, Calendar, ExternalLink, Heart, ChevronRight } from "lucide-react";
import { Logo } from "../ui/Logo";
import { CustomTikTokEmoji } from "../ui/CustomEmoji";
import { useNavigation } from "../../context/NavigationContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About APM" },
  { path: "/why-praise", label: "Why Praise" },
  { path: "/choir", label: "Jerusalem Choir" },
  { path: "/gallery", label: "Archives" },
  { path: "/stories", label: "Prayer Wall" },
  { path: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL",
  tiktok: "https://www.tiktok.com/@connectedinpraise?_r=1&_t=ZS-99v3wfSwKz",
  facebook: "https://www.facebook.com/profile.php?id=61578565720573",
};

export function Navbar() {
  const { currentPath, navigate } = useNavigation();
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

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate(path);
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
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center group flex-shrink-0 cursor-pointer"
            aria-label="Connected in Praise Home"
          >
            <Logo size="nav" />
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden xl:flex items-center gap-3 2xl:gap-5 flex-shrink">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <li key={link.path} className="flex-shrink-0">
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`font-montserrat text-xs 2xl:text-[13px] font-bold uppercase tracking-wider transition-colors duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] relative group py-1 px-1 whitespace-nowrap select-none ${
                      isActive ? "text-primary" : "text-white/90 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Area: Donate Button, Strict Icon-Only Live Stream & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Prominent Donate Button on Navbar */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/donate");
              }}
              className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-montserrat font-black text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 delay-75 cursor-pointer shadow-md hover:scale-105 active:scale-95 flex-shrink-0 ${
                currentPath === "/donate"
                  ? "bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian ring-2 ring-primary shadow-[0_0_20px_rgba(255,200,59,0.5)]"
                  : "bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian hover:shadow-[0_0_20px_rgba(255,200,59,0.4)]"
              }`}
              aria-label="Donate directly to Connected in Praise"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-obsidian animate-pulse" />
              <span>Donate</span>
            </button>

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
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="cursor-pointer"
            >
              <Logo size="nav" />
            </a>
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
          <ul className="flex flex-col gap-1.5 my-4">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <li key={link.path} className="w-full">
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`font-montserrat font-extrabold text-base sm:text-lg transition-all duration-300 py-2.5 px-3 rounded-xl block uppercase tracking-wide flex items-center justify-between ${
                      isActive
                        ? "bg-primary/20 text-primary border border-primary/40 shadow-sm"
                        : "text-milk hover:text-primary hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-primary" : "text-primary/40"}`} />
                  </a>
                </li>
              );
            })}

            {/* Mobile Drawer Dedicated Donate Item */}
            <li className="w-full pt-1">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/donate");
                }}
                className={`w-full py-3 px-4 rounded-xl font-montserrat font-black text-sm uppercase tracking-wider flex items-center justify-between shadow-lg transition-transform active:scale-98 cursor-pointer ${
                  currentPath === "/donate"
                    ? "bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian ring-2 ring-white"
                    : "bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-current text-obsidian" />
                  <span>Donate to Mission</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-obsidian font-bold">UBA</span>
              </button>
            </li>
          </ul>

          {/* Drawer Bottom Actions: Prominent Live Button & Socials */}
          <div className="space-y-3 pt-3 border-t border-white/10">
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 transition-transform"
            >
              <Radio className="w-4 h-4 text-primary animate-pulse" />
              <span>Watch Live on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/70" />
            </a>

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center text-white hover:text-primary transition-colors"
                aria-label="TikTok"
                title="Follow on TikTok"
              >
                <CustomTikTokEmoji className="w-3.5 h-3.5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center text-white hover:text-primary transition-colors font-bold text-sm"
                aria-label="Facebook"
                title="Facebook Page"
              >
                f
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center text-white hover:text-primary transition-colors"
                aria-label="YouTube Channel"
                title="YouTube Channel"
              >
                <Radio className="w-3.5 h-3.5 text-primary" />
              </a>
            </div>

            <p className="text-[10px] text-center text-milk/50 pt-0.5 font-medium">
              Breaking Disability Barriers · Port Harcourt City, Nigeria
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
