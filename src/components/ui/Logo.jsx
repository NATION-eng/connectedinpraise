import React from "react";
import { Sparkles } from "lucide-react";

export function Logo({ size = "nav" }) {
  const isHero = size === "hero";

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${
        isHero ? "gap-1" : "gap-0"
      }`}
      aria-label="Connected in Praise"
    >
      <div className={`relative flex items-center justify-center ${isHero ? "mb-2" : "mb-0.5"}`}>
        <span
          className={`font-script leading-none text-transparent bg-clip-text bg-gradient-to-b from-gold-bright via-gold to-neon transition-transform duration-300 ${
            isHero ? "text-5xl sm:text-6xl md:text-7xl" : "text-[1.45rem] md:text-[1.7rem]"
          }`}
        >
          Connected
        </span>
        {isHero && (
          <Sparkles className="absolute w-5 h-5 text-gold-bright -right-8 top-1 animate-pulse" />
        )}
      </div>

      <div className={`flex items-center ${isHero ? "gap-3" : "gap-1.5"}`}>
        <span
          className={`font-script leading-none text-gold-bright transition-colors duration-300 ${
            isHero ? "text-4xl sm:text-5xl md:text-6xl" : "text-[1.2rem] md:text-[1.35rem]"
          }`}
        >
          in Praise
        </span>
      </div>

      {isHero && (
        <div className="mt-2 h-1 w-44 sm:w-56 rounded-full bg-gradient-to-r from-neon via-gold-bright to-neon rotate-[-3deg] shadow-[0_0_15px_rgba(255,196,0,0.6)]" />
      )}
    </div>
  );
}
