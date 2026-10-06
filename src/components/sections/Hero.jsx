import React from "react";
import { Clock, Calendar, MapPin, Radio, ArrowRight } from "lucide-react";
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
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-32 sm:pt-40 pb-12 sm:pb-16 bg-[#0D0404]"
    >
      {/* Background with Radiant Sunburst Flyer Art & Deepening Contrast Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Connected in Praise Celestial Sunburst Glow"
          className="w-full h-full object-cover object-center scale-105 animate-slow-pan filter brightness-75 contrast-125"
        />
        {/* Contrast Scrims - Protect write-up legibility from bright center sunburst */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#0D0404]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0404] via-[#2A0608]/70 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-[#0D0404]/90" />
      </div>

      {/* Ambient Pulsing Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-primary/10 rounded-full blur-[160px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[140px] animate-pulse-glow-slow pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        {/* Concentric Decorative Aura Rings */}
        <div className="relative mb-3">
          <AuraRings size="sm" className="opacity-40" />

          {/* Top Collaboration Badge (From Flyer) */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/75 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 border border-primary/35 shadow-[0_0_25px_rgba(255,200,59,0.25)] animate-fade-in select-none">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-montserrat text-[11px] sm:text-xs font-black uppercase tracking-[0.16em] text-white">
              Jerusalem Choir
            </span>
            <span className="text-primary text-[10px] sm:text-xs font-semibold tracking-wider">
              _in collaboration with_
            </span>
            <span className="font-montserrat text-[11px] sm:text-xs font-black uppercase tracking-[0.16em] text-primary">
              APM
            </span>
          </div>
        </div>

        {/* Festival Eyebrow: PH CITY MEGA MUSICAL EXPERIENCE */}
        <div className="mb-3 animate-fade-in-up">
          <span className="font-montserrat text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.28em] text-secondary drop-shadow-[0_2px_12px_rgba(242,101,34,0.6)]">
            PRESENTS
          </span>
          <h2 className="font-montserrat font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.2em] text-white mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            PH CITY MEGA MUSICAL EXPERIENCE
          </h2>
        </div>

        {/* Title: Connected in Praise (High-Impact Brush Wordmark with Full Overflow & Zero Clipping) */}
        <div className="relative my-3 sm:my-6 py-2 px-4 select-none animate-fade-in-scale overflow-visible w-full max-w-4xl">
          {/* Floating Musical Clef from Flyer */}
          <span className="absolute -top-6 sm:-top-8 -left-4 sm:left-4 text-primary text-3xl sm:text-5xl font-black drop-shadow-[0_4px_16px_rgba(255,200,59,0.8)] animate-float pointer-events-none">
            𝄞
          </span>

          <h1 className="font-brush text-5xl xs:text-6xl sm:text-8xl md:text-9xl leading-[1.18] tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-milk via-primary to-secondary drop-shadow-[0_6px_25px_rgba(242,101,34,0.7)] py-1">
            Connected
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-4 pt-1 sm:pt-2 overflow-visible">
            <span className="font-montserrat text-sm sm:text-xl font-black uppercase tracking-[0.3em] text-milk drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              in
            </span>
            <span className="font-brush text-5xl xs:text-6xl sm:text-8xl md:text-9xl leading-[1.18] text-transparent bg-clip-text bg-gradient-to-b from-milk via-primary to-secondary drop-shadow-[0_6px_25px_rgba(242,101,34,0.7)] py-1">
              Praise
            </span>
            <span className="text-secondary text-2xl sm:text-4xl animate-bounce-slow drop-shadow-[0_2px_10px_rgba(242,101,34,0.8)]">
              ♫
            </span>
          </div>

          {/* Golden & Milk Sunburst Horizon Arc */}
          <div className="mx-auto mt-4 h-1.5 w-48 sm:w-80 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(255,200,59,0.8)]" />
        </div>

        {/* Movement Description (High Contrast Scrim Container: Pure Radiant Milk with Atkinson Gold Accent) */}
        <div className="relative my-5 max-w-2xl mx-auto px-5 py-4 rounded-2xl bg-black/55 backdrop-blur-md border border-milk/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          <p className="text-sm sm:text-base md:text-lg text-milk max-w-2xl mx-auto leading-relaxed font-normal">
            An annual praise and worship evangelism concert hosted by{" "}
            <strong className="text-milk font-extrabold underline decoration-primary/50 underline-offset-4">
              Jerusalem Choir
            </strong>{" "}
            in strategic partnership with{" "}
            <strong className="text-milk font-extrabold underline decoration-primary/50 underline-offset-4">
              Adventist Possibility Ministries
            </strong>{" "}
            dedicated this year to{" "}
            <span className="font-atkinson text-primary font-black tracking-wide drop-shadow-[0_2px_8px_rgba(255,200,59,0.5)]">
              breaking disability barriers
            </span>.
          </p>
        </div>

        {/* FTLOM-Style Floating Shimmering Countdown Pill */}
        <div className="mb-7 animate-fade-in-up">
          <FloatingCountdown targetDate="2026-11-04T18:00:00" />
        </div>

        {/* Dual Signature Liquid CTAs (From FTLOM) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 w-full max-w-lg">
          <LiquidButton
            onClick={() => scrollTo("#experience")}
            variant="primary"
            className="w-full sm:w-auto min-w-[210px]"
          >
            <span>Explore Program</span>
          </LiquidButton>

          <LiquidButton
            href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="w-full sm:w-auto min-w-[210px]"
          >
            <Radio className="w-4 h-4 text-secondary group-hover:text-white animate-pulse" />
            <span>Livestream Channel</span>
          </LiquidButton>
        </div>

        {/* Schedule & Venue Pill Badge (From Official Flyer) */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-2xl sm:rounded-full bg-black/60 backdrop-blur-xl border border-milk/15 shadow-xl max-w-full">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="font-montserrat text-xs sm:text-sm font-extrabold text-milk">
              <strong className="text-primary font-black">4TH – 7TH</strong> NOVEMBER, 2026
            </span>
          </div>

          <span className="hidden sm:inline text-milk/30">•</span>

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
            <span className="text-xs sm:text-sm text-milk/90 font-medium">
              Nov 4–6: 6PM–8PM · Sabbath Nov 7: 8AM–12PM
            </span>
          </div>

          <span className="hidden sm:inline text-milk/30">•</span>

          <div className="flex items-center gap-1.5 text-milk/80 text-xs">
            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="font-bold">Convocation Arena, Rivers State University</span>
          </div>
        </div>
      </div>

      {/* FTLOM-Style Animated Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-4 select-none animate-fade-in-up">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about");
          }}
          className="flex flex-col items-center gap-1.5 text-white/60 hover:text-primary transition-colors cursor-pointer group"
          aria-label="Scroll to about section"
        >
          <div className="w-5 h-9 border-2 border-white/40 group-hover:border-primary rounded-full flex items-start justify-center p-1 transition-colors">
            <div className="w-1.5 h-2 bg-primary rounded-full animate-bounce-slow" />
          </div>
          <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] font-bold">
            Scroll Down
          </span>
        </a>
      </div>
    </section>
  );
}
