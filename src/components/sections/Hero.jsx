import React from "react";
import { Calendar, MapPin, ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Waveform } from "../ui/Waveform";
import { CountdownUnit } from "../ui/CountdownUnit";
import { useCountdown } from "../../hooks/useCountdown";

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown("2026-11-04T18:00:00");

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background with Ambient Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/35555152/pexels-photo-35555152.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hands raised in diverse worship and praise"
          className="w-full h-full object-cover animate-slow-pan opacity-30 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/90 via-maroon-dark/70 to-maroon-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/80 via-transparent to-maroon-deep/80" />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      {/* Floating Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon/15 rounded-full blur-[110px] animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/15 rounded-full blur-[130px] animate-float pointer-events-none"
        style={{ animationDelay: "2.5s" }}
      />

      {/* Waveform at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-36 z-0 opacity-40 pointer-events-none">
        <Waveform bars={55} className="h-full" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Date & Partnership Tag */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6 border border-gold/30 shadow-[0_0_15px_rgba(242,169,0,0.15)] animate-fade-in">
          <Calendar className="w-4 h-4 text-gold-bright" />
          <span className="text-xs sm:text-sm font-bold text-ivory/90 tracking-wide">
            4–7 NOVEMBER 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" />
          <span className="text-xs sm:text-sm font-semibold text-gold-bright">
            Jerusalem Choir × APM
          </span>
        </div>

        {/* Hero Brand Script Logo */}
        <div className="mb-4">
          <Logo size="hero" />
        </div>

        {/* Powerful Tagline */}
        <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] max-w-4xl mb-6">
          Every Voice. Every Story.
          <br />
          <span className="bg-gradient-to-r from-neon via-gold-bright to-neon bg-clip-text text-transparent gold-text">
            Connected in Praise.
          </span>
        </h1>

        {/* Movement Description */}
        <p className="text-base sm:text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          An annual praise and worship evangelism concert hosted by{" "}
          <span className="text-gold-bright font-semibold">Jerusalem Choir</span> in strategic
          partnership with{" "}
          <span className="text-gold-bright font-semibold">Adventist Possibility Ministries</span> —
          where every person, every ability, and every story belongs.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full max-w-md">
          <button
            onClick={() => scrollTo("#experience")}
            className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 group cursor-pointer text-sm sm:text-base"
          >
            <span>Explore Experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 group cursor-pointer text-sm sm:text-base"
          >
            <HeartHandshake className="w-4 h-4 text-neon" />
            <span>Discover APM Mission</span>
          </button>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full max-w-xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-gold-bright/80 font-bold mb-4">
            The Connection Begins In
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <CountdownUnit value={days} label="Days" />
            <span className="text-gold/40 text-2xl sm:text-3xl font-bold -mt-5">:</span>
            <CountdownUnit value={hours} label="Hours" />
            <span className="text-gold/40 text-2xl sm:text-3xl font-bold -mt-5">:</span>
            <CountdownUnit value={minutes} label="Minutes" />
            <span className="text-gold/40 text-2xl sm:text-3xl font-bold -mt-5">:</span>
            <CountdownUnit value={seconds} label="Seconds" />
          </div>
        </div>

        {/* Venue Information Pill */}
        <div className="inline-flex items-center gap-2 text-ivory/60 text-xs sm:text-sm bg-black/30 border border-gold/15 px-4 py-2 rounded-full">
          <MapPin className="w-4 h-4 text-gold-bright" />
          <span>Convocation Arena, RSU, Port Harcourt · Livestreamed Worldwide</span>
        </div>
      </div>
    </section>
  );
}
