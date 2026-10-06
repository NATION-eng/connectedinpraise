import React from "react";
import { Calendar, Eye, Heart, Sparkles } from "lucide-react";
import { CounterNumber } from "../ui/CounterNumber";
import { RevealMotion, StaggerContainer, StaggerItem } from "../ui/RevealMotion";

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
    <section className="relative py-14 sm:py-20 border-y border-primary/20 bg-gradient-to-b from-[#0D0404] via-[#2A0608]/40 to-[#0D0404] overflow-hidden">
      {/* Radiant Sunburst Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <div
                className="bg-black/55 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-milk/10 hover:border-primary/50 flex flex-col items-center text-center group transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,200,59,0.2)] shadow-lg"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-milk/15 mb-4 group-hover:scale-110 group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-700 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  {stat.icon}
                </div>
                <div className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-br from-milk via-primary to-secondary bg-clip-text text-transparent tracking-tight">
                  <CounterNumber value={stat.value} duration={2200} />
                </div>
                <div className="text-xs sm:text-sm text-milk/75 mt-2 max-w-[190px] leading-snug font-semibold group-hover:text-milk transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
