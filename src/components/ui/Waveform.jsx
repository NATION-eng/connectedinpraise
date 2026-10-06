import React, { useMemo } from "react";

export const Waveform = React.memo(function Waveform({ bars = 40, className = "" }) {
  const barsData = useMemo(() => {
    return Array.from({ length: bars }, (_, i) => {
      const heightPercent = 20 + Math.sin(i * 0.45) * 35 + ((i % 5) * 8);
      return {
        height: `${Math.min(95, Math.max(15, heightPercent))}%`,
        animationDelay: `${(i % 15) * 0.08}s`,
        animationDuration: `${1.1 + (i % 7) * 0.15}s`,
      };
    });
  }, [bars]);

  return (
    <div
      className={`flex items-center justify-center gap-1 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {barsData.map((bar, i) => (
        <div
          key={i}
          className="w-1 bg-gradient-to-t from-neon/20 via-gold/40 to-gold-bright/70 rounded-full animate-waveform"
          style={bar}
        />
      ))}
    </div>
  );
});
