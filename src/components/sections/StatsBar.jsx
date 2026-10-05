import React from "react";
import { Calendar, Eye, Heart, Sparkles } from "lucide-react";

const stats = [
  {
    icon: <Calendar className="w-6 h-6 text-gold-bright" />,
    value: "4",
    label: "Days of Uninterrupted Worship & Fellowship",
  },
  {
    icon: <Eye className="w-6 h-6 text-gold-bright" />,
    value: "100%",
    label: "Accessibility & Barrier-Free Inclusion",
  },
  {
    icon: <Heart className="w-6 h-6 text-neon" />,
    value: "1",
    label: "Sacred Vision: Embracing Every Ability",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-gold-bright" />,
    value: "Infinite",
    label: "Reasons to Lift Our Voices in Praise",
  },
];

export function StatsBar() {
  return (
    <section className="relative py-14 md:py-20 border-y border-gold/15 bg-gradient-to-b from-maroon-deep to-midnight-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 md:gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full group-hover:bg-gold/35 transition-all" />
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-card-warm flex items-center justify-center border border-gold/30 shadow-md">
                  {stat.icon}
                </div>
              </div>
              <div className="font-cinzel font-black text-2xl sm:text-4xl md:text-5xl text-ivory tracking-tight truncate max-w-full">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm text-ivory/70 mt-1.5 max-w-[170px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
