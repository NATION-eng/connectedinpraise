import React from "react";
import { useCountdown } from "../../hooks/useCountdown";

export function FloatingCountdown({ targetDate = "2026-11-04T18:00:00", className = "" }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const format = (n) => String(n).padStart(2, "0");

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Outer Floating Glow & Shimmer Glass Pill */}
      <div className="relative bg-black/60 backdrop-blur-2xl rounded-xl xs:rounded-2xl sm:rounded-full px-2.5 xs:px-3.5 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] ring-1 ring-gold/30 hover:ring-primary/60 transition-all duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden">
        {/* Shimmer Light Sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl xs:rounded-2xl sm:rounded-full">
          <div className="absolute -left-1/3 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
        </div>

        {/* Tabular Countdown Grid */}
        <div className="relative z-10 flex items-center gap-1 xs:gap-1.5 sm:gap-3.5 select-none">
          {/* Days */}
          <div className="flex flex-col items-center leading-none min-w-[24px] xs:min-w-[30px] sm:min-w-[40px]">
            <span className="font-montserrat font-black text-base xs:text-lg sm:text-2xl tabular-nums bg-gradient-to-br from-sunburst via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,200,59,0.35)]">
              {format(days)}
            </span>
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-white/70 uppercase tracking-[0.10em] sm:tracking-[0.14em] font-bold mt-0.5 xs:mt-1">
              Days
            </span>
          </div>

          <span className="text-primary/40 font-bold text-xs xs:text-sm sm:text-base">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center leading-none min-w-[24px] xs:min-w-[30px] sm:min-w-[40px]">
            <span className="font-montserrat font-black text-base xs:text-lg sm:text-2xl tabular-nums bg-gradient-to-br from-sunburst via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,200,59,0.35)]">
              {format(hours)}
            </span>
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-white/70 uppercase tracking-[0.10em] sm:tracking-[0.14em] font-bold mt-0.5 xs:mt-1">
              Hours
            </span>
          </div>

          <span className="text-primary/40 font-bold text-xs xs:text-sm sm:text-base">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center leading-none min-w-[24px] xs:min-w-[30px] sm:min-w-[40px]">
            <span className="font-montserrat font-black text-base xs:text-lg sm:text-2xl tabular-nums bg-gradient-to-br from-sunburst via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,200,59,0.35)]">
              {format(minutes)}
            </span>
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-white/70 uppercase tracking-[0.10em] sm:tracking-[0.14em] font-bold mt-0.5 xs:mt-1">
              Min
            </span>
          </div>

          <span className="text-primary/40 font-bold text-xs xs:text-sm sm:text-base">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center leading-none min-w-[24px] xs:min-w-[30px] sm:min-w-[40px]">
            <span className="font-montserrat font-black text-base xs:text-lg sm:text-2xl tabular-nums bg-gradient-to-br from-sunburst via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,200,59,0.35)]">
              {format(seconds)}
            </span>
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-white/70 uppercase tracking-[0.10em] sm:tracking-[0.14em] font-bold mt-0.5 xs:mt-1">
              Sec
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
