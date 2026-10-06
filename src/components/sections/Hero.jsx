import React from "react";
import { Calendar, MapPin, Radio, ArrowRight } from "lucide-react";
import { LiquidButton } from "../ui/LiquidButton";
import { FloatingCountdown } from "../ui/FloatingCountdown";
import { AuraRings } from "../ui/AuraRings";
import { useNavigation } from "../../context/NavigationContext";

export function Hero() {
  const { navigate } = useNavigation();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-20 xs:pt-24 sm:pt-36 md:pt-40 lg:pt-44 pb-3 xs:pb-4 sm:pb-8 bg-[#0E0304]"
    >
      {/* Background with Luminous Flyer Sunburst Art & Royal Burgundy Radial Blending */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Connected in Praise Celestial Sunburst Glow"
          className="w-full h-full object-cover object-center scale-105 animate-slow-pan opacity-25 filter brightness-90 contrast-125"
        />

        {/* Optical Sunburst Lens Gradient - Warm Celestial Glow Radiating from Core */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,rgba(255,200,59,0.25)_0%,rgba(242,101,34,0.18)_35%,rgba(32,5,7,0.85)_70%,#0E0304_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0304]/80 via-transparent to-[#0E0304]" />
      </div>

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] xs:w-[550px] sm:w-[750px] h-[350px] bg-primary/15 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-2 sm:right-6 w-60 sm:w-80 h-60 sm:h-80 bg-secondary/15 rounded-full blur-[130px] animate-pulse-glow-slow pointer-events-none" />

      {/* Main Hero Stage - Perfectly Situated Safely Below the Floating Navbar */}
      <div className="relative z-10 max-w-5xl mx-auto px-2.5 xs:px-3.5 sm:px-6 text-center flex flex-col items-center w-full">
        {/* Top Collaboration Eyebrow Badge (Guaranteed Safe Clearance Below Navbar) */}
        <div className="relative mb-2 xs:mb-2.5 sm:mb-4">
          <AuraRings size="sm" className="opacity-35" />

          <div className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2.5 bg-black/75 backdrop-blur-xl rounded-full px-2.5 xs:px-3.5 sm:px-6 py-1 xs:py-1.5 sm:py-2 border border-primary/40 shadow-[0_4px_25px_rgba(255,200,59,0.25)] animate-fade-in select-none max-w-full">
            <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-secondary animate-pulse flex-shrink-0" />
            <span className="font-montserrat text-[10px] xs:text-[11px] sm:text-sm font-black uppercase tracking-[0.10em] sm:tracking-[0.14em] text-milk whitespace-nowrap">
              Jerusalem Choir
            </span>
            <span className="text-primary text-[10px] xs:text-xs sm:text-sm font-black px-0.5">✕</span>
            <span className="font-montserrat text-[10px] xs:text-[11px] sm:text-sm font-black uppercase tracking-[0.10em] sm:tracking-[0.14em] text-primary whitespace-nowrap">
              APM
            </span>
            <span className="text-milk/40 font-bold">•</span>
            <span className="font-montserrat text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-secondary whitespace-nowrap">
              Presents
            </span>
          </div>
        </div>

        {/* Festival Eyebrow: PORT HARCOURT CITY MEGA MUSICAL EXPERIENCE */}
        <div className="mb-1.5 xs:mb-2 sm:mb-3 animate-fade-in-up px-1">
          <h2 className="font-montserrat font-black text-[9px] xs:text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.12em] xs:tracking-[0.18em] sm:tracking-[0.24em] text-milk/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            PORT HARCOURT CITY MEGA MUSICAL EXPERIENCE
          </h2>
        </div>

        {/* Official Master Festival Logo Emblem */}
        <div className="relative my-1.5 xs:my-2 sm:my-3 select-none animate-fade-in-scale w-full max-w-[260px] xs:max-w-xs sm:max-w-lg md:max-w-xl mx-auto px-2 flex flex-col items-center">
          <img
            src="/images/cip-official-logo.png"
            alt="Connected in Praise Official Logo"
            className="w-full h-auto max-h-[160px] xs:max-h-[190px] sm:max-h-[280px] md:max-h-[330px] object-contain drop-shadow-[0_8px_35px_rgba(242,101,34,0.45)] hover:scale-105 transition-transform duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
          />
          <h1 className="sr-only">Connected in Praise</h1>
        </div>

        {/* Movement Description - Clean High-Contrast Milk Writeup */}
        <div className="relative mt-1.5 xs:mt-2 sm:mt-3 mb-2.5 xs:mb-3 sm:mb-5 max-w-2xl mx-auto px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-2xl bg-black/50 backdrop-blur-md border border-milk/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-milk/95 leading-relaxed font-normal">
            An annual praise and worship evangelism concert hosted by{" "}
            <strong className="text-milk font-bold underline decoration-primary/50 underline-offset-4">
              Jerusalem Choir
            </strong>{" "}
            in strategic partnership with{" "}
            <strong className="text-milk font-bold underline decoration-primary/50 underline-offset-4">
              Adventist Possibility Ministries
            </strong>{" "}
            dedicated this year to{" "}
            <span className="font-atkinson text-primary font-black tracking-wide drop-shadow-[0_2px_8px_rgba(255,200,59,0.5)]">
              breaking disability barriers
            </span>.
          </p>
        </div>
      </div>

      {/* Integrated Hero Command Dock (Bottom Stage - All Visible Within 1 Screen Viewport Across Devices) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-2.5 xs:px-3 sm:px-6 my-1 sm:my-2">
        <div className="bg-black/80 backdrop-blur-2xl border border-milk/15 rounded-2xl sm:rounded-3xl p-2.5 xs:p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col lg:flex-row items-center justify-between gap-2 xs:gap-2.5 sm:gap-4 transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/40 hover:shadow-[0_25px_60px_rgba(255,200,59,0.2)]">
          {/* Left: Schedule & Venue Anchor */}
          <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 text-left w-full lg:w-auto pl-0.5 sm:pl-2">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
              <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="font-montserrat font-black text-[11px] xs:text-xs sm:text-sm text-milk tracking-wide flex items-center gap-1.5 xs:gap-2">
                <span>4TH – 7TH NOV, 2026</span>
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-secondary font-black bg-secondary/15 px-1.5 xs:px-2 py-0.5 rounded-full border border-secondary/30 uppercase tracking-wider">
                  Live
                </span>
              </div>
              <div className="text-[9px] xs:text-[10px] sm:text-[11px] text-milk/75 font-medium flex items-center gap-1 mt-0.5 truncate">
                <MapPin className="w-3 h-3 text-secondary flex-shrink-0" />
                <span className="truncate">Convocation Arena, RSU Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Center: Live Tabular Countdown */}
          <div className="w-full lg:w-auto flex justify-center py-0.5">
            <FloatingCountdown targetDate="2026-11-04T18:00:00" />
          </div>

          {/* Right: Dual Interactive Liquid Buttons (Side-by-Side on Mobile) */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5 xs:gap-2 w-full lg:w-auto justify-center lg:justify-end">
            <LiquidButton
              onClick={() => navigate("/donate")}
              variant="primary"
              className="!py-1.5 xs:!py-2 sm:!py-2.5 !px-2 xs:!px-3 sm:!px-5 !text-[11px] xs:!text-xs font-montserrat font-bold text-center justify-center w-full sm:w-auto cursor-pointer"
            >
              <span>Partner / Donate</span>
            </LiquidButton>

            <LiquidButton
              href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="!py-1.5 xs:!py-2 sm:!py-2.5 !px-2 xs:!px-3 sm:!px-4 !text-[11px] xs:!text-xs font-montserrat font-bold text-center justify-center w-full sm:w-auto"
            >
              <Radio className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-secondary group-hover:text-white animate-pulse" />
              <span>Livestream</span>
            </LiquidButton>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Cue */}
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
