import React from "react";
import { Calendar, MapPin, ArrowRight, HeartHandshake, Clock, Radio } from "lucide-react";
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
      {/* Background with Real CIP MEDIA Archive Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-worship.jpg"
          alt="Hands raised in worship at Connected in Praise Convocation Arena"
          className="w-full h-full object-cover animate-slow-pan opacity-35 filter brightness-85 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/95 via-maroon-dark/75 to-maroon-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/90 via-transparent to-maroon-deep/90" />
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
        {/* Date & Partnership Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6 border border-gold/40 shadow-[0_0_20px_rgba(242,169,0,0.25)] animate-fade-in">
          <Calendar className="w-4 h-4 text-gold-bright" />
          <span className="text-xs sm:text-sm font-extrabold text-ivory tracking-wide">
            4–7 NOVEMBER 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" />
          <span className="text-xs sm:text-sm font-bold text-gold-bright">
            Jerusalem Choir × APM
          </span>
        </div>

        {/* Hero Brand Script Logo */}
        <div className="mb-4">
          <Logo size="hero" />
        </div>

        {/* Powerful Tagline with Bolder Weight */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] max-w-4xl mb-6">
          Every Voice. Every Story.
          <br />
          <span className="bg-gradient-to-r from-neon via-gold-bright to-neon bg-clip-text text-transparent gold-text font-black">
            Connected in Praise.
          </span>
        </h1>

        {/* Movement Description */}
        <p className="text-base sm:text-lg md:text-xl text-ivory/90 max-w-2xl mx-auto mb-6 leading-relaxed font-semibold">
          An annual praise and worship evangelism concert hosted by{" "}
          <span className="text-gold-bright font-extrabold">Jerusalem Choir</span> in strategic
          partnership with{" "}
          <span className="text-gold-bright font-extrabold">Adventist Possibility Ministries</span> —
          dedicated this year to <span className="underline decoration-neon decoration-2 font-black text-ivory">breaking disability barriers</span>.
        </p>

        {/* Time schedule badge */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold-bright bg-black/40 border border-gold/30 px-4 py-1.5 rounded-full mb-8">
          <Clock className="w-3.5 h-3.5 text-neon" />
          <span>Nov 4–6: 6:00 PM – 8:00 PM · Sabbath Nov 7: 8:00 AM – 12:00 PM</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-lg">
          <button
            onClick={() => scrollTo("#experience")}
            className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 group cursor-pointer text-sm sm:text-base font-extrabold py-3.5 px-7"
          >
            <span>Explore Program</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://youtube.com/@connectedinpraise?si=JpVeFaqQFqMPO_fL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 group cursor-pointer text-sm sm:text-base font-extrabold py-3 px-6"
          >
            <Radio className="w-4 h-4 text-neon animate-pulse" />
            <span>Livestream Channel</span>
          </a>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full max-w-xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-widest text-gold-bright font-black mb-4">
            The Connection Begins In
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <CountdownUnit value={days} label="Days" />
            <span className="text-gold/50 text-2xl sm:text-3xl font-black -mt-5">:</span>
            <CountdownUnit value={hours} label="Hours" />
            <span className="text-gold/50 text-2xl sm:text-3xl font-black -mt-5">:</span>
            <CountdownUnit value={minutes} label="Minutes" />
            <span className="text-gold/50 text-2xl sm:text-3xl font-black -mt-5">:</span>
            <CountdownUnit value={seconds} label="Seconds" />
          </div>
        </div>

        {/* Accurate Venue Location Pill */}
        <div className="inline-flex items-center gap-2 text-ivory/90 text-xs sm:text-sm font-bold bg-black/40 border border-gold/30 px-5 py-2.5 rounded-full shadow-lg">
          <MapPin className="w-4 h-4 text-neon flex-shrink-0" />
          <span>Convocation Arena, Rivers State University, Oroworukwo, Port Harcourt</span>
        </div>
      </div>
    </section>
  );
}
