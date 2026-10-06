import React from "react";
import { Calendar, Eye, Heart, Sparkles } from "lucide-react";

const stats = [
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    value: "4",
    label: "Days of Uninterrupted Mega Worship",
  },
  {
    icon: <Eye className="w-6 h-6 text-secondary" />,
    value: "100%",
    label: "Barrier-Free Disability Inclusion",
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    value: "1",
    label: "Sacred Vision: Embracing Every Ability",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-secondary" />,
    value: "Infinite",
    label: "Reasons to Lift Our Voices in Praise",
  },
];

export function StatsBar() {
  return (
    <section className="relative py-14 sm:py-20 border-y border-primary/20 bg-gradient-to-b from-obsidian via-mahogany/30 to-obsidian overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-black/40 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-white/10 hover:border-primary/40 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-br from-sunburst via-primary to-secondary bg-clip-text text-transparent tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/70 mt-2 max-w-[190px] leading-snug font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
