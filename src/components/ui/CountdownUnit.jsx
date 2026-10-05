import React from "react";

export function CountdownUnit({ value, label }) {
  const formatted = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
      {/* Commanding Countdown Display Tile */}
      <div className="relative w-full aspect-[1/1.1] sm:aspect-square rounded-2xl sm:rounded-3xl glass-card-warm flex flex-col items-center justify-center p-2 sm:p-4 border-2 border-gold/40 shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(242,169,0,0.25)] group transition-all duration-300 hover:scale-105 hover:border-gold-bright overflow-hidden">
        {/* Top Metallic Sheen */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        {/* Ambient Internal Glow */}
        <div className="absolute inset-0 bg-radial from-gold/10 via-transparent to-transparent pointer-events-none" />

        {/* Massive Bold Digit */}
        <span className="font-syne font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tabular-nums leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gold-bright to-neon drop-shadow-[0_4px_16px_rgba(255,196,0,0.5)] select-none">
          {formatted}
        </span>

        {/* Subtle Bottom Accent Glow Line */}
        <div className="absolute bottom-0 left-3 right-3 h-1 rounded-full bg-gradient-to-r from-neon via-gold-bright to-neon opacity-70 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#FFC400]" />
      </div>

      {/* Label Underneath */}
      <span className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-ivory/80 font-black text-center select-none">
        {label}
      </span>
    </div>
  );
}
