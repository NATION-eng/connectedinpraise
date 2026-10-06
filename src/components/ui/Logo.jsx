import React from "react";

export function Logo({ size = "nav", className = "" }) {
  if (size === "nav") {
    return (
      <div className={`inline-flex items-center select-none group ${className}`} aria-label="Connected in Praise">
        <img
          src="/images/cip-official-logo.png"
          alt="Connected in Praise"
          className="h-8 xs:h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,200,59,0.35)] group-hover:scale-105 transition-transform duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
        />
      </div>
    );
  }

  if (size === "footer") {
    return (
      <div className={`inline-flex items-center gap-2.5 select-none group ${className}`} aria-label="Connected in Praise">
        <img
          src="/images/cip-official-logo.png"
          alt="Connected in Praise"
          className="h-14 xs:h-16 sm:h-20 w-auto object-contain drop-shadow-[0_4px_16px_rgba(255,200,59,0.4)] group-hover:scale-105 transition-transform duration-500 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
        />
      </div>
    );
  }

  // default / large
  return (
    <div className={`inline-flex items-center select-none group ${className}`} aria-label="Connected in Praise">
      <img
        src="/images/cip-official-logo.png"
        alt="Connected in Praise"
        className="h-16 xs:h-20 sm:h-24 w-auto object-contain drop-shadow-[0_6px_20px_rgba(255,200,59,0.4)] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
      />
    </div>
  );
}
