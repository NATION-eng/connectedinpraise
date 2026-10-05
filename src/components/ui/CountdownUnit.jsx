import React from "react";

export function CountdownUnit({ value, label }) {
  const formatted = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center flex-1 w-full max-w-[110px] sm:max-w-[135px] md:max-w-[150px]">
      {/* Soothing, Candlelit Sacred Glass Tile */}
      <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl glass-card-warm flex flex-col items-center justify-center p-1.5 sm:p-4 border border-gold/35 shadow-[0_8px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(242,169,0,0.18)] group transition-all duration-500 hover:scale-[1.04] hover:border-gold/70 hover:shadow-[0_12px_36px_rgba(0,0,0,0.7),0_0_35px_rgba(242,169,0,0.3)] overflow-hidden">
        {/* Soft Heavenly Luster */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/12 via-gold/5 to-transparent pointer-events-none" />

        {/* Ambient Sanctuary Warm Glow */}
        <div className="absolute inset-0 bg-radial from-gold/15 via-gold/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Unique, Soothing Marcellus Digits */}
        <span className="font-marcellus text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl tabular-nums leading-none tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF7] via-[#FCE494] to-[#E3A32C] drop-shadow-[0_2px_14px_rgba(255,200,80,0.4)] select-none">
          {formatted}
        </span>

        {/* Soft Golden Horizon Bar */}
        <div className="absolute bottom-1 sm:bottom-2 left-2 sm:left-4 right-2 sm:right-4 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-gold-bright/60 to-transparent opacity-60 group-hover:opacity-100 group-hover:via-gold-bright transition-all duration-500" />
      </div>

      {/* Graceful, Tranquil Label */}
      <span className="mt-1.5 sm:mt-3 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-ivory/75 group-hover:text-gold-bright transition-colors select-none text-center">
        {label}
      </span>
    </div>
  );
}
