import React from "react";
import { ArrowRight, Radio, Sparkles, Heart } from "lucide-react";
import { Waveform } from "../ui/Waveform";

export function CallToAction() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-maroon-deep via-midnight-950 to-maroon-deep border-t border-gold/20">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-neon/15 via-gold/15 to-neon/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Sound Wave */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <Waveform bars={65} className="h-44 w-full" />
      </div>

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6 border border-gold/30 shadow-[0_0_20px_rgba(242,169,0,0.2)]">
          <Sparkles className="w-4 h-4 text-gold-bright" />
          <span className="text-xs uppercase tracking-widest text-gold-bright font-bold">
            Be Part of the Sacred Movement
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-ivory leading-tight mb-6">
          Your Voice Completes the{" "}
          <span className="bg-gradient-to-r from-neon via-gold-bright to-neon bg-clip-text text-transparent gold-text">
            Symphony
          </span>
        </h2>

        <p className="text-base sm:text-lg text-ivory/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Whether you join us physically at the Convocation Arena in Port Harcourt or tune in
          digitally from across the globe — there is an anointed place reserved specifically for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base py-3.5 px-8 cursor-pointer shadow-2xl"
          >
            <Heart className="w-4 h-4 text-maroon-deep" />
            <span>Plan Your Attendance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://youtube.com/@connectedinpraise"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base py-3.5 px-8"
          >
            <Radio className="w-4 h-4 text-neon" />
            <span>Subscribe to Livestream</span>
          </a>
        </div>
      </div>
    </section>
  );
}
