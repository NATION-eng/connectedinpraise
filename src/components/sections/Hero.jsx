import React from "react";
import { Calendar, MapPin, Radio, ArrowRight, Heart } from "lucide-react";
import { FloatingCountdown } from "../ui/FloatingCountdown";
import { AuraRings } from "../ui/AuraRings";
import { useNavigation } from "../../context/NavigationContext";

export function Hero() {
  const { navigate } = useNavigation();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-24 xs:pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-4 xs:pb-5 sm:pb-8 bg-[#0E0304]"
    >
      {/* 1. CINEMATIC BACKGROUND: High-Resolution Mass Choir Photography + Eased Gradient Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Choir Stage Photo - Bright enough to clearly show, balanced with subtle darkening */}
        <img
          src="/images/mass-choir-scrim.jpg"
          alt="Connected in Praise Mass Choir Stage Experience"
          className="w-full h-full object-cover object-[center_10%] sm:object-[center_14%] filter brightness-[0.66] sm:brightness-[0.70] contrast-[1.10] scale-[1.03] animate-slow-pan"
        />

        {/* Optical Center Lens Halo - Creates Subtle Heavenly Gold Backlight Behind Logo */}
        <div className="absolute top-[32%] sm:top-[34%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] xs:w-[480px] sm:w-[700px] h-[340px] xs:h-[480px] sm:h-[700px] bg-[radial-gradient(circle_at_center,rgba(255,200,59,0.25)_0%,rgba(242,101,34,0.12)_35%,transparent_75%)] blur-2xl pointer-events-none" />

        {/* Top Vignette Scrim - Ensures Floating Navbar & Header Badges Stand Out in Pure Elegance */}
        <div className="absolute top-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-b from-[#0E0304]/80 via-[#0E0304]/30 to-transparent pointer-events-none" />

        {/* Non-Linear Directional Bottom Gradient Scrim - Keeps Choir Clear While Protecting Dock Legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #0E0304 0%, rgba(14,3,4,0.92) 22%, rgba(14,3,4,0.55) 45%, rgba(14,3,4,0.15) 68%, transparent 100%)",
          }}
        />

        {/* Ambient Warm Atmosphere Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] xs:w-[550px] sm:w-[750px] h-[350px] bg-primary/10 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-1/4 right-2 sm:right-6 w-60 sm:w-80 h-60 sm:h-80 bg-secondary/15 rounded-full blur-[130px] animate-pulse-glow-slow pointer-events-none" />
      </div>

      {/* 2. MAIN HERO STAGE: Perfectly Situated Safely Below the Floating Navbar */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 xs:px-4 sm:px-6 text-center flex flex-col items-center w-full">
        {/* Top Collaboration Eyebrow Badge */}
        <div className="relative mb-2 xs:mb-2.5 sm:mb-4">
          <AuraRings size="sm" className="opacity-30" />

          <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 bg-black/60 backdrop-blur-xl rounded-full px-3 xs:px-4 sm:px-6 py-1.5 sm:py-2 border border-primary/40 shadow-[0_4px_25px_rgba(0,0,0,0.7)] animate-fade-in select-none max-w-full">
            <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-secondary animate-pulse flex-shrink-0" />
            <span className="font-montserrat text-[10px] xs:text-[11px] sm:text-xs font-black uppercase tracking-[0.12em] sm:tracking-[0.16em] text-milk whitespace-nowrap">
              Jerusalem Choir
            </span>
            <span className="text-primary text-[10px] xs:text-xs sm:text-sm font-black px-0.5">✕</span>
            <span className="font-montserrat text-[10px] xs:text-[11px] sm:text-xs font-black uppercase tracking-[0.12em] sm:tracking-[0.16em] text-primary whitespace-nowrap">
              APM
            </span>
            <span className="text-milk/40 font-bold">•</span>
            <span className="font-montserrat text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-secondary whitespace-nowrap">
              Presents
            </span>
          </div>
        </div>

        {/* Festival Eyebrow: PORT HARCOURT CITY MEGA MUSICAL EXPERIENCE */}
        <div className="mb-2 xs:mb-2.5 sm:mb-3.5 animate-fade-in-up px-1">
          <h2 className="font-montserrat font-black text-[9px] xs:text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.16em] xs:tracking-[0.22em] sm:tracking-[0.28em] text-milk/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            PORT HARCOURT CITY MEGA MUSICAL EXPERIENCE
          </h2>
        </div>

        {/* Master Festival Emblem with Radiant Stage Halo */}
        <div className="relative my-2 xs:my-2.5 sm:my-3 select-none animate-fade-in-scale w-full max-w-[270px] xs:max-w-xs sm:max-w-lg md:max-w-xl mx-auto px-2 flex flex-col items-center">
          {/* Focused Golden Radial Sheen Directly Under Logo */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,59,0.35)_0%,rgba(242,101,34,0.15)_45%,transparent_75%)] blur-2xl pointer-events-none scale-125" />

          <img
            src="/images/cip-official-logo.png"
            alt="Connected in Praise Official Logo"
            className="relative z-10 w-full h-auto max-h-[165px] xs:max-h-[195px] sm:max-h-[285px] md:max-h-[330px] object-contain drop-shadow-[0_12px_45px_rgba(242,101,34,0.55)] hover:scale-105 transition-transform duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
          />
          <h1 className="sr-only">Connected in Praise</h1>
        </div>

        {/* Movement Description - Editorial Typography Floating Cleanly on the Scrim (No Boxed Card!) */}
        <div className="relative mt-2 xs:mt-3 sm:mt-4 mb-3 xs:mb-4 sm:mb-6 max-w-2xl mx-auto px-3 xs:px-4 text-center">
          <p className="text-[12px] xs:text-xs sm:text-sm md:text-base text-white/95 leading-relaxed font-sans drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
            An annual praise and worship evangelism concert hosted by{" "}
            <strong className="text-white font-bold underline decoration-primary/60 underline-offset-4">
              Jerusalem Choir
            </strong>{" "}
            in strategic partnership with{" "}
            <strong className="text-white font-bold underline decoration-primary/60 underline-offset-4">
              Adventist Possibility Ministries
            </strong>{" "}
            dedicated this year to{" "}
            <span className="font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary font-black tracking-wide drop-shadow-[0_2px_10px_rgba(255,200,59,0.5)]">
              breaking disability barriers
            </span>.
          </p>
        </div>
      </div>

      {/* 3. REFINED COMMAND DOCK: Frosted Glassmorphic Architecture with Radiant Actions */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 xs:px-4 sm:px-6 my-1 sm:my-2">
        <div className="bg-black/65 backdrop-blur-2xl border border-white/15 rounded-2xl sm:rounded-3xl p-3 xs:p-3.5 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row items-center justify-between gap-3 xs:gap-3.5 sm:gap-4 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_30px_70px_rgba(255,200,59,0.2)]">
          {/* Left: Schedule & Venue Anchor */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-left w-full lg:w-auto pl-1 sm:pl-2">
            <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary/25 to-secondary/15 border border-primary/40 flex items-center justify-center flex-shrink-0 text-primary shadow-inner">
              <Calendar className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="font-montserrat font-black text-xs xs:text-xs sm:text-sm text-milk tracking-wide flex items-center gap-2">
                <span>9TH – 12TH DEC, 2026</span>
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-secondary font-black bg-secondary/20 px-2 py-0.5 rounded-full border border-secondary/40 uppercase tracking-wider animate-pulse">
                  Live
                </span>
              </div>
              <div className="text-[10px] xs:text-[11px] sm:text-xs text-milk/80 font-medium flex items-center gap-1 mt-0.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span className="truncate">Convocation Arena, RSU Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Center: Live Tabular Countdown */}
          <div className="w-full lg:w-auto flex justify-center py-0.5">
            <FloatingCountdown targetDate="2026-12-12T08:00:00" />
          </div>

          {/* Right: Dual Luminous Action Buttons */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full lg:w-auto justify-center lg:justify-end">
            <button
              type="button"
              onClick={() => navigate("/donate")}
              className="inline-flex items-center justify-center gap-2 py-2.5 xs:py-3 px-4 xs:px-5 sm:px-6 rounded-xl font-montserrat font-black text-xs uppercase tracking-wider bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian shadow-lg hover:shadow-[0_4px_25px_rgba(255,200,59,0.5)] active:scale-95 transition-all cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-obsidian" />
              <span>Partner / Donate</span>
            </button>

            <a
              href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 xs:py-3 px-4 xs:px-5 sm:px-6 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/20 active:scale-95 transition-all text-center"
            >
              <Radio className="w-3.5 h-3.5 text-secondary group-hover:text-white animate-pulse" />
              <span>Livestream</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4. Subtle Scroll Down Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-1 pb-1 select-none animate-fade-in-up">
        <button
          onClick={() => navigate("/about")}
          className="flex items-center gap-1.5 text-white/50 hover:text-primary transition-colors duration-500 delay-150 cursor-pointer group text-[9px] xs:text-[10px] sm:text-[11px] font-montserrat font-bold uppercase tracking-widest bg-transparent border-0"
          aria-label="Explore about APM"
        >
          <span>Explore Mission</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}
