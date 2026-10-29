import React from "react";
import { ArrowRight, Music, Heart, Calendar, MapPin, Sparkles } from "lucide-react";
import { RevealMotion } from "../ui/RevealMotion";
import { useNavigation } from "../../context/NavigationContext";

export function GrandChoirBanner() {
  const { navigate } = useNavigation();

  return (
    <section
      aria-label="Connected in Praise Mass Choir Grand Showcase"
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] bg-[#0E0304] overflow-hidden select-none outline-none group/hero border-b border-primary/20"
    >
      {/* 1. Full-Cover Background Image with Masterviewcel-Style Directional Gradient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src="/images/mass-choir-scrim.jpg"
            alt="Connected in Praise Mass Choir on Stage in Port Harcourt City"
            className="w-full h-full object-cover object-[center_20%] filter brightness-[0.88] lg:brightness-[0.92] group-hover:scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
          />

          {/* Masterviewcel signature gradient scrim overlay:
              Fades from solid dark at bottom/bottom-left into complete 100% clarity at top-center */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0304] via-[#0E0304]/80 via-50% to-transparent lg:bg-gradient-to-tr lg:from-[#0E0304]/98 lg:via-[#0E0304]/65 lg:via-45% lg:to-transparent" />
          
          {/* Subtle warm sunburst ambient radial glow */}
          <div className="absolute bottom-0 left-0 w-[550px] h-[450px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        </div>
      </div>

      {/* 2. Top Luminous Accent Progress Bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-white/15 z-20 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary via-sunburst to-secondary w-full" />
      </div>

      {/* 3. Main Content Dock Aligned to Bottom-Left (Exact Masterviewcel Layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 pt-16 sm:pt-20 lg:pt-24">
        <RevealMotion className="max-w-3xl">
          {/* Eyebrow Badge with Pulsing Dot */}
          <div className="mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/40 text-xs sm:text-sm font-black font-montserrat uppercase tracking-wider backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Jerusalem Choir ✕ APM Inclusion</span>
            </span>
          </div>

          {/* Huge Masterviewcel-Style Heading */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-montserrat tracking-tight leading-[1.15] sm:leading-[1.12] mb-3 sm:mb-5 drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]">
            One Sacred Accord.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sunburst to-secondary">
              Breaking Every Disability Barrier.
            </span>
          </h2>

          {/* Narrative Paragraph */}
          <p className="text-white/90 text-xs xs:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)] font-sans">
            Witness over 100 consecrated voices united on stage in Port Harcourt City. In strategic partnership with
            Adventist Possibility Ministries, Connected in Praise brings certified sign language interpreters, stage
            wheelchair ramps, and total accessibility to RSU Convocation Arena—so every heart worships without hindrance.
          </p>

          {/* Dual Call-To-Action Buttons (Masterviewcel Style) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => navigate("/donate")}
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary via-sunburst to-secondary text-obsidian px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-black font-montserrat text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl hover:shadow-[0_4px_25px_rgba(255,200,59,0.5)] active:scale-95 cursor-pointer border border-primary/40"
            >
              <span>Support APM Inclusion</span>
              <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                <ArrowRight className="w-3.5 h-3.5 text-obsidian" />
              </span>
            </button>

            {/* Secondary Action Link */}
            <button
              type="button"
              onClick={() => navigate("/choir")}
              className="inline-flex items-center justify-center space-x-3 text-white hover:text-primary font-bold text-xs sm:text-sm font-montserrat uppercase tracking-wider transition-colors group cursor-pointer py-2 sm:py-0"
            >
              <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-md shadow-md flex items-center justify-center border border-white/30 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:scale-105 transition-all shrink-0">
                <Music className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-primary transition-colors" />
              </span>
              <span className="underline decoration-white/40 group-hover:decoration-primary underline-offset-4 font-bold tracking-wide">
                Explore Choir Ministry
              </span>
            </button>
          </div>
        </RevealMotion>
      </div>

      {/* 4. Masterviewcel Floating Bottom-Right Event Anchor Badge */}
      <div className="hidden sm:flex absolute bottom-5 right-5 sm:bottom-8 sm:right-12 z-20 items-center bg-black/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/30 overflow-hidden divide-x divide-white/15 text-white">
        <div className="px-4 py-2.5 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-xs font-montserrat font-bold text-white tracking-wide">
            4TH – 7TH NOV 2026
          </span>
        </div>

        <div className="px-4 py-2.5 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-secondary" />
          <span className="text-xs font-montserrat font-medium text-white/80">
            RSU Arena, Port Harcourt
          </span>
        </div>

        <div className="px-4 py-2.5 flex items-center gap-1.5 font-montserrat font-bold text-xs text-emerald-400 bg-emerald-500/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>100% Inclusive</span>
        </div>
      </div>
    </section>
  );
}
