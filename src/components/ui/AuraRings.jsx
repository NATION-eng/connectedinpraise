import React from "react";

export function AuraRings({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-[260px] h-[260px]",
    md: "w-[380px] h-[380px] sm:w-[480px] sm:h-[480px]",
    lg: "w-[500px] h-[500px] sm:w-[680px] sm:h-[680px]",
  }[size] || "w-[400px] h-[400px]";

  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none ${sizeClasses} ${className}`}
      aria-hidden="true"
    >
      {/* Outer Ring: Slow Clockwise Rotation */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-rotate" />

      {/* Middle Ring: Dashed / Stippled Counter-Clockwise Rotation */}
      <div className="absolute inset-6 sm:inset-10 rounded-full border border-dashed border-secondary/25 animate-rotate-reverse" />

      {/* Inner Accent Ring */}
      <div className="absolute inset-14 sm:inset-20 rounded-full border border-primary/30 animate-rotate" />

      {/* Central Ambient Glow */}
      <div className="absolute inset-20 sm:inset-28 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
    </div>
  );
}
