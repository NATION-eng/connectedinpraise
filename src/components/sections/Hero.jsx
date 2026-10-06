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
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-16 bg-obsidian"
    >
      {/* Background with Radiant Sunburst Flyer Art */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/cip-sunburst-bg.jpg"
          alt="Connected in Praise Celestial Sunburst Glow"
          className="w-full h-full object-cover object-center scale-105 animate-slow-pan filter brightness-95 contrast-110"
        />
        {/* Sunburst Gradient Blending into Rich Mahogany and Velvet Obsidian */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-mahogany/40 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-obsidian/80" />
      </div>

      {/* Ambient Pulsing Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-primary/15 rounded-full blur-[150px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[130px] animate-pulse-glow-slow pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        {/* Concentric Decorative Aura Rings */}
        <div className="relative mb-3">
          <AuraRings size="sm" className="opacity-40" />

          {/* Top Collaboration Badge (From Flyer) */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/60 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 border border-primary/30 shadow-[0_0_25px_rgba(255,200,59,0.25)] animate-fade-in select-none">
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
          <span className="font-montserrat text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.28em] text-secondary drop-shadow-[0_2px_12px_rgba(242,101,34,0.4)]">
            PRESENTS
          </span>
          <h2 className="font-montserrat font-black text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.2em] text-white mt-1 drop-shadow-md">
            PH CITY MEGA MUSICAL EXPERIENCE
          </h2>
        </div>

        {/* Title: Connected in Praise (High-Impact Brush Wordmark) */}
        <div className="relative my-2 sm:my-4 select-none animate-fade-in-scale">
          {/* Floating Musical Clef from Flyer */}
          <span className="absolute -top-4 sm:-top-6 -left-6 sm:-left-10 text-primary text-3xl sm:text-5xl font-black drop-shadow-[0_4px_16px_rgba(255,200,59,0.6)] animate-float">
            𝄞
          </span>

          <h1 className="font-brush text-6xl sm:text-8xl md:text-9xl leading-[1.05] tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-sunburst via-primary to-secondary drop-shadow-[0_6px_25px_rgba(242,101,34,0.5)]">
            Connected
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 sm:-mt-5">
            <span className="font-montserrat text-sm sm:text-xl font-black uppercase tracking-[0.3em] text-white/80">
              in
            </span>
            <span className="font-brush text-5xl sm:text-7xl md:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-sunburst via-primary to-secondary drop-shadow-[0_6px_25px_rgba(242,101,34,0.5)]">
              Praise
            </span>
            <span className="text-secondary text-2xl sm:text-4xl animate-bounce-slow">
              ♫
            </span>
          </div>

          {/* Golden Sunburst Horizon Arc */}
          <div className="mx-auto mt-2 h-1.5 w-48 sm:w-80 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(255,200,59,0.8)]" />
        </div>

        {/* Movement Description (White with White Highlights & Gold Barrier Breakthrough) */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto my-5 leading-relaxed font-normal">
          An annual praise and worship evangelism concert hosted by{" "}
          <strong className="text-white font-black">Jerusalem Choir</strong> in strategic
          partnership with{" "}
          <strong className="text-white font-black">Adventist Possibility Ministries</strong>{" "}
          dedicated this year to{" "}
          <span className="font-atkinson text-primary font-black tracking-wide">
            breaking disability barriers
          </span>.
        </p>

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
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-2xl sm:rounded-full bg-black/60 backdrop-blur-xl border border-primary/30 shadow-xl max-w-full">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="font-montserrat text-xs sm:text-sm font-extrabold text-white">
              <strong className="text-primary font-black">4TH – 7TH</strong> NOVEMBER, 2026
            </span>
          </div>

          <span className="hidden sm:inline text-white/30">•</span>

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
            <span className="text-xs sm:text-sm text-white/90 font-medium">
              Nov 4–6: 6PM–8PM · Sabbath Nov 7: 8AM–12PM
            </span>
          </div>

          <span className="hidden sm:inline text-white/30">•</span>

          <div className="flex items-center gap-1.5 text-white/80 text-xs">
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
