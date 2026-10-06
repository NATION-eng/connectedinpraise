import React from "react";
import { Calendar, MapPin, Radio, ArrowRight } from "lucide-react";
import { LiquidButton } from "../ui/LiquidButton";
import { FloatingCountdown } from "../ui/FloatingCountdown";
import { AuraRings } from "../ui/AuraRings";

export function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-36 sm:pt-40 md:pt-44 pb-6 sm:pb-8 bg-[#0E0304]"
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[350px] bg-primary/15 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-6 w-80 h-80 bg-secondary/15 rounded-full blur-[130px] animate-pulse-glow-slow pointer-events-none" />

      {/* Main Hero Stage - Perfectly Situated Safely Below the Floating Navbar */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center w-full">
        {/* Top Collaboration Eyebrow Badge (Guaranteed Safe Clearance Below Navbar) */}
        <div className="relative mb-3 sm:mb-4">
          <AuraRings size="sm" className="opacity-35" />

          <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-black/75 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 border border-primary/40 shadow-[0_4px_25px_rgba(255,200,59,0.25)] animate-fade-in select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-montserrat text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-milk">
              Jerusalem Choir
            </span>
            <span className="text-primary text-xs sm:text-sm font-black px-0.5">✕</span>
            <span className="font-montserrat text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-primary">
              APM
            </span>
            <span className="text-milk/40 font-bold">•</span>
            <span className="font-montserrat text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Presents
            </span>
          </div>
        </div>

        {/* Festival Eyebrow: PH CITY MEGA MUSICAL EXPERIENCE */}
        <div className="mb-2 sm:mb-3 animate-fade-in-up">
          <h2 className="font-montserrat font-black text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] text-milk/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            PH CITY MEGA MUSICAL EXPERIENCE
          </h2>
        </div>

        {/* Master Festival Headline: Connected in Praise (Zero Clipping, Perfectly Proportioned) */}
        <div className="relative my-2 sm:my-3 select-none animate-fade-in-scale w-full max-w-4xl mx-auto px-2">
          <h1 className="font-montserrat font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight leading-[1.05] text-white drop-shadow-[0_6px_35px_rgba(0,0,0,0.9)]">
            <span className="text-milk inline-block">Connected</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary inline-block drop-shadow-[0_4px_25px_rgba(242,101,34,0.4)]">
              in Praise
            </span>
          </h1>

          {/* Golden & Milk Sunburst Horizon Ray */}
          <div className="mx-auto mt-3 sm:mt-4 h-1 w-32 sm:w-56 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(255,200,59,0.8)]" />
        </div>

        {/* Movement Description - Clean High-Contrast Milk Writeup */}
        <div className="relative mt-3 mb-4 sm:mb-6 max-w-2xl mx-auto px-5 py-3 rounded-2xl bg-black/50 backdrop-blur-md border border-milk/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          <p className="text-xs sm:text-sm md:text-base text-milk/95 leading-relaxed font-normal">
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

      {/* Integrated Hero Command Dock (Bottom Stage - All Visible Within 1 Screen Viewport) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 mt-2 mb-2">
        <div className="bg-black/75 backdrop-blur-2xl border border-milk/15 rounded-3xl p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/40 hover:shadow-[0_25px_60px_rgba(255,200,59,0.2)]">
          {/* Left: Schedule & Venue Anchor */}
          <div className="flex items-center gap-3 text-left w-full lg:w-auto pl-1 sm:pl-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="font-montserrat font-black text-xs sm:text-sm text-milk tracking-wide flex items-center gap-2">
                <span>4TH – 7TH NOV, 2026</span>
                <span className="text-[10px] text-secondary font-black bg-secondary/15 px-2 py-0.5 rounded-full border border-secondary/30 uppercase tracking-wider">
                  Live
                </span>
              </div>
              <div className="text-[11px] text-milk/75 font-medium flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-secondary flex-shrink-0" />
                <span className="truncate">Convocation Arena, RSU Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Center: Live Tabular Countdown */}
          <div className="w-full lg:w-auto flex justify-center py-1">
            <FloatingCountdown targetDate="2026-11-04T18:00:00" />
          </div>

          {/* Right: Dual Interactive Liquid Buttons */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto justify-center lg:justify-end">
            <LiquidButton
              onClick={() => scrollTo("#experience")}
              variant="primary"
              className="!py-2.5 !px-5 !text-xs font-montserrat font-bold flex-1 lg:flex-initial text-center justify-center"
            >
              <span>Explore Program</span>
            </LiquidButton>

            <LiquidButton
              href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="!py-2.5 !px-4 !text-xs font-montserrat font-bold flex-1 lg:flex-initial text-center justify-center"
            >
              <Radio className="w-3.5 h-3.5 text-secondary group-hover:text-white animate-pulse" />
              <span>Livestream</span>
            </LiquidButton>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-2 pb-1 select-none animate-fade-in-up">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about");
          }}
          className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors duration-500 delay-150 cursor-pointer group text-[11px] font-montserrat font-bold uppercase tracking-widest"
          aria-label="Scroll to about section"
        >
          <span>Scroll to explore</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
