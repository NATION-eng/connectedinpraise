import React from "react";

export function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 glass-card-warm flex items-center justify-center gold-border rounded-2xl group transition-transform duration-300 hover:scale-105">
        <span className="font-display font-bold text-2xl sm:text-3xl text-gold-bright gold-text tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-ivory/60 font-bold">
        {label}
      </span>
    </div>
  );
}
